# \IntegrationProcessorApi

All URIs are relative to */int/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBusinessEvents**](IntegrationProcessorApi.md#GetBusinessEvents) | **Get** /externalSystem/{extSystemCode}/hotels/{hotelId}/businessEvents | Get Business Events by External System and Hotel ID
[**GetBusinessEventsByExternalSystem**](IntegrationProcessorApi.md#GetBusinessEventsByExternalSystem) | **Get** /externalSystem/{extSystemCode}/businessEvents | Get Business Events by External System



## GetBusinessEvents

> BusinessEvents GetBusinessEvents(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Business Events by External System and Hotel ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    extSystemCode := "extSystemCode_example" // string | External system code which will be used to dequeue the events.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Number of messages web service should dequeue from the BE queue. (optional) (default to 1)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.IntegrationProcessorApi.GetBusinessEvents(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationProcessorApi.GetBusinessEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBusinessEvents`: BusinessEvents
    fmt.Fprintf(os.Stdout, "Response from `IntegrationProcessorApi.GetBusinessEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 
**extSystemCode** | **string** | External system code which will be used to dequeue the events. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBusinessEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Number of messages web service should dequeue from the BE queue. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BusinessEvents**](BusinessEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBusinessEventsByExternalSystem

> BusinessEvents GetBusinessEventsByExternalSystem(ctx, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Business Events by External System



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | External system code which will be used to dequeue the events
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Number of messages web service should dequeue from the BE queue. (optional) (default to 1)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.IntegrationProcessorApi.GetBusinessEventsByExternalSystem(context.Background(), extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationProcessorApi.GetBusinessEventsByExternalSystem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBusinessEventsByExternalSystem`: BusinessEvents
    fmt.Fprintf(os.Stdout, "Response from `IntegrationProcessorApi.GetBusinessEventsByExternalSystem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | External system code which will be used to dequeue the events | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBusinessEventsByExternalSystemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Number of messages web service should dequeue from the BE queue. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BusinessEvents**](BusinessEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

