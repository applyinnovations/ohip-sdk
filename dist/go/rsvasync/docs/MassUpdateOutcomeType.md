# MassUpdateOutcomeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to **float32** | Unique Reservation Id | [optional] 
**GuestFullName** | Pointer to **string** | Guest&#39;s Full display name. | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number of the reservation. | [optional] 
**ArrivalDate** | Pointer to **string** | Display the arrival date of the guest. | [optional] 
**DepartureDate** | Pointer to **string** | Display the departure date of the guest. | [optional] 
**RoomId** | Pointer to **string** | Display room number if it has been assigned. | [optional] 
**UpdateStatus** | Pointer to **string** | Update Status. | [optional] 
**OutcomeMessages** | Pointer to **map[string]interface{}** | Status of the update | [optional] 

## Methods

### NewMassUpdateOutcomeType

`func NewMassUpdateOutcomeType() *MassUpdateOutcomeType`

NewMassUpdateOutcomeType instantiates a new MassUpdateOutcomeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateOutcomeTypeWithDefaults

`func NewMassUpdateOutcomeTypeWithDefaults() *MassUpdateOutcomeType`

NewMassUpdateOutcomeTypeWithDefaults instantiates a new MassUpdateOutcomeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *MassUpdateOutcomeType) GetReservationId() float32`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *MassUpdateOutcomeType) GetReservationIdOk() (*float32, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *MassUpdateOutcomeType) SetReservationId(v float32)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *MassUpdateOutcomeType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetGuestFullName

`func (o *MassUpdateOutcomeType) GetGuestFullName() string`

GetGuestFullName returns the GuestFullName field if non-nil, zero value otherwise.

### GetGuestFullNameOk

`func (o *MassUpdateOutcomeType) GetGuestFullNameOk() (*string, bool)`

GetGuestFullNameOk returns a tuple with the GuestFullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFullName

`func (o *MassUpdateOutcomeType) SetGuestFullName(v string)`

SetGuestFullName sets GuestFullName field to given value.

### HasGuestFullName

`func (o *MassUpdateOutcomeType) HasGuestFullName() bool`

HasGuestFullName returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *MassUpdateOutcomeType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *MassUpdateOutcomeType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *MassUpdateOutcomeType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *MassUpdateOutcomeType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetArrivalDate

`func (o *MassUpdateOutcomeType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *MassUpdateOutcomeType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *MassUpdateOutcomeType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *MassUpdateOutcomeType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *MassUpdateOutcomeType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *MassUpdateOutcomeType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *MassUpdateOutcomeType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *MassUpdateOutcomeType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetRoomId

`func (o *MassUpdateOutcomeType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *MassUpdateOutcomeType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *MassUpdateOutcomeType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *MassUpdateOutcomeType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetUpdateStatus

`func (o *MassUpdateOutcomeType) GetUpdateStatus() string`

GetUpdateStatus returns the UpdateStatus field if non-nil, zero value otherwise.

### GetUpdateStatusOk

`func (o *MassUpdateOutcomeType) GetUpdateStatusOk() (*string, bool)`

GetUpdateStatusOk returns a tuple with the UpdateStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateStatus

`func (o *MassUpdateOutcomeType) SetUpdateStatus(v string)`

SetUpdateStatus sets UpdateStatus field to given value.

### HasUpdateStatus

`func (o *MassUpdateOutcomeType) HasUpdateStatus() bool`

HasUpdateStatus returns a boolean if a field has been set.

### GetOutcomeMessages

`func (o *MassUpdateOutcomeType) GetOutcomeMessages() map[string]interface{}`

GetOutcomeMessages returns the OutcomeMessages field if non-nil, zero value otherwise.

### GetOutcomeMessagesOk

`func (o *MassUpdateOutcomeType) GetOutcomeMessagesOk() (*map[string]interface{}, bool)`

GetOutcomeMessagesOk returns a tuple with the OutcomeMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutcomeMessages

`func (o *MassUpdateOutcomeType) SetOutcomeMessages(v map[string]interface{})`

SetOutcomeMessages sets OutcomeMessages field to given value.

### HasOutcomeMessages

`func (o *MassUpdateOutcomeType) HasOutcomeMessages() bool`

HasOutcomeMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


