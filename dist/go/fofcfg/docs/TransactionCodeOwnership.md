# TransactionCodeOwnership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to [**ChangeTransactionCodeOwnershipType**](ChangeTransactionCodeOwnershipType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionCodeOwnership

`func NewTransactionCodeOwnership() *TransactionCodeOwnership`

NewTransactionCodeOwnership instantiates a new TransactionCodeOwnership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeOwnershipWithDefaults

`func NewTransactionCodeOwnershipWithDefaults() *TransactionCodeOwnership`

NewTransactionCodeOwnershipWithDefaults instantiates a new TransactionCodeOwnership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *TransactionCodeOwnership) GetTransactionCodes() ChangeTransactionCodeOwnershipType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *TransactionCodeOwnership) GetTransactionCodesOk() (*ChangeTransactionCodeOwnershipType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *TransactionCodeOwnership) SetTransactionCodes(v ChangeTransactionCodeOwnershipType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *TransactionCodeOwnership) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionCodeOwnership) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionCodeOwnership) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionCodeOwnership) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionCodeOwnership) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionCodeOwnership) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionCodeOwnership) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionCodeOwnership) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionCodeOwnership) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


