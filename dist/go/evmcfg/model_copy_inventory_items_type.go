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

// checks if the CopyInventoryItemsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyInventoryItemsType{}

// CopyInventoryItemsType Copy Inventory Items criteria type to copy multiple Inventory Items from one Hotel to other Hotels.
type CopyInventoryItemsType struct {
	// The details of Inventory Items to be copied.
	CopyInventoryItem []CopyInventoryItemType `json:"copyInventoryItem,omitempty"`
	// Hotel Code from which Inventory Items are being copied.
	HotelId *string `json:"hotelId,omitempty"`
	// If true, include to copy the Item Attributes.
	IncludeAttributes *bool `json:"includeAttributes,omitempty"`
	// If true, include to copy the Item Rates.
	IncludeRates *bool `json:"includeRates,omitempty"`
	// If true, include to copy the Item Vendor.
	IncludeVendors *bool `json:"includeVendors,omitempty"`
}

// NewCopyInventoryItemsType instantiates a new CopyInventoryItemsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyInventoryItemsType() *CopyInventoryItemsType {
	this := CopyInventoryItemsType{}
	return &this
}

// NewCopyInventoryItemsTypeWithDefaults instantiates a new CopyInventoryItemsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyInventoryItemsTypeWithDefaults() *CopyInventoryItemsType {
	this := CopyInventoryItemsType{}
	return &this
}

// GetCopyInventoryItem returns the CopyInventoryItem field value if set, zero value otherwise.
func (o *CopyInventoryItemsType) GetCopyInventoryItem() []CopyInventoryItemType {
	if o == nil || IsNil(o.CopyInventoryItem) {
		var ret []CopyInventoryItemType
		return ret
	}
	return o.CopyInventoryItem
}

// GetCopyInventoryItemOk returns a tuple with the CopyInventoryItem field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyInventoryItemsType) GetCopyInventoryItemOk() ([]CopyInventoryItemType, bool) {
	if o == nil || IsNil(o.CopyInventoryItem) {
		return nil, false
	}
	return o.CopyInventoryItem, true
}

// HasCopyInventoryItem returns a boolean if a field has been set.
func (o *CopyInventoryItemsType) HasCopyInventoryItem() bool {
	if o != nil && !IsNil(o.CopyInventoryItem) {
		return true
	}

	return false
}

// SetCopyInventoryItem gets a reference to the given []CopyInventoryItemType and assigns it to the CopyInventoryItem field.
func (o *CopyInventoryItemsType) SetCopyInventoryItem(v []CopyInventoryItemType) {
	o.CopyInventoryItem = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CopyInventoryItemsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyInventoryItemsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CopyInventoryItemsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CopyInventoryItemsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIncludeAttributes returns the IncludeAttributes field value if set, zero value otherwise.
func (o *CopyInventoryItemsType) GetIncludeAttributes() bool {
	if o == nil || IsNil(o.IncludeAttributes) {
		var ret bool
		return ret
	}
	return *o.IncludeAttributes
}

// GetIncludeAttributesOk returns a tuple with the IncludeAttributes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyInventoryItemsType) GetIncludeAttributesOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeAttributes) {
		return nil, false
	}
	return o.IncludeAttributes, true
}

// HasIncludeAttributes returns a boolean if a field has been set.
func (o *CopyInventoryItemsType) HasIncludeAttributes() bool {
	if o != nil && !IsNil(o.IncludeAttributes) {
		return true
	}

	return false
}

// SetIncludeAttributes gets a reference to the given bool and assigns it to the IncludeAttributes field.
func (o *CopyInventoryItemsType) SetIncludeAttributes(v bool) {
	o.IncludeAttributes = &v
}

// GetIncludeRates returns the IncludeRates field value if set, zero value otherwise.
func (o *CopyInventoryItemsType) GetIncludeRates() bool {
	if o == nil || IsNil(o.IncludeRates) {
		var ret bool
		return ret
	}
	return *o.IncludeRates
}

// GetIncludeRatesOk returns a tuple with the IncludeRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyInventoryItemsType) GetIncludeRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeRates) {
		return nil, false
	}
	return o.IncludeRates, true
}

// HasIncludeRates returns a boolean if a field has been set.
func (o *CopyInventoryItemsType) HasIncludeRates() bool {
	if o != nil && !IsNil(o.IncludeRates) {
		return true
	}

	return false
}

// SetIncludeRates gets a reference to the given bool and assigns it to the IncludeRates field.
func (o *CopyInventoryItemsType) SetIncludeRates(v bool) {
	o.IncludeRates = &v
}

// GetIncludeVendors returns the IncludeVendors field value if set, zero value otherwise.
func (o *CopyInventoryItemsType) GetIncludeVendors() bool {
	if o == nil || IsNil(o.IncludeVendors) {
		var ret bool
		return ret
	}
	return *o.IncludeVendors
}

// GetIncludeVendorsOk returns a tuple with the IncludeVendors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyInventoryItemsType) GetIncludeVendorsOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeVendors) {
		return nil, false
	}
	return o.IncludeVendors, true
}

// HasIncludeVendors returns a boolean if a field has been set.
func (o *CopyInventoryItemsType) HasIncludeVendors() bool {
	if o != nil && !IsNil(o.IncludeVendors) {
		return true
	}

	return false
}

// SetIncludeVendors gets a reference to the given bool and assigns it to the IncludeVendors field.
func (o *CopyInventoryItemsType) SetIncludeVendors(v bool) {
	o.IncludeVendors = &v
}

func (o CopyInventoryItemsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyInventoryItemsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInventoryItem) {
		toSerialize["copyInventoryItem"] = o.CopyInventoryItem
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IncludeAttributes) {
		toSerialize["includeAttributes"] = o.IncludeAttributes
	}
	if !IsNil(o.IncludeRates) {
		toSerialize["includeRates"] = o.IncludeRates
	}
	if !IsNil(o.IncludeVendors) {
		toSerialize["includeVendors"] = o.IncludeVendors
	}
	return toSerialize, nil
}

type NullableCopyInventoryItemsType struct {
	value *CopyInventoryItemsType
	isSet bool
}

func (v NullableCopyInventoryItemsType) Get() *CopyInventoryItemsType {
	return v.value
}

func (v *NullableCopyInventoryItemsType) Set(val *CopyInventoryItemsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyInventoryItemsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyInventoryItemsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyInventoryItemsType(val *CopyInventoryItemsType) *NullableCopyInventoryItemsType {
	return &NullableCopyInventoryItemsType{value: val, isSet: true}
}

func (v NullableCopyInventoryItemsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyInventoryItemsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


