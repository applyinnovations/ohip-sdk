# Statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarDate** | Pointer to **string** | Statistical date of the requested report. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MetricSet** | Pointer to [**[]StatisticsMetricSetInner**](StatisticsMetricSetInner.md) | Base statistic set holder which defines the span of the statistical data. | [optional] 
**StatisticsCode** | Pointer to [**HSKStatReportCodeType**](HSKStatReportCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewStatistics

`func NewStatistics() *Statistics`

NewStatistics instantiates a new Statistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticsWithDefaults

`func NewStatisticsWithDefaults() *Statistics`

NewStatisticsWithDefaults instantiates a new Statistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarDate

`func (o *Statistics) GetCalendarDate() string`

GetCalendarDate returns the CalendarDate field if non-nil, zero value otherwise.

### GetCalendarDateOk

`func (o *Statistics) GetCalendarDateOk() (*string, bool)`

GetCalendarDateOk returns a tuple with the CalendarDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarDate

`func (o *Statistics) SetCalendarDate(v string)`

SetCalendarDate sets CalendarDate field to given value.

### HasCalendarDate

`func (o *Statistics) HasCalendarDate() bool`

HasCalendarDate returns a boolean if a field has been set.

### GetLinks

`func (o *Statistics) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Statistics) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Statistics) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Statistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMetricSet

`func (o *Statistics) GetMetricSet() []StatisticsMetricSetInner`

GetMetricSet returns the MetricSet field if non-nil, zero value otherwise.

### GetMetricSetOk

`func (o *Statistics) GetMetricSetOk() (*[]StatisticsMetricSetInner, bool)`

GetMetricSetOk returns a tuple with the MetricSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricSet

`func (o *Statistics) SetMetricSet(v []StatisticsMetricSetInner)`

SetMetricSet sets MetricSet field to given value.

### HasMetricSet

`func (o *Statistics) HasMetricSet() bool`

HasMetricSet returns a boolean if a field has been set.

### GetStatisticsCode

`func (o *Statistics) GetStatisticsCode() HSKStatReportCodeType`

GetStatisticsCode returns the StatisticsCode field if non-nil, zero value otherwise.

### GetStatisticsCodeOk

`func (o *Statistics) GetStatisticsCodeOk() (*HSKStatReportCodeType, bool)`

GetStatisticsCodeOk returns a tuple with the StatisticsCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticsCode

`func (o *Statistics) SetStatisticsCode(v HSKStatReportCodeType)`

SetStatisticsCode sets StatisticsCode field to given value.

### HasStatisticsCode

`func (o *Statistics) HasStatisticsCode() bool`

HasStatisticsCode returns a boolean if a field has been set.

### GetWarnings

`func (o *Statistics) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Statistics) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Statistics) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Statistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


