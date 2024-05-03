# TranslationTextType200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultText** | Pointer to **string** | Default text with Character length from 0 to 200. | [optional] 
**Translations** | Pointer to [**[]TranslationsTextTypeInner**](TranslationsTextTypeInner.md) | Language code for the translation. | [optional] 

## Methods

### NewTranslationTextType200

`func NewTranslationTextType200() *TranslationTextType200`

NewTranslationTextType200 instantiates a new TranslationTextType200 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationTextType200WithDefaults

`func NewTranslationTextType200WithDefaults() *TranslationTextType200`

NewTranslationTextType200WithDefaults instantiates a new TranslationTextType200 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultText

`func (o *TranslationTextType200) GetDefaultText() string`

GetDefaultText returns the DefaultText field if non-nil, zero value otherwise.

### GetDefaultTextOk

`func (o *TranslationTextType200) GetDefaultTextOk() (*string, bool)`

GetDefaultTextOk returns a tuple with the DefaultText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultText

`func (o *TranslationTextType200) SetDefaultText(v string)`

SetDefaultText sets DefaultText field to given value.

### HasDefaultText

`func (o *TranslationTextType200) HasDefaultText() bool`

HasDefaultText returns a boolean if a field has been set.

### GetTranslations

`func (o *TranslationTextType200) GetTranslations() []TranslationsTextTypeInner`

GetTranslations returns the Translations field if non-nil, zero value otherwise.

### GetTranslationsOk

`func (o *TranslationTextType200) GetTranslationsOk() (*[]TranslationsTextTypeInner, bool)`

GetTranslationsOk returns a tuple with the Translations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslations

`func (o *TranslationTextType200) SetTranslations(v []TranslationsTextTypeInner)`

SetTranslations sets Translations field to given value.

### HasTranslations

`func (o *TranslationTextType200) HasTranslations() bool`

HasTranslations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


