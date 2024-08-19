# FunctionSpacesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaces** | Pointer to [**[]FunctionSpaceConfigType**](FunctionSpaceConfigType.md) | The detail information of function space for function space configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpacesToBeChanged

`func NewFunctionSpacesToBeChanged() *FunctionSpacesToBeChanged`

NewFunctionSpacesToBeChanged instantiates a new FunctionSpacesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpacesToBeChangedWithDefaults

`func NewFunctionSpacesToBeChangedWithDefaults() *FunctionSpacesToBeChanged`

NewFunctionSpacesToBeChangedWithDefaults instantiates a new FunctionSpacesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaces

`func (o *FunctionSpacesToBeChanged) GetFunctionSpaces() []FunctionSpaceConfigType`

GetFunctionSpaces returns the FunctionSpaces field if non-nil, zero value otherwise.

### GetFunctionSpacesOk

`func (o *FunctionSpacesToBeChanged) GetFunctionSpacesOk() (*[]FunctionSpaceConfigType, bool)`

GetFunctionSpacesOk returns a tuple with the FunctionSpaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaces

`func (o *FunctionSpacesToBeChanged) SetFunctionSpaces(v []FunctionSpaceConfigType)`

SetFunctionSpaces sets FunctionSpaces field to given value.

### HasFunctionSpaces

`func (o *FunctionSpacesToBeChanged) HasFunctionSpaces() bool`

HasFunctionSpaces returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpacesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpacesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpacesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpacesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpacesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpacesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpacesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpacesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


