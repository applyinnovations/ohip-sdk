/*
OPERA Cloud Reservation Master Data Management API

Testing HotelConfigAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package rsvcfg

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func Test_rsvcfg_HotelConfigAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test HotelConfigAPIService ChangeCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeCancellationPolicy(context.Background(), cancelpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeDepositPolicy(context.Background(), depositpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var guaranteeCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeGuaranteeCode(context.Background(), guaranteeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeGuaranteeCodeSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyScheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeGuaranteeCodeSchedule(context.Background(), policyScheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketcode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeMarketCode(context.Background(), marketcode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeMarketGroup(context.Background(), marketGroupCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangePolicySchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyscheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangePolicySchedule(context.Background(), policyscheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangePreCheckInRules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangePreCheckInRules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeServiceRequestCodePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var serviceRequestCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeServiceRequestCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeServiceRequestCodes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeSourceCode(context.Background(), sourceCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceGroupCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeSourceGroup(context.Background(), sourceGroupCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateDepositPolicy(context.Background(), depositpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var guaranteeCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateGuaranteeCode(context.Background(), guaranteeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketcode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateMarketCode(context.Background(), marketcode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateMarketGroup(context.Background(), marketGroupCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateSourceCode(context.Background(), sourceCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService ChangeTemplateSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.ChangeTemplateSourceGroup(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyGuaranteeCodeSchedules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyScheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyGuaranteeCodeSchedules(context.Background(), policyScheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyPolicySchedules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyscheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyPolicySchedules(context.Background(), policyscheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService CopyServiceRequestCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceHotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.CopyServiceRequestCodes(context.Background(), sourceHotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteCancellationPolicy(context.Background(), cancelpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteDepositPolicy(context.Background(), depositpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var guaranteeCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteGuaranteeCode(context.Background(), guaranteeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteGuaranteeCodeSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyScheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteGuaranteeCodeSchedule(context.Background(), policyScheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeletePolicySchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyscheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeletePolicySchedule(context.Background(), policyscheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteTemplateCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteTemplateDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteTemplateDepositPolicy(context.Background(), depositpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService DeleteTemplateGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var guaranteeCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.DeleteTemplateGuaranteeCode(context.Background(), guaranteeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetCancellationPolicy(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetDepositPolicy(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetGuaranteeCodeSchedules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetGuaranteeCodeSchedules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetGuaranteeCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetGuaranteeCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetMarketCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetMarketCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetMarketGroups", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetMarketGroups(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetPolicySchedules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetPolicySchedules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetPreCheckInRules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetPreCheckInRules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetServiceRequestCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetServiceRequestCode(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetServiceRequestCodePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var serviceRequestCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetServiceRequestCodePriority", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetServiceRequestCodePriority(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetServiceRequestCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetServiceRequestCodes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetSourceCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetSourceCodes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetSourceGroups", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.GetSourceGroups(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateCancellationPolicy(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateDepositPolicy(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateGuaranteeCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateGuaranteeCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateMarketCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateMarketCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateMarketGroups", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateMarketGroups(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateSourceCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateSourceCodes(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService GetTemplateSourceGroups", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.GetTemplateSourceGroups(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostCancellationPolicy(context.Background(), cancelpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicycode string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostDepositPolicy(context.Background(), depositpolicycode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.PostGuaranteeCode(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostGuaranteeCodeSchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostGuaranteeCodeSchedule(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketcode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostMarketCode(context.Background(), marketcode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostMarketGroup(context.Background(), marketGroupCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostNewPolicySchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostNewPolicySchedule(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostPolicySchedule", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var policyscheduleId string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostPolicySchedule(context.Background(), policyscheduleId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostPreCheckInRules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostPreCheckInRules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostServiceRequestCodePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var serviceRequestCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostServiceRequestCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostServiceRequestCodes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostSourceCode(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostSourceGroup(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateCancellationPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var cancelpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateDepositPolicy", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var depositpolicytemplate string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateDepositPolicy(context.Background(), depositpolicytemplate).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateGuaranteeCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var guaranteeCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateGuaranteeCode(context.Background(), guaranteeCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateMarketCode(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateMarketGroup(context.Background(), marketGroupCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateSourceCode(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService PostTemplateSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.PostTemplateSourceGroup(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketcode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveMarketCode(context.Background(), marketcode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveMarketGroup(context.Background(), marketGroupCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemovePreCheckInRules", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemovePreCheckInRules(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveServiceRequestCodePriorities", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var serviceRequestCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveServiceRequestCodes", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveServiceRequestCodes(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveSourceCode(context.Background(), sourceCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceGroupCode string
		var hotelId string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveSourceGroup(context.Background(), sourceGroupCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTemplateMarketCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketcode string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTemplateMarketCode(context.Background(), marketcode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTemplateMarketGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var marketGroupCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTemplateMarketGroup(context.Background(), marketGroupCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTemplateSourceCode", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var sourceCode string

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTemplateSourceCode(context.Background(), sourceCode).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test HotelConfigAPIService RemoveTemplateSourceGroup", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.HotelConfigAPI.RemoveTemplateSourceGroup(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
