# \INVStatsAPI

All URIs are relative to */inv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlockInventoryStatistics**](INVStatsAPI.md#GetBlockInventoryStatistics) | **Get** /hotels/{hotelId}/blockInventoryStatistics | Get block inventory statistics
[**GetBlockInventoryStatisticsMultipleHotelIds**](INVStatsAPI.md#GetBlockInventoryStatisticsMultipleHotelIds) | **Get** /blockInventoryStatistics | Get block inventory statistics for multiple hotel Ids
[**GetInventoryStatistics**](INVStatsAPI.md#GetInventoryStatistics) | **Get** /hotels/{hotelId}/inventoryStatistics | Get hotel inventory



## GetBlockInventoryStatistics

> BlockInventoryStatistic GetBlockInventoryStatistics(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeBlocksWithNoRoom(includeBlocksWithNoRoom).IncludeOverbooking(includeOverbooking).IncludeOpportunities(includeOpportunities).IncludeTentativeInventory(includeTentativeInventory).Limit(limit).Offset(offset).EndDateRange(endDateRange).StartDateRange(startDateRange).BlockStatusCodes(blockStatusCodes).OriginCodes(originCodes).RoomOwnerCodes(roomOwnerCodes).BlockOwners(blockOwners).SummarySortByCode(summarySortByCode).DetailSortByCode(detailSortByCode).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block inventory statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/inv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where block inventory statistics are searched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    includeBlocksWithNoRoom := true // bool | If set to true, includes business blocks without rooms. (optional)
    includeOverbooking := true // bool | If set to true, the house overbooking limit for each day is added to the total number of physical rooms. (optional)
    includeOpportunities := true // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional)
    includeTentativeInventory := true // bool | If set to true, includes non-deduct business blocks and group reservations in the Sales Allowance Available Rooms and House Availability statistics. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    endDateRange := time.Now() // string | The ending value of the date range. (optional)
    startDateRange := time.Now() // string | The starting value of the date range. (optional)
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    originCodes := []string{"Inner_example"} // []string |  (optional)
    roomOwnerCodes := []string{"Inner_example"} // []string |  (optional)
    blockOwners := []string{"Inner_example"} // []string |  (optional)
    summarySortByCode := "summarySortByCode_example" // string | Supported block inventory statistical sorting. (optional)
    detailSortByCode := "detailSortByCode_example" // string | Supported block inventory statistical sorting. (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for block inventory statistics instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.INVStatsAPI.GetBlockInventoryStatistics(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeBlocksWithNoRoom(includeBlocksWithNoRoom).IncludeOverbooking(includeOverbooking).IncludeOpportunities(includeOpportunities).IncludeTentativeInventory(includeTentativeInventory).Limit(limit).Offset(offset).EndDateRange(endDateRange).StartDateRange(startDateRange).BlockStatusCodes(blockStatusCodes).OriginCodes(originCodes).RoomOwnerCodes(roomOwnerCodes).BlockOwners(blockOwners).SummarySortByCode(summarySortByCode).DetailSortByCode(detailSortByCode).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `INVStatsAPI.GetBlockInventoryStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockInventoryStatistics`: BlockInventoryStatistic
    fmt.Fprintf(os.Stdout, "Response from `INVStatsAPI.GetBlockInventoryStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where block inventory statistics are searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockInventoryStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **includeBlocksWithNoRoom** | **bool** | If set to true, includes business blocks without rooms. | 
 **includeOverbooking** | **bool** | If set to true, the house overbooking limit for each day is added to the total number of physical rooms. | 
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | 
 **includeTentativeInventory** | **bool** | If set to true, includes non-deduct business blocks and group reservations in the Sales Allowance Available Rooms and House Availability statistics. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **endDateRange** | **string** | The ending value of the date range. | 
 **startDateRange** | **string** | The starting value of the date range. | 
 **blockStatusCodes** | **[]string** |  | 
 **originCodes** | **[]string** |  | 
 **roomOwnerCodes** | **[]string** |  | 
 **blockOwners** | **[]string** |  | 
 **summarySortByCode** | **string** | Supported block inventory statistical sorting. | 
 **detailSortByCode** | **string** | Supported block inventory statistical sorting. | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **fetchInstructions** | **[]string** | Type for block inventory statistics instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockInventoryStatistic**](BlockInventoryStatistic.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockInventoryStatisticsMultipleHotelIds

> BlockInventoryStatistic GetBlockInventoryStatisticsMultipleHotelIds(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeBlocksWithNoRoom(includeBlocksWithNoRoom).IncludeOverbooking(includeOverbooking).IncludeOpportunities(includeOpportunities).IncludeTentativeInventory(includeTentativeInventory).Limit(limit).Offset(offset).EndDateRange(endDateRange).StartDateRange(startDateRange).BlockStatusCodes(blockStatusCodes).OriginCodes(originCodes).RoomOwnerCodes(roomOwnerCodes).BlockOwners(blockOwners).SummarySortByCode(summarySortByCode).DetailSortByCode(detailSortByCode).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block inventory statistics for multiple hotel Ids



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/inv"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    includeBlocksWithNoRoom := true // bool | If set to true, includes business blocks without rooms. (optional)
    includeOverbooking := true // bool | If set to true, the house overbooking limit for each day is added to the total number of physical rooms. (optional)
    includeOpportunities := true // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional)
    includeTentativeInventory := true // bool | If set to true, includes non-deduct business blocks and group reservations in the Sales Allowance Available Rooms and House Availability statistics. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    endDateRange := time.Now() // string | The ending value of the date range. (optional)
    startDateRange := time.Now() // string | The starting value of the date range. (optional)
    blockStatusCodes := []string{"Inner_example"} // []string | Collection of configured Block Status Codes. (optional)
    originCodes := []string{"Inner_example"} // []string | Collection of Origin Codes. (optional)
    roomOwnerCodes := []string{"Inner_example"} // []string | Collection of Room Owners. (optional)
    blockOwners := []string{"Inner_example"} // []string | Collection of block owners. (optional)
    summarySortByCode := "summarySortByCode_example" // string | Supported block inventory statistical sorting for summary information (optional)
    detailSortByCode := "detailSortByCode_example" // string | Supported block inventory statistical sorting for detailed block information (optional)
    sunday := true // bool | If selected, Sundays are included in search result. (optional)
    monday := true // bool | If selected, Mondays are included in search result. (optional)
    tuesday := true // bool | If selected, Tuesdays are included in search result. (optional)
    wednesday := true // bool | If selected, Wednesdays are included in search result. (optional)
    thursday := true // bool | If selected, Thursdays are included in search result. (optional)
    friday := true // bool | If selected, Fridays are included in search result. (optional)
    saturday := true // bool | If selected, Saturdays are included in search result. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for block inventory statistics instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.INVStatsAPI.GetBlockInventoryStatisticsMultipleHotelIds(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeBlocksWithNoRoom(includeBlocksWithNoRoom).IncludeOverbooking(includeOverbooking).IncludeOpportunities(includeOpportunities).IncludeTentativeInventory(includeTentativeInventory).Limit(limit).Offset(offset).EndDateRange(endDateRange).StartDateRange(startDateRange).BlockStatusCodes(blockStatusCodes).OriginCodes(originCodes).RoomOwnerCodes(roomOwnerCodes).BlockOwners(blockOwners).SummarySortByCode(summarySortByCode).DetailSortByCode(detailSortByCode).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `INVStatsAPI.GetBlockInventoryStatisticsMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockInventoryStatisticsMultipleHotelIds`: BlockInventoryStatistic
    fmt.Fprintf(os.Stdout, "Response from `INVStatsAPI.GetBlockInventoryStatisticsMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockInventoryStatisticsMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **includeBlocksWithNoRoom** | **bool** | If set to true, includes business blocks without rooms. | 
 **includeOverbooking** | **bool** | If set to true, the house overbooking limit for each day is added to the total number of physical rooms. | 
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | 
 **includeTentativeInventory** | **bool** | If set to true, includes non-deduct business blocks and group reservations in the Sales Allowance Available Rooms and House Availability statistics. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **endDateRange** | **string** | The ending value of the date range. | 
 **startDateRange** | **string** | The starting value of the date range. | 
 **blockStatusCodes** | **[]string** | Collection of configured Block Status Codes. | 
 **originCodes** | **[]string** | Collection of Origin Codes. | 
 **roomOwnerCodes** | **[]string** | Collection of Room Owners. | 
 **blockOwners** | **[]string** | Collection of block owners. | 
 **summarySortByCode** | **string** | Supported block inventory statistical sorting for summary information | 
 **detailSortByCode** | **string** | Supported block inventory statistical sorting for detailed block information | 
 **sunday** | **bool** | If selected, Sundays are included in search result. | 
 **monday** | **bool** | If selected, Mondays are included in search result. | 
 **tuesday** | **bool** | If selected, Tuesdays are included in search result. | 
 **wednesday** | **bool** | If selected, Wednesdays are included in search result. | 
 **thursday** | **bool** | If selected, Thursdays are included in search result. | 
 **friday** | **bool** | If selected, Fridays are included in search result. | 
 **saturday** | **bool** | If selected, Saturdays are included in search result. | 
 **fetchInstructions** | **[]string** | Type for block inventory statistics instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockInventoryStatistic**](BlockInventoryStatistic.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInventoryStatistics

> []StatisticType GetInventoryStatistics(ctx, hotelId).DateRangeEnd(dateRangeEnd).ReportCode(reportCode).DateRangeStart(dateRangeStart).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ParameterName(parameterName).ParameterValue(parameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/inv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where inventory statistics are searched.
    dateRangeEnd := time.Now() // string | The ending value of the date range.
    reportCode := "reportCode_example" // string | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement.
    dateRangeStart := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    parameterName := []string{"ParameterName_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.INVStatsAPI.GetInventoryStatistics(context.Background(), hotelId).DateRangeEnd(dateRangeEnd).ReportCode(reportCode).DateRangeStart(dateRangeStart).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ParameterName(parameterName).ParameterValue(parameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `INVStatsAPI.GetInventoryStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryStatistics`: []StatisticType
    fmt.Fprintf(os.Stdout, "Response from `INVStatsAPI.GetInventoryStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where inventory statistics are searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInventoryStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateRangeEnd** | **string** | The ending value of the date range. | 
 **reportCode** | **string** | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. | 
 **dateRangeStart** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]StatisticType**](StatisticType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

