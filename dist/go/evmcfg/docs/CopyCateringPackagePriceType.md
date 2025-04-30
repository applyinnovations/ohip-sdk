# CopyCateringPackagePriceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code associated with the newly copied Catering Package Price. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyCateringPackagePriceType

`func NewCopyCateringPackagePriceType() *CopyCateringPackagePriceType`

NewCopyCateringPackagePriceType instantiates a new CopyCateringPackagePriceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringPackagePriceTypeWithDefaults

`func NewCopyCateringPackagePriceTypeWithDefaults() *CopyCateringPackagePriceType`

NewCopyCateringPackagePriceTypeWithDefaults instantiates a new CopyCateringPackagePriceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CopyCateringPackagePriceType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CopyCateringPackagePriceType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CopyCateringPackagePriceType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CopyCateringPackagePriceType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *CopyCateringPackagePriceType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *CopyCateringPackagePriceType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *CopyCateringPackagePriceType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *CopyCateringPackagePriceType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCateringPackagePriceType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCateringPackagePriceType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCateringPackagePriceType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCateringPackagePriceType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


