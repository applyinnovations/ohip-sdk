# \FrontDeskOperationsAPI

All URIs are relative to */fof/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddReservationToQueue**](FrontDeskOperationsAPI.md#AddReservationToQueue) | **Put** /hotels/{hotelId}/queuedReservations/{reservationId} | Add reservation to queue
[**AssignRoomsAI**](FrontDeskOperationsAPI.md#AssignRoomsAI) | **Post** /hotels/{hotelId}/reservations/ai/rooms | AI Assign Rooms
[**AutoAssignRoom**](FrontDeskOperationsAPI.md#AutoAssignRoom) | **Post** /hotels/{hotelId}/reservations/autoRoomAssignments | Assign the room automatically
[**AutoUnAssignRoom**](FrontDeskOperationsAPI.md#AutoUnAssignRoom) | **Delete** /hotels/{hotelId}/reservations/autoRoomAssignments | Auto unassign room
[**DeleteAdvanceCheckIn**](FrontDeskOperationsAPI.md#DeleteAdvanceCheckIn) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/advanceCheckIns | Reverse Advance Checkin 
[**DeleteAssignRoom**](FrontDeskOperationsAPI.md#DeleteAssignRoom) | **Put** /hotels/{hotelId}/reservations/{reservationId}/rooms | Remove an assigned room
[**DeleteCheckin**](FrontDeskOperationsAPI.md#DeleteCheckin) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/checkIns | Revert a checked-in Reservation
[**DeleteDailyDocket**](FrontDeskOperationsAPI.md#DeleteDailyDocket) | **Delete** /hotels/{hotelId}/dailyDocket/{docketId} | Delete Daily Docket 
[**DeleteReservationFromQueue**](FrontDeskOperationsAPI.md#DeleteReservationFromQueue) | **Delete** /hotels/{hotelId}/queuedReservations/{reservationId} | Delete reservation from queue
[**DeleteRoomKey**](FrontDeskOperationsAPI.md#DeleteRoomKey) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Delete room key
[**DeleteServiceRequests**](FrontDeskOperationsAPI.md#DeleteServiceRequests) | **Delete** /hotels/{hotelId}/serviceRequests/{serviceRequestId} | Delete Service Requests
[**DeleteWakeUpCall**](FrontDeskOperationsAPI.md#DeleteWakeUpCall) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/wakeUpCalls | Delete Wake Up Call
[**DeliverQueueRoomsTextMessage**](FrontDeskOperationsAPI.md#DeliverQueueRoomsTextMessage) | **Put** /hotels/{hotelId}/reservations/{reservationId}/textMessages/{messageType} | Deliver Queue rooms text message
[**FetchAiraLastRunStatus**](FrontDeskOperationsAPI.md#FetchAiraLastRunStatus) | **Get** /hotels/{hotelId}/reservations/ai/rooms | Automated Intelligence Room Assignment last run status
[**GetDailyDocket**](FrontDeskOperationsAPI.md#GetDailyDocket) | **Get** /hotels/{hotelId}/dailyDocket | Get Daily Docket
[**GetFloorPlans**](FrontDeskOperationsAPI.md#GetFloorPlans) | **Get** /hotels/{hotelId}/floorPlans | Get floor plans
[**GetFulfillmentActivityLog**](FrontDeskOperationsAPI.md#GetFulfillmentActivityLog) | **Get** /hotels/{hotelId}/fulfillmentActivityLogs | Get the fullfillment activity log
[**GetHotelRooms**](FrontDeskOperationsAPI.md#GetHotelRooms) | **Get** /hotels/{hotelId}/rooms | Get hotel available rooms
[**GetLinkedReservations**](FrontDeskOperationsAPI.md#GetLinkedReservations) | **Get** /hotels/{hotelId}/reservations/{reservationId}/linked | Get linked reservations
[**GetQueueRoomsTextMessage**](FrontDeskOperationsAPI.md#GetQueueRoomsTextMessage) | **Get** /hotels/{hotelId}/textMessages/{messageType} | Get Queue room text message
[**GetReservationSummaries**](FrontDeskOperationsAPI.md#GetReservationSummaries) | **Get** /hotels/{hotelId}/reservationSummaries | Get hotel reservation summaries
[**GetReservationsForBilling**](FrontDeskOperationsAPI.md#GetReservationsForBilling) | **Get** /hotels/{hotelId}/billingReservations | Get Reservations for billing
[**GetReservationsInQueue**](FrontDeskOperationsAPI.md#GetReservationsInQueue) | **Get** /hotels/{hotelId}/queuedReservations | Get the reservation in queue
[**GetResvForBatchCCAuth**](FrontDeskOperationsAPI.md#GetResvForBatchCCAuth) | **Get** /hotels/{hotelId}/authorizationReservations | Get resrvation for batch CCAuth
[**GetRoomInterfaceStatus**](FrontDeskOperationsAPI.md#GetRoomInterfaceStatus) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/roomStatuses | Get room interface status
[**GetRoomKeyInterfaceDetails**](FrontDeskOperationsAPI.md#GetRoomKeyInterfaceDetails) | **Get** /hotels/{hotelId}/keyInterfaces | Get key encoder interface configuration details
[**GetRoomKeys**](FrontDeskOperationsAPI.md#GetRoomKeys) | **Get** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Fetch the room keys
[**GetRoomMoveHistory**](FrontDeskOperationsAPI.md#GetRoomMoveHistory) | **Get** /hotels/{hotelId}/reservations/{reservationId}/roomMoveHistory | Get room move history of a reservation
[**GetServiceRequests**](FrontDeskOperationsAPI.md#GetServiceRequests) | **Get** /hotels/{hotelId}/serviceRequests | Get Service Requests
[**GetSuggestedRooms**](FrontDeskOperationsAPI.md#GetSuggestedRooms) | **Get** /hotels/{hotelId}/reservations/{reservationId}/suggestedRooms | Get Suggested Rooms
[**GetWakeUpCall**](FrontDeskOperationsAPI.md#GetWakeUpCall) | **Get** /hotels/{hotelId}/reservations/{reservationId}/wakeUpCalls | Get Wake Up Call
[**MoveInHouseGuest**](FrontDeskOperationsAPI.md#MoveInHouseGuest) | **Put** /hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/roomMoves | Move in-house guest
[**PlaceRoomsOnHold**](FrontDeskOperationsAPI.md#PlaceRoomsOnHold) | **Post** /hotels/{hotelId}/rooms/onHold | Place Rooms On Hold
[**PostAdvanceCheckIn**](FrontDeskOperationsAPI.md#PostAdvanceCheckIn) | **Post** /hotels/{hotelId}/reservations/{reservationId}/advanceCheckIns | Advance checkin a reservation
[**PostCheckIn**](FrontDeskOperationsAPI.md#PostCheckIn) | **Post** /hotels/{hotelId}/reservations/{reservationId}/checkIns | Checks in a guest
[**PostDailyDocket**](FrontDeskOperationsAPI.md#PostDailyDocket) | **Post** /hotels/{hotelId}/dailyDocket | Create Daily Docket 
[**PostMassAdvanceCheckIn**](FrontDeskOperationsAPI.md#PostMassAdvanceCheckIn) | **Post** /hotels/{hotelId}/reservations/massAdvanceCheckIns | Mass Advance Check in Reservations
[**PostMassCheckIn**](FrontDeskOperationsAPI.md#PostMassCheckIn) | **Post** /hotels/{hotelId}/reservations/massCheckIns | Mass checkin reservations
[**PostRoomAssignment**](FrontDeskOperationsAPI.md#PostRoomAssignment) | **Post** /hotels/{hotelId}/reservations/{reservationId}/roomAssignments | Assign a Room to a Reservation
[**PostRoomKey**](FrontDeskOperationsAPI.md#PostRoomKey) | **Post** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Requests room key(s)
[**PostServiceRequests**](FrontDeskOperationsAPI.md#PostServiceRequests) | **Post** /hotels/{hotelId}/serviceRequests | Create Service Requests
[**PostWakeUpCall**](FrontDeskOperationsAPI.md#PostWakeUpCall) | **Post** /hotels/{hotelId}/reservations/{reservationId}/wakeUpCalls | Create Wake Up Call
[**ProcessBatchCCAuth**](FrontDeskOperationsAPI.md#ProcessBatchCCAuth) | **Put** /hotels/{hotelId}/batchReservationAuthorizations | Process batch CC Auth
[**PutDailyDocket**](FrontDeskOperationsAPI.md#PutDailyDocket) | **Put** /hotels/{hotelId}/dailyDocket | Change Daily Docket 
[**PutReservationQueuePriority**](FrontDeskOperationsAPI.md#PutReservationQueuePriority) | **Put** /hotels/{hotelId}/reservations/{reservationId}/priority | Change the reservation queue priority
[**PutRoomInterfaceStatus**](FrontDeskOperationsAPI.md#PutRoomInterfaceStatus) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/roomStatuses | Change room interface status
[**PutRoomKeys**](FrontDeskOperationsAPI.md#PutRoomKeys) | **Put** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Update room keys.
[**PutServiceRequests**](FrontDeskOperationsAPI.md#PutServiceRequests) | **Put** /hotels/{hotelId}/serviceRequests | Change Service Requests
[**PutWakeUpCall**](FrontDeskOperationsAPI.md#PutWakeUpCall) | **Put** /hotels/{hotelId}/reservations/{reservationId}/wakeUpCalls | Change Wake Up Call
[**ReadRoomKey**](FrontDeskOperationsAPI.md#ReadRoomKey) | **Get** /hotels/{hotelId}/roomKeysDetails | Read room key
[**ReleaseRoomsOnHold**](FrontDeskOperationsAPI.md#ReleaseRoomsOnHold) | **Post** /hotels/{hotelId}/rooms/onHold/release | Release Rooms On Hold
[**ShiftRooms**](FrontDeskOperationsAPI.md#ShiftRooms) | **Put** /hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/shiftRooms | Operation for Shift Rooms between two reservations
[**SwapRooms**](FrontDeskOperationsAPI.md#SwapRooms) | **Put** /hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/swapRooms | Operation for Swap/Shift Rooms between two reservations
[**VerifyCheckinReservation**](FrontDeskOperationsAPI.md#VerifyCheckinReservation) | **Get** /hotels/{hotelId}/reservations/{reservationId}/verifyCheckIns | Verify checkin reservation



## AddReservationToQueue

> ReservationQueuePriority AddReservationToQueue(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QueueReservation(queueReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add reservation to queue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    queueReservation := *openapiclient.NewQueueReservation() // QueueReservation | Request to add a reservation to the Queue for Check-In. A reservation can be added to the queue prior to Check-In on the day of arrival.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.AddReservationToQueue(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QueueReservation(queueReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.AddReservationToQueue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddReservationToQueue`: ReservationQueuePriority
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.AddReservationToQueue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddReservationToQueueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **queueReservation** | [**QueueReservation**](QueueReservation.md) | Request to add a reservation to the Queue for Check-In. A reservation can be added to the queue prior to Check-In on the day of arrival. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationQueuePriority**](ReservationQueuePriority.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssignRoomsAI

> Status AssignRoomsAI(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomsAI(roomsAI).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

AI Assign Rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomsAI := *openapiclient.NewRoomsAI() // RoomsAI | Request to run AI Room Assignment and allocate rooms to incoming reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.AssignRoomsAI(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomsAI(roomsAI).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.AssignRoomsAI``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AssignRoomsAI`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.AssignRoomsAI`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAssignRoomsAIRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomsAI** | [**RoomsAI**](RoomsAI.md) | Request to run AI Room Assignment and allocate rooms to incoming reservations. | 
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


## AutoAssignRoom

> []AutoRoomAssignType AutoAssignRoom(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAssignRoom(autoAssignRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Assign the room automatically



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoAssignRoom := *openapiclient.NewAutoAssignRoom() // AutoAssignRoom | Request for auto assignment of rooms to reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.AutoAssignRoom(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAssignRoom(autoAssignRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.AutoAssignRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AutoAssignRoom`: []AutoRoomAssignType
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.AutoAssignRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAutoAssignRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoAssignRoom** | [**AutoAssignRoom**](AutoAssignRoom.md) | Request for auto assignment of rooms to reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]AutoRoomAssignType**](AutoRoomAssignType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AutoUnAssignRoom

> Status AutoUnAssignRoom(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).Type_(type_).IncludeDepartureRooms(includeDepartureRooms).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).UseAIRoomAssignment(useAIRoomAssignment).UseAssociatedProfilePreferences(useAssociatedProfilePreferences).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).Code(code).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationIdId(reservationIdId).ReservationIdIdExtension(reservationIdIdExtension).IdContext(idContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Auto unassign room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    includeDepartureRooms := true // bool | Indicates if departure rooms are to be included in the auto unassignment. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    roomNumberWildcard := "roomNumberWildcard_example" // string |  (optional)
    useAIRoomAssignment := true // bool | If the AI ROOM ASSIGNMENT application parameter is set to Y, this flag when set to true will use the AI Room Assignment algorithm to fetch the results in order of suitability. (optional)
    useAssociatedProfilePreferences := true // bool | Indicates if preferences on the profile associated to the reservation should be used to determine the room type. The preferences for FLOOR, SMOKING and ROOM FEATURES will be used. (optional)
    hotelRoomStatus := []string{"HotelRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    hotelFORoomStatus := []string{"HotelFORoomStatus_example"} // []string | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    roomType := []string{"Inner_example"} // []string | The room types of hotel rooms to be fetched. (optional)
    roomClass := "roomClass_example" // string | The room class of hotel rooms to be fetched. (optional)
    floor := "floor_example" // string | The floor of room to be fetched. (optional)
    includeDueOut := true // bool | This flag when set to true will include rooms assigned to due out reservations. (optional)
    departureTime := time.Now() // string | When IncludeDueOut is enable,it is the departure time before which to search. (optional)
    code := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    description := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    quantity := []int32{int32(123)} // []int32 | Indicates quantity. (optional)
    smokingPreference := "smokingPreference_example" // string | The smoking preference of room to be fetched. (optional)
    includeAllRoomConditions := true // bool | This flag when set to true will include all room conditions, when set to false then room with \"General Assignment\" condition type will be excluded from the result. (optional)
    includeComponentRooms := true // bool | This flag when set to true will include all component rooms (optional)
    includePseudoRooms := true // bool | This flag when set to true will include all pseudo rooms (optional)
    includeOORoomCheck := true // bool | This flag when set to true will work for Available Rooms functionality (optional)
    connectingRoomsOnly := true // bool | This flag when set to true will include only connecting rooms. (optional)
    reservationIdId := "reservationIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    pseudoRoomsOnly := true // bool | This flag when set to true will include only pseudo rooms (optional)
    includeAttendentInRoom := true // bool | This flag when set to true will includes attendent in Rooms (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.AutoUnAssignRoom(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).Type_(type_).IncludeDepartureRooms(includeDepartureRooms).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).UseAIRoomAssignment(useAIRoomAssignment).UseAssociatedProfilePreferences(useAssociatedProfilePreferences).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).Code(code).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationIdId(reservationIdId).ReservationIdIdExtension(reservationIdIdExtension).IdContext(idContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.AutoUnAssignRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AutoUnAssignRoom`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.AutoUnAssignRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAutoUnAssignRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **includeDepartureRooms** | **bool** | Indicates if departure rooms are to be included in the auto unassignment. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **roomNumberWildcard** | **string** |  | 
 **useAIRoomAssignment** | **bool** | If the AI ROOM ASSIGNMENT application parameter is set to Y, this flag when set to true will use the AI Room Assignment algorithm to fetch the results in order of suitability. | 
 **useAssociatedProfilePreferences** | **bool** | Indicates if preferences on the profile associated to the reservation should be used to determine the room type. The preferences for FLOOR, SMOKING and ROOM FEATURES will be used. | 
 **hotelRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **hotelFORoomStatus** | **[]string** | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **roomType** | **[]string** | The room types of hotel rooms to be fetched. | 
 **roomClass** | **string** | The room class of hotel rooms to be fetched. | 
 **floor** | **string** | The floor of room to be fetched. | 
 **includeDueOut** | **bool** | This flag when set to true will include rooms assigned to due out reservations. | 
 **departureTime** | **string** | When IncludeDueOut is enable,it is the departure time before which to search. | 
 **code** | **[]string** | A code representing a room feature. | 
 **description** | **[]string** | A code representing a room feature. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **quantity** | **[]int32** | Indicates quantity. | 
 **smokingPreference** | **string** | The smoking preference of room to be fetched. | 
 **includeAllRoomConditions** | **bool** | This flag when set to true will include all room conditions, when set to false then room with \&quot;General Assignment\&quot; condition type will be excluded from the result. | 
 **includeComponentRooms** | **bool** | This flag when set to true will include all component rooms | 
 **includePseudoRooms** | **bool** | This flag when set to true will include all pseudo rooms | 
 **includeOORoomCheck** | **bool** | This flag when set to true will work for Available Rooms functionality | 
 **connectingRoomsOnly** | **bool** | This flag when set to true will include only connecting rooms. | 
 **reservationIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **pseudoRoomsOnly** | **bool** | This flag when set to true will include only pseudo rooms | 
 **includeAttendentInRoom** | **bool** | This flag when set to true will includes attendent in Rooms | 
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


## DeleteAdvanceCheckIn

> Status DeleteAdvanceCheckIn(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse Advance Checkin 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteAdvanceCheckIn(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteAdvanceCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAdvanceCheckIn`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteAdvanceCheckIn`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAdvanceCheckInRequest struct via the builder pattern


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


## DeleteAssignRoom

> UnAssignedRoom DeleteAssignRoom(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UnAssignRoomCriteria(unAssignRoomCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove an assigned room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    unAssignRoomCriteria := *openapiclient.NewUnAssignRoomCriteria() // UnAssignRoomCriteria | Request to the remove a room(unassign) from a reserved reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteAssignRoom(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UnAssignRoomCriteria(unAssignRoomCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteAssignRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAssignRoom`: UnAssignedRoom
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteAssignRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAssignRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **unAssignRoomCriteria** | [**UnAssignRoomCriteria**](UnAssignRoomCriteria.md) | Request to the remove a room(unassign) from a reserved reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UnAssignedRoom**](UnAssignedRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCheckin

> Status DeleteCheckin(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomStatus(roomStatus).UnassignRoom(unassignRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Revert a checked-in Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomStatus := "roomStatus_example" // string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    unassignRoom := true // bool | This option is used when all reservation check-in is reversed and the user wants to choose if the room is to be blocked. If all check-ins are not reversed, this is ignored and a default value false is used. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteCheckin(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomStatus(roomStatus).UnassignRoom(unassignRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteCheckin``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCheckin`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteCheckin`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCheckinRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomStatus** | **string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **unassignRoom** | **bool** | This option is used when all reservation check-in is reversed and the user wants to choose if the room is to be blocked. If all check-ins are not reversed, this is ignored and a default value false is used. | 
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


## DeleteDailyDocket

> Status DeleteDailyDocket(ctx, docketId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Daily Docket 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    docketId := "docketId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteDailyDocket(context.Background(), docketId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteDailyDocket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDailyDocket`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteDailyDocket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**docketId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDailyDocketRequest struct via the builder pattern


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


## DeleteReservationFromQueue

> Status DeleteReservationFromQueue(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete reservation from queue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteReservationFromQueue(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteReservationFromQueue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationFromQueue`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteReservationFromQueue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationFromQueueRequest struct via the builder pattern


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


## DeleteRoomKey

> Status DeleteRoomKey(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete room key



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteRoomKey(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteRoomKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomKey`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteRoomKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomKeyRequest struct via the builder pattern


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


## DeleteServiceRequests

> Status DeleteServiceRequests(ctx, serviceRequestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Service Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    serviceRequestId := "serviceRequestId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteServiceRequests(context.Background(), serviceRequestId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteServiceRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteServiceRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteServiceRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceRequestId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteServiceRequestsRequest struct via the builder pattern


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


## DeleteWakeUpCall

> Status DeleteWakeUpCall(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CallTime(callTime).FollowUpCallTime(followUpCallTime).StartDate(startDate).NewCallTime(newCallTime).NewFollowUpCallTime(newFollowUpCallTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Wake Up Call



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    callTime := []string{time.Now()} // []string | Time on which wake up call is set. (optional)
    followUpCallTime := []string{time.Now()} // []string | Follow up call time. (optional)
    startDate := time.Now() // string |  (optional)
    newCallTime := []string{time.Now()} // []string | New Time on which wake up call is set. Used to change the Followup Call time (optional)
    newFollowUpCallTime := []string{time.Now()} // []string | New Follow up call time.Used to change the Followup Call time. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeleteWakeUpCall(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CallTime(callTime).FollowUpCallTime(followUpCallTime).StartDate(startDate).NewCallTime(newCallTime).NewFollowUpCallTime(newFollowUpCallTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeleteWakeUpCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWakeUpCall`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeleteWakeUpCall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWakeUpCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **callTime** | **[]string** | Time on which wake up call is set. | 
 **followUpCallTime** | **[]string** | Follow up call time. | 
 **startDate** | **string** |  | 
 **newCallTime** | **[]string** | New Time on which wake up call is set. Used to change the Followup Call time | 
 **newFollowUpCallTime** | **[]string** | New Follow up call time.Used to change the Followup Call time. | 
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


## DeliverQueueRoomsTextMessage

> QueueRoomsTextMessage DeliverQueueRoomsTextMessage(ctx, messageType, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeliverQueueRoomsTextMessage(deliverQueueRoomsTextMessage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deliver Queue rooms text message



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    messageType := "messageType_example" // string | 
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    deliverQueueRoomsTextMessage := *openapiclient.NewDeliverQueueRoomsTextMessage() // DeliverQueueRoomsTextMessage | Request to deliver a text message via Queue Reservations (for a guest) or Queue Rush (for housekeeping).
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.DeliverQueueRoomsTextMessage(context.Background(), messageType, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeliverQueueRoomsTextMessage(deliverQueueRoomsTextMessage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.DeliverQueueRoomsTextMessage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeliverQueueRoomsTextMessage`: QueueRoomsTextMessage
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.DeliverQueueRoomsTextMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageType** | **string** |  | 
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeliverQueueRoomsTextMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **deliverQueueRoomsTextMessage** | [**DeliverQueueRoomsTextMessage**](DeliverQueueRoomsTextMessage.md) | Request to deliver a text message via Queue Reservations (for a guest) or Queue Rush (for housekeeping). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**QueueRoomsTextMessage**](QueueRoomsTextMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## FetchAiraLastRunStatus

> AiraLastRunStatusInfo FetchAiraLastRunStatus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Automated Intelligence Room Assignment last run status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.FetchAiraLastRunStatus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.FetchAiraLastRunStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `FetchAiraLastRunStatus`: AiraLastRunStatusInfo
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.FetchAiraLastRunStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiFetchAiraLastRunStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AiraLastRunStatusInfo**](AiraLastRunStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyDocket

> DailyDocket GetDailyDocket(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DocketDate(docketDate).Department(department).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Daily Docket



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    docketDate := time.Now() // string | log book date. (optional)
    department := "department_example" // string | Department code the log book entries belong to. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetDailyDocket(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DocketDate(docketDate).Department(department).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetDailyDocket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyDocket`: DailyDocket
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetDailyDocket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyDocketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **docketDate** | **string** | log book date. | 
 **department** | **string** | Department code the log book entries belong to. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DailyDocket**](DailyDocket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFloorPlans

> FloorPlans GetFloorPlans(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get floor plans



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    room := "room_example" // string | Room filter. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetFloorPlans(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetFloorPlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFloorPlans`: FloorPlans
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetFloorPlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFloorPlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **room** | **string** | Room filter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FloorPlans**](FloorPlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFulfillmentActivityLog

> ActivityLog GetFulfillmentActivityLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIds(userByIds).UserForIds(userForIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the fullfillment activity log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    module := "module_example" // string | Activity module. (optional)
    parameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    fromDate := time.Now() // string | Search from date for the user activity log. (optional)
    toDate := time.Now() // string | Search to date for the user activity log. (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userByIds := []int32{int32(123)} // []int32 |  (optional)
    userForIds := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetFulfillmentActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIds(userByIds).UserForIds(userForIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetFulfillmentActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFulfillmentActivityLog`: ActivityLog
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetFulfillmentActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFulfillmentActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **module** | **string** | Activity module. | 
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userByIds** | **[]int32** |  | 
 **userForIds** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityLog**](ActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelRooms

> HotelRooms GetHotelRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).HotelRoomStartDate(hotelRoomStartDate).HotelRoomEndDate(hotelRoomEndDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).RoomFeatureCode(roomFeatureCode).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).IncludeRotationRoom(includeRotationRoom).OwnerRoomsOnly(ownerRoomsOnly).OwnerExclusiveRoomsOnly(ownerExclusiveRoomsOnly).PerfectFitRoomsOnly(perfectFitRoomsOnly).OrderBy(orderBy).UnitGradeCodes(unitGradeCodes).OwnerExclusiveRoomProfileId(ownerExclusiveRoomProfileId).ExcludeRoomFeatures(excludeRoomFeatures).ExcludeFloorPreferences(excludeFloorPreferences).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel available rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    roomNumberWildcard := "roomNumberWildcard_example" // string |  (optional)
    hotelRoomStatus := []string{"HotelRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    hotelFORoomStatus := []string{"HotelFORoomStatus_example"} // []string | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    hotelRoomStartDate := time.Now() // string |  (optional)
    hotelRoomEndDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    roomType := []string{"Inner_example"} // []string | The room types of hotel rooms to be fetched. (optional)
    roomClass := "roomClass_example" // string | The room class of hotel rooms to be fetched. (optional)
    floor := "floor_example" // string | The floor of room to be fetched. (optional)
    includeDueOut := true // bool | This flag when set to true will include rooms assigned to due out reservations. (optional)
    departureTime := time.Now() // string | When IncludeDueOut is enable,it is the departure time before which to search. (optional)
    roomFeatureCode := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    description := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    quantity := []int32{int32(123)} // []int32 | Indicates quantity. (optional)
    smokingPreference := "smokingPreference_example" // string | The smoking preference of room to be fetched. (optional)
    includeAllRoomConditions := true // bool | This flag when set to true will include all room conditions, when set to false then room with \"General Assignment\" condition type will be excluded from the result. (optional)
    includeComponentRooms := true // bool | This flag when set to true will include all component rooms (optional)
    includePseudoRooms := true // bool | This flag when set to true will include all pseudo rooms (optional)
    includeOORoomCheck := true // bool | This flag when set to true will work for Available Rooms functionality (optional)
    connectingRoomsOnly := true // bool | This flag when set to true will include only connecting rooms. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    pseudoRoomsOnly := true // bool | This flag when set to true will include only pseudo rooms (optional)
    includeAttendentInRoom := true // bool | This flag when set to true will includes attendent in Rooms (optional)
    includeRotationRoom := true // bool | This flag when set to true will return the rotation room when room roation parameter is active and the room type is configured for rotation. (optional)
    ownerRoomsOnly := true // bool | When this flag is set to true, this API will fetch rooms which are contracted with owner profiles. This is supported when OPERA Control Room Rotation is active. (optional)
    ownerExclusiveRoomsOnly := true // bool | When this flag is set to true, this API will fetch rooms can only be used by the reservation's profile (owner) of the room. This is supported when OPERA Control Room Rotation is active. (optional)
    perfectFitRoomsOnly := true // bool | When this flag is set to true, this API will fetch only those rooms that have exactly Y nights free with the reservation guest?s points. This query parameter is supported when OPERA Control Room Rotation and Forecast Rotation Points are active. (optional)
    orderBy := "orderBy_example" // string | A collection of supported sorting for available rooms search results. (optional)
    unitGradeCodes := []string{"Inner_example"} // []string | Fetches rooms that matches requested unit grade codes. Only returns when Room Rotation and Unit Grade are active. (optional)
    ownerExclusiveRoomProfileId := "ownerExclusiveRoomProfileId_example" // string | : This OPERA profile?s internal Id will be used with ownerExclusiveRoomOnly flag to return the room which own by this profile. This query parameter is supported when OPERA Control Room Rotation is active. (optional)
    excludeRoomFeatures := []string{"Inner_example"} // []string | It indicates to exclude rooms with the selected Room Feature(s).It allows alphanumeric values(e.g.,TUB,BOLCONY,MV) (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | It indicates to exclude rooms with the selected Floor(s) which are comma separated values.It allows alphanumeric values(e.g.,01,02,03,GROUND,five) (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetHotelRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).HotelRoomStartDate(hotelRoomStartDate).HotelRoomEndDate(hotelRoomEndDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).RoomFeatureCode(roomFeatureCode).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).IncludeRotationRoom(includeRotationRoom).OwnerRoomsOnly(ownerRoomsOnly).OwnerExclusiveRoomsOnly(ownerExclusiveRoomsOnly).PerfectFitRoomsOnly(perfectFitRoomsOnly).OrderBy(orderBy).UnitGradeCodes(unitGradeCodes).OwnerExclusiveRoomProfileId(ownerExclusiveRoomProfileId).ExcludeRoomFeatures(excludeRoomFeatures).ExcludeFloorPreferences(excludeFloorPreferences).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetHotelRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelRooms`: HotelRooms
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetHotelRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **roomNumberWildcard** | **string** |  | 
 **hotelRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **hotelFORoomStatus** | **[]string** | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **hotelRoomStartDate** | **string** |  | 
 **hotelRoomEndDate** | **string** |  | 
 **duration** | **string** |  | 
 **roomType** | **[]string** | The room types of hotel rooms to be fetched. | 
 **roomClass** | **string** | The room class of hotel rooms to be fetched. | 
 **floor** | **string** | The floor of room to be fetched. | 
 **includeDueOut** | **bool** | This flag when set to true will include rooms assigned to due out reservations. | 
 **departureTime** | **string** | When IncludeDueOut is enable,it is the departure time before which to search. | 
 **roomFeatureCode** | **[]string** | A code representing a room feature. | 
 **description** | **[]string** | A code representing a room feature. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **quantity** | **[]int32** | Indicates quantity. | 
 **smokingPreference** | **string** | The smoking preference of room to be fetched. | 
 **includeAllRoomConditions** | **bool** | This flag when set to true will include all room conditions, when set to false then room with \&quot;General Assignment\&quot; condition type will be excluded from the result. | 
 **includeComponentRooms** | **bool** | This flag when set to true will include all component rooms | 
 **includePseudoRooms** | **bool** | This flag when set to true will include all pseudo rooms | 
 **includeOORoomCheck** | **bool** | This flag when set to true will work for Available Rooms functionality | 
 **connectingRoomsOnly** | **bool** | This flag when set to true will include only connecting rooms. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **pseudoRoomsOnly** | **bool** | This flag when set to true will include only pseudo rooms | 
 **includeAttendentInRoom** | **bool** | This flag when set to true will includes attendent in Rooms | 
 **includeRotationRoom** | **bool** | This flag when set to true will return the rotation room when room roation parameter is active and the room type is configured for rotation. | 
 **ownerRoomsOnly** | **bool** | When this flag is set to true, this API will fetch rooms which are contracted with owner profiles. This is supported when OPERA Control Room Rotation is active. | 
 **ownerExclusiveRoomsOnly** | **bool** | When this flag is set to true, this API will fetch rooms can only be used by the reservation&#39;s profile (owner) of the room. This is supported when OPERA Control Room Rotation is active. | 
 **perfectFitRoomsOnly** | **bool** | When this flag is set to true, this API will fetch only those rooms that have exactly Y nights free with the reservation guest?s points. This query parameter is supported when OPERA Control Room Rotation and Forecast Rotation Points are active. | 
 **orderBy** | **string** | A collection of supported sorting for available rooms search results. | 
 **unitGradeCodes** | **[]string** | Fetches rooms that matches requested unit grade codes. Only returns when Room Rotation and Unit Grade are active. | 
 **ownerExclusiveRoomProfileId** | **string** | : This OPERA profile?s internal Id will be used with ownerExclusiveRoomOnly flag to return the room which own by this profile. This query parameter is supported when OPERA Control Room Rotation is active. | 
 **excludeRoomFeatures** | **[]string** | It indicates to exclude rooms with the selected Room Feature(s).It allows alphanumeric values(e.g.,TUB,BOLCONY,MV) | 
 **excludeFloorPreferences** | **[]string** | It indicates to exclude rooms with the selected Floor(s) which are comma separated values.It allows alphanumeric values(e.g.,01,02,03,GROUND,five) | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelRooms**](HotelRooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLinkedReservations

> LinkedReservations GetLinkedReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdContext(additionalReservationIdContext).AdditionalReservationIdType(additionalReservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get linked reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    additionalReservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    additionalReservationIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    additionalReservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetLinkedReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdContext(additionalReservationIdContext).AdditionalReservationIdType(additionalReservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetLinkedReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLinkedReservations`: LinkedReservations
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetLinkedReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLinkedReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **additionalReservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **additionalReservationIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **additionalReservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LinkedReservations**](LinkedReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetQueueRoomsTextMessage

> QueuedRoomsTextMessage GetQueueRoomsTextMessage(ctx, messageType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).MobileNumber(mobileNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Queue room text message



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    messageType := "messageType_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    mobileNumber := "mobileNumber_example" // string | Mobile number that the text message will be delivered to. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetQueueRoomsTextMessage(context.Background(), messageType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).MobileNumber(mobileNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetQueueRoomsTextMessage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetQueueRoomsTextMessage`: QueuedRoomsTextMessage
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetQueueRoomsTextMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageType** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQueueRoomsTextMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **mobileNumber** | **string** | Mobile number that the text message will be delivered to. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**QueuedRoomsTextMessage**](QueuedRoomsTextMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationSummaries

> ShortReservation GetReservationSummaries(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SearchType(searchType).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).StayOnEnd(stayOnEnd).StayOnStart(stayOnStart).CreatedOnEnd(createdOnEnd).CreateOnStart(createOnStart).DepositDateEnd(depositDateEnd).DepositDateStart(depositDateStart).DateCriteriaExpectedArrivalEndTime(dateCriteriaExpectedArrivalEndTime).DateCriteriaExpectedArrivalStartTime(dateCriteriaExpectedArrivalStartTime).DepositDueDateEnd(depositDueDateEnd).DepositDueDateStart(depositDueDateStart).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).MembershipNumber(membershipNumber).AnyVIPStatus(anyVIPStatus).VipStatusCodes(vipStatusCodes).RoomId(roomId).LastName(lastName).FirstName(firstName).BlockCode(blockCode).CompanyName(companyName).TravelAgentName(travelAgentName).CreditCardNumber(creditCardNumber).CustomReference(customReference).ExternalReference(externalReference).AttributeName(attributeName).OrderType(orderType).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).RoomTypes(roomTypes).RoomStatuses(roomStatuses).PaymentMethod(paymentMethod).Indicator(indicator).FetchSummaryInstructions(fetchSummaryInstructions).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel reservation summaries



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    arrivalEnd := time.Now() // string | The ending value of the date range. (optional)
    arrivalStart := time.Now() // string | The starting value of the date range. (optional)
    departureEnd := time.Now() // string | The ending value of the date range. (optional)
    departureStart := time.Now() // string | The starting value of the date range. (optional)
    stayOnEnd := time.Now() // string | The ending value of the date range. (optional)
    stayOnStart := time.Now() // string | The starting value of the date range. (optional)
    createdOnEnd := time.Now() // string | The ending value of the date range. (optional)
    createOnStart := time.Now() // string | The starting value of the date range. (optional)
    depositDateEnd := time.Now() // string | The ending value of the date range. (optional)
    depositDateStart := time.Now() // string | The starting value of the date range. (optional)
    dateCriteriaExpectedArrivalEndTime := time.Now() // string | The ending value of the time span. (optional)
    dateCriteriaExpectedArrivalStartTime := time.Now() // string | The starting value of the time span. (optional)
    depositDueDateEnd := time.Now() // string | The ending value of the date range. (optional)
    depositDueDateStart := time.Now() // string | The starting value of the date range. (optional)
    expectedReturnEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // string | The starting value of the time span. (optional)
    membershipNumber := "membershipNumber_example" // string | Lookup reservations with this membership number. (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    roomId := "roomId_example" // string | Wildcard Search value to lookup reservation with this room number. (optional)
    lastName := "lastName_example" // string | Wildcard Search value to lookup reservations with this Last Name. (optional)
    firstName := "firstName_example" // string | Wildcard Search value to lookup reservations with this First Name. (optional)
    blockCode := "blockCode_example" // string | Wildcard Search value to lookup reservation with this block code. (optional)
    companyName := "companyName_example" // string | Lookup reservations with this company name. (optional)
    travelAgentName := "travelAgentName_example" // string | Lookup reservations with this travel agent name. (optional)
    creditCardNumber := "creditCardNumber_example" // string | Lookup reservations which has this credit card attached. (optional)
    customReference := "customReference_example" // string | Lookup reservations with this custom reference number. (optional)
    externalReference := "externalReference_example" // string | Lookup reservations with this external reference id. (optional)
    attributeName := []string{"AttributeName_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    expectedArrivalEndTime := time.Now() // string | The ending value of the date range. (optional)
    expectedArrivalStartTime := time.Now() // string | The starting value of the date range. (optional)
    roomTypes := []string{"Inner_example"} // []string | Room Type. (optional)
    roomStatuses := []string{"RoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    paymentMethod := []string{"Inner_example"} // []string | Payment Method to search the reservation. (optional)
    indicator := []string{"Indicator_example"} // []string | Simple type that corresponds to reservation indicators. (optional)
    fetchSummaryInstructions := []string{"FetchSummaryInstructions_example"} // []string | Simple type for reservation summary instructions that can be used in requests to fetch summary. (optional)
    allowedAction := []string{"AllowedAction_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetReservationSummaries(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SearchType(searchType).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).StayOnEnd(stayOnEnd).StayOnStart(stayOnStart).CreatedOnEnd(createdOnEnd).CreateOnStart(createOnStart).DepositDateEnd(depositDateEnd).DepositDateStart(depositDateStart).DateCriteriaExpectedArrivalEndTime(dateCriteriaExpectedArrivalEndTime).DateCriteriaExpectedArrivalStartTime(dateCriteriaExpectedArrivalStartTime).DepositDueDateEnd(depositDueDateEnd).DepositDueDateStart(depositDueDateStart).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).MembershipNumber(membershipNumber).AnyVIPStatus(anyVIPStatus).VipStatusCodes(vipStatusCodes).RoomId(roomId).LastName(lastName).FirstName(firstName).BlockCode(blockCode).CompanyName(companyName).TravelAgentName(travelAgentName).CreditCardNumber(creditCardNumber).CustomReference(customReference).ExternalReference(externalReference).AttributeName(attributeName).OrderType(orderType).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).RoomTypes(roomTypes).RoomStatuses(roomStatuses).PaymentMethod(paymentMethod).Indicator(indicator).FetchSummaryInstructions(fetchSummaryInstructions).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetReservationSummaries``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationSummaries`: ShortReservation
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetReservationSummaries`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationSummariesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **arrivalEnd** | **string** | The ending value of the date range. | 
 **arrivalStart** | **string** | The starting value of the date range. | 
 **departureEnd** | **string** | The ending value of the date range. | 
 **departureStart** | **string** | The starting value of the date range. | 
 **stayOnEnd** | **string** | The ending value of the date range. | 
 **stayOnStart** | **string** | The starting value of the date range. | 
 **createdOnEnd** | **string** | The ending value of the date range. | 
 **createOnStart** | **string** | The starting value of the date range. | 
 **depositDateEnd** | **string** | The ending value of the date range. | 
 **depositDateStart** | **string** | The starting value of the date range. | 
 **dateCriteriaExpectedArrivalEndTime** | **string** | The ending value of the time span. | 
 **dateCriteriaExpectedArrivalStartTime** | **string** | The starting value of the time span. | 
 **depositDueDateEnd** | **string** | The ending value of the date range. | 
 **depositDueDateStart** | **string** | The starting value of the date range. | 
 **expectedReturnEndTime** | **string** | The ending value of the time span. | 
 **expectedReturnStartTime** | **string** | The starting value of the time span. | 
 **membershipNumber** | **string** | Lookup reservations with this membership number. | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipStatusCodes** | **[]string** | VIP status of the customer. | 
 **roomId** | **string** | Wildcard Search value to lookup reservation with this room number. | 
 **lastName** | **string** | Wildcard Search value to lookup reservations with this Last Name. | 
 **firstName** | **string** | Wildcard Search value to lookup reservations with this First Name. | 
 **blockCode** | **string** | Wildcard Search value to lookup reservation with this block code. | 
 **companyName** | **string** | Lookup reservations with this company name. | 
 **travelAgentName** | **string** | Lookup reservations with this travel agent name. | 
 **creditCardNumber** | **string** | Lookup reservations which has this credit card attached. | 
 **customReference** | **string** | Lookup reservations with this custom reference number. | 
 **externalReference** | **string** | Lookup reservations with this external reference id. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **expectedArrivalEndTime** | **string** | The ending value of the date range. | 
 **expectedArrivalStartTime** | **string** | The starting value of the date range. | 
 **roomTypes** | **[]string** | Room Type. | 
 **roomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **paymentMethod** | **[]string** | Payment Method to search the reservation. | 
 **indicator** | **[]string** | Simple type that corresponds to reservation indicators. | 
 **fetchSummaryInstructions** | **[]string** | Simple type for reservation summary instructions that can be used in requests to fetch summary. | 
 **allowedAction** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ShortReservation**](ShortReservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsForBilling

> ReservationsInfo GetReservationsForBilling(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SearchType(searchType).MultipleHotelsSearchList(multipleHotelsSearchList).SuperSearch(superSearch).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Nights(nights).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ReservationProfileType(reservationProfileType).AttachedProfileName(attachedProfileName).AttachedProfileId(attachedProfileId).AttachedProfileIdContext(attachedProfileIdContext).AttachedProfileIdType(attachedProfileIdType).ResGuestId(resGuestId).ResGuestIdContext(resGuestIdContext).ResGuestIdType(resGuestIdType).MembershipId(membershipId).MembershipLevelCodes(membershipLevelCodes).MembershipTypeCodes(membershipTypeCodes).Surname(surname).GivenName(givenName).CityName(cityName).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).BookingChannelCode(bookingChannelCode).BlockHotelId(blockHotelId).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).RecordLocator(recordLocator).OrderByAttributeName(orderByAttributeName).OrderType(orderType).RoomId(roomId).RoomType(roomType).FetchInstructions(fetchInstructions).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasOpenFolio(hasOpenFolio).ExcludedReservationIds(excludedReservationIds).ExcludedReservationIdsContext(excludedReservationIdsContext).ExcludedReservationIdsType(excludedReservationIdsType).AdvanceCheckedIn(advanceCheckedIn).SearchTypesSearchType(searchTypesSearchType).ReservationStatus(reservationStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations for billing



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    multipleHotelsSearchList := []string{"Inner_example"} // []string | Hotel code. (optional)
    superSearch := "superSearch_example" // string | Free form text field for searching all reservation fields (optional)
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    nights := int32(56) // int32 | The number of nights on a reservation. (optional)
    arrivalEnd := time.Now() // string | The ending value of the date range. (optional)
    arrivalStart := time.Now() // string | The starting value of the date range. (optional)
    departureEnd := time.Now() // string | The ending value of the date range. (optional)
    departureStart := time.Now() // string | The starting value of the date range. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    attachedProfileName := []string{"Inner_example"} // []string | Attached profile name (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    attachedProfileIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    attachedProfileIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    resGuestId := "resGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    resGuestIdContext := "resGuestIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    resGuestIdType := "resGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipId := "membershipId_example" // string | Membership ID criteria. (optional)
    membershipLevelCodes := []string{"Inner_example"} // []string |  (optional)
    membershipTypeCodes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    cityName := "cityName_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    streetAddress := "streetAddress_example" // string | First Line of Street Address. For profile search it matches the first Address line. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Booking Channel Code (optional)
    blockHotelId := "blockHotelId_example" // string | The Hotel Code of the Block. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderByAttributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    excludeNoPost := true // bool | Indicates that reservations with No Post flag should not be expected from the result. (optional)
    excludePMRooms := true // bool | Indicates that reservations with PM room type should not be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    excludedReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludedReservationIdsContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    excludedReservationIdsType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    advanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    searchTypesSearchType := []string{"SearchTypesSearchType_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatus := []string{"ReservationStatus_example"} // []string | Reservation status type for reservations search. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetReservationsForBilling(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SearchType(searchType).MultipleHotelsSearchList(multipleHotelsSearchList).SuperSearch(superSearch).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Nights(nights).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ReservationProfileType(reservationProfileType).AttachedProfileName(attachedProfileName).AttachedProfileId(attachedProfileId).AttachedProfileIdContext(attachedProfileIdContext).AttachedProfileIdType(attachedProfileIdType).ResGuestId(resGuestId).ResGuestIdContext(resGuestIdContext).ResGuestIdType(resGuestIdType).MembershipId(membershipId).MembershipLevelCodes(membershipLevelCodes).MembershipTypeCodes(membershipTypeCodes).Surname(surname).GivenName(givenName).CityName(cityName).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).BookingChannelCode(bookingChannelCode).BlockHotelId(blockHotelId).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).RecordLocator(recordLocator).OrderByAttributeName(orderByAttributeName).OrderType(orderType).RoomId(roomId).RoomType(roomType).FetchInstructions(fetchInstructions).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasOpenFolio(hasOpenFolio).ExcludedReservationIds(excludedReservationIds).ExcludedReservationIdsContext(excludedReservationIdsContext).ExcludedReservationIdsType(excludedReservationIdsType).AdvanceCheckedIn(advanceCheckedIn).SearchTypesSearchType(searchTypesSearchType).ReservationStatus(reservationStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetReservationsForBilling``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsForBilling`: ReservationsInfo
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetReservationsForBilling`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsForBillingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **multipleHotelsSearchList** | **[]string** | Hotel code. | 
 **superSearch** | **string** | Free form text field for searching all reservation fields | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **nights** | **int32** | The number of nights on a reservation. | 
 **arrivalEnd** | **string** | The ending value of the date range. | 
 **arrivalStart** | **string** | The starting value of the date range. | 
 **departureEnd** | **string** | The ending value of the date range. | 
 **departureStart** | **string** | The starting value of the date range. | 
 **reservationProfileType** | **[]string** |  | 
 **attachedProfileName** | **[]string** | Attached profile name | 
 **attachedProfileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **attachedProfileIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **attachedProfileIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **resGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **resGuestIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **resGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipId** | **string** | Membership ID criteria. | 
 **membershipLevelCodes** | **[]string** |  | 
 **membershipTypeCodes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **cityName** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **streetAddress** | **string** | First Line of Street Address. For profile search it matches the first Address line. | 
 **bookingChannelCode** | **string** | Booking Channel Code | 
 **blockHotelId** | **string** | The Hotel Code of the Block. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderByAttributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **excludeNoPost** | **bool** | Indicates that reservations with No Post flag should not be expected from the result. | 
 **excludePMRooms** | **bool** | Indicates that reservations with PM room type should not be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **excludedReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludedReservationIdsContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **excludedReservationIdsType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **advanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **searchTypesSearchType** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatus** | **[]string** | Reservation status type for reservations search. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsInfo**](ReservationsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsInQueue

> ReservationsInQueue GetReservationsInQueue(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).RoomNumberWildCard(roomNumberWildCard).GuestNameWildCard(guestNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the reservation in queue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomNumberWildCard := "roomNumberWildCard_example" // string | Wildcard search of reservations in queue by Room Number. (optional)
    guestNameWildCard := "guestNameWildCard_example" // string | Wildcard search of reservations in queue by Guest Name. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetReservationsInQueue(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).RoomNumberWildCard(roomNumberWildCard).GuestNameWildCard(guestNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetReservationsInQueue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsInQueue`: ReservationsInQueue
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetReservationsInQueue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsInQueueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomClassCodes** | **[]string** |  | 
 **roomTypeCodes** | **[]string** |  | 
 **roomNumberWildCard** | **string** | Wildcard search of reservations in queue by Room Number. | 
 **guestNameWildCard** | **string** | Wildcard search of reservations in queue by Guest Name. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsInQueue**](ReservationsInQueue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetResvForBatchCCAuth

> ResvForBatchCCAut GetResvForBatchCCAuth(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestName(guestName).Room(room).CardType(cardType).UserDefinedCardType(userDefinedCardType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get resrvation for batch CCAuth



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestName := "guestName_example" // string | Used for Character Strings, length 0 to 80. (optional)
    room := "room_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    cardType := []string{"CardType_example"} // []string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    userDefinedCardType := []string{"Inner_example"} // []string | Listing of user defined credit card types. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetResvForBatchCCAuth(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestName(guestName).Room(room).CardType(cardType).UserDefinedCardType(userDefinedCardType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetResvForBatchCCAuth``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetResvForBatchCCAuth`: ResvForBatchCCAut
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetResvForBatchCCAuth`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetResvForBatchCCAuthRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestName** | **string** | Used for Character Strings, length 0 to 80. | 
 **room** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **cardType** | **[]string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **userDefinedCardType** | **[]string** | Listing of user defined credit card types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ResvForBatchCCAut**](ResvForBatchCCAut.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomInterfaceStatus

> RoomInterfaceStatus GetRoomInterfaceStatus(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceName(interfaceName).InterfaceType(interfaceType).Logo(logo).MachineName(machineName).Status(status).ActiveFlag(activeFlag).Code(code).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).RoomId(roomId).LastName(lastName).FirstName(firstName).ReservationIds(reservationIds).ReservationIdsContext(reservationIdsContext).ReservationIdsType(reservationIdsType).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).SpecialCodes(specialCodes).FloorCodes(floorCodes).RoomFeatureCodes(roomFeatureCodes).RoomClassCodes(roomClassCodes).RoomStatus(roomStatus).GuaranteeCode(guaranteeCode).ReservationStatus(reservationStatus).IncludeLinkedReservations(includeLinkedReservations).IncludeBlocks(includeBlocks).OrderBy(orderBy).OrderType(orderType).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).AdvanceCheckedIn(advanceCheckedIn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get room interface status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    interfaceId := "interfaceId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceName := "interfaceName_example" // string | Name of the Hotel Interface (optional)
    interfaceType := "interfaceType_example" // string | XML Posting Interface (optional)
    logo := "logo_example" // string | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. (optional)
    machineName := "machineName_example" // string | Unique machine name of the running IFC. (optional)
    status := "status_example" // string | Status of the Hotel Interface either STOPPED or RUNNING. (optional)
    activeFlag := true // bool | Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    roomId := "roomId_example" // string | Wild card search value for Room number (optional)
    lastName := "lastName_example" // string | Wild card search value to lookup reservations with this last name (optional)
    firstName := "firstName_example" // string | Wild card search value to lookup reservations with this first name (optional)
    reservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdsContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdsType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    arrivalEnd := time.Now() // string | The ending value of the date range. (optional)
    arrivalStart := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedArrivalStartTime := time.Now() // string | The starting value of the time span. (optional)
    specialCodes := []string{"Inner_example"} // []string |  (optional)
    floorCodes := []string{"Inner_example"} // []string |  (optional)
    roomFeatureCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomStatus := []string{"RoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Include reservations that have Guarantee Code(Reservation Type) only. (optional)
    reservationStatus := []string{"ReservationStatus_example"} // []string | Reservation status type for reservations search. (optional)
    includeLinkedReservations := true // bool | Include linked reservations. (optional)
    includeBlocks := true // bool | Include reservations attached to a block. (optional)
    orderBy := "orderBy_example" // string | A collection of supported sorting for Room Interface Status search results. (optional)
    orderType := "orderType_example" // string |  (optional)
    expectedReturnEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // string | The starting value of the time span. (optional)
    advanceCheckedIn := true // bool | Shows whether reservation is in Advance CheckIn state. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetRoomInterfaceStatus(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceName(interfaceName).InterfaceType(interfaceType).Logo(logo).MachineName(machineName).Status(status).ActiveFlag(activeFlag).Code(code).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).RoomId(roomId).LastName(lastName).FirstName(firstName).ReservationIds(reservationIds).ReservationIdsContext(reservationIdsContext).ReservationIdsType(reservationIdsType).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).SpecialCodes(specialCodes).FloorCodes(floorCodes).RoomFeatureCodes(roomFeatureCodes).RoomClassCodes(roomClassCodes).RoomStatus(roomStatus).GuaranteeCode(guaranteeCode).ReservationStatus(reservationStatus).IncludeLinkedReservations(includeLinkedReservations).IncludeBlocks(includeBlocks).OrderBy(orderBy).OrderType(orderType).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).AdvanceCheckedIn(advanceCheckedIn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetRoomInterfaceStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomInterfaceStatus`: RoomInterfaceStatus
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetRoomInterfaceStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomInterfaceStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceName** | **string** | Name of the Hotel Interface | 
 **interfaceType** | **string** | XML Posting Interface | 
 **logo** | **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | 
 **machineName** | **string** | Unique machine name of the running IFC. | 
 **status** | **string** | Status of the Hotel Interface either STOPPED or RUNNING. | 
 **activeFlag** | **bool** | Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. | 
 **code** | **[]string** |  | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **roomId** | **string** | Wild card search value for Room number | 
 **lastName** | **string** | Wild card search value to lookup reservations with this last name | 
 **firstName** | **string** | Wild card search value to lookup reservations with this first name | 
 **reservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdsContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdsType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **arrivalEnd** | **string** | The ending value of the date range. | 
 **arrivalStart** | **string** | The starting value of the date range. | 
 **expectedArrivalEndTime** | **string** | The ending value of the time span. | 
 **expectedArrivalStartTime** | **string** | The starting value of the time span. | 
 **specialCodes** | **[]string** |  | 
 **floorCodes** | **[]string** |  | 
 **roomFeatureCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **roomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **guaranteeCode** | **string** | Include reservations that have Guarantee Code(Reservation Type) only. | 
 **reservationStatus** | **[]string** | Reservation status type for reservations search. | 
 **includeLinkedReservations** | **bool** | Include linked reservations. | 
 **includeBlocks** | **bool** | Include reservations attached to a block. | 
 **orderBy** | **string** | A collection of supported sorting for Room Interface Status search results. | 
 **orderType** | **string** |  | 
 **expectedReturnEndTime** | **string** | The ending value of the time span. | 
 **expectedReturnStartTime** | **string** | The starting value of the time span. | 
 **advanceCheckedIn** | **bool** | Shows whether reservation is in Advance CheckIn state. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomInterfaceStatus**](RoomInterfaceStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomKeyInterfaceDetails

> RoomKeyInterfaceDetails GetRoomKeyInterfaceDetails(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomNumbersCode(roomNumbersCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get key encoder interface configuration details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomNumbersCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetRoomKeyInterfaceDetails(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomNumbersCode(roomNumbersCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetRoomKeyInterfaceDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomKeyInterfaceDetails`: RoomKeyInterfaceDetails
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetRoomKeyInterfaceDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomKeyInterfaceDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomNumbersCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomKeyInterfaceDetails**](RoomKeyInterfaceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomKeys

> RoomKeyInfo GetRoomKeys(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the room keys



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetRoomKeys(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetRoomKeys``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomKeys`: RoomKeyInfo
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetRoomKeys`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomKeysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomKeyInfo**](RoomKeyInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomMoveHistory

> RoomMoveHistory GetRoomMoveHistory(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get room move history of a reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetRoomMoveHistory(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetRoomMoveHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomMoveHistory`: RoomMoveHistory
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetRoomMoveHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomMoveHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomMoveHistory**](RoomMoveHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetServiceRequests

> ServiceRequestsInfo GetServiceRequests(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Code(code).Status(status).PriorityCodes(priorityCodes).DepartmentCodes(departmentCodes).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Room(room).CreationEndDate(creationEndDate).CreationStartDate(creationStartDate).ClosedEndDate(closedEndDate).ClosedStartDate(closedStartDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Service Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    status := []string{"Status_example"} // []string |  (optional)
    priorityCodes := []string{"Inner_example"} // []string |  (optional)
    departmentCodes := []string{"Inner_example"} // []string |  (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    room := "room_example" // string | The room number in which the service request was created. (optional)
    creationEndDate := time.Now() // string | The ending value of the date range. (optional)
    creationStartDate := time.Now() // string | The starting value of the date range. (optional)
    closedEndDate := time.Now() // string | The ending value of the date range. (optional)
    closedStartDate := time.Now() // string | The starting value of the date range. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetServiceRequests(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Code(code).Status(status).PriorityCodes(priorityCodes).DepartmentCodes(departmentCodes).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Room(room).CreationEndDate(creationEndDate).CreationStartDate(creationStartDate).ClosedEndDate(closedEndDate).ClosedStartDate(closedStartDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetServiceRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceRequests`: ServiceRequestsInfo
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetServiceRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **code** | **[]string** |  | 
 **status** | **[]string** |  | 
 **priorityCodes** | **[]string** |  | 
 **departmentCodes** | **[]string** |  | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **room** | **string** | The room number in which the service request was created. | 
 **creationEndDate** | **string** | The ending value of the date range. | 
 **creationStartDate** | **string** | The starting value of the date range. | 
 **closedEndDate** | **string** | The ending value of the date range. | 
 **closedStartDate** | **string** | The starting value of the date range. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceRequestsInfo**](ServiceRequestsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSuggestedRooms

> SuggestedRooms GetSuggestedRooms(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).StartDate(startDate).Nights(nights).SuggestedRoomsInstructions(suggestedRoomsInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Suggested Rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | Unique reservation identifier for the reservation.
    hotelId := "hotelId_example" // string | Property where the reservation exists.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    startDate := time.Now() // string | Date of arrival. (optional)
    nights := int32(56) // int32 | Number of nights that guest will be staying. (optional)
    suggestedRoomsInstructions := []string{"SuggestedRoomsInstructions_example"} // []string | Instruction to include commponent room. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetSuggestedRooms(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).StartDate(startDate).Nights(nights).SuggestedRoomsInstructions(suggestedRoomsInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetSuggestedRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSuggestedRooms`: SuggestedRooms
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetSuggestedRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique reservation identifier for the reservation. | 
**hotelId** | **string** | Property where the reservation exists. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSuggestedRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **startDate** | **string** | Date of arrival. | 
 **nights** | **int32** | Number of nights that guest will be staying. | 
 **suggestedRoomsInstructions** | **[]string** | Instruction to include commponent room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuggestedRooms**](SuggestedRooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWakeUpCall

> WakeUpCalls GetWakeUpCall(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchCancelled(fetchCancelled).FetchCompleted(fetchCompleted).FetchNoAnswer(fetchNoAnswer).FetchPending(fetchPending).IdExtension(idExtension).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BeginDate(beginDate).EndDate(endDate).BeginTime(beginTime).EndTime(endTime).Room(room).BlockId(blockId).GuestName(guestName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Wake Up Call



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchCancelled := true // bool | Specifies whether we should fetch wake up calls with pending status. (optional)
    fetchCompleted := true // bool | Specifies whether we should fetch wake up calls with pending status. (optional)
    fetchNoAnswer := true // bool | Specifies whether we should fetch wake up calls with pending status. (optional)
    fetchPending := true // bool | Specifies whether we should fetch wake up calls with pending status. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    beginDate := time.Now() // string | Begin date from which to start fetching wake up calls. (optional)
    endDate := time.Now() // string | End date from which to start fetching wake up calls. (optional)
    beginTime := time.Now() // string | Begin time from which to start fetching wake up calls. (optional)
    endTime := time.Now() // string | End time from which to start fetching wake up calls. (optional)
    room := []string{"Inner_example"} // []string | Hotel room(s) for which wake up calls are to be fetched. (optional)
    blockId := "blockId_example" // string | Block code for which wake up calls are to be fetched. (optional)
    guestName := "guestName_example" // string | Name with which wake up call may be associated. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.GetWakeUpCall(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchCancelled(fetchCancelled).FetchCompleted(fetchCompleted).FetchNoAnswer(fetchNoAnswer).FetchPending(fetchPending).IdExtension(idExtension).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BeginDate(beginDate).EndDate(endDate).BeginTime(beginTime).EndTime(endTime).Room(room).BlockId(blockId).GuestName(guestName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.GetWakeUpCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWakeUpCall`: WakeUpCalls
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.GetWakeUpCall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWakeUpCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchCancelled** | **bool** | Specifies whether we should fetch wake up calls with pending status. | 
 **fetchCompleted** | **bool** | Specifies whether we should fetch wake up calls with pending status. | 
 **fetchNoAnswer** | **bool** | Specifies whether we should fetch wake up calls with pending status. | 
 **fetchPending** | **bool** | Specifies whether we should fetch wake up calls with pending status. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **beginDate** | **string** | Begin date from which to start fetching wake up calls. | 
 **endDate** | **string** | End date from which to start fetching wake up calls. | 
 **beginTime** | **string** | Begin time from which to start fetching wake up calls. | 
 **endTime** | **string** | End time from which to start fetching wake up calls. | 
 **room** | **[]string** | Hotel room(s) for which wake up calls are to be fetched. | 
 **blockId** | **string** | Block code for which wake up calls are to be fetched. | 
 **guestName** | **string** | Name with which wake up call may be associated. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**WakeUpCalls**](WakeUpCalls.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MoveInHouseGuest

> MovedInHouseGuest MoveInHouseGuest(ctx, roomId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveInHouseGuest(moveInHouseGuest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move in-house guest



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    roomId := "roomId_example" // string | 
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    moveInHouseGuest := *openapiclient.NewMoveInHouseGuest() // MoveInHouseGuest | To move a reservation, the reservation needs to be in Checked-In state.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.MoveInHouseGuest(context.Background(), roomId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveInHouseGuest(moveInHouseGuest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.MoveInHouseGuest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveInHouseGuest`: MovedInHouseGuest
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.MoveInHouseGuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomId** | **string** |  | 
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveInHouseGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **moveInHouseGuest** | [**MoveInHouseGuest**](MoveInHouseGuest.md) | To move a reservation, the reservation needs to be in Checked-In state. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MovedInHouseGuest**](MovedInHouseGuest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PlaceRoomsOnHold

> Status PlaceRoomsOnHold(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldRooms(holdRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Place Rooms On Hold



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    holdRooms := *openapiclient.NewHoldRooms() // HoldRooms | Request to place rooms on hold.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PlaceRoomsOnHold(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldRooms(holdRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PlaceRoomsOnHold``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PlaceRoomsOnHold`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PlaceRoomsOnHold`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPlaceRoomsOnHoldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **holdRooms** | [**HoldRooms**](HoldRooms.md) | Request to place rooms on hold. | 
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


## PostAdvanceCheckIn

> Status PostAdvanceCheckIn(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceCheckInReservation(advanceCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Advance checkin a reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    advanceCheckInReservation := *openapiclient.NewAdvanceCheckInReservation() // AdvanceCheckInReservation | Request object to perform Advance Check In of a Reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostAdvanceCheckIn(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceCheckInReservation(advanceCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostAdvanceCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdvanceCheckIn`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostAdvanceCheckIn`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAdvanceCheckInRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **advanceCheckInReservation** | [**AdvanceCheckInReservation**](AdvanceCheckInReservation.md) | Request object to perform Advance Check In of a Reservation. | 
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


## PostCheckIn

> CheckedinReservation PostCheckIn(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reservation(reservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Checks in a guest



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is being booked
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservation := *openapiclient.NewPostCheckInRequest() // PostCheckInRequest | Validation checks includes the following: - Reservation is not valid to be checked in. - Split is still required before the reservation can be checked in. - Room information is missing. - Payment information is missing. - The status of the room needs to be reviewed. - Sharers was impacted. The check-in process affected the reservation details of shared guests on the reservation. - Sharers was not impacted. The check-in process has not affected the reservation details of shared guests on the reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostCheckIn(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reservation(reservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCheckIn`: CheckedinReservation
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostCheckIn`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is being booked | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCheckInRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservation** | [**PostCheckInRequest**](PostCheckInRequest.md) | Validation checks includes the following: - Reservation is not valid to be checked in. - Split is still required before the reservation can be checked in. - Room information is missing. - Payment information is missing. - The status of the room needs to be reviewed. - Sharers was impacted. The check-in process affected the reservation details of shared guests on the reservation. - Sharers was not impacted. The check-in process has not affected the reservation details of shared guests on the reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckedinReservation**](CheckedinReservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDailyDocket

> Status PostDailyDocket(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyDocket(dailyDocket).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Daily Docket 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyDocket := *openapiclient.NewDailyDocket() // DailyDocket | Add log book entries.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostDailyDocket(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyDocket(dailyDocket).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostDailyDocket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDailyDocket`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostDailyDocket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDailyDocketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyDocket** | [**DailyDocket**](DailyDocket.md) | Add log book entries. | 
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


## PostMassAdvanceCheckIn

> Status PostMassAdvanceCheckIn(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassAdvanceCheckInReservations(massAdvanceCheckInReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Mass Advance Check in Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    massAdvanceCheckInReservations := *openapiclient.NewMassAdvanceCheckInReservations() // MassAdvanceCheckInReservations | Request object to Submit Batch job for Mass Advance Check In of Reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostMassAdvanceCheckIn(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassAdvanceCheckInReservations(massAdvanceCheckInReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostMassAdvanceCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMassAdvanceCheckIn`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostMassAdvanceCheckIn`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMassAdvanceCheckInRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **massAdvanceCheckInReservations** | [**MassAdvanceCheckInReservations**](MassAdvanceCheckInReservations.md) | Request object to Submit Batch job for Mass Advance Check In of Reservations. | 
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


## PostMassCheckIn

> Status PostMassCheckIn(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassCheckInReservations(massCheckInReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Mass checkin reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    massCheckInReservations := *openapiclient.NewMassCheckInReservations() // MassCheckInReservations | Request object to Submit Batch job for Mass Checkin of Reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostMassCheckIn(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassCheckInReservations(massCheckInReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostMassCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMassCheckIn`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostMassCheckIn`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMassCheckInRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **massCheckInReservations** | [**MassCheckInReservations**](MassCheckInReservations.md) | Request object to Submit Batch job for Mass Checkin of Reservations. | 
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


## PostRoomAssignment

> AssignedRoom PostRoomAssignment(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Assign a Room to a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    room := *openapiclient.NewRoom() // Room | The reservation must still be reserved to use this operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostRoomAssignment(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostRoomAssignment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomAssignment`: AssignedRoom
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostRoomAssignment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomAssignmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **room** | [**Room**](Room.md) | The reservation must still be reserved to use this operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AssignedRoom**](AssignedRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomKey

> RoomKeyDetails PostRoomKey(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomKey(roomKey).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Requests room key(s)



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomKey := *openapiclient.NewRoomKey() // RoomKey | Request for generation of room key.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostRoomKey(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomKey(roomKey).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostRoomKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomKey`: RoomKeyDetails
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostRoomKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomKey** | [**RoomKey**](RoomKey.md) | Request for generation of room key. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomKeyDetails**](RoomKeyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostServiceRequests

> Status PostServiceRequests(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestsInfo(serviceRequestsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Service Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestsInfo := *openapiclient.NewServiceRequestsInfo() // ServiceRequestsInfo | Add new service request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostServiceRequests(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestsInfo(serviceRequestsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostServiceRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostServiceRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostServiceRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostServiceRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestsInfo** | [**ServiceRequestsInfo**](ServiceRequestsInfo.md) | Add new service request. | 
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


## PostWakeUpCall

> Status PostWakeUpCall(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WakeUpCalls(wakeUpCalls).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Wake Up Call



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    wakeUpCalls := *openapiclient.NewWakeUpCalls() // WakeUpCalls | Request to create a wake up call.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PostWakeUpCall(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WakeUpCalls(wakeUpCalls).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PostWakeUpCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostWakeUpCall`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PostWakeUpCall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostWakeUpCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **wakeUpCalls** | [**WakeUpCalls**](WakeUpCalls.md) | Request to create a wake up call. | 
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


## ProcessBatchCCAuth

> BatchCCAuthToProcess ProcessBatchCCAuth(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchCCAuth(batchCCAuth).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process batch CC Auth



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchCCAuth := *openapiclient.NewBatchCCAuth() // BatchCCAuth | Request to start a batch job that will process a list of reservation, and their associated payment methods, that require credit card authorizations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.ProcessBatchCCAuth(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchCCAuth(batchCCAuth).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.ProcessBatchCCAuth``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessBatchCCAuth`: BatchCCAuthToProcess
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.ProcessBatchCCAuth`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessBatchCCAuthRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchCCAuth** | [**BatchCCAuth**](BatchCCAuth.md) | Request to start a batch job that will process a list of reservation, and their associated payment methods, that require credit card authorizations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BatchCCAuthToProcess**](BatchCCAuthToProcess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutDailyDocket

> Status PutDailyDocket(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyDocket(dailyDocket).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Daily Docket 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyDocket := *openapiclient.NewDailyDocket() // DailyDocket | Change log book entries.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutDailyDocket(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyDocket(dailyDocket).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutDailyDocket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDailyDocket`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutDailyDocket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutDailyDocketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyDocket** | [**DailyDocket**](DailyDocket.md) | Change log book entries. | 
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


## PutReservationQueuePriority

> ReservationQueuePriority PutReservationQueuePriority(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationQueuePriorityNumber(reservationQueuePriorityNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the reservation queue priority



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationQueuePriorityNumber := *openapiclient.NewReservationQueuePriorityNumber() // ReservationQueuePriorityNumber | Request to change the current priority of a reservation in Queue for Check-In.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutReservationQueuePriority(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationQueuePriorityNumber(reservationQueuePriorityNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutReservationQueuePriority``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationQueuePriority`: ReservationQueuePriority
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutReservationQueuePriority`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationQueuePriorityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationQueuePriorityNumber** | [**ReservationQueuePriorityNumber**](ReservationQueuePriorityNumber.md) | Request to change the current priority of a reservation in Queue for Check-In. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationQueuePriority**](ReservationQueuePriority.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoomInterfaceStatus

> Status PutRoomInterfaceStatus(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationInterface(reservationInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change room interface status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    interfaceId := "interfaceId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationInterface := *openapiclient.NewReservationInterface() // ReservationInterface | Request to change the interface status for a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutRoomInterfaceStatus(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationInterface(reservationInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutRoomInterfaceStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomInterfaceStatus`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutRoomInterfaceStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomInterfaceStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationInterface** | [**ReservationInterface**](ReservationInterface.md) | Request to change the interface status for a reservation. | 
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


## PutRoomKeys

> UpdateRoomKeys PutRoomKeys(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomKeys(roomKeys).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update room keys.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomKeys := *openapiclient.NewRoomKeyMultipleGuests() // RoomKeyMultipleGuests | Room key information
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutRoomKeys(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomKeys(roomKeys).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutRoomKeys``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomKeys`: UpdateRoomKeys
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutRoomKeys`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomKeysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomKeys** | [**RoomKeyMultipleGuests**](RoomKeyMultipleGuests.md) | Room key information | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UpdateRoomKeys**](UpdateRoomKeys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutServiceRequests

> Status PutServiceRequests(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestsInfo(serviceRequestsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Service Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestsInfo := *openapiclient.NewServiceRequestsInfo() // ServiceRequestsInfo | Change service requests.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutServiceRequests(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestsInfo(serviceRequestsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutServiceRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutServiceRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutServiceRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutServiceRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestsInfo** | [**ServiceRequestsInfo**](ServiceRequestsInfo.md) | Change service requests. | 
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


## PutWakeUpCall

> ChangedWakeUpCalls PutWakeUpCall(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WakeUpCalls(wakeUpCalls).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Wake Up Call



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    wakeUpCalls := *openapiclient.NewWakeUpCalls() // WakeUpCalls | Request to change a wake up call.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.PutWakeUpCall(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WakeUpCalls(wakeUpCalls).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.PutWakeUpCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutWakeUpCall`: ChangedWakeUpCalls
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.PutWakeUpCall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutWakeUpCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **wakeUpCalls** | [**WakeUpCalls**](WakeUpCalls.md) | Request to change a wake up call. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedWakeUpCalls**](ChangedWakeUpCalls.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReadRoomKey

> RoomKeyStatus ReadRoomKey(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EncoderTerminal(encoderTerminal).EncoderId(encoderId).EncoderIdContext(encoderIdContext).EncoderIdType(encoderIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Read room key



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    encoderTerminal := "encoderTerminal_example" // string |  (optional)
    encoderId := "encoderId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    encoderIdContext := "encoderIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    encoderIdType := "encoderIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.ReadRoomKey(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EncoderTerminal(encoderTerminal).EncoderId(encoderId).EncoderIdContext(encoderIdContext).EncoderIdType(encoderIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.ReadRoomKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReadRoomKey`: RoomKeyStatus
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.ReadRoomKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReadRoomKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **encoderTerminal** | **string** |  | 
 **encoderId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **encoderIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **encoderIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomKeyStatus**](RoomKeyStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReleaseRoomsOnHold

> Status ReleaseRoomsOnHold(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldRooms(holdRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Release Rooms On Hold



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    holdRooms := *openapiclient.NewHoldRooms() // HoldRooms | Request to release rooms from being held.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.ReleaseRoomsOnHold(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HoldRooms(holdRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.ReleaseRoomsOnHold``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReleaseRoomsOnHold`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.ReleaseRoomsOnHold`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReleaseRoomsOnHoldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **holdRooms** | [**HoldRooms**](HoldRooms.md) | Request to release rooms from being held. | 
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


## ShiftRooms

> Status ShiftRooms(ctx, hotelId, sourceReservationId, targetReservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ShiftRooms(shiftRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation for Shift Rooms between two reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    sourceReservationId := "sourceReservationId_example" // string | 
    targetReservationId := "targetReservationId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    shiftRooms := *openapiclient.NewShiftRooms() // ShiftRooms | Request to Shift Rooms between two selected reservations (from the same property), that are for the same arrival date and room type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.ShiftRooms(context.Background(), hotelId, sourceReservationId, targetReservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ShiftRooms(shiftRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.ShiftRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShiftRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.ShiftRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**sourceReservationId** | **string** |  | 
**targetReservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiShiftRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **shiftRooms** | [**ShiftRooms**](ShiftRooms.md) | Request to Shift Rooms between two selected reservations (from the same property), that are for the same arrival date and room type. | 
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


## SwapRooms

> Status SwapRooms(ctx, hotelId, sourceReservationId, targetReservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SwapRooms(swapRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation for Swap/Shift Rooms between two reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    sourceReservationId := "sourceReservationId_example" // string | 
    targetReservationId := "targetReservationId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    swapRooms := *openapiclient.NewSwapRooms() // SwapRooms | Request to Swap Rooms between two selected reservations (from the same property), that are for the same arrival date and room type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.SwapRooms(context.Background(), hotelId, sourceReservationId, targetReservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SwapRooms(swapRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.SwapRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SwapRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.SwapRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**sourceReservationId** | **string** |  | 
**targetReservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSwapRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **swapRooms** | [**SwapRooms**](SwapRooms.md) | Request to Swap Rooms between two selected reservations (from the same property), that are for the same arrival date and room type. | 
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


## VerifyCheckinReservation

> VerifiedCheckinReservation VerifyCheckinReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).VerifyCheckinInstructions(verifyCheckinInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Verify checkin reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    verifyCheckinInstructions := []string{"VerifyCheckinInstructions_example"} // []string | Instruction to exclude suggested rooms. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsAPI.VerifyCheckinReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).VerifyCheckinInstructions(verifyCheckinInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsAPI.VerifyCheckinReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyCheckinReservation`: VerifiedCheckinReservation
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsAPI.VerifyCheckinReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyCheckinReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **verifyCheckinInstructions** | **[]string** | Instruction to exclude suggested rooms. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**VerifiedCheckinReservation**](VerifiedCheckinReservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

