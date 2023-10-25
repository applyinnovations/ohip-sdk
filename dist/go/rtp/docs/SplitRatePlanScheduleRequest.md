# SplitRatePlanScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RatePlanSchedule** | Pointer to [**RatePlanScheduleToSplitRatePlanSchedule**](RatePlanScheduleToSplitRatePlanSchedule.md) |  | [optional] 
**SplitDetails** | Pointer to [**BaseRatePlanScheduleDetailType**](BaseRatePlanScheduleDetailType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSplitRatePlanScheduleRequest

`func NewSplitRatePlanScheduleRequest() *SplitRatePlanScheduleRequest`

NewSplitRatePlanScheduleRequest instantiates a new SplitRatePlanScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitRatePlanScheduleRequestWithDefaults

`func NewSplitRatePlanScheduleRequestWithDefaults() *SplitRatePlanScheduleRequest`

NewSplitRatePlanScheduleRequestWithDefaults instantiates a new SplitRatePlanScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SplitRatePlanScheduleRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitRatePlanScheduleRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitRatePlanScheduleRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitRatePlanScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanSchedule

`func (o *SplitRatePlanScheduleRequest) GetRatePlanSchedule() RatePlanScheduleToSplitRatePlanSchedule`

GetRatePlanSchedule returns the RatePlanSchedule field if non-nil, zero value otherwise.

### GetRatePlanScheduleOk

`func (o *SplitRatePlanScheduleRequest) GetRatePlanScheduleOk() (*RatePlanScheduleToSplitRatePlanSchedule, bool)`

GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSchedule

`func (o *SplitRatePlanScheduleRequest) SetRatePlanSchedule(v RatePlanScheduleToSplitRatePlanSchedule)`

SetRatePlanSchedule sets RatePlanSchedule field to given value.

### HasRatePlanSchedule

`func (o *SplitRatePlanScheduleRequest) HasRatePlanSchedule() bool`

HasRatePlanSchedule returns a boolean if a field has been set.

### GetSplitDetails

`func (o *SplitRatePlanScheduleRequest) GetSplitDetails() BaseRatePlanScheduleDetailType`

GetSplitDetails returns the SplitDetails field if non-nil, zero value otherwise.

### GetSplitDetailsOk

`func (o *SplitRatePlanScheduleRequest) GetSplitDetailsOk() (*BaseRatePlanScheduleDetailType, bool)`

GetSplitDetailsOk returns a tuple with the SplitDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitDetails

`func (o *SplitRatePlanScheduleRequest) SetSplitDetails(v BaseRatePlanScheduleDetailType)`

SetSplitDetails sets SplitDetails field to given value.

### HasSplitDetails

`func (o *SplitRatePlanScheduleRequest) HasSplitDetails() bool`

HasSplitDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitRatePlanScheduleRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitRatePlanScheduleRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitRatePlanScheduleRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitRatePlanScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


