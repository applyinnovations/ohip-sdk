# ARGenerateStatementCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Statements** | Pointer to [**[]ARStatementType**](ARStatementType.md) | Details of printed Statements received by Fetch Operation and sent to be printed. Statements type includes report sequence number and report file name. | [optional] 
**StatementCriteria** | Pointer to [**ARStatementCriteriaType**](ARStatementCriteriaType.md) |  | [optional] 

## Methods

### NewARGenerateStatementCriteriaType

`func NewARGenerateStatementCriteriaType() *ARGenerateStatementCriteriaType`

NewARGenerateStatementCriteriaType instantiates a new ARGenerateStatementCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARGenerateStatementCriteriaTypeWithDefaults

`func NewARGenerateStatementCriteriaTypeWithDefaults() *ARGenerateStatementCriteriaType`

NewARGenerateStatementCriteriaTypeWithDefaults instantiates a new ARGenerateStatementCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatements

`func (o *ARGenerateStatementCriteriaType) GetStatements() []ARStatementType`

GetStatements returns the Statements field if non-nil, zero value otherwise.

### GetStatementsOk

`func (o *ARGenerateStatementCriteriaType) GetStatementsOk() (*[]ARStatementType, bool)`

GetStatementsOk returns a tuple with the Statements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatements

`func (o *ARGenerateStatementCriteriaType) SetStatements(v []ARStatementType)`

SetStatements sets Statements field to given value.

### HasStatements

`func (o *ARGenerateStatementCriteriaType) HasStatements() bool`

HasStatements returns a boolean if a field has been set.

### GetStatementCriteria

`func (o *ARGenerateStatementCriteriaType) GetStatementCriteria() ARStatementCriteriaType`

GetStatementCriteria returns the StatementCriteria field if non-nil, zero value otherwise.

### GetStatementCriteriaOk

`func (o *ARGenerateStatementCriteriaType) GetStatementCriteriaOk() (*ARStatementCriteriaType, bool)`

GetStatementCriteriaOk returns a tuple with the StatementCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementCriteria

`func (o *ARGenerateStatementCriteriaType) SetStatementCriteria(v ARStatementCriteriaType)`

SetStatementCriteria sets StatementCriteria field to given value.

### HasStatementCriteria

`func (o *ARGenerateStatementCriteriaType) HasStatementCriteria() bool`

HasStatementCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


