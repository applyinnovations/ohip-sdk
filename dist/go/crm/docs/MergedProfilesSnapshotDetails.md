# MergedProfilesSnapshotDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MergedProfileSnapshot** | Pointer to [**MergedProfileType**](MergedProfileType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMergedProfilesSnapshotDetails

`func NewMergedProfilesSnapshotDetails() *MergedProfilesSnapshotDetails`

NewMergedProfilesSnapshotDetails instantiates a new MergedProfilesSnapshotDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergedProfilesSnapshotDetailsWithDefaults

`func NewMergedProfilesSnapshotDetailsWithDefaults() *MergedProfilesSnapshotDetails`

NewMergedProfilesSnapshotDetailsWithDefaults instantiates a new MergedProfilesSnapshotDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMergedProfileSnapshot

`func (o *MergedProfilesSnapshotDetails) GetMergedProfileSnapshot() MergedProfileType`

GetMergedProfileSnapshot returns the MergedProfileSnapshot field if non-nil, zero value otherwise.

### GetMergedProfileSnapshotOk

`func (o *MergedProfilesSnapshotDetails) GetMergedProfileSnapshotOk() (*MergedProfileType, bool)`

GetMergedProfileSnapshotOk returns a tuple with the MergedProfileSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergedProfileSnapshot

`func (o *MergedProfilesSnapshotDetails) SetMergedProfileSnapshot(v MergedProfileType)`

SetMergedProfileSnapshot sets MergedProfileSnapshot field to given value.

### HasMergedProfileSnapshot

`func (o *MergedProfilesSnapshotDetails) HasMergedProfileSnapshot() bool`

HasMergedProfileSnapshot returns a boolean if a field has been set.

### GetLinks

`func (o *MergedProfilesSnapshotDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MergedProfilesSnapshotDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MergedProfilesSnapshotDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MergedProfilesSnapshotDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MergedProfilesSnapshotDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MergedProfilesSnapshotDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MergedProfilesSnapshotDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MergedProfilesSnapshotDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


