/*
OPERA Cloud Front Desk Configuration API

Testing HotelConfigAPIService

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

func Test_fofcfg_HotelConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test HotelConfigAPIService ChangeTrackItActions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var actionCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTrackItActions(context.Background(), actionCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTrackItLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var locationCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTrackItLocations(context.Background(), locationCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTrackItTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var typeCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTrackItTypes(context.Background(), typeCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyTrackItActions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceHotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyTrackItActions(context.Background(), sourceHotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyTrackItLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceHotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyTrackItLocations(context.Background(), sourceHotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyTrackItTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceHotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyTrackItTypes(context.Background(), sourceHotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTrackItActions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTrackItActions(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTrackItLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTrackItLocations(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTrackItTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTrackItTypes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTrackItActions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTrackItActions(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTrackItLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTrackItLocations(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTrackItTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTrackItTypes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTrackItActions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var actionCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTrackItActions(context.Background(), actionCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTrackItLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var locationCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTrackItLocations(context.Background(), locationCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTrackItTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var typeCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTrackItTypes(context.Background(), typeCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
