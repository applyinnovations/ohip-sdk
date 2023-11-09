# Statements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARStatements** | Pointer to [**[]ARStatementType**](ARStatementType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewStatements

`func NewStatements() *Statements`

NewStatements instantiates a new Statements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatementsWithDefaults

`func NewStatementsWithDefaults() *Statements`

NewStatementsWithDefaults instantiates a new Statements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARStatements

`func (o *Statements) GetARStatements() []ARStatementType`

GetARStatements returns the ARStatements field if non-nil, zero value otherwise.

### GetARStatementsOk

`func (o *Statements) GetARStatementsOk() (*[]ARStatementType, bool)`

GetARStatementsOk returns a tuple with the ARStatements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARStatements

`func (o *Statements) SetARStatements(v []ARStatementType)`

SetARStatements sets ARStatements field to given value.

### HasARStatements

`func (o *Statements) HasARStatements() bool`

HasARStatements returns a boolean if a field has been set.

### GetLinks

`func (o *Statements) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Statements) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Statements) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Statements) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Statements) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Statements) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Statements) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Statements) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


