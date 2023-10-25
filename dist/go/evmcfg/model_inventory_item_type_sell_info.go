/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the InventoryItemTypeSellInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InventoryItemTypeSellInfo{}

// InventoryItemTypeSellInfo The Sell Information of the Item.
type InventoryItemTypeSellInfo struct {
	Available *DateTimeSpanType `json:"available,omitempty"`
	// Available quantity during a period of time.
	AvailableQty *float32 `json:"availableQty,omitempty"`
	// Flag to issue a warning if this inventory item is overbooked.
	CriticalInventory *bool `json:"criticalInventory,omitempty"`
	// Define the default duration days when booking the Item.
	DefaultDuration *int32 `json:"defaultDuration,omitempty"`
	// Defines the default quantity when booking the Item.
	DefaultQty *float32 `json:"defaultQty,omitempty"`
	// Specifies if a discount is allowed for this item.
	Discountable *bool `json:"discountable,omitempty"`
	// If true, the Fixed Charges screen will be automatically displayed when this item gets attached to a reservation.
	FixedCharge *bool `json:"fixedCharge,omitempty"`
	// Specifies if a discount is allowed for the Item Class.
	ItemClassDiscountable *bool `json:"itemClassDiscountable,omitempty"`
	// Specifies if web booking is allowed for the Item Class.
	ItemClassWebBookable *bool `json:"itemClassWebBookable,omitempty"`
	// Define if the the Item could be held outside of the reservation stay days.
	OutsideStay *bool `json:"outsideStay,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
	// Item quantity in Stock.
	QtyInStock *float32 `json:"qtyInStock,omitempty"`
	// If true, item is mandatory for booking.
	SellControl *bool `json:"sellControl,omitempty"`
	// If true, the item could be sold separately.
	SellSeparate *bool `json:"sellSeparate,omitempty"`
	// If true, web booking is allowed.
	WebBookable *bool `json:"webBookable,omitempty"`
	// If true, the item can be attached as part of a Welcome Offer
	WelcomeOffer *bool `json:"welcomeOffer,omitempty"`
}

// NewInventoryItemTypeSellInfo instantiates a new InventoryItemTypeSellInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryItemTypeSellInfo() *InventoryItemTypeSellInfo {
	this := InventoryItemTypeSellInfo{}
	return &this
}

// NewInventoryItemTypeSellInfoWithDefaults instantiates a new InventoryItemTypeSellInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryItemTypeSellInfoWithDefaults() *InventoryItemTypeSellInfo {
	this := InventoryItemTypeSellInfo{}
	return &this
}

// GetAvailable returns the Available field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetAvailable() DateTimeSpanType {
	if o == nil || IsNil(o.Available) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.Available
}

// GetAvailableOk returns a tuple with the Available field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetAvailableOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.Available) {
		return nil, false
	}
	return o.Available, true
}

// HasAvailable returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasAvailable() bool {
	if o != nil && !IsNil(o.Available) {
		return true
	}

	return false
}

// SetAvailable gets a reference to the given DateTimeSpanType and assigns it to the Available field.
func (o *InventoryItemTypeSellInfo) SetAvailable(v DateTimeSpanType) {
	o.Available = &v
}

// GetAvailableQty returns the AvailableQty field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetAvailableQty() float32 {
	if o == nil || IsNil(o.AvailableQty) {
		var ret float32
		return ret
	}
	return *o.AvailableQty
}

// GetAvailableQtyOk returns a tuple with the AvailableQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetAvailableQtyOk() (*float32, bool) {
	if o == nil || IsNil(o.AvailableQty) {
		return nil, false
	}
	return o.AvailableQty, true
}

// HasAvailableQty returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasAvailableQty() bool {
	if o != nil && !IsNil(o.AvailableQty) {
		return true
	}

	return false
}

// SetAvailableQty gets a reference to the given float32 and assigns it to the AvailableQty field.
func (o *InventoryItemTypeSellInfo) SetAvailableQty(v float32) {
	o.AvailableQty = &v
}

// GetCriticalInventory returns the CriticalInventory field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetCriticalInventory() bool {
	if o == nil || IsNil(o.CriticalInventory) {
		var ret bool
		return ret
	}
	return *o.CriticalInventory
}

// GetCriticalInventoryOk returns a tuple with the CriticalInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetCriticalInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.CriticalInventory) {
		return nil, false
	}
	return o.CriticalInventory, true
}

// HasCriticalInventory returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasCriticalInventory() bool {
	if o != nil && !IsNil(o.CriticalInventory) {
		return true
	}

	return false
}

// SetCriticalInventory gets a reference to the given bool and assigns it to the CriticalInventory field.
func (o *InventoryItemTypeSellInfo) SetCriticalInventory(v bool) {
	o.CriticalInventory = &v
}

// GetDefaultDuration returns the DefaultDuration field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetDefaultDuration() int32 {
	if o == nil || IsNil(o.DefaultDuration) {
		var ret int32
		return ret
	}
	return *o.DefaultDuration
}

// GetDefaultDurationOk returns a tuple with the DefaultDuration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetDefaultDurationOk() (*int32, bool) {
	if o == nil || IsNil(o.DefaultDuration) {
		return nil, false
	}
	return o.DefaultDuration, true
}

// HasDefaultDuration returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasDefaultDuration() bool {
	if o != nil && !IsNil(o.DefaultDuration) {
		return true
	}

	return false
}

// SetDefaultDuration gets a reference to the given int32 and assigns it to the DefaultDuration field.
func (o *InventoryItemTypeSellInfo) SetDefaultDuration(v int32) {
	o.DefaultDuration = &v
}

// GetDefaultQty returns the DefaultQty field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetDefaultQty() float32 {
	if o == nil || IsNil(o.DefaultQty) {
		var ret float32
		return ret
	}
	return *o.DefaultQty
}

// GetDefaultQtyOk returns a tuple with the DefaultQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetDefaultQtyOk() (*float32, bool) {
	if o == nil || IsNil(o.DefaultQty) {
		return nil, false
	}
	return o.DefaultQty, true
}

// HasDefaultQty returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasDefaultQty() bool {
	if o != nil && !IsNil(o.DefaultQty) {
		return true
	}

	return false
}

// SetDefaultQty gets a reference to the given float32 and assigns it to the DefaultQty field.
func (o *InventoryItemTypeSellInfo) SetDefaultQty(v float32) {
	o.DefaultQty = &v
}

// GetDiscountable returns the Discountable field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetDiscountable() bool {
	if o == nil || IsNil(o.Discountable) {
		var ret bool
		return ret
	}
	return *o.Discountable
}

// GetDiscountableOk returns a tuple with the Discountable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetDiscountableOk() (*bool, bool) {
	if o == nil || IsNil(o.Discountable) {
		return nil, false
	}
	return o.Discountable, true
}

// HasDiscountable returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasDiscountable() bool {
	if o != nil && !IsNil(o.Discountable) {
		return true
	}

	return false
}

// SetDiscountable gets a reference to the given bool and assigns it to the Discountable field.
func (o *InventoryItemTypeSellInfo) SetDiscountable(v bool) {
	o.Discountable = &v
}

// GetFixedCharge returns the FixedCharge field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetFixedCharge() bool {
	if o == nil || IsNil(o.FixedCharge) {
		var ret bool
		return ret
	}
	return *o.FixedCharge
}

// GetFixedChargeOk returns a tuple with the FixedCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetFixedChargeOk() (*bool, bool) {
	if o == nil || IsNil(o.FixedCharge) {
		return nil, false
	}
	return o.FixedCharge, true
}

// HasFixedCharge returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasFixedCharge() bool {
	if o != nil && !IsNil(o.FixedCharge) {
		return true
	}

	return false
}

// SetFixedCharge gets a reference to the given bool and assigns it to the FixedCharge field.
func (o *InventoryItemTypeSellInfo) SetFixedCharge(v bool) {
	o.FixedCharge = &v
}

// GetItemClassDiscountable returns the ItemClassDiscountable field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetItemClassDiscountable() bool {
	if o == nil || IsNil(o.ItemClassDiscountable) {
		var ret bool
		return ret
	}
	return *o.ItemClassDiscountable
}

// GetItemClassDiscountableOk returns a tuple with the ItemClassDiscountable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetItemClassDiscountableOk() (*bool, bool) {
	if o == nil || IsNil(o.ItemClassDiscountable) {
		return nil, false
	}
	return o.ItemClassDiscountable, true
}

// HasItemClassDiscountable returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasItemClassDiscountable() bool {
	if o != nil && !IsNil(o.ItemClassDiscountable) {
		return true
	}

	return false
}

// SetItemClassDiscountable gets a reference to the given bool and assigns it to the ItemClassDiscountable field.
func (o *InventoryItemTypeSellInfo) SetItemClassDiscountable(v bool) {
	o.ItemClassDiscountable = &v
}

// GetItemClassWebBookable returns the ItemClassWebBookable field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetItemClassWebBookable() bool {
	if o == nil || IsNil(o.ItemClassWebBookable) {
		var ret bool
		return ret
	}
	return *o.ItemClassWebBookable
}

// GetItemClassWebBookableOk returns a tuple with the ItemClassWebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetItemClassWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.ItemClassWebBookable) {
		return nil, false
	}
	return o.ItemClassWebBookable, true
}

// HasItemClassWebBookable returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasItemClassWebBookable() bool {
	if o != nil && !IsNil(o.ItemClassWebBookable) {
		return true
	}

	return false
}

// SetItemClassWebBookable gets a reference to the given bool and assigns it to the ItemClassWebBookable field.
func (o *InventoryItemTypeSellInfo) SetItemClassWebBookable(v bool) {
	o.ItemClassWebBookable = &v
}

// GetOutsideStay returns the OutsideStay field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetOutsideStay() bool {
	if o == nil || IsNil(o.OutsideStay) {
		var ret bool
		return ret
	}
	return *o.OutsideStay
}

// GetOutsideStayOk returns a tuple with the OutsideStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetOutsideStayOk() (*bool, bool) {
	if o == nil || IsNil(o.OutsideStay) {
		return nil, false
	}
	return o.OutsideStay, true
}

// HasOutsideStay returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasOutsideStay() bool {
	if o != nil && !IsNil(o.OutsideStay) {
		return true
	}

	return false
}

// SetOutsideStay gets a reference to the given bool and assigns it to the OutsideStay field.
func (o *InventoryItemTypeSellInfo) SetOutsideStay(v bool) {
	o.OutsideStay = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *InventoryItemTypeSellInfo) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

// GetQtyInStock returns the QtyInStock field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetQtyInStock() float32 {
	if o == nil || IsNil(o.QtyInStock) {
		var ret float32
		return ret
	}
	return *o.QtyInStock
}

// GetQtyInStockOk returns a tuple with the QtyInStock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetQtyInStockOk() (*float32, bool) {
	if o == nil || IsNil(o.QtyInStock) {
		return nil, false
	}
	return o.QtyInStock, true
}

// HasQtyInStock returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasQtyInStock() bool {
	if o != nil && !IsNil(o.QtyInStock) {
		return true
	}

	return false
}

// SetQtyInStock gets a reference to the given float32 and assigns it to the QtyInStock field.
func (o *InventoryItemTypeSellInfo) SetQtyInStock(v float32) {
	o.QtyInStock = &v
}

// GetSellControl returns the SellControl field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetSellControl() bool {
	if o == nil || IsNil(o.SellControl) {
		var ret bool
		return ret
	}
	return *o.SellControl
}

// GetSellControlOk returns a tuple with the SellControl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetSellControlOk() (*bool, bool) {
	if o == nil || IsNil(o.SellControl) {
		return nil, false
	}
	return o.SellControl, true
}

// HasSellControl returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasSellControl() bool {
	if o != nil && !IsNil(o.SellControl) {
		return true
	}

	return false
}

// SetSellControl gets a reference to the given bool and assigns it to the SellControl field.
func (o *InventoryItemTypeSellInfo) SetSellControl(v bool) {
	o.SellControl = &v
}

// GetSellSeparate returns the SellSeparate field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetSellSeparate() bool {
	if o == nil || IsNil(o.SellSeparate) {
		var ret bool
		return ret
	}
	return *o.SellSeparate
}

// GetSellSeparateOk returns a tuple with the SellSeparate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetSellSeparateOk() (*bool, bool) {
	if o == nil || IsNil(o.SellSeparate) {
		return nil, false
	}
	return o.SellSeparate, true
}

// HasSellSeparate returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasSellSeparate() bool {
	if o != nil && !IsNil(o.SellSeparate) {
		return true
	}

	return false
}

// SetSellSeparate gets a reference to the given bool and assigns it to the SellSeparate field.
func (o *InventoryItemTypeSellInfo) SetSellSeparate(v bool) {
	o.SellSeparate = &v
}

// GetWebBookable returns the WebBookable field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetWebBookable() bool {
	if o == nil || IsNil(o.WebBookable) {
		var ret bool
		return ret
	}
	return *o.WebBookable
}

// GetWebBookableOk returns a tuple with the WebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebBookable) {
		return nil, false
	}
	return o.WebBookable, true
}

// HasWebBookable returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasWebBookable() bool {
	if o != nil && !IsNil(o.WebBookable) {
		return true
	}

	return false
}

// SetWebBookable gets a reference to the given bool and assigns it to the WebBookable field.
func (o *InventoryItemTypeSellInfo) SetWebBookable(v bool) {
	o.WebBookable = &v
}

// GetWelcomeOffer returns the WelcomeOffer field value if set, zero value otherwise.
func (o *InventoryItemTypeSellInfo) GetWelcomeOffer() bool {
	if o == nil || IsNil(o.WelcomeOffer) {
		var ret bool
		return ret
	}
	return *o.WelcomeOffer
}

// GetWelcomeOfferOk returns a tuple with the WelcomeOffer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTypeSellInfo) GetWelcomeOfferOk() (*bool, bool) {
	if o == nil || IsNil(o.WelcomeOffer) {
		return nil, false
	}
	return o.WelcomeOffer, true
}

// HasWelcomeOffer returns a boolean if a field has been set.
func (o *InventoryItemTypeSellInfo) HasWelcomeOffer() bool {
	if o != nil && !IsNil(o.WelcomeOffer) {
		return true
	}

	return false
}

// SetWelcomeOffer gets a reference to the given bool and assigns it to the WelcomeOffer field.
func (o *InventoryItemTypeSellInfo) SetWelcomeOffer(v bool) {
	o.WelcomeOffer = &v
}

func (o InventoryItemTypeSellInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InventoryItemTypeSellInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Available) {
		toSerialize["available"] = o.Available
	}
	if !IsNil(o.AvailableQty) {
		toSerialize["availableQty"] = o.AvailableQty
	}
	if !IsNil(o.CriticalInventory) {
		toSerialize["criticalInventory"] = o.CriticalInventory
	}
	if !IsNil(o.DefaultDuration) {
		toSerialize["defaultDuration"] = o.DefaultDuration
	}
	if !IsNil(o.DefaultQty) {
		toSerialize["defaultQty"] = o.DefaultQty
	}
	if !IsNil(o.Discountable) {
		toSerialize["discountable"] = o.Discountable
	}
	if !IsNil(o.FixedCharge) {
		toSerialize["fixedCharge"] = o.FixedCharge
	}
	if !IsNil(o.ItemClassDiscountable) {
		toSerialize["itemClassDiscountable"] = o.ItemClassDiscountable
	}
	if !IsNil(o.ItemClassWebBookable) {
		toSerialize["itemClassWebBookable"] = o.ItemClassWebBookable
	}
	if !IsNil(o.OutsideStay) {
		toSerialize["outsideStay"] = o.OutsideStay
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.QtyInStock) {
		toSerialize["qtyInStock"] = o.QtyInStock
	}
	if !IsNil(o.SellControl) {
		toSerialize["sellControl"] = o.SellControl
	}
	if !IsNil(o.SellSeparate) {
		toSerialize["sellSeparate"] = o.SellSeparate
	}
	if !IsNil(o.WebBookable) {
		toSerialize["webBookable"] = o.WebBookable
	}
	if !IsNil(o.WelcomeOffer) {
		toSerialize["welcomeOffer"] = o.WelcomeOffer
	}
	return toSerialize, nil
}

type NullableInventoryItemTypeSellInfo struct {
	value *InventoryItemTypeSellInfo
	isSet bool
}

func (v NullableInventoryItemTypeSellInfo) Get() *InventoryItemTypeSellInfo {
	return v.value
}

func (v *NullableInventoryItemTypeSellInfo) Set(val *InventoryItemTypeSellInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryItemTypeSellInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryItemTypeSellInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryItemTypeSellInfo(val *InventoryItemTypeSellInfo) *NullableInventoryItemTypeSellInfo {
	return &NullableInventoryItemTypeSellInfo{value: val, isSet: true}
}

func (v NullableInventoryItemTypeSellInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryItemTypeSellInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


