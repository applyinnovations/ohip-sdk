# TransferCompTransactionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TransferCompTransactionsCriteria**](TransferCompTransactionsCriteria.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTransferCompTransactionsRequest

`func NewTransferCompTransactionsRequest() *TransferCompTransactionsRequest`

NewTransferCompTransactionsRequest instantiates a new TransferCompTransactionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferCompTransactionsRequestWithDefaults

`func NewTransferCompTransactionsRequestWithDefaults() *TransferCompTransactionsRequest`

NewTransferCompTransactionsRequestWithDefaults instantiates a new TransferCompTransactionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *TransferCompTransactionsRequest) GetCriteria() TransferCompTransactionsCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *TransferCompTransactionsRequest) GetCriteriaOk() (*TransferCompTransactionsCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *TransferCompTransactionsRequest) SetCriteria(v TransferCompTransactionsCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *TransferCompTransactionsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *TransferCompTransactionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransferCompTransactionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransferCompTransactionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransferCompTransactionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


