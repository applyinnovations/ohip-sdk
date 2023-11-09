# PostRoomGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomGroups** | Pointer to [**RoomGroupsType**](RoomGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

`func (o *PostRoomGroupsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomGroupsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomGroupsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomGroups

`func (o *PostRoomGroupsRequest) GetRoomGroups() RoomGroupsType`

GetRoomGroups returns the RoomGroups field if non-nil, zero value otherwise.

### GetRoomGroupsOk

`func (o *PostRoomGroupsRequest) GetRoomGroupsOk() (*RoomGroupsType, bool)`

GetRoomGroupsOk returns a tuple with the RoomGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGroups

`func (o *PostRoomGroupsRequest) SetRoomGroups(v RoomGroupsType)`

SetRoomGroups sets RoomGroups field to given value.

### HasRoomGroups

`func (o *PostRoomGroupsRequest) HasRoomGroups() bool`

HasRoomGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomGroupsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomGroupsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomGroupsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


