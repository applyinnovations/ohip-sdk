# HotelInventoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HouseInventory** | Pointer to [**InventoryCountsListType**](InventoryCountsListType.md) |  | [optional] 
**RoomClassInventories** | Pointer to [**[]InventoryLevelCountsListType**](InventoryLevelCountsListType.md) | Collection of Room Class level Inventory counts for the date ranges. | [optional] 
**RoomTypeInventories** | Pointer to [**[]InventoryLevelCountsListType**](InventoryLevelCountsListType.md) | Collection of Room type level Inventory counts for the date ranges. | [optional] 

## Methods

### NewHotelInventoryType

`func NewHotelInventoryType() *HotelInventoryType`

NewHotelInventoryType instantiates a new HotelInventoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInventoryTypeWithDefaults

`func NewHotelInventoryTypeWithDefaults() *HotelInventoryType`

NewHotelInventoryTypeWithDefaults instantiates a new HotelInventoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHouseInventory

`func (o *HotelInventoryType) GetHouseInventory() InventoryCountsListType`

GetHouseInventory returns the HouseInventory field if non-nil, zero value otherwise.

### GetHouseInventoryOk

`func (o *HotelInventoryType) GetHouseInventoryOk() (*InventoryCountsListType, bool)`

GetHouseInventoryOk returns a tuple with the HouseInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseInventory

`func (o *HotelInventoryType) SetHouseInventory(v InventoryCountsListType)`

SetHouseInventory sets HouseInventory field to given value.

### HasHouseInventory

`func (o *HotelInventoryType) HasHouseInventory() bool`

HasHouseInventory returns a boolean if a field has been set.

### GetRoomClassInventories

`func (o *HotelInventoryType) GetRoomClassInventories() []InventoryLevelCountsListType`

GetRoomClassInventories returns the RoomClassInventories field if non-nil, zero value otherwise.

### GetRoomClassInventoriesOk

`func (o *HotelInventoryType) GetRoomClassInventoriesOk() (*[]InventoryLevelCountsListType, bool)`

GetRoomClassInventoriesOk returns a tuple with the RoomClassInventories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClassInventories

`func (o *HotelInventoryType) SetRoomClassInventories(v []InventoryLevelCountsListType)`

SetRoomClassInventories sets RoomClassInventories field to given value.

### HasRoomClassInventories

`func (o *HotelInventoryType) HasRoomClassInventories() bool`

HasRoomClassInventories returns a boolean if a field has been set.

### GetRoomTypeInventories

`func (o *HotelInventoryType) GetRoomTypeInventories() []InventoryLevelCountsListType`

GetRoomTypeInventories returns the RoomTypeInventories field if non-nil, zero value otherwise.

### GetRoomTypeInventoriesOk

`func (o *HotelInventoryType) GetRoomTypeInventoriesOk() (*[]InventoryLevelCountsListType, bool)`

GetRoomTypeInventoriesOk returns a tuple with the RoomTypeInventories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeInventories

`func (o *HotelInventoryType) SetRoomTypeInventories(v []InventoryLevelCountsListType)`

SetRoomTypeInventories sets RoomTypeInventories field to given value.

### HasRoomTypeInventories

`func (o *HotelInventoryType) HasRoomTypeInventories() bool`

HasRoomTypeInventories returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


