# ChangeChannelSellLimitsByDateRangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustOverlappingSchedules** | Pointer to **bool** | Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed. | [optional] 
**SellLimits** | Pointer to [**ChannelSellLimitSchedulesType**](ChannelSellLimitSchedulesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeChannelSellLimitsByDateRangeRequest

`func NewChangeChannelSellLimitsByDateRangeRequest() *ChangeChannelSellLimitsByDateRangeRequest`

NewChangeChannelSellLimitsByDateRangeRequest instantiates a new ChangeChannelSellLimitsByDateRangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeChannelSellLimitsByDateRangeRequestWithDefaults

`func NewChangeChannelSellLimitsByDateRangeRequestWithDefaults() *ChangeChannelSellLimitsByDateRangeRequest`

NewChangeChannelSellLimitsByDateRangeRequestWithDefaults instantiates a new ChangeChannelSellLimitsByDateRangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustOverlappingSchedules

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetAdjustOverlappingSchedules() bool`

GetAdjustOverlappingSchedules returns the AdjustOverlappingSchedules field if non-nil, zero value otherwise.

### GetAdjustOverlappingSchedulesOk

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetAdjustOverlappingSchedulesOk() (*bool, bool)`

GetAdjustOverlappingSchedulesOk returns a tuple with the AdjustOverlappingSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustOverlappingSchedules

`func (o *ChangeChannelSellLimitsByDateRangeRequest) SetAdjustOverlappingSchedules(v bool)`

SetAdjustOverlappingSchedules sets AdjustOverlappingSchedules field to given value.

### HasAdjustOverlappingSchedules

`func (o *ChangeChannelSellLimitsByDateRangeRequest) HasAdjustOverlappingSchedules() bool`

HasAdjustOverlappingSchedules returns a boolean if a field has been set.

### GetSellLimits

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetSellLimits() ChannelSellLimitSchedulesType`

GetSellLimits returns the SellLimits field if non-nil, zero value otherwise.

### GetSellLimitsOk

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetSellLimitsOk() (*ChannelSellLimitSchedulesType, bool)`

GetSellLimitsOk returns a tuple with the SellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimits

`func (o *ChangeChannelSellLimitsByDateRangeRequest) SetSellLimits(v ChannelSellLimitSchedulesType)`

SetSellLimits sets SellLimits field to given value.

### HasSellLimits

`func (o *ChangeChannelSellLimitsByDateRangeRequest) HasSellLimits() bool`

HasSellLimits returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeChannelSellLimitsByDateRangeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeChannelSellLimitsByDateRangeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeChannelSellLimitsByDateRangeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


