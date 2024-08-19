# SetRoomConditionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code of the room on where the condition is applied. | [optional] 
**IncludeOccupiedRooms** | Pointer to **bool** | If set to true, condition is applied even if the room is occupied. | [optional] 
**OverrideHoldRooms** | Pointer to **bool** | If set to true and the room is help by another user, then this lets the user override the room status. | [optional] 
**RoomCondition** | Pointer to [**RoomConditionType**](RoomConditionType.md) |  | [optional] 
**RoomNumberList** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSetRoomConditionType

`func NewSetRoomConditionType() *SetRoomConditionType`

NewSetRoomConditionType instantiates a new SetRoomConditionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetRoomConditionTypeWithDefaults

`func NewSetRoomConditionTypeWithDefaults() *SetRoomConditionType`

NewSetRoomConditionTypeWithDefaults instantiates a new SetRoomConditionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *SetRoomConditionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SetRoomConditionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SetRoomConditionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SetRoomConditionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeOccupiedRooms

`func (o *SetRoomConditionType) GetIncludeOccupiedRooms() bool`

GetIncludeOccupiedRooms returns the IncludeOccupiedRooms field if non-nil, zero value otherwise.

### GetIncludeOccupiedRoomsOk

`func (o *SetRoomConditionType) GetIncludeOccupiedRoomsOk() (*bool, bool)`

GetIncludeOccupiedRoomsOk returns a tuple with the IncludeOccupiedRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeOccupiedRooms

`func (o *SetRoomConditionType) SetIncludeOccupiedRooms(v bool)`

SetIncludeOccupiedRooms sets IncludeOccupiedRooms field to given value.

### HasIncludeOccupiedRooms

`func (o *SetRoomConditionType) HasIncludeOccupiedRooms() bool`

HasIncludeOccupiedRooms returns a boolean if a field has been set.

### GetOverrideHoldRooms

`func (o *SetRoomConditionType) GetOverrideHoldRooms() bool`

GetOverrideHoldRooms returns the OverrideHoldRooms field if non-nil, zero value otherwise.

### GetOverrideHoldRoomsOk

`func (o *SetRoomConditionType) GetOverrideHoldRoomsOk() (*bool, bool)`

GetOverrideHoldRoomsOk returns a tuple with the OverrideHoldRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideHoldRooms

`func (o *SetRoomConditionType) SetOverrideHoldRooms(v bool)`

SetOverrideHoldRooms sets OverrideHoldRooms field to given value.

### HasOverrideHoldRooms

`func (o *SetRoomConditionType) HasOverrideHoldRooms() bool`

HasOverrideHoldRooms returns a boolean if a field has been set.

### GetRoomCondition

`func (o *SetRoomConditionType) GetRoomCondition() RoomConditionType`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *SetRoomConditionType) GetRoomConditionOk() (*RoomConditionType, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *SetRoomConditionType) SetRoomCondition(v RoomConditionType)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *SetRoomConditionType) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetRoomNumberList

`func (o *SetRoomConditionType) GetRoomNumberList() []string`

GetRoomNumberList returns the RoomNumberList field if non-nil, zero value otherwise.

### GetRoomNumberListOk

`func (o *SetRoomConditionType) GetRoomNumberListOk() (*[]string, bool)`

GetRoomNumberListOk returns a tuple with the RoomNumberList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberList

`func (o *SetRoomConditionType) SetRoomNumberList(v []string)`

SetRoomNumberList sets RoomNumberList field to given value.

### HasRoomNumberList

`func (o *SetRoomConditionType) HasRoomNumberList() bool`

HasRoomNumberList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


