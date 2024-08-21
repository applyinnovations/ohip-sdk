# FunctionSpaceSetupStylesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SetupStyles** | Pointer to [**[]FunctionSpaceSetupStyleType**](FunctionSpaceSetupStyleType.md) | List of the function space setup styles to be configured or fetched | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceSetupStylesCriteria

`func NewFunctionSpaceSetupStylesCriteria() *FunctionSpaceSetupStylesCriteria`

NewFunctionSpaceSetupStylesCriteria instantiates a new FunctionSpaceSetupStylesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceSetupStylesCriteriaWithDefaults

`func NewFunctionSpaceSetupStylesCriteriaWithDefaults() *FunctionSpaceSetupStylesCriteria`

NewFunctionSpaceSetupStylesCriteriaWithDefaults instantiates a new FunctionSpaceSetupStylesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FunctionSpaceSetupStylesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceSetupStylesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceSetupStylesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceSetupStylesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSetupStyles

`func (o *FunctionSpaceSetupStylesCriteria) GetSetupStyles() []FunctionSpaceSetupStyleType`

GetSetupStyles returns the SetupStyles field if non-nil, zero value otherwise.

### GetSetupStylesOk

`func (o *FunctionSpaceSetupStylesCriteria) GetSetupStylesOk() (*[]FunctionSpaceSetupStyleType, bool)`

GetSetupStylesOk returns a tuple with the SetupStyles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupStyles

`func (o *FunctionSpaceSetupStylesCriteria) SetSetupStyles(v []FunctionSpaceSetupStyleType)`

SetSetupStyles sets SetupStyles field to given value.

### HasSetupStyles

`func (o *FunctionSpaceSetupStylesCriteria) HasSetupStyles() bool`

HasSetupStyles returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceSetupStylesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceSetupStylesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceSetupStylesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceSetupStylesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


