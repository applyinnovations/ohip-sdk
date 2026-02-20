# ReservationAlerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]ReservationAlertsType**](ReservationAlertsType.md) | Holds multiple alerts for a single reservation. Reservation will be identified by a unique identifier/ list of unique identifiers. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationAlerts

`func NewReservationAlerts() *ReservationAlerts`

NewReservationAlerts instantiates a new ReservationAlerts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAlertsWithDefaults

`func NewReservationAlertsWithDefaults() *ReservationAlerts`

NewReservationAlertsWithDefaults instantiates a new ReservationAlerts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *ReservationAlerts) GetReservations() []ReservationAlertsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ReservationAlerts) GetReservationsOk() (*[]ReservationAlertsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ReservationAlerts) SetReservations(v []ReservationAlertsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ReservationAlerts) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationAlerts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationAlerts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationAlerts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationAlerts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationAlerts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationAlerts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationAlerts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationAlerts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


