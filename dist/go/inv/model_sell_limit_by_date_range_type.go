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

// checks if the SellLimitByDateRangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellLimitByDateRangeType{}

// SellLimitByDateRangeType This type is used by sell limit request for date ranges.
type SellLimitByDateRangeType struct {
	CodeCategory *RoomCodeCategoryType `json:"codeCategory,omitempty"`
	CodeValue *string `json:"codeValue,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// Collection of date ranges and sell limit amount.
	SellLimitDateRanges []SellLimitDateRangeType `json:"sellLimitDateRanges,omitempty"`
}

// NewSellLimitByDateRangeType instantiates a new SellLimitByDateRangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellLimitByDateRangeType() *SellLimitByDateRangeType {
	this := SellLimitByDateRangeType{}
	return &this
}

// NewSellLimitByDateRangeTypeWithDefaults instantiates a new SellLimitByDateRangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellLimitByDateRangeTypeWithDefaults() *SellLimitByDateRangeType {
	this := SellLimitByDateRangeType{}
	return &this
}

// GetCodeCategory returns the CodeCategory field value if set, zero value otherwise.
func (o *SellLimitByDateRangeType) GetCodeCategory() RoomCodeCategoryType {
	if o == nil || IsNil(o.CodeCategory) {
		var ret RoomCodeCategoryType
		return ret
	}
	return *o.CodeCategory
}

// GetCodeCategoryOk returns a tuple with the CodeCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateRangeType) GetCodeCategoryOk() (*RoomCodeCategoryType, bool) {
	if o == nil || IsNil(o.CodeCategory) {
		return nil, false
	}
	return o.CodeCategory, true
}

// HasCodeCategory returns a boolean if a field has been set.
func (o *SellLimitByDateRangeType) HasCodeCategory() bool {
	if o != nil && !IsNil(o.CodeCategory) {
		return true
	}

	return false
}

// SetCodeCategory gets a reference to the given RoomCodeCategoryType and assigns it to the CodeCategory field.
func (o *SellLimitByDateRangeType) SetCodeCategory(v RoomCodeCategoryType) {
	o.CodeCategory = &v
}

// GetCodeValue returns the CodeValue field value if set, zero value otherwise.
func (o *SellLimitByDateRangeType) GetCodeValue() string {
	if o == nil || IsNil(o.CodeValue) {
		var ret string
		return ret
	}
	return *o.CodeValue
}

// GetCodeValueOk returns a tuple with the CodeValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateRangeType) GetCodeValueOk() (*string, bool) {
	if o == nil || IsNil(o.CodeValue) {
		return nil, false
	}
	return o.CodeValue, true
}

// HasCodeValue returns a boolean if a field has been set.
func (o *SellLimitByDateRangeType) HasCodeValue() bool {
	if o != nil && !IsNil(o.CodeValue) {
		return true
	}

	return false
}

// SetCodeValue gets a reference to the given string and assigns it to the CodeValue field.
func (o *SellLimitByDateRangeType) SetCodeValue(v string) {
	o.CodeValue = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SellLimitByDateRangeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateRangeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SellLimitByDateRangeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SellLimitByDateRangeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSellLimitDateRanges returns the SellLimitDateRanges field value if set, zero value otherwise.
func (o *SellLimitByDateRangeType) GetSellLimitDateRanges() []SellLimitDateRangeType {
	if o == nil || IsNil(o.SellLimitDateRanges) {
		var ret []SellLimitDateRangeType
		return ret
	}
	return o.SellLimitDateRanges
}

// GetSellLimitDateRangesOk returns a tuple with the SellLimitDateRanges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateRangeType) GetSellLimitDateRangesOk() ([]SellLimitDateRangeType, bool) {
	if o == nil || IsNil(o.SellLimitDateRanges) {
		return nil, false
	}
	return o.SellLimitDateRanges, true
}

// HasSellLimitDateRanges returns a boolean if a field has been set.
func (o *SellLimitByDateRangeType) HasSellLimitDateRanges() bool {
	if o != nil && !IsNil(o.SellLimitDateRanges) {
		return true
	}

	return false
}

// SetSellLimitDateRanges gets a reference to the given []SellLimitDateRangeType and assigns it to the SellLimitDateRanges field.
func (o *SellLimitByDateRangeType) SetSellLimitDateRanges(v []SellLimitDateRangeType) {
	o.SellLimitDateRanges = v
}

func (o SellLimitByDateRangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellLimitByDateRangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CodeCategory) {
		toSerialize["codeCategory"] = o.CodeCategory
	}
	if !IsNil(o.CodeValue) {
		toSerialize["codeValue"] = o.CodeValue
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.SellLimitDateRanges) {
		toSerialize["sellLimitDateRanges"] = o.SellLimitDateRanges
	}
	return toSerialize, nil
}

type NullableSellLimitByDateRangeType struct {
	value *SellLimitByDateRangeType
	isSet bool
}

func (v NullableSellLimitByDateRangeType) Get() *SellLimitByDateRangeType {
	return v.value
}

func (v *NullableSellLimitByDateRangeType) Set(val *SellLimitByDateRangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableSellLimitByDateRangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableSellLimitByDateRangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellLimitByDateRangeType(val *SellLimitByDateRangeType) *NullableSellLimitByDateRangeType {
	return &NullableSellLimitByDateRangeType{value: val, isSet: true}
}

func (v NullableSellLimitByDateRangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellLimitByDateRangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


