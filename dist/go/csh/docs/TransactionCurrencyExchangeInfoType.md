# TransactionCurrencyExchangeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Code** | Pointer to **string** | Foreign Currency Code of the currency which was used to post this transaction. | [optional] 
**CommissionPercent** | Pointer to **float32** | Percentage for commission used for the currency conversion. | [optional] 
**CurrencyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** | Description or reference for this exchange. | [optional] 
**ExchangeDate** | Pointer to **string** | The date when this exchange rate was set. | [optional] 
**ExchangeRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewTransactionCurrencyExchangeInfoType

`func NewTransactionCurrencyExchangeInfoType() *TransactionCurrencyExchangeInfoType`

NewTransactionCurrencyExchangeInfoType instantiates a new TransactionCurrencyExchangeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCurrencyExchangeInfoTypeWithDefaults

`func NewTransactionCurrencyExchangeInfoTypeWithDefaults() *TransactionCurrencyExchangeInfoType`

NewTransactionCurrencyExchangeInfoTypeWithDefaults instantiates a new TransactionCurrencyExchangeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransactionCurrencyExchangeInfoType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionCurrencyExchangeInfoType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionCurrencyExchangeInfoType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *TransactionCurrencyExchangeInfoType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCode

`func (o *TransactionCurrencyExchangeInfoType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionCurrencyExchangeInfoType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionCurrencyExchangeInfoType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionCurrencyExchangeInfoType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCommissionPercent

`func (o *TransactionCurrencyExchangeInfoType) GetCommissionPercent() float32`

GetCommissionPercent returns the CommissionPercent field if non-nil, zero value otherwise.

### GetCommissionPercentOk

`func (o *TransactionCurrencyExchangeInfoType) GetCommissionPercentOk() (*float32, bool)`

GetCommissionPercentOk returns a tuple with the CommissionPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPercent

`func (o *TransactionCurrencyExchangeInfoType) SetCommissionPercent(v float32)`

SetCommissionPercent sets CommissionPercent field to given value.

### HasCommissionPercent

`func (o *TransactionCurrencyExchangeInfoType) HasCommissionPercent() bool`

HasCommissionPercent returns a boolean if a field has been set.

### GetCurrencyAmount

`func (o *TransactionCurrencyExchangeInfoType) GetCurrencyAmount() CurrencyAmountType`

GetCurrencyAmount returns the CurrencyAmount field if non-nil, zero value otherwise.

### GetCurrencyAmountOk

`func (o *TransactionCurrencyExchangeInfoType) GetCurrencyAmountOk() (*CurrencyAmountType, bool)`

GetCurrencyAmountOk returns a tuple with the CurrencyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyAmount

`func (o *TransactionCurrencyExchangeInfoType) SetCurrencyAmount(v CurrencyAmountType)`

SetCurrencyAmount sets CurrencyAmount field to given value.

### HasCurrencyAmount

`func (o *TransactionCurrencyExchangeInfoType) HasCurrencyAmount() bool`

HasCurrencyAmount returns a boolean if a field has been set.

### GetDescription

`func (o *TransactionCurrencyExchangeInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransactionCurrencyExchangeInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransactionCurrencyExchangeInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransactionCurrencyExchangeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExchangeDate

`func (o *TransactionCurrencyExchangeInfoType) GetExchangeDate() string`

GetExchangeDate returns the ExchangeDate field if non-nil, zero value otherwise.

### GetExchangeDateOk

`func (o *TransactionCurrencyExchangeInfoType) GetExchangeDateOk() (*string, bool)`

GetExchangeDateOk returns a tuple with the ExchangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeDate

`func (o *TransactionCurrencyExchangeInfoType) SetExchangeDate(v string)`

SetExchangeDate sets ExchangeDate field to given value.

### HasExchangeDate

`func (o *TransactionCurrencyExchangeInfoType) HasExchangeDate() bool`

HasExchangeDate returns a boolean if a field has been set.

### GetExchangeRate

`func (o *TransactionCurrencyExchangeInfoType) GetExchangeRate() CurrencyAmountType`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *TransactionCurrencyExchangeInfoType) GetExchangeRateOk() (*CurrencyAmountType, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *TransactionCurrencyExchangeInfoType) SetExchangeRate(v CurrencyAmountType)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *TransactionCurrencyExchangeInfoType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


