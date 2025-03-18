# ExcludedPreferenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Priority** | Pointer to **int32** | Priority of the source system. | [optional] 
**Preference** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Source** | Pointer to **string** | Source name of the preference. | [optional] 

## Methods

### NewExcludedPreferenceType

`func NewExcludedPreferenceType() *ExcludedPreferenceType`

NewExcludedPreferenceType instantiates a new ExcludedPreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExcludedPreferenceTypeWithDefaults

`func NewExcludedPreferenceTypeWithDefaults() *ExcludedPreferenceType`

NewExcludedPreferenceTypeWithDefaults instantiates a new ExcludedPreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPriority

`func (o *ExcludedPreferenceType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ExcludedPreferenceType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ExcludedPreferenceType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ExcludedPreferenceType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetPreference

`func (o *ExcludedPreferenceType) GetPreference() CodeDescriptionType`

GetPreference returns the Preference field if non-nil, zero value otherwise.

### GetPreferenceOk

`func (o *ExcludedPreferenceType) GetPreferenceOk() (*CodeDescriptionType, bool)`

GetPreferenceOk returns a tuple with the Preference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference

`func (o *ExcludedPreferenceType) SetPreference(v CodeDescriptionType)`

SetPreference sets Preference field to given value.

### HasPreference

`func (o *ExcludedPreferenceType) HasPreference() bool`

HasPreference returns a boolean if a field has been set.

### GetSource

`func (o *ExcludedPreferenceType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ExcludedPreferenceType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ExcludedPreferenceType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *ExcludedPreferenceType) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


