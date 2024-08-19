# \BlockAsyncAPI

All URIs are relative to */blk/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlockAllocationSummary**](BlockAsyncAPI.md#GetBlockAllocationSummary) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId} | This API returns a hotel&#39;s block allocation summary for a scheduled process.
[**GetBlockAllocationSummaryProcessStatus**](BlockAsyncAPI.md#GetBlockAllocationSummaryProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**StartBlockAllocationSummaryProcess**](BlockAsyncAPI.md#StartBlockAllocationSummaryProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary | This API facilitates fetching block allocation summary for a Hotel.



## GetBlockAllocationSummary

> []BlockAllocationSummaryType GetBlockAllocationSummary(ctx, requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns a hotel's block allocation summary for a scheduled process.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkasync"
)

func main() {
    requestId := "requestId_example" // string | 
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.GetBlockAllocationSummary(context.Background(), requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetBlockAllocationSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAllocationSummary`: []BlockAllocationSummaryType
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.GetBlockAllocationSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**hotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAllocationSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]BlockAllocationSummaryType**](BlockAllocationSummaryType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockAllocationSummaryProcessStatus

> GetBlockAllocationSummaryProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns the status of asynchronous process scheduled for given id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkasync"
)

func main() {
    requestId := "requestId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.BlockAsyncAPI.GetBlockAllocationSummaryProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetBlockAllocationSummaryProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAllocationSummaryProcessStatusRequest struct via the builder pattern


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


## StartBlockAllocationSummaryProcess

> StartBlockAllocationSummaryProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()

This API facilitates fetching block allocation summary for a Hotel.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkasync"
)

func main() {
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewCriteria() // Criteria | Request object for fetching block allocation summary asynchronously.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.BlockAsyncAPI.StartBlockAllocationSummaryProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.StartBlockAllocationSummaryProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartBlockAllocationSummaryProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**Criteria**](Criteria.md) | Request object for fetching block allocation summary asynchronously. | 
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

