# ARApplyPaymentCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**ApplyType** | Pointer to [**ARApplyType**](ARApplyType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Invoices** | Pointer to [**ARPaymentInvoicesType**](ARPaymentInvoicesType.md) |  | [optional] 
**Payments** | Pointer to [**ARPaymentsType**](ARPaymentsType.md) |  | [optional] 

## Methods

### NewARApplyPaymentCriteriaType

`func NewARApplyPaymentCriteriaType() *ARApplyPaymentCriteriaType`

NewARApplyPaymentCriteriaType instantiates a new ARApplyPaymentCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARApplyPaymentCriteriaTypeWithDefaults

`func NewARApplyPaymentCriteriaTypeWithDefaults() *ARApplyPaymentCriteriaType`

NewARApplyPaymentCriteriaTypeWithDefaults instantiates a new ARApplyPaymentCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *ARApplyPaymentCriteriaType) GetAccount() ARAccountCriteriaType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ARApplyPaymentCriteriaType) GetAccountOk() (*ARAccountCriteriaType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ARApplyPaymentCriteriaType) SetAccount(v ARAccountCriteriaType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ARApplyPaymentCriteriaType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetApplyType

`func (o *ARApplyPaymentCriteriaType) GetApplyType() ARApplyType`

GetApplyType returns the ApplyType field if non-nil, zero value otherwise.

### GetApplyTypeOk

`func (o *ARApplyPaymentCriteriaType) GetApplyTypeOk() (*ARApplyType, bool)`

GetApplyTypeOk returns a tuple with the ApplyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyType

`func (o *ARApplyPaymentCriteriaType) SetApplyType(v ARApplyType)`

SetApplyType sets ApplyType field to given value.

### HasApplyType

`func (o *ARApplyPaymentCriteriaType) HasApplyType() bool`

HasApplyType returns a boolean if a field has been set.

### GetCashierId

`func (o *ARApplyPaymentCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARApplyPaymentCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARApplyPaymentCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARApplyPaymentCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetInvoices

`func (o *ARApplyPaymentCriteriaType) GetInvoices() ARPaymentInvoicesType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARApplyPaymentCriteriaType) GetInvoicesOk() (*ARPaymentInvoicesType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARApplyPaymentCriteriaType) SetInvoices(v ARPaymentInvoicesType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARApplyPaymentCriteriaType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetPayments

`func (o *ARApplyPaymentCriteriaType) GetPayments() ARPaymentsType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARApplyPaymentCriteriaType) GetPaymentsOk() (*ARPaymentsType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARApplyPaymentCriteriaType) SetPayments(v ARPaymentsType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARApplyPaymentCriteriaType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


