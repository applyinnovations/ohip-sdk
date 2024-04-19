package oauth

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"math"
	"net/http"
	"strings"
	"sync"
	"time"
)

const MAX_MS = 10 * 1000
const MAX_RETRIES = 7

type OhipCredential struct {
	Username string
	Password string
}

type NewOhipCredentialsProviderParams struct {
	Host        string
	AppKey      string
	Credentials []OhipCredential
}

type OhipCredentialsProvider struct {
	authenticating sync.Mutex
	ohip           *AuthenticationAPIService
	credentials    []OhipCredential
	appKey         string
	accessToken    string
}

func NewOhipCredentialsProvider(params NewOhipCredentialsProviderParams) *OhipCredentialsProvider {
	configuration := NewConfiguration()
	configuration.Host = params.Host
	configuration.Scheme = "https"
	configuration.DefaultHeader = map[string]string{
		"x-app-key": params.AppKey,
	}
	apiClient := NewAPIClient(configuration)

	return &OhipCredentialsProvider{
		ohip:        apiClient.AuthenticationAPI,
		credentials: params.Credentials,
		appKey:      params.AppKey,
	}
}

func (c *OhipCredentialsProvider) AuthenticationMiddleware(req *http.Request) error {
	c.authenticating.Lock()
	defer c.authenticating.Unlock()

	if c.accessToken == "" || isAccessTokenExpired(c.accessToken) {
		err := c.renewCredentials(0)
		if err != nil {
			return nil
		}
	}

	req.Header["Authorization"] = []string{"Bearer " + c.accessToken}

	return nil
}

func (c *OhipCredentialsProvider) SetToken(token string) {
	if c.accessToken == token {
		return
	}

	if isAccessTokenExpired(token) {
		// token is already expired
		return
	}

	if c.accessToken != "" && getJWTExpiryDate(token).Before(getJWTExpiryDate(c.accessToken)) {
		// token is not expired but it will expire before the current token
		return
	}

	c.accessToken = token
}

func (c *OhipCredentialsProvider) renewCredentials(retryCount int) error {
	retryPeriod := math.Pow(float64(retryCount), 2) * 100
	time.Sleep(time.Duration(retryPeriod) * time.Millisecond)

	credential := c.credentials[retryCount%len(c.credentials)]
	accessToken, err := c.getAccessToken(credential)
	if err != nil {
		if retryCount < MAX_RETRIES {
			newRetryCount := retryCount + 1
			fmt.Printf("OHIP_AUTH_ERR: %s\n", err.Error())
			fmt.Printf("OHIP_LOG: attempting %d retry\n", newRetryCount)
			return c.renewCredentials(newRetryCount)
		}

		return errors.New(
			fmt.Sprintf("OHIP_AUTH_ERR: maximum retry attempts exceeded"),
		)
	}

	c.accessToken = accessToken

	return nil
}

func (c *OhipCredentialsProvider) getAccessToken(credential OhipCredential) (string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), MAX_MS*time.Millisecond)
	defer cancel()

	resp, _, err := c.ohip.GetToken(ctx).
		XAppKey(c.appKey).
		GrantType("password").
		Username(credential.Username).
		Password(credential.Password).
		Execute()

	if ctx.Err() != nil {
		err = ctx.Err()
	}

	if err == nil && resp.GetAccessToken() == "" {
		fmt.Println("OHIP_AUTH_ERR: access token missing from response")
	}

	return resp.GetAccessToken(), err
}

func isAccessTokenExpired(accessToken string) bool {
	return time.Now().After(getJWTExpiryDate(accessToken))
}

func getJWTExpiryDate(token string) time.Time {
	// Split the token into its three parts: header, payload, and signature
	parts := strings.Split(token, ".")

	if len(parts) < 2 {
		return time.Time{}
	}

	// Decode the payload (second part)
	payload, err := base64.RawURLEncoding.DecodeString(parts[1])
	if err != nil {
		return time.Time{}
	}

	// Unmarshal the payload into a map
	var claims OhipJWT
	if err := json.Unmarshal(payload, &claims); err != nil {
		return time.Time{}
	}

	return time.Unix(claims.ExpiresAt, 0)
}

type OhipJWT struct {
	ExpiresAt int64 `json:"exp"`
}
