# PreferenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceValue** | Pointer to **string** | Preference value for display purposes. | [optional] 
**Description** | Pointer to **string** | Preference Description for display purposes. | [optional] 
**Global** | Pointer to **bool** | Whether this preference is property specific or not. | [optional] 
**Source** | Pointer to **string** | Source of the preference. | [optional] 
**Hotels** | Pointer to **[]string** | If specified preference belongs to the Hotels listed, otherwise it is a global preference. | [optional] 
**PreferenceCode** | Pointer to **string** |  | [optional] 
**ExcludedPreferencesCount** | Pointer to **int32** | Specifies the count of preferences excluded for the attached reservation preference. | [optional] 
**CopyToProfile** | Pointer to **bool** | Specifies whether to copy the reservation preference to the profile or not. | [optional] 

## Methods

### NewPreferenceType

`func NewPreferenceType() *PreferenceType`

NewPreferenceType instantiates a new PreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferenceTypeWithDefaults

`func NewPreferenceTypeWithDefaults() *PreferenceType`

NewPreferenceTypeWithDefaults instantiates a new PreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceValue

`func (o *PreferenceType) GetPreferenceValue() string`

GetPreferenceValue returns the PreferenceValue field if non-nil, zero value otherwise.

### GetPreferenceValueOk

`func (o *PreferenceType) GetPreferenceValueOk() (*string, bool)`

GetPreferenceValueOk returns a tuple with the PreferenceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceValue

`func (o *PreferenceType) SetPreferenceValue(v string)`

SetPreferenceValue sets PreferenceValue field to given value.

### HasPreferenceValue

`func (o *PreferenceType) HasPreferenceValue() bool`

HasPreferenceValue returns a boolean if a field has been set.

### GetDescription

`func (o *PreferenceType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PreferenceType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PreferenceType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PreferenceType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGlobal

`func (o *PreferenceType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *PreferenceType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *PreferenceType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *PreferenceType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetSource

`func (o *PreferenceType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *PreferenceType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *PreferenceType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *PreferenceType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetHotels

`func (o *PreferenceType) GetHotels() []string`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *PreferenceType) GetHotelsOk() (*[]string, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *PreferenceType) SetHotels(v []string)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *PreferenceType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetPreferenceCode

`func (o *PreferenceType) GetPreferenceCode() string`

GetPreferenceCode returns the PreferenceCode field if non-nil, zero value otherwise.

### GetPreferenceCodeOk

`func (o *PreferenceType) GetPreferenceCodeOk() (*string, bool)`

GetPreferenceCodeOk returns a tuple with the PreferenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCode

`func (o *PreferenceType) SetPreferenceCode(v string)`

SetPreferenceCode sets PreferenceCode field to given value.

### HasPreferenceCode

`func (o *PreferenceType) HasPreferenceCode() bool`

HasPreferenceCode returns a boolean if a field has been set.

### GetExcludedPreferencesCount

`func (o *PreferenceType) GetExcludedPreferencesCount() int32`

GetExcludedPreferencesCount returns the ExcludedPreferencesCount field if non-nil, zero value otherwise.

### GetExcludedPreferencesCountOk

`func (o *PreferenceType) GetExcludedPreferencesCountOk() (*int32, bool)`

GetExcludedPreferencesCountOk returns a tuple with the ExcludedPreferencesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedPreferencesCount

`func (o *PreferenceType) SetExcludedPreferencesCount(v int32)`

SetExcludedPreferencesCount sets ExcludedPreferencesCount field to given value.

### HasExcludedPreferencesCount

`func (o *PreferenceType) HasExcludedPreferencesCount() bool`

HasExcludedPreferencesCount returns a boolean if a field has been set.

### GetCopyToProfile

`func (o *PreferenceType) GetCopyToProfile() bool`

GetCopyToProfile returns the CopyToProfile field if non-nil, zero value otherwise.

### GetCopyToProfileOk

`func (o *PreferenceType) GetCopyToProfileOk() (*bool, bool)`

GetCopyToProfileOk returns a tuple with the CopyToProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToProfile

`func (o *PreferenceType) SetCopyToProfile(v bool)`

SetCopyToProfile sets CopyToProfile field to given value.

### HasCopyToProfile

`func (o *PreferenceType) HasCopyToProfile() bool`

HasCopyToProfile returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


