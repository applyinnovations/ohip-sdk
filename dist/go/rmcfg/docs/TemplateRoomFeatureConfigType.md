# TemplateRoomFeatureConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**ChainCode** | Pointer to **string** | Chain code for the code type. | [optional] 
**GroupCode** | Pointer to **string** | Group code to which this code type belongs. | [optional] 
**Global** | Pointer to **bool** | Specifies whether the room feature is to be available for selection at all hotels. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewTemplateRoomFeatureConfigType

`func NewTemplateRoomFeatureConfigType() *TemplateRoomFeatureConfigType`

NewTemplateRoomFeatureConfigType instantiates a new TemplateRoomFeatureConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRoomFeatureConfigTypeWithDefaults

`func NewTemplateRoomFeatureConfigTypeWithDefaults() *TemplateRoomFeatureConfigType`

NewTemplateRoomFeatureConfigTypeWithDefaults instantiates a new TemplateRoomFeatureConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateRoomFeatureConfigType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateRoomFeatureConfigType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateRoomFeatureConfigType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateRoomFeatureConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateRoomFeatureConfigType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateRoomFeatureConfigType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateRoomFeatureConfigType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateRoomFeatureConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *TemplateRoomFeatureConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateRoomFeatureConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateRoomFeatureConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateRoomFeatureConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateRoomFeatureConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateRoomFeatureConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateRoomFeatureConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateRoomFeatureConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetChainCode

`func (o *TemplateRoomFeatureConfigType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *TemplateRoomFeatureConfigType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *TemplateRoomFeatureConfigType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *TemplateRoomFeatureConfigType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetGroupCode

`func (o *TemplateRoomFeatureConfigType) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *TemplateRoomFeatureConfigType) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *TemplateRoomFeatureConfigType) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *TemplateRoomFeatureConfigType) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.

### GetGlobal

`func (o *TemplateRoomFeatureConfigType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *TemplateRoomFeatureConfigType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *TemplateRoomFeatureConfigType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *TemplateRoomFeatureConfigType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetManagedBy

`func (o *TemplateRoomFeatureConfigType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *TemplateRoomFeatureConfigType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *TemplateRoomFeatureConfigType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *TemplateRoomFeatureConfigType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


