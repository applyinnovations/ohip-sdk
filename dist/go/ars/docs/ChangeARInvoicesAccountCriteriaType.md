# ChangeARInvoicesAccountCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Invoices** | Pointer to [**[]ARInvoiceType**](ARInvoiceType.md) | AR Invoice(s) to be changed. | [optional] 
**ToAccount** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 

## Methods

### NewChangeARInvoicesAccountCriteriaType

`func NewChangeARInvoicesAccountCriteriaType() *ChangeARInvoicesAccountCriteriaType`

NewChangeARInvoicesAccountCriteriaType instantiates a new ChangeARInvoicesAccountCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeARInvoicesAccountCriteriaTypeWithDefaults

`func NewChangeARInvoicesAccountCriteriaTypeWithDefaults() *ChangeARInvoicesAccountCriteriaType`

NewChangeARInvoicesAccountCriteriaTypeWithDefaults instantiates a new ChangeARInvoicesAccountCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ChangeARInvoicesAccountCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChangeARInvoicesAccountCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChangeARInvoicesAccountCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChangeARInvoicesAccountCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetInvoices

`func (o *ChangeARInvoicesAccountCriteriaType) GetInvoices() []ARInvoiceType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ChangeARInvoicesAccountCriteriaType) GetInvoicesOk() (*[]ARInvoiceType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ChangeARInvoicesAccountCriteriaType) SetInvoices(v []ARInvoiceType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ChangeARInvoicesAccountCriteriaType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetToAccount

`func (o *ChangeARInvoicesAccountCriteriaType) GetToAccount() ARAccountCriteriaType`

GetToAccount returns the ToAccount field if non-nil, zero value otherwise.

### GetToAccountOk

`func (o *ChangeARInvoicesAccountCriteriaType) GetToAccountOk() (*ARAccountCriteriaType, bool)`

GetToAccountOk returns a tuple with the ToAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAccount

`func (o *ChangeARInvoicesAccountCriteriaType) SetToAccount(v ARAccountCriteriaType)`

SetToAccount sets ToAccount field to given value.

### HasToAccount

`func (o *ChangeARInvoicesAccountCriteriaType) HasToAccount() bool`

HasToAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


