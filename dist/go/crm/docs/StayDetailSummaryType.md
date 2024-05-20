# StayDetailSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalRooms** | Pointer to **int32** |  | [optional] 
**CancelRooms** | Pointer to **int32** |  | [optional] 
**DayUseRooms** | Pointer to **int32** |  | [optional] 
**NoShowRooms** | Pointer to **int32** |  | [optional] 
**RoomNights** | Pointer to **int32** |  | [optional] 
**StayReservation** | Pointer to [**StayReservationType**](StayReservationType.md) |  | [optional] 
**TotalBooked** | Pointer to **int32** | Total Booked Stays/Reservations for Profile | [optional] 
**TotalStays** | Pointer to **int32** | Total Stayed Reservations for Profile | [optional] 

## Methods

### NewStayDetailSummaryType

`func NewStayDetailSummaryType() *StayDetailSummaryType`

NewStayDetailSummaryType instantiates a new StayDetailSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayDetailSummaryTypeWithDefaults

`func NewStayDetailSummaryTypeWithDefaults() *StayDetailSummaryType`

NewStayDetailSummaryTypeWithDefaults instantiates a new StayDetailSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalRooms

`func (o *StayDetailSummaryType) GetArrivalRooms() int32`

GetArrivalRooms returns the ArrivalRooms field if non-nil, zero value otherwise.

### GetArrivalRoomsOk

`func (o *StayDetailSummaryType) GetArrivalRoomsOk() (*int32, bool)`

GetArrivalRoomsOk returns a tuple with the ArrivalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalRooms

`func (o *StayDetailSummaryType) SetArrivalRooms(v int32)`

SetArrivalRooms sets ArrivalRooms field to given value.

### HasArrivalRooms

`func (o *StayDetailSummaryType) HasArrivalRooms() bool`

HasArrivalRooms returns a boolean if a field has been set.

### GetCancelRooms

`func (o *StayDetailSummaryType) GetCancelRooms() int32`

GetCancelRooms returns the CancelRooms field if non-nil, zero value otherwise.

### GetCancelRoomsOk

`func (o *StayDetailSummaryType) GetCancelRoomsOk() (*int32, bool)`

GetCancelRoomsOk returns a tuple with the CancelRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelRooms

`func (o *StayDetailSummaryType) SetCancelRooms(v int32)`

SetCancelRooms sets CancelRooms field to given value.

### HasCancelRooms

`func (o *StayDetailSummaryType) HasCancelRooms() bool`

HasCancelRooms returns a boolean if a field has been set.

### GetDayUseRooms

`func (o *StayDetailSummaryType) GetDayUseRooms() int32`

GetDayUseRooms returns the DayUseRooms field if non-nil, zero value otherwise.

### GetDayUseRoomsOk

`func (o *StayDetailSummaryType) GetDayUseRoomsOk() (*int32, bool)`

GetDayUseRoomsOk returns a tuple with the DayUseRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayUseRooms

`func (o *StayDetailSummaryType) SetDayUseRooms(v int32)`

SetDayUseRooms sets DayUseRooms field to given value.

### HasDayUseRooms

`func (o *StayDetailSummaryType) HasDayUseRooms() bool`

HasDayUseRooms returns a boolean if a field has been set.

### GetNoShowRooms

`func (o *StayDetailSummaryType) GetNoShowRooms() int32`

GetNoShowRooms returns the NoShowRooms field if non-nil, zero value otherwise.

### GetNoShowRoomsOk

`func (o *StayDetailSummaryType) GetNoShowRoomsOk() (*int32, bool)`

GetNoShowRoomsOk returns a tuple with the NoShowRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoShowRooms

`func (o *StayDetailSummaryType) SetNoShowRooms(v int32)`

SetNoShowRooms sets NoShowRooms field to given value.

### HasNoShowRooms

`func (o *StayDetailSummaryType) HasNoShowRooms() bool`

HasNoShowRooms returns a boolean if a field has been set.

### GetRoomNights

`func (o *StayDetailSummaryType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *StayDetailSummaryType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *StayDetailSummaryType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *StayDetailSummaryType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetStayReservation

`func (o *StayDetailSummaryType) GetStayReservation() StayReservationType`

GetStayReservation returns the StayReservation field if non-nil, zero value otherwise.

### GetStayReservationOk

`func (o *StayDetailSummaryType) GetStayReservationOk() (*StayReservationType, bool)`

GetStayReservationOk returns a tuple with the StayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayReservation

`func (o *StayDetailSummaryType) SetStayReservation(v StayReservationType)`

SetStayReservation sets StayReservation field to given value.

### HasStayReservation

`func (o *StayDetailSummaryType) HasStayReservation() bool`

HasStayReservation returns a boolean if a field has been set.

### GetTotalBooked

`func (o *StayDetailSummaryType) GetTotalBooked() int32`

GetTotalBooked returns the TotalBooked field if non-nil, zero value otherwise.

### GetTotalBookedOk

`func (o *StayDetailSummaryType) GetTotalBookedOk() (*int32, bool)`

GetTotalBookedOk returns a tuple with the TotalBooked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalBooked

`func (o *StayDetailSummaryType) SetTotalBooked(v int32)`

SetTotalBooked sets TotalBooked field to given value.

### HasTotalBooked

`func (o *StayDetailSummaryType) HasTotalBooked() bool`

HasTotalBooked returns a boolean if a field has been set.

### GetTotalStays

`func (o *StayDetailSummaryType) GetTotalStays() int32`

GetTotalStays returns the TotalStays field if non-nil, zero value otherwise.

### GetTotalStaysOk

`func (o *StayDetailSummaryType) GetTotalStaysOk() (*int32, bool)`

GetTotalStaysOk returns a tuple with the TotalStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStays

`func (o *StayDetailSummaryType) SetTotalStays(v int32)`

SetTotalStays sets TotalStays field to given value.

### HasTotalStays

`func (o *StayDetailSummaryType) HasTotalStays() bool`

HasTotalStays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


