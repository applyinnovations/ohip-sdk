/*
OPERA Cloud Customer Relationship Management API

Testing ProfileMembershipAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package crm

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func Test_crm_ProfileMembershipAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ProfileMembershipAPIService CalculateMembershipPoints", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.CalculateMembershipPoints(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService ChangeMembershipClaim", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var claimId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.ChangeMembershipClaim(context.Background(), claimId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService DeleteAwards", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.DeleteAwards(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService ExportMembershipAward", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.ExportMembershipAward(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService ExtendMemberPointsToExpire", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.ExtendMemberPointsToExpire(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetAirlineTransactionsStatus", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetAirlineTransactionsStatus(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetAllMembershipClaims", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetAllMembershipClaims(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetAvailableAwardsBasedOnType", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetAvailableAwardsBasedOnType(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetAwardsToGrant", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetAwardsToGrant(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetEnrollmentMatchProfiles", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetEnrollmentMatchProfiles(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMemberPointsToExpire", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMemberPointsToExpire(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipAwardExportInfo", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipAwardExportInfo(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipAwardPointsByHotel", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string
		var hotelId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipAwardPointsByHotel(context.Background(), membershipId, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipClaim", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var claimId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipClaim(context.Background(), claimId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipClaims", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipClaims(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipDetails", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var profileId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipDetails(context.Background(), profileId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipIssueAwardsList", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipIssueAwardsList(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransaction", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransaction(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionAwardPoints", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionAwardPoints(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionExceptions", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var profileId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionExceptions(context.Background(), profileId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionPointsRejectionReasons", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionPointsRejectionReasons(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionRates", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionRates(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionRevenue", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionRevenue(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionTierPoints", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipTransactionId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionTierPoints(context.Background(), membershipTransactionId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService GetMembershipTransactionsSummary", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.GetMembershipTransactionsSummary(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService PostEnrollment", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.PostEnrollment(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService PostMembershipClaim", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.ProfileMembershipAPI.PostMembershipClaim(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService PostMembershipTransaction", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var membershipId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.PostMembershipTransaction(context.Background(), membershipId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ProfileMembershipAPIService RedeemAward", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var profileId string

		resp, httpRes, err := apiClient.ProfileMembershipAPI.RedeemAward(context.Background(), profileId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
