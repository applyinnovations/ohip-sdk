# CompanyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateLanguage** | Pointer to **string** | Alternate Language of the company. | [optional] 
**AlternateName** | Pointer to **string** | Alternate Name of the Company. Mainly, it&#39;s the name of the company written in the Alternate Language. | [optional] 
**Blacklist** | Pointer to **bool** | This element tells if profile is blacklisted or not. | [optional] 
**BusinessLocale** | Pointer to **string** | A jurisdiction(Territory) in which a company is authorized to do business. | [optional] 
**BusinessTitle** | Pointer to **string** | Business Title. | [optional] 
**CommissionCode** | Pointer to **string** | Commission code of the company. | [optional] 
**CompanyName** | Pointer to **string** | Name of the company. | [optional] 
**CompanyName2** | Pointer to **string** | Second Name of the company. | [optional] 
**CompanyName3** | Pointer to **string** | Third Name of the company. | [optional] 
**CorporateIdType** | Pointer to **string** | The type of corporate ID | [optional] 
**CreditRating** | Pointer to **string** | Credit Rating of the company. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**IATAInfo** | Pointer to [**IATAInfoType**](IATAInfoType.md) |  | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification | [optional] 
**NationalityDescription** | Pointer to **string** | Nationality code description | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the company. | [optional] 

## Methods

### NewCompanyType

`func NewCompanyType() *CompanyType`

NewCompanyType instantiates a new CompanyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyTypeWithDefaults

`func NewCompanyTypeWithDefaults() *CompanyType`

NewCompanyTypeWithDefaults instantiates a new CompanyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateLanguage

`func (o *CompanyType) GetAlternateLanguage() string`

GetAlternateLanguage returns the AlternateLanguage field if non-nil, zero value otherwise.

### GetAlternateLanguageOk

`func (o *CompanyType) GetAlternateLanguageOk() (*string, bool)`

GetAlternateLanguageOk returns a tuple with the AlternateLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateLanguage

`func (o *CompanyType) SetAlternateLanguage(v string)`

SetAlternateLanguage sets AlternateLanguage field to given value.

### HasAlternateLanguage

`func (o *CompanyType) HasAlternateLanguage() bool`

HasAlternateLanguage returns a boolean if a field has been set.

### GetAlternateName

`func (o *CompanyType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *CompanyType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *CompanyType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *CompanyType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.

### GetBlacklist

`func (o *CompanyType) GetBlacklist() bool`

GetBlacklist returns the Blacklist field if non-nil, zero value otherwise.

### GetBlacklistOk

`func (o *CompanyType) GetBlacklistOk() (*bool, bool)`

GetBlacklistOk returns a tuple with the Blacklist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlacklist

`func (o *CompanyType) SetBlacklist(v bool)`

SetBlacklist sets Blacklist field to given value.

### HasBlacklist

`func (o *CompanyType) HasBlacklist() bool`

HasBlacklist returns a boolean if a field has been set.

### GetBusinessLocale

`func (o *CompanyType) GetBusinessLocale() string`

GetBusinessLocale returns the BusinessLocale field if non-nil, zero value otherwise.

### GetBusinessLocaleOk

`func (o *CompanyType) GetBusinessLocaleOk() (*string, bool)`

GetBusinessLocaleOk returns a tuple with the BusinessLocale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessLocale

`func (o *CompanyType) SetBusinessLocale(v string)`

SetBusinessLocale sets BusinessLocale field to given value.

### HasBusinessLocale

`func (o *CompanyType) HasBusinessLocale() bool`

HasBusinessLocale returns a boolean if a field has been set.

### GetBusinessTitle

`func (o *CompanyType) GetBusinessTitle() string`

GetBusinessTitle returns the BusinessTitle field if non-nil, zero value otherwise.

### GetBusinessTitleOk

`func (o *CompanyType) GetBusinessTitleOk() (*string, bool)`

GetBusinessTitleOk returns a tuple with the BusinessTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessTitle

`func (o *CompanyType) SetBusinessTitle(v string)`

SetBusinessTitle sets BusinessTitle field to given value.

### HasBusinessTitle

`func (o *CompanyType) HasBusinessTitle() bool`

HasBusinessTitle returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CompanyType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CompanyType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CompanyType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CompanyType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCompanyName

`func (o *CompanyType) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *CompanyType) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *CompanyType) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *CompanyType) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetCompanyName2

`func (o *CompanyType) GetCompanyName2() string`

GetCompanyName2 returns the CompanyName2 field if non-nil, zero value otherwise.

### GetCompanyName2Ok

`func (o *CompanyType) GetCompanyName2Ok() (*string, bool)`

GetCompanyName2Ok returns a tuple with the CompanyName2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName2

`func (o *CompanyType) SetCompanyName2(v string)`

SetCompanyName2 sets CompanyName2 field to given value.

### HasCompanyName2

`func (o *CompanyType) HasCompanyName2() bool`

HasCompanyName2 returns a boolean if a field has been set.

### GetCompanyName3

`func (o *CompanyType) GetCompanyName3() string`

GetCompanyName3 returns the CompanyName3 field if non-nil, zero value otherwise.

### GetCompanyName3Ok

`func (o *CompanyType) GetCompanyName3Ok() (*string, bool)`

GetCompanyName3Ok returns a tuple with the CompanyName3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName3

`func (o *CompanyType) SetCompanyName3(v string)`

SetCompanyName3 sets CompanyName3 field to given value.

### HasCompanyName3

`func (o *CompanyType) HasCompanyName3() bool`

HasCompanyName3 returns a boolean if a field has been set.

### GetCorporateIdType

`func (o *CompanyType) GetCorporateIdType() string`

GetCorporateIdType returns the CorporateIdType field if non-nil, zero value otherwise.

### GetCorporateIdTypeOk

`func (o *CompanyType) GetCorporateIdTypeOk() (*string, bool)`

GetCorporateIdTypeOk returns a tuple with the CorporateIdType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateIdType

`func (o *CompanyType) SetCorporateIdType(v string)`

SetCorporateIdType sets CorporateIdType field to given value.

### HasCorporateIdType

`func (o *CompanyType) HasCorporateIdType() bool`

HasCorporateIdType returns a boolean if a field has been set.

### GetCreditRating

`func (o *CompanyType) GetCreditRating() string`

GetCreditRating returns the CreditRating field if non-nil, zero value otherwise.

### GetCreditRatingOk

`func (o *CompanyType) GetCreditRatingOk() (*string, bool)`

GetCreditRatingOk returns a tuple with the CreditRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRating

`func (o *CompanyType) SetCreditRating(v string)`

SetCreditRating sets CreditRating field to given value.

### HasCreditRating

`func (o *CompanyType) HasCreditRating() bool`

HasCreditRating returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *CompanyType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *CompanyType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *CompanyType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *CompanyType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *CompanyType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *CompanyType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *CompanyType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *CompanyType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *CompanyType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *CompanyType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *CompanyType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *CompanyType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetIATAInfo

`func (o *CompanyType) GetIATAInfo() IATAInfoType`

GetIATAInfo returns the IATAInfo field if non-nil, zero value otherwise.

### GetIATAInfoOk

`func (o *CompanyType) GetIATAInfoOk() (*IATAInfoType, bool)`

GetIATAInfoOk returns a tuple with the IATAInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIATAInfo

`func (o *CompanyType) SetIATAInfo(v IATAInfoType)`

SetIATAInfo sets IATAInfo field to given value.

### HasIATAInfo

`func (o *CompanyType) HasIATAInfo() bool`

HasIATAInfo returns a boolean if a field has been set.

### GetLanguage

`func (o *CompanyType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *CompanyType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *CompanyType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *CompanyType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetNationality

`func (o *CompanyType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *CompanyType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *CompanyType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *CompanyType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetNationalityDescription

`func (o *CompanyType) GetNationalityDescription() string`

GetNationalityDescription returns the NationalityDescription field if non-nil, zero value otherwise.

### GetNationalityDescriptionOk

`func (o *CompanyType) GetNationalityDescriptionOk() (*string, bool)`

GetNationalityDescriptionOk returns a tuple with the NationalityDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalityDescription

`func (o *CompanyType) SetNationalityDescription(v string)`

SetNationalityDescription sets NationalityDescription field to given value.

### HasNationalityDescription

`func (o *CompanyType) HasNationalityDescription() bool`

HasNationalityDescription returns a boolean if a field has been set.

### GetVipDescription

`func (o *CompanyType) GetVipDescription() string`

GetVipDescription returns the VipDescription field if non-nil, zero value otherwise.

### GetVipDescriptionOk

`func (o *CompanyType) GetVipDescriptionOk() (*string, bool)`

GetVipDescriptionOk returns a tuple with the VipDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipDescription

`func (o *CompanyType) SetVipDescription(v string)`

SetVipDescription sets VipDescription field to given value.

### HasVipDescription

`func (o *CompanyType) HasVipDescription() bool`

HasVipDescription returns a boolean if a field has been set.

### GetVipStatus

`func (o *CompanyType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *CompanyType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *CompanyType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *CompanyType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


