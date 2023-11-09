# EventItemTypeSellInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**AvailableQty** | Pointer to **float32** | Available quantity during a period of time. | [optional] 
**CriticalInventory** | Pointer to **bool** | Flag to issue a warning if this inventory item is overbooked. | [optional] 
**DefaultDuration** | Pointer to **int32** | Define the default duration days when booking the Item. | [optional] 
**DefaultQty** | Pointer to **float32** | Defines the default quantity when booking the Item. | [optional] 
**Discountable** | Pointer to **bool** | Specifies if a discount is allowed for this item. | [optional] 
**FixedCharge** | Pointer to **bool** | If true, the Fixed Charges screen will be automatically displayed when this item gets attached to a reservation. | [optional] 
**ItemClassDiscountable** | Pointer to **bool** | Specifies if a discount is allowed for the Item Class. | [optional] 
**ItemClassWebBookable** | Pointer to **bool** | Specifies if web booking is allowed for the Item Class. | [optional] 
**OutsideStay** | Pointer to **bool** | Define if the the Item could be held outside of the reservation stay days. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**QtyInStock** | Pointer to **float32** | Item quantity in Stock. | [optional] 
**SellControl** | Pointer to **bool** | If true, item is mandatory for booking. | [optional] 
**SellSeparate** | Pointer to **bool** | If true, the item could be sold separately. | [optional] 
**WebBookable** | Pointer to **bool** | If true, web booking is allowed. | [optional] 
**WelcomeOffer** | Pointer to **bool** | If true, the item can be attached as part of a Welcome Offer | [optional] 

## Methods

### NewEventItemTypeSellInfo

`func NewEventItemTypeSellInfo() *EventItemTypeSellInfo`

NewEventItemTypeSellInfo instantiates a new EventItemTypeSellInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventItemTypeSellInfoWithDefaults

`func NewEventItemTypeSellInfoWithDefaults() *EventItemTypeSellInfo`

NewEventItemTypeSellInfoWithDefaults instantiates a new EventItemTypeSellInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *EventItemTypeSellInfo) GetAvailable() DateTimeSpanType`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *EventItemTypeSellInfo) GetAvailableOk() (*DateTimeSpanType, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *EventItemTypeSellInfo) SetAvailable(v DateTimeSpanType)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *EventItemTypeSellInfo) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetAvailableQty

`func (o *EventItemTypeSellInfo) GetAvailableQty() float32`

GetAvailableQty returns the AvailableQty field if non-nil, zero value otherwise.

### GetAvailableQtyOk

`func (o *EventItemTypeSellInfo) GetAvailableQtyOk() (*float32, bool)`

GetAvailableQtyOk returns a tuple with the AvailableQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableQty

`func (o *EventItemTypeSellInfo) SetAvailableQty(v float32)`

SetAvailableQty sets AvailableQty field to given value.

### HasAvailableQty

`func (o *EventItemTypeSellInfo) HasAvailableQty() bool`

HasAvailableQty returns a boolean if a field has been set.

### GetCriticalInventory

`func (o *EventItemTypeSellInfo) GetCriticalInventory() bool`

GetCriticalInventory returns the CriticalInventory field if non-nil, zero value otherwise.

### GetCriticalInventoryOk

`func (o *EventItemTypeSellInfo) GetCriticalInventoryOk() (*bool, bool)`

GetCriticalInventoryOk returns a tuple with the CriticalInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriticalInventory

`func (o *EventItemTypeSellInfo) SetCriticalInventory(v bool)`

SetCriticalInventory sets CriticalInventory field to given value.

### HasCriticalInventory

`func (o *EventItemTypeSellInfo) HasCriticalInventory() bool`

HasCriticalInventory returns a boolean if a field has been set.

### GetDefaultDuration

`func (o *EventItemTypeSellInfo) GetDefaultDuration() int32`

GetDefaultDuration returns the DefaultDuration field if non-nil, zero value otherwise.

### GetDefaultDurationOk

`func (o *EventItemTypeSellInfo) GetDefaultDurationOk() (*int32, bool)`

GetDefaultDurationOk returns a tuple with the DefaultDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDuration

`func (o *EventItemTypeSellInfo) SetDefaultDuration(v int32)`

SetDefaultDuration sets DefaultDuration field to given value.

### HasDefaultDuration

`func (o *EventItemTypeSellInfo) HasDefaultDuration() bool`

HasDefaultDuration returns a boolean if a field has been set.

### GetDefaultQty

`func (o *EventItemTypeSellInfo) GetDefaultQty() float32`

GetDefaultQty returns the DefaultQty field if non-nil, zero value otherwise.

### GetDefaultQtyOk

`func (o *EventItemTypeSellInfo) GetDefaultQtyOk() (*float32, bool)`

GetDefaultQtyOk returns a tuple with the DefaultQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultQty

`func (o *EventItemTypeSellInfo) SetDefaultQty(v float32)`

SetDefaultQty sets DefaultQty field to given value.

### HasDefaultQty

`func (o *EventItemTypeSellInfo) HasDefaultQty() bool`

HasDefaultQty returns a boolean if a field has been set.

### GetDiscountable

`func (o *EventItemTypeSellInfo) GetDiscountable() bool`

GetDiscountable returns the Discountable field if non-nil, zero value otherwise.

### GetDiscountableOk

`func (o *EventItemTypeSellInfo) GetDiscountableOk() (*bool, bool)`

GetDiscountableOk returns a tuple with the Discountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountable

`func (o *EventItemTypeSellInfo) SetDiscountable(v bool)`

SetDiscountable sets Discountable field to given value.

### HasDiscountable

`func (o *EventItemTypeSellInfo) HasDiscountable() bool`

HasDiscountable returns a boolean if a field has been set.

### GetFixedCharge

`func (o *EventItemTypeSellInfo) GetFixedCharge() bool`

GetFixedCharge returns the FixedCharge field if non-nil, zero value otherwise.

### GetFixedChargeOk

`func (o *EventItemTypeSellInfo) GetFixedChargeOk() (*bool, bool)`

GetFixedChargeOk returns a tuple with the FixedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharge

`func (o *EventItemTypeSellInfo) SetFixedCharge(v bool)`

SetFixedCharge sets FixedCharge field to given value.

### HasFixedCharge

`func (o *EventItemTypeSellInfo) HasFixedCharge() bool`

HasFixedCharge returns a boolean if a field has been set.

### GetItemClassDiscountable

`func (o *EventItemTypeSellInfo) GetItemClassDiscountable() bool`

GetItemClassDiscountable returns the ItemClassDiscountable field if non-nil, zero value otherwise.

### GetItemClassDiscountableOk

`func (o *EventItemTypeSellInfo) GetItemClassDiscountableOk() (*bool, bool)`

GetItemClassDiscountableOk returns a tuple with the ItemClassDiscountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDiscountable

`func (o *EventItemTypeSellInfo) SetItemClassDiscountable(v bool)`

SetItemClassDiscountable sets ItemClassDiscountable field to given value.

### HasItemClassDiscountable

`func (o *EventItemTypeSellInfo) HasItemClassDiscountable() bool`

HasItemClassDiscountable returns a boolean if a field has been set.

### GetItemClassWebBookable

`func (o *EventItemTypeSellInfo) GetItemClassWebBookable() bool`

GetItemClassWebBookable returns the ItemClassWebBookable field if non-nil, zero value otherwise.

### GetItemClassWebBookableOk

`func (o *EventItemTypeSellInfo) GetItemClassWebBookableOk() (*bool, bool)`

GetItemClassWebBookableOk returns a tuple with the ItemClassWebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassWebBookable

`func (o *EventItemTypeSellInfo) SetItemClassWebBookable(v bool)`

SetItemClassWebBookable sets ItemClassWebBookable field to given value.

### HasItemClassWebBookable

`func (o *EventItemTypeSellInfo) HasItemClassWebBookable() bool`

HasItemClassWebBookable returns a boolean if a field has been set.

### GetOutsideStay

`func (o *EventItemTypeSellInfo) GetOutsideStay() bool`

GetOutsideStay returns the OutsideStay field if non-nil, zero value otherwise.

### GetOutsideStayOk

`func (o *EventItemTypeSellInfo) GetOutsideStayOk() (*bool, bool)`

GetOutsideStayOk returns a tuple with the OutsideStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutsideStay

`func (o *EventItemTypeSellInfo) SetOutsideStay(v bool)`

SetOutsideStay sets OutsideStay field to given value.

### HasOutsideStay

`func (o *EventItemTypeSellInfo) HasOutsideStay() bool`

HasOutsideStay returns a boolean if a field has been set.

### GetPrice

`func (o *EventItemTypeSellInfo) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *EventItemTypeSellInfo) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *EventItemTypeSellInfo) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *EventItemTypeSellInfo) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQtyInStock

`func (o *EventItemTypeSellInfo) GetQtyInStock() float32`

GetQtyInStock returns the QtyInStock field if non-nil, zero value otherwise.

### GetQtyInStockOk

`func (o *EventItemTypeSellInfo) GetQtyInStockOk() (*float32, bool)`

GetQtyInStockOk returns a tuple with the QtyInStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQtyInStock

`func (o *EventItemTypeSellInfo) SetQtyInStock(v float32)`

SetQtyInStock sets QtyInStock field to given value.

### HasQtyInStock

`func (o *EventItemTypeSellInfo) HasQtyInStock() bool`

HasQtyInStock returns a boolean if a field has been set.

### GetSellControl

`func (o *EventItemTypeSellInfo) GetSellControl() bool`

GetSellControl returns the SellControl field if non-nil, zero value otherwise.

### GetSellControlOk

`func (o *EventItemTypeSellInfo) GetSellControlOk() (*bool, bool)`

GetSellControlOk returns a tuple with the SellControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellControl

`func (o *EventItemTypeSellInfo) SetSellControl(v bool)`

SetSellControl sets SellControl field to given value.

### HasSellControl

`func (o *EventItemTypeSellInfo) HasSellControl() bool`

HasSellControl returns a boolean if a field has been set.

### GetSellSeparate

`func (o *EventItemTypeSellInfo) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *EventItemTypeSellInfo) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *EventItemTypeSellInfo) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *EventItemTypeSellInfo) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetWebBookable

`func (o *EventItemTypeSellInfo) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *EventItemTypeSellInfo) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *EventItemTypeSellInfo) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *EventItemTypeSellInfo) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *EventItemTypeSellInfo) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *EventItemTypeSellInfo) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *EventItemTypeSellInfo) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *EventItemTypeSellInfo) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


