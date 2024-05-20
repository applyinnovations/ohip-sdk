# BlockAvailabilityRoomInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inventory** | Pointer to **int32** | Total occupancy alloted for the room type and stay date. | [optional] 
**Rate** | Pointer to **float32** | The derived rate amount for the room type, stay date and number of adults. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**SellLimit** | Pointer to **int32** | Available Sell Limit rooms for a Sell Limit block. | [optional] 

## Methods

### NewBlockAvailabilityRoomInfoType

`func NewBlockAvailabilityRoomInfoType() *BlockAvailabilityRoomInfoType`

NewBlockAvailabilityRoomInfoType instantiates a new BlockAvailabilityRoomInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityRoomInfoTypeWithDefaults

`func NewBlockAvailabilityRoomInfoTypeWithDefaults() *BlockAvailabilityRoomInfoType`

NewBlockAvailabilityRoomInfoTypeWithDefaults instantiates a new BlockAvailabilityRoomInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventory

`func (o *BlockAvailabilityRoomInfoType) GetInventory() int32`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *BlockAvailabilityRoomInfoType) GetInventoryOk() (*int32, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *BlockAvailabilityRoomInfoType) SetInventory(v int32)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *BlockAvailabilityRoomInfoType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetRate

`func (o *BlockAvailabilityRoomInfoType) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *BlockAvailabilityRoomInfoType) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *BlockAvailabilityRoomInfoType) SetRate(v float32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *BlockAvailabilityRoomInfoType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockAvailabilityRoomInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockAvailabilityRoomInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockAvailabilityRoomInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockAvailabilityRoomInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSellLimit

`func (o *BlockAvailabilityRoomInfoType) GetSellLimit() int32`

GetSellLimit returns the SellLimit field if non-nil, zero value otherwise.

### GetSellLimitOk

`func (o *BlockAvailabilityRoomInfoType) GetSellLimitOk() (*int32, bool)`

GetSellLimitOk returns a tuple with the SellLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimit

`func (o *BlockAvailabilityRoomInfoType) SetSellLimit(v int32)`

SetSellLimit sets SellLimit field to given value.

### HasSellLimit

`func (o *BlockAvailabilityRoomInfoType) HasSellLimit() bool`

HasSellLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


