# RoomTypeTaskType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**TasksQuantity** | Pointer to **int32** | This is a room type and its tasks count. | [optional] 

## Methods

### NewRoomTypeTaskType

`func NewRoomTypeTaskType() *RoomTypeTaskType`

NewRoomTypeTaskType instantiates a new RoomTypeTaskType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeTaskTypeWithDefaults

`func NewRoomTypeTaskTypeWithDefaults() *RoomTypeTaskType`

NewRoomTypeTaskTypeWithDefaults instantiates a new RoomTypeTaskType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *RoomTypeTaskType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeTaskType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeTaskType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeTaskType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetTasksQuantity

`func (o *RoomTypeTaskType) GetTasksQuantity() int32`

GetTasksQuantity returns the TasksQuantity field if non-nil, zero value otherwise.

### GetTasksQuantityOk

`func (o *RoomTypeTaskType) GetTasksQuantityOk() (*int32, bool)`

GetTasksQuantityOk returns a tuple with the TasksQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasksQuantity

`func (o *RoomTypeTaskType) SetTasksQuantity(v int32)`

SetTasksQuantity sets TasksQuantity field to given value.

### HasTasksQuantity

`func (o *RoomTypeTaskType) HasTasksQuantity() bool`

HasTasksQuantity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


