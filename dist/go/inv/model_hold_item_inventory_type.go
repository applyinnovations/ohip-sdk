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

// checks if the HoldItemInventoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HoldItemInventoryType{}

// HoldItemInventoryType Request parameter for holding an Item Inventory.
type HoldItemInventoryType struct {
	HeldBy *HeldByType `json:"heldBy,omitempty"`
	HeldById *UniqueIDType `json:"heldById,omitempty"`
	// Info of an item inventory that is requested for Hold.
	HoldItemInfoList []HoldItemInfoType `json:"holdItemInfoList,omitempty"`
	// Hotel Code whose Item Inventory is being requested.
	HotelId *string `json:"hotelId,omitempty"`
	// Unique ID of the one requesting for the item hold.
	ItemHoldId *float32 `json:"itemHoldId,omitempty"`
	// Flag to indicate if inventory check will be overriden.
	OverrideInventory *bool `json:"overrideInventory,omitempty"`
}

// NewHoldItemInventoryType instantiates a new HoldItemInventoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHoldItemInventoryType() *HoldItemInventoryType {
	this := HoldItemInventoryType{}
	return &this
}

// NewHoldItemInventoryTypeWithDefaults instantiates a new HoldItemInventoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHoldItemInventoryTypeWithDefaults() *HoldItemInventoryType {
	this := HoldItemInventoryType{}
	return &this
}

// GetHeldBy returns the HeldBy field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetHeldBy() HeldByType {
	if o == nil || IsNil(o.HeldBy) {
		var ret HeldByType
		return ret
	}
	return *o.HeldBy
}

// GetHeldByOk returns a tuple with the HeldBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetHeldByOk() (*HeldByType, bool) {
	if o == nil || IsNil(o.HeldBy) {
		return nil, false
	}
	return o.HeldBy, true
}

// HasHeldBy returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasHeldBy() bool {
	if o != nil && !IsNil(o.HeldBy) {
		return true
	}

	return false
}

// SetHeldBy gets a reference to the given HeldByType and assigns it to the HeldBy field.
func (o *HoldItemInventoryType) SetHeldBy(v HeldByType) {
	o.HeldBy = &v
}

// GetHeldById returns the HeldById field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetHeldById() UniqueIDType {
	if o == nil || IsNil(o.HeldById) {
		var ret UniqueIDType
		return ret
	}
	return *o.HeldById
}

// GetHeldByIdOk returns a tuple with the HeldById field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetHeldByIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.HeldById) {
		return nil, false
	}
	return o.HeldById, true
}

// HasHeldById returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasHeldById() bool {
	if o != nil && !IsNil(o.HeldById) {
		return true
	}

	return false
}

// SetHeldById gets a reference to the given UniqueIDType and assigns it to the HeldById field.
func (o *HoldItemInventoryType) SetHeldById(v UniqueIDType) {
	o.HeldById = &v
}

// GetHoldItemInfoList returns the HoldItemInfoList field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetHoldItemInfoList() []HoldItemInfoType {
	if o == nil || IsNil(o.HoldItemInfoList) {
		var ret []HoldItemInfoType
		return ret
	}
	return o.HoldItemInfoList
}

// GetHoldItemInfoListOk returns a tuple with the HoldItemInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetHoldItemInfoListOk() ([]HoldItemInfoType, bool) {
	if o == nil || IsNil(o.HoldItemInfoList) {
		return nil, false
	}
	return o.HoldItemInfoList, true
}

// HasHoldItemInfoList returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasHoldItemInfoList() bool {
	if o != nil && !IsNil(o.HoldItemInfoList) {
		return true
	}

	return false
}

// SetHoldItemInfoList gets a reference to the given []HoldItemInfoType and assigns it to the HoldItemInfoList field.
func (o *HoldItemInventoryType) SetHoldItemInfoList(v []HoldItemInfoType) {
	o.HoldItemInfoList = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HoldItemInventoryType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetItemHoldId returns the ItemHoldId field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetItemHoldId() float32 {
	if o == nil || IsNil(o.ItemHoldId) {
		var ret float32
		return ret
	}
	return *o.ItemHoldId
}

// GetItemHoldIdOk returns a tuple with the ItemHoldId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetItemHoldIdOk() (*float32, bool) {
	if o == nil || IsNil(o.ItemHoldId) {
		return nil, false
	}
	return o.ItemHoldId, true
}

// HasItemHoldId returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasItemHoldId() bool {
	if o != nil && !IsNil(o.ItemHoldId) {
		return true
	}

	return false
}

// SetItemHoldId gets a reference to the given float32 and assigns it to the ItemHoldId field.
func (o *HoldItemInventoryType) SetItemHoldId(v float32) {
	o.ItemHoldId = &v
}

// GetOverrideInventory returns the OverrideInventory field value if set, zero value otherwise.
func (o *HoldItemInventoryType) GetOverrideInventory() bool {
	if o == nil || IsNil(o.OverrideInventory) {
		var ret bool
		return ret
	}
	return *o.OverrideInventory
}

// GetOverrideInventoryOk returns a tuple with the OverrideInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HoldItemInventoryType) GetOverrideInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideInventory) {
		return nil, false
	}
	return o.OverrideInventory, true
}

// HasOverrideInventory returns a boolean if a field has been set.
func (o *HoldItemInventoryType) HasOverrideInventory() bool {
	if o != nil && !IsNil(o.OverrideInventory) {
		return true
	}

	return false
}

// SetOverrideInventory gets a reference to the given bool and assigns it to the OverrideInventory field.
func (o *HoldItemInventoryType) SetOverrideInventory(v bool) {
	o.OverrideInventory = &v
}

func (o HoldItemInventoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HoldItemInventoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HeldBy) {
		toSerialize["heldBy"] = o.HeldBy
	}
	if !IsNil(o.HeldById) {
		toSerialize["heldById"] = o.HeldById
	}
	if !IsNil(o.HoldItemInfoList) {
		toSerialize["holdItemInfoList"] = o.HoldItemInfoList
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ItemHoldId) {
		toSerialize["itemHoldId"] = o.ItemHoldId
	}
	if !IsNil(o.OverrideInventory) {
		toSerialize["overrideInventory"] = o.OverrideInventory
	}
	return toSerialize, nil
}

type NullableHoldItemInventoryType struct {
	value *HoldItemInventoryType
	isSet bool
}

func (v NullableHoldItemInventoryType) Get() *HoldItemInventoryType {
	return v.value
}

func (v *NullableHoldItemInventoryType) Set(val *HoldItemInventoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableHoldItemInventoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableHoldItemInventoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHoldItemInventoryType(val *HoldItemInventoryType) *NullableHoldItemInventoryType {
	return &NullableHoldItemInventoryType{value: val, isSet: true}
}

func (v NullableHoldItemInventoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHoldItemInventoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


