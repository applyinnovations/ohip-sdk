# DepartmentsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Departments** | Pointer to [**[]DepartmentType**](DepartmentType.md) | Collection of departments. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepartmentsDetails

`func NewDepartmentsDetails() *DepartmentsDetails`

NewDepartmentsDetails instantiates a new DepartmentsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepartmentsDetailsWithDefaults

`func NewDepartmentsDetailsWithDefaults() *DepartmentsDetails`

NewDepartmentsDetailsWithDefaults instantiates a new DepartmentsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartments

`func (o *DepartmentsDetails) GetDepartments() []DepartmentType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *DepartmentsDetails) GetDepartmentsOk() (*[]DepartmentType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *DepartmentsDetails) SetDepartments(v []DepartmentType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *DepartmentsDetails) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetLinks

`func (o *DepartmentsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepartmentsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepartmentsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepartmentsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepartmentsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepartmentsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepartmentsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepartmentsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


