# CopyDepartments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Departments** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the departments to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyDepartments

`func NewCopyDepartments() *CopyDepartments`

NewCopyDepartments instantiates a new CopyDepartments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyDepartmentsWithDefaults

`func NewCopyDepartmentsWithDefaults() *CopyDepartments`

NewCopyDepartmentsWithDefaults instantiates a new CopyDepartments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartments

`func (o *CopyDepartments) GetDepartments() []CopyConfigurationCodeType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *CopyDepartments) GetDepartmentsOk() (*[]CopyConfigurationCodeType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *CopyDepartments) SetDepartments(v []CopyConfigurationCodeType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *CopyDepartments) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetLinks

`func (o *CopyDepartments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyDepartments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyDepartments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyDepartments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyDepartments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyDepartments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyDepartments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyDepartments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


