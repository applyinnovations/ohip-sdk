# CopyRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **map[string]interface{}** | Hotel code of an existing room that will serve as the basis for the new rooms. | [optional] 
**NewRooms** | Pointer to [**[]CopyNewRoomType**](CopyNewRoomType.md) | Room details that may differ from the base existing room. | [optional] 
**RoomId** | Pointer to **map[string]interface{}** | Room number of an existing room that will serve as the basis for the new rooms. | [optional] 

## Methods

### NewCopyRoomType

`func NewCopyRoomType() *CopyRoomType`

NewCopyRoomType instantiates a new CopyRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRoomTypeWithDefaults

`func NewCopyRoomTypeWithDefaults() *CopyRoomType`

NewCopyRoomTypeWithDefaults instantiates a new CopyRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyRoomType) GetHotelId() map[string]interface{}`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyRoomType) GetHotelIdOk() (*map[string]interface{}, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyRoomType) SetHotelId(v map[string]interface{})`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyRoomType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewRooms

`func (o *CopyRoomType) GetNewRooms() []CopyNewRoomType`

GetNewRooms returns the NewRooms field if non-nil, zero value otherwise.

### GetNewRoomsOk

`func (o *CopyRoomType) GetNewRoomsOk() (*[]CopyNewRoomType, bool)`

GetNewRoomsOk returns a tuple with the NewRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRooms

`func (o *CopyRoomType) SetNewRooms(v []CopyNewRoomType)`

SetNewRooms sets NewRooms field to given value.

### HasNewRooms

`func (o *CopyRoomType) HasNewRooms() bool`

HasNewRooms returns a boolean if a field has been set.

### GetRoomId

`func (o *CopyRoomType) GetRoomId() map[string]interface{}`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CopyRoomType) GetRoomIdOk() (*map[string]interface{}, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CopyRoomType) SetRoomId(v map[string]interface{})`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CopyRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


