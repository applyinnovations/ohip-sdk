# CompanyTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyTypes** | Pointer to [**[]CompanyTypeType**](CompanyTypeType.md) | List of Company Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompanyTypesDetails

`func NewCompanyTypesDetails() *CompanyTypesDetails`

NewCompanyTypesDetails instantiates a new CompanyTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyTypesDetailsWithDefaults

`func NewCompanyTypesDetailsWithDefaults() *CompanyTypesDetails`

NewCompanyTypesDetailsWithDefaults instantiates a new CompanyTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyTypes

`func (o *CompanyTypesDetails) GetCompanyTypes() []CompanyTypeType`

GetCompanyTypes returns the CompanyTypes field if non-nil, zero value otherwise.

### GetCompanyTypesOk

`func (o *CompanyTypesDetails) GetCompanyTypesOk() (*[]CompanyTypeType, bool)`

GetCompanyTypesOk returns a tuple with the CompanyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyTypes

`func (o *CompanyTypesDetails) SetCompanyTypes(v []CompanyTypeType)`

SetCompanyTypes sets CompanyTypes field to given value.

### HasCompanyTypes

`func (o *CompanyTypesDetails) HasCompanyTypes() bool`

HasCompanyTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CompanyTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompanyTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompanyTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompanyTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompanyTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompanyTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompanyTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompanyTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


