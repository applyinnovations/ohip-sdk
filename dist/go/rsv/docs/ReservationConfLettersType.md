# ReservationConfLettersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfLetters** | Pointer to [**[]ConfirmationType**](ConfirmationType.md) | List of confirmation letters. | [optional] 
**Reservation** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 

## Methods

### NewReservationConfLettersType

`func NewReservationConfLettersType() *ReservationConfLettersType`

NewReservationConfLettersType instantiates a new ReservationConfLettersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationConfLettersTypeWithDefaults

`func NewReservationConfLettersTypeWithDefaults() *ReservationConfLettersType`

NewReservationConfLettersTypeWithDefaults instantiates a new ReservationConfLettersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfLetters

`func (o *ReservationConfLettersType) GetConfLetters() []ConfirmationType`

GetConfLetters returns the ConfLetters field if non-nil, zero value otherwise.

### GetConfLettersOk

`func (o *ReservationConfLettersType) GetConfLettersOk() (*[]ConfirmationType, bool)`

GetConfLettersOk returns a tuple with the ConfLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfLetters

`func (o *ReservationConfLettersType) SetConfLetters(v []ConfirmationType)`

SetConfLetters sets ConfLetters field to given value.

### HasConfLetters

`func (o *ReservationConfLettersType) HasConfLetters() bool`

HasConfLetters returns a boolean if a field has been set.

### GetReservation

`func (o *ReservationConfLettersType) GetReservation() ReservationInfoType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ReservationConfLettersType) GetReservationOk() (*ReservationInfoType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ReservationConfLettersType) SetReservation(v ReservationInfoType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ReservationConfLettersType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


