# TranslationTextType60

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultText** | Pointer to **string** | Default text with Character length from 0 to 60. | [optional] 
**Translations** | Pointer to [**[]TranslationsTextTypeInner**](TranslationsTextTypeInner.md) | Language code for the translation. | [optional] 

## Methods

### NewTranslationTextType60

`func NewTranslationTextType60() *TranslationTextType60`

NewTranslationTextType60 instantiates a new TranslationTextType60 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationTextType60WithDefaults

`func NewTranslationTextType60WithDefaults() *TranslationTextType60`

NewTranslationTextType60WithDefaults instantiates a new TranslationTextType60 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultText

`func (o *TranslationTextType60) GetDefaultText() string`

GetDefaultText returns the DefaultText field if non-nil, zero value otherwise.

### GetDefaultTextOk

`func (o *TranslationTextType60) GetDefaultTextOk() (*string, bool)`

GetDefaultTextOk returns a tuple with the DefaultText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultText

`func (o *TranslationTextType60) SetDefaultText(v string)`

SetDefaultText sets DefaultText field to given value.

### HasDefaultText

`func (o *TranslationTextType60) HasDefaultText() bool`

HasDefaultText returns a boolean if a field has been set.

### GetTranslations

`func (o *TranslationTextType60) GetTranslations() []TranslationsTextTypeInner`

GetTranslations returns the Translations field if non-nil, zero value otherwise.

### GetTranslationsOk

`func (o *TranslationTextType60) GetTranslationsOk() (*[]TranslationsTextTypeInner, bool)`

GetTranslationsOk returns a tuple with the Translations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslations

`func (o *TranslationTextType60) SetTranslations(v []TranslationsTextTypeInner)`

SetTranslations sets Translations field to given value.

### HasTranslations

`func (o *TranslationTextType60) HasTranslations() bool`

HasTranslations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


