# RoomKeyMultipleGuests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyOptions** | Pointer to **string** |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**RoomKeyGuests** | Pointer to [**[]RoomKeyGuest**](RoomKeyGuest.md) | Collection of of Room key guests for multiple guest room key functionality. | [optional] 
**RoomNumber** | Pointer to **string** | A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys. | [optional] 

## Methods

### NewRoomKeyMultipleGuests

`func NewRoomKeyMultipleGuests() *RoomKeyMultipleGuests`

NewRoomKeyMultipleGuests instantiates a new RoomKeyMultipleGuests object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyMultipleGuestsWithDefaults

`func NewRoomKeyMultipleGuestsWithDefaults() *RoomKeyMultipleGuests`

NewRoomKeyMultipleGuestsWithDefaults instantiates a new RoomKeyMultipleGuests object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyOptions

`func (o *RoomKeyMultipleGuests) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeyMultipleGuests) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeyMultipleGuests) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeyMultipleGuests) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RoomKeyMultipleGuests) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomKeyMultipleGuests) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomKeyMultipleGuests) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomKeyMultipleGuests) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRoomKeyGuests

`func (o *RoomKeyMultipleGuests) GetRoomKeyGuests() []RoomKeyGuest`

GetRoomKeyGuests returns the RoomKeyGuests field if non-nil, zero value otherwise.

### GetRoomKeyGuestsOk

`func (o *RoomKeyMultipleGuests) GetRoomKeyGuestsOk() (*[]RoomKeyGuest, bool)`

GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyGuests

`func (o *RoomKeyMultipleGuests) SetRoomKeyGuests(v []RoomKeyGuest)`

SetRoomKeyGuests sets RoomKeyGuests field to given value.

### HasRoomKeyGuests

`func (o *RoomKeyMultipleGuests) HasRoomKeyGuests() bool`

HasRoomKeyGuests returns a boolean if a field has been set.

### GetRoomNumber

`func (o *RoomKeyMultipleGuests) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *RoomKeyMultipleGuests) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *RoomKeyMultipleGuests) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *RoomKeyMultipleGuests) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


