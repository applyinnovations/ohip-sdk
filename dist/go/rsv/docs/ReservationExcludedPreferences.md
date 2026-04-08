# ReservationExcludedPreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationExcludedPreferences** | Pointer to [**[]ExcludedPreferenceType**](ExcludedPreferenceType.md) | Collection of excluded preferences for a particular preference of a reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationExcludedPreferences

`func NewReservationExcludedPreferences() *ReservationExcludedPreferences`

NewReservationExcludedPreferences instantiates a new ReservationExcludedPreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationExcludedPreferencesWithDefaults

`func NewReservationExcludedPreferencesWithDefaults() *ReservationExcludedPreferences`

NewReservationExcludedPreferencesWithDefaults instantiates a new ReservationExcludedPreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationExcludedPreferences

`func (o *ReservationExcludedPreferences) GetReservationExcludedPreferences() []ExcludedPreferenceType`

GetReservationExcludedPreferences returns the ReservationExcludedPreferences field if non-nil, zero value otherwise.

### GetReservationExcludedPreferencesOk

`func (o *ReservationExcludedPreferences) GetReservationExcludedPreferencesOk() (*[]ExcludedPreferenceType, bool)`

GetReservationExcludedPreferencesOk returns a tuple with the ReservationExcludedPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationExcludedPreferences

`func (o *ReservationExcludedPreferences) SetReservationExcludedPreferences(v []ExcludedPreferenceType)`

SetReservationExcludedPreferences sets ReservationExcludedPreferences field to given value.

### HasReservationExcludedPreferences

`func (o *ReservationExcludedPreferences) HasReservationExcludedPreferences() bool`

HasReservationExcludedPreferences returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationExcludedPreferences) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationExcludedPreferences) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationExcludedPreferences) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationExcludedPreferences) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationExcludedPreferences) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationExcludedPreferences) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationExcludedPreferences) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationExcludedPreferences) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


