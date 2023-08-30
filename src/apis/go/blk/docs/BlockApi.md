# \BlockApi

All URIs are relative to */blk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeRateOverride**](BlockApi.md#ChangeRateOverride) | **Put** /hotels/{hotelId}/blocks/{blockId}/rate/override | Change rate override
[**DeleteAlternateDates**](BlockApi.md#DeleteAlternateDates) | **Delete** /blocks/{blockId}/alternateDates | Delete alternate dates for a Block
[**DeleteBlock**](BlockApi.md#DeleteBlock) | **Delete** /hotels/{hotelId}/blocks/{blockId} | Delete a Block
[**DeleteBlockAccessExclusion**](BlockApi.md#DeleteBlockAccessExclusion) | **Delete** /blocks/{blockId}/blockAccessExclusion | Delete Block access exclusion
[**DeleteBlockAttachment**](BlockApi.md#DeleteBlockAttachment) | **Delete** /blocks/{blockId}/attachments/{attachId} | Delete Block Attachment
[**DeleteBlockOwners**](BlockApi.md#DeleteBlockOwners) | **Delete** /blocks/{blockId}/owners | Delete a Block owner
[**DeleteBlockRestriction**](BlockApi.md#DeleteBlockRestriction) | **Delete** /blocks/{blockId}/restrictions | Delete Block Restriction
[**DeleteBlockServiceCache**](BlockApi.md#DeleteBlockServiceCache) | **Delete** /services/block/cache | Delete Block service cache
[**DeleteBlockWashSchedules**](BlockApi.md#DeleteBlockWashSchedules) | **Delete** /blocks/{blockId}/washSchedules | Remove Block Wash Schedules
[**GetBlock**](BlockApi.md#GetBlock) | **Get** /hotels/{hotelId}/blocks/{blockId} | Get a Block By ID
[**GetBlockAccessExclusion**](BlockApi.md#GetBlockAccessExclusion) | **Get** /blocks/{blockId}/blockAccessExclusion | Get Block exclusion information
[**GetBlockActivityLog**](BlockApi.md#GetBlockActivityLog) | **Get** /blockActivityLog | Get the Block activity log
[**GetBlockAttachments**](BlockApi.md#GetBlockAttachments) | **Get** /blocks/{blockId}/attachments | Get Block Attachments
[**GetBlockAvailability**](BlockApi.md#GetBlockAvailability) | **Get** /hotels/{hotelId}/blocks/{blockId}/availability | Get Block AvailaBility
[**GetBlockByExtId**](BlockApi.md#GetBlockByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId} | Get a Block By ID
[**GetBlockDailyStatistics**](BlockApi.md#GetBlockDailyStatistics) | **Get** /blocks/dailyStatistics | Get Block Daily Statistics
[**GetBlockOwners**](BlockApi.md#GetBlockOwners) | **Get** /blocks/{blockId}/owners | Get Block owners
[**GetBlockPMReservations**](BlockApi.md#GetBlockPMReservations) | **Get** /hotels/{hotelId}/blocks/{blockId}/postingMaster/reservations | Get Posting Master Reservations for a Block
[**GetBlockPMReservationsByExtId**](BlockApi.md#GetBlockPMReservationsByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/postingMaster/reservations | Get Posting Master Reservations for a Block
[**GetBlockRangeInfo**](BlockApi.md#GetBlockRangeInfo) | **Get** /hotels/{hotelId}/blocks/{blockId}/allocationRange | Get Block Range Information
[**GetBlockReservations**](BlockApi.md#GetBlockReservations) | **Get** /blocks/{blockId}/reservations | Retrieves all reservations created for the Block
[**GetBlockRestrictions**](BlockApi.md#GetBlockRestrictions) | **Get** /blocks/{blockId}/restrictions | Get Block restrictions 
[**GetBlockRevenueChanges**](BlockApi.md#GetBlockRevenueChanges) | **Get** /blocks/{blockId}/revenueActivityLog | Fetch Block Revenue Changes
[**GetBlockRoomTypes**](BlockApi.md#GetBlockRoomTypes) | **Get** /blocks/{blockId}/roomTypes | Get Bock Room Types
[**GetBlockRoomsStatus**](BlockApi.md#GetBlockRoomsStatus) | **Get** /blocks/{blockId}/roomsStatus | Get room status for a Block
[**GetBlockStatistics**](BlockApi.md#GetBlockStatistics) | **Get** /blocks/{blockId}/statistics | Get Block Statistics
[**GetBlockStatusChanges**](BlockApi.md#GetBlockStatusChanges) | **Get** /blocks/{blockId}/statusActivityLog | Get Block Status Activity Log
[**GetBlockWashInfo**](BlockApi.md#GetBlockWashInfo) | **Get** /blockWash | Get Block Wash Information
[**GetBlockWashSchedules**](BlockApi.md#GetBlockWashSchedules) | **Get** /blocks/{blockId}/washSchedules | Get Block Wash Schedule
[**GetBlocks**](BlockApi.md#GetBlocks) | **Get** /blocks | Get Blocks
[**GetDefaultBlockCode**](BlockApi.md#GetDefaultBlockCode) | **Get** /defaultBlockCode | Get default Block Code
[**GetInventoryToBorrow**](BlockApi.md#GetInventoryToBorrow) | **Get** /inventoryToBorrow | Get inventory to Borrow
[**GetNextBlockStatus**](BlockApi.md#GetNextBlockStatus) | **Get** /blocks/status | Get Next Block Status
[**GetRecentlyAccessedBlocks**](BlockApi.md#GetRecentlyAccessedBlocks) | **Get** /recentlyAccessedBlocks | Get recently accessed Blocks
[**GetSalesAllowances**](BlockApi.md#GetSalesAllowances) | **Get** /salesAllowances | Get Sales allowances
[**GetTracesByDateRange**](BlockApi.md#GetTracesByDateRange) | **Get** /hotels/{hotelId}/tracesByDateRange | Get Traces By Date Range
[**PingBlockService**](BlockApi.md#PingBlockService) | **Get** /services/block/status | This API retrieves the Block service version
[**PostAlternateDates**](BlockApi.md#PostAlternateDates) | **Post** /blocks/{blockId}/alternateDates | Create alternate dates for a Block
[**PostBlock**](BlockApi.md#PostBlock) | **Post** /hotels/{hotelId}/block | Create a Block
[**PostBlockOwners**](BlockApi.md#PostBlockOwners) | **Post** /blocks/{blockId}/owners | Assign a Block owner
[**PostBlockPostingMaster**](BlockApi.md#PostBlockPostingMaster) | **Post** /hotels/{hotelId}/blocks/{blockId}/postingMaster | Create Block posting master
[**PostBlockRestriction**](BlockApi.md#PostBlockRestriction) | **Post** /blocks/{blockId}/restrictions | Create Block Restriction
[**PostBlockValidate**](BlockApi.md#PostBlockValidate) | **Post** /blocks/actions/validate | Validate Block
[**PostBlockWashSchedules**](BlockApi.md#PostBlockWashSchedules) | **Post** /blocks/{blockId}/washSchedules | Create Block Wash Schedules
[**PostCancelBlock**](BlockApi.md#PostCancelBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/cancellations | Cancel the Block
[**PostCopyBlock**](BlockApi.md#PostCopyBlock) | **Post** /blocks/{sourceBlockId}/copy | Copy a Block
[**PostRoomingList**](BlockApi.md#PostRoomingList) | **Post** /blocks/{blockId}/roomingList | Create Block Rooming List Reservations
[**PostSubAllocation**](BlockApi.md#PostSubAllocation) | **Post** /allocation | Create Sub allocation
[**PostSubBlock**](BlockApi.md#PostSubBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/subBlocks | Create a sub-Block
[**PostSubBlockByExtId**](BlockApi.md#PostSubBlockByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/subBlocks | Create a sub-Block
[**PostTourSeries**](BlockApi.md#PostTourSeries) | **Post** /blocks/{blockId}/tourSeries | Create a Block tour series
[**PutAlternateDates**](BlockApi.md#PutAlternateDates) | **Put** /blocks/{blockId}/alternateDates | Change alternate dates for a Block
[**PutBlock**](BlockApi.md#PutBlock) | **Put** /hotels/{hotelId}/blocks/{blockId} | Change a Block
[**PutBlockAccessExclusion**](BlockApi.md#PutBlockAccessExclusion) | **Put** /blocks/{blockId}/blockAccessExclusion | Set Block Exclusion information
[**PutBlockAllocation**](BlockApi.md#PutBlockAllocation) | **Put** /hotels/{hotelId}/blocks/{blockId}/allocation | Set Block Allocation  
[**PutBlockAllocationByExtId**](BlockApi.md#PutBlockAllocationByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocation/roomTypes/{roomType} | Set Block Allocation  
[**PutBlockAllocationRange**](BlockApi.md#PutBlockAllocationRange) | **Put** /hotels/{hotelId}/blocks/{blockId}/allocationRange | Set Block Allocation Range
[**PutBlockAllocationRangeByExtId**](BlockApi.md#PutBlockAllocationRangeByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocationRange | Set Block Allocation Range
[**PutBlockAllocationWash**](BlockApi.md#PutBlockAllocationWash) | **Put** /blockWash | Update Block Allocation Wash
[**PutBlockByExtId**](BlockApi.md#PutBlockByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId} | Change a Block
[**PutBlockCutoff**](BlockApi.md#PutBlockCutoff) | **Put** /blocks/{blockId}/blockCutOff | Block Cut Off
[**PutBlockOwners**](BlockApi.md#PutBlockOwners) | **Put** /blocks/{blockId}/owners | Change Block owners
[**PutBlockRates**](BlockApi.md#PutBlockRates) | **Put** /blocks/{blockId}/rates | Refreshes Block rates
[**PutBlockReservations**](BlockApi.md#PutBlockReservations) | **Put** /blocks/{blockId}/reservations | Change Block reservations
[**PutBlockShift**](BlockApi.md#PutBlockShift) | **Put** /hotels/{hotelId}/blocks/{blockId}/shifts | Shifts the Block start date
[**PutBlockStatus**](BlockApi.md#PutBlockStatus) | **Put** /hotels/{hotelId}/blocks/{blockId}/status | Change the Status of a Block
[**PutBlockStatusByExtId**](BlockApi.md#PutBlockStatusByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/status | Change the Status of a Block
[**PutBlockStatusToOpen**](BlockApi.md#PutBlockStatusToOpen) | **Put** /hotels/{hotelId}/blocks/{blockId}/openStatus | Change Block status to Open
[**PutBlockWashSchedules**](BlockApi.md#PutBlockWashSchedules) | **Put** /blocks/{blockId}/washSchedules | Change Block Wash Schedules
[**PutCateringStatus**](BlockApi.md#PutCateringStatus) | **Put** /caterings/{eventId}/cateringStatus | Change Catering Status
[**PutClearAllRestrictions**](BlockApi.md#PutClearAllRestrictions) | **Put** /blocks/{blockId}/restrictions | Clear-All Block Restrictions 
[**PutContractDefaults**](BlockApi.md#PutContractDefaults) | **Put** /contractDefaults | Set Contract Defaults
[**PutInventory**](BlockApi.md#PutInventory) | **Put** /inventory | Borrow Inventory
[**PutReleasedInventory**](BlockApi.md#PutReleasedInventory) | **Put** /inventoryReleased | Return Borrowed Inventory
[**PutRoomTypeOrder**](BlockApi.md#PutRoomTypeOrder) | **Put** /blocks/{blockId}/roomTypeOrder | Set room type order for a Block
[**PutValidateBlockCode**](BlockApi.md#PutValidateBlockCode) | **Put** /blocks/{blockCode}/actions/validate | Validate Block Code



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateOverride := *openapiclient.NewChangeRateOverrideRequest() // ChangeRateOverrideRequest | Request object of change block rate override operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.ChangeRateOverride(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateOverride(rateOverride).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.ChangeRateOverride``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRateOverride`: RateOverrideStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.ChangeRateOverride`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateOverride** | [**ChangeRateOverrideRequest**](ChangeRateOverrideRequest.md) | Request object of change block rate override operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteAlternateDates`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlock`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.DeleteBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllowCancelReservation(allowCancelReservation).AllowCreateReservation(allowCreateReservation).AllowModifyReservation(allowModifyReservation).ExcludeFromAvailability(excludeFromAvailability).Inactive(inactive).SourceType(sourceType).SourceValue(sourceValue).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockAccessExclusion`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockAccessExclusion`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlockAttachment(context.Background(), attachId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockAttachment`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockOwners`: %v\n", resp)
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


## DeleteBlockRestriction

> Status DeleteBlockRestriction(ctx, blockId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Code(code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlockRestriction(context.Background(), blockId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Code(code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockRestriction`: %v\n", resp)
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


## DeleteBlockServiceCache

> Status DeleteBlockServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block service cache



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlockServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockServiceCacheRequest struct via the builder pattern


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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.DeleteBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.DeleteBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.DeleteBlockWashSchedules`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlock`: Block
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAccessExclusion`: BlockAccessExclusionInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockAccessExclusion`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockActivityLog(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Module(module).ModuleParamsParameterName(moduleParamsParameterName).ModuleParamsParameterValue(moduleParamsParameterValue).ActivityGroup(activityGroup).ActivityType(activityType).ActivityParamsFromDate(activityParamsFromDate).ActivityParamsToDate(activityParamsToDate).ActivityParamsSearchText(activityParamsSearchText).UserByIDsUserId(userByIDsUserId).UserForIDsUserId(userForIDsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockActivityLog`: BlockActivityLog
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockActivityLog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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

> BlockAttachments GetBlockAttachments(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockAttachments(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAttachments`: BlockAttachments
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockAttachments`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code. | 
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

> BlockAvailability GetBlockAvailability(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideRateCode(overrideRateCode).ArrivalDate(arrivalDate).Nights(nights).Adults(adults).Children(children).Rooms(rooms).RatePlanCode(ratePlanCode).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).FetchAllocatedRoomType(fetchAllocatedRoomType).RoomTypeCount(roomTypeCount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockAvailability(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideRateCode(overrideRateCode).ArrivalDate(arrivalDate).Nights(nights).Adults(adults).Children(children).Rooms(rooms).RatePlanCode(ratePlanCode).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).FetchAllocatedRoomType(fetchAllocatedRoomType).RoomTypeCount(roomTypeCount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockAvailability`: BlockAvailability
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockAvailability`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).NumberOfDays(numberOfDays).RoomAllocationCriteria(roomAllocationCriteria).RoomTypes(roomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockByExtId`: Block
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockDailyStatistics(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).Limit(limit).Offset(offset).HotelId(hotelId).End(end).Start(start).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockDailyStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockDailyStatistics`: BlockDailyStatistics
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockDailyStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockDailyStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel code of the business block. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockOwners`: BlockOwners
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockOwners`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingmaster := true // bool | If true, a PM reservation will be created for the block if no PM reservations exist. (optional) (default to true)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockPMReservations(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockPMReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockPMReservations`: BlockPMReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockPMReservations`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingmaster := true // bool | If true, a PM reservation will be created for the block if no PM reservations exist. (optional) (default to true)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockPMReservationsByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Postingmaster(postingmaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockPMReservationsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockPMReservationsByExtId`: BlockPMReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockPMReservationsByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    genericRoomType := true // bool | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockRangeInfo(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockRangeInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRangeInfo`: BlockRangeInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockRangeInfo`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code to which the block belongs to. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockReservations(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockReservations`: BlockReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockReservations`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockRestrictions(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRestrictions`: BlockRestrictions
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockRestrictions`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockRevenueChanges(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).Status(status).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockRevenueChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRevenueChanges`: BlockRevenueChanges
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockRevenueChanges`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockRoomTypes(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).StartDate(startDate).EndDate(endDate).FetchGenericRoomTypes(fetchGenericRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRoomTypes`: BlockRoomTypes
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockRoomTypes`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockRoomsStatus(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockRoomsStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRoomsStatus`: BlockRoomsStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockRoomsStatus`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockStatistics(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).NumberOfDays(numberOfDays).StatisticsInstructions(statisticsInstructions).RoomTypeHotelId(roomTypeHotelId).InvBlockCode(invBlockCode).PromotionCode(promotionCode).RoomCategory(roomCategory).RoomClass(roomClass).RoomQualifierCode(roomQualifierCode).RoomQualifierMatchIndicator(roomQualifierMatchIndicator).RoomType(roomType).RoomViewCode(roomViewCode).RoomFeatureCode(roomFeatureCode).DefaultOccupancy(defaultOccupancy).MaximumOccupancy(maximumOccupancy).NoOfPhysicalRooms(noOfPhysicalRooms).BookingChannelCode(bookingChannelCode).BookingChannelMappingCode(bookingChannelMappingCode).BookingChannelMappingName(bookingChannelMappingName).BedTypeCode(bedTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatistics`: BlockStatistics
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockStatistics`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.BlockApi.GetBlockStatusChanges(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).ChangeEndDate(changeEndDate).ChangeStartDate(changeStartDate).CurrentStatus(currentStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockStatusChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatusChanges`: BlockStatusChanges
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockStatusChanges`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    genericRoomType := true // bool | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockWashInfo(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockId(blockId).BlockIdType(blockIdType).GenericRoomType(genericRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockWashInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockWashInfo`: BlockWashInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockWashInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockWashInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockWashSchedules`: BlockWashSchedules
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlockWashSchedules`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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

> BlockSummaries GetBlocks(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).Offset(offset).MultipleHotelsSearchHotelIds(multipleHotelsSearchHotelIds).SuperSearch(superSearch).BlockIdList(blockIdList).BlockIdType(blockIdType).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).BlockCode(blockCode).BlockName(blockName).BlockOwner(blockOwner).BlockStatus(blockStatus).CateringStatus(cateringStatus).CreatedByUser(createdByUser).BlockStartEndDate(blockStartEndDate).BlockStartStartDate(blockStartStartDate).BlockEndEndDate(blockEndEndDate).BlockEndStartDate(blockEndStartDate).ReservationArrival(reservationArrival).ReservationDeparture(reservationDeparture).IncludeShoulderDates(includeShoulderDates).StayDate(stayDate).BlockCreatedOnEndDate(blockCreatedOnEndDate).BlockCreatedOnStartDate(blockCreatedOnStartDate).DecisionEndDate(decisionEndDate).DecisionStartDate(decisionStartDate).CutOffEndDate(cutOffEndDate).CutOffStartDate(cutOffStartDate).Category(category).Name(name).AttachedProfileId(attachedProfileId).AttachedProfileIdType(attachedProfileIdType).Leads(leads).TourSeries(tourSeries).OnlyPickupBlocks(onlyPickupBlocks).OnlyOpportunities(onlyOpportunities).RatePlanCode(ratePlanCode).TourCode(tourCode).AttributeName(attributeName).OrderType(orderType).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).AdditionalCriteriaStartDate(additionalCriteriaStartDate).NumberOfDays(numberOfDays).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomAllocationCriteria(roomAllocationCriteria).RoomType(roomType).AdditionalCriteriaRatePlanCode(additionalCriteriaRatePlanCode).CurrencyCode(currencyCode).CustomCharUDFsAltname(customCharUDFsAltname).CustomCharUDFsName(customCharUDFsName).CustomCharUDFsValue(customCharUDFsValue).CustomNumericUDFsAltname(customNumericUDFsAltname).CustomNumericUDFsName(customNumericUDFsName).CustomNumericUDFsValue(customNumericUDFsValue).CustomDateUDFsAltname(customDateUDFsAltname).CustomDateUDFsName(customDateUDFsName).CustomDateUDFsValue(customDateUDFsValue).AccessRestriction(accessRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    customCharUDFsAltname := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    customCharUDFsName := []string{"Inner_example"} // []string | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. (optional)
    customCharUDFsValue := []string{"Inner_example"} // []string | Value of user defined field. (optional)
    customNumericUDFsAltname := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    customNumericUDFsName := []string{"Inner_example"} // []string | Name of user defined field. (optional)
    customNumericUDFsValue := []float32{float32(123)} // []float32 | Value of user defined field. (optional)
    customDateUDFsAltname := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    customDateUDFsName := []string{"Inner_example"} // []string | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. (optional)
    customDateUDFsValue := []string{time.Now()} // []string | Value of user defined field. (optional)
    accessRestriction := []string{"AccessRestriction_example"} // []string | Simple type for block access exclusion/restriction types. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetBlocks(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).Offset(offset).MultipleHotelsSearchHotelIds(multipleHotelsSearchHotelIds).SuperSearch(superSearch).BlockIdList(blockIdList).BlockIdType(blockIdType).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).BlockCode(blockCode).BlockName(blockName).BlockOwner(blockOwner).BlockStatus(blockStatus).CateringStatus(cateringStatus).CreatedByUser(createdByUser).BlockStartEndDate(blockStartEndDate).BlockStartStartDate(blockStartStartDate).BlockEndEndDate(blockEndEndDate).BlockEndStartDate(blockEndStartDate).ReservationArrival(reservationArrival).ReservationDeparture(reservationDeparture).IncludeShoulderDates(includeShoulderDates).StayDate(stayDate).BlockCreatedOnEndDate(blockCreatedOnEndDate).BlockCreatedOnStartDate(blockCreatedOnStartDate).DecisionEndDate(decisionEndDate).DecisionStartDate(decisionStartDate).CutOffEndDate(cutOffEndDate).CutOffStartDate(cutOffStartDate).Category(category).Name(name).AttachedProfileId(attachedProfileId).AttachedProfileIdType(attachedProfileIdType).Leads(leads).TourSeries(tourSeries).OnlyPickupBlocks(onlyPickupBlocks).OnlyOpportunities(onlyOpportunities).RatePlanCode(ratePlanCode).TourCode(tourCode).AttributeName(attributeName).OrderType(orderType).FetchInstructions(fetchInstructions).FetchAllocatedRoomTypes(fetchAllocatedRoomTypes).AdditionalCriteriaStartDate(additionalCriteriaStartDate).NumberOfDays(numberOfDays).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomAllocationCriteria(roomAllocationCriteria).RoomType(roomType).AdditionalCriteriaRatePlanCode(additionalCriteriaRatePlanCode).CurrencyCode(currencyCode).CustomCharUDFsAltname(customCharUDFsAltname).CustomCharUDFsName(customCharUDFsName).CustomCharUDFsValue(customCharUDFsValue).CustomNumericUDFsAltname(customNumericUDFsAltname).CustomNumericUDFsName(customNumericUDFsName).CustomNumericUDFsValue(customNumericUDFsValue).CustomDateUDFsAltname(customDateUDFsAltname).CustomDateUDFsName(customDateUDFsName).CustomDateUDFsValue(customDateUDFsValue).AccessRestriction(accessRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetBlocks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlocks`: BlockSummaries
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetBlocks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlocksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
 **customCharUDFsAltname** | **[]string** | Label of user defined field used by vendors or customers. | 
 **customCharUDFsName** | **[]string** | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | 
 **customCharUDFsValue** | **[]string** | Value of user defined field. | 
 **customNumericUDFsAltname** | **[]string** | Label of user defined field used by vendors or customers. | 
 **customNumericUDFsName** | **[]string** | Name of user defined field. | 
 **customNumericUDFsValue** | **[]float32** | Value of user defined field. | 
 **customDateUDFsAltname** | **[]string** | Label of user defined field used by vendors or customers. | 
 **customDateUDFsName** | **[]string** | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | 
 **customDateUDFsValue** | **[]string** | Value of user defined field. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    blockName := "blockName_example" // string | Used for Character Strings, length 0 to 2000. (optional)
    startDate := time.Now() // string | Start Date of the business block. (optional)
    blockCodeTemplate := "blockCodeTemplate_example" // string | Used for Character Strings, length 0 to 2000. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetDefaultBlockCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockName(blockName).StartDate(startDate).BlockCodeTemplate(blockCodeTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetDefaultBlockCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultBlockCode`: DefaultBlockCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetDefaultBlockCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultBlockCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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

> InventoryToBorrowInfo GetInventoryToBorrow(ctx).HotelId(hotelId).BlockId(blockId).StartDate(startDate).RequiredRooms(requiredRooms).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).BorrowDate(borrowDate).OverrideRateCode(overrideRateCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetInventoryToBorrow(context.Background()).HotelId(hotelId).BlockId(blockId).StartDate(startDate).RequiredRooms(requiredRooms).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ExistingReservationId(existingReservationId).ExistingReservationIdType(existingReservationIdType).RoomType(roomType).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).BorrowDate(borrowDate).OverrideRateCode(overrideRateCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetInventoryToBorrow``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryToBorrow`: InventoryToBorrowInfo
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetInventoryToBorrow`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    currentStatus := "currentStatus_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    includeCateringStatus := true // bool | Flag to include catering next status. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetNextBlockStatus(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CurrentStatus(currentStatus).IncludeCateringStatus(includeCateringStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetNextBlockStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNextBlockStatus`: NextBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetNextBlockStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNextBlockStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetRecentlyAccessedBlocks(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetRecentlyAccessedBlocks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedBlocks`: RecentlyAccessedBlocks
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetRecentlyAccessedBlocks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedBlocksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ceilingId := []float32{float32(123)} // []float32 | ID of sales allowance. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetSalesAllowances(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CeilingId(ceilingId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetSalesAllowances``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSalesAllowances`: SalesAllowances
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetSalesAllowances`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesAllowancesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    beginDate := time.Now() // string | Begin date for fetching traces criteria. (optional)
    endDate := time.Now() // string | End date for fetching traces criteria. (optional)
    department := []string{"Inner_example"} // []string | Department for which traces are to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.GetTracesByDateRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).BeginDate(beginDate).EndDate(endDate).Department(department).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.GetTracesByDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTracesByDateRange`: TracesByDateRange
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.GetTracesByDateRange`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


## PingBlockService

> OperaVersion PingBlockService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API retrieves the Block service version



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PingBlockService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PingBlockService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingBlockService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PingBlockService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingBlockServiceRequest struct via the builder pattern


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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAlternateDates := *openapiclient.NewPutAlternateDatesRequest() // PutAlternateDatesRequest | Request object to create block alternate dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostAlternateDates`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAlternateDates** | [**PutAlternateDatesRequest**](PutAlternateDatesRequest.md) | Request object to create block alternate dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    block := *openapiclient.NewPostBlockRequest() // PostBlockRequest | Request object for creation of blocks. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlock(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Block(block).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **block** | [**PostBlockRequest**](PostBlockRequest.md) | Request object for creation of blocks. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockOwnersToAssign := *openapiclient.NewPostBlockOwnersRequest() // PostBlockOwnersRequest | Request object to assign block owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToAssign(blockOwnersToAssign).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlockOwners`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockOwnersToAssign** | [**PostBlockOwnersRequest**](PostBlockOwnersRequest.md) | Request object to assign block owners. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockPostingMaster := *openapiclient.NewPostBlockPostingMasterRequest() // PostBlockPostingMasterRequest | Request object for creating a new Posting Master Reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlockPostingMaster(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockPostingMaster(blockPostingMaster).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlockPostingMaster``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockPostingMaster`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlockPostingMaster`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockPostingMaster** | [**PostBlockPostingMasterRequest**](PostBlockPostingMasterRequest.md) | Request object for creating a new Posting Master Reservation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRestriction := *openapiclient.NewPostBlockRestrictionRequest() // PostBlockRestrictionRequest | Request for CreateBlockRestriction operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlockRestriction(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRestriction(blockRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlockRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlockRestriction`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRestriction** | [**PostBlockRestrictionRequest**](PostBlockRestrictionRequest.md) | Request for CreateBlockRestriction operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockValidate := *openapiclient.NewPostBlockValidateRequest() // PostBlockValidateRequest | Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlockValidate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockValidate(blockValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlockValidate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockValidate`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlockValidate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockValidateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockValidate** | [**PostBlockValidateRequest**](PostBlockValidateRequest.md) | Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockWashSchedulesInfo := *openapiclient.NewPutBlockWashSchedulesRequest() // PutBlockWashSchedulesRequest | Request object to create multiple new Block Wash Schedules under the selected block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostBlockWashSchedules`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockWashSchedulesInfo** | [**PutBlockWashSchedulesRequest**](PutBlockWashSchedulesRequest.md) | Request object to create multiple new Block Wash Schedules under the selected block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToCancel := *openapiclient.NewPostCancelBlockRequest() // PostCancelBlockRequest | Request object for block cancelation. This object contains unique identifiers (Block unique id, Block Code and Block Start Date ) to identify the block to be Canceled and the standard optional Opera Context element.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostCancelBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToCancel(blockToCancel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostCancelBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostCancelBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToCancel** | [**PostCancelBlockRequest**](PostCancelBlockRequest.md) | Request object for block cancelation. This object contains unique identifiers (Block unique id, Block Code and Block Start Date ) to identify the block to be Canceled and the standard optional Opera Context element. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCopy := *openapiclient.NewPostCopyBlockRequest() // PostCopyBlockRequest | Request for creating a copy of an existing block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostCopyBlock(context.Background(), sourceBlockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCopy(blockCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostCopyBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCopyBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostCopyBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCopy** | [**PostCopyBlockRequest**](PostCopyBlockRequest.md) | Request for creating a copy of an existing block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomingList := *openapiclient.NewPostRoomingListRequest() // PostRoomingListRequest | Request object for creating rooming list reservations. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostRoomingList(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomingList(roomingList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostRoomingList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomingList`: RoomingListDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostRoomingList`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomingList** | [**PostRoomingListRequest**](PostRoomingListRequest.md) | Request object for creating rooming list reservations. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subAllocation := *openapiclient.NewPostSubAllocationRequest() // PostSubAllocationRequest | Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostSubAllocation(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubAllocation(subAllocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostSubAllocation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubAllocation`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostSubAllocation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostSubAllocationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subAllocation** | [**PostSubAllocationRequest**](PostSubAllocationRequest.md) | Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subBlock := *openapiclient.NewPostSubBlockRequest() // PostSubBlockRequest | Request object to create new sub block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostSubBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostSubBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostSubBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subBlock** | [**PostSubBlockRequest**](PostSubBlockRequest.md) | Request object to create new sub block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subBlock := *openapiclient.NewPostSubBlockRequest() // PostSubBlockRequest | Request object to create new sub block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostSubBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubBlock(subBlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostSubBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSubBlockByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostSubBlockByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subBlock** | [**PostSubBlockRequest**](PostSubBlockRequest.md) | Request object to create new sub block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    tourSeries := *openapiclient.NewPostTourSeriesRequest() // PostTourSeriesRequest | Request for creating a tour series based on an existing block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PostTourSeries(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TourSeries(tourSeries).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PostTourSeries``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTourSeries`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PostTourSeries`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **tourSeries** | [**PostTourSeriesRequest**](PostTourSeriesRequest.md) | Request for creating a tour series based on an existing block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAlternateDates := *openapiclient.NewPutAlternateDatesRequest() // PutAlternateDatesRequest | Request object to change block alternate dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutAlternateDates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAlternateDates(blockAlternateDates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutAlternateDates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAlternateDates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutAlternateDates`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAlternateDates** | [**PutAlternateDatesRequest**](PutAlternateDatesRequest.md) | Request object to change block alternate dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToBeChanged := *openapiclient.NewPutBlockRequest() // PutBlockRequest | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlock`: BlockChanged
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlock`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToBeChanged** | [**PutBlockRequest**](PutBlockRequest.md) | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAccessExclusion := *openapiclient.NewPutBlockAccessExclusionRequest() // PutBlockAccessExclusionRequest | Request object for creating access exclusion permissions for a block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAccessExclusion(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAccessExclusion(blockAccessExclusion).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAccessExclusion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAccessExclusion`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAccessExclusion`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAccessExclusion** | [**PutBlockAccessExclusionRequest**](PutBlockAccessExclusionRequest.md) | Request object for creating access exclusion permissions for a block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocation := *openapiclient.NewPutBlockAllocationRequest() // PutBlockAllocationRequest | A Request message that sets the room allocations as a collection of room types and dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAllocation(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAllocation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocation`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAllocation`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocation** | [**PutBlockAllocationRequest**](PutBlockAllocationRequest.md) | A Request message that sets the room allocations as a collection of room types and dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allocation := *openapiclient.NewPutBlockAllocationRequest() // PutBlockAllocationRequest | A Request message that sets the room allocations as a collection of room types and dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAllocationByExtId(context.Background(), roomType, blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Allocation(allocation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAllocationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAllocationByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allocation** | [**PutBlockAllocationRequest**](PutBlockAllocationRequest.md) | A Request message that sets the room allocations as a collection of room types and dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationRange := *openapiclient.NewPutBlockAllocationRangeRequest() // PutBlockAllocationRangeRequest | Request for updating block allocation for a range of dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAllocationRange(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAllocationRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAllocationRange`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationRange** | [**PutBlockAllocationRangeRequest**](PutBlockAllocationRangeRequest.md) | Request for updating block allocation for a range of dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationRange := *openapiclient.NewPutBlockAllocationRangeRequest() // PutBlockAllocationRangeRequest | Request for updating block allocation for a range of dates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAllocationRangeByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationRange(blockAllocationRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAllocationRangeByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationRangeByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAllocationRangeByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationRange** | [**PutBlockAllocationRangeRequest**](PutBlockAllocationRangeRequest.md) | Request for updating block allocation for a range of dates. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockAllocationWash := *openapiclient.NewPutBlockAllocationWashRequest() // PutBlockAllocationWashRequest | Request object for block wash operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockAllocationWash(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockAllocationWash(blockAllocationWash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockAllocationWash``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockAllocationWash`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockAllocationWash`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockAllocationWashRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockAllocationWash** | [**PutBlockAllocationWashRequest**](PutBlockAllocationWashRequest.md) | Request object for block wash operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToBeChanged := *openapiclient.NewPutBlockRequest() // PutBlockRequest | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToBeChanged(blockToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockByExtId`: BlockChanged
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToBeChanged** | [**PutBlockRequest**](PutBlockRequest.md) | Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewPutBlockCutoffRequest() // PutBlockCutoffRequest | Request object for cutoffBlock operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockCutoff(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockCutoff``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockCutoff`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockCutoff`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**PutBlockCutoffRequest**](PutBlockCutoffRequest.md) | Request object for cutoffBlock operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockOwnersToChange := *openapiclient.NewPutBlockOwnersRequest() // PutBlockOwnersRequest | Request object to change block owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockOwners(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockOwnersToChange(blockOwnersToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockOwners`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockOwnersToChange** | [**PutBlockOwnersRequest**](PutBlockOwnersRequest.md) | Request object to change block owners. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewPutBlockCutoffRequest() // PutBlockCutoffRequest | Request object of refresh block rates operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockRates(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockRates`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**PutBlockCutoffRequest**](PutBlockCutoffRequest.md) | Request object of refresh block rates operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockReservationsToChange := *openapiclient.NewPutBlockReservationsRequest() // PutBlockReservationsRequest | The request object to implement batch changes to block reservations based upon changes made to a reference reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockReservations(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockReservationsToChange(blockReservationsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockReservations`: ChangedBlockReservations
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockReservations`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockReservationsToChange** | [**PutBlockReservationsRequest**](PutBlockReservationsRequest.md) | The request object to implement batch changes to block reservations based upon changes made to a reference reservation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockToShift := *openapiclient.NewPutBlockShiftRequest() // PutBlockShiftRequest | Request object to shift business block starting date.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockShift(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockToShift(blockToShift).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockShift``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockShift`: ShiftedBlock
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockShift`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockToShift** | [**PutBlockShiftRequest**](PutBlockShiftRequest.md) | Request object to shift business block starting date. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusToChange := *openapiclient.NewPutBlockStatusRequest() // PutBlockStatusRequest | Request object for changing the booking status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockStatus(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatus`: ChangedBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockStatus`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusToChange** | [**PutBlockStatusRequest**](PutBlockStatusRequest.md) | Request object for changing the booking status of the business block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusToChange := *openapiclient.NewPutBlockStatusRequest() // PutBlockStatusRequest | Request object for changing the booking status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockStatusByExtId(context.Background(), blockExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusToChange(blockStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockStatusByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusByExtId`: ChangedBlockStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockStatusByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusToChange** | [**PutBlockStatusRequest**](PutBlockStatusRequest.md) | Request object for changing the booking status of the business block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewPutBlockCutoffRequest() // PutBlockCutoffRequest | Request object to transition the block status to Open for Pickup. This object contains unique identifier ( Block unique id ) to identify the block to be transitioned and the standard optional Opera Context element.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockStatusToOpen(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockStatusToOpen``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockStatusToOpen`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockStatusToOpen`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**PutBlockCutoffRequest**](PutBlockCutoffRequest.md) | Request object to transition the block status to Open for Pickup. This object contains unique identifier ( Block unique id ) to identify the block to be transitioned and the standard optional Opera Context element. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockWashSchedulesInfo := *openapiclient.NewPutBlockWashSchedulesRequest() // PutBlockWashSchedulesRequest | Request object to change multiple Block Wash Schedules under the selected block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutBlockWashSchedules(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockWashSchedulesInfo(blockWashSchedulesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutBlockWashSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockWashSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutBlockWashSchedules`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockWashSchedulesInfo** | [**PutBlockWashSchedulesRequest**](PutBlockWashSchedulesRequest.md) | Request object to change multiple Block Wash Schedules under the selected block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringStatusToChange := *openapiclient.NewPutCateringStatusRequest() // PutCateringStatusRequest | Request object for changing the catering status of the business block.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutCateringStatus(context.Background(), eventId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringStatusToChange(cateringStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutCateringStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringStatus`: ChangedCateringStatus
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutCateringStatus`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringStatusToChange** | [**PutCateringStatusRequest**](PutCateringStatusRequest.md) | Request object for changing the catering status of the business block. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allRestrictions := *openapiclient.NewPutClearAllRestrictionsRequest() // PutClearAllRestrictionsRequest | Request object for clearing all restrictions based on date.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutClearAllRestrictions(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllRestrictions(allRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutClearAllRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutClearAllRestrictions`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutClearAllRestrictions`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allRestrictions** | [**PutClearAllRestrictionsRequest**](PutClearAllRestrictionsRequest.md) | Request object for clearing all restrictions based on date. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatus := *openapiclient.NewPutBlockCutoffRequest() // PutBlockCutoffRequest | Request object for copying from Original or Current Grid to Contract Grid.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutContractDefaults(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatus(blockStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutContractDefaults``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutContractDefaults`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutContractDefaults`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutContractDefaultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatus** | [**PutBlockCutoffRequest**](PutBlockCutoffRequest.md) | Request object for copying from Original or Current Grid to Contract Grid. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryToBorrow := *openapiclient.NewPutInventoryRequest() // PutInventoryRequest | The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutInventory(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryToBorrow(inventoryToBorrow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventory`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryToBorrow** | [**PutInventoryRequest**](PutInventoryRequest.md) | The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    borrowedInventoryToReturn := *openapiclient.NewPutReleasedInventoryRequest() // PutReleasedInventoryRequest | The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutReleasedInventory(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BorrowedInventoryToReturn(borrowedInventoryToReturn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutReleasedInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReleasedInventory`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutReleasedInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutReleasedInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **borrowedInventoryToReturn** | [**PutReleasedInventoryRequest**](PutReleasedInventoryRequest.md) | The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypeOrder := *openapiclient.NewPutRoomTypeOrderRequest() // PutRoomTypeOrderRequest | Request object for SetRoomTypeOrder operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutRoomTypeOrder(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeOrder(roomTypeOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutRoomTypeOrder``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomTypeOrder`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutRoomTypeOrder`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypeOrder** | [**PutRoomTypeOrderRequest**](PutRoomTypeOrderRequest.md) | Request object for SetRoomTypeOrder operation. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCodeToValidate := *openapiclient.NewPutValidateBlockCodeRequest() // PutValidateBlockCodeRequest | Request object for validating blocks in a train. Block is not created. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockApi.PutValidateBlockCode(context.Background(), blockCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCodeToValidate(blockCodeToValidate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockApi.PutValidateBlockCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateBlockCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockApi.PutValidateBlockCode`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCodeToValidate** | [**PutValidateBlockCodeRequest**](PutValidateBlockCodeRequest.md) | Request object for validating blocks in a train. Block is not created. The standard optional Opera Context element is also included. | 
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

