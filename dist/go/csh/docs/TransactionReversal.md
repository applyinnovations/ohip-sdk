# TransactionReversal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReverseCriteria** | Pointer to [**DeleteTransactionCriteriaType**](DeleteTransactionCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionReversal

`func NewTransactionReversal() *TransactionReversal`

NewTransactionReversal instantiates a new TransactionReversal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionReversalWithDefaults

`func NewTransactionReversalWithDefaults() *TransactionReversal`

NewTransactionReversalWithDefaults instantiates a new TransactionReversal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionReversal) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionReversal) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionReversal) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionReversal) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReverseCriteria

`func (o *TransactionReversal) GetReverseCriteria() DeleteTransactionCriteriaType`

GetReverseCriteria returns the ReverseCriteria field if non-nil, zero value otherwise.

### GetReverseCriteriaOk

`func (o *TransactionReversal) GetReverseCriteriaOk() (*DeleteTransactionCriteriaType, bool)`

GetReverseCriteriaOk returns a tuple with the ReverseCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseCriteria

`func (o *TransactionReversal) SetReverseCriteria(v DeleteTransactionCriteriaType)`

SetReverseCriteria sets ReverseCriteria field to given value.

### HasReverseCriteria

`func (o *TransactionReversal) HasReverseCriteria() bool`

HasReverseCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionReversal) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionReversal) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionReversal) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionReversal) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


