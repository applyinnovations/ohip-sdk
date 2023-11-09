# RelationshipProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**ChangeProfileIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**Email** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**Id** | Pointer to **string** | Relationship identifier. | [optional] 
**Primary** | Pointer to **string** | Indicates if this relationship is the primary relationship. | [optional] 
**PrimaryOwner** | Pointer to [**OwnerType**](OwnerType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**Telephone** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**URLs** | Pointer to [**URLInfoType**](URLInfoType.md) |  | [optional] 

## Methods

### NewRelationshipProfileType

`func NewRelationshipProfileType() *RelationshipProfileType`

NewRelationshipProfileType instantiates a new RelationshipProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipProfileTypeWithDefaults

`func NewRelationshipProfileTypeWithDefaults() *RelationshipProfileType`

NewRelationshipProfileTypeWithDefaults instantiates a new RelationshipProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *RelationshipProfileType) GetAddress() AddressInfoType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *RelationshipProfileType) GetAddressOk() (*AddressInfoType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *RelationshipProfileType) SetAddress(v AddressInfoType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *RelationshipProfileType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetChangeProfileIdList

`func (o *RelationshipProfileType) GetChangeProfileIdList() UniqueIDListType`

GetChangeProfileIdList returns the ChangeProfileIdList field if non-nil, zero value otherwise.

### GetChangeProfileIdListOk

`func (o *RelationshipProfileType) GetChangeProfileIdListOk() (*UniqueIDListType, bool)`

GetChangeProfileIdListOk returns a tuple with the ChangeProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeProfileIdList

`func (o *RelationshipProfileType) SetChangeProfileIdList(v UniqueIDListType)`

SetChangeProfileIdList sets ChangeProfileIdList field to given value.

### HasChangeProfileIdList

`func (o *RelationshipProfileType) HasChangeProfileIdList() bool`

HasChangeProfileIdList returns a boolean if a field has been set.

### GetCompany

`func (o *RelationshipProfileType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *RelationshipProfileType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *RelationshipProfileType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *RelationshipProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetCustomer

`func (o *RelationshipProfileType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *RelationshipProfileType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *RelationshipProfileType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *RelationshipProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetEmail

`func (o *RelationshipProfileType) GetEmail() EmailInfoType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *RelationshipProfileType) GetEmailOk() (*EmailInfoType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *RelationshipProfileType) SetEmail(v EmailInfoType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *RelationshipProfileType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetId

`func (o *RelationshipProfileType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RelationshipProfileType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RelationshipProfileType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RelationshipProfileType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetPrimary

`func (o *RelationshipProfileType) GetPrimary() string`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *RelationshipProfileType) GetPrimaryOk() (*string, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *RelationshipProfileType) SetPrimary(v string)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *RelationshipProfileType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetPrimaryOwner

`func (o *RelationshipProfileType) GetPrimaryOwner() OwnerType`

GetPrimaryOwner returns the PrimaryOwner field if non-nil, zero value otherwise.

### GetPrimaryOwnerOk

`func (o *RelationshipProfileType) GetPrimaryOwnerOk() (*OwnerType, bool)`

GetPrimaryOwnerOk returns a tuple with the PrimaryOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwner

`func (o *RelationshipProfileType) SetPrimaryOwner(v OwnerType)`

SetPrimaryOwner sets PrimaryOwner field to given value.

### HasPrimaryOwner

`func (o *RelationshipProfileType) HasPrimaryOwner() bool`

HasPrimaryOwner returns a boolean if a field has been set.

### GetProfileIdList

`func (o *RelationshipProfileType) GetProfileIdList() UniqueIDListType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *RelationshipProfileType) GetProfileIdListOk() (*UniqueIDListType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *RelationshipProfileType) SetProfileIdList(v UniqueIDListType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *RelationshipProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileType

`func (o *RelationshipProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *RelationshipProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *RelationshipProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *RelationshipProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetStatusCode

`func (o *RelationshipProfileType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *RelationshipProfileType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *RelationshipProfileType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *RelationshipProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetTelephone

`func (o *RelationshipProfileType) GetTelephone() TelephoneInfoType`

GetTelephone returns the Telephone field if non-nil, zero value otherwise.

### GetTelephoneOk

`func (o *RelationshipProfileType) GetTelephoneOk() (*TelephoneInfoType, bool)`

GetTelephoneOk returns a tuple with the Telephone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephone

`func (o *RelationshipProfileType) SetTelephone(v TelephoneInfoType)`

SetTelephone sets Telephone field to given value.

### HasTelephone

`func (o *RelationshipProfileType) HasTelephone() bool`

HasTelephone returns a boolean if a field has been set.

### GetURLs

`func (o *RelationshipProfileType) GetURLs() URLInfoType`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *RelationshipProfileType) GetURLsOk() (*URLInfoType, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *RelationshipProfileType) SetURLs(v URLInfoType)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *RelationshipProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


