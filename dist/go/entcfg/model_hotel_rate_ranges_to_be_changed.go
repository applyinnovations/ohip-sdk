/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelRateRangesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRateRangesToBeChanged{}

// HotelRateRangesToBeChanged Request object for changing hotel Rate Ranges for hotels.
type HotelRateRangesToBeChanged struct {
	// Lists of rate ranges of the hotel.
	HotelRateRanges []HotelRateRangeType `json:"hotelRateRanges,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHotelRateRangesToBeChanged instantiates a new HotelRateRangesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRateRangesToBeChanged() *HotelRateRangesToBeChanged {
	this := HotelRateRangesToBeChanged{}
	return &this
}

// NewHotelRateRangesToBeChangedWithDefaults instantiates a new HotelRateRangesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRateRangesToBeChangedWithDefaults() *HotelRateRangesToBeChanged {
	this := HotelRateRangesToBeChanged{}
	return &this
}

// GetHotelRateRanges returns the HotelRateRanges field value if set, zero value otherwise.
func (o *HotelRateRangesToBeChanged) GetHotelRateRanges() []HotelRateRangeType {
	if o == nil || IsNil(o.HotelRateRanges) {
		var ret []HotelRateRangeType
		return ret
	}
	return o.HotelRateRanges
}

// GetHotelRateRangesOk returns a tuple with the HotelRateRanges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateRangesToBeChanged) GetHotelRateRangesOk() ([]HotelRateRangeType, bool) {
	if o == nil || IsNil(o.HotelRateRanges) {
		return nil, false
	}
	return o.HotelRateRanges, true
}

// HasHotelRateRanges returns a boolean if a field has been set.
func (o *HotelRateRangesToBeChanged) HasHotelRateRanges() bool {
	if o != nil && !IsNil(o.HotelRateRanges) {
		return true
	}

	return false
}

// SetHotelRateRanges gets a reference to the given []HotelRateRangeType and assigns it to the HotelRateRanges field.
func (o *HotelRateRangesToBeChanged) SetHotelRateRanges(v []HotelRateRangeType) {
	o.HotelRateRanges = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HotelRateRangesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateRangesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HotelRateRangesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HotelRateRangesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HotelRateRangesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateRangesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HotelRateRangesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HotelRateRangesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HotelRateRangesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRateRangesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelRateRanges) {
		toSerialize["hotelRateRanges"] = o.HotelRateRanges
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHotelRateRangesToBeChanged struct {
	value *HotelRateRangesToBeChanged
	isSet bool
}

func (v NullableHotelRateRangesToBeChanged) Get() *HotelRateRangesToBeChanged {
	return v.value
}

func (v *NullableHotelRateRangesToBeChanged) Set(val *HotelRateRangesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRateRangesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRateRangesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRateRangesToBeChanged(val *HotelRateRangesToBeChanged) *NullableHotelRateRangesToBeChanged {
	return &NullableHotelRateRangesToBeChanged{value: val, isSet: true}
}

func (v NullableHotelRateRangesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRateRangesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


