# VerifiedCheckinReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**[]HotelReservationType**](HotelReservationType.md) | Reservation record showing the current state of the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVerifiedCheckinReservation

`func NewVerifiedCheckinReservation() *VerifiedCheckinReservation`

NewVerifiedCheckinReservation instantiates a new VerifiedCheckinReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifiedCheckinReservationWithDefaults

`func NewVerifiedCheckinReservationWithDefaults() *VerifiedCheckinReservation`

NewVerifiedCheckinReservationWithDefaults instantiates a new VerifiedCheckinReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *VerifiedCheckinReservation) GetReservation() []HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *VerifiedCheckinReservation) GetReservationOk() (*[]HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *VerifiedCheckinReservation) SetReservation(v []HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *VerifiedCheckinReservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetLinks

`func (o *VerifiedCheckinReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VerifiedCheckinReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VerifiedCheckinReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VerifiedCheckinReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VerifiedCheckinReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VerifiedCheckinReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VerifiedCheckinReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VerifiedCheckinReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


