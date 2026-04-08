# Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**CheckoutReservationType**](CheckoutReservationType.md) |  | [optional] 
**VerificationOnly** | Pointer to **bool** | VerificationOnly \&quot;true\&quot; validates the hotel code and reservation id supplied in the request. VerificationOnly \&quot;false\&quot; validates and then check-out the guest using the request details. Following codes might be returned during the verification: FOF00065 - The hotel code and/or reservation id is missing. FOF00066 - Reservation can&#39;t be found with the supplied hotel code and reservation id. FOF00107 - The guest&#39;s departure is not scheduled for today. Check-out not possible. FOF00109 - The guest&#39;s reservation is not in a valid status for check-out. FOF00108 - The guest has a balance. Check-out not possible. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservation

`func NewReservation() *Reservation`

NewReservation instantiates a new Reservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationWithDefaults

`func NewReservationWithDefaults() *Reservation`

NewReservationWithDefaults instantiates a new Reservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *Reservation) GetReservation() CheckoutReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *Reservation) GetReservationOk() (*CheckoutReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *Reservation) SetReservation(v CheckoutReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *Reservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *Reservation) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *Reservation) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *Reservation) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *Reservation) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetLinks

`func (o *Reservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Reservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Reservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Reservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Reservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Reservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Reservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Reservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


