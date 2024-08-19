/*
OPERA Cloud Reservation Asynchronous API

Testing ReservationAsyncAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package rsvasync

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/applyinnovations/ohip-sdk/rsvasync"
)

func Test_rsvasync_ReservationAsyncAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test ReservationAsyncAPIService GetReservationsDailySummary", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var summaryId string
		var extSystemCode string
		var hotelId string

		resp, httpRes, err := apiClient.ReservationAsyncAPI.GetReservationsDailySummary(context.Background(), summaryId, extSystemCode, hotelId).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ReservationAsyncAPIService GetReservationsProcessStatus", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var summaryId string
		var extSystemCode string
		var hotelId string

		httpRes, err := apiClient.ReservationAsyncAPI.GetReservationsProcessStatus(context.Background(), summaryId, extSystemCode, hotelId).Execute()

		require.Nil(t, err)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

	t.Run("Test ReservationAsyncAPIService StartReservationsDailySummaryProcess", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		var extSystemCode string
		var hotelId string

		httpRes, err := apiClient.ReservationAsyncAPI.StartReservationsDailySummaryProcess(context.Background(), extSystemCode, hotelId).Execute()

		require.Nil(t, err)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
