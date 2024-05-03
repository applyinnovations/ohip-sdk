# SplitDepositTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositTransaction** | Pointer to [**DepositTransactionType**](DepositTransactionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSplitDepositTransaction

`func NewSplitDepositTransaction() *SplitDepositTransaction`

NewSplitDepositTransaction instantiates a new SplitDepositTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitDepositTransactionWithDefaults

`func NewSplitDepositTransactionWithDefaults() *SplitDepositTransaction`

NewSplitDepositTransactionWithDefaults instantiates a new SplitDepositTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositTransaction

`func (o *SplitDepositTransaction) GetDepositTransaction() DepositTransactionType`

GetDepositTransaction returns the DepositTransaction field if non-nil, zero value otherwise.

### GetDepositTransactionOk

`func (o *SplitDepositTransaction) GetDepositTransactionOk() (*DepositTransactionType, bool)`

GetDepositTransactionOk returns a tuple with the DepositTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTransaction

`func (o *SplitDepositTransaction) SetDepositTransaction(v DepositTransactionType)`

SetDepositTransaction sets DepositTransaction field to given value.

### HasDepositTransaction

`func (o *SplitDepositTransaction) HasDepositTransaction() bool`

HasDepositTransaction returns a boolean if a field has been set.

### GetLinks

`func (o *SplitDepositTransaction) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitDepositTransaction) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitDepositTransaction) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitDepositTransaction) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitDepositTransaction) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitDepositTransaction) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitDepositTransaction) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitDepositTransaction) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


