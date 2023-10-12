# ConfigTemplatePreferenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description about the preference. | [optional] 
**Code** | Pointer to **string** | Specifies the preference code. | [optional] 
**PreferenceGroup** | Pointer to **string** | Specifies the preference group the preference belongs to. | [optional] 
**PreferenceSubGroup** | Pointer to **string** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**Housekeeping** | Pointer to **bool** | Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**Global** | Pointer to **bool** | Specifies whether the preference is to be available for selection at all properties . | [optional] 

## Methods

### NewConfigTemplatePreferenceType

`func NewConfigTemplatePreferenceType() *ConfigTemplatePreferenceType`

NewConfigTemplatePreferenceType instantiates a new ConfigTemplatePreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigTemplatePreferenceTypeWithDefaults

`func NewConfigTemplatePreferenceTypeWithDefaults() *ConfigTemplatePreferenceType`

NewConfigTemplatePreferenceTypeWithDefaults instantiates a new ConfigTemplatePreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigTemplatePreferenceType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigTemplatePreferenceType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigTemplatePreferenceType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigTemplatePreferenceType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCode

`func (o *ConfigTemplatePreferenceType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigTemplatePreferenceType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigTemplatePreferenceType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigTemplatePreferenceType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetPreferenceGroup

`func (o *ConfigTemplatePreferenceType) GetPreferenceGroup() string`

GetPreferenceGroup returns the PreferenceGroup field if non-nil, zero value otherwise.

### GetPreferenceGroupOk

`func (o *ConfigTemplatePreferenceType) GetPreferenceGroupOk() (*string, bool)`

GetPreferenceGroupOk returns a tuple with the PreferenceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceGroup

`func (o *ConfigTemplatePreferenceType) SetPreferenceGroup(v string)`

SetPreferenceGroup sets PreferenceGroup field to given value.

### HasPreferenceGroup

`func (o *ConfigTemplatePreferenceType) HasPreferenceGroup() bool`

HasPreferenceGroup returns a boolean if a field has been set.

### GetPreferenceSubGroup

`func (o *ConfigTemplatePreferenceType) GetPreferenceSubGroup() string`

GetPreferenceSubGroup returns the PreferenceSubGroup field if non-nil, zero value otherwise.

### GetPreferenceSubGroupOk

`func (o *ConfigTemplatePreferenceType) GetPreferenceSubGroupOk() (*string, bool)`

GetPreferenceSubGroupOk returns a tuple with the PreferenceSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceSubGroup

`func (o *ConfigTemplatePreferenceType) SetPreferenceSubGroup(v string)`

SetPreferenceSubGroup sets PreferenceSubGroup field to given value.

### HasPreferenceSubGroup

`func (o *ConfigTemplatePreferenceType) HasPreferenceSubGroup() bool`

HasPreferenceSubGroup returns a boolean if a field has been set.

### GetHousekeeping

`func (o *ConfigTemplatePreferenceType) GetHousekeeping() bool`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *ConfigTemplatePreferenceType) GetHousekeepingOk() (*bool, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *ConfigTemplatePreferenceType) SetHousekeeping(v bool)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *ConfigTemplatePreferenceType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ConfigTemplatePreferenceType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ConfigTemplatePreferenceType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ConfigTemplatePreferenceType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ConfigTemplatePreferenceType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetGlobal

`func (o *ConfigTemplatePreferenceType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *ConfigTemplatePreferenceType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *ConfigTemplatePreferenceType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *ConfigTemplatePreferenceType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


