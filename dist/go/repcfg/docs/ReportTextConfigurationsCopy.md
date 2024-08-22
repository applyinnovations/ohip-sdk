# ReportTextConfigurationsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyReports** | Pointer to [**CopyReportsType**](CopyReportsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReportTextConfigurationsCopy

`func NewReportTextConfigurationsCopy() *ReportTextConfigurationsCopy`

NewReportTextConfigurationsCopy instantiates a new ReportTextConfigurationsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportTextConfigurationsCopyWithDefaults

`func NewReportTextConfigurationsCopyWithDefaults() *ReportTextConfigurationsCopy`

NewReportTextConfigurationsCopyWithDefaults instantiates a new ReportTextConfigurationsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyReports

`func (o *ReportTextConfigurationsCopy) GetCopyReports() CopyReportsType`

GetCopyReports returns the CopyReports field if non-nil, zero value otherwise.

### GetCopyReportsOk

`func (o *ReportTextConfigurationsCopy) GetCopyReportsOk() (*CopyReportsType, bool)`

GetCopyReportsOk returns a tuple with the CopyReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyReports

`func (o *ReportTextConfigurationsCopy) SetCopyReports(v CopyReportsType)`

SetCopyReports sets CopyReports field to given value.

### HasCopyReports

`func (o *ReportTextConfigurationsCopy) HasCopyReports() bool`

HasCopyReports returns a boolean if a field has been set.

### GetLinks

`func (o *ReportTextConfigurationsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReportTextConfigurationsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReportTextConfigurationsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReportTextConfigurationsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReportTextConfigurationsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReportTextConfigurationsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReportTextConfigurationsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReportTextConfigurationsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


