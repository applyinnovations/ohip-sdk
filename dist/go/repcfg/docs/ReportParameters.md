# ReportParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportParameters** | Pointer to [**[]ReportParameterType**](ReportParameterType.md) | List of parameters required to run report. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReportParameters

`func NewReportParameters() *ReportParameters`

NewReportParameters instantiates a new ReportParameters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportParametersWithDefaults

`func NewReportParametersWithDefaults() *ReportParameters`

NewReportParametersWithDefaults instantiates a new ReportParameters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportParameters

`func (o *ReportParameters) GetReportParameters() []ReportParameterType`

GetReportParameters returns the ReportParameters field if non-nil, zero value otherwise.

### GetReportParametersOk

`func (o *ReportParameters) GetReportParametersOk() (*[]ReportParameterType, bool)`

GetReportParametersOk returns a tuple with the ReportParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportParameters

`func (o *ReportParameters) SetReportParameters(v []ReportParameterType)`

SetReportParameters sets ReportParameters field to given value.

### HasReportParameters

`func (o *ReportParameters) HasReportParameters() bool`

HasReportParameters returns a boolean if a field has been set.

### GetLinks

`func (o *ReportParameters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReportParameters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReportParameters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReportParameters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReportParameters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReportParameters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReportParameters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReportParameters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


