# BlockConversionsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockConversions** | Pointer to [**[]BlockConversionType**](BlockConversionType.md) | List of Block Conversions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockConversionsToBeChanged

`func NewBlockConversionsToBeChanged() *BlockConversionsToBeChanged`

NewBlockConversionsToBeChanged instantiates a new BlockConversionsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockConversionsToBeChangedWithDefaults

`func NewBlockConversionsToBeChangedWithDefaults() *BlockConversionsToBeChanged`

NewBlockConversionsToBeChangedWithDefaults instantiates a new BlockConversionsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockConversions

`func (o *BlockConversionsToBeChanged) GetBlockConversions() []BlockConversionType`

GetBlockConversions returns the BlockConversions field if non-nil, zero value otherwise.

### GetBlockConversionsOk

`func (o *BlockConversionsToBeChanged) GetBlockConversionsOk() (*[]BlockConversionType, bool)`

GetBlockConversionsOk returns a tuple with the BlockConversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockConversions

`func (o *BlockConversionsToBeChanged) SetBlockConversions(v []BlockConversionType)`

SetBlockConversions sets BlockConversions field to given value.

### HasBlockConversions

`func (o *BlockConversionsToBeChanged) HasBlockConversions() bool`

HasBlockConversions returns a boolean if a field has been set.

### GetLinks

`func (o *BlockConversionsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockConversionsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockConversionsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockConversionsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockConversionsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockConversionsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockConversionsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockConversionsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


