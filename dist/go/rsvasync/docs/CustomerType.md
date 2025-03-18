# CustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for the customer. | [optional] 
**Identifications** | Pointer to [**CustomerTypeIdentifications**](CustomerTypeIdentifications.md) |  | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**Language** | Pointer to **string** | Indicates the language code selected from Languages List of Values. | [optional] 
**Nationality** | Pointer to **string** | Indicates the nationality code selected from Nationalities List of Values | [optional] 
**VipStatus** | Pointer to **string** | Code of the VIP level associated with the guest. | [optional] 

## Methods

### NewCustomerType

`func NewCustomerType() *CustomerType`

NewCustomerType instantiates a new CustomerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerTypeWithDefaults

`func NewCustomerTypeWithDefaults() *CustomerType`

NewCustomerTypeWithDefaults instantiates a new CustomerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPersonName

`func (o *CustomerType) GetPersonName() []PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *CustomerType) GetPersonNameOk() (*[]PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *CustomerType) SetPersonName(v []PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *CustomerType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.

### GetIdentifications

`func (o *CustomerType) GetIdentifications() CustomerTypeIdentifications`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *CustomerType) GetIdentificationsOk() (*CustomerTypeIdentifications, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *CustomerType) SetIdentifications(v CustomerTypeIdentifications)`

SetIdentifications sets Identifications field to given value.

### HasIdentifications

`func (o *CustomerType) HasIdentifications() bool`

HasIdentifications returns a boolean if a field has been set.

### GetGender

`func (o *CustomerType) GetGender() string`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *CustomerType) GetGenderOk() (*string, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *CustomerType) SetGender(v string)`

SetGender sets Gender field to given value.

### HasGender

`func (o *CustomerType) HasGender() bool`

HasGender returns a boolean if a field has been set.

### GetBirthDate

`func (o *CustomerType) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *CustomerType) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *CustomerType) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *CustomerType) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetLanguage

`func (o *CustomerType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *CustomerType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *CustomerType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *CustomerType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetNationality

`func (o *CustomerType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *CustomerType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *CustomerType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *CustomerType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetVipStatus

`func (o *CustomerType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *CustomerType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *CustomerType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *CustomerType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


