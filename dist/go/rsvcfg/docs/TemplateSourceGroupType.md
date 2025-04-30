# TemplateSourceGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**ChainCode** | Pointer to **string** | Chain code for the code type. | [optional] 
**TemplateSourceCode** | Pointer to [**[]TemplateSourceCodeType**](TemplateSourceCodeType.md) | Collection of Template Source Codes. | [optional] 
**Central** | Pointer to **bool** | Indicates if market code is originated from Central. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewTemplateSourceGroupType

`func NewTemplateSourceGroupType() *TemplateSourceGroupType`

NewTemplateSourceGroupType instantiates a new TemplateSourceGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateSourceGroupTypeWithDefaults

`func NewTemplateSourceGroupTypeWithDefaults() *TemplateSourceGroupType`

NewTemplateSourceGroupTypeWithDefaults instantiates a new TemplateSourceGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateSourceGroupType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateSourceGroupType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateSourceGroupType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateSourceGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateSourceGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateSourceGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateSourceGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateSourceGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *TemplateSourceGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateSourceGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateSourceGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateSourceGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateSourceGroupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateSourceGroupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateSourceGroupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateSourceGroupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetChainCode

`func (o *TemplateSourceGroupType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *TemplateSourceGroupType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *TemplateSourceGroupType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *TemplateSourceGroupType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetTemplateSourceCode

`func (o *TemplateSourceGroupType) GetTemplateSourceCode() []TemplateSourceCodeType`

GetTemplateSourceCode returns the TemplateSourceCode field if non-nil, zero value otherwise.

### GetTemplateSourceCodeOk

`func (o *TemplateSourceGroupType) GetTemplateSourceCodeOk() (*[]TemplateSourceCodeType, bool)`

GetTemplateSourceCodeOk returns a tuple with the TemplateSourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSourceCode

`func (o *TemplateSourceGroupType) SetTemplateSourceCode(v []TemplateSourceCodeType)`

SetTemplateSourceCode sets TemplateSourceCode field to given value.

### HasTemplateSourceCode

`func (o *TemplateSourceGroupType) HasTemplateSourceCode() bool`

HasTemplateSourceCode returns a boolean if a field has been set.

### GetCentral

`func (o *TemplateSourceGroupType) GetCentral() bool`

GetCentral returns the Central field if non-nil, zero value otherwise.

### GetCentralOk

`func (o *TemplateSourceGroupType) GetCentralOk() (*bool, bool)`

GetCentralOk returns a tuple with the Central field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentral

`func (o *TemplateSourceGroupType) SetCentral(v bool)`

SetCentral sets Central field to given value.

### HasCentral

`func (o *TemplateSourceGroupType) HasCentral() bool`

HasCentral returns a boolean if a field has been set.

### GetManagedBy

`func (o *TemplateSourceGroupType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *TemplateSourceGroupType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *TemplateSourceGroupType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *TemplateSourceGroupType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


