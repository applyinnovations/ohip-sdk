/*
OPERA Cloud Room Configuration API

Testing ChainConfigApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package rmcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func Test_rmcfg_ChainConfigApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ChainConfigApiService ChangeRoomMoveReasons", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var reasonCode string

		resp, httpRes, err := apiClient.ChainConfigApi.ChangeRoomMoveReasons(context.Background(), reasonCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteBedTypeRequests", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var bedTypeRequestsId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteBedTypeRequests(context.Background(), bedTypeRequestsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteBedTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var bedTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteBedTypes(context.Background(), bedTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteFloorTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var floorTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteFloorTypes(context.Background(), floorTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteRoomPotentials", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var roomPotentialsId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteRoomPotentials(context.Background(), roomPotentialsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteRoomPreferencePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var roomPreferencePrioritiesId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteRoomPreferencePriorities(context.Background(), roomPreferencePrioritiesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService DeleteSmokingTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var smokingTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.DeleteSmokingTypes(context.Background(), smokingTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetBedTypeRequests", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetBedTypeRequests(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetBedTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetBedTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetFloorTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetFloorTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetRoomMoveReasons", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetRoomMoveReasons(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetRoomPotentials", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetRoomPotentials(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetRoomPreferencePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetRoomPreferencePriorities(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService GetSmokingTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.GetSmokingTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostBedTypeRequests", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostBedTypeRequests(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostBedTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostBedTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostFloorTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostFloorTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostRoomMoveReasons", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostRoomMoveReasons(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostRoomPotentials", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostRoomPotentials(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostRoomPreferencePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostRoomPreferencePriorities(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PostSmokingTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigApi.PostSmokingTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutBedTypeRequests", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var bedTypeRequestsId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutBedTypeRequests(context.Background(), bedTypeRequestsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutBedTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var bedTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutBedTypes(context.Background(), bedTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutFloorTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var floorTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutFloorTypes(context.Background(), floorTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutRoomPotentials", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var roomPotentialsId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutRoomPotentials(context.Background(), roomPotentialsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutRoomPreferencePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var roomPreferencePrioritiesId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutRoomPreferencePriorities(context.Background(), roomPreferencePrioritiesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService PutSmokingTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var smokingTypesId string

		resp, httpRes, err := apiClient.ChainConfigApi.PutSmokingTypes(context.Background(), smokingTypesId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigApiService RemoveRoomMoveReasons", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var reasonCode string

		resp, httpRes, err := apiClient.ChainConfigApi.RemoveRoomMoveReasons(context.Background(), reasonCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
