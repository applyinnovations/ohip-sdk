# RoomAllocationDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OriginalRooms** | Pointer to **int32** | The total original( forecasted ) rooms for the block. | [optional] 
**RoomType** | Pointer to **string** | The room type for which the allocation details are listed. | [optional] 
**CurrentRooms** | Pointer to **int32** | The total current( projected + pickup ) rooms for the block. | [optional] 
**PickupRooms** | Pointer to **int32** | The total pickup rooms for the block. | [optional] 
**Inventory** | Pointer to [**BlockGridInvType**](BlockGridInvType.md) |  | [optional] 
**Rates** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**ActualRevenue** | Pointer to [**BlockActualRevenueType**](BlockActualRevenueType.md) |  | [optional] 
**PotentialRevenue** | Pointer to [**BlockPotenitalRevenueType**](BlockPotenitalRevenueType.md) |  | [optional] 

## Methods

### NewRoomAllocationDetailsType

`func NewRoomAllocationDetailsType() *RoomAllocationDetailsType`

NewRoomAllocationDetailsType instantiates a new RoomAllocationDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomAllocationDetailsTypeWithDefaults

`func NewRoomAllocationDetailsTypeWithDefaults() *RoomAllocationDetailsType`

NewRoomAllocationDetailsTypeWithDefaults instantiates a new RoomAllocationDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOriginalRooms

`func (o *RoomAllocationDetailsType) GetOriginalRooms() int32`

GetOriginalRooms returns the OriginalRooms field if non-nil, zero value otherwise.

### GetOriginalRoomsOk

`func (o *RoomAllocationDetailsType) GetOriginalRoomsOk() (*int32, bool)`

GetOriginalRoomsOk returns a tuple with the OriginalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalRooms

`func (o *RoomAllocationDetailsType) SetOriginalRooms(v int32)`

SetOriginalRooms sets OriginalRooms field to given value.

### HasOriginalRooms

`func (o *RoomAllocationDetailsType) HasOriginalRooms() bool`

HasOriginalRooms returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomAllocationDetailsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomAllocationDetailsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomAllocationDetailsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomAllocationDetailsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetCurrentRooms

`func (o *RoomAllocationDetailsType) GetCurrentRooms() int32`

GetCurrentRooms returns the CurrentRooms field if non-nil, zero value otherwise.

### GetCurrentRoomsOk

`func (o *RoomAllocationDetailsType) GetCurrentRoomsOk() (*int32, bool)`

GetCurrentRoomsOk returns a tuple with the CurrentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRooms

`func (o *RoomAllocationDetailsType) SetCurrentRooms(v int32)`

SetCurrentRooms sets CurrentRooms field to given value.

### HasCurrentRooms

`func (o *RoomAllocationDetailsType) HasCurrentRooms() bool`

HasCurrentRooms returns a boolean if a field has been set.

### GetPickupRooms

`func (o *RoomAllocationDetailsType) GetPickupRooms() int32`

GetPickupRooms returns the PickupRooms field if non-nil, zero value otherwise.

### GetPickupRoomsOk

`func (o *RoomAllocationDetailsType) GetPickupRoomsOk() (*int32, bool)`

GetPickupRoomsOk returns a tuple with the PickupRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPickupRooms

`func (o *RoomAllocationDetailsType) SetPickupRooms(v int32)`

SetPickupRooms sets PickupRooms field to given value.

### HasPickupRooms

`func (o *RoomAllocationDetailsType) HasPickupRooms() bool`

HasPickupRooms returns a boolean if a field has been set.

### GetInventory

`func (o *RoomAllocationDetailsType) GetInventory() BlockGridInvType`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *RoomAllocationDetailsType) GetInventoryOk() (*BlockGridInvType, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *RoomAllocationDetailsType) SetInventory(v BlockGridInvType)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *RoomAllocationDetailsType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetRates

`func (o *RoomAllocationDetailsType) GetRates() BlockGridRatesType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *RoomAllocationDetailsType) GetRatesOk() (*BlockGridRatesType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *RoomAllocationDetailsType) SetRates(v BlockGridRatesType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *RoomAllocationDetailsType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetActualRevenue

`func (o *RoomAllocationDetailsType) GetActualRevenue() BlockActualRevenueType`

GetActualRevenue returns the ActualRevenue field if non-nil, zero value otherwise.

### GetActualRevenueOk

`func (o *RoomAllocationDetailsType) GetActualRevenueOk() (*BlockActualRevenueType, bool)`

GetActualRevenueOk returns a tuple with the ActualRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualRevenue

`func (o *RoomAllocationDetailsType) SetActualRevenue(v BlockActualRevenueType)`

SetActualRevenue sets ActualRevenue field to given value.

### HasActualRevenue

`func (o *RoomAllocationDetailsType) HasActualRevenue() bool`

HasActualRevenue returns a boolean if a field has been set.

### GetPotentialRevenue

`func (o *RoomAllocationDetailsType) GetPotentialRevenue() BlockPotenitalRevenueType`

GetPotentialRevenue returns the PotentialRevenue field if non-nil, zero value otherwise.

### GetPotentialRevenueOk

`func (o *RoomAllocationDetailsType) GetPotentialRevenueOk() (*BlockPotenitalRevenueType, bool)`

GetPotentialRevenueOk returns a tuple with the PotentialRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRevenue

`func (o *RoomAllocationDetailsType) SetPotentialRevenue(v BlockPotenitalRevenueType)`

SetPotentialRevenue sets PotentialRevenue field to given value.

### HasPotentialRevenue

`func (o *RoomAllocationDetailsType) HasPotentialRevenue() bool`

HasPotentialRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


