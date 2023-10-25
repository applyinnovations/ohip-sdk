/*
Opera Cloud Inventory Asynchronous API

APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package invasync

import (
	"encoding/json"
)

// checks if the SellLimitByDateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellLimitByDateType{}

// SellLimitByDateType This type is used by sell limit request.
type SellLimitByDateType struct {
	// Collection of House level sell limit by the date.
	HouseSellLimits []HouseSellLimitType `json:"houseSellLimits,omitempty"`
	// Collection of Room Class level sell limit by the date.
	RoomClassSellLimits []RoomClassSellLimitType `json:"roomClassSellLimits,omitempty"`
	// Collection of Room type level sell limit by the date.
	RoomTypeSellLimits []RoomTypeSellLimitType `json:"roomTypeSellLimits,omitempty"`
}

// NewSellLimitByDateType instantiates a new SellLimitByDateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellLimitByDateType() *SellLimitByDateType {
	this := SellLimitByDateType{}
	return &this
}

// NewSellLimitByDateTypeWithDefaults instantiates a new SellLimitByDateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellLimitByDateTypeWithDefaults() *SellLimitByDateType {
	this := SellLimitByDateType{}
	return &this
}

// GetHouseSellLimits returns the HouseSellLimits field value if set, zero value otherwise.
func (o *SellLimitByDateType) GetHouseSellLimits() []HouseSellLimitType {
	if o == nil || IsNil(o.HouseSellLimits) {
		var ret []HouseSellLimitType
		return ret
	}
	return o.HouseSellLimits
}

// GetHouseSellLimitsOk returns a tuple with the HouseSellLimits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateType) GetHouseSellLimitsOk() ([]HouseSellLimitType, bool) {
	if o == nil || IsNil(o.HouseSellLimits) {
		return nil, false
	}
	return o.HouseSellLimits, true
}

// HasHouseSellLimits returns a boolean if a field has been set.
func (o *SellLimitByDateType) HasHouseSellLimits() bool {
	if o != nil && !IsNil(o.HouseSellLimits) {
		return true
	}

	return false
}

// SetHouseSellLimits gets a reference to the given []HouseSellLimitType and assigns it to the HouseSellLimits field.
func (o *SellLimitByDateType) SetHouseSellLimits(v []HouseSellLimitType) {
	o.HouseSellLimits = v
}

// GetRoomClassSellLimits returns the RoomClassSellLimits field value if set, zero value otherwise.
func (o *SellLimitByDateType) GetRoomClassSellLimits() []RoomClassSellLimitType {
	if o == nil || IsNil(o.RoomClassSellLimits) {
		var ret []RoomClassSellLimitType
		return ret
	}
	return o.RoomClassSellLimits
}

// GetRoomClassSellLimitsOk returns a tuple with the RoomClassSellLimits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateType) GetRoomClassSellLimitsOk() ([]RoomClassSellLimitType, bool) {
	if o == nil || IsNil(o.RoomClassSellLimits) {
		return nil, false
	}
	return o.RoomClassSellLimits, true
}

// HasRoomClassSellLimits returns a boolean if a field has been set.
func (o *SellLimitByDateType) HasRoomClassSellLimits() bool {
	if o != nil && !IsNil(o.RoomClassSellLimits) {
		return true
	}

	return false
}

// SetRoomClassSellLimits gets a reference to the given []RoomClassSellLimitType and assigns it to the RoomClassSellLimits field.
func (o *SellLimitByDateType) SetRoomClassSellLimits(v []RoomClassSellLimitType) {
	o.RoomClassSellLimits = v
}

// GetRoomTypeSellLimits returns the RoomTypeSellLimits field value if set, zero value otherwise.
func (o *SellLimitByDateType) GetRoomTypeSellLimits() []RoomTypeSellLimitType {
	if o == nil || IsNil(o.RoomTypeSellLimits) {
		var ret []RoomTypeSellLimitType
		return ret
	}
	return o.RoomTypeSellLimits
}

// GetRoomTypeSellLimitsOk returns a tuple with the RoomTypeSellLimits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateType) GetRoomTypeSellLimitsOk() ([]RoomTypeSellLimitType, bool) {
	if o == nil || IsNil(o.RoomTypeSellLimits) {
		return nil, false
	}
	return o.RoomTypeSellLimits, true
}

// HasRoomTypeSellLimits returns a boolean if a field has been set.
func (o *SellLimitByDateType) HasRoomTypeSellLimits() bool {
	if o != nil && !IsNil(o.RoomTypeSellLimits) {
		return true
	}

	return false
}

// SetRoomTypeSellLimits gets a reference to the given []RoomTypeSellLimitType and assigns it to the RoomTypeSellLimits field.
func (o *SellLimitByDateType) SetRoomTypeSellLimits(v []RoomTypeSellLimitType) {
	o.RoomTypeSellLimits = v
}

func (o SellLimitByDateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellLimitByDateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HouseSellLimits) {
		toSerialize["houseSellLimits"] = o.HouseSellLimits
	}
	if !IsNil(o.RoomClassSellLimits) {
		toSerialize["roomClassSellLimits"] = o.RoomClassSellLimits
	}
	if !IsNil(o.RoomTypeSellLimits) {
		toSerialize["roomTypeSellLimits"] = o.RoomTypeSellLimits
	}
	return toSerialize, nil
}

type NullableSellLimitByDateType struct {
	value *SellLimitByDateType
	isSet bool
}

func (v NullableSellLimitByDateType) Get() *SellLimitByDateType {
	return v.value
}

func (v *NullableSellLimitByDateType) Set(val *SellLimitByDateType) {
	v.value = val
	v.isSet = true
}

func (v NullableSellLimitByDateType) IsSet() bool {
	return v.isSet
}

func (v *NullableSellLimitByDateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellLimitByDateType(val *SellLimitByDateType) *NullableSellLimitByDateType {
	return &NullableSellLimitByDateType{value: val, isSet: true}
}

func (v NullableSellLimitByDateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellLimitByDateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


