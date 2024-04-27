# StrategyConditionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsiderOutOfOrderRooms** | Pointer to **bool** | Consider the out of order rooms for the strategy | [optional] 
**ConsiderSellLimits** | Pointer to **bool** | Consider the sell limit for the strategy | [optional] 
**Threshold** | Pointer to [**ThresholdType**](ThresholdType.md) |  | [optional] 
**ThresholdType** | Pointer to **string** | Flat or Percentage. | [optional] 
**Type** | Pointer to [**RateStrategyConditionType**](RateStrategyConditionType.md) |  | [optional] 

## Methods

### NewStrategyConditionType

`func NewStrategyConditionType() *StrategyConditionType`

NewStrategyConditionType instantiates a new StrategyConditionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStrategyConditionTypeWithDefaults

`func NewStrategyConditionTypeWithDefaults() *StrategyConditionType`

NewStrategyConditionTypeWithDefaults instantiates a new StrategyConditionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsiderOutOfOrderRooms

`func (o *StrategyConditionType) GetConsiderOutOfOrderRooms() bool`

GetConsiderOutOfOrderRooms returns the ConsiderOutOfOrderRooms field if non-nil, zero value otherwise.

### GetConsiderOutOfOrderRoomsOk

`func (o *StrategyConditionType) GetConsiderOutOfOrderRoomsOk() (*bool, bool)`

GetConsiderOutOfOrderRoomsOk returns a tuple with the ConsiderOutOfOrderRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsiderOutOfOrderRooms

`func (o *StrategyConditionType) SetConsiderOutOfOrderRooms(v bool)`

SetConsiderOutOfOrderRooms sets ConsiderOutOfOrderRooms field to given value.

### HasConsiderOutOfOrderRooms

`func (o *StrategyConditionType) HasConsiderOutOfOrderRooms() bool`

HasConsiderOutOfOrderRooms returns a boolean if a field has been set.

### GetConsiderSellLimits

`func (o *StrategyConditionType) GetConsiderSellLimits() bool`

GetConsiderSellLimits returns the ConsiderSellLimits field if non-nil, zero value otherwise.

### GetConsiderSellLimitsOk

`func (o *StrategyConditionType) GetConsiderSellLimitsOk() (*bool, bool)`

GetConsiderSellLimitsOk returns a tuple with the ConsiderSellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsiderSellLimits

`func (o *StrategyConditionType) SetConsiderSellLimits(v bool)`

SetConsiderSellLimits sets ConsiderSellLimits field to given value.

### HasConsiderSellLimits

`func (o *StrategyConditionType) HasConsiderSellLimits() bool`

HasConsiderSellLimits returns a boolean if a field has been set.

### GetThreshold

`func (o *StrategyConditionType) GetThreshold() ThresholdType`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *StrategyConditionType) GetThresholdOk() (*ThresholdType, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *StrategyConditionType) SetThreshold(v ThresholdType)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *StrategyConditionType) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetThresholdType

`func (o *StrategyConditionType) GetThresholdType() string`

GetThresholdType returns the ThresholdType field if non-nil, zero value otherwise.

### GetThresholdTypeOk

`func (o *StrategyConditionType) GetThresholdTypeOk() (*string, bool)`

GetThresholdTypeOk returns a tuple with the ThresholdType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholdType

`func (o *StrategyConditionType) SetThresholdType(v string)`

SetThresholdType sets ThresholdType field to given value.

### HasThresholdType

`func (o *StrategyConditionType) HasThresholdType() bool`

HasThresholdType returns a boolean if a field has been set.

### GetType

`func (o *StrategyConditionType) GetType() RateStrategyConditionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StrategyConditionType) GetTypeOk() (*RateStrategyConditionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StrategyConditionType) SetType(v RateStrategyConditionType)`

SetType sets Type field to given value.

### HasType

`func (o *StrategyConditionType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


