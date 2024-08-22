# DepositTransferToReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**TransferAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewDepositTransferToReservationType

`func NewDepositTransferToReservationType() *DepositTransferToReservationType`

NewDepositTransferToReservationType instantiates a new DepositTransferToReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositTransferToReservationTypeWithDefaults

`func NewDepositTransferToReservationTypeWithDefaults() *DepositTransferToReservationType`

NewDepositTransferToReservationTypeWithDefaults instantiates a new DepositTransferToReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *DepositTransferToReservationType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DepositTransferToReservationType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DepositTransferToReservationType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DepositTransferToReservationType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositTransferToReservationType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositTransferToReservationType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositTransferToReservationType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositTransferToReservationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTransferAmount

`func (o *DepositTransferToReservationType) GetTransferAmount() CurrencyAmountType`

GetTransferAmount returns the TransferAmount field if non-nil, zero value otherwise.

### GetTransferAmountOk

`func (o *DepositTransferToReservationType) GetTransferAmountOk() (*CurrencyAmountType, bool)`

GetTransferAmountOk returns a tuple with the TransferAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferAmount

`func (o *DepositTransferToReservationType) SetTransferAmount(v CurrencyAmountType)`

SetTransferAmount sets TransferAmount field to given value.

### HasTransferAmount

`func (o *DepositTransferToReservationType) HasTransferAmount() bool`

HasTransferAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


