# \BlockAPI

All URIs are relative to */blk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlockChangesByDateTime**](BlockAPI.md#BlockChangesByDateTime) | **Get** /hotels/{hotelId}/blocks/changesByDateTime | Get modified blocks from a specific time period in OPERA.
[**ChangeRateOverride**](BlockAPI.md#ChangeRateOverride) | **Put** /hotels/{hotelId}/blocks/{blockId}/rate/override | Change rate override
[**CreatePropertyLeads**](BlockAPI.md#CreatePropertyLeads) | **Post** /hotels/{hotelId}/leads/{leadId}/propertyLeads | Use this API to create Property Leads
[**DeleteAlternateDates**](BlockAPI.md#DeleteAlternateDates) | **Delete** /blocks/{blockId}/alternateDates | Delete alternate dates for a Block
[**DeleteBlock**](BlockAPI.md#DeleteBlock) | **Delete** /hotels/{hotelId}/blocks/{blockId} | Delete a Block
[**DeleteBlockAccessExclusion**](BlockAPI.md#DeleteBlockAccessExclusion) | **Delete** /blocks/{blockId}/blockAccessExclusion | Delete Block access exclusion
[**DeleteBlockAttachment**](BlockAPI.md#DeleteBlockAttachment) | **Delete** /blocks/{blockId}/attachments/{attachId} | Delete Block Attachment
[**DeleteBlockOwners**](BlockAPI.md#DeleteBlockOwners) | **Delete** /blocks/{blockId}/owners | Delete a Block owner
[**DeleteBlockRestriction**](BlockAPI.md#DeleteBlockRestriction) | **Delete** /blocks/{blockId}/restrictions | Delete Block Restriction
[**DeleteBlockWashSchedule**](BlockAPI.md#DeleteBlockWashSchedule) | **Delete** /hotels/{hotelId}/blocks/{blockId}/washSchedules | Remove Block Wash Schedule
[**DeleteBlockWashSchedules**](BlockAPI.md#DeleteBlockWashSchedules) | **Delete** /blocks/{blockId}/washSchedules | Remove Block Wash Schedules
[**GetBlock**](BlockAPI.md#GetBlock) | **Get** /hotels/{hotelId}/blocks/{blockId} | Get a Block By ID
[**GetBlockAccessExclusion**](BlockAPI.md#GetBlockAccessExclusion) | **Get** /blocks/{blockId}/blockAccessExclusion | Get Block exclusion information
[**GetBlockActivityLog**](BlockAPI.md#GetBlockActivityLog) | **Get** /blockActivityLog | Get the Block activity log
[**GetBlockAttachments**](BlockAPI.md#GetBlockAttachments) | **Get** /blocks/{blockId}/attachments | Get Block Attachments
[**GetBlockAvailability**](BlockAPI.md#GetBlockAvailability) | **Get** /hotels/{hotelId}/blocks/{blockId}/availability | Get Block AvailaBility
[**GetBlockByExtId**](BlockAPI.md#GetBlockByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId} | Get a Block By ID
[**GetBlockDailyStatistics**](BlockAPI.md#GetBlockDailyStatistics) | **Get** /blocks/dailyStatistics | Get Block Daily Statistics
[**GetBlockOwners**](BlockAPI.md#GetBlockOwners) | **Get** /blocks/{blockId}/owners | Get Block owners
[**GetBlockPMReservations**](BlockAPI.md#GetBlockPMReservations) | **Get** /hotels/{hotelId}/blocks/{blockId}/postingMaster/reservations | Get Posting Master Reservations for a Block
[**GetBlockPMReservationsByExtId**](BlockAPI.md#GetBlockPMReservationsByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/postingMaster/reservations | Get Posting Master Reservations for a Block
[**GetBlockRangeInfo**](BlockAPI.md#GetBlockRangeInfo) | **Get** /hotels/{hotelId}/blocks/{blockId}/allocationRange | Get Block Range Information
[**GetBlockReservations**](BlockAPI.md#GetBlockReservations) | **Get** /blocks/{blockId}/reservations | Retrieves all reservations created for the Block
[**GetBlockRestrictions**](BlockAPI.md#GetBlockRestrictions) | **Get** /blocks/{blockId}/restrictions | Get Block restrictions 
[**GetBlockRevenueChanges**](BlockAPI.md#GetBlockRevenueChanges) | **Get** /blocks/{blockId}/revenueActivityLog | Fetch Block Revenue Changes
[**GetBlockRoomRateGrid**](BlockAPI.md#GetBlockRoomRateGrid) | **Get** /hotels/{hotelId}/blocks/{blockId}/roomRateGrid | Operation to get room rate grid for a Block and supports pagination.
[**GetBlockRoomTypes**](BlockAPI.md#GetBlockRoomTypes) | **Get** /blocks/{blockId}/roomTypes | Get Bock Room Types
[**GetBlockRoomsStatus**](BlockAPI.md#GetBlockRoomsStatus) | **Get** /blocks/{blockId}/roomsStatus | Get room status for a Block
[**GetBlockStatistics**](BlockAPI.md#GetBlockStatistics) | **Get** /blocks/{blockId}/statistics | Get Block Statistics
[**GetBlockStatusChanges**](BlockAPI.md#GetBlockStatusChanges) | **Get** /blocks/{blockId}/statusActivityLog | Get Block Status Activity Log
[**GetBlockWashInfo**](BlockAPI.md#GetBlockWashInfo) | **Get** /blockWash | Get Block Wash Information
[**GetBlockWashSchedules**](BlockAPI.md#GetBlockWashSchedules) | **Get** /blocks/{blockId}/washSchedules | Get Block Wash Schedule
[**GetBlocks**](BlockAPI.md#GetBlocks) | **Get** /blocks | Get Blocks
[**GetDefaultBlockCode**](BlockAPI.md#GetDefaultBlockCode) | **Get** /defaultBlockCode | Get default Block Code
[**GetInventoryToBorrow**](BlockAPI.md#GetInventoryToBorrow) | **Get** /inventoryToBorrow | Get inventory to Borrow
[**GetNextBlockStatus**](BlockAPI.md#GetNextBlockStatus) | **Get** /blocks/status | Get Next Block Status
[**GetRecentlyAccessedBlocks**](BlockAPI.md#GetRecentlyAccessedBlocks) | **Get** /recentlyAccessedBlocks | Get recently accessed Blocks
[**GetSalesAllowances**](BlockAPI.md#GetSalesAllowances) | **Get** /salesAllowances | Get Sales allowances
[**GetTracesByDateRange**](BlockAPI.md#GetTracesByDateRange) | **Get** /hotels/{hotelId}/tracesByDateRange | Get Traces By Date Range
[**PostAlternateDates**](BlockAPI.md#PostAlternateDates) | **Post** /blocks/{blockId}/alternateDates | Create alternate dates for a Block
[**PostBlock**](BlockAPI.md#PostBlock) | **Post** /hotels/{hotelId}/block | Create a Block
[**PostBlockOwners**](BlockAPI.md#PostBlockOwners) | **Post** /blocks/{blockId}/owners | Assign a Block owner
[**PostBlockPostingMaster**](BlockAPI.md#PostBlockPostingMaster) | **Post** /hotels/{hotelId}/blocks/{blockId}/postingMaster | Create Block posting master
[**PostBlockRestriction**](BlockAPI.md#PostBlockRestriction) | **Post** /blocks/{blockId}/restrictions | Create Block Restriction
[**PostBlockValidate**](BlockAPI.md#PostBlockValidate) | **Post** /blocks/actions/validate | Validate Block
[**PostBlockWashSchedules**](BlockAPI.md#PostBlockWashSchedules) | **Post** /blocks/{blockId}/washSchedules | Create Block Wash Schedules
[**PostCancelBlock**](BlockAPI.md#PostCancelBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/cancellations | Cancel the Block
[**PostCopyBlock**](BlockAPI.md#PostCopyBlock) | **Post** /blocks/{sourceBlockId}/copy | Copy a Block
[**PostDefaultBlockCode**](BlockAPI.md#PostDefaultBlockCode) | **Post** /defaultBlockCode | Create default Block Code for Multiple blocks
[**PostRoomingList**](BlockAPI.md#PostRoomingList) | **Post** /blocks/{blockId}/roomingList | Create Block Rooming List Reservations
[**PostSubAllocation**](BlockAPI.md#PostSubAllocation) | **Post** /allocation | Create Sub allocation
[**PostSubBlock**](BlockAPI.md#PostSubBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/subBlocks | Create a sub-Block
[**PostSubBlockByExtId**](BlockAPI.md#PostSubBlockByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/subBlocks | Create a sub-Block
[**PostTourSeries**](BlockAPI.md#PostTourSeries) | **Post** /blocks/{blockId}/tourSeries | Create a Block tour series
[**PutAlternateDates**](BlockAPI.md#PutAlternateDates) | **Put** /blocks/{blockId}/alternateDates | Change alternate dates for a Block
[**PutBlock**](BlockAPI.md#PutBlock) | **Put** /hotels/{hotelId}/blocks/{blockId} | Change a Block
[**PutBlockAccessExclusion**](BlockAPI.md#PutBlockAccessExclusion) | **Put** /blocks/{blockId}/blockAccessExclusion | Set Block Exclusion information
[**PutBlockAllocation**](BlockAPI.md#PutBlockAllocation) | **Put** /hotels/{hotelId}/blocks/{blockId}/allocation | Set Block Allocation  
[**PutBlockAllocationByExtId**](BlockAPI.md#PutBlockAllocationByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocation/roomTypes/{roomType} | Set Block Allocation  
[**PutBlockAllocationRange**](BlockAPI.md#PutBlockAllocationRange) | **Put** /hotels/{hotelId}/blocks/{blockId}/allocationRange | Set Block Allocation Range
[**PutBlockAllocationRangeByExtId**](BlockAPI.md#PutBlockAllocationRangeByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocationRange | Set Block Allocation Range
[**PutBlockAllocationWash**](BlockAPI.md#PutBlockAllocationWash) | **Put** /blockWash | Update Block Allocation Wash
[**PutBlockByExtId**](BlockAPI.md#PutBlockByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId} | Change a Block
[**PutBlockCutoff**](BlockAPI.md#PutBlockCutoff) | **Put** /blocks/{blockId}/blockCutOff | Block Cut Off
[**PutBlockOwners**](BlockAPI.md#PutBlockOwners) | **Put** /blocks/{blockId}/owners | Change Block owners
[**PutBlockRates**](BlockAPI.md#PutBlockRates) | **Put** /blocks/{blockId}/rates | Refreshes Block rates
[**PutBlockReservations**](BlockAPI.md#PutBlockReservations) | **Put** /blocks/{blockId}/reservations | Change Block reservations
[**PutBlockShift**](BlockAPI.md#PutBlockShift) | **Put** /hotels/{hotelId}/blocks/{blockId}/shifts | Shifts the Block start date
[**PutBlockStatus**](BlockAPI.md#PutBlockStatus) | **Put** /hotels/{hotelId}/blocks/{blockId}/status | Change the Status of a Block
[**PutBlockStatusByExtId**](BlockAPI.md#PutBlockStatusByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/status | Change the Status of a Block
[**PutBlockStatusToOpen**](BlockAPI.md#PutBlockStatusToOpen) | **Put** /hotels/{hotelId}/blocks/{blockId}/openStatus | Change Block status to Open
[**PutBlockWashSchedules**](BlockAPI.md#PutBlockWashSchedules) | **Put** /blocks/{blockId}/washSchedules | Change Block Wash Schedules
[**PutCateringRevenue**](BlockAPI.md#PutCateringRevenue) | **Put** /hotels/{hotelId}/blocks/{blockId}/cateringRevenue | Recalculate Catering Revenue
[**PutCateringStatus**](BlockAPI.md#PutCateringStatus) | **Put** /caterings/{eventId}/cateringStatus | Change Catering Status
[**PutClearAllRestrictions**](BlockAPI.md#PutClearAllRestrictions) | **Put** /blocks/{blockId}/restrictions | Clear-All Block Restrictions 
[**PutContractDefaults**](BlockAPI.md#PutContractDefaults) | **Put** /contractDefaults | Set Contract Defaults
[**PutInventory**](BlockAPI.md#PutInventory) | **Put** /inventory | Borrow Inventory
[**PutRegularToMasterBlock**](BlockAPI.md#PutRegularToMasterBlock) | **Put** /hotels/{hotelId}/blocks/{blockId}/regularToMasterBlock/{masterBlockCode} | Use this API to convert a regular block to a master block
[**PutReleasedInventory**](BlockAPI.md#PutReleasedInventory) | **Put** /inventoryReleased | Return Borrowed Inventory
[**PutRoomTypeOrder**](BlockAPI.md#PutRoomTypeOrder) | **Put** /blocks/{blockId}/roomTypeOrder | Set room type order for a Block
[**PutSubBlockToRegular**](BlockAPI.md#PutSubBlockToRegular) | **Put** /hotels/{hotelId}/blocks/{blockId}/subBlockToRegular | Use this API to convert a sub block to a regular block
[**PutValidateBlockCode**](BlockAPI.md#PutValidateBlockCode) | **Put** /blocks/{blockCode}/actions/validate | Validate Block Code



## BlockChangesByDateTime

> BlockChangesByDateTimeSummary BlockChangesByDateTime(ctx, hotelId).StartLastModifiedDate(startLastModifiedDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndLastModifiedDate(endLastModifiedDate).BlockStatus(blockStatus).OpenForPickup(openForPickup).CateringOnly(cateringOnly).IncludeEventChanges(includeEventChanges).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get modified blocks from a specific time period in OPERA.



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
    hotelId := "MYHOTEL" // string | Hotel Id
    startLastModifiedDate := time.Now() // string | From Change Date / Time when block was modified.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endLastModifiedDate := time.Now() // string | To Change Date / Time when block was modified. (optional)
    blockStatus := []string{"BlockStatus_example"} // []string | Status of the block that was modified. (optional)
    openForPickup := true // bool | Indicates if modified blocks are open for pickup or not. (optional)
    cateringOnly := true // bool | Indicates if modified blocks are only for catering. (optional)
    includeEventChanges := true // bool | Indicates if event changes for block are to be included. (optional) (default to false)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.BlockChangesByDateTime(context.Background(), hotelId).StartLastModifiedDate(startLastModifiedDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndLastModifiedDate(endLastModifiedDate).BlockStatus(blockStatus).OpenForPickup(openForPickup).CateringOnly(cateringOnly).IncludeEventChanges(includeEventChanges).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.BlockChangesByDateTime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BlockChangesByDateTime`: BlockChangesByDateTimeSummary
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.BlockChangesByDateTime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiBlockChangesByDateTimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startLastModifiedDate** | **string** | From Change Date / Time when block was modified. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **endLastModifiedDate** | **string** | To Change Date / Time when block was modified. | 
 **blockStatus** | **[]string** | Status of the block that was modified. | 
 **openForPickup** | **bool** | Indicates if modified blocks are open for pickup or not. | 
 **cateringOnly** | **bool** | Indicates if modified blocks are only for catering. | 
 **includeEventChanges** | **bool** | Indicates if event changes for block are to be included. | [default to false]
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockChangesByDateTimeSummary**](BlockChangesByDateTimeSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeRateOverride

> RateOverrideStatus ChangeRateOverride(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateOverride(rateOverride).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate override



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateOverride := *openapiclient.NewRateOverride() // RateOverride | Request object of change block rate override operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.ChangeRateOverride(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateOverride(rateOverride).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.ChangeRateOverride``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRateOverride`: RateOverrideStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.ChangeRateOverride`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeRateOverrideRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateOverride** | [**RateOverride**](RateOverride.md) | Request object of change block rate override operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateOverrideStatus**](RateOverrideStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreatePropertyLeads

> Status CreatePropertyLeads(ctx, hotelId, leadId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyLeads(propertyLeads).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Use this API to create Property Leads



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    hotelId := "hotelId_example" // string | Central Hotel Id
    leadId := "leadId_example" // string | Central Lead Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    propertyLeads := *openapiclient.NewPropertyLeadsType() // PropertyLeadsType | Request object for property leads. This object contains a list of hotel codes for which property leads will be created.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.CreatePropertyLeads(context.Background(), hotelId, leadId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyLeads(propertyLeads).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.CreatePropertyLeads``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePropertyLeads`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.CreatePropertyLeads`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Central Hotel Id | 
**leadId** | **string** | Central Lead Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreatePropertyLeadsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **propertyLeads** | [**PropertyLeadsType**](PropertyLeadsType.md) | Request object for property leads. This object contains a list of hotel codes for which property leads will be created. | 
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


## DeleteAlternateDates

> Status DeleteAlternateDates(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete alternate dates for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteAlternateDates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAlternateDatesRequest struct via the builder pattern


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


## DeleteBlock

> Status DeleteBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockRequest struct via the builder pattern


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


## DeleteBlockAccessExclusion

> Status DeleteBlockAccessExclusion(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllowCancelReservation(allowCancelReservation).AllowCreateReservation(allowCreateReservation).AllowModifyReservation(allowModifyReservation).ExcludeFromAvailability(excludeFromAvailability).Inactive(inactive).SourceType(sourceType).SourceValue(sourceValue).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block access exclusion



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allowCancelReservation := true // bool | Allow to cancel a reservation under this access exclusion. (optional)
    allowCreateReservation := true // bool | Allow to create a reservation under this access exclusion. (optional)
    allowModifyReservation := true // bool | Allow to modify a reservation under this access exclusion. (optional)
    excludeFromAvailability := true // bool | Exclude a specific rate from availability (optional)
    inactive := true // bool | The rate access exclusion is inactive (optional)
    sourceType := "sourceType_example" // string | The type of source (CRO or Hotel code) for which the rate access exclusion is set. (optional)
    sourceValue := "sourceValue_example" // string | CRO or Hotel code value. (optional)
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllowCancelReservation(allowCancelReservation).AllowCreateReservation(allowCreateReservation).AllowModifyReservation(allowModifyReservation).ExcludeFromAvailability(excludeFromAvailability).Inactive(inactive).SourceType(sourceType).SourceValue(sourceValue).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockAccessExclusion`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockAccessExclusion`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockAccessExclusionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allowCancelReservation** | **bool** | Allow to cancel a reservation under this access exclusion. | 
 **allowCreateReservation** | **bool** | Allow to create a reservation under this access exclusion. | 
 **allowModifyReservation** | **bool** | Allow to modify a reservation under this access exclusion. | 
 **excludeFromAvailability** | **bool** | Exclude a specific rate from availability | 
 **inactive** | **bool** | The rate access exclusion is inactive | 
 **sourceType** | **string** | The type of source (CRO or Hotel code) for which the rate access exclusion is set. | 
 **sourceValue** | **string** | CRO or Hotel code value. | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeleteBlockAttachment

> Status DeleteBlockAttachment(ctx, attachId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Attachment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    attachId := "attachId_example" // string | Attachment Id
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockAttachment(context.Background(), attachId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockAttachment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attachId** | **string** | Attachment Id | 
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockAttachmentRequest struct via the builder pattern


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


## DeleteBlockOwners

> Status DeleteBlockOwners(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Block owner



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockOwnersRequest struct via the builder pattern


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


## DeleteBlockRestriction

> Status DeleteBlockRestriction(ctx, blockId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Code(code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Restriction



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
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel to which the block belongs to.
    startDate := time.Now() // string | 
    endDate := time.Now() // string | 
    code := "code_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypes := []string{"Inner_example"} // []string | Room Type for the restriction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockRestriction(context.Background(), blockId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Code(code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockRestriction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockRestrictionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelId** | **string** | Hotel to which the block belongs to. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **code** | **string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypes** | **[]string** | Room Type for the restriction. | 
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


## DeleteBlockWashSchedule

> Status DeleteBlockWashSchedule(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashDate(washDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Block Wash Schedule



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
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    washDate := time.Now() // string | Block Wash Date (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockWashSchedule(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WashDate(washDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockWashSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockWashSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockWashSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockWashScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **washDate** | **string** | Block Wash Date | 
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


## DeleteBlockWashSchedules

> Status DeleteBlockWashSchedules(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Block Wash Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.DeleteBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.DeleteBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.DeleteBlockWashSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockWashSchedulesRequest struct via the builder pattern


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


## GetBlock

> Block GetBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a Block By ID



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    markAsRecentlyAccessed := true // bool | Mark this block as recently accessed. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for block instructions that can be used in requests for partial operations. (optional)
    fetchAllocatedRoomTypes := true // bool | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. (optional)
    startDate := time.Now() // string | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    numberOfDays := float32(8.14) // float32 | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    roomAllocationCriteria := []string{"RoomAllocationCriteria_example"} // []string | Simple type for block allocation used in room rate grid. (optional)
    roomTypes := []string{"Inner_example"} // []string | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlock`: Block
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **markAsRecentlyAccessed** | **bool** | Mark this block as recently accessed. | 
 **fetchInstructions** | **[]string** | Type for block instructions that can be used in requests for partial operations. | 
 **fetchAllocatedRoomTypes** | **bool** | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. | 
 **startDate** | **string** | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **numberOfDays** | **float32** | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **roomAllocationCriteria** | **[]string** | Simple type for block allocation used in room rate grid. | 
 **roomTypes** | **[]string** | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockAccessExclusion

> BlockAccessExclusionInfo GetBlockAccessExclusion(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block exclusion information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAccessExclusion`: BlockAccessExclusionInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockAccessExclusion`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAccessExclusionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockAccessExclusionInfo**](BlockAccessExclusionInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockActivityLog

> BlockActivityLog GetBlockActivityLog(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Module(module).ModuleParamsParameterName(moduleParamsParameterName).ModuleParamsParameterValue(moduleParamsParameterValue).ActivityGroup(activityGroup).ActivityType(activityType).ActivityParamsFromDate(activityParamsFromDate).ActivityParamsToDate(activityParamsToDate).ActivityParamsSearchText(activityParamsSearchText).UserByIDsUserId(userByIDsUserId).UserForIDsUserId(userForIDsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Block activity log



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
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := "hotelId_example" // string | Hotel code. (optional)
    module := "module_example" // string | Activity module. (optional)
    moduleParamsParameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    moduleParamsParameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    activityParamsFromDate := time.Now() // string | Search from date for the user activity log. (optional)
    activityParamsToDate := time.Now() // string | Search to date for the user activity log. (optional)
    activityParamsSearchText := "activityParamsSearchText_example" // string | Search text for the user activity log. (optional)
    userByIDsUserId := []int32{int32(123)} // []int32 |  (optional)
    userForIDsUserId := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockActivityLog(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Module(module).ModuleParamsParameterName(moduleParamsParameterName).ModuleParamsParameterValue(moduleParamsParameterValue).ActivityGroup(activityGroup).ActivityType(activityType).ActivityParamsFromDate(activityParamsFromDate).ActivityParamsToDate(activityParamsToDate).ActivityParamsSearchText(activityParamsSearchText).UserByIDsUserId(userByIDsUserId).UserForIDsUserId(userForIDsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockActivityLog`: BlockActivityLog
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockActivityLog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **string** | Hotel code. | 
 **module** | **string** | Activity module. | 
 **moduleParamsParameterName** | **[]string** | Name of the parameter. | 
 **moduleParamsParameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **activityParamsFromDate** | **string** | Search from date for the user activity log. | 
 **activityParamsToDate** | **string** | Search to date for the user activity log. | 
 **activityParamsSearchText** | **string** | Search text for the user activity log. | 
 **userByIDsUserId** | **[]int32** |  | 
 **userForIDsUserId** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockActivityLog**](BlockActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockAttachments

> BlockAttachments GetBlockAttachments(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).AttachedFileName(attachedFileName).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Attachments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code. (optional)
    attachedFileName := "attachedFileName_example" // string | File name used to filter final list of attachments. For example, Document.txt. (optional)
    description := "description_example" // string | Description used to filter final list of attachments. For example, Offical guest ID. (This parameter does not require wildcard characters like * or % ). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockAttachments(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).AttachedFileName(attachedFileName).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAttachments`: BlockAttachments
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code. | 
 **attachedFileName** | **string** | File name used to filter final list of attachments. For example, Document.txt. | 
 **description** | **string** | Description used to filter final list of attachments. For example, Offical guest ID. (This parameter does not require wildcard characters like * or % ). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockAttachments**](BlockAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockAvailability

> BlockAvailability GetBlockAvailability(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideRateCode(overrideRateCode).ArrivalDate(arrivalDate).Nights(nights).Adults(adults).Children(children).Rooms(rooms).RatePlanCode(ratePlanCode).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).FetchAllocatedRoomType(fetchAllocatedRoomType).RoomTypeCount(roomTypeCount).DetailedAvailability(detailedAvailability).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block AvailaBility



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
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideRateCode := true // bool |  (optional)
    arrivalDate := time.Now() // string | Arrival date. (optional)
    nights := int32(56) // int32 | Number of nights of stay. (optional)
    adults := int32(56) // int32 | Documentation goes here (optional)
    children := int32(56) // int32 | Documentation goes here (optional)
    rooms := int32(56) // int32 | Documentation goes here (optional)
    ratePlanCode := "ratePlanCode_example" // string | Documentation goes here (optional)
    existingReservationId := "existingReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    existingReservationIdType := "existingReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    roomType := []string{"Inner_example"} // []string | Room type. (optional)
    fetchAllocatedRoomType := []string{"FetchAllocatedRoomType_example"} // []string | Instruction to determine room types to fetch. (optional)
    roomTypeCount := int32(56) // int32 | Criteria to fetch number of room type(s). (optional)
    detailedAvailability := true // bool | Indicates if Detailed Availability will be returned. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockAvailability(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideRateCode(overrideRateCode).ArrivalDate(arrivalDate).Nights(nights).Adults(adults).Children(children).Rooms(rooms).RatePlanCode(ratePlanCode).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).FetchAllocatedRoomType(fetchAllocatedRoomType).RoomTypeCount(roomTypeCount).DetailedAvailability(detailedAvailability).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAvailability`: BlockAvailability
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideRateCode** | **bool** |  | 
 **arrivalDate** | **string** | Arrival date. | 
 **nights** | **int32** | Number of nights of stay. | 
 **adults** | **int32** | Documentation goes here | 
 **children** | **int32** | Documentation goes here | 
 **rooms** | **int32** | Documentation goes here | 
 **ratePlanCode** | **string** | Documentation goes here | 
 **existingReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **existingReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **roomType** | **[]string** | Room type. | 
 **fetchAllocatedRoomType** | **[]string** | Instruction to determine room types to fetch. | 
 **roomTypeCount** | **int32** | Criteria to fetch number of room type(s). | 
 **detailedAvailability** | **bool** | Indicates if Detailed Availability will be returned. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockAvailability**](BlockAvailability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockByExtId

> Block GetBlockByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a Block By ID



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
    blockExternalId := "blockExternalId_example" // string | External Block ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    markAsRecentlyAccessed := true // bool | Mark this block as recently accessed. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for block instructions that can be used in requests for partial operations. (optional)
    fetchAllocatedRoomTypes := true // bool | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. (optional)
    startDate := time.Now() // string | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    numberOfDays := float32(8.14) // float32 | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    roomAllocationCriteria := []string{"RoomAllocationCriteria_example"} // []string | Simple type for block allocation used in room rate grid. (optional)
    roomTypes := []string{"Inner_example"} // []string | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockByExtId`: Block
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **markAsRecentlyAccessed** | **bool** | Mark this block as recently accessed. | 
 **fetchInstructions** | **[]string** | Type for block instructions that can be used in requests for partial operations. | 
 **fetchAllocatedRoomTypes** | **bool** | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. | 
 **startDate** | **string** | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **numberOfDays** | **float32** | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **roomAllocationCriteria** | **[]string** | Simple type for block allocation used in room rate grid. | 
 **roomTypes** | **[]string** | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockDailyStatistics

> BlockDailyStatistics GetBlockDailyStatistics(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).Limit(limit).Offset(offset).HotelId(hotelId).End(end).Start(start).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Daily Statistics



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
    genericRoomType := true // bool | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := "hotelId_example" // string | Pertain Hotel Code for search criteria. (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockDailyStatistics(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).Limit(limit).Offset(offset).HotelId(hotelId).End(end).Start(start).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockDailyStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockDailyStatistics`: BlockDailyStatistics
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockDailyStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockDailyStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **genericRoomType** | **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **string** | Pertain Hotel Code for search criteria. | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockDailyStatistics**](BlockDailyStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockOwners

> BlockOwners GetBlockOwners(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block owners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel code of the business block. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockOwners`: BlockOwners
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel code of the business block. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockOwners**](BlockOwners.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockPMReservations

> BlockPMReservations GetBlockPMReservations(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Posting Master Reservations for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingmaster := true // bool | If true, a PM reservation will be created for the block if no PM reservations exist. (optional) (default to true)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockPMReservations(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockPMReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockPMReservations`: BlockPMReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockPMReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockPMReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postingmaster** | **bool** | If true, a PM reservation will be created for the block if no PM reservations exist. | [default to true]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockPMReservations**](BlockPMReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockPMReservationsByExtId

> BlockPMReservations GetBlockPMReservationsByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Posting Master Reservations for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingmaster := true // bool | If true, a PM reservation will be created for the block if no PM reservations exist. (optional) (default to true)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockPMReservationsByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockPMReservationsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockPMReservationsByExtId`: BlockPMReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockPMReservationsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockPMReservationsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postingmaster** | **bool** | If true, a PM reservation will be created for the block if no PM reservations exist. | [default to true]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockPMReservations**](BlockPMReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRangeInfo

> BlockRangeInfo GetBlockRangeInfo(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Range Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    genericRoomType := true // bool | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRangeInfo(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRangeInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRangeInfo`: BlockRangeInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRangeInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRangeInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **genericRoomType** | **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRangeInfo**](BlockRangeInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockReservations

> BlockReservations GetBlockReservations(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves all reservations created for the Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code to which the block belongs to. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockReservations(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockReservations`: BlockReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code to which the block belongs to. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockReservations**](BlockReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRestrictions

> BlockRestrictions GetBlockRestrictions(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block restrictions 



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
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code to which the block belongs to. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    roomType := []string{"Inner_example"} // []string | Room Type for the restriction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRestrictions(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRestrictions`: BlockRestrictions
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRestrictions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRestrictionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code to which the block belongs to. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **roomType** | **[]string** | Room Type for the restriction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRestrictions**](BlockRestrictions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRevenueChanges

> BlockRevenueChanges GetBlockRevenueChanges(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Status(status).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Block Revenue Changes



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
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := "hotelId_example" // string | Hotel code for this block. (optional)
    status := []string{"Inner_example"} // []string | Status of this block. (optional)
    changeEndDate := time.Now() // string | The ending value of the date range. (optional)
    changeStartDate := time.Now() // string | The starting value of the date range. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRevenueChanges(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Status(status).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRevenueChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRevenueChanges`: BlockRevenueChanges
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRevenueChanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRevenueChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **string** | Hotel code for this block. | 
 **status** | **[]string** | Status of this block. | 
 **changeEndDate** | **string** | The ending value of the date range. | 
 **changeStartDate** | **string** | The starting value of the date range. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRevenueChanges**](BlockRevenueChanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRoomRateGrid

> BlockGridType GetBlockRoomRateGrid(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to get room rate grid for a Block and supports pagination.



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
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchAllocatedRoomTypes := true // bool | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. (optional) (default to false)
    startDate := time.Now() // string | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    numberOfDays := float32(8.14) // float32 | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    roomAllocationCriteria := []string{"RoomAllocationCriteria_example"} // []string | Simple type for block allocation used in room rate grid. (optional)
    roomTypes := []string{"Inner_example"} // []string | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 20)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRoomRateGrid(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRoomRateGrid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRoomRateGrid`: BlockGridType
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRoomRateGrid`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRoomRateGridRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchAllocatedRoomTypes** | **bool** | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. | [default to false]
 **startDate** | **string** | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **numberOfDays** | **float32** | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **roomAllocationCriteria** | **[]string** | Simple type for block allocation used in room rate grid. | 
 **roomTypes** | **[]string** | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 20]
 **offset** | **int32** | Index or initial index of the set(page) being requested. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockGridType**](BlockGridType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRoomTypes

> BlockRoomTypes GetBlockRoomTypes(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).EndDate(endDate).FetchGenericRoomTypes(fetchGenericRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Bock Room Types



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
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    fetchAllocatedRoomTypes := true // bool | Indicates whether to fetch only allocated room types for the block. (optional)
    startDate := time.Now() // string | The start date of the range to be used to fetch allocated room types. (optional)
    endDate := time.Now() // string | The end date of the range to be used to fetch allocated room types. (optional)
    fetchGenericRoomTypes := true // bool | Indicates to fetch Generic Room Types (Room Pools). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRoomTypes(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).EndDate(endDate).FetchGenericRoomTypes(fetchGenericRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRoomTypes`: BlockRoomTypes
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **fetchAllocatedRoomTypes** | **bool** | Indicates whether to fetch only allocated room types for the block. | 
 **startDate** | **string** | The start date of the range to be used to fetch allocated room types. | 
 **endDate** | **string** | The end date of the range to be used to fetch allocated room types. | 
 **fetchGenericRoomTypes** | **bool** | Indicates to fetch Generic Room Types (Room Pools). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRoomTypes**](BlockRoomTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRoomsStatus

> BlockRoomsStatus GetBlockRoomsStatus(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get room status for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockRoomsStatus(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockRoomsStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRoomsStatus`: BlockRoomsStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockRoomsStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRoomsStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRoomsStatus**](BlockRoomsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockStatistics

> BlockStatistics GetBlockStatistics(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).NumberOfDays(numberOfDays).StatisticsInstructions(statisticsInstructions).RoomTypeHotelId(roomTypeHotelId).InvBlockCode(invBlockCode).PromotionCode(promotionCode).RoomCategory(roomCategory).RoomClass(roomClass).RoomQualifierCode(roomQualifierCode).RoomQualifierMatchIndicator(roomQualifierMatchIndicator).RoomType(roomType).RoomViewCode(roomViewCode).RoomFeatureCode(roomFeatureCode).DefaultOccupancy(defaultOccupancy).MaximumOccupancy(maximumOccupancy).NoOfPhysicalRooms(noOfPhysicalRooms).BookingChannelCode(bookingChannelCode).BookingChannelMappingCode(bookingChannelMappingCode).BookingChannelMappingName(bookingChannelMappingName).BedTypeCode(bedTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Statistics



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
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code of the business block. (optional)
    startDate := time.Now() // string | Start date for the statistics data. (optional)
    numberOfDays := int32(56) // int32 | Number of days to fetch for statistics data. (optional)
    statisticsInstructions := []string{"StatisticsInstructions_example"} // []string | Type of statistic for which its statistics information by date and room type will be populated. (optional)
    roomTypeHotelId := []string{"Inner_example"} // []string |  (optional)
    invBlockCode := []string{"Inner_example"} // []string | Block code. (optional)
    promotionCode := []string{"Inner_example"} // []string | Represents the promotional code. (optional)
    roomCategory := []string{"Inner_example"} // []string |  (optional)
    roomClass := []string{"Inner_example"} // []string |  (optional)
    roomQualifierCode := []string{"Inner_example"} // []string | Represents the room qualifier code like Deluxe,Economy,Suite etc. (optional)
    roomQualifierMatchIndicator := []string{"Inner_example"} // []string | Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    roomViewCode := []string{"Inner_example"} // []string | Represents the room view code like City view, River view, Ocean view etc. (optional)
    roomFeatureCode := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    defaultOccupancy := int32(56) // int32 | Default occupancy of property room type. (optional)
    maximumOccupancy := int32(56) // int32 | Max occupancy of property room type. (optional)
    noOfPhysicalRooms := int32(56) // int32 | Number of physical rooms of property room type. (optional)
    bookingChannelCode := []string{"Inner_example"} // []string |  (optional)
    bookingChannelMappingCode := []string{"Inner_example"} // []string |  (optional)
    bookingChannelMappingName := []string{"Inner_example"} // []string |  (optional)
    bedTypeCode := []string{"Inner_example"} // []string | Bed type code associated with room. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockStatistics(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).NumberOfDays(numberOfDays).StatisticsInstructions(statisticsInstructions).RoomTypeHotelId(roomTypeHotelId).InvBlockCode(invBlockCode).PromotionCode(promotionCode).RoomCategory(roomCategory).RoomClass(roomClass).RoomQualifierCode(roomQualifierCode).RoomQualifierMatchIndicator(roomQualifierMatchIndicator).RoomType(roomType).RoomViewCode(roomViewCode).RoomFeatureCode(roomFeatureCode).DefaultOccupancy(defaultOccupancy).MaximumOccupancy(maximumOccupancy).NoOfPhysicalRooms(noOfPhysicalRooms).BookingChannelCode(bookingChannelCode).BookingChannelMappingCode(bookingChannelMappingCode).BookingChannelMappingName(bookingChannelMappingName).BedTypeCode(bedTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatistics`: BlockStatistics
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code of the business block. | 
 **startDate** | **string** | Start date for the statistics data. | 
 **numberOfDays** | **int32** | Number of days to fetch for statistics data. | 
 **statisticsInstructions** | **[]string** | Type of statistic for which its statistics information by date and room type will be populated. | 
 **roomTypeHotelId** | **[]string** |  | 
 **invBlockCode** | **[]string** | Block code. | 
 **promotionCode** | **[]string** | Represents the promotional code. | 
 **roomCategory** | **[]string** |  | 
 **roomClass** | **[]string** |  | 
 **roomQualifierCode** | **[]string** | Represents the room qualifier code like Deluxe,Economy,Suite etc. | 
 **roomQualifierMatchIndicator** | **[]string** | Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code. | 
 **roomType** | **[]string** |  | 
 **roomViewCode** | **[]string** | Represents the room view code like City view, River view, Ocean view etc. | 
 **roomFeatureCode** | **[]string** | A code representing a room feature. | 
 **defaultOccupancy** | **int32** | Default occupancy of property room type. | 
 **maximumOccupancy** | **int32** | Max occupancy of property room type. | 
 **noOfPhysicalRooms** | **int32** | Number of physical rooms of property room type. | 
 **bookingChannelCode** | **[]string** |  | 
 **bookingChannelMappingCode** | **[]string** |  | 
 **bookingChannelMappingName** | **[]string** |  | 
 **bedTypeCode** | **[]string** | Bed type code associated with room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockStatistics**](BlockStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockStatusChanges

> BlockStatusChanges GetBlockStatusChanges(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).CurrentStatus(currentStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Status Activity Log



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
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := "hotelId_example" // string | Hotel Code for this block . (optional)
    changeEndDate := time.Now() // string | The ending value of the date range. (optional)
    changeStartDate := time.Now() // string | The starting value of the date range. (optional)
    currentStatus := []string{"Inner_example"} // []string | Current Status of the block . (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockStatusChanges(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).CurrentStatus(currentStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockStatusChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatusChanges`: BlockStatusChanges
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockStatusChanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatusChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **string** | Hotel Code for this block . | 
 **changeEndDate** | **string** | The ending value of the date range. | 
 **changeStartDate** | **string** | The starting value of the date range. | 
 **currentStatus** | **[]string** | Current Status of the block . | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockStatusChanges**](BlockStatusChanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockWashInfo

> BlockWashInfo GetBlockWashInfo(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockId(blockId).BlockIdType(blockIdType).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Wash Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    genericRoomType := true // bool | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockWashInfo(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockId(blockId).BlockIdType(blockIdType).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockWashInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockWashInfo`: BlockWashInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockWashInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockWashInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **genericRoomType** | **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockWashInfo**](BlockWashInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockWashSchedules

> BlockWashSchedules GetBlockWashSchedules(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Wash Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockWashSchedules`: BlockWashSchedules
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlockWashSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockWashSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockWashSchedules**](BlockWashSchedules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlocks

> BlockSummaries GetBlocks(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).Offset(offset).MultipleHotelsSearchHotelIds(multipleHotelsSearchHotelIds).SuperSearch(superSearch).BlockIdList(blockIdList).BlockIdType(blockIdType).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).BlockCode(blockCode).BlockName(blockName).BlockOwner(blockOwner).BlockStatus(blockStatus).CateringStatus(cateringStatus).ReservationMethod(reservationMethod).CreatedByUser(createdByUser).BlockStartEndDate(blockStartEndDate).BlockStartStartDate(blockStartStartDate).BlockEndEndDate(blockEndEndDate).BlockEndStartDate(blockEndStartDate).ReservationArrival(reservationArrival).ReservationDeparture(reservationDeparture).IncludeShoulderDates(includeShoulderDates).StayDate(stayDate).BlockCreatedOnEndDate(blockCreatedOnEndDate).BlockCreatedOnStartDate(blockCreatedOnStartDate).DecisionEndDate(decisionEndDate).DecisionStartDate(decisionStartDate).CutOffEndDate(cutOffEndDate).CutOffStartDate(cutOffStartDate).Category(category).Name(name).AttachedProfileId(attachedProfileId).AttachedProfileIdType(attachedProfileIdType).Leads(leads).TourSeries(tourSeries).OnlyPickupBlocks(onlyPickupBlocks).OnlyOpportunities(onlyOpportunities).RatePlanCode(ratePlanCode).TourCode(tourCode).AttributeName(attributeName).OrderType(orderType).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).AdditionalCriteriaStartDate(additionalCriteriaStartDate).NumberOfDays(numberOfDays).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomAllocationCriteria(roomAllocationCriteria).RoomType(roomType).AdditionalCriteriaRatePlanCode(additionalCriteriaRatePlanCode).CurrencyCode(currencyCode).AccessRestriction(accessRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Blocks



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
    hotelId := "hotelId_example" // string |  (optional)
    markAsRecentlyAccessed := true // bool | Mark this block as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    multipleHotelsSearchHotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    superSearch := "superSearch_example" // string | Free form text field for searching block fields (optional)
    blockIdList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockCode := "blockCode_example" // string | Block code (optional)
    blockName := "blockName_example" // string | Block Name (optional)
    blockOwner := []string{"Inner_example"} // []string | Block Owner. (optional)
    blockStatus := []string{"Inner_example"} // []string | Block Status. (optional)
    cateringStatus := []string{"Inner_example"} // []string | Catering Status. (optional)
    reservationMethod := []string{"Inner_example"} // []string | Mode of reservation (e.g. EML, TEL, FRTDSK ). (optional)
    createdByUser := "createdByUser_example" // string | user who created the Block(s). (optional)
    blockStartEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockStartStartDate := time.Now() // string | The starting value of the date range. (optional)
    blockEndEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockEndStartDate := time.Now() // string | The starting value of the date range. (optional)
    reservationArrival := time.Now() // string | Date when guests plan to arrive(first night stay date). (optional)
    reservationDeparture := time.Now() // string | Date when guests plan to leave(last stay day date). (optional)
    includeShoulderDates := true // bool | Whether to include shoulder dates when considering stay date. (optional)
    stayDate := time.Now() // string |  (optional)
    blockCreatedOnEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockCreatedOnStartDate := time.Now() // string | The starting value of the date range. (optional)
    decisionEndDate := time.Now() // string | The ending value of the date range. (optional)
    decisionStartDate := time.Now() // string | The starting value of the date range. (optional)
    cutOffEndDate := time.Now() // string | The ending value of the date range. (optional)
    cutOffStartDate := time.Now() // string | The starting value of the date range. (optional)
    category := []string{"Category_example"} // []string | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. (optional)
    name := []string{"Inner_example"} // []string | Attached profile name (optional)
    attachedProfileId := "attachedProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    attachedProfileIdType := "attachedProfileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    leads := true // bool | Show Leads in the search result. (optional)
    tourSeries := true // bool | Show tour series in the search result. (optional)
    onlyPickupBlocks := true // bool | Fetch only blocks which are open for pickup, if true. If the value is false, fetch all block statuses. (optional)
    onlyOpportunities := true // bool | Indicates that only Opportunity blocks will be fetched. (optional)
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan Code. (optional)
    tourCode := "tourCode_example" // string | Tour code for the block. (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for block instructions that can be used in requests for partial operations. (optional)
    fetchAllocatedRoomTypes := true // bool | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. (optional)
    additionalCriteriaStartDate := time.Now() // string | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    numberOfDays := float32(8.14) // float32 | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    existingReservationId := "existingReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    existingReservationIdType := "existingReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    roomAllocationCriteria := []string{"RoomAllocationCriteria_example"} // []string | Simple type for block allocation used in room rate grid. (optional)
    roomType := []string{"Inner_example"} // []string | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. (optional)
    additionalCriteriaRatePlanCode := "additionalCriteriaRatePlanCode_example" // string | Rate Plan to use for fetching rates. (optional)
    currencyCode := "currencyCode_example" // string | Curency in which the grid rates should be fetched. (optional)
    accessRestriction := []string{"AccessRestriction_example"} // []string | Simple type for block access exclusion/restriction types. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetBlocks(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).Offset(offset).MultipleHotelsSearchHotelIds(multipleHotelsSearchHotelIds).SuperSearch(superSearch).BlockIdList(blockIdList).BlockIdType(blockIdType).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).BlockCode(blockCode).BlockName(blockName).BlockOwner(blockOwner).BlockStatus(blockStatus).CateringStatus(cateringStatus).ReservationMethod(reservationMethod).CreatedByUser(createdByUser).BlockStartEndDate(blockStartEndDate).BlockStartStartDate(blockStartStartDate).BlockEndEndDate(blockEndEndDate).BlockEndStartDate(blockEndStartDate).ReservationArrival(reservationArrival).ReservationDeparture(reservationDeparture).IncludeShoulderDates(includeShoulderDates).StayDate(stayDate).BlockCreatedOnEndDate(blockCreatedOnEndDate).BlockCreatedOnStartDate(blockCreatedOnStartDate).DecisionEndDate(decisionEndDate).DecisionStartDate(decisionStartDate).CutOffEndDate(cutOffEndDate).CutOffStartDate(cutOffStartDate).Category(category).Name(name).AttachedProfileId(attachedProfileId).AttachedProfileIdType(attachedProfileIdType).Leads(leads).TourSeries(tourSeries).OnlyPickupBlocks(onlyPickupBlocks).OnlyOpportunities(onlyOpportunities).RatePlanCode(ratePlanCode).TourCode(tourCode).AttributeName(attributeName).OrderType(orderType).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).AdditionalCriteriaStartDate(additionalCriteriaStartDate).NumberOfDays(numberOfDays).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomAllocationCriteria(roomAllocationCriteria).RoomType(roomType).AdditionalCriteriaRatePlanCode(additionalCriteriaRatePlanCode).CurrencyCode(currencyCode).AccessRestriction(accessRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetBlocks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlocks`: BlockSummaries
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetBlocks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlocksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** |  | 
 **markAsRecentlyAccessed** | **bool** | Mark this block as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **multipleHotelsSearchHotelIds** | **[]string** | Hotel code. | 
 **superSearch** | **string** | Free form text field for searching block fields | 
 **blockIdList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockCode** | **string** | Block code | 
 **blockName** | **string** | Block Name | 
 **blockOwner** | **[]string** | Block Owner. | 
 **blockStatus** | **[]string** | Block Status. | 
 **cateringStatus** | **[]string** | Catering Status. | 
 **reservationMethod** | **[]string** | Mode of reservation (e.g. EML, TEL, FRTDSK ). | 
 **createdByUser** | **string** | user who created the Block(s). | 
 **blockStartEndDate** | **string** | The ending value of the date range. | 
 **blockStartStartDate** | **string** | The starting value of the date range. | 
 **blockEndEndDate** | **string** | The ending value of the date range. | 
 **blockEndStartDate** | **string** | The starting value of the date range. | 
 **reservationArrival** | **string** | Date when guests plan to arrive(first night stay date). | 
 **reservationDeparture** | **string** | Date when guests plan to leave(last stay day date). | 
 **includeShoulderDates** | **bool** | Whether to include shoulder dates when considering stay date. | 
 **stayDate** | **string** |  | 
 **blockCreatedOnEndDate** | **string** | The ending value of the date range. | 
 **blockCreatedOnStartDate** | **string** | The starting value of the date range. | 
 **decisionEndDate** | **string** | The ending value of the date range. | 
 **decisionStartDate** | **string** | The starting value of the date range. | 
 **cutOffEndDate** | **string** | The ending value of the date range. | 
 **cutOffStartDate** | **string** | The starting value of the date range. | 
 **category** | **[]string** | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. | 
 **name** | **[]string** | Attached profile name | 
 **attachedProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **attachedProfileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **leads** | **bool** | Show Leads in the search result. | 
 **tourSeries** | **bool** | Show tour series in the search result. | 
 **onlyPickupBlocks** | **bool** | Fetch only blocks which are open for pickup, if true. If the value is false, fetch all block statuses. | 
 **onlyOpportunities** | **bool** | Indicates that only Opportunity blocks will be fetched. | 
 **ratePlanCode** | **[]string** | Rate Plan Code. | 
 **tourCode** | **string** | Tour code for the block. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Type for block instructions that can be used in requests for partial operations. | 
 **fetchAllocatedRoomTypes** | **bool** | Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. | 
 **additionalCriteriaStartDate** | **string** | Start Date for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **numberOfDays** | **float32** | Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **existingReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **existingReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **roomAllocationCriteria** | **[]string** | Simple type for block allocation used in room rate grid. | 
 **roomType** | **[]string** | The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. | 
 **additionalCriteriaRatePlanCode** | **string** | Rate Plan to use for fetching rates. | 
 **currencyCode** | **string** | Curency in which the grid rates should be fetched. | 
 **accessRestriction** | **[]string** | Simple type for block access exclusion/restriction types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockSummaries**](BlockSummaries.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDefaultBlockCode

> DefaultBlockCodeDetails GetDefaultBlockCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockName(blockName).StartDate(startDate).BlockCodeTemplate(blockCodeTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get default Block Code



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
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    blockName := "blockName_example" // string | Used for Character Strings, length 0 to 2000. (optional)
    startDate := time.Now() // string | Start Date of the business block. (optional)
    blockCodeTemplate := "blockCodeTemplate_example" // string | Used for Character Strings, length 0 to 2000. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetDefaultBlockCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockName(blockName).StartDate(startDate).BlockCodeTemplate(blockCodeTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetDefaultBlockCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultBlockCode`: DefaultBlockCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetDefaultBlockCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultBlockCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **blockName** | **string** | Used for Character Strings, length 0 to 2000. | 
 **startDate** | **string** | Start Date of the business block. | 
 **blockCodeTemplate** | **string** | Used for Character Strings, length 0 to 2000. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DefaultBlockCodeDetails**](DefaultBlockCodeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInventoryToBorrow

> InventoryToBorrowInfo GetInventoryToBorrow(ctx).HotelId(hotelId).BlockId(blockId).StartDate(startDate).RequiredRooms(requiredRooms).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).BorrowDate(borrowDate).OverrideRateCode(overrideRateCode).OverrideRestriction(overrideRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get inventory to Borrow



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
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    startDate := time.Now() // string | 
    requiredRooms := []int32{int32(123)} // []int32 | The number of rooms that need to be borrowed.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional) (default to "Block")
    existingReservationId := "existingReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    existingReservationIdType := "existingReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    numberOfRooms := int32(56) // int32 | The number of rooms associated with the reservation. (optional)
    borrowDate := []string{time.Now()} // []string | The date on which rooms need to be borrowed for the block. (optional)
    overrideRateCode := true // bool | Flag to override the inclusion of block rate code as a criteria when deciding what room types can be allowed to borrow. (optional)
    overrideRestriction := true // bool | Flag indicating whether to override any restrictions that exist on the rate or room type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetInventoryToBorrow(context.Background()).HotelId(hotelId).BlockId(blockId).StartDate(startDate).RequiredRooms(requiredRooms).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).BorrowDate(borrowDate).OverrideRateCode(overrideRateCode).OverrideRestriction(overrideRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetInventoryToBorrow``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryToBorrow`: InventoryToBorrowInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetInventoryToBorrow`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInventoryToBorrowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **startDate** | **string** |  | 
 **requiredRooms** | **[]int32** | The number of rooms that need to be borrowed. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | [default to &quot;Block&quot;]
 **existingReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **existingReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **numberOfRooms** | **int32** | The number of rooms associated with the reservation. | 
 **borrowDate** | **[]string** | The date on which rooms need to be borrowed for the block. | 
 **overrideRateCode** | **bool** | Flag to override the inclusion of block rate code as a criteria when deciding what room types can be allowed to borrow. | 
 **overrideRestriction** | **bool** | Flag indicating whether to override any restrictions that exist on the rate or room type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InventoryToBorrowInfo**](InventoryToBorrowInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNextBlockStatus

> NextBlockStatus GetNextBlockStatus(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CurrentStatus(currentStatus).IncludeCateringStatus(includeCateringStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Next Block Status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    currentStatus := "currentStatus_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    includeCateringStatus := true // bool | Flag to include catering next status. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetNextBlockStatus(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CurrentStatus(currentStatus).IncludeCateringStatus(includeCateringStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetNextBlockStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNextBlockStatus`: NextBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetNextBlockStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNextBlockStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **currentStatus** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **includeCateringStatus** | **bool** | Flag to include catering next status. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NextBlockStatus**](NextBlockStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentlyAccessedBlocks

> RecentlyAccessedBlocks GetRecentlyAccessedBlocks(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get recently accessed Blocks



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetRecentlyAccessedBlocks(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetRecentlyAccessedBlocks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedBlocks`: RecentlyAccessedBlocks
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetRecentlyAccessedBlocks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedBlocksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecentlyAccessedBlocks**](RecentlyAccessedBlocks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSalesAllowances

> SalesAllowances GetSalesAllowances(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CeilingId(ceilingId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Sales allowances



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ceilingId := []float32{float32(123)} // []float32 | ID of sales allowance. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetSalesAllowances(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CeilingId(ceilingId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetSalesAllowances``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesAllowances`: SalesAllowances
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetSalesAllowances`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesAllowancesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ceilingId** | **[]float32** | ID of sales allowance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SalesAllowances**](SalesAllowances.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTracesByDateRange

> TracesByDateRange GetTracesByDateRange(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).BeginDate(beginDate).EndDate(endDate).Department(department).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Traces By Date Range



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    beginDate := time.Now() // string | Begin date for fetching traces criteria. (optional)
    endDate := time.Now() // string | End date for fetching traces criteria. (optional)
    department := []string{"Inner_example"} // []string | Department for which traces are to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.GetTracesByDateRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).BeginDate(beginDate).EndDate(endDate).Department(department).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.GetTracesByDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTracesByDateRange`: TracesByDateRange
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.GetTracesByDateRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTracesByDateRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **beginDate** | **string** | Begin date for fetching traces criteria. | 
 **endDate** | **string** | End date for fetching traces criteria. | 
 **department** | **[]string** | Department for which traces are to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TracesByDateRange**](TracesByDateRange.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAlternateDates

> Status PostAlternateDates(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create alternate dates for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAlternateDates := *openapiclient.NewBlockAlternateDates() // BlockAlternateDates | Request object to create block alternate dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostAlternateDates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAlternateDatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAlternateDates** | [**BlockAlternateDates**](BlockAlternateDates.md) | Request object to create block alternate dates. | 
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


## PostBlock

> Status PostBlock(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Block(block).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    block := *openapiclient.NewBlock() // Block | Request object for creation of blocks. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlock(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Block(block).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **block** | [**Block**](Block.md) | Request object for creation of blocks. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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


## PostBlockOwners

> Status PostBlockOwners(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToAssign(blockOwnersToAssign).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Assign a Block owner



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockOwnersToAssign := *openapiclient.NewBlockOwnersToAssign() // BlockOwnersToAssign | Request object to assign block owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToAssign(blockOwnersToAssign).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlockOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockOwnersToAssign** | [**BlockOwnersToAssign**](BlockOwnersToAssign.md) | Request object to assign block owners. | 
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


## PostBlockPostingMaster

> Status PostBlockPostingMaster(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockPostingMaster(blockPostingMaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block posting master



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockPostingMaster := *openapiclient.NewBlockPostingMaster() // BlockPostingMaster | Request object for creating a new Posting Master Reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlockPostingMaster(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockPostingMaster(blockPostingMaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlockPostingMaster``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockPostingMaster`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlockPostingMaster`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockPostingMasterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockPostingMaster** | [**BlockPostingMaster**](BlockPostingMaster.md) | Request object for creating a new Posting Master Reservation. | 
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


## PostBlockRestriction

> Status PostBlockRestriction(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRestriction(blockRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Restriction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRestriction := *openapiclient.NewBlockRestriction() // BlockRestriction | Request for CreateBlockRestriction operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlockRestriction(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRestriction(blockRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlockRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlockRestriction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockRestrictionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRestriction** | [**BlockRestriction**](BlockRestriction.md) | Request for CreateBlockRestriction operation. | 
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


## PostBlockValidate

> Status PostBlockValidate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockValidate(blockValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockValidate := *openapiclient.NewBlockValidate() // BlockValidate | Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlockValidate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockValidate(blockValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlockValidate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockValidate`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlockValidate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockValidateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockValidate** | [**BlockValidate**](BlockValidate.md) | Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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


## PostBlockWashSchedules

> Status PostBlockWashSchedules(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Wash Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockWashSchedulesInfo := *openapiclient.NewBlockWashSchedulesInfo() // BlockWashSchedulesInfo | Request object to create multiple new Block Wash Schedules under the selected block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostBlockWashSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockWashSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockWashSchedulesInfo** | [**BlockWashSchedulesInfo**](BlockWashSchedulesInfo.md) | Request object to create multiple new Block Wash Schedules under the selected block. | 
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


## PostCancelBlock

> Status PostCancelBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToCancel(blockToCancel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel the Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToCancel := *openapiclient.NewBlockToCancel() // BlockToCancel | Request object for block cancelation. This object contains unique identifiers (Block unique id, Block Code and Block Start Date ) to identify the block to be Canceled and the standard optional Opera Context element.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostCancelBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToCancel(blockToCancel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostCancelBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostCancelBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToCancel** | [**BlockToCancel**](BlockToCancel.md) | Request object for block cancelation. This object contains unique identifiers (Block unique id, Block Code and Block Start Date ) to identify the block to be Canceled and the standard optional Opera Context element. | 
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


## PostCopyBlock

> Status PostCopyBlock(ctx, sourceBlockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCopy(blockCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    sourceBlockId := "sourceBlockId_example" // string | Source Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCopy := *openapiclient.NewBlockCopy() // BlockCopy | Request for creating a copy of an existing block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostCopyBlock(context.Background(), sourceBlockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCopy(blockCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostCopyBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCopyBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostCopyBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceBlockId** | **string** | Source Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCopyBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCopy** | [**BlockCopy**](BlockCopy.md) | Request for creating a copy of an existing block. | 
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


## PostDefaultBlockCode

> BlockBasicInfos PostDefaultBlockCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockDetails(blockDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create default Block Code for Multiple blocks



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockDetails := *openapiclient.NewBlockBasicInfos() // BlockBasicInfos | Request object for generating default block code for multiple blocks.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostDefaultBlockCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockDetails(blockDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostDefaultBlockCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDefaultBlockCode`: BlockBasicInfos
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostDefaultBlockCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostDefaultBlockCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockDetails** | [**BlockBasicInfos**](BlockBasicInfos.md) | Request object for generating default block code for multiple blocks. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockBasicInfos**](BlockBasicInfos.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomingList

> RoomingListDetails PostRoomingList(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Rooming List Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomingList := *openapiclient.NewRoomingList() // RoomingList | Request object for creating rooming list reservations. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostRoomingList(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostRoomingList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomingList`: RoomingListDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostRoomingList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomingListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomingList** | [**RoomingList**](RoomingList.md) | Request object for creating rooming list reservations. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomingListDetails**](RoomingListDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSubAllocation

> Status PostSubAllocation(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubAllocation(subAllocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Sub allocation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subAllocation := *openapiclient.NewSubAllocation() // SubAllocation | Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostSubAllocation(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubAllocation(subAllocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostSubAllocation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubAllocation`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostSubAllocation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostSubAllocationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subAllocation** | [**SubAllocation**](SubAllocation.md) | Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included. | 
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


## PostSubBlock

> Status PostSubBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a sub-Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subBlock := *openapiclient.NewSubBlock() // SubBlock | Request object to create new sub block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostSubBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostSubBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostSubBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSubBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subBlock** | [**SubBlock**](SubBlock.md) | Request object to create new sub block. | 
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


## PostSubBlockByExtId

> Status PostSubBlockByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a sub-Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subBlock := *openapiclient.NewSubBlock() // SubBlock | Request object to create new sub block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostSubBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostSubBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubBlockByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostSubBlockByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSubBlockByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subBlock** | [**SubBlock**](SubBlock.md) | Request object to create new sub block. | 
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


## PostTourSeries

> Status PostTourSeries(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TourSeries(tourSeries).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Block tour series



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    tourSeries := *openapiclient.NewTourSeries() // TourSeries | Request for creating a tour series based on an existing block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PostTourSeries(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TourSeries(tourSeries).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PostTourSeries``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTourSeries`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PostTourSeries`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTourSeriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **tourSeries** | [**TourSeries**](TourSeries.md) | Request for creating a tour series based on an existing block. | 
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


## PutAlternateDates

> Status PutAlternateDates(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change alternate dates for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAlternateDates := *openapiclient.NewBlockAlternateDates() // BlockAlternateDates | Request object to change block alternate dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutAlternateDates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAlternateDatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAlternateDates** | [**BlockAlternateDates**](BlockAlternateDates.md) | Request object to change block alternate dates. | 
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


## PutBlock

> BlockChanged PutBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToBeChanged := *openapiclient.NewBlockToBeChanged() // BlockToBeChanged | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlock`: BlockChanged
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToBeChanged** | [**BlockToBeChanged**](BlockToBeChanged.md) | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockChanged**](BlockChanged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockAccessExclusion

> Status PutBlockAccessExclusion(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAccessExclusion(blockAccessExclusion).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Block Exclusion information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAccessExclusion := *openapiclient.NewBlockAccessExclusion() // BlockAccessExclusion | Request object for creating access exclusion permissions for a block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAccessExclusion(blockAccessExclusion).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAccessExclusion`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAccessExclusion`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAccessExclusionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAccessExclusion** | [**BlockAccessExclusion**](BlockAccessExclusion.md) | Request object for creating access exclusion permissions for a block. | 
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


## PutBlockAllocation

> Status PutBlockAllocation(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Block Allocation  



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocation := *openapiclient.NewAllocation() // Allocation | A Request message that sets the room allocations as a collection of room types and dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAllocation(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAllocation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocation`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAllocation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocation** | [**Allocation**](Allocation.md) | A Request message that sets the room allocations as a collection of room types and dates. | 
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


## PutBlockAllocationByExtId

> Status PutBlockAllocationByExtId(ctx, roomType, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Block Allocation  



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    roomType := "roomType_example" // string | Room Type
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocation := *openapiclient.NewAllocation() // Allocation | A Request message that sets the room allocations as a collection of room types and dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAllocationByExtId(context.Background(), roomType, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAllocationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAllocationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomType** | **string** | Room Type | 
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocation** | [**Allocation**](Allocation.md) | A Request message that sets the room allocations as a collection of room types and dates. | 
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


## PutBlockAllocationRange

> Status PutBlockAllocationRange(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Block Allocation Range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationRange := *openapiclient.NewBlockAllocationRange() // BlockAllocationRange | Request for updating block allocation for a range of dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAllocationRange(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAllocationRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAllocationRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationRange** | [**BlockAllocationRange**](BlockAllocationRange.md) | Request for updating block allocation for a range of dates. | 
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


## PutBlockAllocationRangeByExtId

> Status PutBlockAllocationRangeByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Block Allocation Range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationRange := *openapiclient.NewBlockAllocationRange() // BlockAllocationRange | Request for updating block allocation for a range of dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAllocationRangeByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAllocationRangeByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationRangeByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAllocationRangeByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationRangeByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationRange** | [**BlockAllocationRange**](BlockAllocationRange.md) | Request for updating block allocation for a range of dates. | 
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


## PutBlockAllocationWash

> Status PutBlockAllocationWash(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationWash(blockAllocationWash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Block Allocation Wash



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationWash := *openapiclient.NewBlockAllocationWash() // BlockAllocationWash | Request object for block wash operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockAllocationWash(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationWash(blockAllocationWash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockAllocationWash``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationWash`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockAllocationWash`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationWashRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationWash** | [**BlockAllocationWash**](BlockAllocationWash.md) | Request object for block wash operation. | 
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


## PutBlockByExtId

> BlockChanged PutBlockByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToBeChanged := *openapiclient.NewBlockToBeChanged() // BlockToBeChanged | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockByExtId`: BlockChanged
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToBeChanged** | [**BlockToBeChanged**](BlockToBeChanged.md) | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockChanged**](BlockChanged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockCutoff

> Status PutBlockCutoff(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Block Cut Off



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewBlockStatus() // BlockStatus | Request object for cutoffBlock operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockCutoff(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockCutoff``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockCutoff`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockCutoff`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockCutoffRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**BlockStatus**](BlockStatus.md) | Request object for cutoffBlock operation. | 
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


## PutBlockOwners

> Status PutBlockOwners(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToChange(blockOwnersToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block owners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockOwnersToChange := *openapiclient.NewBlockOwnersToChange() // BlockOwnersToChange | Request object to change block owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToChange(blockOwnersToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockOwnersToChange** | [**BlockOwnersToChange**](BlockOwnersToChange.md) | Request object to change block owners. | 
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


## PutBlockRates

> Status PutBlockRates(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Refreshes Block rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewBlockStatus() // BlockStatus | Request object of refresh block rates operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockRates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**BlockStatus**](BlockStatus.md) | Request object of refresh block rates operation. | 
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


## PutBlockReservations

> ChangedBlockReservations PutBlockReservations(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockReservationsToChange(blockReservationsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockReservationsToChange := *openapiclient.NewBlockReservationsToChange() // BlockReservationsToChange | The request object to implement batch changes to block reservations based upon changes made to a reference reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockReservations(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockReservationsToChange(blockReservationsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockReservations`: ChangedBlockReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockReservationsToChange** | [**BlockReservationsToChange**](BlockReservationsToChange.md) | The request object to implement batch changes to block reservations based upon changes made to a reference reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedBlockReservations**](ChangedBlockReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockShift

> ShiftedBlock PutBlockShift(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToShift(blockToShift).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Shifts the Block start date



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToShift := *openapiclient.NewBlockToShift() // BlockToShift | Request object to shift business block starting date.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockShift(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToShift(blockToShift).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockShift``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockShift`: ShiftedBlock
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockShift`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockShiftRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToShift** | [**BlockToShift**](BlockToShift.md) | Request object to shift business block starting date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ShiftedBlock**](ShiftedBlock.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockStatus

> ChangedBlockStatus PutBlockStatus(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the Status of a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusToChange := *openapiclient.NewBlockStatusToChange() // BlockStatusToChange | Request object for changing the booking status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockStatus(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatus`: ChangedBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusToChange** | [**BlockStatusToChange**](BlockStatusToChange.md) | Request object for changing the booking status of the business block. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedBlockStatus**](ChangedBlockStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockStatusByExtId

> ChangedBlockStatus PutBlockStatusByExtId(ctx, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the Status of a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockExternalId := "blockExternalId_example" // string | External Block Id
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | HotelId
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusToChange := *openapiclient.NewBlockStatusToChange() // BlockStatusToChange | Request object for changing the booking status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockStatusByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockStatusByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusByExtId`: ChangedBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockStatusByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockExternalId** | **string** | External Block Id | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | HotelId | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockStatusByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusToChange** | [**BlockStatusToChange**](BlockStatusToChange.md) | Request object for changing the booking status of the business block. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedBlockStatus**](ChangedBlockStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBlockStatusToOpen

> Status PutBlockStatusToOpen(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block status to Open



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewBlockStatus() // BlockStatus | Request object to transition the block status to Open for Pickup. This object contains unique identifier ( Block unique id ) to identify the block to be transitioned and the standard optional Opera Context element.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockStatusToOpen(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockStatusToOpen``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusToOpen`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockStatusToOpen`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockStatusToOpenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**BlockStatus**](BlockStatus.md) | Request object to transition the block status to Open for Pickup. This object contains unique identifier ( Block unique id ) to identify the block to be transitioned and the standard optional Opera Context element. | 
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


## PutBlockWashSchedules

> Status PutBlockWashSchedules(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block Wash Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockWashSchedulesInfo := *openapiclient.NewBlockWashSchedulesInfo() // BlockWashSchedulesInfo | Request object to change multiple Block Wash Schedules under the selected block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutBlockWashSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockWashSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockWashSchedulesInfo** | [**BlockWashSchedulesInfo**](BlockWashSchedulesInfo.md) | Request object to change multiple Block Wash Schedules under the selected block. | 
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


## PutCateringRevenue

> Status PutCateringRevenue(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRevenueToChange(cateringRevenueToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Recalculate Catering Revenue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    blockId := "blockId_example" // string | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringRevenueToChange := *openapiclient.NewCateringRevenueToChange() // CateringRevenueToChange | Request object for recalculating the catering revenue for a business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutCateringRevenue(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRevenueToChange(cateringRevenueToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutCateringRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringRevenue`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutCateringRevenue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**blockId** | **string** | Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringRevenueToChange** | [**CateringRevenueToChange**](CateringRevenueToChange.md) | Request object for recalculating the catering revenue for a business block. | 
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


## PutCateringStatus

> ChangedCateringStatus PutCateringStatus(ctx, eventId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringStatusToChange(cateringStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Catering Status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    eventId := "eventId_example" // string | Event Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringStatusToChange := *openapiclient.NewCateringStatusToChange() // CateringStatusToChange | Request object for changing the catering status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutCateringStatus(context.Background(), eventId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringStatusToChange(cateringStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutCateringStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringStatus`: ChangedCateringStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutCateringStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Event Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringStatusToChange** | [**CateringStatusToChange**](CateringStatusToChange.md) | Request object for changing the catering status of the business block. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedCateringStatus**](ChangedCateringStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutClearAllRestrictions

> Status PutClearAllRestrictions(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllRestrictions(allRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Clear-All Block Restrictions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allRestrictions := *openapiclient.NewAllRestrictions() // AllRestrictions | Request object for clearing all restrictions based on date.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutClearAllRestrictions(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllRestrictions(allRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutClearAllRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutClearAllRestrictions`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutClearAllRestrictions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutClearAllRestrictionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allRestrictions** | [**AllRestrictions**](AllRestrictions.md) | Request object for clearing all restrictions based on date. | 
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


## PutContractDefaults

> Status PutContractDefaults(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Contract Defaults



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewBlockStatus() // BlockStatus | Request object for copying from Original or Current Grid to Contract Grid.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutContractDefaults(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutContractDefaults``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutContractDefaults`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutContractDefaults`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutContractDefaultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**BlockStatus**](BlockStatus.md) | Request object for copying from Original or Current Grid to Contract Grid. | 
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


## PutInventory

> Status PutInventory(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryToBorrow(inventoryToBorrow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Borrow Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryToBorrow := *openapiclient.NewInventoryToBorrow() // InventoryToBorrow | The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutInventory(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryToBorrow(inventoryToBorrow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventory`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryToBorrow** | [**InventoryToBorrow**](InventoryToBorrow.md) | The standard optional Opera Context element is also included. | 
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


## PutRegularToMasterBlock

> Status PutRegularToMasterBlock(ctx, hotelId, blockId, masterBlockCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Use this API to convert a regular block to a master block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Id
    blockId := "blockId_example" // string | Block Id
    masterBlockCode := "masterBlockCode_example" // string | The block code of the master block to be created
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutRegularToMasterBlock(context.Background(), hotelId, blockId, masterBlockCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutRegularToMasterBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRegularToMasterBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutRegularToMasterBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Id | 
**blockId** | **string** | Block Id | 
**masterBlockCode** | **string** | The block code of the master block to be created | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRegularToMasterBlockRequest struct via the builder pattern


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


## PutReleasedInventory

> Status PutReleasedInventory(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BorrowedInventoryToReturn(borrowedInventoryToReturn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Return Borrowed Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    borrowedInventoryToReturn := *openapiclient.NewBorrowedInventoryToReturn() // BorrowedInventoryToReturn | The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutReleasedInventory(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BorrowedInventoryToReturn(borrowedInventoryToReturn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutReleasedInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReleasedInventory`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutReleasedInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutReleasedInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **borrowedInventoryToReturn** | [**BorrowedInventoryToReturn**](BorrowedInventoryToReturn.md) | The standard optional Opera Context element is also included. | 
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


## PutRoomTypeOrder

> Status PutRoomTypeOrder(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeOrder(roomTypeOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set room type order for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypeOrder := *openapiclient.NewRoomTypeOrder() // RoomTypeOrder | Request object for SetRoomTypeOrder operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutRoomTypeOrder(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeOrder(roomTypeOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutRoomTypeOrder``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomTypeOrder`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutRoomTypeOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomTypeOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypeOrder** | [**RoomTypeOrder**](RoomTypeOrder.md) | Request object for SetRoomTypeOrder operation. | 
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


## PutSubBlockToRegular

> Status PutSubBlockToRegular(ctx, hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Use this API to convert a sub block to a regular block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Id
    blockId := "blockId_example" // string | Block Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutSubBlockToRegular(context.Background(), hotelId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutSubBlockToRegular``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSubBlockToRegular`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutSubBlockToRegular`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Id | 
**blockId** | **string** | Block Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSubBlockToRegularRequest struct via the builder pattern


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


## PutValidateBlockCode

> Status PutValidateBlockCode(ctx, blockCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCodeToValidate(blockCodeToValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Block Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blk"
)

func main() {
    blockCode := "blockCode_example" // string | Block code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCodeToValidate := *openapiclient.NewBlockCodeToValidate() // BlockCodeToValidate | Request object for validating blocks in a train. Block is not created. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockAPI.PutValidateBlockCode(context.Background(), blockCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCodeToValidate(blockCodeToValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockAPI.PutValidateBlockCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateBlockCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockAPI.PutValidateBlockCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockCode** | **string** | Block code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutValidateBlockCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCodeToValidate** | [**BlockCodeToValidate**](BlockCodeToValidate.md) | Request object for validating blocks in a train. Block is not created. The standard optional Opera Context element is also included. | 
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

