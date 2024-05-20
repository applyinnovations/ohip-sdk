# StagedProfileCustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlienInfo** | Pointer to [**AlienInfoType**](AlienInfoType.md) |  | [optional] 
**AlternateLanguage** | Pointer to **string** | ALternate language identification. | [optional] 
**Anonymization** | Pointer to [**AnonymizationType**](AnonymizationType.md) |  | [optional] 
**BirthCountry** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 
**BirthPlace** | Pointer to **string** | Place of birth. | [optional] 
**Blacklist** | Pointer to **bool** | This element tells if profile is blacklisted or not. | [optional] 
**BusinessTitle** | Pointer to **string** | Business Title. | [optional] 
**CitizenCountry** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**CompanyInfo** | Pointer to [**CompanyInfoType**](CompanyInfoType.md) |  | [optional] 
**CreditRating** | Pointer to **string** | Credit Rating of the customer. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**CustomerValue** | Pointer to **string** | The supplier&#39;s ranking of the customer (e.g., VIP, numerical ranking). | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Errors** | Pointer to [**[]StagedProfileErrorType**](StagedProfileErrorType.md) | The error in stage profile. | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**Identifications** | Pointer to [**CustomerTypeIdentifications**](CustomerTypeIdentifications.md) |  | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**LegalCompany** | Pointer to **string** | Name Of the company the individual is associated with. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification | [optional] 
**NationalityDescription** | Pointer to **string** | Nationality code description | [optional] 
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for the customer. | [optional] 
**PrivateProfile** | Pointer to **bool** | This element tells profile is property exclusive or not. | [optional] 
**Profession** | Pointer to **string** | Profession of a person. | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the customer. | [optional] 

## Methods

### NewStagedProfileCustomerType

`func NewStagedProfileCustomerType() *StagedProfileCustomerType`

NewStagedProfileCustomerType instantiates a new StagedProfileCustomerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileCustomerTypeWithDefaults

`func NewStagedProfileCustomerTypeWithDefaults() *StagedProfileCustomerType`

NewStagedProfileCustomerTypeWithDefaults instantiates a new StagedProfileCustomerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlienInfo

`func (o *StagedProfileCustomerType) GetAlienInfo() AlienInfoType`

GetAlienInfo returns the AlienInfo field if non-nil, zero value otherwise.

### GetAlienInfoOk

`func (o *StagedProfileCustomerType) GetAlienInfoOk() (*AlienInfoType, bool)`

GetAlienInfoOk returns a tuple with the AlienInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlienInfo

`func (o *StagedProfileCustomerType) SetAlienInfo(v AlienInfoType)`

SetAlienInfo sets AlienInfo field to given value.

### HasAlienInfo

`func (o *StagedProfileCustomerType) HasAlienInfo() bool`

HasAlienInfo returns a boolean if a field has been set.

### GetAlternateLanguage

`func (o *StagedProfileCustomerType) GetAlternateLanguage() string`

GetAlternateLanguage returns the AlternateLanguage field if non-nil, zero value otherwise.

### GetAlternateLanguageOk

`func (o *StagedProfileCustomerType) GetAlternateLanguageOk() (*string, bool)`

GetAlternateLanguageOk returns a tuple with the AlternateLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateLanguage

`func (o *StagedProfileCustomerType) SetAlternateLanguage(v string)`

SetAlternateLanguage sets AlternateLanguage field to given value.

### HasAlternateLanguage

`func (o *StagedProfileCustomerType) HasAlternateLanguage() bool`

HasAlternateLanguage returns a boolean if a field has been set.

### GetAnonymization

`func (o *StagedProfileCustomerType) GetAnonymization() AnonymizationType`

GetAnonymization returns the Anonymization field if non-nil, zero value otherwise.

### GetAnonymizationOk

`func (o *StagedProfileCustomerType) GetAnonymizationOk() (*AnonymizationType, bool)`

GetAnonymizationOk returns a tuple with the Anonymization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymization

`func (o *StagedProfileCustomerType) SetAnonymization(v AnonymizationType)`

SetAnonymization sets Anonymization field to given value.

### HasAnonymization

`func (o *StagedProfileCustomerType) HasAnonymization() bool`

HasAnonymization returns a boolean if a field has been set.

### GetBirthCountry

`func (o *StagedProfileCustomerType) GetBirthCountry() CountryNameType`

GetBirthCountry returns the BirthCountry field if non-nil, zero value otherwise.

### GetBirthCountryOk

`func (o *StagedProfileCustomerType) GetBirthCountryOk() (*CountryNameType, bool)`

GetBirthCountryOk returns a tuple with the BirthCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthCountry

`func (o *StagedProfileCustomerType) SetBirthCountry(v CountryNameType)`

SetBirthCountry sets BirthCountry field to given value.

### HasBirthCountry

`func (o *StagedProfileCustomerType) HasBirthCountry() bool`

HasBirthCountry returns a boolean if a field has been set.

### GetBirthDate

`func (o *StagedProfileCustomerType) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *StagedProfileCustomerType) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *StagedProfileCustomerType) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *StagedProfileCustomerType) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetBirthDateMasked

`func (o *StagedProfileCustomerType) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *StagedProfileCustomerType) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *StagedProfileCustomerType) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *StagedProfileCustomerType) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.

### GetBirthPlace

`func (o *StagedProfileCustomerType) GetBirthPlace() string`

GetBirthPlace returns the BirthPlace field if non-nil, zero value otherwise.

### GetBirthPlaceOk

`func (o *StagedProfileCustomerType) GetBirthPlaceOk() (*string, bool)`

GetBirthPlaceOk returns a tuple with the BirthPlace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthPlace

`func (o *StagedProfileCustomerType) SetBirthPlace(v string)`

SetBirthPlace sets BirthPlace field to given value.

### HasBirthPlace

`func (o *StagedProfileCustomerType) HasBirthPlace() bool`

HasBirthPlace returns a boolean if a field has been set.

### GetBlacklist

`func (o *StagedProfileCustomerType) GetBlacklist() bool`

GetBlacklist returns the Blacklist field if non-nil, zero value otherwise.

### GetBlacklistOk

`func (o *StagedProfileCustomerType) GetBlacklistOk() (*bool, bool)`

GetBlacklistOk returns a tuple with the Blacklist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlacklist

`func (o *StagedProfileCustomerType) SetBlacklist(v bool)`

SetBlacklist sets Blacklist field to given value.

### HasBlacklist

`func (o *StagedProfileCustomerType) HasBlacklist() bool`

HasBlacklist returns a boolean if a field has been set.

### GetBusinessTitle

`func (o *StagedProfileCustomerType) GetBusinessTitle() string`

GetBusinessTitle returns the BusinessTitle field if non-nil, zero value otherwise.

### GetBusinessTitleOk

`func (o *StagedProfileCustomerType) GetBusinessTitleOk() (*string, bool)`

GetBusinessTitleOk returns a tuple with the BusinessTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessTitle

`func (o *StagedProfileCustomerType) SetBusinessTitle(v string)`

SetBusinessTitle sets BusinessTitle field to given value.

### HasBusinessTitle

`func (o *StagedProfileCustomerType) HasBusinessTitle() bool`

HasBusinessTitle returns a boolean if a field has been set.

### GetCitizenCountry

`func (o *StagedProfileCustomerType) GetCitizenCountry() CountryNameType`

GetCitizenCountry returns the CitizenCountry field if non-nil, zero value otherwise.

### GetCitizenCountryOk

`func (o *StagedProfileCustomerType) GetCitizenCountryOk() (*CountryNameType, bool)`

GetCitizenCountryOk returns a tuple with the CitizenCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCitizenCountry

`func (o *StagedProfileCustomerType) SetCitizenCountry(v CountryNameType)`

SetCitizenCountry sets CitizenCountry field to given value.

### HasCitizenCountry

`func (o *StagedProfileCustomerType) HasCitizenCountry() bool`

HasCitizenCountry returns a boolean if a field has been set.

### GetCompanyInfo

`func (o *StagedProfileCustomerType) GetCompanyInfo() CompanyInfoType`

GetCompanyInfo returns the CompanyInfo field if non-nil, zero value otherwise.

### GetCompanyInfoOk

`func (o *StagedProfileCustomerType) GetCompanyInfoOk() (*CompanyInfoType, bool)`

GetCompanyInfoOk returns a tuple with the CompanyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyInfo

`func (o *StagedProfileCustomerType) SetCompanyInfo(v CompanyInfoType)`

SetCompanyInfo sets CompanyInfo field to given value.

### HasCompanyInfo

`func (o *StagedProfileCustomerType) HasCompanyInfo() bool`

HasCompanyInfo returns a boolean if a field has been set.

### GetCreditRating

`func (o *StagedProfileCustomerType) GetCreditRating() string`

GetCreditRating returns the CreditRating field if non-nil, zero value otherwise.

### GetCreditRatingOk

`func (o *StagedProfileCustomerType) GetCreditRatingOk() (*string, bool)`

GetCreditRatingOk returns a tuple with the CreditRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRating

`func (o *StagedProfileCustomerType) SetCreditRating(v string)`

SetCreditRating sets CreditRating field to given value.

### HasCreditRating

`func (o *StagedProfileCustomerType) HasCreditRating() bool`

HasCreditRating returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *StagedProfileCustomerType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *StagedProfileCustomerType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *StagedProfileCustomerType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *StagedProfileCustomerType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *StagedProfileCustomerType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *StagedProfileCustomerType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *StagedProfileCustomerType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *StagedProfileCustomerType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetCustomerValue

`func (o *StagedProfileCustomerType) GetCustomerValue() string`

GetCustomerValue returns the CustomerValue field if non-nil, zero value otherwise.

### GetCustomerValueOk

`func (o *StagedProfileCustomerType) GetCustomerValueOk() (*string, bool)`

GetCustomerValueOk returns a tuple with the CustomerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerValue

`func (o *StagedProfileCustomerType) SetCustomerValue(v string)`

SetCustomerValue sets CustomerValue field to given value.

### HasCustomerValue

`func (o *StagedProfileCustomerType) HasCustomerValue() bool`

HasCustomerValue returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *StagedProfileCustomerType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *StagedProfileCustomerType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *StagedProfileCustomerType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *StagedProfileCustomerType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetErrors

`func (o *StagedProfileCustomerType) GetErrors() []StagedProfileErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *StagedProfileCustomerType) GetErrorsOk() (*[]StagedProfileErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *StagedProfileCustomerType) SetErrors(v []StagedProfileErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *StagedProfileCustomerType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetGender

`func (o *StagedProfileCustomerType) GetGender() string`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *StagedProfileCustomerType) GetGenderOk() (*string, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *StagedProfileCustomerType) SetGender(v string)`

SetGender sets Gender field to given value.

### HasGender

`func (o *StagedProfileCustomerType) HasGender() bool`

HasGender returns a boolean if a field has been set.

### GetIdentifications

`func (o *StagedProfileCustomerType) GetIdentifications() CustomerTypeIdentifications`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *StagedProfileCustomerType) GetIdentificationsOk() (*CustomerTypeIdentifications, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *StagedProfileCustomerType) SetIdentifications(v CustomerTypeIdentifications)`

SetIdentifications sets Identifications field to given value.

### HasIdentifications

`func (o *StagedProfileCustomerType) HasIdentifications() bool`

HasIdentifications returns a boolean if a field has been set.

### GetLanguage

`func (o *StagedProfileCustomerType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *StagedProfileCustomerType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *StagedProfileCustomerType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *StagedProfileCustomerType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetLegalCompany

`func (o *StagedProfileCustomerType) GetLegalCompany() string`

GetLegalCompany returns the LegalCompany field if non-nil, zero value otherwise.

### GetLegalCompanyOk

`func (o *StagedProfileCustomerType) GetLegalCompanyOk() (*string, bool)`

GetLegalCompanyOk returns a tuple with the LegalCompany field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalCompany

`func (o *StagedProfileCustomerType) SetLegalCompany(v string)`

SetLegalCompany sets LegalCompany field to given value.

### HasLegalCompany

`func (o *StagedProfileCustomerType) HasLegalCompany() bool`

HasLegalCompany returns a boolean if a field has been set.

### GetNationality

`func (o *StagedProfileCustomerType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *StagedProfileCustomerType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *StagedProfileCustomerType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *StagedProfileCustomerType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetNationalityDescription

`func (o *StagedProfileCustomerType) GetNationalityDescription() string`

GetNationalityDescription returns the NationalityDescription field if non-nil, zero value otherwise.

### GetNationalityDescriptionOk

`func (o *StagedProfileCustomerType) GetNationalityDescriptionOk() (*string, bool)`

GetNationalityDescriptionOk returns a tuple with the NationalityDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalityDescription

`func (o *StagedProfileCustomerType) SetNationalityDescription(v string)`

SetNationalityDescription sets NationalityDescription field to given value.

### HasNationalityDescription

`func (o *StagedProfileCustomerType) HasNationalityDescription() bool`

HasNationalityDescription returns a boolean if a field has been set.

### GetPersonName

`func (o *StagedProfileCustomerType) GetPersonName() []PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *StagedProfileCustomerType) GetPersonNameOk() (*[]PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *StagedProfileCustomerType) SetPersonName(v []PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *StagedProfileCustomerType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.

### GetPrivateProfile

`func (o *StagedProfileCustomerType) GetPrivateProfile() bool`

GetPrivateProfile returns the PrivateProfile field if non-nil, zero value otherwise.

### GetPrivateProfileOk

`func (o *StagedProfileCustomerType) GetPrivateProfileOk() (*bool, bool)`

GetPrivateProfileOk returns a tuple with the PrivateProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateProfile

`func (o *StagedProfileCustomerType) SetPrivateProfile(v bool)`

SetPrivateProfile sets PrivateProfile field to given value.

### HasPrivateProfile

`func (o *StagedProfileCustomerType) HasPrivateProfile() bool`

HasPrivateProfile returns a boolean if a field has been set.

### GetProfession

`func (o *StagedProfileCustomerType) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *StagedProfileCustomerType) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *StagedProfileCustomerType) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *StagedProfileCustomerType) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### GetVipDescription

`func (o *StagedProfileCustomerType) GetVipDescription() string`

GetVipDescription returns the VipDescription field if non-nil, zero value otherwise.

### GetVipDescriptionOk

`func (o *StagedProfileCustomerType) GetVipDescriptionOk() (*string, bool)`

GetVipDescriptionOk returns a tuple with the VipDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipDescription

`func (o *StagedProfileCustomerType) SetVipDescription(v string)`

SetVipDescription sets VipDescription field to given value.

### HasVipDescription

`func (o *StagedProfileCustomerType) HasVipDescription() bool`

HasVipDescription returns a boolean if a field has been set.

### GetVipStatus

`func (o *StagedProfileCustomerType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *StagedProfileCustomerType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *StagedProfileCustomerType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *StagedProfileCustomerType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


