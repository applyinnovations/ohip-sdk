package oauth

import (
	"encoding/base64"
	"fmt"
	"testing"
	"time"
)

func jwtWithExpiry(expiry time.Time) string {
	header := base64.RawURLEncoding.EncodeToString([]byte(`{"alg":"none"}`))
	payload := base64.RawURLEncoding.EncodeToString([]byte(fmt.Sprintf(`{"exp":%d}`, expiry.Unix())))
	return header + "." + payload + ".signature"
}

func TestSetAccessTokenAcceptsFutureToken(t *testing.T) {
	provider := &OhipCredentialsProvider{}
	token := jwtWithExpiry(time.Now().Add(time.Hour))

	provider.SetAccessToken(token)

	if provider.accessToken != token {
		t.Fatal("expected the future access token to be stored")
	}
}

func TestSetAccessTokenRejectsExpiredToken(t *testing.T) {
	provider := &OhipCredentialsProvider{}
	provider.SetAccessToken(jwtWithExpiry(time.Now().Add(-time.Minute)))

	if provider.accessToken != "" {
		t.Fatal("expected the expired access token to be rejected")
	}
}

func TestGetJWTExpiryDateRejectsMalformedToken(t *testing.T) {
	if !getJWTExpiryDate("not-a-jwt").IsZero() {
		t.Fatal("expected malformed token expiry to be zero")
	}
}
