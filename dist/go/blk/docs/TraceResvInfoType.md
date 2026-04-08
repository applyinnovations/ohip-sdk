# TraceResvInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where trace is set. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room Id | [optional] 
**RoomStatus** | Pointer to **string** | Current Room Status. | [optional] 
**ReservationStatus** | Pointer to **string** | Current Reservation Status. | [optional] 
**ReservationGuests** | Pointer to [**[]ResGuestType**](ResGuestType.md) | Collection of guests associated with the reservation. | [optional] 

## Methods

### NewTraceResvInfoType

`func NewTraceResvInfoType() *TraceResvInfoType`

NewTraceResvInfoType instantiates a new TraceResvInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceResvInfoTypeWithDefaults

`func NewTraceResvInfoTypeWithDefaults() *TraceResvInfoType`

NewTraceResvInfoTypeWithDefaults instantiates a new TraceResvInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *TraceResvInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *TraceResvInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *TraceResvInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *TraceResvInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *TraceResvInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TraceResvInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TraceResvInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TraceResvInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *TraceResvInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *TraceResvInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *TraceResvInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *TraceResvInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetRoomId

`func (o *TraceResvInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *TraceResvInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *TraceResvInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *TraceResvInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomStatus

`func (o *TraceResvInfoType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *TraceResvInfoType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *TraceResvInfoType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *TraceResvInfoType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetReservationStatus

`func (o *TraceResvInfoType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *TraceResvInfoType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *TraceResvInfoType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *TraceResvInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetReservationGuests

`func (o *TraceResvInfoType) GetReservationGuests() []ResGuestType`

GetReservationGuests returns the ReservationGuests field if non-nil, zero value otherwise.

### GetReservationGuestsOk

`func (o *TraceResvInfoType) GetReservationGuestsOk() (*[]ResGuestType, bool)`

GetReservationGuestsOk returns a tuple with the ReservationGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuests

`func (o *TraceResvInfoType) SetReservationGuests(v []ResGuestType)`

SetReservationGuests sets ReservationGuests field to given value.

### HasReservationGuests

`func (o *TraceResvInfoType) HasReservationGuests() bool`

HasReservationGuests returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


