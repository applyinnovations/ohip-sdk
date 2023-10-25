# PutRoomOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideOwnerExclusive** | Pointer to **bool** | Indicate to override the Owner Exclusive flag in room ownership records with overlapping dates | [optional] [default to false]
**RoomOwners** | Pointer to [**RoomOwnershipsList**](RoomOwnershipsList.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRoomOwnerRequest

`func NewPutRoomOwnerRequest() *PutRoomOwnerRequest`

NewPutRoomOwnerRequest instantiates a new PutRoomOwnerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomOwnerRequestWithDefaults

`func NewPutRoomOwnerRequestWithDefaults() *PutRoomOwnerRequest`

NewPutRoomOwnerRequestWithDefaults instantiates a new PutRoomOwnerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideOwnerExclusive

`func (o *PutRoomOwnerRequest) GetOverrideOwnerExclusive() bool`

GetOverrideOwnerExclusive returns the OverrideOwnerExclusive field if non-nil, zero value otherwise.

### GetOverrideOwnerExclusiveOk

`func (o *PutRoomOwnerRequest) GetOverrideOwnerExclusiveOk() (*bool, bool)`

GetOverrideOwnerExclusiveOk returns a tuple with the OverrideOwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOwnerExclusive

`func (o *PutRoomOwnerRequest) SetOverrideOwnerExclusive(v bool)`

SetOverrideOwnerExclusive sets OverrideOwnerExclusive field to given value.

### HasOverrideOwnerExclusive

`func (o *PutRoomOwnerRequest) HasOverrideOwnerExclusive() bool`

HasOverrideOwnerExclusive returns a boolean if a field has been set.

### GetRoomOwners

`func (o *PutRoomOwnerRequest) GetRoomOwners() RoomOwnershipsList`

GetRoomOwners returns the RoomOwners field if non-nil, zero value otherwise.

### GetRoomOwnersOk

`func (o *PutRoomOwnerRequest) GetRoomOwnersOk() (*RoomOwnershipsList, bool)`

GetRoomOwnersOk returns a tuple with the RoomOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwners

`func (o *PutRoomOwnerRequest) SetRoomOwners(v RoomOwnershipsList)`

SetRoomOwners sets RoomOwners field to given value.

### HasRoomOwners

`func (o *PutRoomOwnerRequest) HasRoomOwners() bool`

HasRoomOwners returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomOwnerRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomOwnerRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomOwnerRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomOwnerRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


