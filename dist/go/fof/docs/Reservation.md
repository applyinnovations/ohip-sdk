# Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FetchReservationInstruction** | Pointer to [**[]CheckedInReservationInstructionType**](CheckedInReservationInstructionType.md) | Instructions to fetch reservations . | [optional] 
**IncludeNotifications** | Pointer to **bool** | When \&quot;true\&quot; alerts and comments are fetched. When \&quot;false\&quot;, these alerts and comments are not retrieved. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservation** | Pointer to [**ReservationReservation**](ReservationReservation.md) |  | [optional] 
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

### GetFetchReservationInstruction

`func (o *Reservation) GetFetchReservationInstruction() []CheckedInReservationInstructionType`

GetFetchReservationInstruction returns the FetchReservationInstruction field if non-nil, zero value otherwise.

### GetFetchReservationInstructionOk

`func (o *Reservation) GetFetchReservationInstructionOk() (*[]CheckedInReservationInstructionType, bool)`

GetFetchReservationInstructionOk returns a tuple with the FetchReservationInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchReservationInstruction

`func (o *Reservation) SetFetchReservationInstruction(v []CheckedInReservationInstructionType)`

SetFetchReservationInstruction sets FetchReservationInstruction field to given value.

### HasFetchReservationInstruction

`func (o *Reservation) HasFetchReservationInstruction() bool`

HasFetchReservationInstruction returns a boolean if a field has been set.

### GetIncludeNotifications

`func (o *Reservation) GetIncludeNotifications() bool`

GetIncludeNotifications returns the IncludeNotifications field if non-nil, zero value otherwise.

### GetIncludeNotificationsOk

`func (o *Reservation) GetIncludeNotificationsOk() (*bool, bool)`

GetIncludeNotificationsOk returns a tuple with the IncludeNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNotifications

`func (o *Reservation) SetIncludeNotifications(v bool)`

SetIncludeNotifications sets IncludeNotifications field to given value.

### HasIncludeNotifications

`func (o *Reservation) HasIncludeNotifications() bool`

HasIncludeNotifications returns a boolean if a field has been set.

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

### GetReservation

`func (o *Reservation) GetReservation() ReservationReservation`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *Reservation) GetReservationOk() (*ReservationReservation, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *Reservation) SetReservation(v ReservationReservation)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *Reservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

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


