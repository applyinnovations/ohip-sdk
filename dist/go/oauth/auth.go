package oauth

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

type APICredential struct {
	Username string
	Password string
}

type AuthClientParams struct {
	Domain               string
	AppKey               string
	APICredentials       []APICredential
	MaxBackOffTimeout    int
	MaxBackOffTimeToWait int
	PowerBackOffTimeout  int
	BaseBackOffTimeout   int
}

func NewAuthClient(params AuthClientParams) *AuthClient {
	maxBackOffTimeout := 60 * 60 * 1000
	maxBackOffTimeoutToWait := 10 * 1000
	powerBackOffTimeout := 4
	baseBackOffTimeout := 100
	if params.MaxBackOffTimeout != 0 {
		maxBackOffTimeout = params.MaxBackOffTimeout
	}
	if params.MaxBackOffTimeToWait != 0 {
		maxBackOffTimeoutToWait = params.MaxBackOffTimeToWait
	}
	if params.PowerBackOffTimeout != 0 {
		powerBackOffTimeout = params.PowerBackOffTimeout
	}
	if params.BaseBackOffTimeout != 0 {
		baseBackOffTimeout = params.BaseBackOffTimeout
	}
	return &AuthClient{
		host:                 params.Domain,
		appKey:               params.AppKey,
		apiCredentials:       params.APICredentials,
		maxBackOffTimeout:    maxBackOffTimeout,
		maxBackOffTimeToWait: maxBackOffTimeoutToWait,
		powerBackOffTimeout:  powerBackOffTimeout,
		baseBackOffTimeout:   baseBackOffTimeout,
	}
}

type AuthClient struct {
	apiCredentials        []APICredential
	host                  string
	appKey                string
	token                 string
	refreshToken          string
	mutex                 sync.Mutex
	backoffTimeout        int64
	authTries             int
	activeCredentialIndex int
	maxBackOffTimeout     int
	maxBackOffTimeToWait  int
	powerBackOffTimeout   int
	baseBackOffTimeout    int
}

func (c *AuthClient) HttpMiddleware(req *http.Request) error {
	err := updateToken(c)
	if err != nil {
		return err
	}

	req.Header["Authorization"] = []string{"Bearer " + c.token}

	return nil
}

func (c *AuthClient) GetToken() (string, error) {
	err := updateToken(c)

	return c.token, err
}

func (c *AuthClient) SetToken(token string) {
	if c.token == token {
		return
	}

	expiresAt := getJWTExpiryDate(token)

	if expiresAt.Before(time.Now()) {
		// token is already expired
		return
	}

	if c.token != "" && expiresAt.Before(getJWTExpiryDate(c.token)) {
		// token is not expired but it will expire before the current token
		return
	}

	c.token = token
}

func updateToken(c *AuthClient) error {
	c.mutex.Lock()
	defer c.mutex.Unlock()
	if c.token == "" || isAuthTokenExpired(c) {
		err := requestNewAuthToken(c)
		return err
	}
	return nil
}

func isAuthTokenExpired(c *AuthClient) bool {
	return time.Now().After(getJWTExpiryDate(c.token))
}

func incrementActiveCrendentialIndex(c *AuthClient) {
	if c.activeCredentialIndex+1 >= len(c.apiCredentials) {
		c.activeCredentialIndex = 0
	} else {
		c.activeCredentialIndex = c.activeCredentialIndex + 1
	}
}

func shouldBackOff(c *AuthClient) bool {
	if c.authTries == 0 {
		return false
	}
	return time.Now().UnixMilli() < c.backoffTimeout
}

func clearTokens(c *AuthClient) {
	c.token = ""
}

func requestNewAuthToken(c *AuthClient) (err error) {
	if shouldBackOff(c) {
		backOffMsRemaining := c.backoffTimeout - time.Now().UnixMilli()
		if backOffMsRemaining > int64(c.maxBackOffTimeToWait) {
			return fmt.Errorf("Failed to get authentication token, max backoff timeout exceeded of %d ms\n", c.maxBackOffTimeToWait)
		} else {
			fmt.Fprintf(os.Stderr, "Backing off for %d ms\n", int(backOffMsRemaining))
			time.Sleep(time.Duration(backOffMsRemaining) * time.Millisecond)
			return requestNewAuthToken(c)
		}
	} else {
		fmt.Printf("Requesting authentication token using credentials[%d]\n", c.activeCredentialIndex)
		c.authTries++
		incrementActiveCrendentialIndex(c)
		clearTokens(c)
		grantType := "password"
		configuration := NewConfiguration()
		configuration.Host = c.host
		configuration.Scheme = "https"
		configuration.DefaultHeader = map[string]string{
			"x-app-key": c.appKey,
		}
		apiClient := NewAPIClient(configuration)
		// wait maximum of 5000ms to respond
		ctx, _ := context.WithTimeout(context.Background(), 5000*time.Millisecond)
		resp, _, err := apiClient.
			AuthenticationAPI.
			GetToken(ctx).
			XAppKey(c.appKey).
			GrantType(grantType).
			Username(c.apiCredentials[c.activeCredentialIndex].Username).
			Password(c.apiCredentials[c.activeCredentialIndex].Password).
			Execute()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Failed to get new authentication token after %d attemps: %v \n", c.authTries, err)
			setBackoffTimeout(c)
			return requestNewAuthToken(c)
		}
		setTokenHeaders(c, *resp)
		c.authTries = 0
	}
	return nil
}

func setTokenHeaders(c *AuthClient, response OAuth2TokenResponse) {
	c.token = response.AccessToken
}

func setBackoffTimeout(c *AuthClient) {
	credLength := len(c.apiCredentials)
	if c.activeCredentialIndex != (credLength - 1) {
		return
	}
	delay := int64(math.Min(
		float64(c.baseBackOffTimeout)*math.Pow(float64(c.powerBackOffTimeout), math.Floor(float64(c.authTries/credLength))),
		float64(c.maxBackOffTimeout),
	))
	if delay == int64(c.maxBackOffTimeout) {
		fmt.Fprintf(os.Stderr, "Max backoff timeout reached %d ms\n", c.maxBackOffTimeout)
	}
	c.backoffTimeout = time.Now().UnixMilli() + delay
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
