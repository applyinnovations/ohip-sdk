# ChannelSellLimitsByDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustOverlappingSchedules** | Pointer to **bool** | Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed. | [optional] 
**SellLimits** | Pointer to [**ChannelSellLimitsByDateType**](ChannelSellLimitsByDateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelSellLimitsByDate

`func NewChannelSellLimitsByDate() *ChannelSellLimitsByDate`

NewChannelSellLimitsByDate instantiates a new ChannelSellLimitsByDate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitsByDateWithDefaults

`func NewChannelSellLimitsByDateWithDefaults() *ChannelSellLimitsByDate`

NewChannelSellLimitsByDateWithDefaults instantiates a new ChannelSellLimitsByDate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDate) GetAdjustOverlappingSchedules() bool`

GetAdjustOverlappingSchedules returns the AdjustOverlappingSchedules field if non-nil, zero value otherwise.

### GetAdjustOverlappingSchedulesOk

`func (o *ChannelSellLimitsByDate) GetAdjustOverlappingSchedulesOk() (*bool, bool)`

GetAdjustOverlappingSchedulesOk returns a tuple with the AdjustOverlappingSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDate) SetAdjustOverlappingSchedules(v bool)`

SetAdjustOverlappingSchedules sets AdjustOverlappingSchedules field to given value.

### HasAdjustOverlappingSchedules

`func (o *ChannelSellLimitsByDate) HasAdjustOverlappingSchedules() bool`

HasAdjustOverlappingSchedules returns a boolean if a field has been set.

### GetSellLimits

`func (o *ChannelSellLimitsByDate) GetSellLimits() ChannelSellLimitsByDateType`

GetSellLimits returns the SellLimits field if non-nil, zero value otherwise.

### GetSellLimitsOk

`func (o *ChannelSellLimitsByDate) GetSellLimitsOk() (*ChannelSellLimitsByDateType, bool)`

GetSellLimitsOk returns a tuple with the SellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimits

`func (o *ChannelSellLimitsByDate) SetSellLimits(v ChannelSellLimitsByDateType)`

SetSellLimits sets SellLimits field to given value.

### HasSellLimits

`func (o *ChannelSellLimitsByDate) HasSellLimits() bool`

HasSellLimits returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelSellLimitsByDate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelSellLimitsByDate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelSellLimitsByDate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelSellLimitsByDate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


