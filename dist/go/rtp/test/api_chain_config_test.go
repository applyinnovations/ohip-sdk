/*
OPERA Cloud Rate API

Testing ChainConfigAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package rtp

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func Test_rtp_ChainConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ChainConfigAPIService DeleteDisplaySets", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var displaySetsId string

		resp, httpRes, err := apiClient.ChainConfigAPI.DeleteDisplaySets(context.Background(), displaySetsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetDisplaySets", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetDisplaySets(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostDisplaySets", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostDisplaySets(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PutDisplaySets", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var displaySetsId string

		resp, httpRes, err := apiClient.ChainConfigAPI.PutDisplaySets(context.Background(), displaySetsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
