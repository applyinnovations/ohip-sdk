# TranslationTextType80

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultText** | Pointer to **string** | Default text with Character length from 0 to 80. | [optional] 
**TranslatedTexts** | Pointer to [**[]TranslationsTextTypeInner**](TranslationsTextTypeInner.md) | Language code for the translation. | [optional] 

## Methods

### NewTranslationTextType80

`func NewTranslationTextType80() *TranslationTextType80`

NewTranslationTextType80 instantiates a new TranslationTextType80 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationTextType80WithDefaults

`func NewTranslationTextType80WithDefaults() *TranslationTextType80`

NewTranslationTextType80WithDefaults instantiates a new TranslationTextType80 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultText

`func (o *TranslationTextType80) GetDefaultText() string`

GetDefaultText returns the DefaultText field if non-nil, zero value otherwise.

### GetDefaultTextOk

`func (o *TranslationTextType80) GetDefaultTextOk() (*string, bool)`

GetDefaultTextOk returns a tuple with the DefaultText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultText

`func (o *TranslationTextType80) SetDefaultText(v string)`

SetDefaultText sets DefaultText field to given value.

### HasDefaultText

`func (o *TranslationTextType80) HasDefaultText() bool`

HasDefaultText returns a boolean if a field has been set.

### GetTranslatedTexts

`func (o *TranslationTextType80) GetTranslatedTexts() []TranslationsTextTypeInner`

GetTranslatedTexts returns the TranslatedTexts field if non-nil, zero value otherwise.

### GetTranslatedTextsOk

`func (o *TranslationTextType80) GetTranslatedTextsOk() (*[]TranslationsTextTypeInner, bool)`

GetTranslatedTextsOk returns a tuple with the TranslatedTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedTexts

`func (o *TranslationTextType80) SetTranslatedTexts(v []TranslationsTextTypeInner)`

SetTranslatedTexts sets TranslatedTexts field to given value.

### HasTranslatedTexts

`func (o *TranslationTextType80) HasTranslatedTexts() bool`

HasTranslatedTexts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


