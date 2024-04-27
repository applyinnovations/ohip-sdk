# TransferARInvoicesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FromAccount** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**InvoicesTransferType** | Pointer to [**[]ARInvoiceType**](ARInvoiceType.md) | AR Invoice(s) to be transferred. | [optional] 
**OverrideCreditHoldCheck** | Pointer to **bool** |  | [optional] 
**Remarks** | Pointer to **string** | User defined Remarks for this transfer | [optional] 
**ToAccount** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**TransferAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewTransferARInvoicesCriteriaType

`func NewTransferARInvoicesCriteriaType() *TransferARInvoicesCriteriaType`

NewTransferARInvoicesCriteriaType instantiates a new TransferARInvoicesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferARInvoicesCriteriaTypeWithDefaults

`func NewTransferARInvoicesCriteriaTypeWithDefaults() *TransferARInvoicesCriteriaType`

NewTransferARInvoicesCriteriaTypeWithDefaults instantiates a new TransferARInvoicesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *TransferARInvoicesCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TransferARInvoicesCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TransferARInvoicesCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TransferARInvoicesCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFromAccount

`func (o *TransferARInvoicesCriteriaType) GetFromAccount() ARAccountCriteriaType`

GetFromAccount returns the FromAccount field if non-nil, zero value otherwise.

### GetFromAccountOk

`func (o *TransferARInvoicesCriteriaType) GetFromAccountOk() (*ARAccountCriteriaType, bool)`

GetFromAccountOk returns a tuple with the FromAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAccount

`func (o *TransferARInvoicesCriteriaType) SetFromAccount(v ARAccountCriteriaType)`

SetFromAccount sets FromAccount field to given value.

### HasFromAccount

`func (o *TransferARInvoicesCriteriaType) HasFromAccount() bool`

HasFromAccount returns a boolean if a field has been set.

### GetInvoicesTransferType

`func (o *TransferARInvoicesCriteriaType) GetInvoicesTransferType() []ARInvoiceType`

GetInvoicesTransferType returns the InvoicesTransferType field if non-nil, zero value otherwise.

### GetInvoicesTransferTypeOk

`func (o *TransferARInvoicesCriteriaType) GetInvoicesTransferTypeOk() (*[]ARInvoiceType, bool)`

GetInvoicesTransferTypeOk returns a tuple with the InvoicesTransferType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoicesTransferType

`func (o *TransferARInvoicesCriteriaType) SetInvoicesTransferType(v []ARInvoiceType)`

SetInvoicesTransferType sets InvoicesTransferType field to given value.

### HasInvoicesTransferType

`func (o *TransferARInvoicesCriteriaType) HasInvoicesTransferType() bool`

HasInvoicesTransferType returns a boolean if a field has been set.

### GetOverrideCreditHoldCheck

`func (o *TransferARInvoicesCriteriaType) GetOverrideCreditHoldCheck() bool`

GetOverrideCreditHoldCheck returns the OverrideCreditHoldCheck field if non-nil, zero value otherwise.

### GetOverrideCreditHoldCheckOk

`func (o *TransferARInvoicesCriteriaType) GetOverrideCreditHoldCheckOk() (*bool, bool)`

GetOverrideCreditHoldCheckOk returns a tuple with the OverrideCreditHoldCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCreditHoldCheck

`func (o *TransferARInvoicesCriteriaType) SetOverrideCreditHoldCheck(v bool)`

SetOverrideCreditHoldCheck sets OverrideCreditHoldCheck field to given value.

### HasOverrideCreditHoldCheck

`func (o *TransferARInvoicesCriteriaType) HasOverrideCreditHoldCheck() bool`

HasOverrideCreditHoldCheck returns a boolean if a field has been set.

### GetRemarks

`func (o *TransferARInvoicesCriteriaType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *TransferARInvoicesCriteriaType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *TransferARInvoicesCriteriaType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *TransferARInvoicesCriteriaType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.

### GetToAccount

`func (o *TransferARInvoicesCriteriaType) GetToAccount() ARAccountCriteriaType`

GetToAccount returns the ToAccount field if non-nil, zero value otherwise.

### GetToAccountOk

`func (o *TransferARInvoicesCriteriaType) GetToAccountOk() (*ARAccountCriteriaType, bool)`

GetToAccountOk returns a tuple with the ToAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAccount

`func (o *TransferARInvoicesCriteriaType) SetToAccount(v ARAccountCriteriaType)`

SetToAccount sets ToAccount field to given value.

### HasToAccount

`func (o *TransferARInvoicesCriteriaType) HasToAccount() bool`

HasToAccount returns a boolean if a field has been set.

### GetTransferAmount

`func (o *TransferARInvoicesCriteriaType) GetTransferAmount() CurrencyAmountType`

GetTransferAmount returns the TransferAmount field if non-nil, zero value otherwise.

### GetTransferAmountOk

`func (o *TransferARInvoicesCriteriaType) GetTransferAmountOk() (*CurrencyAmountType, bool)`

GetTransferAmountOk returns a tuple with the TransferAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferAmount

`func (o *TransferARInvoicesCriteriaType) SetTransferAmount(v CurrencyAmountType)`

SetTransferAmount sets TransferAmount field to given value.

### HasTransferAmount

`func (o *TransferARInvoicesCriteriaType) HasTransferAmount() bool`

HasTransferAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


