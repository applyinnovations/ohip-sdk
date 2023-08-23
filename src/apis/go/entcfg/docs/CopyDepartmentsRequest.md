# CopyDepartmentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Departments** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the departments to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyDepartmentsRequest

`func NewCopyDepartmentsRequest() *CopyDepartmentsRequest`

NewCopyDepartmentsRequest instantiates a new CopyDepartmentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyDepartmentsRequestWithDefaults

`func NewCopyDepartmentsRequestWithDefaults() *CopyDepartmentsRequest`

NewCopyDepartmentsRequestWithDefaults instantiates a new CopyDepartmentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartments

`func (o *CopyDepartmentsRequest) GetDepartments() []CopyConfigurationCodeType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *CopyDepartmentsRequest) GetDepartmentsOk() (*[]CopyConfigurationCodeType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *CopyDepartmentsRequest) SetDepartments(v []CopyConfigurationCodeType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *CopyDepartmentsRequest) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetLinks

`func (o *CopyDepartmentsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyDepartmentsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyDepartmentsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyDepartmentsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyDepartmentsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyDepartmentsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyDepartmentsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyDepartmentsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


