# TransactionCodeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllChargesCode** | Pointer to **string** | All charges code of transaction code setup | [optional] 
**MiniBarCode** | Pointer to **string** | Minibar charges code of transaction code setup | [optional] 
**CashCreditCardPosting** | Pointer to **string** | Cash or credit card posting of transaction code setup | [optional] 
**SubtotalPosting** | Pointer to **string** | Subtotal posting of transaction code setup | [optional] 
**DifferencePosting** | Pointer to **string** | Difference posting of transaction code setup | [optional] 
**CalcTrxCodePosting** | Pointer to **string** | Calculated transaction code posting of transaction code setup | [optional] 
**NumberOfDialedDigits** | Pointer to **string** | Number of dialed digits transaction code setup | [optional] 
**PostingAccounts** | Pointer to [**[]PostingAccountType**](PostingAccountType.md) | Postings information of transaction codes setup. | [optional] 
**Itemizers** | Pointer to [**[]ItemizerType**](ItemizerType.md) | Split information of transaction code setup. | [optional] 
**TransactionCodes** | Pointer to [**[]TransactionCodeDetailType**](TransactionCodeDetailType.md) | Split information of transaction code setup. | [optional] 

## Methods

### NewTransactionCodeInfoType

`func NewTransactionCodeInfoType() *TransactionCodeInfoType`

NewTransactionCodeInfoType instantiates a new TransactionCodeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeInfoTypeWithDefaults

`func NewTransactionCodeInfoTypeWithDefaults() *TransactionCodeInfoType`

NewTransactionCodeInfoTypeWithDefaults instantiates a new TransactionCodeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllChargesCode

`func (o *TransactionCodeInfoType) GetAllChargesCode() string`

GetAllChargesCode returns the AllChargesCode field if non-nil, zero value otherwise.

### GetAllChargesCodeOk

`func (o *TransactionCodeInfoType) GetAllChargesCodeOk() (*string, bool)`

GetAllChargesCodeOk returns a tuple with the AllChargesCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllChargesCode

`func (o *TransactionCodeInfoType) SetAllChargesCode(v string)`

SetAllChargesCode sets AllChargesCode field to given value.

### HasAllChargesCode

`func (o *TransactionCodeInfoType) HasAllChargesCode() bool`

HasAllChargesCode returns a boolean if a field has been set.

### GetMiniBarCode

`func (o *TransactionCodeInfoType) GetMiniBarCode() string`

GetMiniBarCode returns the MiniBarCode field if non-nil, zero value otherwise.

### GetMiniBarCodeOk

`func (o *TransactionCodeInfoType) GetMiniBarCodeOk() (*string, bool)`

GetMiniBarCodeOk returns a tuple with the MiniBarCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiniBarCode

`func (o *TransactionCodeInfoType) SetMiniBarCode(v string)`

SetMiniBarCode sets MiniBarCode field to given value.

### HasMiniBarCode

`func (o *TransactionCodeInfoType) HasMiniBarCode() bool`

HasMiniBarCode returns a boolean if a field has been set.

### GetCashCreditCardPosting

`func (o *TransactionCodeInfoType) GetCashCreditCardPosting() string`

GetCashCreditCardPosting returns the CashCreditCardPosting field if non-nil, zero value otherwise.

### GetCashCreditCardPostingOk

`func (o *TransactionCodeInfoType) GetCashCreditCardPostingOk() (*string, bool)`

GetCashCreditCardPostingOk returns a tuple with the CashCreditCardPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashCreditCardPosting

`func (o *TransactionCodeInfoType) SetCashCreditCardPosting(v string)`

SetCashCreditCardPosting sets CashCreditCardPosting field to given value.

### HasCashCreditCardPosting

`func (o *TransactionCodeInfoType) HasCashCreditCardPosting() bool`

HasCashCreditCardPosting returns a boolean if a field has been set.

### GetSubtotalPosting

`func (o *TransactionCodeInfoType) GetSubtotalPosting() string`

GetSubtotalPosting returns the SubtotalPosting field if non-nil, zero value otherwise.

### GetSubtotalPostingOk

`func (o *TransactionCodeInfoType) GetSubtotalPostingOk() (*string, bool)`

GetSubtotalPostingOk returns a tuple with the SubtotalPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtotalPosting

`func (o *TransactionCodeInfoType) SetSubtotalPosting(v string)`

SetSubtotalPosting sets SubtotalPosting field to given value.

### HasSubtotalPosting

`func (o *TransactionCodeInfoType) HasSubtotalPosting() bool`

HasSubtotalPosting returns a boolean if a field has been set.

### GetDifferencePosting

`func (o *TransactionCodeInfoType) GetDifferencePosting() string`

GetDifferencePosting returns the DifferencePosting field if non-nil, zero value otherwise.

### GetDifferencePostingOk

`func (o *TransactionCodeInfoType) GetDifferencePostingOk() (*string, bool)`

GetDifferencePostingOk returns a tuple with the DifferencePosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDifferencePosting

`func (o *TransactionCodeInfoType) SetDifferencePosting(v string)`

SetDifferencePosting sets DifferencePosting field to given value.

### HasDifferencePosting

`func (o *TransactionCodeInfoType) HasDifferencePosting() bool`

HasDifferencePosting returns a boolean if a field has been set.

### GetCalcTrxCodePosting

`func (o *TransactionCodeInfoType) GetCalcTrxCodePosting() string`

GetCalcTrxCodePosting returns the CalcTrxCodePosting field if non-nil, zero value otherwise.

### GetCalcTrxCodePostingOk

`func (o *TransactionCodeInfoType) GetCalcTrxCodePostingOk() (*string, bool)`

GetCalcTrxCodePostingOk returns a tuple with the CalcTrxCodePosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalcTrxCodePosting

`func (o *TransactionCodeInfoType) SetCalcTrxCodePosting(v string)`

SetCalcTrxCodePosting sets CalcTrxCodePosting field to given value.

### HasCalcTrxCodePosting

`func (o *TransactionCodeInfoType) HasCalcTrxCodePosting() bool`

HasCalcTrxCodePosting returns a boolean if a field has been set.

### GetNumberOfDialedDigits

`func (o *TransactionCodeInfoType) GetNumberOfDialedDigits() string`

GetNumberOfDialedDigits returns the NumberOfDialedDigits field if non-nil, zero value otherwise.

### GetNumberOfDialedDigitsOk

`func (o *TransactionCodeInfoType) GetNumberOfDialedDigitsOk() (*string, bool)`

GetNumberOfDialedDigitsOk returns a tuple with the NumberOfDialedDigits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfDialedDigits

`func (o *TransactionCodeInfoType) SetNumberOfDialedDigits(v string)`

SetNumberOfDialedDigits sets NumberOfDialedDigits field to given value.

### HasNumberOfDialedDigits

`func (o *TransactionCodeInfoType) HasNumberOfDialedDigits() bool`

HasNumberOfDialedDigits returns a boolean if a field has been set.

### GetPostingAccounts

`func (o *TransactionCodeInfoType) GetPostingAccounts() []PostingAccountType`

GetPostingAccounts returns the PostingAccounts field if non-nil, zero value otherwise.

### GetPostingAccountsOk

`func (o *TransactionCodeInfoType) GetPostingAccountsOk() (*[]PostingAccountType, bool)`

GetPostingAccountsOk returns a tuple with the PostingAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAccounts

`func (o *TransactionCodeInfoType) SetPostingAccounts(v []PostingAccountType)`

SetPostingAccounts sets PostingAccounts field to given value.

### HasPostingAccounts

`func (o *TransactionCodeInfoType) HasPostingAccounts() bool`

HasPostingAccounts returns a boolean if a field has been set.

### GetItemizers

`func (o *TransactionCodeInfoType) GetItemizers() []ItemizerType`

GetItemizers returns the Itemizers field if non-nil, zero value otherwise.

### GetItemizersOk

`func (o *TransactionCodeInfoType) GetItemizersOk() (*[]ItemizerType, bool)`

GetItemizersOk returns a tuple with the Itemizers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemizers

`func (o *TransactionCodeInfoType) SetItemizers(v []ItemizerType)`

SetItemizers sets Itemizers field to given value.

### HasItemizers

`func (o *TransactionCodeInfoType) HasItemizers() bool`

HasItemizers returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *TransactionCodeInfoType) GetTransactionCodes() []TransactionCodeDetailType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *TransactionCodeInfoType) GetTransactionCodesOk() (*[]TransactionCodeDetailType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *TransactionCodeInfoType) SetTransactionCodes(v []TransactionCodeDetailType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *TransactionCodeInfoType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


