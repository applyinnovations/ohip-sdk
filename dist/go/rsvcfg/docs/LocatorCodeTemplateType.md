# LocatorCodeTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Description** | Pointer to **string** | Description for the code type. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence for locator code | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the locator code is active or not | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewLocatorCodeTemplateType

`func NewLocatorCodeTemplateType() *LocatorCodeTemplateType`

NewLocatorCodeTemplateType instantiates a new LocatorCodeTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocatorCodeTemplateTypeWithDefaults

`func NewLocatorCodeTemplateTypeWithDefaults() *LocatorCodeTemplateType`

NewLocatorCodeTemplateTypeWithDefaults instantiates a new LocatorCodeTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *LocatorCodeTemplateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *LocatorCodeTemplateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *LocatorCodeTemplateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *LocatorCodeTemplateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *LocatorCodeTemplateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LocatorCodeTemplateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LocatorCodeTemplateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LocatorCodeTemplateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *LocatorCodeTemplateType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *LocatorCodeTemplateType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *LocatorCodeTemplateType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *LocatorCodeTemplateType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetInactive

`func (o *LocatorCodeTemplateType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *LocatorCodeTemplateType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *LocatorCodeTemplateType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *LocatorCodeTemplateType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetManagedBy

`func (o *LocatorCodeTemplateType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *LocatorCodeTemplateType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *LocatorCodeTemplateType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *LocatorCodeTemplateType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


