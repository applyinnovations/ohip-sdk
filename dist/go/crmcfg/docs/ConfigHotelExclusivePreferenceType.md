# ConfigHotelExclusivePreferenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Specifies the Exclusive preference code. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code for which the Exclusive preference is specified. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PreferenceCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Specifies the preference code and its description mapped to the exclusive preference. | [optional] 
**PreferenceGroup** | Pointer to **string** | Specifies the preference group the Exclusive preference belongs to. | [optional] 

## Methods

### NewConfigHotelExclusivePreferenceType

`func NewConfigHotelExclusivePreferenceType() *ConfigHotelExclusivePreferenceType`

NewConfigHotelExclusivePreferenceType instantiates a new ConfigHotelExclusivePreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigHotelExclusivePreferenceTypeWithDefaults

`func NewConfigHotelExclusivePreferenceTypeWithDefaults() *ConfigHotelExclusivePreferenceType`

NewConfigHotelExclusivePreferenceTypeWithDefaults instantiates a new ConfigHotelExclusivePreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ConfigHotelExclusivePreferenceType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigHotelExclusivePreferenceType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigHotelExclusivePreferenceType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigHotelExclusivePreferenceType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigHotelExclusivePreferenceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigHotelExclusivePreferenceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigHotelExclusivePreferenceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigHotelExclusivePreferenceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ConfigHotelExclusivePreferenceType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ConfigHotelExclusivePreferenceType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ConfigHotelExclusivePreferenceType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ConfigHotelExclusivePreferenceType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPreferenceCodes

`func (o *ConfigHotelExclusivePreferenceType) GetPreferenceCodes() []CodeDescriptionType`

GetPreferenceCodes returns the PreferenceCodes field if non-nil, zero value otherwise.

### GetPreferenceCodesOk

`func (o *ConfigHotelExclusivePreferenceType) GetPreferenceCodesOk() (*[]CodeDescriptionType, bool)`

GetPreferenceCodesOk returns a tuple with the PreferenceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCodes

`func (o *ConfigHotelExclusivePreferenceType) SetPreferenceCodes(v []CodeDescriptionType)`

SetPreferenceCodes sets PreferenceCodes field to given value.

### HasPreferenceCodes

`func (o *ConfigHotelExclusivePreferenceType) HasPreferenceCodes() bool`

HasPreferenceCodes returns a boolean if a field has been set.

### GetPreferenceGroup

`func (o *ConfigHotelExclusivePreferenceType) GetPreferenceGroup() string`

GetPreferenceGroup returns the PreferenceGroup field if non-nil, zero value otherwise.

### GetPreferenceGroupOk

`func (o *ConfigHotelExclusivePreferenceType) GetPreferenceGroupOk() (*string, bool)`

GetPreferenceGroupOk returns a tuple with the PreferenceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceGroup

`func (o *ConfigHotelExclusivePreferenceType) SetPreferenceGroup(v string)`

SetPreferenceGroup sets PreferenceGroup field to given value.

### HasPreferenceGroup

`func (o *ConfigHotelExclusivePreferenceType) HasPreferenceGroup() bool`

HasPreferenceGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


