# PreferenceGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceGroups** | Pointer to [**[]PreferenceGroupType**](PreferenceGroupType.md) | Collection of preference groups. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreferenceGroups

`func NewPreferenceGroups() *PreferenceGroups`

NewPreferenceGroups instantiates a new PreferenceGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferenceGroupsWithDefaults

`func NewPreferenceGroupsWithDefaults() *PreferenceGroups`

NewPreferenceGroupsWithDefaults instantiates a new PreferenceGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceGroups

`func (o *PreferenceGroups) GetPreferenceGroups() []PreferenceGroupType`

GetPreferenceGroups returns the PreferenceGroups field if non-nil, zero value otherwise.

### GetPreferenceGroupsOk

`func (o *PreferenceGroups) GetPreferenceGroupsOk() (*[]PreferenceGroupType, bool)`

GetPreferenceGroupsOk returns a tuple with the PreferenceGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceGroups

`func (o *PreferenceGroups) SetPreferenceGroups(v []PreferenceGroupType)`

SetPreferenceGroups sets PreferenceGroups field to given value.

### HasPreferenceGroups

`func (o *PreferenceGroups) HasPreferenceGroups() bool`

HasPreferenceGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PreferenceGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreferenceGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreferenceGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreferenceGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PreferenceGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreferenceGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreferenceGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreferenceGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


