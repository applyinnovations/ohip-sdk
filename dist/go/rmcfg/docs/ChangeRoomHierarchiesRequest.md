# ChangeRoomHierarchiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomHierarchies** | Pointer to [**[]RoomHierarchyType**](RoomHierarchyType.md) | Holds collection of room hierarchies | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeRoomHierarchiesRequest

`func NewChangeRoomHierarchiesRequest() *ChangeRoomHierarchiesRequest`

NewChangeRoomHierarchiesRequest instantiates a new ChangeRoomHierarchiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRoomHierarchiesRequestWithDefaults

`func NewChangeRoomHierarchiesRequestWithDefaults() *ChangeRoomHierarchiesRequest`

NewChangeRoomHierarchiesRequestWithDefaults instantiates a new ChangeRoomHierarchiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeRoomHierarchiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeRoomHierarchiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeRoomHierarchiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeRoomHierarchiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomHierarchies

`func (o *ChangeRoomHierarchiesRequest) GetRoomHierarchies() []RoomHierarchyType`

GetRoomHierarchies returns the RoomHierarchies field if non-nil, zero value otherwise.

### GetRoomHierarchiesOk

`func (o *ChangeRoomHierarchiesRequest) GetRoomHierarchiesOk() (*[]RoomHierarchyType, bool)`

GetRoomHierarchiesOk returns a tuple with the RoomHierarchies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomHierarchies

`func (o *ChangeRoomHierarchiesRequest) SetRoomHierarchies(v []RoomHierarchyType)`

SetRoomHierarchies sets RoomHierarchies field to given value.

### HasRoomHierarchies

`func (o *ChangeRoomHierarchiesRequest) HasRoomHierarchies() bool`

HasRoomHierarchies returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRoomHierarchiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRoomHierarchiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRoomHierarchiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRoomHierarchiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


