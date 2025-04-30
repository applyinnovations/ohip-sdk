# CreateRoomOwnerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwner** | Pointer to [**RoomOwnershipType**](RoomOwnershipType.md) |  | [optional] 
**OverrideOwnerExclusive** | Pointer to **bool** | Indicate to override the Owner Exclusive flag in room ownership records with overlapping dates | [optional] [default to false]
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateRoomOwnerDetails

`func NewCreateRoomOwnerDetails() *CreateRoomOwnerDetails`

NewCreateRoomOwnerDetails instantiates a new CreateRoomOwnerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRoomOwnerDetailsWithDefaults

`func NewCreateRoomOwnerDetailsWithDefaults() *CreateRoomOwnerDetails`

NewCreateRoomOwnerDetailsWithDefaults instantiates a new CreateRoomOwnerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwner

`func (o *CreateRoomOwnerDetails) GetRoomOwner() RoomOwnershipType`

GetRoomOwner returns the RoomOwner field if non-nil, zero value otherwise.

### GetRoomOwnerOk

`func (o *CreateRoomOwnerDetails) GetRoomOwnerOk() (*RoomOwnershipType, bool)`

GetRoomOwnerOk returns a tuple with the RoomOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwner

`func (o *CreateRoomOwnerDetails) SetRoomOwner(v RoomOwnershipType)`

SetRoomOwner sets RoomOwner field to given value.

### HasRoomOwner

`func (o *CreateRoomOwnerDetails) HasRoomOwner() bool`

HasRoomOwner returns a boolean if a field has been set.

### GetOverrideOwnerExclusive

`func (o *CreateRoomOwnerDetails) GetOverrideOwnerExclusive() bool`

GetOverrideOwnerExclusive returns the OverrideOwnerExclusive field if non-nil, zero value otherwise.

### GetOverrideOwnerExclusiveOk

`func (o *CreateRoomOwnerDetails) GetOverrideOwnerExclusiveOk() (*bool, bool)`

GetOverrideOwnerExclusiveOk returns a tuple with the OverrideOwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOwnerExclusive

`func (o *CreateRoomOwnerDetails) SetOverrideOwnerExclusive(v bool)`

SetOverrideOwnerExclusive sets OverrideOwnerExclusive field to given value.

### HasOverrideOwnerExclusive

`func (o *CreateRoomOwnerDetails) HasOverrideOwnerExclusive() bool`

HasOverrideOwnerExclusive returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateRoomOwnerDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateRoomOwnerDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateRoomOwnerDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateRoomOwnerDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


