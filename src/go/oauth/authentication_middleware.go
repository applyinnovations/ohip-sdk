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

const AUTHENTICATION_TIMEOUT = 10 * time.Second
const MAX_RETRIES = 7
const TOKEN_EXPIRY_BUFFER = 300 * time.Second

type OhipCredential struct {
	Username string
	Password string
}

type GrantTypeEnum string

const (
	GrantTypePassword          GrantTypeEnum = "password"
	GrantTypeClientCredentials GrantTypeEnum = "client_credentials"
)

type NewOhipCredentialsProviderParams struct {
	Host         string
	AppKey       string
	Credentials  []OhipCredential
	GrantType    GrantTypeEnum
	Scope        *string
	EnterpriseId *string
}

type OhipCredentialsProvider struct {
	authenticating *TimeoutMutex
	ohip           *AuthenticationAPIService
	credentials    []OhipCredential
	appKey         string
	accessToken    string
	grantType      GrantTypeEnum
	scope          *string
	enterpriseId   *string
}

func NewOhipCredentialsProvider(params NewOhipCredentialsProviderParams) *OhipCredentialsProvider {
	configuration := NewConfiguration()
	configuration.Host = params.Host
	configuration.Scheme = "https"
	apiClient := NewAPIClient(configuration)

	if params.GrantType == GrantTypeClientCredentials {
		if params.EnterpriseId == nil {
			fmt.Println("GrantTypeClientCredentials requires enterpriseId")
			return nil
		}
		if params.Scope == nil {
			fmt.Println("GrantTypeClientCredentials requires enterpriseId")
			return nil
		}
	}

	return &OhipCredentialsProvider{
		authenticating: &TimeoutMutex{},
		ohip:           apiClient.AuthenticationAPI,
		grantType:      params.GrantType,
		credentials:    params.Credentials,
		appKey:         params.AppKey,
		enterpriseId:   params.EnterpriseId,
		scope:          params.Scope,
	}
}

func (c *OhipCredentialsProvider) AuthenticationMiddleware(req *http.Request) error {
	err := c.loadToken(false)
	if err != nil {
		return err
	}

	req.Header["Authorization"] = []string{"Bearer " + c.accessToken}

	return nil
}

func (c *OhipCredentialsProvider) GetAccessToken(forceGetNewToken bool) (string, error) {
	err := c.loadToken(forceGetNewToken)

	return c.accessToken, err
}

func (c *OhipCredentialsProvider) loadToken(skipExpiryCheck bool) error {
	err := c.authenticating.Lock(AUTHENTICATION_TIMEOUT)
	if err != nil {
		return errors.New("OHIP_AUTH_ERR: timeout reached while attempting to authenticate")
	}
	defer c.authenticating.Unlock()

	if c.accessToken == "" || skipExpiryCheck || isAccessTokenExpired(c.accessToken) {
		err := c.renewCredentials(0)
		if err != nil {
			return err
		}
	}

	return nil
}

func (c *OhipCredentialsProvider) SetAccessToken(accessToken string) {
	if c.accessToken == accessToken {
		return
	}

	if isAccessTokenExpired(accessToken) {
		// token is already expired
		return
	}

	if c.accessToken != "" && getJWTExpiryDate(accessToken).Before(getJWTExpiryDate(c.accessToken)) {
		// token is not expired but it will expire before the current token
		return
	}

	c.accessToken = accessToken
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
			fmt.Printf("OHIP_LOG: used credential[%d] with username: %s\n", retryCount, credential.Username)
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
	ctx := context.Background()

	client := c.ohip.
		GetToken(ctx).
		XAppKey(c.appKey).
		Username(credential.Username).
		Password(credential.Password).
		GrantType(string(c.grantType))

	if c.grantType == GrantTypeClientCredentials {
		client = client.
			EnterpriseId(*c.enterpriseId).
			Scope(*c.scope)
	}

	resp, _, err := client.
		Execute()

	if err == nil && resp.GetAccessToken() == "" {
		fmt.Println("OHIP_AUTH_ERR: access token missing from response")
	}

	return resp.GetAccessToken(), err
}

func isAccessTokenExpired(accessToken string) bool {
	return time.Now().Add(TOKEN_EXPIRY_BUFFER).After(getJWTExpiryDate(accessToken))
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

type TimeoutMutex struct {
	mutex sync.Mutex
}

func (tm *TimeoutMutex) Lock(timeout time.Duration) error {
	ch := make(chan struct{}, 1)
	go func() {
		tm.mutex.Lock()
		ch <- struct{}{}
		close(ch)
	}()

	select {
	case <-ch:
		return nil // Lock acquired
	case <-time.After(timeout):
		return errors.New("timed out") // Timed out
	}
}

func (tm *TimeoutMutex) Unlock() {
	tm.mutex.Unlock()
}
