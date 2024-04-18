/*
OPERA Cloud Front Desk Configuration API

Testing CreditCardAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package fofcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func Test_fofcfg_CreditCardAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test CreditCardAPIService DecodeCard", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.DecodeCard(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetAuthorizationRule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetAuthorizationRule(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetCardReaderDelimiters", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetCardReaderDelimiters(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetCreditCardInfo", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetCreditCardInfo(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetCreditCardReaderDevices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetCreditCardReaderDevices(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetCreditCardUniqueId", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetCreditCardUniqueId(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetHotelInterfaceCustomData", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceLogoId string
		var hotelId string

		resp, httpRes, err := apiClient.CreditCardAPI.GetHotelInterfaceCustomData(context.Background(), interfaceLogoId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetPrepaidCard", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetPrepaidCard(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetPrepaidCardBalance", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetPrepaidCardBalance(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService GetPrepaidCards", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.GetPrepaidCards(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService PutSecureApplicationSettings", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.PutSecureApplicationSettings(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService UpdateInterfaceCustomData", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceLogoId string
		var hotelId string

		resp, httpRes, err := apiClient.CreditCardAPI.UpdateInterfaceCustomData(context.Background(), interfaceLogoId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test CreditCardAPIService ValidateCreditCardType", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.CreditCardAPI.ValidateCreditCardType(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}