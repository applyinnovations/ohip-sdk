# ArTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | Pointer to [**ARTransactionType**](ARTransactionType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArTransactions

`func NewArTransactions() *ArTransactions`

NewArTransactions instantiates a new ArTransactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArTransactionsWithDefaults

`func NewArTransactionsWithDefaults() *ArTransactions`

NewArTransactionsWithDefaults instantiates a new ArTransactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *ArTransactions) GetTransactions() ARTransactionType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *ArTransactions) GetTransactionsOk() (*ARTransactionType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *ArTransactions) SetTransactions(v ARTransactionType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *ArTransactions) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *ArTransactions) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *ArTransactions) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *ArTransactions) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *ArTransactions) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ArTransactions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArTransactions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArTransactions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArTransactions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArTransactions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArTransactions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArTransactions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArTransactions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


