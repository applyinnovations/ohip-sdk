# StagedProfilePreferenceType

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
**ErrorDescription** | Pointer to **string** | The error in Preference information in a staged profile with an invalid status | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the record. | [optional] 
**ResortPrefernce** | Pointer to **string** | Prefernce resort. | [optional] 
**Valid** | Pointer to **bool** | Indicated whether the preference information is valid. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfilePreferenceType

`func NewStagedProfilePreferenceType() *StagedProfilePreferenceType`

NewStagedProfilePreferenceType instantiates a new StagedProfilePreferenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfilePreferenceTypeWithDefaults

`func NewStagedProfilePreferenceTypeWithDefaults() *StagedProfilePreferenceType`

NewStagedProfilePreferenceTypeWithDefaults instantiates a new StagedProfilePreferenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceValue

`func (o *StagedProfilePreferenceType) GetPreferenceValue() string`

GetPreferenceValue returns the PreferenceValue field if non-nil, zero value otherwise.

### GetPreferenceValueOk

`func (o *StagedProfilePreferenceType) GetPreferenceValueOk() (*string, bool)`

GetPreferenceValueOk returns a tuple with the PreferenceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceValue

`func (o *StagedProfilePreferenceType) SetPreferenceValue(v string)`

SetPreferenceValue sets PreferenceValue field to given value.

### HasPreferenceValue

`func (o *StagedProfilePreferenceType) HasPreferenceValue() bool`

HasPreferenceValue returns a boolean if a field has been set.

### GetDescription

`func (o *StagedProfilePreferenceType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StagedProfilePreferenceType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StagedProfilePreferenceType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StagedProfilePreferenceType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGlobal

`func (o *StagedProfilePreferenceType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *StagedProfilePreferenceType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *StagedProfilePreferenceType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *StagedProfilePreferenceType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetSource

`func (o *StagedProfilePreferenceType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *StagedProfilePreferenceType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *StagedProfilePreferenceType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *StagedProfilePreferenceType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetHotels

`func (o *StagedProfilePreferenceType) GetHotels() []string`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *StagedProfilePreferenceType) GetHotelsOk() (*[]string, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *StagedProfilePreferenceType) SetHotels(v []string)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *StagedProfilePreferenceType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetPreferenceCode

`func (o *StagedProfilePreferenceType) GetPreferenceCode() string`

GetPreferenceCode returns the PreferenceCode field if non-nil, zero value otherwise.

### GetPreferenceCodeOk

`func (o *StagedProfilePreferenceType) GetPreferenceCodeOk() (*string, bool)`

GetPreferenceCodeOk returns a tuple with the PreferenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCode

`func (o *StagedProfilePreferenceType) SetPreferenceCode(v string)`

SetPreferenceCode sets PreferenceCode field to given value.

### HasPreferenceCode

`func (o *StagedProfilePreferenceType) HasPreferenceCode() bool`

HasPreferenceCode returns a boolean if a field has been set.

### GetExcludedPreferencesCount

`func (o *StagedProfilePreferenceType) GetExcludedPreferencesCount() int32`

GetExcludedPreferencesCount returns the ExcludedPreferencesCount field if non-nil, zero value otherwise.

### GetExcludedPreferencesCountOk

`func (o *StagedProfilePreferenceType) GetExcludedPreferencesCountOk() (*int32, bool)`

GetExcludedPreferencesCountOk returns a tuple with the ExcludedPreferencesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedPreferencesCount

`func (o *StagedProfilePreferenceType) SetExcludedPreferencesCount(v int32)`

SetExcludedPreferencesCount sets ExcludedPreferencesCount field to given value.

### HasExcludedPreferencesCount

`func (o *StagedProfilePreferenceType) HasExcludedPreferencesCount() bool`

HasExcludedPreferencesCount returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfilePreferenceType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfilePreferenceType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfilePreferenceType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfilePreferenceType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfilePreferenceType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfilePreferenceType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfilePreferenceType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfilePreferenceType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetResortPrefernce

`func (o *StagedProfilePreferenceType) GetResortPrefernce() string`

GetResortPrefernce returns the ResortPrefernce field if non-nil, zero value otherwise.

### GetResortPrefernceOk

`func (o *StagedProfilePreferenceType) GetResortPrefernceOk() (*string, bool)`

GetResortPrefernceOk returns a tuple with the ResortPrefernce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResortPrefernce

`func (o *StagedProfilePreferenceType) SetResortPrefernce(v string)`

SetResortPrefernce sets ResortPrefernce field to given value.

### HasResortPrefernce

`func (o *StagedProfilePreferenceType) HasResortPrefernce() bool`

HasResortPrefernce returns a boolean if a field has been set.

### GetValid

`func (o *StagedProfilePreferenceType) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *StagedProfilePreferenceType) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *StagedProfilePreferenceType) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *StagedProfilePreferenceType) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetId

`func (o *StagedProfilePreferenceType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfilePreferenceType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfilePreferenceType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfilePreferenceType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfilePreferenceType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfilePreferenceType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfilePreferenceType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfilePreferenceType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


