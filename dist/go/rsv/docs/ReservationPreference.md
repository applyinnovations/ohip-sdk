# ReservationPreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationPreferences** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | For reservation preferences, you will want to send ReservationPreferenceType as the preferenceType object to acknowledge any reservation related process with the request. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationPreference

`func NewReservationPreference() *ReservationPreference`

NewReservationPreference instantiates a new ReservationPreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPreferenceWithDefaults

`func NewReservationPreferenceWithDefaults() *ReservationPreference`

NewReservationPreferenceWithDefaults instantiates a new ReservationPreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationPreferences

`func (o *ReservationPreference) GetReservationPreferences() []PreferenceTypeType`

GetReservationPreferences returns the ReservationPreferences field if non-nil, zero value otherwise.

### GetReservationPreferencesOk

`func (o *ReservationPreference) GetReservationPreferencesOk() (*[]PreferenceTypeType, bool)`

GetReservationPreferencesOk returns a tuple with the ReservationPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPreferences

`func (o *ReservationPreference) SetReservationPreferences(v []PreferenceTypeType)`

SetReservationPreferences sets ReservationPreferences field to given value.

### HasReservationPreferences

`func (o *ReservationPreference) HasReservationPreferences() bool`

HasReservationPreferences returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationPreference) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationPreference) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationPreference) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationPreference) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationPreference) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationPreference) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationPreference) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationPreference) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


