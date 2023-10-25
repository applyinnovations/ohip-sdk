# ChangeBlockConversionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockConversions** | Pointer to [**[]BlockConversionType**](BlockConversionType.md) | List of Block Conversions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeBlockConversionsRequest

`func NewChangeBlockConversionsRequest() *ChangeBlockConversionsRequest`

NewChangeBlockConversionsRequest instantiates a new ChangeBlockConversionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBlockConversionsRequestWithDefaults

`func NewChangeBlockConversionsRequestWithDefaults() *ChangeBlockConversionsRequest`

NewChangeBlockConversionsRequestWithDefaults instantiates a new ChangeBlockConversionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockConversions

`func (o *ChangeBlockConversionsRequest) GetBlockConversions() []BlockConversionType`

GetBlockConversions returns the BlockConversions field if non-nil, zero value otherwise.

### GetBlockConversionsOk

`func (o *ChangeBlockConversionsRequest) GetBlockConversionsOk() (*[]BlockConversionType, bool)`

GetBlockConversionsOk returns a tuple with the BlockConversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockConversions

`func (o *ChangeBlockConversionsRequest) SetBlockConversions(v []BlockConversionType)`

SetBlockConversions sets BlockConversions field to given value.

### HasBlockConversions

`func (o *ChangeBlockConversionsRequest) HasBlockConversions() bool`

HasBlockConversions returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeBlockConversionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeBlockConversionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeBlockConversionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeBlockConversionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeBlockConversionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeBlockConversionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeBlockConversionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeBlockConversionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


