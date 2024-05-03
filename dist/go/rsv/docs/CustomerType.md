# CustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Anonymization** | Pointer to [**AnonymizationType**](AnonymizationType.md) |  | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 
**BirthPlace** | Pointer to **string** | Place of birth. | [optional] 
**Blacklist** | Pointer to **bool** | This element tells if profile is blacklisted or not. | [optional] 
**CreditRating** | Pointer to **string** | Credit Rating of the customer. | [optional] 
**CustomerValue** | Pointer to **string** | The supplier&#39;s ranking of the customer (e.g., VIP, numerical ranking). | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**Identifications** | Pointer to [**CustomerTypeIdentifications**](CustomerTypeIdentifications.md) |  | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification | [optional] 
**NationalityDescription** | Pointer to **string** | Nationality code description | [optional] 
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for the customer. | [optional] 
**PrivateProfile** | Pointer to **bool** | This element tells profile is property exclusive or not. | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the customer. | [optional] 

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

### GetAnonymization

`func (o *CustomerType) GetAnonymization() AnonymizationType`

GetAnonymization returns the Anonymization field if non-nil, zero value otherwise.

### GetAnonymizationOk

`func (o *CustomerType) GetAnonymizationOk() (*AnonymizationType, bool)`

GetAnonymizationOk returns a tuple with the Anonymization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymization

`func (o *CustomerType) SetAnonymization(v AnonymizationType)`

SetAnonymization sets Anonymization field to given value.

### HasAnonymization

`func (o *CustomerType) HasAnonymization() bool`

HasAnonymization returns a boolean if a field has been set.

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

### GetBirthDateMasked

`func (o *CustomerType) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *CustomerType) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *CustomerType) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *CustomerType) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.

### GetBirthPlace

`func (o *CustomerType) GetBirthPlace() string`

GetBirthPlace returns the BirthPlace field if non-nil, zero value otherwise.

### GetBirthPlaceOk

`func (o *CustomerType) GetBirthPlaceOk() (*string, bool)`

GetBirthPlaceOk returns a tuple with the BirthPlace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthPlace

`func (o *CustomerType) SetBirthPlace(v string)`

SetBirthPlace sets BirthPlace field to given value.

### HasBirthPlace

`func (o *CustomerType) HasBirthPlace() bool`

HasBirthPlace returns a boolean if a field has been set.

### GetBlacklist

`func (o *CustomerType) GetBlacklist() bool`

GetBlacklist returns the Blacklist field if non-nil, zero value otherwise.

### GetBlacklistOk

`func (o *CustomerType) GetBlacklistOk() (*bool, bool)`

GetBlacklistOk returns a tuple with the Blacklist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlacklist

`func (o *CustomerType) SetBlacklist(v bool)`

SetBlacklist sets Blacklist field to given value.

### HasBlacklist

`func (o *CustomerType) HasBlacklist() bool`

HasBlacklist returns a boolean if a field has been set.

### GetCreditRating

`func (o *CustomerType) GetCreditRating() string`

GetCreditRating returns the CreditRating field if non-nil, zero value otherwise.

### GetCreditRatingOk

`func (o *CustomerType) GetCreditRatingOk() (*string, bool)`

GetCreditRatingOk returns a tuple with the CreditRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRating

`func (o *CustomerType) SetCreditRating(v string)`

SetCreditRating sets CreditRating field to given value.

### HasCreditRating

`func (o *CustomerType) HasCreditRating() bool`

HasCreditRating returns a boolean if a field has been set.

### GetCustomerValue

`func (o *CustomerType) GetCustomerValue() string`

GetCustomerValue returns the CustomerValue field if non-nil, zero value otherwise.

### GetCustomerValueOk

`func (o *CustomerType) GetCustomerValueOk() (*string, bool)`

GetCustomerValueOk returns a tuple with the CustomerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerValue

`func (o *CustomerType) SetCustomerValue(v string)`

SetCustomerValue sets CustomerValue field to given value.

### HasCustomerValue

`func (o *CustomerType) HasCustomerValue() bool`

HasCustomerValue returns a boolean if a field has been set.

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

### GetNationalityDescription

`func (o *CustomerType) GetNationalityDescription() string`

GetNationalityDescription returns the NationalityDescription field if non-nil, zero value otherwise.

### GetNationalityDescriptionOk

`func (o *CustomerType) GetNationalityDescriptionOk() (*string, bool)`

GetNationalityDescriptionOk returns a tuple with the NationalityDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalityDescription

`func (o *CustomerType) SetNationalityDescription(v string)`

SetNationalityDescription sets NationalityDescription field to given value.

### HasNationalityDescription

`func (o *CustomerType) HasNationalityDescription() bool`

HasNationalityDescription returns a boolean if a field has been set.

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

### GetPrivateProfile

`func (o *CustomerType) GetPrivateProfile() bool`

GetPrivateProfile returns the PrivateProfile field if non-nil, zero value otherwise.

### GetPrivateProfileOk

`func (o *CustomerType) GetPrivateProfileOk() (*bool, bool)`

GetPrivateProfileOk returns a tuple with the PrivateProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateProfile

`func (o *CustomerType) SetPrivateProfile(v bool)`

SetPrivateProfile sets PrivateProfile field to given value.

### HasPrivateProfile

`func (o *CustomerType) HasPrivateProfile() bool`

HasPrivateProfile returns a boolean if a field has been set.

### GetVipDescription

`func (o *CustomerType) GetVipDescription() string`

GetVipDescription returns the VipDescription field if non-nil, zero value otherwise.

### GetVipDescriptionOk

`func (o *CustomerType) GetVipDescriptionOk() (*string, bool)`

GetVipDescriptionOk returns a tuple with the VipDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipDescription

`func (o *CustomerType) SetVipDescription(v string)`

SetVipDescription sets VipDescription field to given value.

### HasVipDescription

`func (o *CustomerType) HasVipDescription() bool`

HasVipDescription returns a boolean if a field has been set.

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


