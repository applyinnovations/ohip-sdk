/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlansSchedulesToManage type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlansSchedulesToManage{}

// RatePlansSchedulesToManage Request object to create/change/delete rate plans schedules.
type RatePlansSchedulesToManage struct {
	// Hotel rate plan schedules to be managed.
	HotelRatePlansSchedules []HotelRatePlanSchedulesType `json:"hotelRatePlansSchedules,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRatePlansSchedulesToManage instantiates a new RatePlansSchedulesToManage object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlansSchedulesToManage() *RatePlansSchedulesToManage {
	this := RatePlansSchedulesToManage{}
	return &this
}

// NewRatePlansSchedulesToManageWithDefaults instantiates a new RatePlansSchedulesToManage object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlansSchedulesToManageWithDefaults() *RatePlansSchedulesToManage {
	this := RatePlansSchedulesToManage{}
	return &this
}

// GetHotelRatePlansSchedules returns the HotelRatePlansSchedules field value if set, zero value otherwise.
func (o *RatePlansSchedulesToManage) GetHotelRatePlansSchedules() []HotelRatePlanSchedulesType {
	if o == nil || IsNil(o.HotelRatePlansSchedules) {
		var ret []HotelRatePlanSchedulesType
		return ret
	}
	return o.HotelRatePlansSchedules
}

// GetHotelRatePlansSchedulesOk returns a tuple with the HotelRatePlansSchedules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSchedulesToManage) GetHotelRatePlansSchedulesOk() ([]HotelRatePlanSchedulesType, bool) {
	if o == nil || IsNil(o.HotelRatePlansSchedules) {
		return nil, false
	}
	return o.HotelRatePlansSchedules, true
}

// HasHotelRatePlansSchedules returns a boolean if a field has been set.
func (o *RatePlansSchedulesToManage) HasHotelRatePlansSchedules() bool {
	if o != nil && !IsNil(o.HotelRatePlansSchedules) {
		return true
	}

	return false
}

// SetHotelRatePlansSchedules gets a reference to the given []HotelRatePlanSchedulesType and assigns it to the HotelRatePlansSchedules field.
func (o *RatePlansSchedulesToManage) SetHotelRatePlansSchedules(v []HotelRatePlanSchedulesType) {
	o.HotelRatePlansSchedules = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RatePlansSchedulesToManage) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSchedulesToManage) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RatePlansSchedulesToManage) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RatePlansSchedulesToManage) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RatePlansSchedulesToManage) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSchedulesToManage) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RatePlansSchedulesToManage) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RatePlansSchedulesToManage) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RatePlansSchedulesToManage) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlansSchedulesToManage) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelRatePlansSchedules) {
		toSerialize["hotelRatePlansSchedules"] = o.HotelRatePlansSchedules
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRatePlansSchedulesToManage struct {
	value *RatePlansSchedulesToManage
	isSet bool
}

func (v NullableRatePlansSchedulesToManage) Get() *RatePlansSchedulesToManage {
	return v.value
}

func (v *NullableRatePlansSchedulesToManage) Set(val *RatePlansSchedulesToManage) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlansSchedulesToManage) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlansSchedulesToManage) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlansSchedulesToManage(val *RatePlansSchedulesToManage) *NullableRatePlansSchedulesToManage {
	return &NullableRatePlansSchedulesToManage{value: val, isSet: true}
}

func (v NullableRatePlansSchedulesToManage) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlansSchedulesToManage) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


