# TransactionCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionCodes** | Pointer to [**CopyTransactionCodesType**](CopyTransactionCodesType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionCodesCopy

`func NewTransactionCodesCopy() *TransactionCodesCopy`

NewTransactionCodesCopy instantiates a new TransactionCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodesCopyWithDefaults

`func NewTransactionCodesCopyWithDefaults() *TransactionCodesCopy`

NewTransactionCodesCopyWithDefaults instantiates a new TransactionCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *TransactionCodesCopy) GetTransactionCodes() CopyTransactionCodesType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *TransactionCodesCopy) GetTransactionCodesOk() (*CopyTransactionCodesType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *TransactionCodesCopy) SetTransactionCodes(v CopyTransactionCodesType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *TransactionCodesCopy) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


