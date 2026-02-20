# GuestMessageTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for the guest message type | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence for guest message template. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewGuestMessageTemplateType

`func NewGuestMessageTemplateType() *GuestMessageTemplateType`

NewGuestMessageTemplateType instantiates a new GuestMessageTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestMessageTemplateTypeWithDefaults

`func NewGuestMessageTemplateTypeWithDefaults() *GuestMessageTemplateType`

NewGuestMessageTemplateTypeWithDefaults instantiates a new GuestMessageTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *GuestMessageTemplateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *GuestMessageTemplateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *GuestMessageTemplateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *GuestMessageTemplateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *GuestMessageTemplateType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GuestMessageTemplateType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GuestMessageTemplateType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GuestMessageTemplateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *GuestMessageTemplateType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *GuestMessageTemplateType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *GuestMessageTemplateType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *GuestMessageTemplateType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetManagedBy

`func (o *GuestMessageTemplateType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *GuestMessageTemplateType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *GuestMessageTemplateType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *GuestMessageTemplateType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


