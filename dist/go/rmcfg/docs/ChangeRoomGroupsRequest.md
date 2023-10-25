# ChangeRoomGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomGroups** | Pointer to [**[]RoomGroupType**](RoomGroupType.md) | List of Room Pools. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeRoomGroupsRequest

`func NewChangeRoomGroupsRequest() *ChangeRoomGroupsRequest`

NewChangeRoomGroupsRequest instantiates a new ChangeRoomGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRoomGroupsRequestWithDefaults

`func NewChangeRoomGroupsRequestWithDefaults() *ChangeRoomGroupsRequest`

NewChangeRoomGroupsRequestWithDefaults instantiates a new ChangeRoomGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeRoomGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeRoomGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeRoomGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeRoomGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomGroups

`func (o *ChangeRoomGroupsRequest) GetRoomGroups() []RoomGroupType`

GetRoomGroups returns the RoomGroups field if non-nil, zero value otherwise.

### GetRoomGroupsOk

`func (o *ChangeRoomGroupsRequest) GetRoomGroupsOk() (*[]RoomGroupType, bool)`

GetRoomGroupsOk returns a tuple with the RoomGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGroups

`func (o *ChangeRoomGroupsRequest) SetRoomGroups(v []RoomGroupType)`

SetRoomGroups sets RoomGroups field to given value.

### HasRoomGroups

`func (o *ChangeRoomGroupsRequest) HasRoomGroups() bool`

HasRoomGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRoomGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRoomGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRoomGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRoomGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


