# ConditionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**[]ConditionType**](ConditionType.md) |  | [optional] 
**ConditionGroup** | Pointer to [**[]ConditionGroupType**](ConditionGroupType.md) |  | [optional] 
**LogicalOperator** | Pointer to [**LogicalOperatorType**](LogicalOperatorType.md) |  | [optional] 

## Methods

### NewConditionGroupType

`func NewConditionGroupType() *ConditionGroupType`

NewConditionGroupType instantiates a new ConditionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionGroupTypeWithDefaults

`func NewConditionGroupTypeWithDefaults() *ConditionGroupType`

NewConditionGroupTypeWithDefaults instantiates a new ConditionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *ConditionGroupType) GetCondition() []ConditionType`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *ConditionGroupType) GetConditionOk() (*[]ConditionType, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *ConditionGroupType) SetCondition(v []ConditionType)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *ConditionGroupType) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetConditionGroup

`func (o *ConditionGroupType) GetConditionGroup() []ConditionGroupType`

GetConditionGroup returns the ConditionGroup field if non-nil, zero value otherwise.

### GetConditionGroupOk

`func (o *ConditionGroupType) GetConditionGroupOk() (*[]ConditionGroupType, bool)`

GetConditionGroupOk returns a tuple with the ConditionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditionGroup

`func (o *ConditionGroupType) SetConditionGroup(v []ConditionGroupType)`

SetConditionGroup sets ConditionGroup field to given value.

### HasConditionGroup

`func (o *ConditionGroupType) HasConditionGroup() bool`

HasConditionGroup returns a boolean if a field has been set.

### GetLogicalOperator

`func (o *ConditionGroupType) GetLogicalOperator() LogicalOperatorType`

GetLogicalOperator returns the LogicalOperator field if non-nil, zero value otherwise.

### GetLogicalOperatorOk

`func (o *ConditionGroupType) GetLogicalOperatorOk() (*LogicalOperatorType, bool)`

GetLogicalOperatorOk returns a tuple with the LogicalOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogicalOperator

`func (o *ConditionGroupType) SetLogicalOperator(v LogicalOperatorType)`

SetLogicalOperator sets LogicalOperator field to given value.

### HasLogicalOperator

`func (o *ConditionGroupType) HasLogicalOperator() bool`

HasLogicalOperator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


