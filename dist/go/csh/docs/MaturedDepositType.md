# MaturedDepositType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierInfo** | Pointer to [**CashierInfoType**](CashierInfoType.md) |  | [optional] 
**FolioView** | Pointer to **int32** | The folio window where this authorization is applied. | [optional] 
**GuestCreditAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Reference** | Pointer to **string** | User defined reference of the matured deposit. | [optional] 
**Remark** | Pointer to **string** | User defined remarks of the matured deposit. | [optional] 
**Transaction** | Pointer to [**TransactionType**](TransactionType.md) |  | [optional] 

## Methods

### NewMaturedDepositType

`func NewMaturedDepositType() *MaturedDepositType`

NewMaturedDepositType instantiates a new MaturedDepositType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaturedDepositTypeWithDefaults

`func NewMaturedDepositTypeWithDefaults() *MaturedDepositType`

NewMaturedDepositTypeWithDefaults instantiates a new MaturedDepositType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierInfo

`func (o *MaturedDepositType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *MaturedDepositType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *MaturedDepositType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *MaturedDepositType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetFolioView

`func (o *MaturedDepositType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *MaturedDepositType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *MaturedDepositType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *MaturedDepositType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetGuestCreditAmount

`func (o *MaturedDepositType) GetGuestCreditAmount() CurrencyAmountType`

GetGuestCreditAmount returns the GuestCreditAmount field if non-nil, zero value otherwise.

### GetGuestCreditAmountOk

`func (o *MaturedDepositType) GetGuestCreditAmountOk() (*CurrencyAmountType, bool)`

GetGuestCreditAmountOk returns a tuple with the GuestCreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCreditAmount

`func (o *MaturedDepositType) SetGuestCreditAmount(v CurrencyAmountType)`

SetGuestCreditAmount sets GuestCreditAmount field to given value.

### HasGuestCreditAmount

`func (o *MaturedDepositType) HasGuestCreditAmount() bool`

HasGuestCreditAmount returns a boolean if a field has been set.

### GetReference

`func (o *MaturedDepositType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *MaturedDepositType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *MaturedDepositType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *MaturedDepositType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *MaturedDepositType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *MaturedDepositType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *MaturedDepositType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *MaturedDepositType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetTransaction

`func (o *MaturedDepositType) GetTransaction() TransactionType`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *MaturedDepositType) GetTransactionOk() (*TransactionType, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *MaturedDepositType) SetTransaction(v TransactionType)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *MaturedDepositType) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


