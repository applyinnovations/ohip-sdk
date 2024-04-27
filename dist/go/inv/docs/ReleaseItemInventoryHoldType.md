# ReleaseItemInventoryHoldType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HeldBy** | Pointer to [**HeldByType**](HeldByType.md) |  | [optional] 
**HeldById** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the holding item to be released. | [optional] 
**ItemCode** | Pointer to **string** | Item Code to be released. | [optional] 
**ItemHoldId** | Pointer to **float32** | ID reference for the one who hold the item. Used for releasing/reserving the item afterwards. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReserveDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewReleaseItemInventoryHoldType

`func NewReleaseItemInventoryHoldType() *ReleaseItemInventoryHoldType`

NewReleaseItemInventoryHoldType instantiates a new ReleaseItemInventoryHoldType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReleaseItemInventoryHoldTypeWithDefaults

`func NewReleaseItemInventoryHoldTypeWithDefaults() *ReleaseItemInventoryHoldType`

NewReleaseItemInventoryHoldTypeWithDefaults instantiates a new ReleaseItemInventoryHoldType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeldBy

`func (o *ReleaseItemInventoryHoldType) GetHeldBy() HeldByType`

GetHeldBy returns the HeldBy field if non-nil, zero value otherwise.

### GetHeldByOk

`func (o *ReleaseItemInventoryHoldType) GetHeldByOk() (*HeldByType, bool)`

GetHeldByOk returns a tuple with the HeldBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldBy

`func (o *ReleaseItemInventoryHoldType) SetHeldBy(v HeldByType)`

SetHeldBy sets HeldBy field to given value.

### HasHeldBy

`func (o *ReleaseItemInventoryHoldType) HasHeldBy() bool`

HasHeldBy returns a boolean if a field has been set.

### GetHeldById

`func (o *ReleaseItemInventoryHoldType) GetHeldById() UniqueIDType`

GetHeldById returns the HeldById field if non-nil, zero value otherwise.

### GetHeldByIdOk

`func (o *ReleaseItemInventoryHoldType) GetHeldByIdOk() (*UniqueIDType, bool)`

GetHeldByIdOk returns a tuple with the HeldById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldById

`func (o *ReleaseItemInventoryHoldType) SetHeldById(v UniqueIDType)`

SetHeldById sets HeldById field to given value.

### HasHeldById

`func (o *ReleaseItemInventoryHoldType) HasHeldById() bool`

HasHeldById returns a boolean if a field has been set.

### GetHotelId

`func (o *ReleaseItemInventoryHoldType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReleaseItemInventoryHoldType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReleaseItemInventoryHoldType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReleaseItemInventoryHoldType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemCode

`func (o *ReleaseItemInventoryHoldType) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *ReleaseItemInventoryHoldType) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *ReleaseItemInventoryHoldType) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *ReleaseItemInventoryHoldType) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetItemHoldId

`func (o *ReleaseItemInventoryHoldType) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *ReleaseItemInventoryHoldType) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *ReleaseItemInventoryHoldType) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *ReleaseItemInventoryHoldType) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetItemId

`func (o *ReleaseItemInventoryHoldType) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *ReleaseItemInventoryHoldType) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *ReleaseItemInventoryHoldType) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *ReleaseItemInventoryHoldType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetReserveDates

`func (o *ReleaseItemInventoryHoldType) GetReserveDates() TimeSpanType`

GetReserveDates returns the ReserveDates field if non-nil, zero value otherwise.

### GetReserveDatesOk

`func (o *ReleaseItemInventoryHoldType) GetReserveDatesOk() (*TimeSpanType, bool)`

GetReserveDatesOk returns a tuple with the ReserveDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveDates

`func (o *ReleaseItemInventoryHoldType) SetReserveDates(v TimeSpanType)`

SetReserveDates sets ReserveDates field to given value.

### HasReserveDates

`func (o *ReleaseItemInventoryHoldType) HasReserveDates() bool`

HasReserveDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


