# \BlockConfigApi

All URIs are relative to */blk/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteBlockConfigServiceCache**](BlockConfigApi.md#DeleteBlockConfigServiceCache) | **Delete** /services/block/cache |  clear cache
[**DeleteBlockSalesAllowanceRange**](BlockConfigApi.md#DeleteBlockSalesAllowanceRange) | **Delete** /hotels/{hotelId}/blockSalesAllowanceRange | Delete block sales allowance range
[**DeleteBlockStatusCode**](BlockConfigApi.md#DeleteBlockStatusCode) | **Delete** /blockStatusCodes/{blockStatusCode} | Delete block status code
[**DeleteWashSchedule**](BlockConfigApi.md#DeleteWashSchedule) | **Delete** /hotels/{hotelId}/washSchedules/{washScheduleCode} | Delete block wash schedule
[**GetBlockSalesAllowance**](BlockConfigApi.md#GetBlockSalesAllowance) | **Get** /hotels/{hotelId}/blockSalesAllowance | Get Block Sales Allowance
[**GetBlockStatusCodes**](BlockConfigApi.md#GetBlockStatusCodes) | **Get** /blockStatusCodes | Get block status codes
[**GetNextBlockStatusCodes**](BlockConfigApi.md#GetNextBlockStatusCodes) | **Get** /blockStatusCodes/nextStatusCodes | Get next block status codes
[**GetSalesManagerGoals**](BlockConfigApi.md#GetSalesManagerGoals) | **Get** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals | Get Sales Manager Goals by Hotel
[**GetSalesManagerGoalsMultipleHotelIds**](BlockConfigApi.md#GetSalesManagerGoalsMultipleHotelIds) | **Get** /salesManagers/{salesManagerId}/salesManagerGoals | Get Sales Manager Goals
[**GetSalesManagers**](BlockConfigApi.md#GetSalesManagers) | **Get** /hotels/{hotelId}/salesManagers | Get Sales Managers by Hotel.
[**GetSalesManagersMultipleHotelIds**](BlockConfigApi.md#GetSalesManagersMultipleHotelIds) | **Get** /salesManagers | Get Sales Managers.
[**GetWashSchedule**](BlockConfigApi.md#GetWashSchedule) | **Get** /washSchedules | Get block wash schedule
[**PingBlockConfigService**](BlockConfigApi.md#PingBlockConfigService) | **Get** /services/block/status |  ping
[**PostBlockStatusCode**](BlockConfigApi.md#PostBlockStatusCode) | **Post** /blockStatusCodes | Create a block status code
[**PostSalesManagerGoals**](BlockConfigApi.md#PostSalesManagerGoals) | **Post** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals | Create Sales Manager Goals
[**PostWashSchedule**](BlockConfigApi.md#PostWashSchedule) | **Post** /hotels/{hotelId}/washSchedules | Create block wash schedule
[**PutBlockStatusCode**](BlockConfigApi.md#PutBlockStatusCode) | **Put** /blockStatusCodes/{blockStatusCode} | Change block status code
[**PutNextBlockStatusCodes**](BlockConfigApi.md#PutNextBlockStatusCodes) | **Put** /blockStatusCodes/{srcBlockStatusCode}/nextStatusCodes | Change next block status codes
[**PutSalesManagerGoals**](BlockConfigApi.md#PutSalesManagerGoals) | **Put** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId} | Update Sales Manager Goal in a hotel by ID
[**PutWashSchedule**](BlockConfigApi.md#PutWashSchedule) | **Put** /hotels/{hotelId}/washSchedules/{washScheduleCode} | Change block wash schedule
[**RemoveSalesManagerGoal**](BlockConfigApi.md#RemoveSalesManagerGoal) | **Delete** /salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId} | Delete Sale Manager Goal
[**RemoveSalesManagerGoals**](BlockConfigApi.md#RemoveSalesManagerGoals) | **Delete** /salesManagers/{salesManagerId}/salesManagerGoals | Delete Sale Manager Goals
[**SetBlockSalesAllowanceRange**](BlockConfigApi.md#SetBlockSalesAllowanceRange) | **Put** /hotels/{hotelId}/blockSalesAllowanceRange | Set block sales allowance range



## DeleteBlockConfigServiceCache

> Status DeleteBlockConfigServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 clear cache



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.DeleteBlockConfigServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.DeleteBlockConfigServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockConfigServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.DeleteBlockConfigServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockConfigServiceCacheRequest struct via the builder pattern


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


## DeleteBlockSalesAllowanceRange

> Status DeleteBlockSalesAllowanceRange(ctx, hotelId).EndDate(endDate).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete block sales allowance range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    endDate := time.Now() // string | The ending value of the date range.
    startDate := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.DeleteBlockSalesAllowanceRange(context.Background(), hotelId).EndDate(endDate).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.DeleteBlockSalesAllowanceRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockSalesAllowanceRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.DeleteBlockSalesAllowanceRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockSalesAllowanceRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
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


## DeleteBlockStatusCode

> Status DeleteBlockStatusCode(ctx, blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete block status code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockStatusCode := "blockStatusCode_example" // string | OPERA Block status code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.DeleteBlockStatusCode(context.Background(), blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.DeleteBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.DeleteBlockStatusCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockStatusCode** | **string** | OPERA Block status code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockStatusCodeRequest struct via the builder pattern


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


## DeleteWashSchedule

> Status DeleteWashSchedule(ctx, washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete block wash schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    washScheduleCode := "washScheduleCode_example" // string | Unique Block Wash Code
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.DeleteWashSchedule(context.Background(), washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.DeleteWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.DeleteWashSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**washScheduleCode** | **string** | Unique Block Wash Code | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWashScheduleRequest struct via the builder pattern


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


## GetBlockSalesAllowance

> BlockSalesAllowance GetBlockSalesAllowance(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDateRange(endDateRange).StartDateRange(startDateRange).IncludeRestricted(includeRestricted).RoomTypesCodes(roomTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Sales Allowance



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endDateRange := time.Now() // string | The ending value of the date range. (optional)
    startDateRange := time.Now() // string | The starting value of the date range. (optional)
    includeRestricted := true // bool | Indicate to include restricted room types. (optional)
    roomTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetBlockSalesAllowance(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDateRange(endDateRange).StartDateRange(startDateRange).IncludeRestricted(includeRestricted).RoomTypesCodes(roomTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetBlockSalesAllowance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockSalesAllowance`: BlockSalesAllowance
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetBlockSalesAllowance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockSalesAllowanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **endDateRange** | **string** | The ending value of the date range. | 
 **startDateRange** | **string** | The starting value of the date range. | 
 **includeRestricted** | **bool** | Indicate to include restricted room types. | 
 **roomTypesCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockSalesAllowance**](BlockSalesAllowance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockStatusCodes

> StatusCodeDetails GetBlockStatusCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block status codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetBlockStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatusCodes`: StatusCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StatusCodeDetails**](StatusCodeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNextBlockStatusCodes

> NextBlockStatusCodeDetails GetNextBlockStatusCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfiguredOnly(configuredOnly).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get next block status codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    configuredOnly := true // bool | When set to true, only configured next status codes will be included (available status list will not be included). (optional)
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetNextBlockStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfiguredOnly(configuredOnly).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetNextBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNextBlockStatusCodes`: NextBlockStatusCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetNextBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNextBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **configuredOnly** | **bool** | When set to true, only configured next status codes will be included (available status list will not be included). | 
 **blockStatusCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NextBlockStatusCodeDetails**](NextBlockStatusCodeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSalesManagerGoals

> SalesManagerGoalsInfo GetSalesManagerGoals(ctx, salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Sales Manager Goals by Hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesManagerId := "salesManagerId_example" // string | Sales Manager Id required to fetch Sales Manager goals information
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    future := true // bool | Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetSalesManagerGoals(context.Background(), salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagerGoals`: SalesManagerGoalsInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetSalesManagerGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesManagerId** | **string** | Sales Manager Id required to fetch Sales Manager goals information | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesManagerGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **future** | **bool** | Use this indicator to fetch goal&#39;s having Production From or Arrival From dates later than the current business date or quarter | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SalesManagerGoalsInfo**](SalesManagerGoalsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSalesManagerGoalsMultipleHotelIds

> SalesManagerGoalsInfo GetSalesManagerGoalsMultipleHotelIds(ctx, salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Sales Manager Goals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesManagerId := "salesManagerId_example" // string | Sales Manager Id required to fetch Sales Manager goals information
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    future := true // bool | Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetSalesManagerGoalsMultipleHotelIds(context.Background(), salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetSalesManagerGoalsMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagerGoalsMultipleHotelIds`: SalesManagerGoalsInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetSalesManagerGoalsMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesManagerId** | **string** | Sales Manager Id required to fetch Sales Manager goals information | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesManagerGoalsMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **future** | **bool** | Use this indicator to fetch goal&#39;s having Production From or Arrival From dates later than the current business date or quarter | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SalesManagerGoalsInfo**](SalesManagerGoalsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSalesManagers

> SalesManagersInfo GetSalesManagers(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Sales Managers by Hotel.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    ownerCodes := []string{"Inner_example"} // []string |  (optional)
    firstName := "firstName_example" // string | First name required to fetch Sales Manager information. (optional)
    lastName := "lastName_example" // string | Last name required to fetch Sales Manager information. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetSalesManagers(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetSalesManagers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagers`: SalesManagersInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetSalesManagers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesManagersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **ownerCodes** | **[]string** |  | 
 **firstName** | **string** | First name required to fetch Sales Manager information. | 
 **lastName** | **string** | Last name required to fetch Sales Manager information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SalesManagersInfo**](SalesManagersInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSalesManagersMultipleHotelIds

> SalesManagersInfo GetSalesManagersMultipleHotelIds(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Sales Managers.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    ownerCodes := []string{"Inner_example"} // []string |  (optional)
    firstName := "firstName_example" // string | First name required to fetch Sales Manager information. (optional)
    lastName := "lastName_example" // string | Last name required to fetch Sales Manager information. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetSalesManagersMultipleHotelIds(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetSalesManagersMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagersMultipleHotelIds`: SalesManagersInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetSalesManagersMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesManagersMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **ownerCodes** | **[]string** |  | 
 **firstName** | **string** | First name required to fetch Sales Manager information. | 
 **lastName** | **string** | Last name required to fetch Sales Manager information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SalesManagersInfo**](SalesManagersInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWashSchedule

> WashScheduleDetails GetWashSchedule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).WashCodes(washCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block wash schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    washCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetWashSchedule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).WashCodes(washCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWashSchedule`: WashScheduleDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetWashSchedule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWashScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **washCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**WashScheduleDetails**](WashScheduleDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingBlockConfigService

> OperaVersion PingBlockConfigService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 ping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PingBlockConfigService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PingBlockConfigService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingBlockConfigService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PingBlockConfigService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingBlockConfigServiceRequest struct via the builder pattern


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


## PostBlockStatusCode

> Status PostBlockStatusCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a block status code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodeDetails := *openapiclient.NewPostBlockStatusCodeRequest() // PostBlockStatusCodeRequest | Request object for creating a block status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PostBlockStatusCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PostBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PostBlockStatusCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockStatusCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodeDetails** | [**PostBlockStatusCodeRequest**](PostBlockStatusCodeRequest.md) | Request object for creating a block status code. | 
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


## PostSalesManagerGoals

> Status PostSalesManagerGoals(ctx, salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateSalesManagerGoals(createSalesManagerGoals).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Sales Manager Goals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesManagerId := "salesManagerId_example" // string | Sales Manager Id required to fetch Sales Manager goals information
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createSalesManagerGoals := *openapiclient.NewPostSalesManagerGoalsRequest() // PostSalesManagerGoalsRequest | Request object for Creating Sales Manager Goal(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PostSalesManagerGoals(context.Background(), salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateSalesManagerGoals(createSalesManagerGoals).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PostSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PostSalesManagerGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesManagerId** | **string** | Sales Manager Id required to fetch Sales Manager goals information | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSalesManagerGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createSalesManagerGoals** | [**PostSalesManagerGoalsRequest**](PostSalesManagerGoalsRequest.md) | Request object for Creating Sales Manager Goal(s). | 
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


## PostWashSchedule

> Status PostWashSchedule(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create block wash schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    washScheduleCriteria := *openapiclient.NewPostWashScheduleRequest() // PostWashScheduleRequest | Operation to create new Wash Schedule Configuration under the selected property.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PostWashSchedule(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PostWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PostWashSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostWashScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **washScheduleCriteria** | [**PostWashScheduleRequest**](PostWashScheduleRequest.md) | Operation to create new Wash Schedule Configuration under the selected property. | 
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


## PutBlockStatusCode

> Status PutBlockStatusCode(ctx, blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change block status code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockStatusCode := "blockStatusCode_example" // string | OPERA Block status code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodeDetails := *openapiclient.NewPostBlockStatusCodeRequest() // PostBlockStatusCodeRequest | Request object for updating block status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PutBlockStatusCode(context.Background(), blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PutBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PutBlockStatusCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockStatusCode** | **string** | OPERA Block status code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockStatusCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodeDetails** | [**PostBlockStatusCodeRequest**](PostBlockStatusCodeRequest.md) | Request object for updating block status code. | 
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


## PutNextBlockStatusCodes

> Status PutNextBlockStatusCodes(ctx, srcBlockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NextBlockStatusCode(nextBlockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change next block status codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    srcBlockStatusCode := "srcBlockStatusCode_example" // string | OPERA Block status code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    nextBlockStatusCode := *openapiclient.NewPutNextBlockStatusCodesRequest() // PutNextBlockStatusCodesRequest | Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PutNextBlockStatusCodes(context.Background(), srcBlockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NextBlockStatusCode(nextBlockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PutNextBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNextBlockStatusCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PutNextBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**srcBlockStatusCode** | **string** | OPERA Block status code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNextBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **nextBlockStatusCode** | [**PutNextBlockStatusCodesRequest**](PutNextBlockStatusCodesRequest.md) | Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code. | 
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


## PutSalesManagerGoals

> Status PutSalesManagerGoals(ctx, salesGoalId, salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesManagerGoalsInfo(salesManagerGoalsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Sales Manager Goal in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesGoalId := "salesGoalId_example" // string | Unique Sales Goal Id assigned to a Sales Manager.
    salesManagerId := "salesManagerId_example" // string | Sales Manager Id required to put Sales Manager goals information
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    salesManagerGoalsInfo := *openapiclient.NewPutSalesManagerGoalsRequest() // PutSalesManagerGoalsRequest | Request object for modifying Sales Manager's goal.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PutSalesManagerGoals(context.Background(), salesGoalId, salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesManagerGoalsInfo(salesManagerGoalsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PutSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PutSalesManagerGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesGoalId** | **string** | Unique Sales Goal Id assigned to a Sales Manager. | 
**salesManagerId** | **string** | Sales Manager Id required to put Sales Manager goals information | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSalesManagerGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **salesManagerGoalsInfo** | [**PutSalesManagerGoalsRequest**](PutSalesManagerGoalsRequest.md) | Request object for modifying Sales Manager&#39;s goal. | 
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


## PutWashSchedule

> Status PutWashSchedule(ctx, washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change block wash schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    washScheduleCode := "washScheduleCode_example" // string | Unique Block Wash Code
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    washScheduleCriteria := *openapiclient.NewPostWashScheduleRequest() // PostWashScheduleRequest | Operation to change existing Wash Schedule Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PutWashSchedule(context.Background(), washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PutWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PutWashSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**washScheduleCode** | **string** | Unique Block Wash Code | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutWashScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **washScheduleCriteria** | [**PostWashScheduleRequest**](PostWashScheduleRequest.md) | Operation to change existing Wash Schedule Configuration. | 
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


## RemoveSalesManagerGoal

> Status RemoveSalesManagerGoal(ctx, salesGoalId, salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Sale Manager Goal



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesGoalId := "salesGoalId_example" // string | Unique Sales Goal Id assigned to a Sales Manager.
    salesManagerId := "salesManagerId_example" // string | Unique Sales Managers Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.RemoveSalesManagerGoal(context.Background(), salesGoalId, salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.RemoveSalesManagerGoal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSalesManagerGoal`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.RemoveSalesManagerGoal`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesGoalId** | **string** | Unique Sales Goal Id assigned to a Sales Manager. | 
**salesManagerId** | **string** | Unique Sales Managers Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveSalesManagerGoalRequest struct via the builder pattern


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


## RemoveSalesManagerGoals

> Status RemoveSalesManagerGoals(ctx, salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesGoalId(salesGoalId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Sale Manager Goals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    salesManagerId := "salesManagerId_example" // string | Unique Sales Managers Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    salesGoalId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.RemoveSalesManagerGoals(context.Background(), salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesGoalId(salesGoalId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.RemoveSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.RemoveSalesManagerGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**salesManagerId** | **string** | Unique Sales Managers Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveSalesManagerGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **salesGoalId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
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


## SetBlockSalesAllowanceRange

> Status SetBlockSalesAllowanceRange(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockSalesAllowanceRange(blockSalesAllowanceRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set block sales allowance range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockSalesAllowanceRange := *openapiclient.NewSetBlockSalesAllowanceRangeRequest() // SetBlockSalesAllowanceRangeRequest | Operation to a create block sales allowance with date range.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.SetBlockSalesAllowanceRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockSalesAllowanceRange(blockSalesAllowanceRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.SetBlockSalesAllowanceRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetBlockSalesAllowanceRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.SetBlockSalesAllowanceRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetBlockSalesAllowanceRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockSalesAllowanceRange** | [**SetBlockSalesAllowanceRangeRequest**](SetBlockSalesAllowanceRangeRequest.md) | Operation to a create block sales allowance with date range. | 
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

