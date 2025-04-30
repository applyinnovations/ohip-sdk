# TransferCompTransactionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetFolioNo** | Pointer to **int32** | Folio window number to where transactions will be transfered. | [optional] 
**TransactionList** | Pointer to **[]float32** | List of transactions to be transfered. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewTransferCompTransactionsCriteria

`func NewTransferCompTransactionsCriteria() *TransferCompTransactionsCriteria`

NewTransferCompTransactionsCriteria instantiates a new TransferCompTransactionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferCompTransactionsCriteriaWithDefaults

`func NewTransferCompTransactionsCriteriaWithDefaults() *TransferCompTransactionsCriteria`

NewTransferCompTransactionsCriteriaWithDefaults instantiates a new TransferCompTransactionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetFolioNo

`func (o *TransferCompTransactionsCriteria) GetTargetFolioNo() int32`

GetTargetFolioNo returns the TargetFolioNo field if non-nil, zero value otherwise.

### GetTargetFolioNoOk

`func (o *TransferCompTransactionsCriteria) GetTargetFolioNoOk() (*int32, bool)`

GetTargetFolioNoOk returns a tuple with the TargetFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFolioNo

`func (o *TransferCompTransactionsCriteria) SetTargetFolioNo(v int32)`

SetTargetFolioNo sets TargetFolioNo field to given value.

### HasTargetFolioNo

`func (o *TransferCompTransactionsCriteria) HasTargetFolioNo() bool`

HasTargetFolioNo returns a boolean if a field has been set.

### GetTransactionList

`func (o *TransferCompTransactionsCriteria) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *TransferCompTransactionsCriteria) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *TransferCompTransactionsCriteria) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *TransferCompTransactionsCriteria) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetCashierId

`func (o *TransferCompTransactionsCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TransferCompTransactionsCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TransferCompTransactionsCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TransferCompTransactionsCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


