# ConditionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftExpression** | Pointer to [**ExpressionFieldType**](ExpressionFieldType.md) |  | [optional] 
**LogicalOperator** | Pointer to [**LogicalOperatorType**](LogicalOperatorType.md) |  | [optional] 
**Operator** | Pointer to [**ExpressionOperatorType**](ExpressionOperatorType.md) |  | [optional] 
**RightExpression** | Pointer to [**ExpressionParameterType**](ExpressionParameterType.md) |  | [optional] 

## Methods

### NewConditionType

`func NewConditionType() *ConditionType`

NewConditionType instantiates a new ConditionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionTypeWithDefaults

`func NewConditionTypeWithDefaults() *ConditionType`

NewConditionTypeWithDefaults instantiates a new ConditionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftExpression

`func (o *ConditionType) GetLeftExpression() ExpressionFieldType`

GetLeftExpression returns the LeftExpression field if non-nil, zero value otherwise.

### GetLeftExpressionOk

`func (o *ConditionType) GetLeftExpressionOk() (*ExpressionFieldType, bool)`

GetLeftExpressionOk returns a tuple with the LeftExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftExpression

`func (o *ConditionType) SetLeftExpression(v ExpressionFieldType)`

SetLeftExpression sets LeftExpression field to given value.

### HasLeftExpression

`func (o *ConditionType) HasLeftExpression() bool`

HasLeftExpression returns a boolean if a field has been set.

### GetLogicalOperator

`func (o *ConditionType) GetLogicalOperator() LogicalOperatorType`

GetLogicalOperator returns the LogicalOperator field if non-nil, zero value otherwise.

### GetLogicalOperatorOk

`func (o *ConditionType) GetLogicalOperatorOk() (*LogicalOperatorType, bool)`

GetLogicalOperatorOk returns a tuple with the LogicalOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogicalOperator

`func (o *ConditionType) SetLogicalOperator(v LogicalOperatorType)`

SetLogicalOperator sets LogicalOperator field to given value.

### HasLogicalOperator

`func (o *ConditionType) HasLogicalOperator() bool`

HasLogicalOperator returns a boolean if a field has been set.

### GetOperator

`func (o *ConditionType) GetOperator() ExpressionOperatorType`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ConditionType) GetOperatorOk() (*ExpressionOperatorType, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ConditionType) SetOperator(v ExpressionOperatorType)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ConditionType) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetRightExpression

`func (o *ConditionType) GetRightExpression() ExpressionParameterType`

GetRightExpression returns the RightExpression field if non-nil, zero value otherwise.

### GetRightExpressionOk

`func (o *ConditionType) GetRightExpressionOk() (*ExpressionParameterType, bool)`

GetRightExpressionOk returns a tuple with the RightExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightExpression

`func (o *ConditionType) SetRightExpression(v ExpressionParameterType)`

SetRightExpression sets RightExpression field to given value.

### HasRightExpression

`func (o *ConditionType) HasRightExpression() bool`

HasRightExpression returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


