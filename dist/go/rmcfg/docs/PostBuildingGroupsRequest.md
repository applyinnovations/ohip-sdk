# PostBuildingGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildingGroups** | Pointer to [**[]BuildingGroupType**](BuildingGroupType.md) | Collection of Building Group details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBuildingGroupsRequest

`func NewPostBuildingGroupsRequest() *PostBuildingGroupsRequest`

NewPostBuildingGroupsRequest instantiates a new PostBuildingGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBuildingGroupsRequestWithDefaults

`func NewPostBuildingGroupsRequestWithDefaults() *PostBuildingGroupsRequest`

NewPostBuildingGroupsRequestWithDefaults instantiates a new PostBuildingGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildingGroups

`func (o *PostBuildingGroupsRequest) GetBuildingGroups() []BuildingGroupType`

GetBuildingGroups returns the BuildingGroups field if non-nil, zero value otherwise.

### GetBuildingGroupsOk

`func (o *PostBuildingGroupsRequest) GetBuildingGroupsOk() (*[]BuildingGroupType, bool)`

GetBuildingGroupsOk returns a tuple with the BuildingGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildingGroups

`func (o *PostBuildingGroupsRequest) SetBuildingGroups(v []BuildingGroupType)`

SetBuildingGroups sets BuildingGroups field to given value.

### HasBuildingGroups

`func (o *PostBuildingGroupsRequest) HasBuildingGroups() bool`

HasBuildingGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostBuildingGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBuildingGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBuildingGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBuildingGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBuildingGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBuildingGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBuildingGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBuildingGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


