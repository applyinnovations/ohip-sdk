# ProfileDistributionConditionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftExpression** | Pointer to [**ProfileDistributionExpressionFieldType**](ProfileDistributionExpressionFieldType.md) |  | [optional] 
**Operator** | Pointer to [**ProfileDistributionExpressionOperatorType**](ProfileDistributionExpressionOperatorType.md) |  | [optional] 
**RightExpression** | Pointer to [**ProfileDistributionExpressionParameterType**](ProfileDistributionExpressionParameterType.md) |  | [optional] 
**LogicalOperator** | Pointer to [**LogicalOperatorType**](LogicalOperatorType.md) |  | [optional] 

## Methods

### NewProfileDistributionConditionType

`func NewProfileDistributionConditionType() *ProfileDistributionConditionType`

NewProfileDistributionConditionType instantiates a new ProfileDistributionConditionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDistributionConditionTypeWithDefaults

`func NewProfileDistributionConditionTypeWithDefaults() *ProfileDistributionConditionType`

NewProfileDistributionConditionTypeWithDefaults instantiates a new ProfileDistributionConditionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftExpression

`func (o *ProfileDistributionConditionType) GetLeftExpression() ProfileDistributionExpressionFieldType`

GetLeftExpression returns the LeftExpression field if non-nil, zero value otherwise.

### GetLeftExpressionOk

`func (o *ProfileDistributionConditionType) GetLeftExpressionOk() (*ProfileDistributionExpressionFieldType, bool)`

GetLeftExpressionOk returns a tuple with the LeftExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftExpression

`func (o *ProfileDistributionConditionType) SetLeftExpression(v ProfileDistributionExpressionFieldType)`

SetLeftExpression sets LeftExpression field to given value.

### HasLeftExpression

`func (o *ProfileDistributionConditionType) HasLeftExpression() bool`

HasLeftExpression returns a boolean if a field has been set.

### GetOperator

`func (o *ProfileDistributionConditionType) GetOperator() ProfileDistributionExpressionOperatorType`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ProfileDistributionConditionType) GetOperatorOk() (*ProfileDistributionExpressionOperatorType, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ProfileDistributionConditionType) SetOperator(v ProfileDistributionExpressionOperatorType)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ProfileDistributionConditionType) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetRightExpression

`func (o *ProfileDistributionConditionType) GetRightExpression() ProfileDistributionExpressionParameterType`

GetRightExpression returns the RightExpression field if non-nil, zero value otherwise.

### GetRightExpressionOk

`func (o *ProfileDistributionConditionType) GetRightExpressionOk() (*ProfileDistributionExpressionParameterType, bool)`

GetRightExpressionOk returns a tuple with the RightExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightExpression

`func (o *ProfileDistributionConditionType) SetRightExpression(v ProfileDistributionExpressionParameterType)`

SetRightExpression sets RightExpression field to given value.

### HasRightExpression

`func (o *ProfileDistributionConditionType) HasRightExpression() bool`

HasRightExpression returns a boolean if a field has been set.

### GetLogicalOperator

`func (o *ProfileDistributionConditionType) GetLogicalOperator() LogicalOperatorType`

GetLogicalOperator returns the LogicalOperator field if non-nil, zero value otherwise.

### GetLogicalOperatorOk

`func (o *ProfileDistributionConditionType) GetLogicalOperatorOk() (*LogicalOperatorType, bool)`

GetLogicalOperatorOk returns a tuple with the LogicalOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogicalOperator

`func (o *ProfileDistributionConditionType) SetLogicalOperator(v LogicalOperatorType)`

SetLogicalOperator sets LogicalOperator field to given value.

### HasLogicalOperator

`func (o *ProfileDistributionConditionType) HasLogicalOperator() bool`

HasLogicalOperator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


