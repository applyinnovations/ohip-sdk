# \InventoryApi

All URIs are relative to */inv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetHotelInventory**](InventoryApi.md#GetHotelInventory) | **Get** /hotels/{hotelId}/hotelInventory | Get hotel inventory
[**GetItemInventory**](InventoryApi.md#GetItemInventory) | **Get** /hotels/{hotelId}/itemInventory | Get item inventory
[**PostHoldItemInventory**](InventoryApi.md#PostHoldItemInventory) | **Post** /hotels/{hotelId}/itemInventoryHold | Hold item inventory



## GetHotelInventory

> HotelInventory GetHotelInventory(ctx, hotelId).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).RoomCountRequested(roomCountRequested).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTentativeInventory(includeTentativeInventory).DailyInventory(dailyInventory).HouseLevel(houseLevel).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    hotelId := "hotelId_example" // string | Unique ID of the hotel where hotel inventory is searched.
    dateRangeStart := time.Now() // string | 
    dateRangeEnd := time.Now() // string | 
    roomCountRequested := int32(56) // int32 | Number of rooms requested.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    includeTentativeInventory := true // bool | If set to true, includes non-deduct/Tentative rooms for a date range. (optional)
    dailyInventory := true // bool | If false minimum inventory for the date range is requested, otherwise inventory is requested for every day. (optional)
    houseLevel := true // bool | Indicates that House level inventory is requested. (optional)
    roomTypes := []string{"Inner_example"} // []string | Room Type Code. (optional)
    roomClasses := []string{"Inner_example"} // []string | Room Class Code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.GetHotelInventory(context.Background(), hotelId).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).RoomCountRequested(roomCountRequested).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTentativeInventory(includeTentativeInventory).DailyInventory(dailyInventory).HouseLevel(houseLevel).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.GetHotelInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInventory`: HotelInventory
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.GetHotelInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where hotel inventory is searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateRangeStart** | **string** |  | 
 **dateRangeEnd** | **string** |  | 
 **roomCountRequested** | **int32** | Number of rooms requested. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **includeTentativeInventory** | **bool** | If set to true, includes non-deduct/Tentative rooms for a date range. | 
 **dailyInventory** | **bool** | If false minimum inventory for the date range is requested, otherwise inventory is requested for every day. | 
 **houseLevel** | **bool** | Indicates that House level inventory is requested. | 
 **roomTypes** | **[]string** | Room Type Code. | 
 **roomClasses** | **[]string** | Room Class Code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelInventory**](HotelInventory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetItemInventory

> ItemInventory GetItemInventory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).EndTime(endTime).StartTime(startTime).ItemClass(itemClass).ItemPool(itemPool).ItemCode(itemCode).DefaultDuration(defaultDuration).FixedCharge(fixedCharge).OutsideStay(outsideStay).RequiredForBooking(requiredForBooking).SellInEvent(sellInEvent).SellInReservation(sellInReservation).SellSeparate(sellSeparate).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get item inventory



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
    hotelId := "hotelId_example" // string | Unique ID of the hotel where item inventory is searched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    endTime := "endTime_example" // string | End Time of the Time window. (optional)
    startTime := "startTime_example" // string | Start Time of the Time window. (optional)
    itemClass := "itemClass_example" // string | Item Class to filter the Items/Item Pools in the response. (optional)
    itemPool := []string{"Inner_example"} // []string |  (optional)
    itemCode := []string{"Inner_example"} // []string |  (optional)
    defaultDuration := int32(56) // int32 | Define the default duration in days when booking the item. (optional)
    fixedCharge := true // bool | If true indicates that item has fixed charge when it is attached to a reservation. (optional)
    outsideStay := true // bool | If true indicates that item could be held outside of the reservation stay days. (optional)
    requiredForBooking := true // bool | If true indicates that item is required for the reservation. (optional)
    sellInEvent := true // bool | If true indicates that item can be sold in event. (optional)
    sellInReservation := true // bool | If true indicates that item can be sold in reservation. (optional)
    sellSeparate := true // bool | If true indicates that item is allowed to sell separately. (optional)
    welcomeOffer := true // bool | When set to true will only return items that are Welcome Offer Eligible. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.GetItemInventory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).EndTime(endTime).StartTime(startTime).ItemClass(itemClass).ItemPool(itemPool).ItemCode(itemCode).DefaultDuration(defaultDuration).FixedCharge(fixedCharge).OutsideStay(outsideStay).RequiredForBooking(requiredForBooking).SellInEvent(sellInEvent).SellInReservation(sellInReservation).SellSeparate(sellSeparate).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.GetItemInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetItemInventory`: ItemInventory
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.GetItemInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where item inventory is searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetItemInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **endTime** | **string** | End Time of the Time window. | 
 **startTime** | **string** | Start Time of the Time window. | 
 **itemClass** | **string** | Item Class to filter the Items/Item Pools in the response. | 
 **itemPool** | **[]string** |  | 
 **itemCode** | **[]string** |  | 
 **defaultDuration** | **int32** | Define the default duration in days when booking the item. | 
 **fixedCharge** | **bool** | If true indicates that item has fixed charge when it is attached to a reservation. | 
 **outsideStay** | **bool** | If true indicates that item could be held outside of the reservation stay days. | 
 **requiredForBooking** | **bool** | If true indicates that item is required for the reservation. | 
 **sellInEvent** | **bool** | If true indicates that item can be sold in event. | 
 **sellInReservation** | **bool** | If true indicates that item can be sold in reservation. | 
 **sellSeparate** | **bool** | If true indicates that item is allowed to sell separately. | 
 **welcomeOffer** | **bool** | When set to true will only return items that are Welcome Offer Eligible. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ItemInventory**](ItemInventory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostHoldItemInventory

> Status PostHoldItemInventory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldItemInventory(holdItemInventory).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Hold item inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/inv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where item inventory is held.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the endDate user is logged in
    holdItemInventory := *openapiclient.NewPostHoldItemInventoryRequest() // PostHoldItemInventoryRequest | Request object for holding an items inventory/availability.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.PostHoldItemInventory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldItemInventory(holdItemInventory).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.PostHoldItemInventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHoldItemInventory`: Status
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.PostHoldItemInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where item inventory is held. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHoldItemInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the endDate user is logged in | 
 **holdItemInventory** | [**PostHoldItemInventoryRequest**](PostHoldItemInventoryRequest.md) | Request object for holding an items inventory/availability. | 
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

