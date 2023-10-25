/*
OPERA Cloud Channel Configuration API

Testing InventoryApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package chl

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func Test_chl_InventoryApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test InventoryApiService ChangeChannelSellLimitsByDate", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.InventoryApi.ChangeChannelSellLimitsByDate(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test InventoryApiService ChangeChannelSellLimitsByDateRange", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var channelId string
		var hotelId string

		resp, httpRes, err := apiClient.InventoryApi.ChangeChannelSellLimitsByDateRange(context.Background(), channelId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test InventoryApiService DeleteChannelSellLimits", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var id string
		var hotelId string

		resp, httpRes, err := apiClient.InventoryApi.DeleteChannelSellLimits(context.Background(), id, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test InventoryApiService GetChannelSellLimits", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.InventoryApi.GetChannelSellLimits(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
