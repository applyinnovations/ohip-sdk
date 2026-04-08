# BlockRestrictionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BlockRestriction** | Pointer to [**[]BlockRestrictionType**](BlockRestrictionType.md) | Block restriction details. | [optional] 
**HotelId** | Pointer to **string** | Hotel to which the block belongs to. | [optional] 

## Methods

### NewBlockRestrictionsType

`func NewBlockRestrictionsType() *BlockRestrictionsType`

NewBlockRestrictionsType instantiates a new BlockRestrictionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRestrictionsTypeWithDefaults

`func NewBlockRestrictionsTypeWithDefaults() *BlockRestrictionsType`

NewBlockRestrictionsTypeWithDefaults instantiates a new BlockRestrictionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BlockRestrictionsType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockRestrictionsType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockRestrictionsType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockRestrictionsType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockRestriction

`func (o *BlockRestrictionsType) GetBlockRestriction() []BlockRestrictionType`

GetBlockRestriction returns the BlockRestriction field if non-nil, zero value otherwise.

### GetBlockRestrictionOk

`func (o *BlockRestrictionsType) GetBlockRestrictionOk() (*[]BlockRestrictionType, bool)`

GetBlockRestrictionOk returns a tuple with the BlockRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRestriction

`func (o *BlockRestrictionsType) SetBlockRestriction(v []BlockRestrictionType)`

SetBlockRestriction sets BlockRestriction field to given value.

### HasBlockRestriction

`func (o *BlockRestrictionsType) HasBlockRestriction() bool`

HasBlockRestriction returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockRestrictionsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockRestrictionsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockRestrictionsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockRestrictionsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


