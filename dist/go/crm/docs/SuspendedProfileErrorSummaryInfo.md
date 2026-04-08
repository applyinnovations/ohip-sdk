# SuspendedProfileErrorSummaryInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SuspendedProfileErrorSummary** | Pointer to [**[]SuspendedProfileErrorSummaryType**](SuspendedProfileErrorSummaryType.md) | Collection of profile error summary. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSuspendedProfileErrorSummaryInfo

`func NewSuspendedProfileErrorSummaryInfo() *SuspendedProfileErrorSummaryInfo`

NewSuspendedProfileErrorSummaryInfo instantiates a new SuspendedProfileErrorSummaryInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedProfileErrorSummaryInfoWithDefaults

`func NewSuspendedProfileErrorSummaryInfoWithDefaults() *SuspendedProfileErrorSummaryInfo`

NewSuspendedProfileErrorSummaryInfoWithDefaults instantiates a new SuspendedProfileErrorSummaryInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuspendedProfileErrorSummary

`func (o *SuspendedProfileErrorSummaryInfo) GetSuspendedProfileErrorSummary() []SuspendedProfileErrorSummaryType`

GetSuspendedProfileErrorSummary returns the SuspendedProfileErrorSummary field if non-nil, zero value otherwise.

### GetSuspendedProfileErrorSummaryOk

`func (o *SuspendedProfileErrorSummaryInfo) GetSuspendedProfileErrorSummaryOk() (*[]SuspendedProfileErrorSummaryType, bool)`

GetSuspendedProfileErrorSummaryOk returns a tuple with the SuspendedProfileErrorSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedProfileErrorSummary

`func (o *SuspendedProfileErrorSummaryInfo) SetSuspendedProfileErrorSummary(v []SuspendedProfileErrorSummaryType)`

SetSuspendedProfileErrorSummary sets SuspendedProfileErrorSummary field to given value.

### HasSuspendedProfileErrorSummary

`func (o *SuspendedProfileErrorSummaryInfo) HasSuspendedProfileErrorSummary() bool`

HasSuspendedProfileErrorSummary returns a boolean if a field has been set.

### GetLinks

`func (o *SuspendedProfileErrorSummaryInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SuspendedProfileErrorSummaryInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SuspendedProfileErrorSummaryInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SuspendedProfileErrorSummaryInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SuspendedProfileErrorSummaryInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SuspendedProfileErrorSummaryInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SuspendedProfileErrorSummaryInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SuspendedProfileErrorSummaryInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


