# ChangeBuildingGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildingGroups** | Pointer to [**[]BuildingGroupType**](BuildingGroupType.md) | Collection of Building Group details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeBuildingGroupsRequest

`func NewChangeBuildingGroupsRequest() *ChangeBuildingGroupsRequest`

NewChangeBuildingGroupsRequest instantiates a new ChangeBuildingGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBuildingGroupsRequestWithDefaults

`func NewChangeBuildingGroupsRequestWithDefaults() *ChangeBuildingGroupsRequest`

NewChangeBuildingGroupsRequestWithDefaults instantiates a new ChangeBuildingGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildingGroups

`func (o *ChangeBuildingGroupsRequest) GetBuildingGroups() []BuildingGroupType`

GetBuildingGroups returns the BuildingGroups field if non-nil, zero value otherwise.

### GetBuildingGroupsOk

`func (o *ChangeBuildingGroupsRequest) GetBuildingGroupsOk() (*[]BuildingGroupType, bool)`

GetBuildingGroupsOk returns a tuple with the BuildingGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildingGroups

`func (o *ChangeBuildingGroupsRequest) SetBuildingGroups(v []BuildingGroupType)`

SetBuildingGroups sets BuildingGroups field to given value.

### HasBuildingGroups

`func (o *ChangeBuildingGroupsRequest) HasBuildingGroups() bool`

HasBuildingGroups returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeBuildingGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeBuildingGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeBuildingGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeBuildingGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeBuildingGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeBuildingGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeBuildingGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeBuildingGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


