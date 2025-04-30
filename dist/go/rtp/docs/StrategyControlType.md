# StrategyControlType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**RollingDaysRange** | Pointer to [**StrategyControlTypeRollingDaysRange**](StrategyControlTypeRollingDaysRange.md) |  | [optional] 

## Methods

### NewStrategyControlType

`func NewStrategyControlType() *StrategyControlType`

NewStrategyControlType instantiates a new StrategyControlType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStrategyControlTypeWithDefaults

`func NewStrategyControlTypeWithDefaults() *StrategyControlType`

NewStrategyControlTypeWithDefaults instantiates a new StrategyControlType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRange

`func (o *StrategyControlType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *StrategyControlType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *StrategyControlType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *StrategyControlType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetRollingDaysRange

`func (o *StrategyControlType) GetRollingDaysRange() StrategyControlTypeRollingDaysRange`

GetRollingDaysRange returns the RollingDaysRange field if non-nil, zero value otherwise.

### GetRollingDaysRangeOk

`func (o *StrategyControlType) GetRollingDaysRangeOk() (*StrategyControlTypeRollingDaysRange, bool)`

GetRollingDaysRangeOk returns a tuple with the RollingDaysRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRollingDaysRange

`func (o *StrategyControlType) SetRollingDaysRange(v StrategyControlTypeRollingDaysRange)`

SetRollingDaysRange sets RollingDaysRange field to given value.

### HasRollingDaysRange

`func (o *StrategyControlType) HasRollingDaysRange() bool`

HasRollingDaysRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


