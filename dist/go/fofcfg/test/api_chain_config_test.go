/*
OPERA Cloud Front Desk Configuration API

Testing ChainConfigAPIService

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

func Test_fofcfg_ChainConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ChainConfigAPIService ChangeCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var dropLocationId string
		var hotelId string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeCashierShiftDropLocations(context.Background(), dropLocationId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService ChangeCustomTaxTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxTypeCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeCustomTaxTypes(context.Background(), taxTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService ChangeFiscalGuestTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var fiscalGuestTypeCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeFiscalGuestTypes(context.Background(), fiscalGuestTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService ChangeFiscalRegions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var regionCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeFiscalRegions(context.Background(), regionCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService ChangeTaxOffices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxOfficeId string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeTaxOffices(context.Background(), taxOfficeId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService ChangeTemplateCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var dropLocationId string

		resp, httpRes, err := apiClient.ChainConfigAPI.ChangeTemplateCashierShiftDropLocations(context.Background(), dropLocationId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService DeleteAutoFolioSettlementTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var code string

		resp, httpRes, err := apiClient.ChainConfigAPI.DeleteAutoFolioSettlementTypes(context.Background(), code).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService DeleteContractBillingInstructions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var contractBillingInstructionsId string

		resp, httpRes, err := apiClient.ChainConfigAPI.DeleteContractBillingInstructions(context.Background(), contractBillingInstructionsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService DeleteTaxCategoryCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxCategoryCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.DeleteTaxCategoryCodes(context.Background(), taxCategoryCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetAutoFolioSettlementTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetAutoFolioSettlementTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.ChainConfigAPI.GetCashierShiftDropLocations(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetContractBillingInstructions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetContractBillingInstructions(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetCustomTaxTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetCustomTaxTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetFetchTaxCategoryCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetFetchTaxCategoryCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetFiscalGuestTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetFiscalGuestTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetFiscalRegions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetFiscalRegions(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetTaxOffices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetTaxOffices(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService GetTemplateCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.GetTemplateCashierShiftDropLocations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostAutoFolioSettlementTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostAutoFolioSettlementTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.ChainConfigAPI.PostCashierShiftDropLocations(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostContractBillingInstructions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostContractBillingInstructions(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostCustomTaxTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostCustomTaxTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostFiscalGuestTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostFiscalGuestTypes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostFiscalRegions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostFiscalRegions(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostTaxCategoryCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostTaxCategoryCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostTaxOffices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostTaxOffices(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PostTemplateCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ChainConfigAPI.PostTemplateCashierShiftDropLocations(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PutAutoFolioSettlementTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var code string

		resp, httpRes, err := apiClient.ChainConfigAPI.PutAutoFolioSettlementTypes(context.Background(), code).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PutContractBillingInstructions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var contractBillingInstructionsId string

		resp, httpRes, err := apiClient.ChainConfigAPI.PutContractBillingInstructions(context.Background(), contractBillingInstructionsId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService PutTaxCategoryCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxCategoryCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.PutTaxCategoryCodes(context.Background(), taxCategoryCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var dropLocationId string
		var hotelId string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveCashierShiftDropLocations(context.Background(), dropLocationId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveCustomTaxTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxTypeCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveCustomTaxTypes(context.Background(), taxTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveFiscalGuestTypes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var fiscalGuestTypeCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveFiscalGuestTypes(context.Background(), fiscalGuestTypeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveFiscalRegions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var regionCode string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveFiscalRegions(context.Background(), regionCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveTaxOffices", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var taxOfficeId string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveTaxOffices(context.Background(), taxOfficeId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ChainConfigAPIService RemoveTemplateCashierShiftDropLocations", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var dropLocationId string

		resp, httpRes, err := apiClient.ChainConfigAPI.RemoveTemplateCashierShiftDropLocations(context.Background(), dropLocationId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}