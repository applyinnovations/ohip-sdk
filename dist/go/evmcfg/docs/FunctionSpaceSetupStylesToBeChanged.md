# FunctionSpaceSetupStylesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SetupStyles** | Pointer to [**[]FunctionSpaceSetupStyleType**](FunctionSpaceSetupStyleType.md) | List of the function space setup styles to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceSetupStylesToBeChanged

`func NewFunctionSpaceSetupStylesToBeChanged() *FunctionSpaceSetupStylesToBeChanged`

NewFunctionSpaceSetupStylesToBeChanged instantiates a new FunctionSpaceSetupStylesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceSetupStylesToBeChangedWithDefaults

`func NewFunctionSpaceSetupStylesToBeChangedWithDefaults() *FunctionSpaceSetupStylesToBeChanged`

NewFunctionSpaceSetupStylesToBeChangedWithDefaults instantiates a new FunctionSpaceSetupStylesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSetupStyles

`func (o *FunctionSpaceSetupStylesToBeChanged) GetSetupStyles() []FunctionSpaceSetupStyleType`

GetSetupStyles returns the SetupStyles field if non-nil, zero value otherwise.

### GetSetupStylesOk

`func (o *FunctionSpaceSetupStylesToBeChanged) GetSetupStylesOk() (*[]FunctionSpaceSetupStyleType, bool)`

GetSetupStylesOk returns a tuple with the SetupStyles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupStyles

`func (o *FunctionSpaceSetupStylesToBeChanged) SetSetupStyles(v []FunctionSpaceSetupStyleType)`

SetSetupStyles sets SetupStyles field to given value.

### HasSetupStyles

`func (o *FunctionSpaceSetupStylesToBeChanged) HasSetupStyles() bool`

HasSetupStyles returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceSetupStylesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceSetupStylesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceSetupStylesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceSetupStylesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceSetupStylesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceSetupStylesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceSetupStylesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceSetupStylesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


