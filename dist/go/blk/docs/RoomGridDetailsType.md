# RoomGridDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenericRoomType** | Pointer to **string** | Indicates the Generic Room Type (Room Pool) the Room Type belongs to. | [optional] 
**Inventory** | Pointer to [**BlockGridInvType**](BlockGridInvType.md) |  | [optional] 
**Rate** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Indicates the room type for which the inventory or rate values are applicable. | [optional] 

## Methods

### NewRoomGridDetailsType

`func NewRoomGridDetailsType() *RoomGridDetailsType`

NewRoomGridDetailsType instantiates a new RoomGridDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomGridDetailsTypeWithDefaults

`func NewRoomGridDetailsTypeWithDefaults() *RoomGridDetailsType`

NewRoomGridDetailsTypeWithDefaults instantiates a new RoomGridDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenericRoomType

`func (o *RoomGridDetailsType) GetGenericRoomType() string`

GetGenericRoomType returns the GenericRoomType field if non-nil, zero value otherwise.

### GetGenericRoomTypeOk

`func (o *RoomGridDetailsType) GetGenericRoomTypeOk() (*string, bool)`

GetGenericRoomTypeOk returns a tuple with the GenericRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomType

`func (o *RoomGridDetailsType) SetGenericRoomType(v string)`

SetGenericRoomType sets GenericRoomType field to given value.

### HasGenericRoomType

`func (o *RoomGridDetailsType) HasGenericRoomType() bool`

HasGenericRoomType returns a boolean if a field has been set.

### GetInventory

`func (o *RoomGridDetailsType) GetInventory() BlockGridInvType`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *RoomGridDetailsType) GetInventoryOk() (*BlockGridInvType, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *RoomGridDetailsType) SetInventory(v BlockGridInvType)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *RoomGridDetailsType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetRate

`func (o *RoomGridDetailsType) GetRate() BlockGridRatesType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *RoomGridDetailsType) GetRateOk() (*BlockGridRatesType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *RoomGridDetailsType) SetRate(v BlockGridRatesType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *RoomGridDetailsType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomGridDetailsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomGridDetailsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomGridDetailsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomGridDetailsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


