# ChannelSellLimitsByDateRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellLimits** | Pointer to [**[]ChannelSellLimitScheduleType**](ChannelSellLimitScheduleType.md) | Details about a sell limit schedule for a channel or channel room type. | [optional] 
**AdjustOverlappingSchedules** | Pointer to **bool** | Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelSellLimitsByDateRange

`func NewChannelSellLimitsByDateRange() *ChannelSellLimitsByDateRange`

NewChannelSellLimitsByDateRange instantiates a new ChannelSellLimitsByDateRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitsByDateRangeWithDefaults

`func NewChannelSellLimitsByDateRangeWithDefaults() *ChannelSellLimitsByDateRange`

NewChannelSellLimitsByDateRangeWithDefaults instantiates a new ChannelSellLimitsByDateRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellLimits

`func (o *ChannelSellLimitsByDateRange) GetSellLimits() []ChannelSellLimitScheduleType`

GetSellLimits returns the SellLimits field if non-nil, zero value otherwise.

### GetSellLimitsOk

`func (o *ChannelSellLimitsByDateRange) GetSellLimitsOk() (*[]ChannelSellLimitScheduleType, bool)`

GetSellLimitsOk returns a tuple with the SellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimits

`func (o *ChannelSellLimitsByDateRange) SetSellLimits(v []ChannelSellLimitScheduleType)`

SetSellLimits sets SellLimits field to given value.

### HasSellLimits

`func (o *ChannelSellLimitsByDateRange) HasSellLimits() bool`

HasSellLimits returns a boolean if a field has been set.

### GetAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDateRange) GetAdjustOverlappingSchedules() bool`

GetAdjustOverlappingSchedules returns the AdjustOverlappingSchedules field if non-nil, zero value otherwise.

### GetAdjustOverlappingSchedulesOk

`func (o *ChannelSellLimitsByDateRange) GetAdjustOverlappingSchedulesOk() (*bool, bool)`

GetAdjustOverlappingSchedulesOk returns a tuple with the AdjustOverlappingSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDateRange) SetAdjustOverlappingSchedules(v bool)`

SetAdjustOverlappingSchedules sets AdjustOverlappingSchedules field to given value.

### HasAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDateRange) HasAdjustOverlappingSchedules() bool`

HasAdjustOverlappingSchedules returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelSellLimitsByDateRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelSellLimitsByDateRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelSellLimitsByDateRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelSellLimitsByDateRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


