# BlockStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reports** | Pointer to [**[]BlockStatReportType**](BlockStatReportType.md) | Statistical report - each report is determined by the requested report in the service request criteria. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockStats

`func NewBlockStats() *BlockStats`

NewBlockStats instantiates a new BlockStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatsWithDefaults

`func NewBlockStatsWithDefaults() *BlockStats`

NewBlockStatsWithDefaults instantiates a new BlockStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BlockStats) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockStats) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockStats) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockStats) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReports

`func (o *BlockStats) GetReports() []BlockStatReportType`

GetReports returns the Reports field if non-nil, zero value otherwise.

### GetReportsOk

`func (o *BlockStats) GetReportsOk() (*[]BlockStatReportType, bool)`

GetReportsOk returns a tuple with the Reports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReports

`func (o *BlockStats) SetReports(v []BlockStatReportType)`

SetReports sets Reports field to given value.

### HasReports

`func (o *BlockStats) HasReports() bool`

HasReports returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockStats) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockStats) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockStats) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockStats) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


