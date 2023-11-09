# StatementHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARStatementHistory** | Pointer to [**[]ARStatementHistoryType**](ARStatementHistoryType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewStatementHistory

`func NewStatementHistory() *StatementHistory`

NewStatementHistory instantiates a new StatementHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatementHistoryWithDefaults

`func NewStatementHistoryWithDefaults() *StatementHistory`

NewStatementHistoryWithDefaults instantiates a new StatementHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARStatementHistory

`func (o *StatementHistory) GetARStatementHistory() []ARStatementHistoryType`

GetARStatementHistory returns the ARStatementHistory field if non-nil, zero value otherwise.

### GetARStatementHistoryOk

`func (o *StatementHistory) GetARStatementHistoryOk() (*[]ARStatementHistoryType, bool)`

GetARStatementHistoryOk returns a tuple with the ARStatementHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARStatementHistory

`func (o *StatementHistory) SetARStatementHistory(v []ARStatementHistoryType)`

SetARStatementHistory sets ARStatementHistory field to given value.

### HasARStatementHistory

`func (o *StatementHistory) HasARStatementHistory() bool`

HasARStatementHistory returns a boolean if a field has been set.

### GetLinks

`func (o *StatementHistory) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StatementHistory) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StatementHistory) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StatementHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StatementHistory) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StatementHistory) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StatementHistory) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StatementHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


