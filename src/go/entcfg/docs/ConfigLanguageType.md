# ConfigLanguageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**LanguageCode** | Pointer to **string** | Language Code is a user definable code that identifies a language. | [optional] 
**Locale** | Pointer to **string** | Geographic, political or cultural region. | [optional] 
**LocaleDescription** | Pointer to **string** | Description for the locale. | [optional] 
**ReportDateLanguage** | Pointer to **string** | Report Date Language if filled will represent correctly in the report language date elements that might be spelled out, like the day-of-week or the month. | [optional] 
**TranslationLanguageCode** | Pointer to **string** | Translation Language Code is required for the Translation Studio program to display language into which object has been translated. | [optional] 
**UseAsAlternateLanguage** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 

## Methods

### NewConfigLanguageType

`func NewConfigLanguageType() *ConfigLanguageType`

NewConfigLanguageType instantiates a new ConfigLanguageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigLanguageTypeWithDefaults

`func NewConfigLanguageTypeWithDefaults() *ConfigLanguageType`

NewConfigLanguageTypeWithDefaults instantiates a new ConfigLanguageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigLanguageType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigLanguageType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigLanguageType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigLanguageType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLanguageCode

`func (o *ConfigLanguageType) GetLanguageCode() string`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *ConfigLanguageType) GetLanguageCodeOk() (*string, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *ConfigLanguageType) SetLanguageCode(v string)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *ConfigLanguageType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetLocale

`func (o *ConfigLanguageType) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ConfigLanguageType) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ConfigLanguageType) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ConfigLanguageType) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetLocaleDescription

`func (o *ConfigLanguageType) GetLocaleDescription() string`

GetLocaleDescription returns the LocaleDescription field if non-nil, zero value otherwise.

### GetLocaleDescriptionOk

`func (o *ConfigLanguageType) GetLocaleDescriptionOk() (*string, bool)`

GetLocaleDescriptionOk returns a tuple with the LocaleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleDescription

`func (o *ConfigLanguageType) SetLocaleDescription(v string)`

SetLocaleDescription sets LocaleDescription field to given value.

### HasLocaleDescription

`func (o *ConfigLanguageType) HasLocaleDescription() bool`

HasLocaleDescription returns a boolean if a field has been set.

### GetReportDateLanguage

`func (o *ConfigLanguageType) GetReportDateLanguage() string`

GetReportDateLanguage returns the ReportDateLanguage field if non-nil, zero value otherwise.

### GetReportDateLanguageOk

`func (o *ConfigLanguageType) GetReportDateLanguageOk() (*string, bool)`

GetReportDateLanguageOk returns a tuple with the ReportDateLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDateLanguage

`func (o *ConfigLanguageType) SetReportDateLanguage(v string)`

SetReportDateLanguage sets ReportDateLanguage field to given value.

### HasReportDateLanguage

`func (o *ConfigLanguageType) HasReportDateLanguage() bool`

HasReportDateLanguage returns a boolean if a field has been set.

### GetTranslationLanguageCode

`func (o *ConfigLanguageType) GetTranslationLanguageCode() string`

GetTranslationLanguageCode returns the TranslationLanguageCode field if non-nil, zero value otherwise.

### GetTranslationLanguageCodeOk

`func (o *ConfigLanguageType) GetTranslationLanguageCodeOk() (*string, bool)`

GetTranslationLanguageCodeOk returns a tuple with the TranslationLanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationLanguageCode

`func (o *ConfigLanguageType) SetTranslationLanguageCode(v string)`

SetTranslationLanguageCode sets TranslationLanguageCode field to given value.

### HasTranslationLanguageCode

`func (o *ConfigLanguageType) HasTranslationLanguageCode() bool`

HasTranslationLanguageCode returns a boolean if a field has been set.

### GetUseAsAlternateLanguage

`func (o *ConfigLanguageType) GetUseAsAlternateLanguage() bool`

GetUseAsAlternateLanguage returns the UseAsAlternateLanguage field if non-nil, zero value otherwise.

### GetUseAsAlternateLanguageOk

`func (o *ConfigLanguageType) GetUseAsAlternateLanguageOk() (*bool, bool)`

GetUseAsAlternateLanguageOk returns a tuple with the UseAsAlternateLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAsAlternateLanguage

`func (o *ConfigLanguageType) SetUseAsAlternateLanguage(v bool)`

SetUseAsAlternateLanguage sets UseAsAlternateLanguage field to given value.

### HasUseAsAlternateLanguage

`func (o *ConfigLanguageType) HasUseAsAlternateLanguage() bool`

HasUseAsAlternateLanguage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


