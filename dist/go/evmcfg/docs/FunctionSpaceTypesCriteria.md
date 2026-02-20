# FunctionSpaceTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaceTypes** | Pointer to [**[]FunctionSpaceTypeType**](FunctionSpaceTypeType.md) | List of Function Space Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceTypesCriteria

`func NewFunctionSpaceTypesCriteria() *FunctionSpaceTypesCriteria`

NewFunctionSpaceTypesCriteria instantiates a new FunctionSpaceTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceTypesCriteriaWithDefaults

`func NewFunctionSpaceTypesCriteriaWithDefaults() *FunctionSpaceTypesCriteria`

NewFunctionSpaceTypesCriteriaWithDefaults instantiates a new FunctionSpaceTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaceTypes

`func (o *FunctionSpaceTypesCriteria) GetFunctionSpaceTypes() []FunctionSpaceTypeType`

GetFunctionSpaceTypes returns the FunctionSpaceTypes field if non-nil, zero value otherwise.

### GetFunctionSpaceTypesOk

`func (o *FunctionSpaceTypesCriteria) GetFunctionSpaceTypesOk() (*[]FunctionSpaceTypeType, bool)`

GetFunctionSpaceTypesOk returns a tuple with the FunctionSpaceTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceTypes

`func (o *FunctionSpaceTypesCriteria) SetFunctionSpaceTypes(v []FunctionSpaceTypeType)`

SetFunctionSpaceTypes sets FunctionSpaceTypes field to given value.

### HasFunctionSpaceTypes

`func (o *FunctionSpaceTypesCriteria) HasFunctionSpaceTypes() bool`

HasFunctionSpaceTypes returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


