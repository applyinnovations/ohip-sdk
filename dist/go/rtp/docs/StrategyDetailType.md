# StrategyDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**StrategyConditionType**](StrategyConditionType.md) |  | [optional] 
**Control** | Pointer to [**StrategyControlType**](StrategyControlType.md) |  | [optional] 
**ExecutionOrder** | Pointer to **int32** | Rate Strategy execution order sequence. | [optional] 
**Restriction** | Pointer to [**StrategyRestrictionType**](StrategyRestrictionType.md) |  | [optional] 

## Methods

### NewStrategyDetailType

`func NewStrategyDetailType() *StrategyDetailType`

NewStrategyDetailType instantiates a new StrategyDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStrategyDetailTypeWithDefaults

`func NewStrategyDetailTypeWithDefaults() *StrategyDetailType`

NewStrategyDetailTypeWithDefaults instantiates a new StrategyDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *StrategyDetailType) GetCondition() StrategyConditionType`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *StrategyDetailType) GetConditionOk() (*StrategyConditionType, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *StrategyDetailType) SetCondition(v StrategyConditionType)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *StrategyDetailType) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetControl

`func (o *StrategyDetailType) GetControl() StrategyControlType`

GetControl returns the Control field if non-nil, zero value otherwise.

### GetControlOk

`func (o *StrategyDetailType) GetControlOk() (*StrategyControlType, bool)`

GetControlOk returns a tuple with the Control field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControl

`func (o *StrategyDetailType) SetControl(v StrategyControlType)`

SetControl sets Control field to given value.

### HasControl

`func (o *StrategyDetailType) HasControl() bool`

HasControl returns a boolean if a field has been set.

### GetExecutionOrder

`func (o *StrategyDetailType) GetExecutionOrder() int32`

GetExecutionOrder returns the ExecutionOrder field if non-nil, zero value otherwise.

### GetExecutionOrderOk

`func (o *StrategyDetailType) GetExecutionOrderOk() (*int32, bool)`

GetExecutionOrderOk returns a tuple with the ExecutionOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionOrder

`func (o *StrategyDetailType) SetExecutionOrder(v int32)`

SetExecutionOrder sets ExecutionOrder field to given value.

### HasExecutionOrder

`func (o *StrategyDetailType) HasExecutionOrder() bool`

HasExecutionOrder returns a boolean if a field has been set.

### GetRestriction

`func (o *StrategyDetailType) GetRestriction() StrategyRestrictionType`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *StrategyDetailType) GetRestrictionOk() (*StrategyRestrictionType, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *StrategyDetailType) SetRestriction(v StrategyRestrictionType)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *StrategyDetailType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


