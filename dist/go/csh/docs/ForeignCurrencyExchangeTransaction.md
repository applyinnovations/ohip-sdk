# ForeignCurrencyExchangeTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transaction** | Pointer to [**ForeignCurrencyExchangeTransactionType**](ForeignCurrencyExchangeTransactionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewForeignCurrencyExchangeTransaction

`func NewForeignCurrencyExchangeTransaction() *ForeignCurrencyExchangeTransaction`

NewForeignCurrencyExchangeTransaction instantiates a new ForeignCurrencyExchangeTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForeignCurrencyExchangeTransactionWithDefaults

`func NewForeignCurrencyExchangeTransactionWithDefaults() *ForeignCurrencyExchangeTransaction`

NewForeignCurrencyExchangeTransactionWithDefaults instantiates a new ForeignCurrencyExchangeTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransaction

`func (o *ForeignCurrencyExchangeTransaction) GetTransaction() ForeignCurrencyExchangeTransactionType`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *ForeignCurrencyExchangeTransaction) GetTransactionOk() (*ForeignCurrencyExchangeTransactionType, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *ForeignCurrencyExchangeTransaction) SetTransaction(v ForeignCurrencyExchangeTransactionType)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *ForeignCurrencyExchangeTransaction) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.

### GetLinks

`func (o *ForeignCurrencyExchangeTransaction) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ForeignCurrencyExchangeTransaction) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ForeignCurrencyExchangeTransaction) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ForeignCurrencyExchangeTransaction) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ForeignCurrencyExchangeTransaction) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ForeignCurrencyExchangeTransaction) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ForeignCurrencyExchangeTransaction) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ForeignCurrencyExchangeTransaction) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


