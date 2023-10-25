# PutItemInventoryHoldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HeldBy** | Pointer to [**HeldByType**](HeldByType.md) |  | [optional] 
**HeldById** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ItemCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ItemHoldId** | Pointer to **float32** | ID reference for the one who hold the item. Used for releasing/reserving the item afterwards. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReleaseItemsInventoryHoldInfo** | Pointer to [**[]ReleaseItemInventoryHoldType**](ReleaseItemInventoryHoldType.md) | Collection of items for releasing an Items Inventory hold. | [optional] 
**ReserveDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutItemInventoryHoldRequest

`func NewPutItemInventoryHoldRequest() *PutItemInventoryHoldRequest`

NewPutItemInventoryHoldRequest instantiates a new PutItemInventoryHoldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutItemInventoryHoldRequestWithDefaults

`func NewPutItemInventoryHoldRequestWithDefaults() *PutItemInventoryHoldRequest`

NewPutItemInventoryHoldRequestWithDefaults instantiates a new PutItemInventoryHoldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeldBy

`func (o *PutItemInventoryHoldRequest) GetHeldBy() HeldByType`

GetHeldBy returns the HeldBy field if non-nil, zero value otherwise.

### GetHeldByOk

`func (o *PutItemInventoryHoldRequest) GetHeldByOk() (*HeldByType, bool)`

GetHeldByOk returns a tuple with the HeldBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldBy

`func (o *PutItemInventoryHoldRequest) SetHeldBy(v HeldByType)`

SetHeldBy sets HeldBy field to given value.

### HasHeldBy

`func (o *PutItemInventoryHoldRequest) HasHeldBy() bool`

HasHeldBy returns a boolean if a field has been set.

### GetHeldById

`func (o *PutItemInventoryHoldRequest) GetHeldById() UniqueIDType`

GetHeldById returns the HeldById field if non-nil, zero value otherwise.

### GetHeldByIdOk

`func (o *PutItemInventoryHoldRequest) GetHeldByIdOk() (*UniqueIDType, bool)`

GetHeldByIdOk returns a tuple with the HeldById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeldById

`func (o *PutItemInventoryHoldRequest) SetHeldById(v UniqueIDType)`

SetHeldById sets HeldById field to given value.

### HasHeldById

`func (o *PutItemInventoryHoldRequest) HasHeldById() bool`

HasHeldById returns a boolean if a field has been set.

### GetHotelId

`func (o *PutItemInventoryHoldRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutItemInventoryHoldRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutItemInventoryHoldRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutItemInventoryHoldRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemCode

`func (o *PutItemInventoryHoldRequest) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *PutItemInventoryHoldRequest) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *PutItemInventoryHoldRequest) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *PutItemInventoryHoldRequest) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetItemHoldId

`func (o *PutItemInventoryHoldRequest) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *PutItemInventoryHoldRequest) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *PutItemInventoryHoldRequest) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *PutItemInventoryHoldRequest) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetItemId

`func (o *PutItemInventoryHoldRequest) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *PutItemInventoryHoldRequest) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *PutItemInventoryHoldRequest) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *PutItemInventoryHoldRequest) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetReleaseItemsInventoryHoldInfo

`func (o *PutItemInventoryHoldRequest) GetReleaseItemsInventoryHoldInfo() []ReleaseItemInventoryHoldType`

GetReleaseItemsInventoryHoldInfo returns the ReleaseItemsInventoryHoldInfo field if non-nil, zero value otherwise.

### GetReleaseItemsInventoryHoldInfoOk

`func (o *PutItemInventoryHoldRequest) GetReleaseItemsInventoryHoldInfoOk() (*[]ReleaseItemInventoryHoldType, bool)`

GetReleaseItemsInventoryHoldInfoOk returns a tuple with the ReleaseItemsInventoryHoldInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReleaseItemsInventoryHoldInfo

`func (o *PutItemInventoryHoldRequest) SetReleaseItemsInventoryHoldInfo(v []ReleaseItemInventoryHoldType)`

SetReleaseItemsInventoryHoldInfo sets ReleaseItemsInventoryHoldInfo field to given value.

### HasReleaseItemsInventoryHoldInfo

`func (o *PutItemInventoryHoldRequest) HasReleaseItemsInventoryHoldInfo() bool`

HasReleaseItemsInventoryHoldInfo returns a boolean if a field has been set.

### GetReserveDates

`func (o *PutItemInventoryHoldRequest) GetReserveDates() TimeSpanType`

GetReserveDates returns the ReserveDates field if non-nil, zero value otherwise.

### GetReserveDatesOk

`func (o *PutItemInventoryHoldRequest) GetReserveDatesOk() (*TimeSpanType, bool)`

GetReserveDatesOk returns a tuple with the ReserveDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveDates

`func (o *PutItemInventoryHoldRequest) SetReserveDates(v TimeSpanType)`

SetReserveDates sets ReserveDates field to given value.

### HasReserveDates

`func (o *PutItemInventoryHoldRequest) HasReserveDates() bool`

HasReserveDates returns a boolean if a field has been set.

### GetWarnings

`func (o *PutItemInventoryHoldRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutItemInventoryHoldRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutItemInventoryHoldRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutItemInventoryHoldRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


