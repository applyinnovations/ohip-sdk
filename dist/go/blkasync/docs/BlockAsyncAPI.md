# \BlockAsyncAPI

All URIs are relative to */blk/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllocationRangesProcessInfo**](BlockAsyncAPI.md#GetAllocationRangesProcessInfo) | **Get** /hotels/{hotelId}/blocks/{blockId}/allocationRanges/{requestId} | This API returns information about the set allocation ranges process.
[**GetAllocationRangesProcessStatus**](BlockAsyncAPI.md#GetAllocationRangesProcessStatus) | **Head** /hotels/{hotelId}/blocks/{blockId}/allocationRanges/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**GetBlockAllocationProcessInfo**](BlockAsyncAPI.md#GetBlockAllocationProcessInfo) | **Get** /hotels/{hotelId}/blocks/{blockId}/allocation/{requestId} | This API returns information about the set allocation process.
[**GetBlockAllocationProcessStatus**](BlockAsyncAPI.md#GetBlockAllocationProcessStatus) | **Head** /hotels/{hotelId}/blocks/{blockId}/allocation/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**GetBlockAllocationSummary**](BlockAsyncAPI.md#GetBlockAllocationSummary) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId} | This API returns a hotel&#39;s block allocation summary for a scheduled process.
[**GetBlockAllocationSummaryProcessStatus**](BlockAsyncAPI.md#GetBlockAllocationSummaryProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**GetShiftBlockProcessInfo**](BlockAsyncAPI.md#GetShiftBlockProcessInfo) | **Get** /hotels/{hotelId}/blocks/{blockId}/shift/{requestId} | This API returns information about the shift block process.
[**GetShiftBlockProcessStatus**](BlockAsyncAPI.md#GetShiftBlockProcessStatus) | **Head** /hotels/{hotelId}/blocks/{blockId}/shift/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**StartAllocationRangesProcess**](BlockAsyncAPI.md#StartAllocationRangesProcess) | **Post** /hotels/{hotelId}/blocks/{blockId}/allocationRanges | This API facilitates setting Block Allocation Ranges for a Hotel.
[**StartBlockAllocationProcess**](BlockAsyncAPI.md#StartBlockAllocationProcess) | **Post** /hotels/{hotelId}/blocks/{blockId}/allocation | This API facilitates setting Block Allocations for a Hotel.
[**StartBlockAllocationSummaryProcess**](BlockAsyncAPI.md#StartBlockAllocationSummaryProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary | This API facilitates fetching block allocation summary for a Hotel.
[**StartShiftBlockProcess**](BlockAsyncAPI.md#StartShiftBlockProcess) | **Post** /hotels/{hotelId}/blocks/{blockId}/shift | Shifts the Block start date.



## GetAllocationRangesProcessInfo

> ProcessDetails GetAllocationRangesProcessInfo(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns information about the set allocation ranges process.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.GetAllocationRangesProcessInfo(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetAllocationRangesProcessInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAllocationRangesProcessInfo`: ProcessDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.GetAllocationRangesProcessInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllocationRangesProcessInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessDetails**](ProcessDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllocationRangesProcessStatus

> GetAllocationRangesProcessStatus(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

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
    hotelId := "hotelId_example" // string | 
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.BlockAsyncAPI.GetAllocationRangesProcessStatus(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetAllocationRangesProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllocationRangesProcessStatusRequest struct via the builder pattern


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


## GetBlockAllocationProcessInfo

> ProcessDetails GetBlockAllocationProcessInfo(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns information about the set allocation process.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.GetBlockAllocationProcessInfo(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetBlockAllocationProcessInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAllocationProcessInfo`: ProcessDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.GetBlockAllocationProcessInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAllocationProcessInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessDetails**](ProcessDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockAllocationProcessStatus

> GetBlockAllocationProcessStatus(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

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
    hotelId := "hotelId_example" // string | 
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.BlockAsyncAPI.GetBlockAllocationProcessStatus(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetBlockAllocationProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAllocationProcessStatusRequest struct via the builder pattern


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
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetShiftBlockProcessInfo

> ProcessDetails GetShiftBlockProcessInfo(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns information about the shift block process.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.GetShiftBlockProcessInfo(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetShiftBlockProcessInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetShiftBlockProcessInfo`: ProcessDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.GetShiftBlockProcessInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetShiftBlockProcessInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessDetails**](ProcessDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetShiftBlockProcessStatus

> GetShiftBlockProcessStatus(ctx, hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

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
    hotelId := "hotelId_example" // string | 
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    requestId := "requestId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.BlockAsyncAPI.GetShiftBlockProcessStatus(context.Background(), hotelId, blockId, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.GetShiftBlockProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetShiftBlockProcessStatusRequest struct via the builder pattern


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


## StartAllocationRangesProcess

> []InstanceLink StartAllocationRangesProcess(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllocationRanges(allocationRanges).AcceptLanguage(acceptLanguage).Execute()

This API facilitates setting Block Allocation Ranges for a Hotel.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocationRanges := *openapiclient.NewAllocationRanges() // AllocationRanges | Request for updating block allocations for ranges of dates and list of room types.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.StartAllocationRangesProcess(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllocationRanges(allocationRanges).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.StartAllocationRangesProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartAllocationRangesProcess`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.StartAllocationRangesProcess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartAllocationRangesProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocationRanges** | [**AllocationRanges**](AllocationRanges.md) | Request for updating block allocations for ranges of dates and list of room types. | 
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


## StartBlockAllocationProcess

> []InstanceLink StartBlockAllocationProcess(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).AcceptLanguage(acceptLanguage).Execute()

This API facilitates setting Block Allocations for a Hotel.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocation := *openapiclient.NewAllocation() // Allocation | A Request message that sets the room allocations as a collection of room types and dates.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.StartBlockAllocationProcess(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.StartBlockAllocationProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartBlockAllocationProcess`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.StartBlockAllocationProcess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartBlockAllocationProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocation** | [**Allocation**](Allocation.md) | A Request message that sets the room allocations as a collection of room types and dates. | 
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


## StartBlockAllocationSummaryProcess

> []InstanceLink StartBlockAllocationSummaryProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()

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
    resp, r, err := apiClient.BlockAsyncAPI.StartBlockAllocationSummaryProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.StartBlockAllocationSummaryProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartBlockAllocationSummaryProcess`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.StartBlockAllocationSummaryProcess`: %v\n", resp)
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

[**[]InstanceLink**](InstanceLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartShiftBlockProcess

> []InstanceLink StartShiftBlockProcess(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToShift(blockToShift).AcceptLanguage(acceptLanguage).Execute()

Shifts the Block start date.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToShift := *openapiclient.NewBlockToShift() // BlockToShift | Request object to shift business block starting date.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAsyncAPI.StartShiftBlockProcess(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToShift(blockToShift).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAsyncAPI.StartShiftBlockProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartShiftBlockProcess`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `BlockAsyncAPI.StartShiftBlockProcess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartShiftBlockProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToShift** | [**BlockToShift**](BlockToShift.md) | Request object to shift business block starting date. | 
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

