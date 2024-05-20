# CancelReservationsInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelShares** | Pointer to **bool** | Indicate whether any sharing reservations associated with the reservation which is being cancelled will also be cancelled. | [optional] 
**DeleteTraces** | Pointer to **bool** | Indicate if the traces associated with the reservations have to be deleted after the cancellation process. | [optional] 
**IgnoreDeposits** | Pointer to **bool** | Indicate whether to allow cancel a reservation which has an applied deposit. | [optional] 
**IgnorePenalties** | Pointer to **bool** | Indicate whether to ignore any associated cancellation rules during the cancellation process. | [optional] 

## Methods

### NewCancelReservationsInstructionsType

`func NewCancelReservationsInstructionsType() *CancelReservationsInstructionsType`

NewCancelReservationsInstructionsType instantiates a new CancelReservationsInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationsInstructionsTypeWithDefaults

`func NewCancelReservationsInstructionsTypeWithDefaults() *CancelReservationsInstructionsType`

NewCancelReservationsInstructionsTypeWithDefaults instantiates a new CancelReservationsInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelShares

`func (o *CancelReservationsInstructionsType) GetCancelShares() bool`

GetCancelShares returns the CancelShares field if non-nil, zero value otherwise.

### GetCancelSharesOk

`func (o *CancelReservationsInstructionsType) GetCancelSharesOk() (*bool, bool)`

GetCancelSharesOk returns a tuple with the CancelShares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelShares

`func (o *CancelReservationsInstructionsType) SetCancelShares(v bool)`

SetCancelShares sets CancelShares field to given value.

### HasCancelShares

`func (o *CancelReservationsInstructionsType) HasCancelShares() bool`

HasCancelShares returns a boolean if a field has been set.

### GetDeleteTraces

`func (o *CancelReservationsInstructionsType) GetDeleteTraces() bool`

GetDeleteTraces returns the DeleteTraces field if non-nil, zero value otherwise.

### GetDeleteTracesOk

`func (o *CancelReservationsInstructionsType) GetDeleteTracesOk() (*bool, bool)`

GetDeleteTracesOk returns a tuple with the DeleteTraces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteTraces

`func (o *CancelReservationsInstructionsType) SetDeleteTraces(v bool)`

SetDeleteTraces sets DeleteTraces field to given value.

### HasDeleteTraces

`func (o *CancelReservationsInstructionsType) HasDeleteTraces() bool`

HasDeleteTraces returns a boolean if a field has been set.

### GetIgnoreDeposits

`func (o *CancelReservationsInstructionsType) GetIgnoreDeposits() bool`

GetIgnoreDeposits returns the IgnoreDeposits field if non-nil, zero value otherwise.

### GetIgnoreDepositsOk

`func (o *CancelReservationsInstructionsType) GetIgnoreDepositsOk() (*bool, bool)`

GetIgnoreDepositsOk returns a tuple with the IgnoreDeposits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreDeposits

`func (o *CancelReservationsInstructionsType) SetIgnoreDeposits(v bool)`

SetIgnoreDeposits sets IgnoreDeposits field to given value.

### HasIgnoreDeposits

`func (o *CancelReservationsInstructionsType) HasIgnoreDeposits() bool`

HasIgnoreDeposits returns a boolean if a field has been set.

### GetIgnorePenalties

`func (o *CancelReservationsInstructionsType) GetIgnorePenalties() bool`

GetIgnorePenalties returns the IgnorePenalties field if non-nil, zero value otherwise.

### GetIgnorePenaltiesOk

`func (o *CancelReservationsInstructionsType) GetIgnorePenaltiesOk() (*bool, bool)`

GetIgnorePenaltiesOk returns a tuple with the IgnorePenalties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnorePenalties

`func (o *CancelReservationsInstructionsType) SetIgnorePenalties(v bool)`

SetIgnorePenalties sets IgnorePenalties field to given value.

### HasIgnorePenalties

`func (o *CancelReservationsInstructionsType) HasIgnorePenalties() bool`

HasIgnorePenalties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


