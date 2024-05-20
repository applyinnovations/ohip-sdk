# ARTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Invoices** | Pointer to [**[]AccountInvoiceInfoType**](AccountInvoiceInfoType.md) | Account Invoice Info. | [optional] 
**Payments** | Pointer to [**[]AccountPaymentInfoType**](AccountPaymentInfoType.md) | Account Payments info . | [optional] 

## Methods

### NewARTransactionType

`func NewARTransactionType() *ARTransactionType`

NewARTransactionType instantiates a new ARTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARTransactionTypeWithDefaults

`func NewARTransactionTypeWithDefaults() *ARTransactionType`

NewARTransactionTypeWithDefaults instantiates a new ARTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoices

`func (o *ARTransactionType) GetInvoices() []AccountInvoiceInfoType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARTransactionType) GetInvoicesOk() (*[]AccountInvoiceInfoType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARTransactionType) SetInvoices(v []AccountInvoiceInfoType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARTransactionType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetPayments

`func (o *ARTransactionType) GetPayments() []AccountPaymentInfoType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARTransactionType) GetPaymentsOk() (*[]AccountPaymentInfoType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARTransactionType) SetPayments(v []AccountPaymentInfoType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARTransactionType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


