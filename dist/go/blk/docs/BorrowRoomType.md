# BorrowRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**House** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House. | [optional] 
**RoomType** | Pointer to **string** | Indicates the room type from which the rooms will be borrowed. | [optional] 
**RoomsToBorrow** | Pointer to **int32** | The number of rooms that need to be borrowed. | [optional] 

## Methods

### NewBorrowRoomType

`func NewBorrowRoomType() *BorrowRoomType`

NewBorrowRoomType instantiates a new BorrowRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBorrowRoomTypeWithDefaults

`func NewBorrowRoomTypeWithDefaults() *BorrowRoomType`

NewBorrowRoomTypeWithDefaults instantiates a new BorrowRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHouse

`func (o *BorrowRoomType) GetHouse() map[string]interface{}`

GetHouse returns the House field if non-nil, zero value otherwise.

### GetHouseOk

`func (o *BorrowRoomType) GetHouseOk() (*map[string]interface{}, bool)`

GetHouseOk returns a tuple with the House field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouse

`func (o *BorrowRoomType) SetHouse(v map[string]interface{})`

SetHouse sets House field to given value.

### HasHouse

`func (o *BorrowRoomType) HasHouse() bool`

HasHouse returns a boolean if a field has been set.

### GetRoomType

`func (o *BorrowRoomType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BorrowRoomType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BorrowRoomType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BorrowRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomsToBorrow

`func (o *BorrowRoomType) GetRoomsToBorrow() int32`

GetRoomsToBorrow returns the RoomsToBorrow field if non-nil, zero value otherwise.

### GetRoomsToBorrowOk

`func (o *BorrowRoomType) GetRoomsToBorrowOk() (*int32, bool)`

GetRoomsToBorrowOk returns a tuple with the RoomsToBorrow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsToBorrow

`func (o *BorrowRoomType) SetRoomsToBorrow(v int32)`

SetRoomsToBorrow sets RoomsToBorrow field to given value.

### HasRoomsToBorrow

`func (o *BorrowRoomType) HasRoomsToBorrow() bool`

HasRoomsToBorrow returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


