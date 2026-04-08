# TransactionARInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountNumber** | Pointer to **string** | AR Account number. | [optional] 
**AccountName** | Pointer to **string** | The Account name where this invoice is sent. | [optional] 
**InvoiceNo** | Pointer to **float32** | The invoice number which includes this transaction. | [optional] 

## Methods

### NewTransactionARInfoType

`func NewTransactionARInfoType() *TransactionARInfoType`

NewTransactionARInfoType instantiates a new TransactionARInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionARInfoTypeWithDefaults

`func NewTransactionARInfoTypeWithDefaults() *TransactionARInfoType`

NewTransactionARInfoTypeWithDefaults instantiates a new TransactionARInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountNumber

`func (o *TransactionARInfoType) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *TransactionARInfoType) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *TransactionARInfoType) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *TransactionARInfoType) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetAccountName

`func (o *TransactionARInfoType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *TransactionARInfoType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *TransactionARInfoType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *TransactionARInfoType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *TransactionARInfoType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *TransactionARInfoType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *TransactionARInfoType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *TransactionARInfoType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


