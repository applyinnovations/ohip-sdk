# ReservationPreferenceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationPreferences** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Preference information for the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationPreferenceInfo

`func NewReservationPreferenceInfo() *ReservationPreferenceInfo`

NewReservationPreferenceInfo instantiates a new ReservationPreferenceInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPreferenceInfoWithDefaults

`func NewReservationPreferenceInfoWithDefaults() *ReservationPreferenceInfo`

NewReservationPreferenceInfoWithDefaults instantiates a new ReservationPreferenceInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationPreferenceInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationPreferenceInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationPreferenceInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationPreferenceInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationPreferenceInfo) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationPreferenceInfo) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationPreferenceInfo) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationPreferenceInfo) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationPreferences

`func (o *ReservationPreferenceInfo) GetReservationPreferences() []PreferenceTypeType`

GetReservationPreferences returns the ReservationPreferences field if non-nil, zero value otherwise.

### GetReservationPreferencesOk

`func (o *ReservationPreferenceInfo) GetReservationPreferencesOk() (*[]PreferenceTypeType, bool)`

GetReservationPreferencesOk returns a tuple with the ReservationPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPreferences

`func (o *ReservationPreferenceInfo) SetReservationPreferences(v []PreferenceTypeType)`

SetReservationPreferences sets ReservationPreferences field to given value.

### HasReservationPreferences

`func (o *ReservationPreferenceInfo) HasReservationPreferences() bool`

HasReservationPreferences returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationPreferenceInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationPreferenceInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationPreferenceInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationPreferenceInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationPreferenceInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationPreferenceInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationPreferenceInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationPreferenceInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


