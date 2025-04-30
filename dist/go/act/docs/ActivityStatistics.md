# ActivityStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reports** | Pointer to [**[]ActivityStatReportType**](ActivityStatReportType.md) | Statistical report - each report is determined by the requested report in the service request criteria. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivityStatistics

`func NewActivityStatistics() *ActivityStatistics`

NewActivityStatistics instantiates a new ActivityStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityStatisticsWithDefaults

`func NewActivityStatisticsWithDefaults() *ActivityStatistics`

NewActivityStatisticsWithDefaults instantiates a new ActivityStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReports

`func (o *ActivityStatistics) GetReports() []ActivityStatReportType`

GetReports returns the Reports field if non-nil, zero value otherwise.

### GetReportsOk

`func (o *ActivityStatistics) GetReportsOk() (*[]ActivityStatReportType, bool)`

GetReportsOk returns a tuple with the Reports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReports

`func (o *ActivityStatistics) SetReports(v []ActivityStatReportType)`

SetReports sets Reports field to given value.

### HasReports

`func (o *ActivityStatistics) HasReports() bool`

HasReports returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


