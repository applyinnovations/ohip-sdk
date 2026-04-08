# BlockRestrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRestrictions** | Pointer to [**BlockRestrictionsType**](BlockRestrictionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRestrictions

`func NewBlockRestrictions() *BlockRestrictions`

NewBlockRestrictions instantiates a new BlockRestrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRestrictionsWithDefaults

`func NewBlockRestrictionsWithDefaults() *BlockRestrictions`

NewBlockRestrictionsWithDefaults instantiates a new BlockRestrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRestrictions

`func (o *BlockRestrictions) GetBlockRestrictions() BlockRestrictionsType`

GetBlockRestrictions returns the BlockRestrictions field if non-nil, zero value otherwise.

### GetBlockRestrictionsOk

`func (o *BlockRestrictions) GetBlockRestrictionsOk() (*BlockRestrictionsType, bool)`

GetBlockRestrictionsOk returns a tuple with the BlockRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRestrictions

`func (o *BlockRestrictions) SetBlockRestrictions(v BlockRestrictionsType)`

SetBlockRestrictions sets BlockRestrictions field to given value.

### HasBlockRestrictions

`func (o *BlockRestrictions) HasBlockRestrictions() bool`

HasBlockRestrictions returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRestrictions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRestrictions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRestrictions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRestrictions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRestrictions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRestrictions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRestrictions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRestrictions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


