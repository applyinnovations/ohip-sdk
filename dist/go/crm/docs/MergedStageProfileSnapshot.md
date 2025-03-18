# MergedStageProfileSnapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MergeStageProfile** | Pointer to [**StagedProfileType**](StagedProfileType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMergedStageProfileSnapshot

`func NewMergedStageProfileSnapshot() *MergedStageProfileSnapshot`

NewMergedStageProfileSnapshot instantiates a new MergedStageProfileSnapshot object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergedStageProfileSnapshotWithDefaults

`func NewMergedStageProfileSnapshotWithDefaults() *MergedStageProfileSnapshot`

NewMergedStageProfileSnapshotWithDefaults instantiates a new MergedStageProfileSnapshot object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMergeStageProfile

`func (o *MergedStageProfileSnapshot) GetMergeStageProfile() StagedProfileType`

GetMergeStageProfile returns the MergeStageProfile field if non-nil, zero value otherwise.

### GetMergeStageProfileOk

`func (o *MergedStageProfileSnapshot) GetMergeStageProfileOk() (*StagedProfileType, bool)`

GetMergeStageProfileOk returns a tuple with the MergeStageProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeStageProfile

`func (o *MergedStageProfileSnapshot) SetMergeStageProfile(v StagedProfileType)`

SetMergeStageProfile sets MergeStageProfile field to given value.

### HasMergeStageProfile

`func (o *MergedStageProfileSnapshot) HasMergeStageProfile() bool`

HasMergeStageProfile returns a boolean if a field has been set.

### GetLinks

`func (o *MergedStageProfileSnapshot) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MergedStageProfileSnapshot) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MergedStageProfileSnapshot) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MergedStageProfileSnapshot) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MergedStageProfileSnapshot) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MergedStageProfileSnapshot) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MergedStageProfileSnapshot) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MergedStageProfileSnapshot) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


