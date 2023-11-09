# ItemInventoryCountsType

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
**Quantity** | Pointer to **int32** | Quantity of hold Item | [optional] 
**RequiredForBooking** | Pointer to **bool** | If true indicates that item is required for the reservation. | [optional] 
**SellInEvent** | Pointer to **bool** | If true indicates that item can be sold in event. | [optional] 
**SellInReservation** | Pointer to **bool** | If true indicates that item can be sold in reservation. | [optional] 
**SellSeparate** | Pointer to **bool** | If true indicates that item is allowed to sell separately. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewItemInventoryCountsType

`func NewItemInventoryCountsType() *ItemInventoryCountsType`

NewItemInventoryCountsType instantiates a new ItemInventoryCountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemInventoryCountsTypeWithDefaults

`func NewItemInventoryCountsTypeWithDefaults() *ItemInventoryCountsType`

NewItemInventoryCountsTypeWithDefaults instantiates a new ItemInventoryCountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailabilityPeriod

`func (o *ItemInventoryCountsType) GetAvailabilityPeriod() TimeWindowType`

GetAvailabilityPeriod returns the AvailabilityPeriod field if non-nil, zero value otherwise.

### GetAvailabilityPeriodOk

`func (o *ItemInventoryCountsType) GetAvailabilityPeriodOk() (*TimeWindowType, bool)`

GetAvailabilityPeriodOk returns a tuple with the AvailabilityPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailabilityPeriod

`func (o *ItemInventoryCountsType) SetAvailabilityPeriod(v TimeWindowType)`

SetAvailabilityPeriod sets AvailabilityPeriod field to given value.

### HasAvailabilityPeriod

`func (o *ItemInventoryCountsType) HasAvailabilityPeriod() bool`

HasAvailabilityPeriod returns a boolean if a field has been set.

### GetCode

`func (o *ItemInventoryCountsType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ItemInventoryCountsType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ItemInventoryCountsType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ItemInventoryCountsType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefaultDuration

`func (o *ItemInventoryCountsType) GetDefaultDuration() int32`

GetDefaultDuration returns the DefaultDuration field if non-nil, zero value otherwise.

### GetDefaultDurationOk

`func (o *ItemInventoryCountsType) GetDefaultDurationOk() (*int32, bool)`

GetDefaultDurationOk returns a tuple with the DefaultDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDuration

`func (o *ItemInventoryCountsType) SetDefaultDuration(v int32)`

SetDefaultDuration sets DefaultDuration field to given value.

### HasDefaultDuration

`func (o *ItemInventoryCountsType) HasDefaultDuration() bool`

HasDefaultDuration returns a boolean if a field has been set.

### GetDescription

`func (o *ItemInventoryCountsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ItemInventoryCountsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ItemInventoryCountsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ItemInventoryCountsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFixedCharge

`func (o *ItemInventoryCountsType) GetFixedCharge() bool`

GetFixedCharge returns the FixedCharge field if non-nil, zero value otherwise.

### GetFixedChargeOk

`func (o *ItemInventoryCountsType) GetFixedChargeOk() (*bool, bool)`

GetFixedChargeOk returns a tuple with the FixedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharge

`func (o *ItemInventoryCountsType) SetFixedCharge(v bool)`

SetFixedCharge sets FixedCharge field to given value.

### HasFixedCharge

`func (o *ItemInventoryCountsType) HasFixedCharge() bool`

HasFixedCharge returns a boolean if a field has been set.

### GetInventories

`func (o *ItemInventoryCountsType) GetInventories() DailyItemInventoryCountsListType`

GetInventories returns the Inventories field if non-nil, zero value otherwise.

### GetInventoriesOk

`func (o *ItemInventoryCountsType) GetInventoriesOk() (*DailyItemInventoryCountsListType, bool)`

GetInventoriesOk returns a tuple with the Inventories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventories

`func (o *ItemInventoryCountsType) SetInventories(v DailyItemInventoryCountsListType)`

SetInventories sets Inventories field to given value.

### HasInventories

`func (o *ItemInventoryCountsType) HasInventories() bool`

HasInventories returns a boolean if a field has been set.

### GetItemHoldId

`func (o *ItemInventoryCountsType) GetItemHoldId() float32`

GetItemHoldId returns the ItemHoldId field if non-nil, zero value otherwise.

### GetItemHoldIdOk

`func (o *ItemInventoryCountsType) GetItemHoldIdOk() (*float32, bool)`

GetItemHoldIdOk returns a tuple with the ItemHoldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldId

`func (o *ItemInventoryCountsType) SetItemHoldId(v float32)`

SetItemHoldId sets ItemHoldId field to given value.

### HasItemHoldId

`func (o *ItemInventoryCountsType) HasItemHoldId() bool`

HasItemHoldId returns a boolean if a field has been set.

### GetItemPool

`func (o *ItemInventoryCountsType) GetItemPool() bool`

GetItemPool returns the ItemPool field if non-nil, zero value otherwise.

### GetItemPoolOk

`func (o *ItemInventoryCountsType) GetItemPoolOk() (*bool, bool)`

GetItemPoolOk returns a tuple with the ItemPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemPool

`func (o *ItemInventoryCountsType) SetItemPool(v bool)`

SetItemPool sets ItemPool field to given value.

### HasItemPool

`func (o *ItemInventoryCountsType) HasItemPool() bool`

HasItemPool returns a boolean if a field has been set.

### GetName

`func (o *ItemInventoryCountsType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ItemInventoryCountsType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ItemInventoryCountsType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ItemInventoryCountsType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOutsideStay

`func (o *ItemInventoryCountsType) GetOutsideStay() bool`

GetOutsideStay returns the OutsideStay field if non-nil, zero value otherwise.

### GetOutsideStayOk

`func (o *ItemInventoryCountsType) GetOutsideStayOk() (*bool, bool)`

GetOutsideStayOk returns a tuple with the OutsideStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutsideStay

`func (o *ItemInventoryCountsType) SetOutsideStay(v bool)`

SetOutsideStay sets OutsideStay field to given value.

### HasOutsideStay

`func (o *ItemInventoryCountsType) HasOutsideStay() bool`

HasOutsideStay returns a boolean if a field has been set.

### GetQuantity

`func (o *ItemInventoryCountsType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ItemInventoryCountsType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ItemInventoryCountsType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ItemInventoryCountsType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRequiredForBooking

`func (o *ItemInventoryCountsType) GetRequiredForBooking() bool`

GetRequiredForBooking returns the RequiredForBooking field if non-nil, zero value otherwise.

### GetRequiredForBookingOk

`func (o *ItemInventoryCountsType) GetRequiredForBookingOk() (*bool, bool)`

GetRequiredForBookingOk returns a tuple with the RequiredForBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredForBooking

`func (o *ItemInventoryCountsType) SetRequiredForBooking(v bool)`

SetRequiredForBooking sets RequiredForBooking field to given value.

### HasRequiredForBooking

`func (o *ItemInventoryCountsType) HasRequiredForBooking() bool`

HasRequiredForBooking returns a boolean if a field has been set.

### GetSellInEvent

`func (o *ItemInventoryCountsType) GetSellInEvent() bool`

GetSellInEvent returns the SellInEvent field if non-nil, zero value otherwise.

### GetSellInEventOk

`func (o *ItemInventoryCountsType) GetSellInEventOk() (*bool, bool)`

GetSellInEventOk returns a tuple with the SellInEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInEvent

`func (o *ItemInventoryCountsType) SetSellInEvent(v bool)`

SetSellInEvent sets SellInEvent field to given value.

### HasSellInEvent

`func (o *ItemInventoryCountsType) HasSellInEvent() bool`

HasSellInEvent returns a boolean if a field has been set.

### GetSellInReservation

`func (o *ItemInventoryCountsType) GetSellInReservation() bool`

GetSellInReservation returns the SellInReservation field if non-nil, zero value otherwise.

### GetSellInReservationOk

`func (o *ItemInventoryCountsType) GetSellInReservationOk() (*bool, bool)`

GetSellInReservationOk returns a tuple with the SellInReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInReservation

`func (o *ItemInventoryCountsType) SetSellInReservation(v bool)`

SetSellInReservation sets SellInReservation field to given value.

### HasSellInReservation

`func (o *ItemInventoryCountsType) HasSellInReservation() bool`

HasSellInReservation returns a boolean if a field has been set.

### GetSellSeparate

`func (o *ItemInventoryCountsType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *ItemInventoryCountsType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *ItemInventoryCountsType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *ItemInventoryCountsType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ItemInventoryCountsType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ItemInventoryCountsType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ItemInventoryCountsType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ItemInventoryCountsType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


