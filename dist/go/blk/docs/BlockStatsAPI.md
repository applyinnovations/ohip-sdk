# \BlockStatsAPI

All URIs are relative to */blk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlockStats**](BlockStatsAPI.md#GetBlockStats) | **Get** /blocks/statistics | Get Block statistics



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
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockStatsAPI.GetBlockStats(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReportCode(reportCode).ReportEndDate(reportEndDate).ReportStartDate(reportStartDate).StatisticalCode(statisticalCode).ReportParametersParameterName(reportParametersParameterName).ReportParametersParameterValue(reportParametersParameterValue).BlockOwnersCode(blockOwnersCode).BlockStatusCode(blockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockStatsAPI.GetBlockStats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStats`: BlockStats
    fmt.Fprintf(os.Stdout, "Response from `BlockStatsAPI.GetBlockStats`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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

