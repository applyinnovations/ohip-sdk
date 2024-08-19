/*
OPERA Cloud Integration Configuration API

Testing ExternalSystemsConfigAPIService

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

func Test_intcfg_ExternalSystemsConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ExternalSystemsConfigAPIService ClearCache", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.ClearCache(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteDeliveryMethods", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteDeliveryMethods(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteHotelInterface", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteHotelInterface(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteInterfaceAccount", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var accountId string
		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceAccount(context.Background(), accountId, interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteInterfaceMachine", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var machineId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceMachine(context.Background(), machineId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteInterfaceRight", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRight(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteInterfaceRoom", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRoom(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeleteInterfaceRoomStatus", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRoomStatus(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService DeletePublisher", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string
		var externalSystemCode string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.DeletePublisher(context.Background(), hotelId, externalSystemCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetConfiguredExternalDevices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetConfiguredExternalDevices(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetDeliveryMethods", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetDeliveryMethods(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetExternalDatabaseAvailableProperties", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var databaseId string
		var interfaceId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetExternalDatabaseAvailableProperties(context.Background(), databaseId, interfaceId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetExternalDeviceConfigurations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetExternalDeviceConfigurations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaceControllerRegistry", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceControllerRegistry(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaceDetails", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var logo string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceDetails(context.Background(), logo, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaceErrors", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceErrors(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaceFailedMessages", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceFailedMessages(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaceSchemas", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceSchemas(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetHotelInterfaces", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaces(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetInterfaceMachines", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceMachines(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetInterfaceRights", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRights(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetInterfaceRoomStatuses", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRoomStatuses(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetInterfaceRooms", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRooms(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetInterfaceUnitCharges", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceUnitCharges(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetPublishers", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var externalSystemCode string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetPublishers(context.Background(), externalSystemCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService GetUDFMappings", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.GetUDFMappings(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService ImportInterfaceRooms", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.ImportInterfaceRooms(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService Ping", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.Ping(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PostDeliveryMethods", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PostDeliveryMethods(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PostHotelInterface", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PostHotelInterface(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PostInterfaceAccount", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PostInterfaceAccount(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PostInterfaceRoom", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PostInterfaceRoom(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PostPublishers", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string
		var externalSystemCode string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PostPublishers(context.Background(), hotelId, externalSystemCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutDeliveryMethods", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutDeliveryMethods(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutExternalDeviceConfigurations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutExternalDeviceConfigurations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutHotelInterface", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutHotelInterface(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceAccount", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var accountId string
		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceAccount(context.Background(), accountId, interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceMachine", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var machineId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceMachine(context.Background(), machineId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceRight", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRight(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceRoom", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var roomId string
		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRoom(context.Background(), roomId, interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceRoomStatus", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRoomStatus(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutInterfaceUnitCharges", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var interfaceId string
		var hotelId string

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceUnitCharges(context.Background(), interfaceId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ExternalSystemsConfigAPIService PutUDFMapping", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ExternalSystemsConfigAPI.PutUDFMapping(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
