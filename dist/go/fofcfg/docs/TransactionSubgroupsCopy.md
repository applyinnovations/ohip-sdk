# TransactionSubgroupsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInstructions** | Pointer to [**CopyTransactionSubgroupsType**](CopyTransactionSubgroupsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionSubgroupsCopy

`func NewTransactionSubgroupsCopy() *TransactionSubgroupsCopy`

NewTransactionSubgroupsCopy instantiates a new TransactionSubgroupsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionSubgroupsCopyWithDefaults

`func NewTransactionSubgroupsCopyWithDefaults() *TransactionSubgroupsCopy`

NewTransactionSubgroupsCopyWithDefaults instantiates a new TransactionSubgroupsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInstructions

`func (o *TransactionSubgroupsCopy) GetCopyInstructions() CopyTransactionSubgroupsType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *TransactionSubgroupsCopy) GetCopyInstructionsOk() (*CopyTransactionSubgroupsType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *TransactionSubgroupsCopy) SetCopyInstructions(v CopyTransactionSubgroupsType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *TransactionSubgroupsCopy) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionSubgroupsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionSubgroupsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionSubgroupsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionSubgroupsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionSubgroupsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionSubgroupsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionSubgroupsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionSubgroupsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


