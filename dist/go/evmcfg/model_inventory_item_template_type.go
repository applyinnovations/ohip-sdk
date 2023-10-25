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

// checks if the InventoryItemTemplateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InventoryItemTemplateType{}

// InventoryItemTemplateType This gives detailed information about an inventory item template.
type InventoryItemTemplateType struct {
	// Specifies the hotel code for which the inventory item template is defined.
	HotelId *string `json:"hotelId,omitempty"`
	InventoryItemTemplateId *UniqueIDType `json:"inventoryItemTemplateId,omitempty"`
	// This type holds a collection of inventory items which are to be grouped under a single inventory item template.
	InventoryItemTemplateItems []InventoryItemTemplateItemType `json:"inventoryItemTemplateItems,omitempty"`
	// Specifies the name of the inventory item template.
	InventoryItemTemplateName *string `json:"inventoryItemTemplateName,omitempty"`
}

// NewInventoryItemTemplateType instantiates a new InventoryItemTemplateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryItemTemplateType() *InventoryItemTemplateType {
	this := InventoryItemTemplateType{}
	return &this
}

// NewInventoryItemTemplateTypeWithDefaults instantiates a new InventoryItemTemplateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryItemTemplateTypeWithDefaults() *InventoryItemTemplateType {
	this := InventoryItemTemplateType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *InventoryItemTemplateType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *InventoryItemTemplateType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *InventoryItemTemplateType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInventoryItemTemplateId returns the InventoryItemTemplateId field value if set, zero value otherwise.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateId() UniqueIDType {
	if o == nil || IsNil(o.InventoryItemTemplateId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InventoryItemTemplateId
}

// GetInventoryItemTemplateIdOk returns a tuple with the InventoryItemTemplateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InventoryItemTemplateId) {
		return nil, false
	}
	return o.InventoryItemTemplateId, true
}

// HasInventoryItemTemplateId returns a boolean if a field has been set.
func (o *InventoryItemTemplateType) HasInventoryItemTemplateId() bool {
	if o != nil && !IsNil(o.InventoryItemTemplateId) {
		return true
	}

	return false
}

// SetInventoryItemTemplateId gets a reference to the given UniqueIDType and assigns it to the InventoryItemTemplateId field.
func (o *InventoryItemTemplateType) SetInventoryItemTemplateId(v UniqueIDType) {
	o.InventoryItemTemplateId = &v
}

// GetInventoryItemTemplateItems returns the InventoryItemTemplateItems field value if set, zero value otherwise.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateItems() []InventoryItemTemplateItemType {
	if o == nil || IsNil(o.InventoryItemTemplateItems) {
		var ret []InventoryItemTemplateItemType
		return ret
	}
	return o.InventoryItemTemplateItems
}

// GetInventoryItemTemplateItemsOk returns a tuple with the InventoryItemTemplateItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateItemsOk() ([]InventoryItemTemplateItemType, bool) {
	if o == nil || IsNil(o.InventoryItemTemplateItems) {
		return nil, false
	}
	return o.InventoryItemTemplateItems, true
}

// HasInventoryItemTemplateItems returns a boolean if a field has been set.
func (o *InventoryItemTemplateType) HasInventoryItemTemplateItems() bool {
	if o != nil && !IsNil(o.InventoryItemTemplateItems) {
		return true
	}

	return false
}

// SetInventoryItemTemplateItems gets a reference to the given []InventoryItemTemplateItemType and assigns it to the InventoryItemTemplateItems field.
func (o *InventoryItemTemplateType) SetInventoryItemTemplateItems(v []InventoryItemTemplateItemType) {
	o.InventoryItemTemplateItems = v
}

// GetInventoryItemTemplateName returns the InventoryItemTemplateName field value if set, zero value otherwise.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateName() string {
	if o == nil || IsNil(o.InventoryItemTemplateName) {
		var ret string
		return ret
	}
	return *o.InventoryItemTemplateName
}

// GetInventoryItemTemplateNameOk returns a tuple with the InventoryItemTemplateName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateType) GetInventoryItemTemplateNameOk() (*string, bool) {
	if o == nil || IsNil(o.InventoryItemTemplateName) {
		return nil, false
	}
	return o.InventoryItemTemplateName, true
}

// HasInventoryItemTemplateName returns a boolean if a field has been set.
func (o *InventoryItemTemplateType) HasInventoryItemTemplateName() bool {
	if o != nil && !IsNil(o.InventoryItemTemplateName) {
		return true
	}

	return false
}

// SetInventoryItemTemplateName gets a reference to the given string and assigns it to the InventoryItemTemplateName field.
func (o *InventoryItemTemplateType) SetInventoryItemTemplateName(v string) {
	o.InventoryItemTemplateName = &v
}

func (o InventoryItemTemplateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InventoryItemTemplateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InventoryItemTemplateId) {
		toSerialize["inventoryItemTemplateId"] = o.InventoryItemTemplateId
	}
	if !IsNil(o.InventoryItemTemplateItems) {
		toSerialize["inventoryItemTemplateItems"] = o.InventoryItemTemplateItems
	}
	if !IsNil(o.InventoryItemTemplateName) {
		toSerialize["inventoryItemTemplateName"] = o.InventoryItemTemplateName
	}
	return toSerialize, nil
}

type NullableInventoryItemTemplateType struct {
	value *InventoryItemTemplateType
	isSet bool
}

func (v NullableInventoryItemTemplateType) Get() *InventoryItemTemplateType {
	return v.value
}

func (v *NullableInventoryItemTemplateType) Set(val *InventoryItemTemplateType) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryItemTemplateType) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryItemTemplateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryItemTemplateType(val *InventoryItemTemplateType) *NullableInventoryItemTemplateType {
	return &NullableInventoryItemTemplateType{value: val, isSet: true}
}

func (v NullableInventoryItemTemplateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryItemTemplateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


