# InventoryItemTypeSellInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**AvailableQty** | Pointer to **float32** | Available quantity during a period of time. | [optional] 
**QtyInStock** | Pointer to **float32** | Item quantity in Stock. | [optional] 
**DefaultQty** | Pointer to **float32** | Defines the default quantity when booking the Item. | [optional] 
**SellSeparate** | Pointer to **bool** | If true, the item could be sold separately. | [optional] 
**SellControl** | Pointer to **bool** | If true, item is mandatory for booking. | [optional] 
**WelcomeOffer** | Pointer to **bool** | If true, the item can be attached as part of a Welcome Offer | [optional] 
**WebBookable** | Pointer to **bool** | If true, web booking is allowed. | [optional] 
**ItemClassWebBookable** | Pointer to **bool** | Specifies if web booking is allowed for the Item Class. | [optional] 
**OutsideStay** | Pointer to **bool** | Define if the the Item could be held outside of the reservation stay days. | [optional] 
**FixedCharge** | Pointer to **bool** | If true, the Fixed Charges screen will be automatically displayed when this item gets attached to a reservation. | [optional] 
**Discountable** | Pointer to **bool** | Specifies if a discount is allowed for this item. | [optional] 
**ItemClassDiscountable** | Pointer to **bool** | Specifies if a discount is allowed for the Item Class. | [optional] 
**CriticalInventory** | Pointer to **bool** | Flag to issue a warning if this inventory item is overbooked. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DefaultDuration** | Pointer to **int32** | Define the default duration days when booking the Item. | [optional] 

## Methods

### NewInventoryItemTypeSellInfo

`func NewInventoryItemTypeSellInfo() *InventoryItemTypeSellInfo`

NewInventoryItemTypeSellInfo instantiates a new InventoryItemTypeSellInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemTypeSellInfoWithDefaults

`func NewInventoryItemTypeSellInfoWithDefaults() *InventoryItemTypeSellInfo`

NewInventoryItemTypeSellInfoWithDefaults instantiates a new InventoryItemTypeSellInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *InventoryItemTypeSellInfo) GetAvailable() DateTimeSpanType`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *InventoryItemTypeSellInfo) GetAvailableOk() (*DateTimeSpanType, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *InventoryItemTypeSellInfo) SetAvailable(v DateTimeSpanType)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *InventoryItemTypeSellInfo) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetAvailableQty

`func (o *InventoryItemTypeSellInfo) GetAvailableQty() float32`

GetAvailableQty returns the AvailableQty field if non-nil, zero value otherwise.

### GetAvailableQtyOk

`func (o *InventoryItemTypeSellInfo) GetAvailableQtyOk() (*float32, bool)`

GetAvailableQtyOk returns a tuple with the AvailableQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableQty

`func (o *InventoryItemTypeSellInfo) SetAvailableQty(v float32)`

SetAvailableQty sets AvailableQty field to given value.

### HasAvailableQty

`func (o *InventoryItemTypeSellInfo) HasAvailableQty() bool`

HasAvailableQty returns a boolean if a field has been set.

### GetQtyInStock

`func (o *InventoryItemTypeSellInfo) GetQtyInStock() float32`

GetQtyInStock returns the QtyInStock field if non-nil, zero value otherwise.

### GetQtyInStockOk

`func (o *InventoryItemTypeSellInfo) GetQtyInStockOk() (*float32, bool)`

GetQtyInStockOk returns a tuple with the QtyInStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQtyInStock

`func (o *InventoryItemTypeSellInfo) SetQtyInStock(v float32)`

SetQtyInStock sets QtyInStock field to given value.

### HasQtyInStock

`func (o *InventoryItemTypeSellInfo) HasQtyInStock() bool`

HasQtyInStock returns a boolean if a field has been set.

### GetDefaultQty

`func (o *InventoryItemTypeSellInfo) GetDefaultQty() float32`

GetDefaultQty returns the DefaultQty field if non-nil, zero value otherwise.

### GetDefaultQtyOk

`func (o *InventoryItemTypeSellInfo) GetDefaultQtyOk() (*float32, bool)`

GetDefaultQtyOk returns a tuple with the DefaultQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultQty

`func (o *InventoryItemTypeSellInfo) SetDefaultQty(v float32)`

SetDefaultQty sets DefaultQty field to given value.

### HasDefaultQty

`func (o *InventoryItemTypeSellInfo) HasDefaultQty() bool`

HasDefaultQty returns a boolean if a field has been set.

### GetSellSeparate

`func (o *InventoryItemTypeSellInfo) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *InventoryItemTypeSellInfo) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *InventoryItemTypeSellInfo) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *InventoryItemTypeSellInfo) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetSellControl

`func (o *InventoryItemTypeSellInfo) GetSellControl() bool`

GetSellControl returns the SellControl field if non-nil, zero value otherwise.

### GetSellControlOk

`func (o *InventoryItemTypeSellInfo) GetSellControlOk() (*bool, bool)`

GetSellControlOk returns a tuple with the SellControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellControl

`func (o *InventoryItemTypeSellInfo) SetSellControl(v bool)`

SetSellControl sets SellControl field to given value.

### HasSellControl

`func (o *InventoryItemTypeSellInfo) HasSellControl() bool`

HasSellControl returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *InventoryItemTypeSellInfo) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *InventoryItemTypeSellInfo) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *InventoryItemTypeSellInfo) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *InventoryItemTypeSellInfo) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.

### GetWebBookable

`func (o *InventoryItemTypeSellInfo) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *InventoryItemTypeSellInfo) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *InventoryItemTypeSellInfo) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *InventoryItemTypeSellInfo) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetItemClassWebBookable

`func (o *InventoryItemTypeSellInfo) GetItemClassWebBookable() bool`

GetItemClassWebBookable returns the ItemClassWebBookable field if non-nil, zero value otherwise.

### GetItemClassWebBookableOk

`func (o *InventoryItemTypeSellInfo) GetItemClassWebBookableOk() (*bool, bool)`

GetItemClassWebBookableOk returns a tuple with the ItemClassWebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassWebBookable

`func (o *InventoryItemTypeSellInfo) SetItemClassWebBookable(v bool)`

SetItemClassWebBookable sets ItemClassWebBookable field to given value.

### HasItemClassWebBookable

`func (o *InventoryItemTypeSellInfo) HasItemClassWebBookable() bool`

HasItemClassWebBookable returns a boolean if a field has been set.

### GetOutsideStay

`func (o *InventoryItemTypeSellInfo) GetOutsideStay() bool`

GetOutsideStay returns the OutsideStay field if non-nil, zero value otherwise.

### GetOutsideStayOk

`func (o *InventoryItemTypeSellInfo) GetOutsideStayOk() (*bool, bool)`

GetOutsideStayOk returns a tuple with the OutsideStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutsideStay

`func (o *InventoryItemTypeSellInfo) SetOutsideStay(v bool)`

SetOutsideStay sets OutsideStay field to given value.

### HasOutsideStay

`func (o *InventoryItemTypeSellInfo) HasOutsideStay() bool`

HasOutsideStay returns a boolean if a field has been set.

### GetFixedCharge

`func (o *InventoryItemTypeSellInfo) GetFixedCharge() bool`

GetFixedCharge returns the FixedCharge field if non-nil, zero value otherwise.

### GetFixedChargeOk

`func (o *InventoryItemTypeSellInfo) GetFixedChargeOk() (*bool, bool)`

GetFixedChargeOk returns a tuple with the FixedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharge

`func (o *InventoryItemTypeSellInfo) SetFixedCharge(v bool)`

SetFixedCharge sets FixedCharge field to given value.

### HasFixedCharge

`func (o *InventoryItemTypeSellInfo) HasFixedCharge() bool`

HasFixedCharge returns a boolean if a field has been set.

### GetDiscountable

`func (o *InventoryItemTypeSellInfo) GetDiscountable() bool`

GetDiscountable returns the Discountable field if non-nil, zero value otherwise.

### GetDiscountableOk

`func (o *InventoryItemTypeSellInfo) GetDiscountableOk() (*bool, bool)`

GetDiscountableOk returns a tuple with the Discountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountable

`func (o *InventoryItemTypeSellInfo) SetDiscountable(v bool)`

SetDiscountable sets Discountable field to given value.

### HasDiscountable

`func (o *InventoryItemTypeSellInfo) HasDiscountable() bool`

HasDiscountable returns a boolean if a field has been set.

### GetItemClassDiscountable

`func (o *InventoryItemTypeSellInfo) GetItemClassDiscountable() bool`

GetItemClassDiscountable returns the ItemClassDiscountable field if non-nil, zero value otherwise.

### GetItemClassDiscountableOk

`func (o *InventoryItemTypeSellInfo) GetItemClassDiscountableOk() (*bool, bool)`

GetItemClassDiscountableOk returns a tuple with the ItemClassDiscountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDiscountable

`func (o *InventoryItemTypeSellInfo) SetItemClassDiscountable(v bool)`

SetItemClassDiscountable sets ItemClassDiscountable field to given value.

### HasItemClassDiscountable

`func (o *InventoryItemTypeSellInfo) HasItemClassDiscountable() bool`

HasItemClassDiscountable returns a boolean if a field has been set.

### GetCriticalInventory

`func (o *InventoryItemTypeSellInfo) GetCriticalInventory() bool`

GetCriticalInventory returns the CriticalInventory field if non-nil, zero value otherwise.

### GetCriticalInventoryOk

`func (o *InventoryItemTypeSellInfo) GetCriticalInventoryOk() (*bool, bool)`

GetCriticalInventoryOk returns a tuple with the CriticalInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriticalInventory

`func (o *InventoryItemTypeSellInfo) SetCriticalInventory(v bool)`

SetCriticalInventory sets CriticalInventory field to given value.

### HasCriticalInventory

`func (o *InventoryItemTypeSellInfo) HasCriticalInventory() bool`

HasCriticalInventory returns a boolean if a field has been set.

### GetPrice

`func (o *InventoryItemTypeSellInfo) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *InventoryItemTypeSellInfo) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *InventoryItemTypeSellInfo) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *InventoryItemTypeSellInfo) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetDefaultDuration

`func (o *InventoryItemTypeSellInfo) GetDefaultDuration() int32`

GetDefaultDuration returns the DefaultDuration field if non-nil, zero value otherwise.

### GetDefaultDurationOk

`func (o *InventoryItemTypeSellInfo) GetDefaultDurationOk() (*int32, bool)`

GetDefaultDurationOk returns a tuple with the DefaultDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDuration

`func (o *InventoryItemTypeSellInfo) SetDefaultDuration(v int32)`

SetDefaultDuration sets DefaultDuration field to given value.

### HasDefaultDuration

`func (o *InventoryItemTypeSellInfo) HasDefaultDuration() bool`

HasDefaultDuration returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


