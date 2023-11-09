# RoomComponentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of room component. | [optional] 
**Qty** | Pointer to **int32** | Quantity of room component for the component room type. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**Rooms** | Pointer to [**RoomRoomsType**](RoomRoomsType.md) |  | [optional] 

## Methods

### NewRoomComponentType

`func NewRoomComponentType() *RoomComponentType`

NewRoomComponentType instantiates a new RoomComponentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomComponentTypeWithDefaults

`func NewRoomComponentTypeWithDefaults() *RoomComponentType`

NewRoomComponentTypeWithDefaults instantiates a new RoomComponentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoomComponentType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomComponentType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomComponentType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomComponentType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetQty

`func (o *RoomComponentType) GetQty() int32`

GetQty returns the Qty field if non-nil, zero value otherwise.

### GetQtyOk

`func (o *RoomComponentType) GetQtyOk() (*int32, bool)`

GetQtyOk returns a tuple with the Qty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQty

`func (o *RoomComponentType) SetQty(v int32)`

SetQty sets Qty field to given value.

### HasQty

`func (o *RoomComponentType) HasQty() bool`

HasQty returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomComponentType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomComponentType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomComponentType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomComponentType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRooms

`func (o *RoomComponentType) GetRooms() RoomRoomsType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *RoomComponentType) GetRoomsOk() (*RoomRoomsType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *RoomComponentType) SetRooms(v RoomRoomsType)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *RoomComponentType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


