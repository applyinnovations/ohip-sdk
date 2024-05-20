# DailyRatePlanScheduleRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyRateScheduleRange** | Pointer to [**DailyRatePlanScheduleRangeDailyRateScheduleRange**](DailyRatePlanScheduleRangeDailyRateScheduleRange.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDailyRatePlanScheduleRange

`func NewDailyRatePlanScheduleRange() *DailyRatePlanScheduleRange`

NewDailyRatePlanScheduleRange instantiates a new DailyRatePlanScheduleRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyRatePlanScheduleRangeWithDefaults

`func NewDailyRatePlanScheduleRangeWithDefaults() *DailyRatePlanScheduleRange`

NewDailyRatePlanScheduleRangeWithDefaults instantiates a new DailyRatePlanScheduleRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyRateScheduleRange

`func (o *DailyRatePlanScheduleRange) GetDailyRateScheduleRange() DailyRatePlanScheduleRangeDailyRateScheduleRange`

GetDailyRateScheduleRange returns the DailyRateScheduleRange field if non-nil, zero value otherwise.

### GetDailyRateScheduleRangeOk

`func (o *DailyRatePlanScheduleRange) GetDailyRateScheduleRangeOk() (*DailyRatePlanScheduleRangeDailyRateScheduleRange, bool)`

GetDailyRateScheduleRangeOk returns a tuple with the DailyRateScheduleRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyRateScheduleRange

`func (o *DailyRatePlanScheduleRange) SetDailyRateScheduleRange(v DailyRatePlanScheduleRangeDailyRateScheduleRange)`

SetDailyRateScheduleRange sets DailyRateScheduleRange field to given value.

### HasDailyRateScheduleRange

`func (o *DailyRatePlanScheduleRange) HasDailyRateScheduleRange() bool`

HasDailyRateScheduleRange returns a boolean if a field has been set.

### GetLinks

`func (o *DailyRatePlanScheduleRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DailyRatePlanScheduleRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DailyRatePlanScheduleRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DailyRatePlanScheduleRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DailyRatePlanScheduleRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DailyRatePlanScheduleRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DailyRatePlanScheduleRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DailyRatePlanScheduleRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


