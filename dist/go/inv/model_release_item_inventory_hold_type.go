/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the ReleaseItemInventoryHoldType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReleaseItemInventoryHoldType{}

// ReleaseItemInventoryHoldType Item information for releasing an Item Inventory hold.
type ReleaseItemInventoryHoldType struct {
	HeldBy *HeldByType `json:"heldBy,omitempty"`
	HeldById *UniqueIDType `json:"heldById,omitempty"`
	// Hotel Code of the holding item to be released.
	HotelId *string `json:"hotelId,omitempty"`
	// Item Code to be released.
	ItemCode *string `json:"itemCode,omitempty"`
	// ID reference for the one who hold the item. Used for releasing/reserving the item afterwards.
	ItemHoldId *float32 `json:"itemHoldId,omitempty"`
	ItemId *UniqueIDType `json:"itemId,omitempty"`
	ReserveDates *TimeSpanType `json:"reserveDates,omitempty"`
}

// NewReleaseItemInventoryHoldType instantiates a new ReleaseItemInventoryHoldType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReleaseItemInventoryHoldType() *ReleaseItemInventoryHoldType {
	this := ReleaseItemInventoryHoldType{}
	return &this
}

// NewReleaseItemInventoryHoldTypeWithDefaults instantiates a new ReleaseItemInventoryHoldType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReleaseItemInventoryHoldTypeWithDefaults() *ReleaseItemInventoryHoldType {
	this := ReleaseItemInventoryHoldType{}
	return &this
}

// GetHeldBy returns the HeldBy field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetHeldBy() HeldByType {
	if o == nil || IsNil(o.HeldBy) {
		var ret HeldByType
		return ret
	}
	return *o.HeldBy
}

// GetHeldByOk returns a tuple with the HeldBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetHeldByOk() (*HeldByType, bool) {
	if o == nil || IsNil(o.HeldBy) {
		return nil, false
	}
	return o.HeldBy, true
}

// HasHeldBy returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasHeldBy() bool {
	if o != nil && !IsNil(o.HeldBy) {
		return true
	}

	return false
}

// SetHeldBy gets a reference to the given HeldByType and assigns it to the HeldBy field.
func (o *ReleaseItemInventoryHoldType) SetHeldBy(v HeldByType) {
	o.HeldBy = &v
}

// GetHeldById returns the HeldById field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetHeldById() UniqueIDType {
	if o == nil || IsNil(o.HeldById) {
		var ret UniqueIDType
		return ret
	}
	return *o.HeldById
}

// GetHeldByIdOk returns a tuple with the HeldById field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetHeldByIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.HeldById) {
		return nil, false
	}
	return o.HeldById, true
}

// HasHeldById returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasHeldById() bool {
	if o != nil && !IsNil(o.HeldById) {
		return true
	}

	return false
}

// SetHeldById gets a reference to the given UniqueIDType and assigns it to the HeldById field.
func (o *ReleaseItemInventoryHoldType) SetHeldById(v UniqueIDType) {
	o.HeldById = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReleaseItemInventoryHoldType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetItemCode returns the ItemCode field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetItemCode() string {
	if o == nil || IsNil(o.ItemCode) {
		var ret string
		return ret
	}
	return *o.ItemCode
}

// GetItemCodeOk returns a tuple with the ItemCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetItemCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ItemCode) {
		return nil, false
	}
	return o.ItemCode, true
}

// HasItemCode returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasItemCode() bool {
	if o != nil && !IsNil(o.ItemCode) {
		return true
	}

	return false
}

// SetItemCode gets a reference to the given string and assigns it to the ItemCode field.
func (o *ReleaseItemInventoryHoldType) SetItemCode(v string) {
	o.ItemCode = &v
}

// GetItemHoldId returns the ItemHoldId field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetItemHoldId() float32 {
	if o == nil || IsNil(o.ItemHoldId) {
		var ret float32
		return ret
	}
	return *o.ItemHoldId
}

// GetItemHoldIdOk returns a tuple with the ItemHoldId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetItemHoldIdOk() (*float32, bool) {
	if o == nil || IsNil(o.ItemHoldId) {
		return nil, false
	}
	return o.ItemHoldId, true
}

// HasItemHoldId returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasItemHoldId() bool {
	if o != nil && !IsNil(o.ItemHoldId) {
		return true
	}

	return false
}

// SetItemHoldId gets a reference to the given float32 and assigns it to the ItemHoldId field.
func (o *ReleaseItemInventoryHoldType) SetItemHoldId(v float32) {
	o.ItemHoldId = &v
}

// GetItemId returns the ItemId field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetItemId() UniqueIDType {
	if o == nil || IsNil(o.ItemId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ItemId
}

// GetItemIdOk returns a tuple with the ItemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetItemIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ItemId) {
		return nil, false
	}
	return o.ItemId, true
}

// HasItemId returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasItemId() bool {
	if o != nil && !IsNil(o.ItemId) {
		return true
	}

	return false
}

// SetItemId gets a reference to the given UniqueIDType and assigns it to the ItemId field.
func (o *ReleaseItemInventoryHoldType) SetItemId(v UniqueIDType) {
	o.ItemId = &v
}

// GetReserveDates returns the ReserveDates field value if set, zero value otherwise.
func (o *ReleaseItemInventoryHoldType) GetReserveDates() TimeSpanType {
	if o == nil || IsNil(o.ReserveDates) {
		var ret TimeSpanType
		return ret
	}
	return *o.ReserveDates
}

// GetReserveDatesOk returns a tuple with the ReserveDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReleaseItemInventoryHoldType) GetReserveDatesOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.ReserveDates) {
		return nil, false
	}
	return o.ReserveDates, true
}

// HasReserveDates returns a boolean if a field has been set.
func (o *ReleaseItemInventoryHoldType) HasReserveDates() bool {
	if o != nil && !IsNil(o.ReserveDates) {
		return true
	}

	return false
}

// SetReserveDates gets a reference to the given TimeSpanType and assigns it to the ReserveDates field.
func (o *ReleaseItemInventoryHoldType) SetReserveDates(v TimeSpanType) {
	o.ReserveDates = &v
}

func (o ReleaseItemInventoryHoldType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReleaseItemInventoryHoldType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HeldBy) {
		toSerialize["heldBy"] = o.HeldBy
	}
	if !IsNil(o.HeldById) {
		toSerialize["heldById"] = o.HeldById
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ItemCode) {
		toSerialize["itemCode"] = o.ItemCode
	}
	if !IsNil(o.ItemHoldId) {
		toSerialize["itemHoldId"] = o.ItemHoldId
	}
	if !IsNil(o.ItemId) {
		toSerialize["itemId"] = o.ItemId
	}
	if !IsNil(o.ReserveDates) {
		toSerialize["reserveDates"] = o.ReserveDates
	}
	return toSerialize, nil
}

type NullableReleaseItemInventoryHoldType struct {
	value *ReleaseItemInventoryHoldType
	isSet bool
}

func (v NullableReleaseItemInventoryHoldType) Get() *ReleaseItemInventoryHoldType {
	return v.value
}

func (v *NullableReleaseItemInventoryHoldType) Set(val *ReleaseItemInventoryHoldType) {
	v.value = val
	v.isSet = true
}

func (v NullableReleaseItemInventoryHoldType) IsSet() bool {
	return v.isSet
}

func (v *NullableReleaseItemInventoryHoldType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReleaseItemInventoryHoldType(val *ReleaseItemInventoryHoldType) *NullableReleaseItemInventoryHoldType {
	return &NullableReleaseItemInventoryHoldType{value: val, isSet: true}
}

func (v NullableReleaseItemInventoryHoldType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReleaseItemInventoryHoldType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


