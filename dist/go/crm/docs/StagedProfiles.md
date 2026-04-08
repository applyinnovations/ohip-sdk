# StagedProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StagedProfiles** | Pointer to [**StagedProfileSummariesType**](StagedProfileSummariesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStagedProfiles

`func NewStagedProfiles() *StagedProfiles`

NewStagedProfiles instantiates a new StagedProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfilesWithDefaults

`func NewStagedProfilesWithDefaults() *StagedProfiles`

NewStagedProfilesWithDefaults instantiates a new StagedProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStagedProfiles

`func (o *StagedProfiles) GetStagedProfiles() StagedProfileSummariesType`

GetStagedProfiles returns the StagedProfiles field if non-nil, zero value otherwise.

### GetStagedProfilesOk

`func (o *StagedProfiles) GetStagedProfilesOk() (*StagedProfileSummariesType, bool)`

GetStagedProfilesOk returns a tuple with the StagedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedProfiles

`func (o *StagedProfiles) SetStagedProfiles(v StagedProfileSummariesType)`

SetStagedProfiles sets StagedProfiles field to given value.

### HasStagedProfiles

`func (o *StagedProfiles) HasStagedProfiles() bool`

HasStagedProfiles returns a boolean if a field has been set.

### GetLinks

`func (o *StagedProfiles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StagedProfiles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StagedProfiles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StagedProfiles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StagedProfiles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StagedProfiles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StagedProfiles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StagedProfiles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


