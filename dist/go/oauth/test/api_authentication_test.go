/*
oAuth API for OHIP

Testing AuthenticationApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package oauth

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/oauth"
)

func Test_oauth_AuthenticationApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test AuthenticationApiService GetToken", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.AuthenticationApi.GetToken(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
