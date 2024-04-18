# ReturnRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**House** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House. | [optional] 
**RoomType** | Pointer to **string** | Indicates the room type to which the rooms will be returned. | [optional] 
**RoomsToReturn** | Pointer to **int32** | The number of rooms that need to be returned. | [optional] 

## Methods

### NewReturnRoomType

`func NewReturnRoomType() *ReturnRoomType`

NewReturnRoomType instantiates a new ReturnRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReturnRoomTypeWithDefaults

`func NewReturnRoomTypeWithDefaults() *ReturnRoomType`

NewReturnRoomTypeWithDefaults instantiates a new ReturnRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHouse

`func (o *ReturnRoomType) GetHouse() map[string]interface{}`

GetHouse returns the House field if non-nil, zero value otherwise.

### GetHouseOk

`func (o *ReturnRoomType) GetHouseOk() (*map[string]interface{}, bool)`

GetHouseOk returns a tuple with the House field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouse

`func (o *ReturnRoomType) SetHouse(v map[string]interface{})`

SetHouse sets House field to given value.

### HasHouse

`func (o *ReturnRoomType) HasHouse() bool`

HasHouse returns a boolean if a field has been set.

### GetRoomType

`func (o *ReturnRoomType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ReturnRoomType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ReturnRoomType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ReturnRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomsToReturn

`func (o *ReturnRoomType) GetRoomsToReturn() int32`

GetRoomsToReturn returns the RoomsToReturn field if non-nil, zero value otherwise.

### GetRoomsToReturnOk

`func (o *ReturnRoomType) GetRoomsToReturnOk() (*int32, bool)`

GetRoomsToReturnOk returns a tuple with the RoomsToReturn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsToReturn

`func (o *ReturnRoomType) SetRoomsToReturn(v int32)`

SetRoomsToReturn sets RoomsToReturn field to given value.

### HasRoomsToReturn

`func (o *ReturnRoomType) HasRoomsToReturn() bool`

HasRoomsToReturn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


