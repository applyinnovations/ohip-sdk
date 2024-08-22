# RoomMoveDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Business date on which room is moved. | [optional] 
**Description** | Pointer to **string** | Description of why room is moved. | [optional] 
**FromRoom** | Pointer to **string** | Room from which guest is moved. | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code under which room is moved. | [optional] 
**MovedBy** | Pointer to **string** | The user who moved the guest. | [optional] 
**ReasonCode** | Pointer to **string** | Identifies the room move reason code. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ToRoom** | Pointer to **string** | Room to which guest is moved. | [optional] 

## Methods

### NewRoomMoveDetailType

`func NewRoomMoveDetailType() *RoomMoveDetailType`

NewRoomMoveDetailType instantiates a new RoomMoveDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMoveDetailTypeWithDefaults

`func NewRoomMoveDetailTypeWithDefaults() *RoomMoveDetailType`

NewRoomMoveDetailTypeWithDefaults instantiates a new RoomMoveDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *RoomMoveDetailType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *RoomMoveDetailType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *RoomMoveDetailType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *RoomMoveDetailType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDescription

`func (o *RoomMoveDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomMoveDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomMoveDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomMoveDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFromRoom

`func (o *RoomMoveDetailType) GetFromRoom() string`

GetFromRoom returns the FromRoom field if non-nil, zero value otherwise.

### GetFromRoomOk

`func (o *RoomMoveDetailType) GetFromRoomOk() (*string, bool)`

GetFromRoomOk returns a tuple with the FromRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoom

`func (o *RoomMoveDetailType) SetFromRoom(v string)`

SetFromRoom sets FromRoom field to given value.

### HasFromRoom

`func (o *RoomMoveDetailType) HasFromRoom() bool`

HasFromRoom returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomMoveDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomMoveDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomMoveDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomMoveDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMovedBy

`func (o *RoomMoveDetailType) GetMovedBy() string`

GetMovedBy returns the MovedBy field if non-nil, zero value otherwise.

### GetMovedByOk

`func (o *RoomMoveDetailType) GetMovedByOk() (*string, bool)`

GetMovedByOk returns a tuple with the MovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMovedBy

`func (o *RoomMoveDetailType) SetMovedBy(v string)`

SetMovedBy sets MovedBy field to given value.

### HasMovedBy

`func (o *RoomMoveDetailType) HasMovedBy() bool`

HasMovedBy returns a boolean if a field has been set.

### GetReasonCode

`func (o *RoomMoveDetailType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *RoomMoveDetailType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *RoomMoveDetailType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *RoomMoveDetailType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetReservationId

`func (o *RoomMoveDetailType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RoomMoveDetailType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RoomMoveDetailType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RoomMoveDetailType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetToRoom

`func (o *RoomMoveDetailType) GetToRoom() string`

GetToRoom returns the ToRoom field if non-nil, zero value otherwise.

### GetToRoomOk

`func (o *RoomMoveDetailType) GetToRoomOk() (*string, bool)`

GetToRoomOk returns a tuple with the ToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoom

`func (o *RoomMoveDetailType) SetToRoom(v string)`

SetToRoom sets ToRoom field to given value.

### HasToRoom

`func (o *RoomMoveDetailType) HasToRoom() bool`

HasToRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


