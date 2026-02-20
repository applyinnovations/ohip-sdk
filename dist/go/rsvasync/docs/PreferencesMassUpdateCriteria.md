# PreferencesMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**PreferenceCollection** | Pointer to [**[]PreferencesTypeType**](PreferencesTypeType.md) | Collection of reservation preferences. | [optional] 
**CopyToProfile** | Pointer to **bool** | Specifies whether to copy the reservation preference to the profile or not. | [optional] 

## Methods

### NewPreferencesMassUpdateCriteria

`func NewPreferencesMassUpdateCriteria() *PreferencesMassUpdateCriteria`

NewPreferencesMassUpdateCriteria instantiates a new PreferencesMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferencesMassUpdateCriteriaWithDefaults

`func NewPreferencesMassUpdateCriteriaWithDefaults() *PreferencesMassUpdateCriteria`

NewPreferencesMassUpdateCriteriaWithDefaults instantiates a new PreferencesMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *PreferencesMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *PreferencesMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *PreferencesMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *PreferencesMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *PreferencesMassUpdateCriteria) GetPreferenceCollection() []PreferencesTypeType`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *PreferencesMassUpdateCriteria) GetPreferenceCollectionOk() (*[]PreferencesTypeType, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *PreferencesMassUpdateCriteria) SetPreferenceCollection(v []PreferencesTypeType)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *PreferencesMassUpdateCriteria) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetCopyToProfile

`func (o *PreferencesMassUpdateCriteria) GetCopyToProfile() bool`

GetCopyToProfile returns the CopyToProfile field if non-nil, zero value otherwise.

### GetCopyToProfileOk

`func (o *PreferencesMassUpdateCriteria) GetCopyToProfileOk() (*bool, bool)`

GetCopyToProfileOk returns a tuple with the CopyToProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToProfile

`func (o *PreferencesMassUpdateCriteria) SetCopyToProfile(v bool)`

SetCopyToProfile sets CopyToProfile field to given value.

### HasCopyToProfile

`func (o *PreferencesMassUpdateCriteria) HasCopyToProfile() bool`

HasCopyToProfile returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


