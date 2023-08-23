# \FrontDeskOperationsApi

All URIs are relative to */fof/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetHotelRooms**](FrontDeskOperationsApi.md#GetHotelRooms) | **Get** /hotels/{hotelId}/rooms | Get hotel available rooms
[**GetRoomKeys**](FrontDeskOperationsApi.md#GetRoomKeys) | **Get** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Fetch the room keys
[**PostCheckIn**](FrontDeskOperationsApi.md#PostCheckIn) | **Post** /hotels/{hotelId}/reservations/{reservationId}/checkIns | Checks in a guest
[**PostRoomKey**](FrontDeskOperationsApi.md#PostRoomKey) | **Post** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Requests room key(s)



## GetHotelRooms

> HotelRooms GetHotelRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).HotelRoomStartDate(hotelRoomStartDate).HotelRoomEndDate(hotelRoomEndDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).RoomFeatureCode(roomFeatureCode).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel available rooms



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
    departureTime := time.Now() // time.Time | When IncludeDueOut is enable,it is the departure time before which to search. (optional)
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
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    pseudoRoomsOnly := true // bool | This flag when set to true will include only pseudo rooms (optional)
    includeAttendentInRoom := true // bool | This flag when set to true will includes attendent in Rooms (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.GetHotelRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberWildcard(roomNumberWildcard).HotelRoomStatus(hotelRoomStatus).HotelFORoomStatus(hotelFORoomStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).HotelRoomStartDate(hotelRoomStartDate).HotelRoomEndDate(hotelRoomEndDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).Floor(floor).IncludeDueOut(includeDueOut).DepartureTime(departureTime).RoomFeatureCode(roomFeatureCode).Description(description).OrderSequence(orderSequence).Quantity(quantity).SmokingPreference(smokingPreference).IncludeAllRoomConditions(includeAllRoomConditions).IncludeComponentRooms(includeComponentRooms).IncludePseudoRooms(includePseudoRooms).IncludeOORoomCheck(includeOORoomCheck).ConnectingRoomsOnly(connectingRoomsOnly).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).PseudoRoomsOnly(pseudoRoomsOnly).IncludeAttendentInRoom(includeAttendentInRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.GetHotelRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelRooms`: HotelRooms
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.GetHotelRooms`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
 **departureTime** | **time.Time** | When IncludeDueOut is enable,it is the departure time before which to search. | 
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
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **pseudoRoomsOnly** | **bool** | This flag when set to true will include only pseudo rooms | 
 **includeAttendentInRoom** | **bool** | This flag when set to true will includes attendent in Rooms | 
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.GetRoomKeys(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.GetRoomKeys``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomKeys`: RoomKeyInfo
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.GetRoomKeys`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is being booked
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservation := *openapiclient.NewPostCheckInRequest() // PostCheckInRequest | Validation checks includes the following: - Reservation is not valid to be checked in. - Split is still required before the reservation can be checked in. - Room information is missing. - Payment information is missing. - The status of the room needs to be reviewed. - Sharers was impacted. The check-in process affected the reservation details of shared guests on the reservation. - Sharers was not impacted. The check-in process has not affected the reservation details of shared guests on the reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.PostCheckIn(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reservation(reservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.PostCheckIn``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCheckIn`: CheckedinReservation
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.PostCheckIn`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomKey := *openapiclient.NewPostRoomKeyRequest() // PostRoomKeyRequest | Request for generation of room key.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.PostRoomKey(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomKey(roomKey).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.PostRoomKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomKey`: RoomKeyDetails
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.PostRoomKey`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomKey** | [**PostRoomKeyRequest**](PostRoomKeyRequest.md) | Request for generation of room key. | 
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

