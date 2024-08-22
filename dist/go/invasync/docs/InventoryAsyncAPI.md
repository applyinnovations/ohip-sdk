# \InventoryAsyncAPI

All URIs are relative to */inv/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRevenueInventoryStatistics**](InventoryAsyncAPI.md#GetRevenueInventoryStatistics) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId} | Get results of a revenue inventory statistics process
[**GetRevenueInventoryStatisticsProcessStatus**](InventoryAsyncAPI.md#GetRevenueInventoryStatisticsProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId} | Check status of Inventory Revenue Statistic process
[**GetSellLimits**](InventoryAsyncAPI.md#GetSellLimits) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId} | Get status for sell limits for a property.
[**GetSellLimitsProcessStatus**](InventoryAsyncAPI.md#GetSellLimitsProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId} | Get the status for sell limits asynchronous process
[**PostSellLimitsProcess**](InventoryAsyncAPI.md#PostSellLimitsProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits | Create sell limit by date.
[**StartRevenueInventoryStatisticsProcess**](InventoryAsyncAPI.md#StartRevenueInventoryStatisticsProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics | Start process to get hotel inventory revenue statistics



## GetRevenueInventoryStatistics

> RevenueInventoryStatisticsDetails GetRevenueInventoryStatistics(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get results of a revenue inventory statistics process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
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
    resp, r, err := apiClient.InventoryAsyncAPI.GetRevenueInventoryStatistics(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.GetRevenueInventoryStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueInventoryStatistics`: RevenueInventoryStatisticsDetails
    fmt.Fprintf(os.Stdout, "Response from `InventoryAsyncAPI.GetRevenueInventoryStatistics`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetRevenueInventoryStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueInventoryStatisticsDetails**](RevenueInventoryStatisticsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueInventoryStatisticsProcessStatus

> GetRevenueInventoryStatisticsProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Check status of Inventory Revenue Statistic process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
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
    r, err := apiClient.InventoryAsyncAPI.GetRevenueInventoryStatisticsProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.GetRevenueInventoryStatisticsProcessStatus``: %v\n", err)
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

Other parameters are passed through a pointer to a apiGetRevenueInventoryStatisticsProcessStatusRequest struct via the builder pattern


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


## GetSellLimits

> SellLimitByDateStatus GetSellLimits(ctx, requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get status for sell limits for a property.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
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
    resp, r, err := apiClient.InventoryAsyncAPI.GetSellLimits(context.Background(), requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.GetSellLimits``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSellLimits`: SellLimitByDateStatus
    fmt.Fprintf(os.Stdout, "Response from `InventoryAsyncAPI.GetSellLimits`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetSellLimitsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SellLimitByDateStatus**](SellLimitByDateStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSellLimitsProcessStatus

> GetSellLimitsProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get the status for sell limits asynchronous process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
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
    r, err := apiClient.InventoryAsyncAPI.GetSellLimitsProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.GetSellLimitsProcessStatus``: %v\n", err)
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

Other parameters are passed through a pointer to a apiGetSellLimitsProcessStatusRequest struct via the builder pattern


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


## PostSellLimitsProcess

> PostSellLimitsProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellLimitsByDate(sellLimitsByDate).AcceptLanguage(acceptLanguage).Execute()

Create sell limit by date.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
)

func main() {
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellLimitsByDate := []openapiclient.SellLimitByDateType{*openapiclient.NewSellLimitByDateType()} // []SellLimitByDateType | Request for setting sell limits for house, room type, room class.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.InventoryAsyncAPI.PostSellLimitsProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellLimitsByDate(sellLimitsByDate).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.PostSellLimitsProcess``: %v\n", err)
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

Other parameters are passed through a pointer to a apiPostSellLimitsProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellLimitsByDate** | [**[]SellLimitByDateType**](SellLimitByDateType.md) | Request for setting sell limits for house, room type, room class. | 
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


## StartRevenueInventoryStatisticsProcess

> StartRevenueInventoryStatisticsProcess(ctx, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()

Start process to get hotel inventory revenue statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/invasync"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteria := *openapiclient.NewRevenueInventoryStatisticsSearchType() // RevenueInventoryStatisticsSearchType | Request object for fetching revenue inventory statistics asynchronously.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.InventoryAsyncAPI.StartRevenueInventoryStatisticsProcess(context.Background(), extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Criteria(criteria).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryAsyncAPI.StartRevenueInventoryStatisticsProcess``: %v\n", err)
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

Other parameters are passed through a pointer to a apiStartRevenueInventoryStatisticsProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteria** | [**RevenueInventoryStatisticsSearchType**](RevenueInventoryStatisticsSearchType.md) | Request object for fetching revenue inventory statistics asynchronously. | 
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

