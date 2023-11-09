# FinancialPostingsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverallTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Postings** | Pointer to [**DetailPostingsType**](DetailPostingsType.md) |  | [optional] 
**TotalCredit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalDebit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalEntriesCount** | Pointer to **int32** | Indicates the number of journal entries. | [optional] 
**TotalForAllPages** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionCodes** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 

## Methods

### NewFinancialPostingsType

`func NewFinancialPostingsType() *FinancialPostingsType`

NewFinancialPostingsType instantiates a new FinancialPostingsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFinancialPostingsTypeWithDefaults

`func NewFinancialPostingsTypeWithDefaults() *FinancialPostingsType`

NewFinancialPostingsTypeWithDefaults instantiates a new FinancialPostingsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverallTotal

`func (o *FinancialPostingsType) GetOverallTotal() CurrencyAmountType`

GetOverallTotal returns the OverallTotal field if non-nil, zero value otherwise.

### GetOverallTotalOk

`func (o *FinancialPostingsType) GetOverallTotalOk() (*CurrencyAmountType, bool)`

GetOverallTotalOk returns a tuple with the OverallTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallTotal

`func (o *FinancialPostingsType) SetOverallTotal(v CurrencyAmountType)`

SetOverallTotal sets OverallTotal field to given value.

### HasOverallTotal

`func (o *FinancialPostingsType) HasOverallTotal() bool`

HasOverallTotal returns a boolean if a field has been set.

### GetPostings

`func (o *FinancialPostingsType) GetPostings() DetailPostingsType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *FinancialPostingsType) GetPostingsOk() (*DetailPostingsType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *FinancialPostingsType) SetPostings(v DetailPostingsType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *FinancialPostingsType) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTotalCredit

`func (o *FinancialPostingsType) GetTotalCredit() CurrencyAmountType`

GetTotalCredit returns the TotalCredit field if non-nil, zero value otherwise.

### GetTotalCreditOk

`func (o *FinancialPostingsType) GetTotalCreditOk() (*CurrencyAmountType, bool)`

GetTotalCreditOk returns a tuple with the TotalCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredit

`func (o *FinancialPostingsType) SetTotalCredit(v CurrencyAmountType)`

SetTotalCredit sets TotalCredit field to given value.

### HasTotalCredit

`func (o *FinancialPostingsType) HasTotalCredit() bool`

HasTotalCredit returns a boolean if a field has been set.

### GetTotalDebit

`func (o *FinancialPostingsType) GetTotalDebit() CurrencyAmountType`

GetTotalDebit returns the TotalDebit field if non-nil, zero value otherwise.

### GetTotalDebitOk

`func (o *FinancialPostingsType) GetTotalDebitOk() (*CurrencyAmountType, bool)`

GetTotalDebitOk returns a tuple with the TotalDebit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDebit

`func (o *FinancialPostingsType) SetTotalDebit(v CurrencyAmountType)`

SetTotalDebit sets TotalDebit field to given value.

### HasTotalDebit

`func (o *FinancialPostingsType) HasTotalDebit() bool`

HasTotalDebit returns a boolean if a field has been set.

### GetTotalEntriesCount

`func (o *FinancialPostingsType) GetTotalEntriesCount() int32`

GetTotalEntriesCount returns the TotalEntriesCount field if non-nil, zero value otherwise.

### GetTotalEntriesCountOk

`func (o *FinancialPostingsType) GetTotalEntriesCountOk() (*int32, bool)`

GetTotalEntriesCountOk returns a tuple with the TotalEntriesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEntriesCount

`func (o *FinancialPostingsType) SetTotalEntriesCount(v int32)`

SetTotalEntriesCount sets TotalEntriesCount field to given value.

### HasTotalEntriesCount

`func (o *FinancialPostingsType) HasTotalEntriesCount() bool`

HasTotalEntriesCount returns a boolean if a field has been set.

### GetTotalForAllPages

`func (o *FinancialPostingsType) GetTotalForAllPages() CurrencyAmountType`

GetTotalForAllPages returns the TotalForAllPages field if non-nil, zero value otherwise.

### GetTotalForAllPagesOk

`func (o *FinancialPostingsType) GetTotalForAllPagesOk() (*CurrencyAmountType, bool)`

GetTotalForAllPagesOk returns a tuple with the TotalForAllPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalForAllPages

`func (o *FinancialPostingsType) SetTotalForAllPages(v CurrencyAmountType)`

SetTotalForAllPages sets TotalForAllPages field to given value.

### HasTotalForAllPages

`func (o *FinancialPostingsType) HasTotalForAllPages() bool`

HasTotalForAllPages returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *FinancialPostingsType) GetTransactionCodes() TrxCodesInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *FinancialPostingsType) GetTransactionCodesOk() (*TrxCodesInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *FinancialPostingsType) SetTransactionCodes(v TrxCodesInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *FinancialPostingsType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


