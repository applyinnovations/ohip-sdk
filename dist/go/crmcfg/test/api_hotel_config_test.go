/*
OPERA Cloud CRM Configuration API

Testing HotelConfigApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package crmcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/crmcfg"
)

func Test_crmcfg_HotelConfigApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test HotelConfigApiService ChangeCommunicationType", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var communicationTypeCode string

		resp, httpRes, err := apiClient.HotelConfigApi.ChangeCommunicationType(context.Background(), communicationTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigApiService GetAvailablePreferences", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigApi.GetAvailablePreferences(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigApiService GetCommunicationTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigApi.GetCommunicationTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigApiService PostCommunicationType", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigApi.PostCommunicationType(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigApiService RemoveCommunicationType", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var communicationTypeCode string

		resp, httpRes, err := apiClient.HotelConfigApi.RemoveCommunicationType(context.Background(), communicationTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
