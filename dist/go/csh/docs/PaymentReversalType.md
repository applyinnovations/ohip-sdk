# PaymentReversalType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel context of the transaction. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique identifier of the transaction to be reversed. | [optional] 
**ReasonCode** | Pointer to **string** | The reason code for payment reversal. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewPaymentReversalType

`func NewPaymentReversalType() *PaymentReversalType`

NewPaymentReversalType instantiates a new PaymentReversalType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentReversalTypeWithDefaults

`func NewPaymentReversalTypeWithDefaults() *PaymentReversalType`

NewPaymentReversalTypeWithDefaults instantiates a new PaymentReversalType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PaymentReversalType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PaymentReversalType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PaymentReversalType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PaymentReversalType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionNo

`func (o *PaymentReversalType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *PaymentReversalType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *PaymentReversalType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *PaymentReversalType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetReasonCode

`func (o *PaymentReversalType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *PaymentReversalType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *PaymentReversalType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *PaymentReversalType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetCashierId

`func (o *PaymentReversalType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PaymentReversalType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PaymentReversalType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PaymentReversalType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


