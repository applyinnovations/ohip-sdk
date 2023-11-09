# ReleaseItemInventoryHold

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HeldBy** | Pointer to [**HeldByType**](HeldByType.md) |  | [optional] 
**HeldById** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ItemCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ItemHoldId** | Pointer to **float32** | ID reference for the one who hold the item. Used for releasing/reserving the item afterwards. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReleaseItemsInventoryHoldInfo** | Pointer to [**ReleaseItemsInventoryHoldType**](ReleaseItemsInventoryHoldType.md) |  | [optional] 
**ReserveDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReleaseItemInventoryHold

`func NewReleaseItemInventoryHold() *ReleaseItemInventoryHold`

NewReleaseItemInventoryHold instantiates a new ReleaseItemInventoryHold object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReleaseItemInventoryHoldWithDefaults

`func NewReleaseItemInventoryHoldWithDefaults() *ReleaseItemInventoryHold`

NewReleaseItemInventoryHoldWithDefaults instantiates a new ReleaseItemInventoryHold object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeldBy

`func (o *ReleaseItemInventoryHold) GetHeldBy() HeldByType`

GetHeldBy returns the HeldBy field if non-nil, zero value otherwise.

### GetHeldByOk

`func (o *ReleaseItemInventoryHold) GetHeldByOk() (*HeldByType, bool)`

GetHeldByOk returns a tuple with the HeldBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldBy

`func (o *ReleaseItemInventoryHold) SetHeldBy(v HeldByType)`

SetHeldBy sets HeldBy field to given value.

### HasHeldBy

`func (o *ReleaseItemInventoryHold) HasHeldBy() bool`

HasHeldBy returns a boolean if a field has been set.

### GetHeldById

`func (o *ReleaseItemInventoryHold) GetHeldById() UniqueIDType`

GetHeldById returns the HeldById field if non-nil, zero value otherwise.

### GetHeldByIdOk

`func (o *ReleaseItemInventoryHold) GetHeldByIdOk() (*UniqueIDType, bool)`

GetHeldByIdOk returns a tuple with the HeldById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldById

`func (o *ReleaseItemInventoryHold) SetHeldById(v UniqueIDType)`

SetHeldById sets HeldById field to given value.

### HasHeldById

`func (o *ReleaseItemInventoryHold) HasHeldById() bool`

HasHeldById returns a boolean if a field has been set.

### GetHotelId

`func (o *ReleaseItemInventoryHold) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReleaseItemInventoryHold) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReleaseItemInventoryHold) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReleaseItemInventoryHold) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemCode

`func (o *ReleaseItemInventoryHold) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *ReleaseItemInventoryHold) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *ReleaseItemInventoryHold) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *ReleaseItemInventoryHold) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetItemHoldId

`func (o *ReleaseItemInventoryHold) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *ReleaseItemInventoryHold) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *ReleaseItemInventoryHold) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *ReleaseItemInventoryHold) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetItemId

`func (o *ReleaseItemInventoryHold) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *ReleaseItemInventoryHold) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *ReleaseItemInventoryHold) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *ReleaseItemInventoryHold) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetReleaseItemsInventoryHoldInfo

`func (o *ReleaseItemInventoryHold) GetReleaseItemsInventoryHoldInfo() ReleaseItemsInventoryHoldType`

GetReleaseItemsInventoryHoldInfo returns the ReleaseItemsInventoryHoldInfo field if non-nil, zero value otherwise.

### GetReleaseItemsInventoryHoldInfoOk

`func (o *ReleaseItemInventoryHold) GetReleaseItemsInventoryHoldInfoOk() (*ReleaseItemsInventoryHoldType, bool)`

GetReleaseItemsInventoryHoldInfoOk returns a tuple with the ReleaseItemsInventoryHoldInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReleaseItemsInventoryHoldInfo

`func (o *ReleaseItemInventoryHold) SetReleaseItemsInventoryHoldInfo(v ReleaseItemsInventoryHoldType)`

SetReleaseItemsInventoryHoldInfo sets ReleaseItemsInventoryHoldInfo field to given value.

### HasReleaseItemsInventoryHoldInfo

`func (o *ReleaseItemInventoryHold) HasReleaseItemsInventoryHoldInfo() bool`

HasReleaseItemsInventoryHoldInfo returns a boolean if a field has been set.

### GetReserveDates

`func (o *ReleaseItemInventoryHold) GetReserveDates() TimeSpanType`

GetReserveDates returns the ReserveDates field if non-nil, zero value otherwise.

### GetReserveDatesOk

`func (o *ReleaseItemInventoryHold) GetReserveDatesOk() (*TimeSpanType, bool)`

GetReserveDatesOk returns a tuple with the ReserveDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveDates

`func (o *ReleaseItemInventoryHold) SetReserveDates(v TimeSpanType)`

SetReserveDates sets ReserveDates field to given value.

### HasReserveDates

`func (o *ReleaseItemInventoryHold) HasReserveDates() bool`

HasReserveDates returns a boolean if a field has been set.

### GetWarnings

`func (o *ReleaseItemInventoryHold) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReleaseItemInventoryHold) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReleaseItemInventoryHold) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReleaseItemInventoryHold) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


