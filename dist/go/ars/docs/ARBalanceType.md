# ARBalanceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Debit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Total** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewARBalanceType

`func NewARBalanceType() *ARBalanceType`

NewARBalanceType instantiates a new ARBalanceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARBalanceTypeWithDefaults

`func NewARBalanceTypeWithDefaults() *ARBalanceType`

NewARBalanceTypeWithDefaults instantiates a new ARBalanceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredit

`func (o *ARBalanceType) GetCredit() CurrencyAmountType`

GetCredit returns the Credit field if non-nil, zero value otherwise.

### GetCreditOk

`func (o *ARBalanceType) GetCreditOk() (*CurrencyAmountType, bool)`

GetCreditOk returns a tuple with the Credit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredit

`func (o *ARBalanceType) SetCredit(v CurrencyAmountType)`

SetCredit sets Credit field to given value.

### HasCredit

`func (o *ARBalanceType) HasCredit() bool`

HasCredit returns a boolean if a field has been set.

### GetDebit

`func (o *ARBalanceType) GetDebit() CurrencyAmountType`

GetDebit returns the Debit field if non-nil, zero value otherwise.

### GetDebitOk

`func (o *ARBalanceType) GetDebitOk() (*CurrencyAmountType, bool)`

GetDebitOk returns a tuple with the Debit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebit

`func (o *ARBalanceType) SetDebit(v CurrencyAmountType)`

SetDebit sets Debit field to given value.

### HasDebit

`func (o *ARBalanceType) HasDebit() bool`

HasDebit returns a boolean if a field has been set.

### GetTotal

`func (o *ARBalanceType) GetTotal() CurrencyAmountType`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ARBalanceType) GetTotalOk() (*CurrencyAmountType, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ARBalanceType) SetTotal(v CurrencyAmountType)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ARBalanceType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


