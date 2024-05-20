# HousekeepingSectionGroupsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingSectionGroups** | Pointer to [**[]HousekeepingSectionGroupType**](HousekeepingSectionGroupType.md) | List of the housekeeping section groups to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingSectionGroupsCriteria

`func NewHousekeepingSectionGroupsCriteria() *HousekeepingSectionGroupsCriteria`

NewHousekeepingSectionGroupsCriteria instantiates a new HousekeepingSectionGroupsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingSectionGroupsCriteriaWithDefaults

`func NewHousekeepingSectionGroupsCriteriaWithDefaults() *HousekeepingSectionGroupsCriteria`

NewHousekeepingSectionGroupsCriteriaWithDefaults instantiates a new HousekeepingSectionGroupsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsCriteria) GetHousekeepingSectionGroups() []HousekeepingSectionGroupType`

GetHousekeepingSectionGroups returns the HousekeepingSectionGroups field if non-nil, zero value otherwise.

### GetHousekeepingSectionGroupsOk

`func (o *HousekeepingSectionGroupsCriteria) GetHousekeepingSectionGroupsOk() (*[]HousekeepingSectionGroupType, bool)`

GetHousekeepingSectionGroupsOk returns a tuple with the HousekeepingSectionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsCriteria) SetHousekeepingSectionGroups(v []HousekeepingSectionGroupType)`

SetHousekeepingSectionGroups sets HousekeepingSectionGroups field to given value.

### HasHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsCriteria) HasHousekeepingSectionGroups() bool`

HasHousekeepingSectionGroups returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingSectionGroupsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingSectionGroupsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingSectionGroupsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingSectionGroupsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingSectionGroupsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingSectionGroupsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingSectionGroupsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingSectionGroupsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


