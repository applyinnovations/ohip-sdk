/*
OPERA Cloud Block Configuration API

Testing BlockConfigAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package blkcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func Test_blkcfg_BlockConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test BlockConfigAPIService DeleteBlockSalesAllowanceRange", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.DeleteBlockSalesAllowanceRange(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService DeleteBlockStatusCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var blockStatusCode string

		resp, httpRes, err := apiClient.BlockConfigAPI.DeleteBlockStatusCode(context.Background(), blockStatusCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService DeleteWashSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var washScheduleCode string
		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.DeleteWashSchedule(context.Background(), washScheduleCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetBlockSalesAllowance", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.GetBlockSalesAllowance(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetBlockStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BlockConfigAPI.GetBlockStatusCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetNextBlockStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BlockConfigAPI.GetNextBlockStatusCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetSalesManagerGoals", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesManagerId string
		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.GetSalesManagerGoals(context.Background(), salesManagerId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetSalesManagerGoalsMultipleHotelIds", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesManagerId string

		resp, httpRes, err := apiClient.BlockConfigAPI.GetSalesManagerGoalsMultipleHotelIds(context.Background(), salesManagerId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetSalesManagers", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.GetSalesManagers(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetSalesManagersMultipleHotelIds", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BlockConfigAPI.GetSalesManagersMultipleHotelIds(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService GetWashSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BlockConfigAPI.GetWashSchedule(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PostBlockStatusCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.BlockConfigAPI.PostBlockStatusCode(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PostSalesManagerGoals", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesManagerId string
		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.PostSalesManagerGoals(context.Background(), salesManagerId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PostWashSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.PostWashSchedule(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PutBlockStatusCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var blockStatusCode string

		resp, httpRes, err := apiClient.BlockConfigAPI.PutBlockStatusCode(context.Background(), blockStatusCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PutNextBlockStatusCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var srcBlockStatusCode string

		resp, httpRes, err := apiClient.BlockConfigAPI.PutNextBlockStatusCodes(context.Background(), srcBlockStatusCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PutSalesManagerGoals", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesGoalId string
		var salesManagerId string
		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.PutSalesManagerGoals(context.Background(), salesGoalId, salesManagerId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService PutWashSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var washScheduleCode string
		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.PutWashSchedule(context.Background(), washScheduleCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService RemoveSalesManagerGoal", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesGoalId string
		var salesManagerId string

		resp, httpRes, err := apiClient.BlockConfigAPI.RemoveSalesManagerGoal(context.Background(), salesGoalId, salesManagerId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService RemoveSalesManagerGoals", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var salesManagerId string

		resp, httpRes, err := apiClient.BlockConfigAPI.RemoveSalesManagerGoals(context.Background(), salesManagerId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test BlockConfigAPIService SetBlockSalesAllowanceRange", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.BlockConfigAPI.SetBlockSalesAllowanceRange(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}