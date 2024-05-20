# BorrowableInventoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableRooms** | Pointer to **int32** | The number of rooms that are available to be borrowed from the room type or house. | [optional] 
**AvailableSellLimit** | Pointer to **int32** | The number of sell limit rooms that are available for the room type. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**House** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House. | [optional] 
**RoomType** | Pointer to **string** | The room type that contains rooms that can be borrowed. | [optional] 
**Warning** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBorrowableInventoryType

`func NewBorrowableInventoryType() *BorrowableInventoryType`

NewBorrowableInventoryType instantiates a new BorrowableInventoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBorrowableInventoryTypeWithDefaults

`func NewBorrowableInventoryTypeWithDefaults() *BorrowableInventoryType`

NewBorrowableInventoryTypeWithDefaults instantiates a new BorrowableInventoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableRooms

`func (o *BorrowableInventoryType) GetAvailableRooms() int32`

GetAvailableRooms returns the AvailableRooms field if non-nil, zero value otherwise.

### GetAvailableRoomsOk

`func (o *BorrowableInventoryType) GetAvailableRoomsOk() (*int32, bool)`

GetAvailableRoomsOk returns a tuple with the AvailableRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRooms

`func (o *BorrowableInventoryType) SetAvailableRooms(v int32)`

SetAvailableRooms sets AvailableRooms field to given value.

### HasAvailableRooms

`func (o *BorrowableInventoryType) HasAvailableRooms() bool`

HasAvailableRooms returns a boolean if a field has been set.

### GetAvailableSellLimit

`func (o *BorrowableInventoryType) GetAvailableSellLimit() int32`

GetAvailableSellLimit returns the AvailableSellLimit field if non-nil, zero value otherwise.

### GetAvailableSellLimitOk

`func (o *BorrowableInventoryType) GetAvailableSellLimitOk() (*int32, bool)`

GetAvailableSellLimitOk returns a tuple with the AvailableSellLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableSellLimit

`func (o *BorrowableInventoryType) SetAvailableSellLimit(v int32)`

SetAvailableSellLimit sets AvailableSellLimit field to given value.

### HasAvailableSellLimit

`func (o *BorrowableInventoryType) HasAvailableSellLimit() bool`

HasAvailableSellLimit returns a boolean if a field has been set.

### GetErrors

`func (o *BorrowableInventoryType) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *BorrowableInventoryType) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *BorrowableInventoryType) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *BorrowableInventoryType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetHouse

`func (o *BorrowableInventoryType) GetHouse() map[string]interface{}`

GetHouse returns the House field if non-nil, zero value otherwise.

### GetHouseOk

`func (o *BorrowableInventoryType) GetHouseOk() (*map[string]interface{}, bool)`

GetHouseOk returns a tuple with the House field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouse

`func (o *BorrowableInventoryType) SetHouse(v map[string]interface{})`

SetHouse sets House field to given value.

### HasHouse

`func (o *BorrowableInventoryType) HasHouse() bool`

HasHouse returns a boolean if a field has been set.

### GetRoomType

`func (o *BorrowableInventoryType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BorrowableInventoryType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BorrowableInventoryType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BorrowableInventoryType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarning

`func (o *BorrowableInventoryType) GetWarning() []WarningType`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *BorrowableInventoryType) GetWarningOk() (*[]WarningType, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *BorrowableInventoryType) SetWarning(v []WarningType)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *BorrowableInventoryType) HasWarning() bool`

HasWarning returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


