# \BlockApi

All URIs are relative to */blk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlock**](BlockApi.md#GetBlock) | **Get** /hotels/{hotelId}/blocks/{blockId} | Get a Block By ID
[**GetBlockAvailability**](BlockApi.md#GetBlockAvailability) | **Get** /hotels/{hotelId}/blocks/{blockId}/availability | Get Block AvailaBility
[**GetBlockDailyStatistics**](BlockApi.md#GetBlockDailyStatistics) | **Get** /blocks/dailyStatistics | Get Block Daily Statistics
[**GetBlockPMReservations**](BlockApi.md#GetBlockPMReservations) | **Get** /hotels/{hotelId}/blocks/{blockId}/postingMaster/reservations | Get Posting Master Reservations for a Block
[**GetBlockRevenueChanges**](BlockApi.md#GetBlockRevenueChanges) | **Get** /blocks/{blockId}/revenueActivityLog | Fetch Block Revenue Changes
[**GetBlockStatistics**](BlockApi.md#GetBlockStatistics) | **Get** /blocks/{blockId}/statistics | Get Block Statistics
[**GetBlocks**](BlockApi.md#GetBlocks) | **Get** /blocks | Get Blocks
[**PostBlock**](BlockApi.md#PostBlock) | **Post** /hotels/{hotelId}/block | Create a Block
[**PutBlock**](BlockApi.md#PutBlock) | **Put** /hotels/{hotelId}/blocks/{blockId} | Change a Block
[**PutBlockAllocation**](BlockApi.md#PutBlockAllocation) | **Put** /hotels/{hotelId}/blocks/{blockId}/allocation | Set Block Allocation  



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

