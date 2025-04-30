# \BlockConfigAPI

All URIs are relative to */blk/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteBlockSalesAllowanceRange**](BlockConfigAPI.md#DeleteBlockSalesAllowanceRange) | **Delete** /hotels/{hotelId}/blockSalesAllowanceRange | Delete block sales allowance range
[**DeleteBlockStatusCode**](BlockConfigAPI.md#DeleteBlockStatusCode) | **Delete** /blockStatusCodes/{blockStatusCode} | Delete block status code
[**DeleteCutoffScheduleCode**](BlockConfigAPI.md#DeleteCutoffScheduleCode) | **Delete** /hotels/{hotelId}/cutoffSchedules/{cutoffCodeId} | Delete cutoff schedule code.
[**DeleteWashSchedule**](BlockConfigAPI.md#DeleteWashSchedule) | **Delete** /hotels/{hotelId}/washSchedules/{washScheduleCode} | Delete block wash schedule
[**GetBlockSalesAllowance**](BlockConfigAPI.md#GetBlockSalesAllowance) | **Get** /hotels/{hotelId}/blockSalesAllowance | Get Block Sales Allowance
[**GetBlockSalesAllowanceActivityLog**](BlockConfigAPI.md#GetBlockSalesAllowanceActivityLog) | **Get** /hotels/{hotelId}/blockSalesAllowance/activityLog | Get the Block Sales Allowance activity log
[**GetBlockStatusCodes**](BlockConfigAPI.md#GetBlockStatusCodes) | **Get** /blockStatusCodes | Get block status codes
[**GetCutoffSchedules**](BlockConfigAPI.md#GetCutoffSchedules) | **Get** /hotels/{hotelId}/cutoffSchedules | Get block cutoff schedule codes.
[**GetCutoffSchedulesDetails**](BlockConfigAPI.md#GetCutoffSchedulesDetails) | **Get** /hotels/{hotelId}/cutoffSchedules/{cutoffCodeId} | Get cutoff Schedules Details for a cutoff schedule code.
[**GetNextBlockStatusCodes**](BlockConfigAPI.md#GetNextBlockStatusCodes) | **Get** /blockStatusCodes/nextStatusCodes | Get next block status codes
[**GetSalesManagerGoals**](BlockConfigAPI.md#GetSalesManagerGoals) | **Get** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals | Get Sales Manager Goals by Hotel
[**GetSalesManagerGoalsMultipleHotelIds**](BlockConfigAPI.md#GetSalesManagerGoalsMultipleHotelIds) | **Get** /salesManagers/{salesManagerId}/salesManagerGoals | Get Sales Manager Goals
[**GetSalesManagers**](BlockConfigAPI.md#GetSalesManagers) | **Get** /hotels/{hotelId}/salesManagers | Get Sales Managers by Hotel.
[**GetSalesManagersMultipleHotelIds**](BlockConfigAPI.md#GetSalesManagersMultipleHotelIds) | **Get** /salesManagers | Get Sales Managers.
[**GetWashSchedule**](BlockConfigAPI.md#GetWashSchedule) | **Get** /washSchedules | Get block wash schedule
[**PostBlockStatusCode**](BlockConfigAPI.md#PostBlockStatusCode) | **Post** /blockStatusCodes | Create a block status code
[**PostCutoffScheduleCode**](BlockConfigAPI.md#PostCutoffScheduleCode) | **Post** /hotels/{hotelId}/cutoffSchedules | Create a block cutoff schedule code.
[**PostSalesManagerGoals**](BlockConfigAPI.md#PostSalesManagerGoals) | **Post** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals | Create Sales Manager Goals
[**PostWashSchedule**](BlockConfigAPI.md#PostWashSchedule) | **Post** /hotels/{hotelId}/washSchedules | Create block wash schedule
[**PutBlockStatusCode**](BlockConfigAPI.md#PutBlockStatusCode) | **Put** /blockStatusCodes/{blockStatusCode} | Change block status code
[**PutCutoffScheduleCode**](BlockConfigAPI.md#PutCutoffScheduleCode) | **Put** /hotels/{hotelId}/cutoffSchedules/{cutoffCodeId} | Change block cutoff schedule code
[**PutNextBlockStatusCodes**](BlockConfigAPI.md#PutNextBlockStatusCodes) | **Put** /blockStatusCodes/{srcBlockStatusCode}/nextStatusCodes | Change next block status codes
[**PutSalesManagerGoals**](BlockConfigAPI.md#PutSalesManagerGoals) | **Put** /hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId} | Update Sales Manager Goal in a hotel by ID
[**PutWashSchedule**](BlockConfigAPI.md#PutWashSchedule) | **Put** /hotels/{hotelId}/washSchedules/{washScheduleCode} | Change block wash schedule
[**RemoveSalesManagerGoal**](BlockConfigAPI.md#RemoveSalesManagerGoal) | **Delete** /salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId} | Delete Sale Manager Goal
[**RemoveSalesManagerGoals**](BlockConfigAPI.md#RemoveSalesManagerGoals) | **Delete** /salesManagers/{salesManagerId}/salesManagerGoals | Delete Sale Manager Goals
[**SetBlockCutoffScheduleRange**](BlockConfigAPI.md#SetBlockCutoffScheduleRange) | **Put** /hotels/{hotelId}/blockCutoffScheduleRange | Set block cutoff schedule range
[**SetBlockSalesAllowanceRange**](BlockConfigAPI.md#SetBlockSalesAllowanceRange) | **Put** /hotels/{hotelId}/blockSalesAllowanceRange | Set block sales allowance range



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.BlockConfigAPI.DeleteBlockSalesAllowanceRange(context.Background(), hotelId).EndDate(endDate).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.DeleteBlockSalesAllowanceRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockSalesAllowanceRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.DeleteBlockSalesAllowanceRange`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.DeleteBlockStatusCode(context.Background(), blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.DeleteBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.DeleteBlockStatusCode`: %v\n", resp)
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


## DeleteCutoffScheduleCode

> Status DeleteCutoffScheduleCode(ctx, cutoffCodeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete cutoff schedule code.



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
    cutoffCodeId := int32(56) // int32 | Unique Cutoff Schedule Code Id.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.DeleteCutoffScheduleCode(context.Background(), cutoffCodeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.DeleteCutoffScheduleCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCutoffScheduleCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.DeleteCutoffScheduleCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cutoffCodeId** | **int32** | Unique Cutoff Schedule Code Id. | 
**hotelId** | **string** | Unique OPERA Hotel Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCutoffScheduleCodeRequest struct via the builder pattern


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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.DeleteWashSchedule(context.Background(), washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.DeleteWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.DeleteWashSchedule`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endDateRange := time.Now() // string | The ending value of the date range. (optional)
    startDateRange := time.Now() // string | The starting value of the date range. (optional)
    includeRestricted := true // bool | Indicate to include restricted room types. (optional)
    roomTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetBlockSalesAllowance(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDateRange(endDateRange).StartDateRange(startDateRange).IncludeRestricted(includeRestricted).RoomTypesCodes(roomTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetBlockSalesAllowance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockSalesAllowance`: BlockSalesAllowance
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetBlockSalesAllowance`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetBlockSalesAllowanceActivityLog

> BlockSalesAllowanceActivityLog GetBlockSalesAllowanceActivityLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ChangeLogDate(changeLogDate).SalesAllowanceDate(salesAllowanceDate).UserId(userId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Block Sales Allowance activity log



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
    hotelId := "hotelId_example" // string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    changeLogDate := time.Now() // string | Search date for the user activity log. (optional)
    salesAllowanceDate := time.Now() // string | Sales Allowance date for the user activity log. (optional)
    userId := int32(56) // int32 | User Id for the user activity log. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetBlockSalesAllowanceActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ChangeLogDate(changeLogDate).SalesAllowanceDate(salesAllowanceDate).UserId(userId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetBlockSalesAllowanceActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockSalesAllowanceActivityLog`: BlockSalesAllowanceActivityLog
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetBlockSalesAllowanceActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockSalesAllowanceActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **changeLogDate** | **string** | Search date for the user activity log. | 
 **salesAllowanceDate** | **string** | Sales Allowance date for the user activity log. | 
 **userId** | **int32** | User Id for the user activity log. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockSalesAllowanceActivityLog**](BlockSalesAllowanceActivityLog.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetBlockStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatusCodes`: StatusCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetCutoffSchedules

> CutoffScheduleDetails GetCutoffSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CutoffCodes(cutoffCodes).CutoffCodeStartDate(cutoffCodeStartDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block cutoff schedule codes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cutoffCodes := []string{"Inner_example"} // []string | Cutoff Schedule Codes to be searched. (optional)
    cutoffCodeStartDate := time.Now() // string | Cutoff Schedule Code start date. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetCutoffSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CutoffCodes(cutoffCodes).CutoffCodeStartDate(cutoffCodeStartDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetCutoffSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCutoffSchedules`: CutoffScheduleDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetCutoffSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCutoffSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cutoffCodes** | **[]string** | Cutoff Schedule Codes to be searched. | 
 **cutoffCodeStartDate** | **string** | Cutoff Schedule Code start date. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CutoffScheduleDetails**](CutoffScheduleDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCutoffSchedulesDetails

> CutoffScheduleDetails GetCutoffSchedulesDetails(ctx, hotelId, cutoffCodeId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get cutoff Schedules Details for a cutoff schedule code.



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
    cutoffCodeId := int32(56) // int32 | Unique cutoff schedule code for which details will be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetCutoffSchedulesDetails(context.Background(), hotelId, cutoffCodeId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetCutoffSchedulesDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCutoffSchedulesDetails`: CutoffScheduleDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetCutoffSchedulesDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 
**cutoffCodeId** | **int32** | Unique cutoff schedule code for which details will be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCutoffSchedulesDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CutoffScheduleDetails**](CutoffScheduleDetails.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    configuredOnly := true // bool | When set to true, only configured next status codes will be included (available status list will not be included). (optional)
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetNextBlockStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfiguredOnly(configuredOnly).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetNextBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNextBlockStatusCodes`: NextBlockStatusCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetNextBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNextBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    future := true // bool | Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetSalesManagerGoals(context.Background(), salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagerGoals`: SalesManagerGoalsInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetSalesManagerGoals`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.BlockConfigAPI.GetSalesManagerGoalsMultipleHotelIds(context.Background(), salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).Future(future).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetSalesManagerGoalsMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagerGoalsMultipleHotelIds`: SalesManagerGoalsInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetSalesManagerGoalsMultipleHotelIds`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.BlockConfigAPI.GetSalesManagers(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetSalesManagers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagers`: SalesManagersInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetSalesManagers`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.BlockConfigAPI.GetSalesManagersMultipleHotelIds(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).OwnerCodes(ownerCodes).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetSalesManagersMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesManagersMultipleHotelIds`: SalesManagersInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetSalesManagersMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesManagersMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    washCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.GetWashSchedule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).WashCodes(washCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.GetWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWashSchedule`: WashScheduleDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.GetWashSchedule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWashScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodeDetails := *openapiclient.NewBlockStatusCodeDetails() // BlockStatusCodeDetails | Request object for creating a block status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PostBlockStatusCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PostBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PostBlockStatusCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockStatusCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodeDetails** | [**BlockStatusCodeDetails**](BlockStatusCodeDetails.md) | Request object for creating a block status code. | 
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


## PostCutoffScheduleCode

> Status PostCutoffScheduleCode(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CutoffScheduleCodeDetails(cutoffScheduleCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a block cutoff schedule code.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cutoffScheduleCodeDetails := *openapiclient.NewCutoffCodeCriteria() // CutoffCodeCriteria | Request object for creating a block cutoff schedule code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PostCutoffScheduleCode(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CutoffScheduleCodeDetails(cutoffScheduleCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PostCutoffScheduleCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCutoffScheduleCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PostCutoffScheduleCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCutoffScheduleCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cutoffScheduleCodeDetails** | [**CutoffCodeCriteria**](CutoffCodeCriteria.md) | Request object for creating a block cutoff schedule code. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createSalesManagerGoals := *openapiclient.NewCreateSalesManagerGoals() // CreateSalesManagerGoals | Request object for Creating Sales Manager Goal(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PostSalesManagerGoals(context.Background(), salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateSalesManagerGoals(createSalesManagerGoals).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PostSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PostSalesManagerGoals`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createSalesManagerGoals** | [**CreateSalesManagerGoals**](CreateSalesManagerGoals.md) | Request object for Creating Sales Manager Goal(s). | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    washScheduleCriteria := *openapiclient.NewWashScheduleCriteria() // WashScheduleCriteria | Operation to create new Wash Schedule Configuration under the selected property.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PostWashSchedule(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PostWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PostWashSchedule`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **washScheduleCriteria** | [**WashScheduleCriteria**](WashScheduleCriteria.md) | Operation to create new Wash Schedule Configuration under the selected property. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodeDetails := *openapiclient.NewBlockStatusCodeDetails() // BlockStatusCodeDetails | Request object for updating block status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PutBlockStatusCode(context.Background(), blockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PutBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PutBlockStatusCode`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodeDetails** | [**BlockStatusCodeDetails**](BlockStatusCodeDetails.md) | Request object for updating block status code. | 
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


## PutCutoffScheduleCode

> Status PutCutoffScheduleCode(ctx, cutoffCodeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCutoffCodeDetails(blockCutoffCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change block cutoff schedule code



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
    cutoffCodeId := int32(56) // int32 | OPERA Block cutoff schedule code Id.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCutoffCodeDetails := *openapiclient.NewCutoffCodeCriteria() // CutoffCodeCriteria | Request object for updating block cutoff schedule code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PutCutoffScheduleCode(context.Background(), cutoffCodeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCutoffCodeDetails(blockCutoffCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PutCutoffScheduleCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCutoffScheduleCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PutCutoffScheduleCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cutoffCodeId** | **int32** | OPERA Block cutoff schedule code Id. | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCutoffScheduleCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCutoffCodeDetails** | [**CutoffCodeCriteria**](CutoffCodeCriteria.md) | Request object for updating block cutoff schedule code. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    nextBlockStatusCode := *openapiclient.NewNextBlockStatusCode() // NextBlockStatusCode | Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PutNextBlockStatusCodes(context.Background(), srcBlockStatusCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NextBlockStatusCode(nextBlockStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PutNextBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNextBlockStatusCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PutNextBlockStatusCodes`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **nextBlockStatusCode** | [**NextBlockStatusCode**](NextBlockStatusCode.md) | Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    salesManagerGoalsInfo := *openapiclient.NewSalesManagerGoalsInfo() // SalesManagerGoalsInfo | Request object for modifying Sales Manager's goal.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PutSalesManagerGoals(context.Background(), salesGoalId, salesManagerId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesManagerGoalsInfo(salesManagerGoalsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PutSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PutSalesManagerGoals`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **salesManagerGoalsInfo** | [**SalesManagerGoalsInfo**](SalesManagerGoalsInfo.md) | Request object for modifying Sales Manager&#39;s goal. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    washScheduleCriteria := *openapiclient.NewWashScheduleCriteria() // WashScheduleCriteria | Operation to change existing Wash Schedule Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.PutWashSchedule(context.Background(), washScheduleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashScheduleCriteria(washScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.PutWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.PutWashSchedule`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **washScheduleCriteria** | [**WashScheduleCriteria**](WashScheduleCriteria.md) | Operation to change existing Wash Schedule Configuration. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.RemoveSalesManagerGoal(context.Background(), salesGoalId, salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.RemoveSalesManagerGoal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSalesManagerGoal`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.RemoveSalesManagerGoal`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    salesGoalId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.RemoveSalesManagerGoals(context.Background(), salesManagerId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SalesGoalId(salesGoalId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.RemoveSalesManagerGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSalesManagerGoals`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.RemoveSalesManagerGoals`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## SetBlockCutoffScheduleRange

> Status SetBlockCutoffScheduleRange(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCutoffScheduleRange(blockCutoffScheduleRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set block cutoff schedule range



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCutoffScheduleRange := *openapiclient.NewBlockCutoffScheduleRange() // BlockCutoffScheduleRange | Request object to a create block cutoff schedule with date range.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.SetBlockCutoffScheduleRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCutoffScheduleRange(blockCutoffScheduleRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.SetBlockCutoffScheduleRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetBlockCutoffScheduleRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.SetBlockCutoffScheduleRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetBlockCutoffScheduleRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCutoffScheduleRange** | [**BlockCutoffScheduleRange**](BlockCutoffScheduleRange.md) | Request object to a create block cutoff schedule with date range. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockSalesAllowanceRange := *openapiclient.NewBlockSalesAllowanceRange() // BlockSalesAllowanceRange | Operation to a create block sales allowance with date range.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigAPI.SetBlockSalesAllowanceRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockSalesAllowanceRange(blockSalesAllowanceRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigAPI.SetBlockSalesAllowanceRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetBlockSalesAllowanceRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigAPI.SetBlockSalesAllowanceRange`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockSalesAllowanceRange** | [**BlockSalesAllowanceRange**](BlockSalesAllowanceRange.md) | Operation to a create block sales allowance with date range. | 
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

