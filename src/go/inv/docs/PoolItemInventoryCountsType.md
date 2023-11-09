# PoolItemInventoryCountsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailabilityPeriod** | Pointer to [**TimeWindowType**](TimeWindowType.md) |  | [optional] 
**Code** | Pointer to **string** | Item Code. | [optional] 
**DefaultDuration** | Pointer to **int32** | Define the default duration in days when booking the item. | [optional] 
**Description** | Pointer to **string** | Detail description of an item. | [optional] 
**FixedCharge** | Pointer to **bool** | If true indicates that item has fixed charge when it is attached to a reservation. | [optional] 
**Inventories** | Pointer to [**DailyItemInventoryCountsListType**](DailyItemInventoryCountsListType.md) |  | [optional] 
**ItemHoldId** | Pointer to **float32** | ID reference for the hold Item | [optional] 
**ItemPool** | Pointer to **bool** | Indicates if it is an item pool. Not applicable for Item within the Item Pool. | [optional] 
**Name** | Pointer to **string** | Name of an item. | [optional] 
**OutsideStay** | Pointer to **bool** | If true indicates that item could be held outside of the reservation stay days. | [optional] 
**PoolItems** | Pointer to [**ItemInventoryCountsListType**](ItemInventoryCountsListType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Quantity of hold Item | [optional] 
**RequiredForBooking** | Pointer to **bool** | If true indicates that item is required for the reservation. | [optional] 
**SellInEvent** | Pointer to **bool** | If true indicates that item can be sold in event. | [optional] 
**SellInReservation** | Pointer to **bool** | If true indicates that item can be sold in reservation. | [optional] 
**SellSeparate** | Pointer to **bool** | If true indicates that item is allowed to sell separately. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewPoolItemInventoryCountsType

`func NewPoolItemInventoryCountsType() *PoolItemInventoryCountsType`

NewPoolItemInventoryCountsType instantiates a new PoolItemInventoryCountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPoolItemInventoryCountsTypeWithDefaults

`func NewPoolItemInventoryCountsTypeWithDefaults() *PoolItemInventoryCountsType`

NewPoolItemInventoryCountsTypeWithDefaults instantiates a new PoolItemInventoryCountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailabilityPeriod

`func (o *PoolItemInventoryCountsType) GetAvailabilityPeriod() TimeWindowType`

GetAvailabilityPeriod returns the AvailabilityPeriod field if non-nil, zero value otherwise.

### GetAvailabilityPeriodOk

`func (o *PoolItemInventoryCountsType) GetAvailabilityPeriodOk() (*TimeWindowType, bool)`

GetAvailabilityPeriodOk returns a tuple with the AvailabilityPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailabilityPeriod

`func (o *PoolItemInventoryCountsType) SetAvailabilityPeriod(v TimeWindowType)`

SetAvailabilityPeriod sets AvailabilityPeriod field to given value.

### HasAvailabilityPeriod

`func (o *PoolItemInventoryCountsType) HasAvailabilityPeriod() bool`

HasAvailabilityPeriod returns a boolean if a field has been set.

### GetCode

`func (o *PoolItemInventoryCountsType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PoolItemInventoryCountsType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PoolItemInventoryCountsType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PoolItemInventoryCountsType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefaultDuration

`func (o *PoolItemInventoryCountsType) GetDefaultDuration() int32`

GetDefaultDuration returns the DefaultDuration field if non-nil, zero value otherwise.

### GetDefaultDurationOk

`func (o *PoolItemInventoryCountsType) GetDefaultDurationOk() (*int32, bool)`

GetDefaultDurationOk returns a tuple with the DefaultDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDuration

`func (o *PoolItemInventoryCountsType) SetDefaultDuration(v int32)`

SetDefaultDuration sets DefaultDuration field to given value.

### HasDefaultDuration

`func (o *PoolItemInventoryCountsType) HasDefaultDuration() bool`

HasDefaultDuration returns a boolean if a field has been set.

### GetDescription

`func (o *PoolItemInventoryCountsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PoolItemInventoryCountsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PoolItemInventoryCountsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PoolItemInventoryCountsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFixedCharge

`func (o *PoolItemInventoryCountsType) GetFixedCharge() bool`

GetFixedCharge returns the FixedCharge field if non-nil, zero value otherwise.

### GetFixedChargeOk

`func (o *PoolItemInventoryCountsType) GetFixedChargeOk() (*bool, bool)`

GetFixedChargeOk returns a tuple with the FixedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharge

`func (o *PoolItemInventoryCountsType) SetFixedCharge(v bool)`

SetFixedCharge sets FixedCharge field to given value.

### HasFixedCharge

`func (o *PoolItemInventoryCountsType) HasFixedCharge() bool`

HasFixedCharge returns a boolean if a field has been set.

### GetInventories

`func (o *PoolItemInventoryCountsType) GetInventories() DailyItemInventoryCountsListType`

GetInventories returns the Inventories field if non-nil, zero value otherwise.

### GetInventoriesOk

`func (o *PoolItemInventoryCountsType) GetInventoriesOk() (*DailyItemInventoryCountsListType, bool)`

GetInventoriesOk returns a tuple with the Inventories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventories

`func (o *PoolItemInventoryCountsType) SetInventories(v DailyItemInventoryCountsListType)`

SetInventories sets Inventories field to given value.

### HasInventories

`func (o *PoolItemInventoryCountsType) HasInventories() bool`

HasInventories returns a boolean if a field has been set.

### GetItemHoldId

`func (o *PoolItemInventoryCountsType) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *PoolItemInventoryCountsType) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *PoolItemInventoryCountsType) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *PoolItemInventoryCountsType) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetItemPool

`func (o *PoolItemInventoryCountsType) GetItemPool() bool`

GetItemPool returns the ItemPool field if non-nil, zero value otherwise.

### GetItemPoolOk

`func (o *PoolItemInventoryCountsType) GetItemPoolOk() (*bool, bool)`

GetItemPoolOk returns a tuple with the ItemPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemPool

`func (o *PoolItemInventoryCountsType) SetItemPool(v bool)`

SetItemPool sets ItemPool field to given value.

### HasItemPool

`func (o *PoolItemInventoryCountsType) HasItemPool() bool`

HasItemPool returns a boolean if a field has been set.

### GetName

`func (o *PoolItemInventoryCountsType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PoolItemInventoryCountsType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PoolItemInventoryCountsType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PoolItemInventoryCountsType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOutsideStay

`func (o *PoolItemInventoryCountsType) GetOutsideStay() bool`

GetOutsideStay returns the OutsideStay field if non-nil, zero value otherwise.

### GetOutsideStayOk

`func (o *PoolItemInventoryCountsType) GetOutsideStayOk() (*bool, bool)`

GetOutsideStayOk returns a tuple with the OutsideStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutsideStay

`func (o *PoolItemInventoryCountsType) SetOutsideStay(v bool)`

SetOutsideStay sets OutsideStay field to given value.

### HasOutsideStay

`func (o *PoolItemInventoryCountsType) HasOutsideStay() bool`

HasOutsideStay returns a boolean if a field has been set.

### GetPoolItems

`func (o *PoolItemInventoryCountsType) GetPoolItems() ItemInventoryCountsListType`

GetPoolItems returns the PoolItems field if non-nil, zero value otherwise.

### GetPoolItemsOk

`func (o *PoolItemInventoryCountsType) GetPoolItemsOk() (*ItemInventoryCountsListType, bool)`

GetPoolItemsOk returns a tuple with the PoolItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoolItems

`func (o *PoolItemInventoryCountsType) SetPoolItems(v ItemInventoryCountsListType)`

SetPoolItems sets PoolItems field to given value.

### HasPoolItems

`func (o *PoolItemInventoryCountsType) HasPoolItems() bool`

HasPoolItems returns a boolean if a field has been set.

### GetQuantity

`func (o *PoolItemInventoryCountsType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *PoolItemInventoryCountsType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *PoolItemInventoryCountsType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *PoolItemInventoryCountsType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRequiredForBooking

`func (o *PoolItemInventoryCountsType) GetRequiredForBooking() bool`

GetRequiredForBooking returns the RequiredForBooking field if non-nil, zero value otherwise.

### GetRequiredForBookingOk

`func (o *PoolItemInventoryCountsType) GetRequiredForBookingOk() (*bool, bool)`

GetRequiredForBookingOk returns a tuple with the RequiredForBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredForBooking

`func (o *PoolItemInventoryCountsType) SetRequiredForBooking(v bool)`

SetRequiredForBooking sets RequiredForBooking field to given value.

### HasRequiredForBooking

`func (o *PoolItemInventoryCountsType) HasRequiredForBooking() bool`

HasRequiredForBooking returns a boolean if a field has been set.

### GetSellInEvent

`func (o *PoolItemInventoryCountsType) GetSellInEvent() bool`

GetSellInEvent returns the SellInEvent field if non-nil, zero value otherwise.

### GetSellInEventOk

`func (o *PoolItemInventoryCountsType) GetSellInEventOk() (*bool, bool)`

GetSellInEventOk returns a tuple with the SellInEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInEvent

`func (o *PoolItemInventoryCountsType) SetSellInEvent(v bool)`

SetSellInEvent sets SellInEvent field to given value.

### HasSellInEvent

`func (o *PoolItemInventoryCountsType) HasSellInEvent() bool`

HasSellInEvent returns a boolean if a field has been set.

### GetSellInReservation

`func (o *PoolItemInventoryCountsType) GetSellInReservation() bool`

GetSellInReservation returns the SellInReservation field if non-nil, zero value otherwise.

### GetSellInReservationOk

`func (o *PoolItemInventoryCountsType) GetSellInReservationOk() (*bool, bool)`

GetSellInReservationOk returns a tuple with the SellInReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInReservation

`func (o *PoolItemInventoryCountsType) SetSellInReservation(v bool)`

SetSellInReservation sets SellInReservation field to given value.

### HasSellInReservation

`func (o *PoolItemInventoryCountsType) HasSellInReservation() bool`

HasSellInReservation returns a boolean if a field has been set.

### GetSellSeparate

`func (o *PoolItemInventoryCountsType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *PoolItemInventoryCountsType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *PoolItemInventoryCountsType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *PoolItemInventoryCountsType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetTimeSpan

`func (o *PoolItemInventoryCountsType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *PoolItemInventoryCountsType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *PoolItemInventoryCountsType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *PoolItemInventoryCountsType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


