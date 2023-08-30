# \ReservationAsyncApi

All URIs are relative to */rsv/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetReservationsDailySummary**](ReservationAsyncApi.md#GetReservationsDailySummary) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId} | Get results of Reservations Daily Summary
[**GetReservationsProcessStatus**](ReservationAsyncApi.md#GetReservationsProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId} | Check status of Reservation Daily Summary process
[**StartReservationsDailySummaryProcess**](ReservationAsyncApi.md#StartReservationsDailySummaryProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary | Fetch past, present and future Reservations Daily Summary



## GetReservationsDailySummary

> ReservationsDailySummaryDetails GetReservationsDailySummary(ctx, summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get results of Reservations Daily Summary



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvasync"
)

func main() {
    summaryId := "summaryId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAsyncApi.GetReservationsDailySummary(context.Background(), summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncApi.GetReservationsDailySummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsDailySummary`: ReservationsDailySummaryDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAsyncApi.GetReservationsDailySummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**summaryId** | **string** |  | 
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsDailySummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDailySummaryDetails**](ReservationsDailySummaryDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsProcessStatus

> GetReservationsProcessStatus(ctx, summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Check status of Reservation Daily Summary process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvasync"
)

func main() {
    summaryId := "summaryId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncApi.GetReservationsProcessStatus(context.Background(), summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncApi.GetReservationsProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**summaryId** | **string** |  | 
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartReservationsDailySummaryProcess

> StartReservationsDailySummaryProcess(ctx, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()

Fetch past, present and future Reservations Daily Summary



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvasync"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewCriteria() // Criteria | Request object for fetching future reservations asynchronously.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncApi.StartReservationsDailySummaryProcess(context.Background(), extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncApi.StartReservationsDailySummaryProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartReservationsDailySummaryProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**Criteria**](Criteria.md) | Request object for fetching future reservations asynchronously. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

