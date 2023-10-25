/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the ItemInventoryCountsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ItemInventoryCountsType{}

// ItemInventoryCountsType Basic information regarding an Item.
type ItemInventoryCountsType struct {
	AvailabilityPeriod *TimeWindowType `json:"availabilityPeriod,omitempty"`
	// Item Code.
	Code *string `json:"code,omitempty"`
	// Define the default duration in days when booking the item.
	DefaultDuration *int32 `json:"defaultDuration,omitempty"`
	// Detail description of an item.
	Description *string `json:"description,omitempty"`
	// If true indicates that item has fixed charge when it is attached to a reservation.
	FixedCharge *bool `json:"fixedCharge,omitempty"`
	// Inventory counts for the given date.
	Inventories []DailyItemInventoryCountsType `json:"inventories,omitempty"`
	// ID reference for the hold Item
	ItemHoldId *float32 `json:"itemHoldId,omitempty"`
	// Indicates if it is an item pool. Not applicable for Item within the Item Pool.
	ItemPool *bool `json:"itemPool,omitempty"`
	// Name of an item.
	Name *string `json:"name,omitempty"`
	// If true indicates that item could be held outside of the reservation stay days.
	OutsideStay *bool `json:"outsideStay,omitempty"`
	// Quantity of hold Item
	Quantity *int32 `json:"quantity,omitempty"`
	// If true indicates that item is required for the reservation.
	RequiredForBooking *bool `json:"requiredForBooking,omitempty"`
	// If true indicates that item can be sold in event.
	SellInEvent *bool `json:"sellInEvent,omitempty"`
	// If true indicates that item can be sold in reservation.
	SellInReservation *bool `json:"sellInReservation,omitempty"`
	// If true indicates that item is allowed to sell separately.
	SellSeparate *bool `json:"sellSeparate,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewItemInventoryCountsType instantiates a new ItemInventoryCountsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewItemInventoryCountsType() *ItemInventoryCountsType {
	this := ItemInventoryCountsType{}
	return &this
}

// NewItemInventoryCountsTypeWithDefaults instantiates a new ItemInventoryCountsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewItemInventoryCountsTypeWithDefaults() *ItemInventoryCountsType {
	this := ItemInventoryCountsType{}
	return &this
}

// GetAvailabilityPeriod returns the AvailabilityPeriod field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetAvailabilityPeriod() TimeWindowType {
	if o == nil || IsNil(o.AvailabilityPeriod) {
		var ret TimeWindowType
		return ret
	}
	return *o.AvailabilityPeriod
}

// GetAvailabilityPeriodOk returns a tuple with the AvailabilityPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetAvailabilityPeriodOk() (*TimeWindowType, bool) {
	if o == nil || IsNil(o.AvailabilityPeriod) {
		return nil, false
	}
	return o.AvailabilityPeriod, true
}

// HasAvailabilityPeriod returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasAvailabilityPeriod() bool {
	if o != nil && !IsNil(o.AvailabilityPeriod) {
		return true
	}

	return false
}

// SetAvailabilityPeriod gets a reference to the given TimeWindowType and assigns it to the AvailabilityPeriod field.
func (o *ItemInventoryCountsType) SetAvailabilityPeriod(v TimeWindowType) {
	o.AvailabilityPeriod = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ItemInventoryCountsType) SetCode(v string) {
	o.Code = &v
}

// GetDefaultDuration returns the DefaultDuration field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetDefaultDuration() int32 {
	if o == nil || IsNil(o.DefaultDuration) {
		var ret int32
		return ret
	}
	return *o.DefaultDuration
}

// GetDefaultDurationOk returns a tuple with the DefaultDuration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetDefaultDurationOk() (*int32, bool) {
	if o == nil || IsNil(o.DefaultDuration) {
		return nil, false
	}
	return o.DefaultDuration, true
}

// HasDefaultDuration returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasDefaultDuration() bool {
	if o != nil && !IsNil(o.DefaultDuration) {
		return true
	}

	return false
}

// SetDefaultDuration gets a reference to the given int32 and assigns it to the DefaultDuration field.
func (o *ItemInventoryCountsType) SetDefaultDuration(v int32) {
	o.DefaultDuration = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ItemInventoryCountsType) SetDescription(v string) {
	o.Description = &v
}

// GetFixedCharge returns the FixedCharge field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetFixedCharge() bool {
	if o == nil || IsNil(o.FixedCharge) {
		var ret bool
		return ret
	}
	return *o.FixedCharge
}

// GetFixedChargeOk returns a tuple with the FixedCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetFixedChargeOk() (*bool, bool) {
	if o == nil || IsNil(o.FixedCharge) {
		return nil, false
	}
	return o.FixedCharge, true
}

// HasFixedCharge returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasFixedCharge() bool {
	if o != nil && !IsNil(o.FixedCharge) {
		return true
	}

	return false
}

// SetFixedCharge gets a reference to the given bool and assigns it to the FixedCharge field.
func (o *ItemInventoryCountsType) SetFixedCharge(v bool) {
	o.FixedCharge = &v
}

// GetInventories returns the Inventories field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetInventories() []DailyItemInventoryCountsType {
	if o == nil || IsNil(o.Inventories) {
		var ret []DailyItemInventoryCountsType
		return ret
	}
	return o.Inventories
}

// GetInventoriesOk returns a tuple with the Inventories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetInventoriesOk() ([]DailyItemInventoryCountsType, bool) {
	if o == nil || IsNil(o.Inventories) {
		return nil, false
	}
	return o.Inventories, true
}

// HasInventories returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasInventories() bool {
	if o != nil && !IsNil(o.Inventories) {
		return true
	}

	return false
}

// SetInventories gets a reference to the given []DailyItemInventoryCountsType and assigns it to the Inventories field.
func (o *ItemInventoryCountsType) SetInventories(v []DailyItemInventoryCountsType) {
	o.Inventories = v
}

// GetItemHoldId returns the ItemHoldId field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetItemHoldId() float32 {
	if o == nil || IsNil(o.ItemHoldId) {
		var ret float32
		return ret
	}
	return *o.ItemHoldId
}

// GetItemHoldIdOk returns a tuple with the ItemHoldId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetItemHoldIdOk() (*float32, bool) {
	if o == nil || IsNil(o.ItemHoldId) {
		return nil, false
	}
	return o.ItemHoldId, true
}

// HasItemHoldId returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasItemHoldId() bool {
	if o != nil && !IsNil(o.ItemHoldId) {
		return true
	}

	return false
}

// SetItemHoldId gets a reference to the given float32 and assigns it to the ItemHoldId field.
func (o *ItemInventoryCountsType) SetItemHoldId(v float32) {
	o.ItemHoldId = &v
}

// GetItemPool returns the ItemPool field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetItemPool() bool {
	if o == nil || IsNil(o.ItemPool) {
		var ret bool
		return ret
	}
	return *o.ItemPool
}

// GetItemPoolOk returns a tuple with the ItemPool field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetItemPoolOk() (*bool, bool) {
	if o == nil || IsNil(o.ItemPool) {
		return nil, false
	}
	return o.ItemPool, true
}

// HasItemPool returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasItemPool() bool {
	if o != nil && !IsNil(o.ItemPool) {
		return true
	}

	return false
}

// SetItemPool gets a reference to the given bool and assigns it to the ItemPool field.
func (o *ItemInventoryCountsType) SetItemPool(v bool) {
	o.ItemPool = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ItemInventoryCountsType) SetName(v string) {
	o.Name = &v
}

// GetOutsideStay returns the OutsideStay field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetOutsideStay() bool {
	if o == nil || IsNil(o.OutsideStay) {
		var ret bool
		return ret
	}
	return *o.OutsideStay
}

// GetOutsideStayOk returns a tuple with the OutsideStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetOutsideStayOk() (*bool, bool) {
	if o == nil || IsNil(o.OutsideStay) {
		return nil, false
	}
	return o.OutsideStay, true
}

// HasOutsideStay returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasOutsideStay() bool {
	if o != nil && !IsNil(o.OutsideStay) {
		return true
	}

	return false
}

// SetOutsideStay gets a reference to the given bool and assigns it to the OutsideStay field.
func (o *ItemInventoryCountsType) SetOutsideStay(v bool) {
	o.OutsideStay = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *ItemInventoryCountsType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetRequiredForBooking returns the RequiredForBooking field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetRequiredForBooking() bool {
	if o == nil || IsNil(o.RequiredForBooking) {
		var ret bool
		return ret
	}
	return *o.RequiredForBooking
}

// GetRequiredForBookingOk returns a tuple with the RequiredForBooking field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetRequiredForBookingOk() (*bool, bool) {
	if o == nil || IsNil(o.RequiredForBooking) {
		return nil, false
	}
	return o.RequiredForBooking, true
}

// HasRequiredForBooking returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasRequiredForBooking() bool {
	if o != nil && !IsNil(o.RequiredForBooking) {
		return true
	}

	return false
}

// SetRequiredForBooking gets a reference to the given bool and assigns it to the RequiredForBooking field.
func (o *ItemInventoryCountsType) SetRequiredForBooking(v bool) {
	o.RequiredForBooking = &v
}

// GetSellInEvent returns the SellInEvent field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetSellInEvent() bool {
	if o == nil || IsNil(o.SellInEvent) {
		var ret bool
		return ret
	}
	return *o.SellInEvent
}

// GetSellInEventOk returns a tuple with the SellInEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetSellInEventOk() (*bool, bool) {
	if o == nil || IsNil(o.SellInEvent) {
		return nil, false
	}
	return o.SellInEvent, true
}

// HasSellInEvent returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasSellInEvent() bool {
	if o != nil && !IsNil(o.SellInEvent) {
		return true
	}

	return false
}

// SetSellInEvent gets a reference to the given bool and assigns it to the SellInEvent field.
func (o *ItemInventoryCountsType) SetSellInEvent(v bool) {
	o.SellInEvent = &v
}

// GetSellInReservation returns the SellInReservation field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetSellInReservation() bool {
	if o == nil || IsNil(o.SellInReservation) {
		var ret bool
		return ret
	}
	return *o.SellInReservation
}

// GetSellInReservationOk returns a tuple with the SellInReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetSellInReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.SellInReservation) {
		return nil, false
	}
	return o.SellInReservation, true
}

// HasSellInReservation returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasSellInReservation() bool {
	if o != nil && !IsNil(o.SellInReservation) {
		return true
	}

	return false
}

// SetSellInReservation gets a reference to the given bool and assigns it to the SellInReservation field.
func (o *ItemInventoryCountsType) SetSellInReservation(v bool) {
	o.SellInReservation = &v
}

// GetSellSeparate returns the SellSeparate field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetSellSeparate() bool {
	if o == nil || IsNil(o.SellSeparate) {
		var ret bool
		return ret
	}
	return *o.SellSeparate
}

// GetSellSeparateOk returns a tuple with the SellSeparate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetSellSeparateOk() (*bool, bool) {
	if o == nil || IsNil(o.SellSeparate) {
		return nil, false
	}
	return o.SellSeparate, true
}

// HasSellSeparate returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasSellSeparate() bool {
	if o != nil && !IsNil(o.SellSeparate) {
		return true
	}

	return false
}

// SetSellSeparate gets a reference to the given bool and assigns it to the SellSeparate field.
func (o *ItemInventoryCountsType) SetSellSeparate(v bool) {
	o.SellSeparate = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *ItemInventoryCountsType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemInventoryCountsType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *ItemInventoryCountsType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *ItemInventoryCountsType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o ItemInventoryCountsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ItemInventoryCountsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AvailabilityPeriod) {
		toSerialize["availabilityPeriod"] = o.AvailabilityPeriod
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DefaultDuration) {
		toSerialize["defaultDuration"] = o.DefaultDuration
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FixedCharge) {
		toSerialize["fixedCharge"] = o.FixedCharge
	}
	if !IsNil(o.Inventories) {
		toSerialize["inventories"] = o.Inventories
	}
	if !IsNil(o.ItemHoldId) {
		toSerialize["itemHoldId"] = o.ItemHoldId
	}
	if !IsNil(o.ItemPool) {
		toSerialize["itemPool"] = o.ItemPool
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.OutsideStay) {
		toSerialize["outsideStay"] = o.OutsideStay
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.RequiredForBooking) {
		toSerialize["requiredForBooking"] = o.RequiredForBooking
	}
	if !IsNil(o.SellInEvent) {
		toSerialize["sellInEvent"] = o.SellInEvent
	}
	if !IsNil(o.SellInReservation) {
		toSerialize["sellInReservation"] = o.SellInReservation
	}
	if !IsNil(o.SellSeparate) {
		toSerialize["sellSeparate"] = o.SellSeparate
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableItemInventoryCountsType struct {
	value *ItemInventoryCountsType
	isSet bool
}

func (v NullableItemInventoryCountsType) Get() *ItemInventoryCountsType {
	return v.value
}

func (v *NullableItemInventoryCountsType) Set(val *ItemInventoryCountsType) {
	v.value = val
	v.isSet = true
}

func (v NullableItemInventoryCountsType) IsSet() bool {
	return v.isSet
}

func (v *NullableItemInventoryCountsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableItemInventoryCountsType(val *ItemInventoryCountsType) *NullableItemInventoryCountsType {
	return &NullableItemInventoryCountsType{value: val, isSet: true}
}

func (v NullableItemInventoryCountsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableItemInventoryCountsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


