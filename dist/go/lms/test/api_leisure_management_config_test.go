/*
OPERA Cloud Leisure Management API

Testing LeisureManagementConfigAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package lms

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func Test_lms_LeisureManagementConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test LeisureManagementConfigAPIService CopyActivityLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityLocationsId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.CopyActivityLocations(context.Background(), activityLocationsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService CopyActivityTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityTypesId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.CopyActivityTypes(context.Background(), activityTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService DeleteActivityLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityLocationsId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.DeleteActivityLocations(context.Background(), activityLocationsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService DeleteActivityStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityStatusCodesId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.DeleteActivityStatusCodes(context.Background(), activityStatusCodesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService DeleteActivityTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityTypesId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.DeleteActivityTypes(context.Background(), activityTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService GetActivityLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.GetActivityLocations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService GetActivityStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.GetActivityStatusCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService GetActivityTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.GetActivityTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PostActivityLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PostActivityLocations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PostActivityStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PostActivityStatusCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PostActivityTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PostActivityTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PutActivityLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityLocationsId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PutActivityLocations(context.Background(), activityLocationsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PutActivityStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityStatusCodesId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PutActivityStatusCodes(context.Background(), activityStatusCodesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test LeisureManagementConfigAPIService PutActivityTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var activityTypesId string

		resp, httpRes, err := apiClient.LeisureManagementConfigAPI.PutActivityTypes(context.Background(), activityTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
