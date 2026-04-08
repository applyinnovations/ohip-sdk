# HoldItemInventoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HeldById** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HeldBy** | Pointer to [**HeldByType**](HeldByType.md) |  | [optional] 
**ItemHoldId** | Pointer to **float32** | Unique ID of the one requesting for the item hold. | [optional] 
**HoldItemInfoList** | Pointer to [**[]HoldItemInfoType**](HoldItemInfoType.md) | Info of an item inventory that is requested for Hold. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code whose Item Inventory is being requested. | [optional] 
**OverrideInventory** | Pointer to **bool** | Flag to indicate if inventory check will be overriden. | [optional] 

## Methods

### NewHoldItemInventoryType

`func NewHoldItemInventoryType() *HoldItemInventoryType`

NewHoldItemInventoryType instantiates a new HoldItemInventoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHoldItemInventoryTypeWithDefaults

`func NewHoldItemInventoryTypeWithDefaults() *HoldItemInventoryType`

NewHoldItemInventoryTypeWithDefaults instantiates a new HoldItemInventoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeldById

`func (o *HoldItemInventoryType) GetHeldById() UniqueIDType`

GetHeldById returns the HeldById field if non-nil, zero value otherwise.

### GetHeldByIdOk

`func (o *HoldItemInventoryType) GetHeldByIdOk() (*UniqueIDType, bool)`

GetHeldByIdOk returns a tuple with the HeldById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldById

`func (o *HoldItemInventoryType) SetHeldById(v UniqueIDType)`

SetHeldById sets HeldById field to given value.

### HasHeldById

`func (o *HoldItemInventoryType) HasHeldById() bool`

HasHeldById returns a boolean if a field has been set.

### GetHeldBy

`func (o *HoldItemInventoryType) GetHeldBy() HeldByType`

GetHeldBy returns the HeldBy field if non-nil, zero value otherwise.

### GetHeldByOk

`func (o *HoldItemInventoryType) GetHeldByOk() (*HeldByType, bool)`

GetHeldByOk returns a tuple with the HeldBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldBy

`func (o *HoldItemInventoryType) SetHeldBy(v HeldByType)`

SetHeldBy sets HeldBy field to given value.

### HasHeldBy

`func (o *HoldItemInventoryType) HasHeldBy() bool`

HasHeldBy returns a boolean if a field has been set.

### GetItemHoldId

`func (o *HoldItemInventoryType) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *HoldItemInventoryType) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *HoldItemInventoryType) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *HoldItemInventoryType) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetHoldItemInfoList

`func (o *HoldItemInventoryType) GetHoldItemInfoList() []HoldItemInfoType`

GetHoldItemInfoList returns the HoldItemInfoList field if non-nil, zero value otherwise.

### GetHoldItemInfoListOk

`func (o *HoldItemInventoryType) GetHoldItemInfoListOk() (*[]HoldItemInfoType, bool)`

GetHoldItemInfoListOk returns a tuple with the HoldItemInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldItemInfoList

`func (o *HoldItemInventoryType) SetHoldItemInfoList(v []HoldItemInfoType)`

SetHoldItemInfoList sets HoldItemInfoList field to given value.

### HasHoldItemInfoList

`func (o *HoldItemInventoryType) HasHoldItemInfoList() bool`

HasHoldItemInfoList returns a boolean if a field has been set.

### GetHotelId

`func (o *HoldItemInventoryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HoldItemInventoryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HoldItemInventoryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HoldItemInventoryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOverrideInventory

`func (o *HoldItemInventoryType) GetOverrideInventory() bool`

GetOverrideInventory returns the OverrideInventory field if non-nil, zero value otherwise.

### GetOverrideInventoryOk

`func (o *HoldItemInventoryType) GetOverrideInventoryOk() (*bool, bool)`

GetOverrideInventoryOk returns a tuple with the OverrideInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventory

`func (o *HoldItemInventoryType) SetOverrideInventory(v bool)`

SetOverrideInventory sets OverrideInventory field to given value.

### HasOverrideInventory

`func (o *HoldItemInventoryType) HasOverrideInventory() bool`

HasOverrideInventory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


