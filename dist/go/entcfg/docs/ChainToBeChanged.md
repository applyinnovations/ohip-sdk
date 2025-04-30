# ChainToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Chains** | Pointer to [**[]ChainDetailInfoType**](ChainDetailInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChainToBeChanged

`func NewChainToBeChanged() *ChainToBeChanged`

NewChainToBeChanged instantiates a new ChainToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChainToBeChangedWithDefaults

`func NewChainToBeChangedWithDefaults() *ChainToBeChanged`

NewChainToBeChangedWithDefaults instantiates a new ChainToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChains

`func (o *ChainToBeChanged) GetChains() []ChainDetailInfoType`

GetChains returns the Chains field if non-nil, zero value otherwise.

### GetChainsOk

`func (o *ChainToBeChanged) GetChainsOk() (*[]ChainDetailInfoType, bool)`

GetChainsOk returns a tuple with the Chains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChains

`func (o *ChainToBeChanged) SetChains(v []ChainDetailInfoType)`

SetChains sets Chains field to given value.

### HasChains

`func (o *ChainToBeChanged) HasChains() bool`

HasChains returns a boolean if a field has been set.

### GetLinks

`func (o *ChainToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChainToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChainToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChainToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChainToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChainToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChainToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChainToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


