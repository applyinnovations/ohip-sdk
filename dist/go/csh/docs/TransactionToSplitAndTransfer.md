# TransactionToSplitAndTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TrxSplitAndTransferCriteriaType**](TrxSplitAndTransferCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionToSplitAndTransfer

`func NewTransactionToSplitAndTransfer() *TransactionToSplitAndTransfer`

NewTransactionToSplitAndTransfer instantiates a new TransactionToSplitAndTransfer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionToSplitAndTransferWithDefaults

`func NewTransactionToSplitAndTransferWithDefaults() *TransactionToSplitAndTransfer`

NewTransactionToSplitAndTransferWithDefaults instantiates a new TransactionToSplitAndTransfer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *TransactionToSplitAndTransfer) GetCriteria() TrxSplitAndTransferCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *TransactionToSplitAndTransfer) GetCriteriaOk() (*TrxSplitAndTransferCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *TransactionToSplitAndTransfer) SetCriteria(v TrxSplitAndTransferCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *TransactionToSplitAndTransfer) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionToSplitAndTransfer) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionToSplitAndTransfer) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionToSplitAndTransfer) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionToSplitAndTransfer) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionToSplitAndTransfer) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionToSplitAndTransfer) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionToSplitAndTransfer) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionToSplitAndTransfer) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


