# ProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 

## Methods

### NewProfileType

`func NewProfileType() *ProfileType`

NewProfileType instantiates a new ProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeWithDefaults

`func NewProfileTypeWithDefaults() *ProfileType`

NewProfileTypeWithDefaults instantiates a new ProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *ProfileType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ProfileType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ProfileType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *ProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetCompany

`func (o *ProfileType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *ProfileType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *ProfileType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *ProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


