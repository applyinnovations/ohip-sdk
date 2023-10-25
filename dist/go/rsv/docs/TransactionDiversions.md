# TransactionDiversions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionDiversions** | Pointer to [**[]ReservationTransactionDiversionType**](ReservationTransactionDiversionType.md) | List of Transaction Diversion rules. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionDiversions

`func NewTransactionDiversions() *TransactionDiversions`

NewTransactionDiversions instantiates a new TransactionDiversions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiversionsWithDefaults

`func NewTransactionDiversionsWithDefaults() *TransactionDiversions`

NewTransactionDiversionsWithDefaults instantiates a new TransactionDiversions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionDiversions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionDiversions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionDiversions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionDiversions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionDiversions

`func (o *TransactionDiversions) GetTransactionDiversions() []ReservationTransactionDiversionType`

GetTransactionDiversions returns the TransactionDiversions field if non-nil, zero value otherwise.

### GetTransactionDiversionsOk

`func (o *TransactionDiversions) GetTransactionDiversionsOk() (*[]ReservationTransactionDiversionType, bool)`

GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiversions

`func (o *TransactionDiversions) SetTransactionDiversions(v []ReservationTransactionDiversionType)`

SetTransactionDiversions sets TransactionDiversions field to given value.

### HasTransactionDiversions

`func (o *TransactionDiversions) HasTransactionDiversions() bool`

HasTransactionDiversions returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionDiversions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionDiversions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionDiversions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionDiversions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


