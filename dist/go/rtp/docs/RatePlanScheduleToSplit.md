# RatePlanScheduleToSplit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanSchedule** | Pointer to [**RatePlanScheduleToSplitRatePlanSchedule**](RatePlanScheduleToSplitRatePlanSchedule.md) |  | [optional] 
**SplitDetails** | Pointer to [**BaseRatePlanScheduleDetailType**](BaseRatePlanScheduleDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlanScheduleToSplit

`func NewRatePlanScheduleToSplit() *RatePlanScheduleToSplit`

NewRatePlanScheduleToSplit instantiates a new RatePlanScheduleToSplit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanScheduleToSplitWithDefaults

`func NewRatePlanScheduleToSplitWithDefaults() *RatePlanScheduleToSplit`

NewRatePlanScheduleToSplitWithDefaults instantiates a new RatePlanScheduleToSplit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanSchedule

`func (o *RatePlanScheduleToSplit) GetRatePlanSchedule() RatePlanScheduleToSplitRatePlanSchedule`

GetRatePlanSchedule returns the RatePlanSchedule field if non-nil, zero value otherwise.

### GetRatePlanScheduleOk

`func (o *RatePlanScheduleToSplit) GetRatePlanScheduleOk() (*RatePlanScheduleToSplitRatePlanSchedule, bool)`

GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSchedule

`func (o *RatePlanScheduleToSplit) SetRatePlanSchedule(v RatePlanScheduleToSplitRatePlanSchedule)`

SetRatePlanSchedule sets RatePlanSchedule field to given value.

### HasRatePlanSchedule

`func (o *RatePlanScheduleToSplit) HasRatePlanSchedule() bool`

HasRatePlanSchedule returns a boolean if a field has been set.

### GetSplitDetails

`func (o *RatePlanScheduleToSplit) GetSplitDetails() BaseRatePlanScheduleDetailType`

GetSplitDetails returns the SplitDetails field if non-nil, zero value otherwise.

### GetSplitDetailsOk

`func (o *RatePlanScheduleToSplit) GetSplitDetailsOk() (*BaseRatePlanScheduleDetailType, bool)`

GetSplitDetailsOk returns a tuple with the SplitDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitDetails

`func (o *RatePlanScheduleToSplit) SetSplitDetails(v BaseRatePlanScheduleDetailType)`

SetSplitDetails sets SplitDetails field to given value.

### HasSplitDetails

`func (o *RatePlanScheduleToSplit) HasSplitDetails() bool`

HasSplitDetails returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlanScheduleToSplit) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanScheduleToSplit) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanScheduleToSplit) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanScheduleToSplit) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanScheduleToSplit) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanScheduleToSplit) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanScheduleToSplit) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanScheduleToSplit) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


