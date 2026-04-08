# StagedProfileCompanyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyName** | Pointer to **string** | Name of the company. | [optional] 
**CompanyName2** | Pointer to **string** | Second Name of the company. | [optional] 
**CompanyName3** | Pointer to **string** | Third Name of the company. | [optional] 
**AlternateName** | Pointer to **string** | Alternate Name of the Company. Mainly, it&#39;s the name of the company written in the Alternate Language. | [optional] 
**AlternateLanguage** | Pointer to **string** | Alternate Language of the company. | [optional] 
**BusinessLocale** | Pointer to **string** | A jurisdiction(Territory) in which a company is authorized to do business. | [optional] 
**IATAInfo** | Pointer to [**IATAInfoType**](IATAInfoType.md) |  | [optional] 
**BusinessTitle** | Pointer to **string** | Business Title. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification | [optional] 
**NationalityDescription** | Pointer to **string** | Nationality code description | [optional] 
**CommissionCode** | Pointer to **string** | Commission code of the company. | [optional] 
**CreditRating** | Pointer to **string** | Credit Rating of the company. | [optional] 
**CorporateIdType** | Pointer to **string** | The type of corporate ID | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the company. | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 
**Blacklist** | Pointer to **bool** | This element tells if profile is blacklisted or not. | [optional] 
**Errors** | Pointer to [**[]StagedProfileErrorType**](StagedProfileErrorType.md) | The error in stage profile. | [optional] 

## Methods

### NewStagedProfileCompanyType

`func NewStagedProfileCompanyType() *StagedProfileCompanyType`

NewStagedProfileCompanyType instantiates a new StagedProfileCompanyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileCompanyTypeWithDefaults

`func NewStagedProfileCompanyTypeWithDefaults() *StagedProfileCompanyType`

NewStagedProfileCompanyTypeWithDefaults instantiates a new StagedProfileCompanyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyName

`func (o *StagedProfileCompanyType) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *StagedProfileCompanyType) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *StagedProfileCompanyType) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *StagedProfileCompanyType) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetCompanyName2

`func (o *StagedProfileCompanyType) GetCompanyName2() string`

GetCompanyName2 returns the CompanyName2 field if non-nil, zero value otherwise.

### GetCompanyName2Ok

`func (o *StagedProfileCompanyType) GetCompanyName2Ok() (*string, bool)`

GetCompanyName2Ok returns a tuple with the CompanyName2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName2

`func (o *StagedProfileCompanyType) SetCompanyName2(v string)`

SetCompanyName2 sets CompanyName2 field to given value.

### HasCompanyName2

`func (o *StagedProfileCompanyType) HasCompanyName2() bool`

HasCompanyName2 returns a boolean if a field has been set.

### GetCompanyName3

`func (o *StagedProfileCompanyType) GetCompanyName3() string`

GetCompanyName3 returns the CompanyName3 field if non-nil, zero value otherwise.

### GetCompanyName3Ok

`func (o *StagedProfileCompanyType) GetCompanyName3Ok() (*string, bool)`

GetCompanyName3Ok returns a tuple with the CompanyName3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName3

`func (o *StagedProfileCompanyType) SetCompanyName3(v string)`

SetCompanyName3 sets CompanyName3 field to given value.

### HasCompanyName3

`func (o *StagedProfileCompanyType) HasCompanyName3() bool`

HasCompanyName3 returns a boolean if a field has been set.

### GetAlternateName

`func (o *StagedProfileCompanyType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *StagedProfileCompanyType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *StagedProfileCompanyType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *StagedProfileCompanyType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.

### GetAlternateLanguage

`func (o *StagedProfileCompanyType) GetAlternateLanguage() string`

GetAlternateLanguage returns the AlternateLanguage field if non-nil, zero value otherwise.

### GetAlternateLanguageOk

`func (o *StagedProfileCompanyType) GetAlternateLanguageOk() (*string, bool)`

GetAlternateLanguageOk returns a tuple with the AlternateLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateLanguage

`func (o *StagedProfileCompanyType) SetAlternateLanguage(v string)`

SetAlternateLanguage sets AlternateLanguage field to given value.

### HasAlternateLanguage

`func (o *StagedProfileCompanyType) HasAlternateLanguage() bool`

HasAlternateLanguage returns a boolean if a field has been set.

### GetBusinessLocale

`func (o *StagedProfileCompanyType) GetBusinessLocale() string`

GetBusinessLocale returns the BusinessLocale field if non-nil, zero value otherwise.

### GetBusinessLocaleOk

`func (o *StagedProfileCompanyType) GetBusinessLocaleOk() (*string, bool)`

GetBusinessLocaleOk returns a tuple with the BusinessLocale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessLocale

`func (o *StagedProfileCompanyType) SetBusinessLocale(v string)`

SetBusinessLocale sets BusinessLocale field to given value.

### HasBusinessLocale

`func (o *StagedProfileCompanyType) HasBusinessLocale() bool`

HasBusinessLocale returns a boolean if a field has been set.

### GetIATAInfo

`func (o *StagedProfileCompanyType) GetIATAInfo() IATAInfoType`

GetIATAInfo returns the IATAInfo field if non-nil, zero value otherwise.

### GetIATAInfoOk

`func (o *StagedProfileCompanyType) GetIATAInfoOk() (*IATAInfoType, bool)`

GetIATAInfoOk returns a tuple with the IATAInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIATAInfo

`func (o *StagedProfileCompanyType) SetIATAInfo(v IATAInfoType)`

SetIATAInfo sets IATAInfo field to given value.

### HasIATAInfo

`func (o *StagedProfileCompanyType) HasIATAInfo() bool`

HasIATAInfo returns a boolean if a field has been set.

### GetBusinessTitle

`func (o *StagedProfileCompanyType) GetBusinessTitle() string`

GetBusinessTitle returns the BusinessTitle field if non-nil, zero value otherwise.

### GetBusinessTitleOk

`func (o *StagedProfileCompanyType) GetBusinessTitleOk() (*string, bool)`

GetBusinessTitleOk returns a tuple with the BusinessTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessTitle

`func (o *StagedProfileCompanyType) SetBusinessTitle(v string)`

SetBusinessTitle sets BusinessTitle field to given value.

### HasBusinessTitle

`func (o *StagedProfileCompanyType) HasBusinessTitle() bool`

HasBusinessTitle returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *StagedProfileCompanyType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *StagedProfileCompanyType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *StagedProfileCompanyType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *StagedProfileCompanyType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *StagedProfileCompanyType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *StagedProfileCompanyType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *StagedProfileCompanyType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *StagedProfileCompanyType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *StagedProfileCompanyType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *StagedProfileCompanyType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *StagedProfileCompanyType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *StagedProfileCompanyType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetLanguage

`func (o *StagedProfileCompanyType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *StagedProfileCompanyType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *StagedProfileCompanyType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *StagedProfileCompanyType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetNationality

`func (o *StagedProfileCompanyType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *StagedProfileCompanyType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *StagedProfileCompanyType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *StagedProfileCompanyType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetNationalityDescription

`func (o *StagedProfileCompanyType) GetNationalityDescription() string`

GetNationalityDescription returns the NationalityDescription field if non-nil, zero value otherwise.

### GetNationalityDescriptionOk

`func (o *StagedProfileCompanyType) GetNationalityDescriptionOk() (*string, bool)`

GetNationalityDescriptionOk returns a tuple with the NationalityDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalityDescription

`func (o *StagedProfileCompanyType) SetNationalityDescription(v string)`

SetNationalityDescription sets NationalityDescription field to given value.

### HasNationalityDescription

`func (o *StagedProfileCompanyType) HasNationalityDescription() bool`

HasNationalityDescription returns a boolean if a field has been set.

### GetCommissionCode

`func (o *StagedProfileCompanyType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *StagedProfileCompanyType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *StagedProfileCompanyType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *StagedProfileCompanyType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCreditRating

`func (o *StagedProfileCompanyType) GetCreditRating() string`

GetCreditRating returns the CreditRating field if non-nil, zero value otherwise.

### GetCreditRatingOk

`func (o *StagedProfileCompanyType) GetCreditRatingOk() (*string, bool)`

GetCreditRatingOk returns a tuple with the CreditRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRating

`func (o *StagedProfileCompanyType) SetCreditRating(v string)`

SetCreditRating sets CreditRating field to given value.

### HasCreditRating

`func (o *StagedProfileCompanyType) HasCreditRating() bool`

HasCreditRating returns a boolean if a field has been set.

### GetCorporateIdType

`func (o *StagedProfileCompanyType) GetCorporateIdType() string`

GetCorporateIdType returns the CorporateIdType field if non-nil, zero value otherwise.

### GetCorporateIdTypeOk

`func (o *StagedProfileCompanyType) GetCorporateIdTypeOk() (*string, bool)`

GetCorporateIdTypeOk returns a tuple with the CorporateIdType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateIdType

`func (o *StagedProfileCompanyType) SetCorporateIdType(v string)`

SetCorporateIdType sets CorporateIdType field to given value.

### HasCorporateIdType

`func (o *StagedProfileCompanyType) HasCorporateIdType() bool`

HasCorporateIdType returns a boolean if a field has been set.

### GetVipStatus

`func (o *StagedProfileCompanyType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *StagedProfileCompanyType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *StagedProfileCompanyType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *StagedProfileCompanyType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetVipDescription

`func (o *StagedProfileCompanyType) GetVipDescription() string`

GetVipDescription returns the VipDescription field if non-nil, zero value otherwise.

### GetVipDescriptionOk

`func (o *StagedProfileCompanyType) GetVipDescriptionOk() (*string, bool)`

GetVipDescriptionOk returns a tuple with the VipDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipDescription

`func (o *StagedProfileCompanyType) SetVipDescription(v string)`

SetVipDescription sets VipDescription field to given value.

### HasVipDescription

`func (o *StagedProfileCompanyType) HasVipDescription() bool`

HasVipDescription returns a boolean if a field has been set.

### GetBlacklist

`func (o *StagedProfileCompanyType) GetBlacklist() bool`

GetBlacklist returns the Blacklist field if non-nil, zero value otherwise.

### GetBlacklistOk

`func (o *StagedProfileCompanyType) GetBlacklistOk() (*bool, bool)`

GetBlacklistOk returns a tuple with the Blacklist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlacklist

`func (o *StagedProfileCompanyType) SetBlacklist(v bool)`

SetBlacklist sets Blacklist field to given value.

### HasBlacklist

`func (o *StagedProfileCompanyType) HasBlacklist() bool`

HasBlacklist returns a boolean if a field has been set.

### GetErrors

`func (o *StagedProfileCompanyType) GetErrors() []StagedProfileErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *StagedProfileCompanyType) GetErrorsOk() (*[]StagedProfileErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *StagedProfileCompanyType) SetErrors(v []StagedProfileErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *StagedProfileCompanyType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


