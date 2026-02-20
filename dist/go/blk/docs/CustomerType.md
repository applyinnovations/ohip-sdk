# CustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for the customer. | [optional] 
**Anonymization** | Pointer to [**AnonymizationType**](AnonymizationType.md) |  | [optional] 
**Identifications** | Pointer to [**CustomerTypeIdentifications**](CustomerTypeIdentifications.md) |  | [optional] 
**Profession** | Pointer to **string** | Profession of a person. | [optional] 
**CompanyInfo** | Pointer to [**CompanyInfoType**](CompanyInfoType.md) |  | [optional] 
**BusinessTitle** | Pointer to **string** | Business Title. | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the customer. | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 
**PrivateProfile** | Pointer to **bool** | This element tells profile is property exclusive or not. | [optional] 
**Blacklist** | Pointer to **bool** | This element tells if profile is blacklisted or not. | [optional] 

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

### GetProfession

`func (o *CustomerType) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *CustomerType) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *CustomerType) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *CustomerType) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### GetCompanyInfo

`func (o *CustomerType) GetCompanyInfo() CompanyInfoType`

GetCompanyInfo returns the CompanyInfo field if non-nil, zero value otherwise.

### GetCompanyInfoOk

`func (o *CustomerType) GetCompanyInfoOk() (*CompanyInfoType, bool)`

GetCompanyInfoOk returns a tuple with the CompanyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyInfo

`func (o *CustomerType) SetCompanyInfo(v CompanyInfoType)`

SetCompanyInfo sets CompanyInfo field to given value.

### HasCompanyInfo

`func (o *CustomerType) HasCompanyInfo() bool`

HasCompanyInfo returns a boolean if a field has been set.

### GetBusinessTitle

`func (o *CustomerType) GetBusinessTitle() string`

GetBusinessTitle returns the BusinessTitle field if non-nil, zero value otherwise.

### GetBusinessTitleOk

`func (o *CustomerType) GetBusinessTitleOk() (*string, bool)`

GetBusinessTitleOk returns a tuple with the BusinessTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessTitle

`func (o *CustomerType) SetBusinessTitle(v string)`

SetBusinessTitle sets BusinessTitle field to given value.

### HasBusinessTitle

`func (o *CustomerType) HasBusinessTitle() bool`

HasBusinessTitle returns a boolean if a field has been set.

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

### GetCurrencyCode

`func (o *CustomerType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *CustomerType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *CustomerType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *CustomerType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *CustomerType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *CustomerType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *CustomerType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *CustomerType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *CustomerType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *CustomerType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *CustomerType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *CustomerType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


