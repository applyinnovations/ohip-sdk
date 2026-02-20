# TransferTransactionToWindow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | Pointer to **[]float32** | Generated transaction number on destination window. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransferTransactionToWindow

`func NewTransferTransactionToWindow() *TransferTransactionToWindow`

NewTransferTransactionToWindow instantiates a new TransferTransactionToWindow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferTransactionToWindowWithDefaults

`func NewTransferTransactionToWindowWithDefaults() *TransferTransactionToWindow`

NewTransferTransactionToWindowWithDefaults instantiates a new TransferTransactionToWindow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *TransferTransactionToWindow) GetTransactions() []float32`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *TransferTransactionToWindow) GetTransactionsOk() (*[]float32, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *TransferTransactionToWindow) SetTransactions(v []float32)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *TransferTransactionToWindow) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetLinks

`func (o *TransferTransactionToWindow) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransferTransactionToWindow) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransferTransactionToWindow) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransferTransactionToWindow) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransferTransactionToWindow) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransferTransactionToWindow) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransferTransactionToWindow) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransferTransactionToWindow) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


