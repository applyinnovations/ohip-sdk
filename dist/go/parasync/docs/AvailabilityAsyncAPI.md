# \AvailabilityAsyncAPI

All URIs are relative to */par/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRestrictions**](AvailabilityAsyncAPI.md#GetRestrictions) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions/{requestId} | Get status for created restrictions.
[**GetRestrictionsProcessStatus**](AvailabilityAsyncAPI.md#GetRestrictionsProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions/{requestId} | Check status of Restrictions
[**PostRestrictionsProcess**](AvailabilityAsyncAPI.md#PostRestrictionsProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions | Create restrictions in OPERA Cloud.



## GetRestrictions

> RestrictionsStatus GetRestrictions(ctx, hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get status for created restrictions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/parasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    requestId := "requestId_example" // string | Unique ID to fetch status of created restrictions.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAsyncAPI.GetRestrictions(context.Background(), hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAsyncAPI.GetRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRestrictions`: RestrictionsStatus
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAsyncAPI.GetRestrictions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**requestId** | **string** | Unique ID to fetch status of created restrictions. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRestrictionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RestrictionsStatus**](RestrictionsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRestrictionsProcessStatus

> GetRestrictionsProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Check status of Restrictions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/parasync"
)

func main() {
    requestId := "requestId_example" // string | Unique ID to fetch status of created restrictions.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.AvailabilityAsyncAPI.GetRestrictionsProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAsyncAPI.GetRestrictionsProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID to fetch status of created restrictions. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRestrictionsProcessStatusRequest struct via the builder pattern


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
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRestrictionsProcess

> []InstanceLink PostRestrictionsProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Restrictions(restrictions).AcceptLanguage(acceptLanguage).Execute()

Create restrictions in OPERA Cloud.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/parasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    restrictions := *openapiclient.NewRestrictions() // Restrictions | Request for configuring restrictions.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAsyncAPI.PostRestrictionsProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Restrictions(restrictions).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAsyncAPI.PostRestrictionsProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRestrictionsProcess`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAsyncAPI.PostRestrictionsProcess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**extSystemCode** | **string** | Unique code of the external system | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRestrictionsProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **restrictions** | [**Restrictions**](Restrictions.md) | Request for configuring restrictions. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InstanceLink**](InstanceLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

