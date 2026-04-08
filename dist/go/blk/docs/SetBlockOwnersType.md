# SetBlockOwnersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the business block | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Ownership** | Pointer to [**BlockOwnershipType**](BlockOwnershipType.md) |  | [optional] 
**BlockOwners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 

## Methods

### NewSetBlockOwnersType

`func NewSetBlockOwnersType() *SetBlockOwnersType`

NewSetBlockOwnersType instantiates a new SetBlockOwnersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetBlockOwnersTypeWithDefaults

`func NewSetBlockOwnersTypeWithDefaults() *SetBlockOwnersType`

NewSetBlockOwnersTypeWithDefaults instantiates a new SetBlockOwnersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *SetBlockOwnersType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SetBlockOwnersType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SetBlockOwnersType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SetBlockOwnersType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockIdList

`func (o *SetBlockOwnersType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *SetBlockOwnersType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *SetBlockOwnersType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *SetBlockOwnersType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetOwnership

`func (o *SetBlockOwnersType) GetOwnership() BlockOwnershipType`

GetOwnership returns the Ownership field if non-nil, zero value otherwise.

### GetOwnershipOk

`func (o *SetBlockOwnersType) GetOwnershipOk() (*BlockOwnershipType, bool)`

GetOwnershipOk returns a tuple with the Ownership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnership

`func (o *SetBlockOwnersType) SetOwnership(v BlockOwnershipType)`

SetOwnership sets Ownership field to given value.

### HasOwnership

`func (o *SetBlockOwnersType) HasOwnership() bool`

HasOwnership returns a boolean if a field has been set.

### GetBlockOwners

`func (o *SetBlockOwnersType) GetBlockOwners() BlockOwnersType`

GetBlockOwners returns the BlockOwners field if non-nil, zero value otherwise.

### GetBlockOwnersOk

`func (o *SetBlockOwnersType) GetBlockOwnersOk() (*BlockOwnersType, bool)`

GetBlockOwnersOk returns a tuple with the BlockOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOwners

`func (o *SetBlockOwnersType) SetBlockOwners(v BlockOwnersType)`

SetBlockOwners sets BlockOwners field to given value.

### HasBlockOwners

`func (o *SetBlockOwnersType) HasBlockOwners() bool`

HasBlockOwners returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


