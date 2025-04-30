# ChannelInventorySnapshotInventoriesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inventory** | Pointer to [**[]ChannelInventoryType**](ChannelInventoryType.md) | Details of inventory statistics and restrictions. | [optional] 
**HotelId** | Pointer to **string** | Hotel that the inventory belongs to. | [optional] 

## Methods

### NewChannelInventorySnapshotInventoriesType

`func NewChannelInventorySnapshotInventoriesType() *ChannelInventorySnapshotInventoriesType`

NewChannelInventorySnapshotInventoriesType instantiates a new ChannelInventorySnapshotInventoriesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelInventorySnapshotInventoriesTypeWithDefaults

`func NewChannelInventorySnapshotInventoriesTypeWithDefaults() *ChannelInventorySnapshotInventoriesType`

NewChannelInventorySnapshotInventoriesTypeWithDefaults instantiates a new ChannelInventorySnapshotInventoriesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventory

`func (o *ChannelInventorySnapshotInventoriesType) GetInventory() []ChannelInventoryType`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *ChannelInventorySnapshotInventoriesType) GetInventoryOk() (*[]ChannelInventoryType, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *ChannelInventorySnapshotInventoriesType) SetInventory(v []ChannelInventoryType)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *ChannelInventorySnapshotInventoriesType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelInventorySnapshotInventoriesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelInventorySnapshotInventoriesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelInventorySnapshotInventoriesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelInventorySnapshotInventoriesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


