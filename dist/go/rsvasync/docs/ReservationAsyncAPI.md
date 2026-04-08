# \ReservationAsyncAPI

All URIs are relative to */rsv/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMassUpdateProcessSummary**](ReservationAsyncAPI.md#GetMassUpdateProcessSummary) | **Get** /hotels/{hotelId}/massUpdate/{massUpdateId} | Get results of a Mass Update process
[**GetReservationsDailySummary**](ReservationAsyncAPI.md#GetReservationsDailySummary) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId} | Get results of Reservations Daily Summary
[**GetReservationsProcessStatus**](ReservationAsyncAPI.md#GetReservationsProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId} | Check status of Reservation Daily Summary process
[**GetRoomingListCreationProcessResults**](ReservationAsyncAPI.md#GetRoomingListCreationProcessResults) | **Get** /hotels/{hotelId}/roominglistcreation/{requestId} | Get results of Rooming List Creation process
[**GetRoomingListCreationProcessStatus**](ReservationAsyncAPI.md#GetRoomingListCreationProcessStatus) | **Head** /hotels/{hotelId}/roominglistcreation/{requestId} | Check status of Rooming List creation process.
[**GetRoomingListValidationProcessResults**](ReservationAsyncAPI.md#GetRoomingListValidationProcessResults) | **Get** /hotels/{hotelId}/roominglistvalidation/{requestId} | Get results of Rooming List validation process
[**GetRoomingListValidationProcessStatus**](ReservationAsyncAPI.md#GetRoomingListValidationProcessStatus) | **Head** /hotels/{hotelId}/roominglistvalidation/{requestId} | Check status of Rooming List validation process.
[**HeadMassUpdateProcessStatus**](ReservationAsyncAPI.md#HeadMassUpdateProcessStatus) | **Head** /hotels/{hotelId}/massUpdate/{massUpdateId} | Check status of Mass Update process.
[**StartHousekeepingMassUpdateProcess**](ReservationAsyncAPI.md#StartHousekeepingMassUpdateProcess) | **Post** /hotels/{hotelId}/housekeepingMassUpdate | Updates reservation housekeeping options and/or schedules of a given list of reservations.
[**StartNotesMassUpdateProcess**](ReservationAsyncAPI.md#StartNotesMassUpdateProcess) | **Post** /hotels/{hotelId}/notesMassUpdate | Updates reservation notes of a given list of reservations.
[**StartPaymentInstructionsMassUpdateProcess**](ReservationAsyncAPI.md#StartPaymentInstructionsMassUpdateProcess) | **Post** /hotels/{hotelId}/paymentInstructionsMassUpdate | Updates reservation payment instructions of a given list of reservations.
[**StartPreferencesMassUpdateProcess**](ReservationAsyncAPI.md#StartPreferencesMassUpdateProcess) | **Post** /hotels/{hotelId}/preferencesMassUpdate | Updates reservation preferences of a given list of reservations.
[**StartReservationDetailsMassUpdateProcess**](ReservationAsyncAPI.md#StartReservationDetailsMassUpdateProcess) | **Post** /hotels/{hotelId}/reservationDetailsMassUpdate | Updates reservation details of a given list of reservations.
[**StartReservationsDailySummaryProcess**](ReservationAsyncAPI.md#StartReservationsDailySummaryProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary | Fetch past, present and future Reservations Daily Summary
[**StartRoomingListCreationProcess**](ReservationAsyncAPI.md#StartRoomingListCreationProcess) | **Post** /hotels/{hotelId}/blocks/{blockId}/roominglistcreation | Create Rooming List Reservations
[**StartRoomingListValidationProcess**](ReservationAsyncAPI.md#StartRoomingListValidationProcess) | **Post** /hotels/{hotelId}/blocks/{blockId}/roominglistvalidation | Validate Rooming List Reservations
[**StartRoutingInstructionsMassUpdateProcess**](ReservationAsyncAPI.md#StartRoutingInstructionsMassUpdateProcess) | **Post** /hotels/{hotelId}/routingInstructionsMassUpdate | Updates reservation routing instructions of a given list of reservations.
[**StartTracesMassUpdateProcess**](ReservationAsyncAPI.md#StartTracesMassUpdateProcess) | **Post** /hotels/{hotelId}/tracesMassUpdate | Updates reservation traces of a given list of reservations.
[**StartTransportationsMassUpdateProcess**](ReservationAsyncAPI.md#StartTransportationsMassUpdateProcess) | **Post** /hotels/{hotelId}/transportationsMassUpdate | Updates reservation transportations of a given list of reservations.



## GetMassUpdateProcessSummary

> MassUpdateSummaryType GetMassUpdateProcessSummary(ctx, massUpdateId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get results of a Mass Update process



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
    massUpdateId := "massUpdateId_example" // string | Unique ID of mass update process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAsyncAPI.GetMassUpdateProcessSummary(context.Background(), massUpdateId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetMassUpdateProcessSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMassUpdateProcessSummary`: MassUpdateSummaryType
    fmt.Fprintf(os.Stdout, "Response from `ReservationAsyncAPI.GetMassUpdateProcessSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**massUpdateId** | **string** | Unique ID of mass update process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMassUpdateProcessSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MassUpdateSummaryType**](MassUpdateSummaryType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAsyncAPI.GetReservationsDailySummary(context.Background(), summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetReservationsDailySummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsDailySummary`: ReservationsDailySummaryDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAsyncAPI.GetReservationsDailySummary`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.GetReservationsProcessStatus(context.Background(), summaryId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetReservationsProcessStatus``: %v\n", err)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomingListCreationProcessResults

> CreateRoomingListType GetRoomingListCreationProcessResults(ctx, requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get results of Rooming List Creation process



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
    requestId := "requestId_example" // string | Unique ID for rooming list creation process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAsyncAPI.GetRoomingListCreationProcessResults(context.Background(), requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetRoomingListCreationProcessResults``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomingListCreationProcessResults`: CreateRoomingListType
    fmt.Fprintf(os.Stdout, "Response from `ReservationAsyncAPI.GetRoomingListCreationProcessResults`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID for rooming list creation process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomingListCreationProcessResultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreateRoomingListType**](CreateRoomingListType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomingListCreationProcessStatus

> GetRoomingListCreationProcessStatus(ctx, requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check status of Rooming List creation process.



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
    requestId := "requestId_example" // string | Unique ID for rooming list creation process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.GetRoomingListCreationProcessStatus(context.Background(), requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetRoomingListCreationProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID for rooming list creation process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomingListCreationProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomingListValidationProcessResults

> ValidateRoomingListType GetRoomingListValidationProcessResults(ctx, requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get results of Rooming List validation process



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
    requestId := "requestId_example" // string | Unique ID for rooming list validation process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAsyncAPI.GetRoomingListValidationProcessResults(context.Background(), requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetRoomingListValidationProcessResults``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomingListValidationProcessResults`: ValidateRoomingListType
    fmt.Fprintf(os.Stdout, "Response from `ReservationAsyncAPI.GetRoomingListValidationProcessResults`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID for rooming list validation process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomingListValidationProcessResultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidateRoomingListType**](ValidateRoomingListType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomingListValidationProcessStatus

> GetRoomingListValidationProcessStatus(ctx, requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check status of Rooming List validation process.



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
    requestId := "requestId_example" // string | Unique ID for rooming list validation process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.GetRoomingListValidationProcessStatus(context.Background(), requestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.GetRoomingListValidationProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID for rooming list validation process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomingListValidationProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HeadMassUpdateProcessStatus

> HeadMassUpdateProcessStatus(ctx, massUpdateId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check status of Mass Update process.



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
    massUpdateId := "massUpdateId_example" // string | Unique ID of mass update process
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.HeadMassUpdateProcessStatus(context.Background(), massUpdateId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.HeadMassUpdateProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**massUpdateId** | **string** | Unique ID of mass update process | 
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiHeadMassUpdateProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartHousekeepingMassUpdateProcess

> StartHousekeepingMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation housekeeping options and/or schedules of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewHousekeepingMassUpdateCriteria() // HousekeepingMassUpdateCriteria | Request object for submitting mass update of housekeeping options and schedule.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartHousekeepingMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartHousekeepingMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartHousekeepingMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**HousekeepingMassUpdateCriteria**](HousekeepingMassUpdateCriteria.md) | Request object for submitting mass update of housekeeping options and schedule. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartNotesMassUpdateProcess

> StartNotesMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation notes of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewNotesMassUpdateCriteria() // NotesMassUpdateCriteria | Request object for submitting mass update of reservation notes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartNotesMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartNotesMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartNotesMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**NotesMassUpdateCriteria**](NotesMassUpdateCriteria.md) | Request object for submitting mass update of reservation notes. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartPaymentInstructionsMassUpdateProcess

> StartPaymentInstructionsMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation payment instructions of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewPaymentInstructionsMassUpdateCriteria() // PaymentInstructionsMassUpdateCriteria | Request object for submitting mass update of reservation payment instructions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartPaymentInstructionsMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartPaymentInstructionsMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartPaymentInstructionsMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**PaymentInstructionsMassUpdateCriteria**](PaymentInstructionsMassUpdateCriteria.md) | Request object for submitting mass update of reservation payment instructions. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartPreferencesMassUpdateProcess

> StartPreferencesMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation preferences of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewPreferencesMassUpdateCriteria() // PreferencesMassUpdateCriteria | Request object for submitting mass update of reservation preferences.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartPreferencesMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartPreferencesMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartPreferencesMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**PreferencesMassUpdateCriteria**](PreferencesMassUpdateCriteria.md) | Request object for submitting mass update of reservation preferences. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartReservationDetailsMassUpdateProcess

> StartReservationDetailsMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation details of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewReservationDetailsMassUpdateCriteria() // ReservationDetailsMassUpdateCriteria | Request object for submitting mass update of reservation details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartReservationDetailsMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartReservationDetailsMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartReservationDetailsMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**ReservationDetailsMassUpdateCriteria**](ReservationDetailsMassUpdateCriteria.md) | Request object for submitting mass update of reservation details. | 
 **xExternalsystem** | **string** | External system code. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewCriteria() // Criteria | Request object for fetching future reservations asynchronously.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartReservationsDailySummaryProcess(context.Background(), extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartReservationsDailySummaryProcess``: %v\n", err)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## StartRoomingListCreationProcess

> StartRoomingListCreationProcess(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Rooming List Reservations



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomingList := *openapiclient.NewRoomingList() // RoomingList | Request object for create rooming list reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartRoomingListCreationProcess(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartRoomingListCreationProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartRoomingListCreationProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomingList** | [**RoomingList**](RoomingList.md) | Request object for create rooming list reservations. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartRoomingListValidationProcess

> StartRoomingListValidationProcess(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Rooming List Reservations



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomingList := *openapiclient.NewRoomingList() // RoomingList | Request object for validate rooming list reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartRoomingListValidationProcess(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartRoomingListValidationProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartRoomingListValidationProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomingList** | [**RoomingList**](RoomingList.md) | Request object for validate rooming list reservations. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartRoutingInstructionsMassUpdateProcess

> StartRoutingInstructionsMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation routing instructions of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewRoutingInstructionsMassUpdateCriteria() // RoutingInstructionsMassUpdateCriteria | Request object for submitting mass update of reservation routing instructions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartRoutingInstructionsMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartRoutingInstructionsMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartRoutingInstructionsMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**RoutingInstructionsMassUpdateCriteria**](RoutingInstructionsMassUpdateCriteria.md) | Request object for submitting mass update of reservation routing instructions. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartTracesMassUpdateProcess

> StartTracesMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation traces of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewTracesMassUpdateCriteria() // TracesMassUpdateCriteria | Request object for submitting mass update of reservation traces.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartTracesMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartTracesMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartTracesMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**TracesMassUpdateCriteria**](TracesMassUpdateCriteria.md) | Request object for submitting mass update of reservation traces. | 
 **xExternalsystem** | **string** | External system code. | 
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


## StartTransportationsMassUpdateProcess

> StartTransportationsMassUpdateProcess(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates reservation transportations of a given list of reservations.



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
    hotelId := "hotelId_example" // string | Unique ID of a Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewTransportationsMassUpdateCriteria() // TransportationsMassUpdateCriteria | Request object for submitting mass update of reservation transportations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.ReservationAsyncAPI.StartTransportationsMassUpdateProcess(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAsyncAPI.StartTransportationsMassUpdateProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartTransportationsMassUpdateProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**TransportationsMassUpdateCriteria**](TransportationsMassUpdateCriteria.md) | Request object for submitting mass update of reservation transportations. | 
 **xExternalsystem** | **string** | External system code. | 
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

