/*
OPERA Cloud Rate API

Testing AvailabilityApiService

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

func Test_rtp_AvailabilityApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test AvailabilityApiService ValidateRateCoupon", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var couponCode string
		var hotelId string

		resp, httpRes, err := apiClient.AvailabilityApi.ValidateRateCoupon(context.Background(), couponCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test AvailabilityApiService ValidateRatePromotion", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var promotionCode string
		var hotelId string

		resp, httpRes, err := apiClient.AvailabilityApi.ValidateRatePromotion(context.Background(), promotionCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test AvailabilityApiService ValidateRatePromotionCoupon", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var hotelId string

		resp, httpRes, err := apiClient.AvailabilityApi.ValidateRatePromotionCoupon(context.Background(), hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
