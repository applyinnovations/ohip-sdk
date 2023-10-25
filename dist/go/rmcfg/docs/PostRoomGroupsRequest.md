# PostRoomGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomGroups** | Pointer to [**[]RoomGroupType**](RoomGroupType.md) | List of Room Pools. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomGroupsRequest

`func NewPostRoomGroupsRequest() *PostRoomGroupsRequest`

NewPostRoomGroupsRequest instantiates a new PostRoomGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomGroupsRequestWithDefaults

`func NewPostRoomGroupsRequestWithDefaults() *PostRoomGroupsRequest`

NewPostRoomGroupsRequestWithDefaults instantiates a new PostRoomGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRoomGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomGroups

`func (o *PostRoomGroupsRequest) GetRoomGroups() []RoomGroupType`

GetRoomGroups returns the RoomGroups field if non-nil, zero value otherwise.

### GetRoomGroupsOk

`func (o *PostRoomGroupsRequest) GetRoomGroupsOk() (*[]RoomGroupType, bool)`

GetRoomGroupsOk returns a tuple with the RoomGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGroups

`func (o *PostRoomGroupsRequest) SetRoomGroups(v []RoomGroupType)`

SetRoomGroups sets RoomGroups field to given value.

### HasRoomGroups

`func (o *PostRoomGroupsRequest) HasRoomGroups() bool`

HasRoomGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


