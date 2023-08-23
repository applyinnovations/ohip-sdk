# \HousekeepingApi

All URIs are relative to */hsk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CompleteOutOfOrderRooms**](HousekeepingApi.md#CompleteOutOfOrderRooms) | **Put** /hotels/{hotelId}/rooms/outOfOrderRooms | Complete rooms Out Of Order
[**CompleteOutOfServiceRooms**](HousekeepingApi.md#CompleteOutOfServiceRooms) | **Put** /hotels/{hotelId}/rooms/outOfServiceRooms | Complete Rooms Out of Service
[**GetHousekeepingDiscrepancies**](HousekeepingApi.md#GetHousekeepingDiscrepancies) | **Get** /hotels/{hotelId}/housekeepingDiscrepancies | Get hotel housekeeping discrepant rooms
[**GetHousekeepingOverview**](HousekeepingApi.md#GetHousekeepingOverview) | **Get** /hotels/{hotelId}/housekeepingOverview | Get housekeeping rooms overview
[**GetOutOfOrderRooms**](HousekeepingApi.md#GetOutOfOrderRooms) | **Get** /hotels/{hotelId}/rooms/outOfOrderRooms | Get Out of Order Rooms
[**GetOutOfServiceRooms**](HousekeepingApi.md#GetOutOfServiceRooms) | **Get** /hotels/{hotelId}/rooms/outOfServiceRooms | Get Out of Service Rooms
[**PostOutOfOrderRooms**](HousekeepingApi.md#PostOutOfOrderRooms) | **Post** /hotels/{hotelId}/rooms/outOfOrderRooms | Set multiple rooms to Out Of Order
[**PostOutOfServiceRooms**](HousekeepingApi.md#PostOutOfServiceRooms) | **Post** /hotels/{hotelId}/rooms/outOfServiceRooms | Set multiple rooms to Out Of Service
[**PutRoomRelatedStatus**](HousekeepingApi.md#PutRoomRelatedStatus) | **Put** /hotels/{hotelId}/rooms/status | Update Housekeeping Room Status



## CompleteOutOfOrderRooms

> CompleteRoomRepairStatus CompleteOutOfOrderRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete rooms Out Of Order



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
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Order rooms needs to be returned to Clean, Inspected, Dirty or Pickup status.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completeRoomRepair := *openapiclient.NewCompleteOutOfOrderRoomsRequest() // CompleteOutOfOrderRoomsRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CompleteOutOfOrderRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CompleteOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteOutOfOrderRooms`: CompleteRoomRepairStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CompleteOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Order rooms needs to be returned to Clean, Inspected, Dirty or Pickup status. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completeRoomRepair** | [**CompleteOutOfOrderRoomsRequest**](CompleteOutOfOrderRoomsRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompleteRoomRepairStatus**](CompleteRoomRepairStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteOutOfServiceRooms

> CompleteRoomRepairStatus CompleteOutOfServiceRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete Rooms Out of Service



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
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Service rooms needs to be returned to Clean, Inspected, Dirty or Pickup status.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completeRoomRepair := *openapiclient.NewCompleteOutOfServiceRoomsRequest() // CompleteOutOfServiceRoomsRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CompleteOutOfServiceRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CompleteOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteOutOfServiceRooms`: CompleteRoomRepairStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CompleteOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Service rooms needs to be returned to Clean, Inspected, Dirty or Pickup status. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completeRoomRepair** | [**CompleteOutOfServiceRoomsRequest**](CompleteOutOfServiceRoomsRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompleteRoomRepairStatus**](CompleteRoomRepairStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingDiscrepancies

> Rooms GetHousekeepingDiscrepancies(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomDiscrepancyStatus(roomDiscrepancyStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomClass(roomClass).HousekeepingEndDate(housekeepingEndDate).HousekeepingStartDate(housekeepingStartDate).Floor(floor).DueOut(dueOut).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel housekeeping discrepant rooms



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomDiscrepancyStatus := []string{"RoomDiscrepancyStatus_example"} // []string | Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    housekeepingEndDate := time.Now() // string | The ending value of the date range. (optional)
    housekeepingStartDate := time.Now() // string | The starting value of the date range. (optional)
    floor := []string{"Inner_example"} // []string | The floor of room to be fetched. (optional)
    dueOut := true // bool | List the rooms based on the flag DUE OUT for departure only. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHousekeepingDiscrepancies(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomDiscrepancyStatus(roomDiscrepancyStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomClass(roomClass).HousekeepingEndDate(housekeepingEndDate).HousekeepingStartDate(housekeepingStartDate).Floor(floor).DueOut(dueOut).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHousekeepingDiscrepancies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingDiscrepancies`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHousekeepingDiscrepancies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingDiscrepanciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomDiscrepancyStatus** | **[]string** | Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **roomClass** | **[]string** | Room Class of the Room. | 
 **housekeepingEndDate** | **string** | The ending value of the date range. | 
 **housekeepingStartDate** | **string** | The starting value of the date range. | 
 **floor** | **[]string** | The floor of room to be fetched. | 
 **dueOut** | **bool** | List the rooms based on the flag DUE OUT for departure only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingOverview

> HousekeepingBoard GetHousekeepingOverview(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HousekeepingRoomStatus(housekeepingRoomStatus).FrontOfficeRoomStatus(frontOfficeRoomStatus).TurndownStatus(turndownStatus).RoomParityStatus(roomParityStatus).ServiceRequestStatus(serviceRequestStatus).RoomAssignmentStatus(roomAssignmentStatus).FetchInstructions(fetchInstructions).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).Floor(floor).RoomType(roomType).RoomClass(roomClass).Building(building).RoomFeatures(roomFeatures).DaySection(daySection).EveningSection(eveningSection).ReservationStatus(reservationStatus).GuestServiceRequest(guestServiceRequest).RoomIdText(roomIdText).ExcludeCombo(excludeCombo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get housekeeping rooms overview



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
    hotelId := "hotelId_example" // string | Hotel Code for which Housekeeping overview needs to be fetched
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    housekeepingRoomStatus := []string{"HousekeepingRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    frontOfficeRoomStatus := []string{"FrontOfficeRoomStatus_example"} // []string | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. (optional)
    turndownStatus := []string{"TurndownStatus_example"} // []string | Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. (optional)
    roomParityStatus := []string{"RoomParityStatus_example"} // []string | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. (optional)
    serviceRequestStatus := []string{"ServiceRequestStatus_example"} // []string |  (optional)
    roomAssignmentStatus := []string{"RoomAssignmentStatus_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for housekeeping instructions that can be used in requests for partial operations. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    floor := []string{"Inner_example"} // []string | The floor of room to be fetched. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type of the Room. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    building := []string{"Inner_example"} // []string | Building of the Room. (optional)
    roomFeatures := []string{"Inner_example"} // []string | Features of the Room. (optional)
    daySection := []string{"Inner_example"} // []string | AM Sections of the Room. (optional)
    eveningSection := []string{"Inner_example"} // []string | PM Sections of the Room. (optional)
    reservationStatus := []string{"Inner_example"} // []string | The status of the reservation to which this Room is assigned. (optional)
    guestServiceRequest := "guestServiceRequest_example" // string | Possible values for the Guest Service Status. (optional)
    roomIdText := "roomIdText_example" // string | Wild Card entry for Room numbers to be Fetched. (optional)
    excludeCombo := true // bool | Indicates we need to exclude the combo rooms while fetching the housekeeping details. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHousekeepingOverview(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HousekeepingRoomStatus(housekeepingRoomStatus).FrontOfficeRoomStatus(frontOfficeRoomStatus).TurndownStatus(turndownStatus).RoomParityStatus(roomParityStatus).ServiceRequestStatus(serviceRequestStatus).RoomAssignmentStatus(roomAssignmentStatus).FetchInstructions(fetchInstructions).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).Floor(floor).RoomType(roomType).RoomClass(roomClass).Building(building).RoomFeatures(roomFeatures).DaySection(daySection).EveningSection(eveningSection).ReservationStatus(reservationStatus).GuestServiceRequest(guestServiceRequest).RoomIdText(roomIdText).ExcludeCombo(excludeCombo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHousekeepingOverview``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingOverview`: HousekeepingBoard
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHousekeepingOverview`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Housekeeping overview needs to be fetched | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingOverviewRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **housekeepingRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **frontOfficeRoomStatus** | **[]string** | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. | 
 **turndownStatus** | **[]string** | Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. | 
 **roomParityStatus** | **[]string** | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. | 
 **serviceRequestStatus** | **[]string** |  | 
 **roomAssignmentStatus** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Simple type for housekeeping instructions that can be used in requests for partial operations. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **floor** | **[]string** | The floor of room to be fetched. | 
 **roomType** | **[]string** | Room Type of the Room. | 
 **roomClass** | **[]string** | Room Class of the Room. | 
 **building** | **[]string** | Building of the Room. | 
 **roomFeatures** | **[]string** | Features of the Room. | 
 **daySection** | **[]string** | AM Sections of the Room. | 
 **eveningSection** | **[]string** | PM Sections of the Room. | 
 **reservationStatus** | **[]string** | The status of the reservation to which this Room is assigned. | 
 **guestServiceRequest** | **string** | Possible values for the Guest Service Status. | 
 **roomIdText** | **string** | Wild Card entry for Room numbers to be Fetched. | 
 **excludeCombo** | **bool** | Indicates we need to exclude the combo rooms while fetching the housekeeping details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingBoard**](HousekeepingBoard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOutOfOrderRooms

> Rooms GetOutOfOrderRooms(ctx, hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Out of Order Rooms



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
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Order rooms needs to be fetched.
    startDate := time.Now() // string | The start date for which the out of order / out of service rooms are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomId := "roomId_example" // string | Room number to be Fetched. (optional)
    endDate := time.Now() // string | The end date for which the out of order / out of service rooms are to be fetched. (optional)
    roomTypes := []string{"Inner_example"} // []string | The room type of out of order / out of service rooms to be fetched. (optional)
    roomClasses := []string{"Inner_example"} // []string | The room class of out of order / out of service rooms to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetOutOfOrderRooms(context.Background(), hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOutOfOrderRooms`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Order rooms needs to be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | The start date for which the out of order / out of service rooms are to be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomId** | **string** | Room number to be Fetched. | 
 **endDate** | **string** | The end date for which the out of order / out of service rooms are to be fetched. | 
 **roomTypes** | **[]string** | The room type of out of order / out of service rooms to be fetched. | 
 **roomClasses** | **[]string** | The room class of out of order / out of service rooms to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOutOfServiceRooms

> Rooms GetOutOfServiceRooms(ctx, hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Out of Service Rooms



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
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Service rooms needs to be fetched.
    startDate := time.Now() // string | The start date for which the out of order / out of service rooms are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomId := "roomId_example" // string | Room number to be Fetched. (optional)
    endDate := time.Now() // string | The end date for which the out of order / out of service rooms are to be fetched. (optional)
    roomTypes := []string{"Inner_example"} // []string | The room type of out of order / out of service rooms to be fetched. (optional)
    roomClasses := []string{"Inner_example"} // []string | The room class of out of order / out of service rooms to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetOutOfServiceRooms(context.Background(), hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOutOfServiceRooms`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Service rooms needs to be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | The start date for which the out of order / out of service rooms are to be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomId** | **string** | Room number to be Fetched. | 
 **endDate** | **string** | The end date for which the out of order / out of service rooms are to be fetched. | 
 **roomTypes** | **[]string** | The room type of out of order / out of service rooms to be fetched. | 
 **roomClasses** | **[]string** | The room class of out of order / out of service rooms to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostOutOfOrderRooms

> Status PostOutOfOrderRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfOrder(roomRepairOutOfOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set multiple rooms to Out Of Order



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
    hotelId := "hotelId_example" // string | Hotel Code of Room(s) which is to be set as Out Of Order.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRepairOutOfOrder := *openapiclient.NewPostOutOfOrderRoomsRequest() // PostOutOfOrderRoomsRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostOutOfOrderRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfOrder(roomRepairOutOfOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOutOfOrderRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code of Room(s) which is to be set as Out Of Order. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRepairOutOfOrder** | [**PostOutOfOrderRoomsRequest**](PostOutOfOrderRoomsRequest.md) |  | 
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


## PostOutOfServiceRooms

> Status PostOutOfServiceRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfService(roomRepairOutOfService).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set multiple rooms to Out Of Service



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
    hotelId := "hotelId_example" // string | Hotel Code of Room(s) which is to be set as Out Of Service.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRepairOutOfService := *openapiclient.NewPostOutOfServiceRoomsRequest() // PostOutOfServiceRoomsRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostOutOfServiceRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfService(roomRepairOutOfService).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOutOfServiceRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code of Room(s) which is to be set as Out Of Service. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRepairOutOfService** | [**PostOutOfServiceRoomsRequest**](PostOutOfServiceRoomsRequest.md) |  | 
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


## PutRoomRelatedStatus

> HousekeepingRoomStatus PutRoomRelatedStatus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomStatusCriteria(housekeepingRoomStatusCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Housekeeping Room Status



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
    hotelId := "hotelId_example" // string | Hotel Code for which housekeeping room status, housekeeping status or turndown status have to be modified
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingRoomStatusCriteria := *openapiclient.NewPutRoomRelatedStatusRequest() // PutRoomRelatedStatusRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutRoomRelatedStatus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomStatusCriteria(housekeepingRoomStatusCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutRoomRelatedStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomRelatedStatus`: HousekeepingRoomStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutRoomRelatedStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which housekeeping room status, housekeeping status or turndown status have to be modified | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomRelatedStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingRoomStatusCriteria** | [**PutRoomRelatedStatusRequest**](PutRoomRelatedStatusRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingRoomStatus**](HousekeepingRoomStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

