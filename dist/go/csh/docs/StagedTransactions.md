# StagedTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StagedCompTransactionsInfo** | Pointer to [**[][]UniqueIDType**]([]UniqueIDType.md) | Transaction ID List of staged comp transactions for the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStagedTransactions

`func NewStagedTransactions() *StagedTransactions`

NewStagedTransactions instantiates a new StagedTransactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedTransactionsWithDefaults

`func NewStagedTransactionsWithDefaults() *StagedTransactions`

NewStagedTransactionsWithDefaults instantiates a new StagedTransactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStagedCompTransactionsInfo

`func (o *StagedTransactions) GetStagedCompTransactionsInfo() [][]UniqueIDType`

GetStagedCompTransactionsInfo returns the StagedCompTransactionsInfo field if non-nil, zero value otherwise.

### GetStagedCompTransactionsInfoOk

`func (o *StagedTransactions) GetStagedCompTransactionsInfoOk() (*[][]UniqueIDType, bool)`

GetStagedCompTransactionsInfoOk returns a tuple with the StagedCompTransactionsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedCompTransactionsInfo

`func (o *StagedTransactions) SetStagedCompTransactionsInfo(v [][]UniqueIDType)`

SetStagedCompTransactionsInfo sets StagedCompTransactionsInfo field to given value.

### HasStagedCompTransactionsInfo

`func (o *StagedTransactions) HasStagedCompTransactionsInfo() bool`

HasStagedCompTransactionsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *StagedTransactions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StagedTransactions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StagedTransactions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StagedTransactions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StagedTransactions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StagedTransactions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StagedTransactions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StagedTransactions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


