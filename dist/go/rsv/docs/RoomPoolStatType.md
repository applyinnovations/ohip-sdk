# RoomPoolStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRooms** | Pointer to **int32** | Number of complementary rooms. | [optional] 
**PaidRooms** | Pointer to **int32** | Number of non-complementary rooms. | [optional] 
**RoomPool** | Pointer to **string** | Room pool (room pool represents a group of room types). | [optional] 
**RoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewRoomPoolStatType

`func NewRoomPoolStatType() *RoomPoolStatType`

NewRoomPoolStatType instantiates a new RoomPoolStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomPoolStatTypeWithDefaults

`func NewRoomPoolStatTypeWithDefaults() *RoomPoolStatType`

NewRoomPoolStatTypeWithDefaults instantiates a new RoomPoolStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRooms

`func (o *RoomPoolStatType) GetCompRooms() int32`

GetCompRooms returns the CompRooms field if non-nil, zero value otherwise.

### GetCompRoomsOk

`func (o *RoomPoolStatType) GetCompRoomsOk() (*int32, bool)`

GetCompRoomsOk returns a tuple with the CompRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRooms

`func (o *RoomPoolStatType) SetCompRooms(v int32)`

SetCompRooms sets CompRooms field to given value.

### HasCompRooms

`func (o *RoomPoolStatType) HasCompRooms() bool`

HasCompRooms returns a boolean if a field has been set.

### GetPaidRooms

`func (o *RoomPoolStatType) GetPaidRooms() int32`

GetPaidRooms returns the PaidRooms field if non-nil, zero value otherwise.

### GetPaidRoomsOk

`func (o *RoomPoolStatType) GetPaidRoomsOk() (*int32, bool)`

GetPaidRoomsOk returns a tuple with the PaidRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidRooms

`func (o *RoomPoolStatType) SetPaidRooms(v int32)`

SetPaidRooms sets PaidRooms field to given value.

### HasPaidRooms

`func (o *RoomPoolStatType) HasPaidRooms() bool`

HasPaidRooms returns a boolean if a field has been set.

### GetRoomPool

`func (o *RoomPoolStatType) GetRoomPool() string`

GetRoomPool returns the RoomPool field if non-nil, zero value otherwise.

### GetRoomPoolOk

`func (o *RoomPoolStatType) GetRoomPoolOk() (*string, bool)`

GetRoomPoolOk returns a tuple with the RoomPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPool

`func (o *RoomPoolStatType) SetRoomPool(v string)`

SetRoomPool sets RoomPool field to given value.

### HasRoomPool

`func (o *RoomPoolStatType) HasRoomPool() bool`

HasRoomPool returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *RoomPoolStatType) GetRoomRevenue() CurrencyAmountType`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *RoomPoolStatType) GetRoomRevenueOk() (*CurrencyAmountType, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *RoomPoolStatType) SetRoomRevenue(v CurrencyAmountType)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *RoomPoolStatType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


