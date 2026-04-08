# RatePlanScheduleYieldAdjustments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**YieldSummary** | Pointer to [**[]YieldSummaryType**](YieldSummaryType.md) | Yield summary for each adjutment type. | [optional] 
**YieldInfoList** | Pointer to [**ScheduleYieldInfoType**](ScheduleYieldInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlanScheduleYieldAdjustments

`func NewRatePlanScheduleYieldAdjustments() *RatePlanScheduleYieldAdjustments`

NewRatePlanScheduleYieldAdjustments instantiates a new RatePlanScheduleYieldAdjustments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanScheduleYieldAdjustmentsWithDefaults

`func NewRatePlanScheduleYieldAdjustmentsWithDefaults() *RatePlanScheduleYieldAdjustments`

NewRatePlanScheduleYieldAdjustmentsWithDefaults instantiates a new RatePlanScheduleYieldAdjustments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetYieldSummary

`func (o *RatePlanScheduleYieldAdjustments) GetYieldSummary() []YieldSummaryType`

GetYieldSummary returns the YieldSummary field if non-nil, zero value otherwise.

### GetYieldSummaryOk

`func (o *RatePlanScheduleYieldAdjustments) GetYieldSummaryOk() (*[]YieldSummaryType, bool)`

GetYieldSummaryOk returns a tuple with the YieldSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldSummary

`func (o *RatePlanScheduleYieldAdjustments) SetYieldSummary(v []YieldSummaryType)`

SetYieldSummary sets YieldSummary field to given value.

### HasYieldSummary

`func (o *RatePlanScheduleYieldAdjustments) HasYieldSummary() bool`

HasYieldSummary returns a boolean if a field has been set.

### GetYieldInfoList

`func (o *RatePlanScheduleYieldAdjustments) GetYieldInfoList() ScheduleYieldInfoType`

GetYieldInfoList returns the YieldInfoList field if non-nil, zero value otherwise.

### GetYieldInfoListOk

`func (o *RatePlanScheduleYieldAdjustments) GetYieldInfoListOk() (*ScheduleYieldInfoType, bool)`

GetYieldInfoListOk returns a tuple with the YieldInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldInfoList

`func (o *RatePlanScheduleYieldAdjustments) SetYieldInfoList(v ScheduleYieldInfoType)`

SetYieldInfoList sets YieldInfoList field to given value.

### HasYieldInfoList

`func (o *RatePlanScheduleYieldAdjustments) HasYieldInfoList() bool`

HasYieldInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlanScheduleYieldAdjustments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanScheduleYieldAdjustments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanScheduleYieldAdjustments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanScheduleYieldAdjustments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanScheduleYieldAdjustments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanScheduleYieldAdjustments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanScheduleYieldAdjustments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanScheduleYieldAdjustments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


