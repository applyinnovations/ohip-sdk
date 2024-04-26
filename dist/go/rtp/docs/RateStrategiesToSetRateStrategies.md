# RateStrategiesToSetRateStrategies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCounterStrategy** | Pointer to **bool** | If AutoCounterStrategy flag is true, system will automatically create or update a counter strategy for open and close condition type strategy. | [optional] 
**RateStrategy** | Pointer to [**[]HotelRateStrategyType**](HotelRateStrategyType.md) | Rate Strategy details to be created or changed. | [optional] 

## Methods

### NewRateStrategiesToSetRateStrategies

`func NewRateStrategiesToSetRateStrategies() *RateStrategiesToSetRateStrategies`

NewRateStrategiesToSetRateStrategies instantiates a new RateStrategiesToSetRateStrategies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateStrategiesToSetRateStrategiesWithDefaults

`func NewRateStrategiesToSetRateStrategiesWithDefaults() *RateStrategiesToSetRateStrategies`

NewRateStrategiesToSetRateStrategiesWithDefaults instantiates a new RateStrategiesToSetRateStrategies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCounterStrategy

`func (o *RateStrategiesToSetRateStrategies) GetAutoCounterStrategy() bool`

GetAutoCounterStrategy returns the AutoCounterStrategy field if non-nil, zero value otherwise.

### GetAutoCounterStrategyOk

`func (o *RateStrategiesToSetRateStrategies) GetAutoCounterStrategyOk() (*bool, bool)`

GetAutoCounterStrategyOk returns a tuple with the AutoCounterStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCounterStrategy

`func (o *RateStrategiesToSetRateStrategies) SetAutoCounterStrategy(v bool)`

SetAutoCounterStrategy sets AutoCounterStrategy field to given value.

### HasAutoCounterStrategy

`func (o *RateStrategiesToSetRateStrategies) HasAutoCounterStrategy() bool`

HasAutoCounterStrategy returns a boolean if a field has been set.

### GetRateStrategy

`func (o *RateStrategiesToSetRateStrategies) GetRateStrategy() []HotelRateStrategyType`

GetRateStrategy returns the RateStrategy field if non-nil, zero value otherwise.

### GetRateStrategyOk

`func (o *RateStrategiesToSetRateStrategies) GetRateStrategyOk() (*[]HotelRateStrategyType, bool)`

GetRateStrategyOk returns a tuple with the RateStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategy

`func (o *RateStrategiesToSetRateStrategies) SetRateStrategy(v []HotelRateStrategyType)`

SetRateStrategy sets RateStrategy field to given value.

### HasRateStrategy

`func (o *RateStrategiesToSetRateStrategies) HasRateStrategy() bool`

HasRateStrategy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


