# CopyCateringPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code associated with the newly copied Catering Package/template. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyCateringPackageType

`func NewCopyCateringPackageType() *CopyCateringPackageType`

NewCopyCateringPackageType instantiates a new CopyCateringPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringPackageTypeWithDefaults

`func NewCopyCateringPackageTypeWithDefaults() *CopyCateringPackageType`

NewCopyCateringPackageTypeWithDefaults instantiates a new CopyCateringPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CopyCateringPackageType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CopyCateringPackageType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CopyCateringPackageType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CopyCateringPackageType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *CopyCateringPackageType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *CopyCateringPackageType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *CopyCateringPackageType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *CopyCateringPackageType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCateringPackageType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCateringPackageType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCateringPackageType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCateringPackageType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


