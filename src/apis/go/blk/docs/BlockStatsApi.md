# \BlockStatsApi

All URIs are relative to */blk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteBlockStatsServiceCache**](BlockStatsApi.md#DeleteBlockStatsServiceCache) | **Delete** /services/blockStats/cache | Delete Block Stat Service cache
[**GetBlockStats**](BlockStatsApi.md#GetBlockStats) | **Get** /blocks/statistics | Get Block statistics
[**PingBlockStatsService**](BlockStatsApi.md#PingBlockStatsService) | **Get** /services/blockStats/status | Retrieve/Ping  Block stats service



## DeleteBlockStatsServiceCache

> Status DeleteBlockStatsServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Stat Service cache



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockStatsApi.DeleteBlockStatsServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockStatsApi.DeleteBlockStatsServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockStatsServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockStatsApi.DeleteBlockStatsServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockStatsServiceCacheRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


## GetBlockStats

> BlockStats GetBlockStats(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReportCode(reportCode).ReportEndDate(reportEndDate).ReportStartDate(reportStartDate).StatisticalCode(statisticalCode).ReportParametersParameterName(reportParametersParameterName).ReportParametersParameterValue(reportParametersParameterValue).BlockOwnersCode(blockOwnersCode).BlockStatusCode(blockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property context of the request. (optional)
    reportCode := []string{"ReportCode_example"} // []string | Supported Housekeeping report codes. (optional)
    reportEndDate := []string{time.Now()} // []string | End date of the report. (optional)
    reportStartDate := []string{time.Now()} // []string | Start date of the report. (optional)
    statisticalCode := []string{"StatisticalCode_example"} // []string | Supported housekeeping statistical codes. (optional)
    reportParametersParameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    reportParametersParameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    blockOwnersCode := []string{"BlockOwnersCode_example"} // []string | Supported Housekeeping report codes. (optional)
    blockStatusCode := []string{"BlockStatusCode_example"} // []string | Supported Housekeeping report codes. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockStatsApi.GetBlockStats(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReportCode(reportCode).ReportEndDate(reportEndDate).ReportStartDate(reportStartDate).StatisticalCode(statisticalCode).ReportParametersParameterName(reportParametersParameterName).ReportParametersParameterValue(reportParametersParameterValue).BlockOwnersCode(blockOwnersCode).BlockStatusCode(blockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockStatsApi.GetBlockStats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStats`: BlockStats
    fmt.Fprintf(os.Stdout, "Response from `BlockStatsApi.GetBlockStats`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Property context of the request. | 
 **reportCode** | **[]string** | Supported Housekeeping report codes. | 
 **reportEndDate** | **[]string** | End date of the report. | 
 **reportStartDate** | **[]string** | Start date of the report. | 
 **statisticalCode** | **[]string** | Supported housekeeping statistical codes. | 
 **reportParametersParameterName** | **[]string** | Name of the parameter. | 
 **reportParametersParameterValue** | **[]string** | Value of the parameter. | 
 **blockOwnersCode** | **[]string** | Supported Housekeeping report codes. | 
 **blockStatusCode** | **[]string** | Supported Housekeeping report codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockStats**](BlockStats.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingBlockStatsService

> OperaVersion PingBlockStatsService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieve/Ping  Block stats service



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockStatsApi.PingBlockStatsService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockStatsApi.PingBlockStatsService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingBlockStatsService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `BlockStatsApi.PingBlockStatsService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingBlockStatsServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaVersion**](OperaVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

