# SetDailyRatePlanScheduleRangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyRateScheduleRange** | Pointer to [**DailyRatePlanScheduleRangeDailyRateScheduleRange**](DailyRatePlanScheduleRangeDailyRateScheduleRange.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetDailyRatePlanScheduleRangeRequest

`func NewSetDailyRatePlanScheduleRangeRequest() *SetDailyRatePlanScheduleRangeRequest`

NewSetDailyRatePlanScheduleRangeRequest instantiates a new SetDailyRatePlanScheduleRangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetDailyRatePlanScheduleRangeRequestWithDefaults

`func NewSetDailyRatePlanScheduleRangeRequestWithDefaults() *SetDailyRatePlanScheduleRangeRequest`

NewSetDailyRatePlanScheduleRangeRequestWithDefaults instantiates a new SetDailyRatePlanScheduleRangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyRateScheduleRange

`func (o *SetDailyRatePlanScheduleRangeRequest) GetDailyRateScheduleRange() DailyRatePlanScheduleRangeDailyRateScheduleRange`

GetDailyRateScheduleRange returns the DailyRateScheduleRange field if non-nil, zero value otherwise.

### GetDailyRateScheduleRangeOk

`func (o *SetDailyRatePlanScheduleRangeRequest) GetDailyRateScheduleRangeOk() (*DailyRatePlanScheduleRangeDailyRateScheduleRange, bool)`

GetDailyRateScheduleRangeOk returns a tuple with the DailyRateScheduleRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyRateScheduleRange

`func (o *SetDailyRatePlanScheduleRangeRequest) SetDailyRateScheduleRange(v DailyRatePlanScheduleRangeDailyRateScheduleRange)`

SetDailyRateScheduleRange sets DailyRateScheduleRange field to given value.

### HasDailyRateScheduleRange

`func (o *SetDailyRatePlanScheduleRangeRequest) HasDailyRateScheduleRange() bool`

HasDailyRateScheduleRange returns a boolean if a field has been set.

### GetLinks

`func (o *SetDailyRatePlanScheduleRangeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetDailyRatePlanScheduleRangeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetDailyRatePlanScheduleRangeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetDailyRatePlanScheduleRangeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetDailyRatePlanScheduleRangeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetDailyRatePlanScheduleRangeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetDailyRatePlanScheduleRangeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetDailyRatePlanScheduleRangeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


