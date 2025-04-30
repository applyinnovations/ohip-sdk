# HousekeepingSectionGroupsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingSectionGroups** | Pointer to [**[]HousekeepingSectionGroupType**](HousekeepingSectionGroupType.md) | List of the housekeeping section groups to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingSectionGroupsDetails

`func NewHousekeepingSectionGroupsDetails() *HousekeepingSectionGroupsDetails`

NewHousekeepingSectionGroupsDetails instantiates a new HousekeepingSectionGroupsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingSectionGroupsDetailsWithDefaults

`func NewHousekeepingSectionGroupsDetailsWithDefaults() *HousekeepingSectionGroupsDetails`

NewHousekeepingSectionGroupsDetailsWithDefaults instantiates a new HousekeepingSectionGroupsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsDetails) GetHousekeepingSectionGroups() []HousekeepingSectionGroupType`

GetHousekeepingSectionGroups returns the HousekeepingSectionGroups field if non-nil, zero value otherwise.

### GetHousekeepingSectionGroupsOk

`func (o *HousekeepingSectionGroupsDetails) GetHousekeepingSectionGroupsOk() (*[]HousekeepingSectionGroupType, bool)`

GetHousekeepingSectionGroupsOk returns a tuple with the HousekeepingSectionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsDetails) SetHousekeepingSectionGroups(v []HousekeepingSectionGroupType)`

SetHousekeepingSectionGroups sets HousekeepingSectionGroups field to given value.

### HasHousekeepingSectionGroups

`func (o *HousekeepingSectionGroupsDetails) HasHousekeepingSectionGroups() bool`

HasHousekeepingSectionGroups returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingSectionGroupsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingSectionGroupsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingSectionGroupsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingSectionGroupsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingSectionGroupsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingSectionGroupsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingSectionGroupsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingSectionGroupsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


