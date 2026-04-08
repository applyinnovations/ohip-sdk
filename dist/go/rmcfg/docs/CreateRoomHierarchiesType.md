# CreateRoomHierarchiesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomHierarchy** | Pointer to [**[]RoomHierarchyType**](RoomHierarchyType.md) |  | [optional] 
**OverwriteExisting** | Pointer to **bool** | Setting this flag to true will overwrite all existing hierarchies. | [optional] 

## Methods

### NewCreateRoomHierarchiesType

`func NewCreateRoomHierarchiesType() *CreateRoomHierarchiesType`

NewCreateRoomHierarchiesType instantiates a new CreateRoomHierarchiesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRoomHierarchiesTypeWithDefaults

`func NewCreateRoomHierarchiesTypeWithDefaults() *CreateRoomHierarchiesType`

NewCreateRoomHierarchiesTypeWithDefaults instantiates a new CreateRoomHierarchiesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomHierarchy

`func (o *CreateRoomHierarchiesType) GetRoomHierarchy() []RoomHierarchyType`

GetRoomHierarchy returns the RoomHierarchy field if non-nil, zero value otherwise.

### GetRoomHierarchyOk

`func (o *CreateRoomHierarchiesType) GetRoomHierarchyOk() (*[]RoomHierarchyType, bool)`

GetRoomHierarchyOk returns a tuple with the RoomHierarchy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomHierarchy

`func (o *CreateRoomHierarchiesType) SetRoomHierarchy(v []RoomHierarchyType)`

SetRoomHierarchy sets RoomHierarchy field to given value.

### HasRoomHierarchy

`func (o *CreateRoomHierarchiesType) HasRoomHierarchy() bool`

HasRoomHierarchy returns a boolean if a field has been set.

### GetOverwriteExisting

`func (o *CreateRoomHierarchiesType) GetOverwriteExisting() bool`

GetOverwriteExisting returns the OverwriteExisting field if non-nil, zero value otherwise.

### GetOverwriteExistingOk

`func (o *CreateRoomHierarchiesType) GetOverwriteExistingOk() (*bool, bool)`

GetOverwriteExistingOk returns a tuple with the OverwriteExisting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExisting

`func (o *CreateRoomHierarchiesType) SetOverwriteExisting(v bool)`

SetOverwriteExisting sets OverwriteExisting field to given value.

### HasOverwriteExisting

`func (o *CreateRoomHierarchiesType) HasOverwriteExisting() bool`

HasOverwriteExisting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


