# ExchangeAmounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DebitAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CreditAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewExchangeAmounts

`func NewExchangeAmounts() *ExchangeAmounts`

NewExchangeAmounts instantiates a new ExchangeAmounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeAmountsWithDefaults

`func NewExchangeAmountsWithDefaults() *ExchangeAmounts`

NewExchangeAmountsWithDefaults instantiates a new ExchangeAmounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDebitAmount

`func (o *ExchangeAmounts) GetDebitAmount() CurrencyAmountType`

GetDebitAmount returns the DebitAmount field if non-nil, zero value otherwise.

### GetDebitAmountOk

`func (o *ExchangeAmounts) GetDebitAmountOk() (*CurrencyAmountType, bool)`

GetDebitAmountOk returns a tuple with the DebitAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitAmount

`func (o *ExchangeAmounts) SetDebitAmount(v CurrencyAmountType)`

SetDebitAmount sets DebitAmount field to given value.

### HasDebitAmount

`func (o *ExchangeAmounts) HasDebitAmount() bool`

HasDebitAmount returns a boolean if a field has been set.

### GetCreditAmount

`func (o *ExchangeAmounts) GetCreditAmount() CurrencyAmountType`

GetCreditAmount returns the CreditAmount field if non-nil, zero value otherwise.

### GetCreditAmountOk

`func (o *ExchangeAmounts) GetCreditAmountOk() (*CurrencyAmountType, bool)`

GetCreditAmountOk returns a tuple with the CreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditAmount

`func (o *ExchangeAmounts) SetCreditAmount(v CurrencyAmountType)`

SetCreditAmount sets CreditAmount field to given value.

### HasCreditAmount

`func (o *ExchangeAmounts) HasCreditAmount() bool`

HasCreditAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


