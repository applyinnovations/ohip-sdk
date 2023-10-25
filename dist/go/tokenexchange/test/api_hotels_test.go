/*
OPI Token Exchange Service API

Testing HotelsApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package tokenexchange

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/tokenexchange"
)

func Test_tokenexchange_HotelsApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test HotelsApiService OpenPaymentTokenExchange", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelCode string

		resp, httpRes, err := apiClient.HotelsApi.OpenPaymentTokenExchange(context.Background(), hotelCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
