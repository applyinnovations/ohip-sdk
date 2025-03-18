# BlockOwnersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** | Pointer to [**[]BlockOwnerType**](BlockOwnerType.md) |  | [optional] 
**LockBlockOwners** | Pointer to **bool** | When this flag is true, the logged in user cannot modify the existing block owners for the current block. | [optional] 
**LockRoomsOwners** | Pointer to **bool** | When this flag is true, the logged in user cannot modify the existing room owners for the current block. | [optional] 
**LockCateringOwners** | Pointer to **bool** | When this flag is true, the logged in user cannot modify the existing catering owners for the current block. | [optional] 

## Methods

### NewBlockOwnersType

`func NewBlockOwnersType() *BlockOwnersType`

NewBlockOwnersType instantiates a new BlockOwnersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockOwnersTypeWithDefaults

`func NewBlockOwnersTypeWithDefaults() *BlockOwnersType`

NewBlockOwnersTypeWithDefaults instantiates a new BlockOwnersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwner

`func (o *BlockOwnersType) GetOwner() []BlockOwnerType`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *BlockOwnersType) GetOwnerOk() (*[]BlockOwnerType, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *BlockOwnersType) SetOwner(v []BlockOwnerType)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *BlockOwnersType) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetLockBlockOwners

`func (o *BlockOwnersType) GetLockBlockOwners() bool`

GetLockBlockOwners returns the LockBlockOwners field if non-nil, zero value otherwise.

### GetLockBlockOwnersOk

`func (o *BlockOwnersType) GetLockBlockOwnersOk() (*bool, bool)`

GetLockBlockOwnersOk returns a tuple with the LockBlockOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockBlockOwners

`func (o *BlockOwnersType) SetLockBlockOwners(v bool)`

SetLockBlockOwners sets LockBlockOwners field to given value.

### HasLockBlockOwners

`func (o *BlockOwnersType) HasLockBlockOwners() bool`

HasLockBlockOwners returns a boolean if a field has been set.

### GetLockRoomsOwners

`func (o *BlockOwnersType) GetLockRoomsOwners() bool`

GetLockRoomsOwners returns the LockRoomsOwners field if non-nil, zero value otherwise.

### GetLockRoomsOwnersOk

`func (o *BlockOwnersType) GetLockRoomsOwnersOk() (*bool, bool)`

GetLockRoomsOwnersOk returns a tuple with the LockRoomsOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockRoomsOwners

`func (o *BlockOwnersType) SetLockRoomsOwners(v bool)`

SetLockRoomsOwners sets LockRoomsOwners field to given value.

### HasLockRoomsOwners

`func (o *BlockOwnersType) HasLockRoomsOwners() bool`

HasLockRoomsOwners returns a boolean if a field has been set.

### GetLockCateringOwners

`func (o *BlockOwnersType) GetLockCateringOwners() bool`

GetLockCateringOwners returns the LockCateringOwners field if non-nil, zero value otherwise.

### GetLockCateringOwnersOk

`func (o *BlockOwnersType) GetLockCateringOwnersOk() (*bool, bool)`

GetLockCateringOwnersOk returns a tuple with the LockCateringOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockCateringOwners

`func (o *BlockOwnersType) SetLockCateringOwners(v bool)`

SetLockCateringOwners sets LockCateringOwners field to given value.

### HasLockCateringOwners

`func (o *BlockOwnersType) HasLockCateringOwners() bool`

HasLockCateringOwners returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


