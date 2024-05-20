# CashierTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** | Transaction codes description which will be populated for summary elements only. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code. | [optional] 
**TrxCount** | Pointer to **int32** | Number of same transactions during a shift. | [optional] 

## Methods

### NewCashierTransactionType

`func NewCashierTransactionType() *CashierTransactionType`

NewCashierTransactionType instantiates a new CashierTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierTransactionTypeWithDefaults

`func NewCashierTransactionTypeWithDefaults() *CashierTransactionType`

NewCashierTransactionTypeWithDefaults instantiates a new CashierTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CashierTransactionType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CashierTransactionType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CashierTransactionType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CashierTransactionType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetDescription

`func (o *CashierTransactionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CashierTransactionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CashierTransactionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CashierTransactionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CashierTransactionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CashierTransactionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CashierTransactionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CashierTransactionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTrxCount

`func (o *CashierTransactionType) GetTrxCount() int32`

GetTrxCount returns the TrxCount field if non-nil, zero value otherwise.

### GetTrxCountOk

`func (o *CashierTransactionType) GetTrxCountOk() (*int32, bool)`

GetTrxCountOk returns a tuple with the TrxCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCount

`func (o *CashierTransactionType) SetTrxCount(v int32)`

SetTrxCount sets TrxCount field to given value.

### HasTrxCount

`func (o *CashierTransactionType) HasTrxCount() bool`

HasTrxCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


