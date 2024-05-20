# TransferARCreditCardPaymentsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**Reference** | Pointer to **string** | Reference Text for the payment. | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionNo** | Pointer to **[]float32** | Transaction number of the payments to be transfered. | [optional] 

## Methods

### NewTransferARCreditCardPaymentsType

`func NewTransferARCreditCardPaymentsType() *TransferARCreditCardPaymentsType`

NewTransferARCreditCardPaymentsType instantiates a new TransferARCreditCardPaymentsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferARCreditCardPaymentsTypeWithDefaults

`func NewTransferARCreditCardPaymentsTypeWithDefaults() *TransferARCreditCardPaymentsType`

NewTransferARCreditCardPaymentsTypeWithDefaults instantiates a new TransferARCreditCardPaymentsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TransferARCreditCardPaymentsType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TransferARCreditCardPaymentsType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TransferARCreditCardPaymentsType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TransferARCreditCardPaymentsType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetCashierId

`func (o *TransferARCreditCardPaymentsType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TransferARCreditCardPaymentsType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TransferARCreditCardPaymentsType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TransferARCreditCardPaymentsType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *TransferARCreditCardPaymentsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TransferARCreditCardPaymentsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TransferARCreditCardPaymentsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TransferARCreditCardPaymentsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReference

`func (o *TransferARCreditCardPaymentsType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferARCreditCardPaymentsType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferARCreditCardPaymentsType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TransferARCreditCardPaymentsType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetTotalAmount

`func (o *TransferARCreditCardPaymentsType) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *TransferARCreditCardPaymentsType) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *TransferARCreditCardPaymentsType) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *TransferARCreditCardPaymentsType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetTransactionNo

`func (o *TransferARCreditCardPaymentsType) GetTransactionNo() []float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *TransferARCreditCardPaymentsType) GetTransactionNoOk() (*[]float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *TransferARCreditCardPaymentsType) SetTransactionNo(v []float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *TransferARCreditCardPaymentsType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


