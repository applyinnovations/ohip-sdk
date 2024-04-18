# CopyHousekeepingSectionGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingSectionGroups** | Pointer to [**[]HousekeepingSectionGroupCopyType**](HousekeepingSectionGroupCopyType.md) | List of the housekeeping section groups to be copied | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyHousekeepingSectionGroups

`func NewCopyHousekeepingSectionGroups() *CopyHousekeepingSectionGroups`

NewCopyHousekeepingSectionGroups instantiates a new CopyHousekeepingSectionGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyHousekeepingSectionGroupsWithDefaults

`func NewCopyHousekeepingSectionGroupsWithDefaults() *CopyHousekeepingSectionGroups`

NewCopyHousekeepingSectionGroupsWithDefaults instantiates a new CopyHousekeepingSectionGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingSectionGroups

`func (o *CopyHousekeepingSectionGroups) GetHousekeepingSectionGroups() []HousekeepingSectionGroupCopyType`

GetHousekeepingSectionGroups returns the HousekeepingSectionGroups field if non-nil, zero value otherwise.

### GetHousekeepingSectionGroupsOk

`func (o *CopyHousekeepingSectionGroups) GetHousekeepingSectionGroupsOk() (*[]HousekeepingSectionGroupCopyType, bool)`

GetHousekeepingSectionGroupsOk returns a tuple with the HousekeepingSectionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSectionGroups

`func (o *CopyHousekeepingSectionGroups) SetHousekeepingSectionGroups(v []HousekeepingSectionGroupCopyType)`

SetHousekeepingSectionGroups sets HousekeepingSectionGroups field to given value.

### HasHousekeepingSectionGroups

`func (o *CopyHousekeepingSectionGroups) HasHousekeepingSectionGroups() bool`

HasHousekeepingSectionGroups returns a boolean if a field has been set.

### GetLinks

`func (o *CopyHousekeepingSectionGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyHousekeepingSectionGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyHousekeepingSectionGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyHousekeepingSectionGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyHousekeepingSectionGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyHousekeepingSectionGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyHousekeepingSectionGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyHousekeepingSectionGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

