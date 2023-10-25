# FunctionSpacesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaces** | Pointer to [**[]FunctionSpaceConfigType**](FunctionSpaceConfigType.md) | The detail information of function space for function space configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpacesCriteria

`func NewFunctionSpacesCriteria() *FunctionSpacesCriteria`

NewFunctionSpacesCriteria instantiates a new FunctionSpacesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpacesCriteriaWithDefaults

`func NewFunctionSpacesCriteriaWithDefaults() *FunctionSpacesCriteria`

NewFunctionSpacesCriteriaWithDefaults instantiates a new FunctionSpacesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaces

`func (o *FunctionSpacesCriteria) GetFunctionSpaces() []FunctionSpaceConfigType`

GetFunctionSpaces returns the FunctionSpaces field if non-nil, zero value otherwise.

### GetFunctionSpacesOk

`func (o *FunctionSpacesCriteria) GetFunctionSpacesOk() (*[]FunctionSpaceConfigType, bool)`

GetFunctionSpacesOk returns a tuple with the FunctionSpaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaces

`func (o *FunctionSpacesCriteria) SetFunctionSpaces(v []FunctionSpaceConfigType)`

SetFunctionSpaces sets FunctionSpaces field to given value.

### HasFunctionSpaces

`func (o *FunctionSpacesCriteria) HasFunctionSpaces() bool`

HasFunctionSpaces returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpacesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpacesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpacesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpacesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpacesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpacesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpacesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpacesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


