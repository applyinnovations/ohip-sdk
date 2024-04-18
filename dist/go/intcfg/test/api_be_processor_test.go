/*
OPERA Cloud Integration Configuration API

Testing BEProcessorAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package intcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func Test_intcfg_BEProcessorAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test BEProcessorAPIService ClearCacheBeProcessor", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BEProcessorAPI.ClearCacheBeProcessor(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BEProcessorAPIService PingBeProcessor", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BEProcessorAPI.PingBeProcessor(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}