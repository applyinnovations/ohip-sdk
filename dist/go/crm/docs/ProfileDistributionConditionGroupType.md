# ProfileDistributionConditionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**[]ProfileDistributionConditionType**](ProfileDistributionConditionType.md) |  | [optional] 
**ConditionGroup** | Pointer to [**[]ProfileDistributionConditionGroupType**](ProfileDistributionConditionGroupType.md) |  | [optional] 
**LogicalOperator** | Pointer to [**LogicalOperatorType**](LogicalOperatorType.md) |  | [optional] 

## Methods

### NewProfileDistributionConditionGroupType

`func NewProfileDistributionConditionGroupType() *ProfileDistributionConditionGroupType`

NewProfileDistributionConditionGroupType instantiates a new ProfileDistributionConditionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDistributionConditionGroupTypeWithDefaults

`func NewProfileDistributionConditionGroupTypeWithDefaults() *ProfileDistributionConditionGroupType`

NewProfileDistributionConditionGroupTypeWithDefaults instantiates a new ProfileDistributionConditionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *ProfileDistributionConditionGroupType) GetCondition() []ProfileDistributionConditionType`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *ProfileDistributionConditionGroupType) GetConditionOk() (*[]ProfileDistributionConditionType, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *ProfileDistributionConditionGroupType) SetCondition(v []ProfileDistributionConditionType)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *ProfileDistributionConditionGroupType) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetConditionGroup

`func (o *ProfileDistributionConditionGroupType) GetConditionGroup() []ProfileDistributionConditionGroupType`

GetConditionGroup returns the ConditionGroup field if non-nil, zero value otherwise.

### GetConditionGroupOk

`func (o *ProfileDistributionConditionGroupType) GetConditionGroupOk() (*[]ProfileDistributionConditionGroupType, bool)`

GetConditionGroupOk returns a tuple with the ConditionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditionGroup

`func (o *ProfileDistributionConditionGroupType) SetConditionGroup(v []ProfileDistributionConditionGroupType)`

SetConditionGroup sets ConditionGroup field to given value.

### HasConditionGroup

`func (o *ProfileDistributionConditionGroupType) HasConditionGroup() bool`

HasConditionGroup returns a boolean if a field has been set.

### GetLogicalOperator

`func (o *ProfileDistributionConditionGroupType) GetLogicalOperator() LogicalOperatorType`

GetLogicalOperator returns the LogicalOperator field if non-nil, zero value otherwise.

### GetLogicalOperatorOk

`func (o *ProfileDistributionConditionGroupType) GetLogicalOperatorOk() (*LogicalOperatorType, bool)`

GetLogicalOperatorOk returns a tuple with the LogicalOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogicalOperator

`func (o *ProfileDistributionConditionGroupType) SetLogicalOperator(v LogicalOperatorType)`

SetLogicalOperator sets LogicalOperator field to given value.

### HasLogicalOperator

`func (o *ProfileDistributionConditionGroupType) HasLogicalOperator() bool`

HasLogicalOperator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


