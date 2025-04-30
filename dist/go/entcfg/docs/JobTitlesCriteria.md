# JobTitlesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTitles** | Pointer to [**[]JobTitleType**](JobTitleType.md) | Job Title details for a hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewJobTitlesCriteria

`func NewJobTitlesCriteria() *JobTitlesCriteria`

NewJobTitlesCriteria instantiates a new JobTitlesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJobTitlesCriteriaWithDefaults

`func NewJobTitlesCriteriaWithDefaults() *JobTitlesCriteria`

NewJobTitlesCriteriaWithDefaults instantiates a new JobTitlesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTitles

`func (o *JobTitlesCriteria) GetJobTitles() []JobTitleType`

GetJobTitles returns the JobTitles field if non-nil, zero value otherwise.

### GetJobTitlesOk

`func (o *JobTitlesCriteria) GetJobTitlesOk() (*[]JobTitleType, bool)`

GetJobTitlesOk returns a tuple with the JobTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTitles

`func (o *JobTitlesCriteria) SetJobTitles(v []JobTitleType)`

SetJobTitles sets JobTitles field to given value.

### HasJobTitles

`func (o *JobTitlesCriteria) HasJobTitles() bool`

HasJobTitles returns a boolean if a field has been set.

### GetLinks

`func (o *JobTitlesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *JobTitlesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *JobTitlesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *JobTitlesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *JobTitlesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *JobTitlesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *JobTitlesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *JobTitlesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


