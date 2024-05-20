# ConfigCopyPreferencesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCodes** | Pointer to **[]string** |  | [optional] 
**TemplatePreferences** | Pointer to [**[]ConfigTemplatePreferenceIDType**](ConfigTemplatePreferenceIDType.md) | Template preference to be copied to the hotel(s). | [optional] 

## Methods

### NewConfigCopyPreferencesType

`func NewConfigCopyPreferencesType() *ConfigCopyPreferencesType`

NewConfigCopyPreferencesType instantiates a new ConfigCopyPreferencesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigCopyPreferencesTypeWithDefaults

`func NewConfigCopyPreferencesTypeWithDefaults() *ConfigCopyPreferencesType`

NewConfigCopyPreferencesTypeWithDefaults instantiates a new ConfigCopyPreferencesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCodes

`func (o *ConfigCopyPreferencesType) GetHotelCodes() []string`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *ConfigCopyPreferencesType) GetHotelCodesOk() (*[]string, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *ConfigCopyPreferencesType) SetHotelCodes(v []string)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *ConfigCopyPreferencesType) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetTemplatePreferences

`func (o *ConfigCopyPreferencesType) GetTemplatePreferences() []ConfigTemplatePreferenceIDType`

GetTemplatePreferences returns the TemplatePreferences field if non-nil, zero value otherwise.

### GetTemplatePreferencesOk

`func (o *ConfigCopyPreferencesType) GetTemplatePreferencesOk() (*[]ConfigTemplatePreferenceIDType, bool)`

GetTemplatePreferencesOk returns a tuple with the TemplatePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplatePreferences

`func (o *ConfigCopyPreferencesType) SetTemplatePreferences(v []ConfigTemplatePreferenceIDType)`

SetTemplatePreferences sets TemplatePreferences field to given value.

### HasTemplatePreferences

`func (o *ConfigCopyPreferencesType) HasTemplatePreferences() bool`

HasTemplatePreferences returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


