# \SuspendedStayAPI

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteSuspendedStay**](SuspendedStayAPI.md#DeleteSuspendedStay) | **Delete** /suspendedStayRecordId/{suspendedStayRecordId} | Delete a suspended stay by the Suspended Stay Record ID.
[**GetSuspendedStay**](SuspendedStayAPI.md#GetSuspendedStay) | **Get** /suspendedStayRecordId/{suspendedStayRecordId} | Get a Suspended Stay by the Suspended Stay Record ID.
[**GetSuspendedStays**](SuspendedStayAPI.md#GetSuspendedStays) | **Get** /suspendedStays | Get Suspended Stays
[**PutProcessSuspendedStays**](SuspendedStayAPI.md#PutProcessSuspendedStays) | **Put** /processSuspendedStays | Process Suspended Stays
[**PutSuspendedStay**](SuspendedStayAPI.md#PutSuspendedStay) | **Put** /suspendedStayRecordId/{suspendedStayRecordId} | Update a Suspended Stay by the Suspended Stay Record ID.



## DeleteSuspendedStay

> Status DeleteSuspendedStay(ctx, suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a suspended stay by the Suspended Stay Record ID.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    suspendedStayRecordId := "suspendedStayRecordId_example" // string | Suspended Stay Record ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SuspendedStayAPI.DeleteSuspendedStay(context.Background(), suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SuspendedStayAPI.DeleteSuspendedStay``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSuspendedStay`: Status
    fmt.Fprintf(os.Stdout, "Response from `SuspendedStayAPI.DeleteSuspendedStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**suspendedStayRecordId** | **string** | Suspended Stay Record ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSuspendedStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSuspendedStay

> SuspendedStayType GetSuspendedStay(ctx, suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a Suspended Stay by the Suspended Stay Record ID.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    suspendedStayRecordId := "suspendedStayRecordId_example" // string | Suspended Stay Record ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SuspendedStayAPI.GetSuspendedStay(context.Background(), suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SuspendedStayAPI.GetSuspendedStay``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSuspendedStay`: SuspendedStayType
    fmt.Fprintf(os.Stdout, "Response from `SuspendedStayAPI.GetSuspendedStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**suspendedStayRecordId** | **string** | Suspended Stay Record ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSuspendedStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuspendedStayType**](SuspendedStayType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSuspendedStays

> SuspendedStaySummariesType GetSuspendedStays(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReservationStatus(reservationStatus).ImportDate(importDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Suspended Stays



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel code. (optional)
    reservationStatus := "reservationStatus_example" // string | Status of reservation. (optional)
    importDate := time.Now() // string | Date of creation or import of stay. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 20)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SuspendedStayAPI.GetSuspendedStays(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReservationStatus(reservationStatus).ImportDate(importDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SuspendedStayAPI.GetSuspendedStays``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSuspendedStays`: SuspendedStaySummariesType
    fmt.Fprintf(os.Stdout, "Response from `SuspendedStayAPI.GetSuspendedStays`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSuspendedStaysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel code. | 
 **reservationStatus** | **string** | Status of reservation. | 
 **importDate** | **string** | Date of creation or import of stay. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 20]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuspendedStaySummariesType**](SuspendedStaySummariesType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutProcessSuspendedStays

> SuspendedStayErrorsType PutProcessSuspendedStays(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SuspendedStayRecordId(suspendedStayRecordId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process Suspended Stays



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    suspendedStayRecordId := *openapiclient.NewSuspendedStayDetails() // SuspendedStayDetails | Request object for change/modification of Suspended Stay, including Revenue, Rate and Membership details. If no Suspended Stay Record IDs are sent in the body all suspended stays will be processed.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SuspendedStayAPI.PutProcessSuspendedStays(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SuspendedStayRecordId(suspendedStayRecordId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SuspendedStayAPI.PutProcessSuspendedStays``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProcessSuspendedStays`: SuspendedStayErrorsType
    fmt.Fprintf(os.Stdout, "Response from `SuspendedStayAPI.PutProcessSuspendedStays`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutProcessSuspendedStaysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **suspendedStayRecordId** | [**SuspendedStayDetails**](SuspendedStayDetails.md) | Request object for change/modification of Suspended Stay, including Revenue, Rate and Membership details. If no Suspended Stay Record IDs are sent in the body all suspended stays will be processed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuspendedStayErrorsType**](SuspendedStayErrorsType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSuspendedStay

> Status PutSuspendedStay(ctx, suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SuspendedStay(suspendedStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a Suspended Stay by the Suspended Stay Record ID.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    suspendedStayRecordId := "suspendedStayRecordId_example" // string | Suspended Stay Record ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    suspendedStay := *openapiclient.NewSuspendedStayType() // SuspendedStayType | Request object for change/modification of Suspended Stay, including Revenue, Rate and Membership details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SuspendedStayAPI.PutSuspendedStay(context.Background(), suspendedStayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SuspendedStay(suspendedStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SuspendedStayAPI.PutSuspendedStay``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSuspendedStay`: Status
    fmt.Fprintf(os.Stdout, "Response from `SuspendedStayAPI.PutSuspendedStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**suspendedStayRecordId** | **string** | Suspended Stay Record ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSuspendedStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **suspendedStay** | [**SuspendedStayType**](SuspendedStayType.md) | Request object for change/modification of Suspended Stay, including Revenue, Rate and Membership details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

