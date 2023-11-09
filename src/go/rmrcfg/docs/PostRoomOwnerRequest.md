# PostRoomOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideOwnerExclusive** | Pointer to **bool** | Indicate to override the Owner Exclusive flag in room ownership records with overlapping dates | [optional] [default to false]
**RoomOwner** | Pointer to [**RoomOwnershipType**](RoomOwnershipType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomOwnerRequest

`func NewPostRoomOwnerRequest() *PostRoomOwnerRequest`

NewPostRoomOwnerRequest instantiates a new PostRoomOwnerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomOwnerRequestWithDefaults

`func NewPostRoomOwnerRequestWithDefaults() *PostRoomOwnerRequest`

NewPostRoomOwnerRequestWithDefaults instantiates a new PostRoomOwnerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideOwnerExclusive

`func (o *PostRoomOwnerRequest) GetOverrideOwnerExclusive() bool`

GetOverrideOwnerExclusive returns the OverrideOwnerExclusive field if non-nil, zero value otherwise.

### GetOverrideOwnerExclusiveOk

`func (o *PostRoomOwnerRequest) GetOverrideOwnerExclusiveOk() (*bool, bool)`

GetOverrideOwnerExclusiveOk returns a tuple with the OverrideOwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOwnerExclusive

`func (o *PostRoomOwnerRequest) SetOverrideOwnerExclusive(v bool)`

SetOverrideOwnerExclusive sets OverrideOwnerExclusive field to given value.

### HasOverrideOwnerExclusive

`func (o *PostRoomOwnerRequest) HasOverrideOwnerExclusive() bool`

HasOverrideOwnerExclusive returns a boolean if a field has been set.

### GetRoomOwner

`func (o *PostRoomOwnerRequest) GetRoomOwner() RoomOwnershipType`

GetRoomOwner returns the RoomOwner field if non-nil, zero value otherwise.

### GetRoomOwnerOk

`func (o *PostRoomOwnerRequest) GetRoomOwnerOk() (*RoomOwnershipType, bool)`

GetRoomOwnerOk returns a tuple with the RoomOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwner

`func (o *PostRoomOwnerRequest) SetRoomOwner(v RoomOwnershipType)`

SetRoomOwner sets RoomOwner field to given value.

### HasRoomOwner

`func (o *PostRoomOwnerRequest) HasRoomOwner() bool`

HasRoomOwner returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomOwnerRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomOwnerRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomOwnerRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomOwnerRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


