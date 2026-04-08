# ConfigHotelPreferenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description about the preference. | [optional] 
**Code** | Pointer to **string** | Specifies the preference code. | [optional] 
**PreferenceGroup** | Pointer to **string** | Specifies the preference group the preference belongs to. | [optional] 
**PreferenceSubGroup** | Pointer to **string** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**Housekeeping** | Pointer to **bool** | Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code for which the preference is specified. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewConfigHotelPreferenceType

`func NewConfigHotelPreferenceType() *ConfigHotelPreferenceType`

NewConfigHotelPreferenceType instantiates a new ConfigHotelPreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigHotelPreferenceTypeWithDefaults

`func NewConfigHotelPreferenceTypeWithDefaults() *ConfigHotelPreferenceType`

NewConfigHotelPreferenceTypeWithDefaults instantiates a new ConfigHotelPreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigHotelPreferenceType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigHotelPreferenceType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigHotelPreferenceType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigHotelPreferenceType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCode

`func (o *ConfigHotelPreferenceType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigHotelPreferenceType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigHotelPreferenceType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigHotelPreferenceType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetPreferenceGroup

`func (o *ConfigHotelPreferenceType) GetPreferenceGroup() string`

GetPreferenceGroup returns the PreferenceGroup field if non-nil, zero value otherwise.

### GetPreferenceGroupOk

`func (o *ConfigHotelPreferenceType) GetPreferenceGroupOk() (*string, bool)`

GetPreferenceGroupOk returns a tuple with the PreferenceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceGroup

`func (o *ConfigHotelPreferenceType) SetPreferenceGroup(v string)`

SetPreferenceGroup sets PreferenceGroup field to given value.

### HasPreferenceGroup

`func (o *ConfigHotelPreferenceType) HasPreferenceGroup() bool`

HasPreferenceGroup returns a boolean if a field has been set.

### GetPreferenceSubGroup

`func (o *ConfigHotelPreferenceType) GetPreferenceSubGroup() string`

GetPreferenceSubGroup returns the PreferenceSubGroup field if non-nil, zero value otherwise.

### GetPreferenceSubGroupOk

`func (o *ConfigHotelPreferenceType) GetPreferenceSubGroupOk() (*string, bool)`

GetPreferenceSubGroupOk returns a tuple with the PreferenceSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceSubGroup

`func (o *ConfigHotelPreferenceType) SetPreferenceSubGroup(v string)`

SetPreferenceSubGroup sets PreferenceSubGroup field to given value.

### HasPreferenceSubGroup

`func (o *ConfigHotelPreferenceType) HasPreferenceSubGroup() bool`

HasPreferenceSubGroup returns a boolean if a field has been set.

### GetHousekeeping

`func (o *ConfigHotelPreferenceType) GetHousekeeping() bool`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *ConfigHotelPreferenceType) GetHousekeepingOk() (*bool, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *ConfigHotelPreferenceType) SetHousekeeping(v bool)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *ConfigHotelPreferenceType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ConfigHotelPreferenceType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ConfigHotelPreferenceType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ConfigHotelPreferenceType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ConfigHotelPreferenceType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigHotelPreferenceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigHotelPreferenceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigHotelPreferenceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigHotelPreferenceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManagedBy

`func (o *ConfigHotelPreferenceType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *ConfigHotelPreferenceType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *ConfigHotelPreferenceType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *ConfigHotelPreferenceType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


