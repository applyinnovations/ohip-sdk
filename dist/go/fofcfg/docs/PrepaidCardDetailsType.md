# PrepaidCardDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivateDate** | Pointer to **string** | Holds fixed charge detail. | [optional] 
**BalanceTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CreditTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DebitTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ExpiredDate** | Pointer to **string** | Holds fixed charge detail. | [optional] 
**InitialCreditTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**InitialLoadDate** | Pointer to **string** | Holds fixed charge detail. | [optional] 
**ReservedTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Transactions** | Pointer to [**[]PrepaidCardTransactionType**](PrepaidCardTransactionType.md) | Holds fixed charge detail. | [optional] 
**ValidUntilDate** | Pointer to **string** | Holds fixed charge detail. | [optional] 

## Methods

### NewPrepaidCardDetailsType

`func NewPrepaidCardDetailsType() *PrepaidCardDetailsType`

NewPrepaidCardDetailsType instantiates a new PrepaidCardDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardDetailsTypeWithDefaults

`func NewPrepaidCardDetailsTypeWithDefaults() *PrepaidCardDetailsType`

NewPrepaidCardDetailsTypeWithDefaults instantiates a new PrepaidCardDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivateDate

`func (o *PrepaidCardDetailsType) GetActivateDate() string`

GetActivateDate returns the ActivateDate field if non-nil, zero value otherwise.

### GetActivateDateOk

`func (o *PrepaidCardDetailsType) GetActivateDateOk() (*string, bool)`

GetActivateDateOk returns a tuple with the ActivateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivateDate

`func (o *PrepaidCardDetailsType) SetActivateDate(v string)`

SetActivateDate sets ActivateDate field to given value.

### HasActivateDate

`func (o *PrepaidCardDetailsType) HasActivateDate() bool`

HasActivateDate returns a boolean if a field has been set.

### GetBalanceTotal

`func (o *PrepaidCardDetailsType) GetBalanceTotal() CurrencyAmountType`

GetBalanceTotal returns the BalanceTotal field if non-nil, zero value otherwise.

### GetBalanceTotalOk

`func (o *PrepaidCardDetailsType) GetBalanceTotalOk() (*CurrencyAmountType, bool)`

GetBalanceTotalOk returns a tuple with the BalanceTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceTotal

`func (o *PrepaidCardDetailsType) SetBalanceTotal(v CurrencyAmountType)`

SetBalanceTotal sets BalanceTotal field to given value.

### HasBalanceTotal

`func (o *PrepaidCardDetailsType) HasBalanceTotal() bool`

HasBalanceTotal returns a boolean if a field has been set.

### GetCreditTotal

`func (o *PrepaidCardDetailsType) GetCreditTotal() CurrencyAmountType`

GetCreditTotal returns the CreditTotal field if non-nil, zero value otherwise.

### GetCreditTotalOk

`func (o *PrepaidCardDetailsType) GetCreditTotalOk() (*CurrencyAmountType, bool)`

GetCreditTotalOk returns a tuple with the CreditTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditTotal

`func (o *PrepaidCardDetailsType) SetCreditTotal(v CurrencyAmountType)`

SetCreditTotal sets CreditTotal field to given value.

### HasCreditTotal

`func (o *PrepaidCardDetailsType) HasCreditTotal() bool`

HasCreditTotal returns a boolean if a field has been set.

### GetDebitTotal

`func (o *PrepaidCardDetailsType) GetDebitTotal() CurrencyAmountType`

GetDebitTotal returns the DebitTotal field if non-nil, zero value otherwise.

### GetDebitTotalOk

`func (o *PrepaidCardDetailsType) GetDebitTotalOk() (*CurrencyAmountType, bool)`

GetDebitTotalOk returns a tuple with the DebitTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitTotal

`func (o *PrepaidCardDetailsType) SetDebitTotal(v CurrencyAmountType)`

SetDebitTotal sets DebitTotal field to given value.

### HasDebitTotal

`func (o *PrepaidCardDetailsType) HasDebitTotal() bool`

HasDebitTotal returns a boolean if a field has been set.

### GetExpiredDate

`func (o *PrepaidCardDetailsType) GetExpiredDate() string`

GetExpiredDate returns the ExpiredDate field if non-nil, zero value otherwise.

### GetExpiredDateOk

`func (o *PrepaidCardDetailsType) GetExpiredDateOk() (*string, bool)`

GetExpiredDateOk returns a tuple with the ExpiredDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredDate

`func (o *PrepaidCardDetailsType) SetExpiredDate(v string)`

SetExpiredDate sets ExpiredDate field to given value.

### HasExpiredDate

`func (o *PrepaidCardDetailsType) HasExpiredDate() bool`

HasExpiredDate returns a boolean if a field has been set.

### GetInitialCreditTotal

`func (o *PrepaidCardDetailsType) GetInitialCreditTotal() CurrencyAmountType`

GetInitialCreditTotal returns the InitialCreditTotal field if non-nil, zero value otherwise.

### GetInitialCreditTotalOk

`func (o *PrepaidCardDetailsType) GetInitialCreditTotalOk() (*CurrencyAmountType, bool)`

GetInitialCreditTotalOk returns a tuple with the InitialCreditTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialCreditTotal

`func (o *PrepaidCardDetailsType) SetInitialCreditTotal(v CurrencyAmountType)`

SetInitialCreditTotal sets InitialCreditTotal field to given value.

### HasInitialCreditTotal

`func (o *PrepaidCardDetailsType) HasInitialCreditTotal() bool`

HasInitialCreditTotal returns a boolean if a field has been set.

### GetInitialLoadDate

`func (o *PrepaidCardDetailsType) GetInitialLoadDate() string`

GetInitialLoadDate returns the InitialLoadDate field if non-nil, zero value otherwise.

### GetInitialLoadDateOk

`func (o *PrepaidCardDetailsType) GetInitialLoadDateOk() (*string, bool)`

GetInitialLoadDateOk returns a tuple with the InitialLoadDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialLoadDate

`func (o *PrepaidCardDetailsType) SetInitialLoadDate(v string)`

SetInitialLoadDate sets InitialLoadDate field to given value.

### HasInitialLoadDate

`func (o *PrepaidCardDetailsType) HasInitialLoadDate() bool`

HasInitialLoadDate returns a boolean if a field has been set.

### GetReservedTotal

`func (o *PrepaidCardDetailsType) GetReservedTotal() CurrencyAmountType`

GetReservedTotal returns the ReservedTotal field if non-nil, zero value otherwise.

### GetReservedTotalOk

`func (o *PrepaidCardDetailsType) GetReservedTotalOk() (*CurrencyAmountType, bool)`

GetReservedTotalOk returns a tuple with the ReservedTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservedTotal

`func (o *PrepaidCardDetailsType) SetReservedTotal(v CurrencyAmountType)`

SetReservedTotal sets ReservedTotal field to given value.

### HasReservedTotal

`func (o *PrepaidCardDetailsType) HasReservedTotal() bool`

HasReservedTotal returns a boolean if a field has been set.

### GetTransactions

`func (o *PrepaidCardDetailsType) GetTransactions() []PrepaidCardTransactionType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *PrepaidCardDetailsType) GetTransactionsOk() (*[]PrepaidCardTransactionType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *PrepaidCardDetailsType) SetTransactions(v []PrepaidCardTransactionType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *PrepaidCardDetailsType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetValidUntilDate

`func (o *PrepaidCardDetailsType) GetValidUntilDate() string`

GetValidUntilDate returns the ValidUntilDate field if non-nil, zero value otherwise.

### GetValidUntilDateOk

`func (o *PrepaidCardDetailsType) GetValidUntilDateOk() (*string, bool)`

GetValidUntilDateOk returns a tuple with the ValidUntilDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidUntilDate

`func (o *PrepaidCardDetailsType) SetValidUntilDate(v string)`

SetValidUntilDate sets ValidUntilDate field to given value.

### HasValidUntilDate

`func (o *PrepaidCardDetailsType) HasValidUntilDate() bool`

HasValidUntilDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


