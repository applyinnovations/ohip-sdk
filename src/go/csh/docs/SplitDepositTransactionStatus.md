# SplitDepositTransactionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Transactions** | Pointer to [**TransactionsType**](TransactionsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSplitDepositTransactionStatus

`func NewSplitDepositTransactionStatus() *SplitDepositTransactionStatus`

NewSplitDepositTransactionStatus instantiates a new SplitDepositTransactionStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitDepositTransactionStatusWithDefaults

`func NewSplitDepositTransactionStatusWithDefaults() *SplitDepositTransactionStatus`

NewSplitDepositTransactionStatusWithDefaults instantiates a new SplitDepositTransactionStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SplitDepositTransactionStatus) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitDepositTransactionStatus) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitDepositTransactionStatus) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitDepositTransactionStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactions

`func (o *SplitDepositTransactionStatus) GetTransactions() TransactionsType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *SplitDepositTransactionStatus) GetTransactionsOk() (*TransactionsType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *SplitDepositTransactionStatus) SetTransactions(v TransactionsType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *SplitDepositTransactionStatus) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitDepositTransactionStatus) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitDepositTransactionStatus) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitDepositTransactionStatus) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitDepositTransactionStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


