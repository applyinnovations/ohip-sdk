# TemplateMarketGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**ChainCode** | Pointer to **string** | Chain code for the code type. | [optional] 
**TemplateMarketCode** | Pointer to [**[]TemplateMarketCodeType**](TemplateMarketCodeType.md) | Collection of Template Market Codes. | [optional] 
**Central** | Pointer to **bool** | Indicates if market code is originated from Central. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewTemplateMarketGroupType

`func NewTemplateMarketGroupType() *TemplateMarketGroupType`

NewTemplateMarketGroupType instantiates a new TemplateMarketGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketGroupTypeWithDefaults

`func NewTemplateMarketGroupTypeWithDefaults() *TemplateMarketGroupType`

NewTemplateMarketGroupTypeWithDefaults instantiates a new TemplateMarketGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateMarketGroupType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateMarketGroupType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateMarketGroupType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateMarketGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateMarketGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateMarketGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateMarketGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateMarketGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *TemplateMarketGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateMarketGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateMarketGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateMarketGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateMarketGroupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateMarketGroupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateMarketGroupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateMarketGroupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetChainCode

`func (o *TemplateMarketGroupType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *TemplateMarketGroupType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *TemplateMarketGroupType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *TemplateMarketGroupType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetTemplateMarketCode

`func (o *TemplateMarketGroupType) GetTemplateMarketCode() []TemplateMarketCodeType`

GetTemplateMarketCode returns the TemplateMarketCode field if non-nil, zero value otherwise.

### GetTemplateMarketCodeOk

`func (o *TemplateMarketGroupType) GetTemplateMarketCodeOk() (*[]TemplateMarketCodeType, bool)`

GetTemplateMarketCodeOk returns a tuple with the TemplateMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketCode

`func (o *TemplateMarketGroupType) SetTemplateMarketCode(v []TemplateMarketCodeType)`

SetTemplateMarketCode sets TemplateMarketCode field to given value.

### HasTemplateMarketCode

`func (o *TemplateMarketGroupType) HasTemplateMarketCode() bool`

HasTemplateMarketCode returns a boolean if a field has been set.

### GetCentral

`func (o *TemplateMarketGroupType) GetCentral() bool`

GetCentral returns the Central field if non-nil, zero value otherwise.

### GetCentralOk

`func (o *TemplateMarketGroupType) GetCentralOk() (*bool, bool)`

GetCentralOk returns a tuple with the Central field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentral

`func (o *TemplateMarketGroupType) SetCentral(v bool)`

SetCentral sets Central field to given value.

### HasCentral

`func (o *TemplateMarketGroupType) HasCentral() bool`

HasCentral returns a boolean if a field has been set.

### GetManagedBy

`func (o *TemplateMarketGroupType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *TemplateMarketGroupType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *TemplateMarketGroupType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *TemplateMarketGroupType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


