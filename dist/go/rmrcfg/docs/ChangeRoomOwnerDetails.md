# ChangeRoomOwnerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwners** | Pointer to [**RoomOwnershipsList**](RoomOwnershipsList.md) |  | [optional] 
**OverrideOwnerExclusive** | Pointer to **bool** | Indicate to override the Owner Exclusive flag in room ownership records with overlapping dates | [optional] [default to false]
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeRoomOwnerDetails

`func NewChangeRoomOwnerDetails() *ChangeRoomOwnerDetails`

NewChangeRoomOwnerDetails instantiates a new ChangeRoomOwnerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRoomOwnerDetailsWithDefaults

`func NewChangeRoomOwnerDetailsWithDefaults() *ChangeRoomOwnerDetails`

NewChangeRoomOwnerDetailsWithDefaults instantiates a new ChangeRoomOwnerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwners

`func (o *ChangeRoomOwnerDetails) GetRoomOwners() RoomOwnershipsList`

GetRoomOwners returns the RoomOwners field if non-nil, zero value otherwise.

### GetRoomOwnersOk

`func (o *ChangeRoomOwnerDetails) GetRoomOwnersOk() (*RoomOwnershipsList, bool)`

GetRoomOwnersOk returns a tuple with the RoomOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwners

`func (o *ChangeRoomOwnerDetails) SetRoomOwners(v RoomOwnershipsList)`

SetRoomOwners sets RoomOwners field to given value.

### HasRoomOwners

`func (o *ChangeRoomOwnerDetails) HasRoomOwners() bool`

HasRoomOwners returns a boolean if a field has been set.

### GetOverrideOwnerExclusive

`func (o *ChangeRoomOwnerDetails) GetOverrideOwnerExclusive() bool`

GetOverrideOwnerExclusive returns the OverrideOwnerExclusive field if non-nil, zero value otherwise.

### GetOverrideOwnerExclusiveOk

`func (o *ChangeRoomOwnerDetails) GetOverrideOwnerExclusiveOk() (*bool, bool)`

GetOverrideOwnerExclusiveOk returns a tuple with the OverrideOwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOwnerExclusive

`func (o *ChangeRoomOwnerDetails) SetOverrideOwnerExclusive(v bool)`

SetOverrideOwnerExclusive sets OverrideOwnerExclusive field to given value.

### HasOverrideOwnerExclusive

`func (o *ChangeRoomOwnerDetails) HasOverrideOwnerExclusive() bool`

HasOverrideOwnerExclusive returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRoomOwnerDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRoomOwnerDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRoomOwnerDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRoomOwnerDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


