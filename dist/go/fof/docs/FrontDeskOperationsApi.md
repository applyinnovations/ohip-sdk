# \FrontDeskOperationsApi

All URIs are relative to */fof/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetFulfillmentActivityLog**](FrontDeskOperationsApi.md#GetFulfillmentActivityLog) | **Get** /hotels/{hotelId}/fulfillmentActivityLogs | Get the fullfillment activity log
[**GetHotelRooms**](FrontDeskOperationsApi.md#GetHotelRooms) | **Get** /hotels/{hotelId}/rooms | Get hotel available rooms
[**GetReservationSummaries**](FrontDeskOperationsApi.md#GetReservationSummaries) | **Get** /hotels/{hotelId}/reservationSummaries | Get hotel reservation summaries
[**GetRoomKeys**](FrontDeskOperationsApi.md#GetRoomKeys) | **Get** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Fetch the room keys
[**PostCheckIn**](FrontDeskOperationsApi.md#PostCheckIn) | **Post** /hotels/{hotelId}/reservations/{reservationId}/checkIns | Checks in a guest
[**PostRoomKey**](FrontDeskOperationsApi.md#PostRoomKey) | **Post** /hotels/{hotelId}/reservations/{reservationId}/roomKeys | Requests room key(s)



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.GetFulfillmentActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIds(userByIds).UserForIds(userForIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.GetFulfillmentActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFulfillmentActivityLog`: ActivityLog
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.GetFulfillmentActivityLog`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
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
    departureTime := "departureTime_example" // string | When IncludeDueOut is enable,it is the departure time before which to search. (optional)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    dateCriteriaExpectedArrivalEndTime := "dateCriteriaExpectedArrivalEndTime_example" // string | The ending value of the time span. (optional)
    dateCriteriaExpectedArrivalStartTime := "dateCriteriaExpectedArrivalStartTime_example" // string | The starting value of the time span. (optional)
    depositDueDateEnd := time.Now() // string | The ending value of the date range. (optional)
    depositDueDateStart := time.Now() // string | The starting value of the date range. (optional)
    expectedReturnEndTime := "expectedReturnEndTime_example" // string | The ending value of the time span. (optional)
    expectedReturnStartTime := "expectedReturnStartTime_example" // string | The starting value of the time span. (optional)
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FrontDeskOperationsApi.GetReservationSummaries(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SearchType(searchType).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).StayOnEnd(stayOnEnd).StayOnStart(stayOnStart).CreatedOnEnd(createdOnEnd).CreateOnStart(createOnStart).DepositDateEnd(depositDateEnd).DepositDateStart(depositDateStart).DateCriteriaExpectedArrivalEndTime(dateCriteriaExpectedArrivalEndTime).DateCriteriaExpectedArrivalStartTime(dateCriteriaExpectedArrivalStartTime).DepositDueDateEnd(depositDueDateEnd).DepositDueDateStart(depositDueDateStart).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).MembershipNumber(membershipNumber).AnyVIPStatus(anyVIPStatus).VipStatusCodes(vipStatusCodes).RoomId(roomId).LastName(lastName).FirstName(firstName).BlockCode(blockCode).CompanyName(companyName).TravelAgentName(travelAgentName).CreditCardNumber(creditCardNumber).CustomReference(customReference).ExternalReference(externalReference).AttributeName(attributeName).OrderType(orderType).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).RoomTypes(roomTypes).RoomStatuses(roomStatuses).PaymentMethod(paymentMethod).Indicator(indicator).FetchSummaryInstructions(fetchSummaryInstructions).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FrontDeskOperationsApi.GetReservationSummaries``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationSummaries`: ShortReservation
    fmt.Fprintf(os.Stdout, "Response from `FrontDeskOperationsApi.GetReservationSummaries`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
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
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
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

