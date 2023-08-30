# Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**CompanyDetails** | Pointer to [**CompanyProfileType**](CompanyProfileType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewCompany

`func NewCompany() *Company`

NewCompany instantiates a new Company object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyWithDefaults

`func NewCompanyWithDefaults() *Company`

NewCompanyWithDefaults instantiates a new Company object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyIdList

`func (o *Company) GetCompanyIdList() []UniqueIDType`

GetCompanyIdList returns the CompanyIdList field if non-nil, zero value otherwise.

### GetCompanyIdListOk

`func (o *Company) GetCompanyIdListOk() (*[]UniqueIDType, bool)`

GetCompanyIdListOk returns a tuple with the CompanyIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyIdList

`func (o *Company) SetCompanyIdList(v []UniqueIDType)`

SetCompanyIdList sets CompanyIdList field to given value.

### HasCompanyIdList

`func (o *Company) HasCompanyIdList() bool`

HasCompanyIdList returns a boolean if a field has been set.

### GetCompanyDetails

`func (o *Company) GetCompanyDetails() CompanyProfileType`

GetCompanyDetails returns the CompanyDetails field if non-nil, zero value otherwise.

### GetCompanyDetailsOk

`func (o *Company) GetCompanyDetailsOk() (*CompanyProfileType, bool)`

GetCompanyDetailsOk returns a tuple with the CompanyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyDetails

`func (o *Company) SetCompanyDetails(v CompanyProfileType)`

SetCompanyDetails sets CompanyDetails field to given value.

### HasCompanyDetails

`func (o *Company) HasCompanyDetails() bool`

HasCompanyDetails returns a boolean if a field has been set.

### GetLinks

`func (o *Company) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Company) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Company) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Company) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


