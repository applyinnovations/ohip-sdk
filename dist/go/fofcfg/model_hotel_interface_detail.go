/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the HotelInterfaceDetail type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInterfaceDetail{}

// HotelInterfaceDetail Request object for changing Hotel Interface Data.
type HotelInterfaceDetail struct {
	Details *HotelInterfaceDetailType `json:"details,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHotelInterfaceDetail instantiates a new HotelInterfaceDetail object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInterfaceDetail() *HotelInterfaceDetail {
	this := HotelInterfaceDetail{}
	return &this
}

// NewHotelInterfaceDetailWithDefaults instantiates a new HotelInterfaceDetail object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInterfaceDetailWithDefaults() *HotelInterfaceDetail {
	this := HotelInterfaceDetail{}
	return &this
}

// GetDetails returns the Details field value if set, zero value otherwise.
func (o *HotelInterfaceDetail) GetDetails() HotelInterfaceDetailType {
	if o == nil || IsNil(o.Details) {
		var ret HotelInterfaceDetailType
		return ret
	}
	return *o.Details
}

// GetDetailsOk returns a tuple with the Details field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceDetail) GetDetailsOk() (*HotelInterfaceDetailType, bool) {
	if o == nil || IsNil(o.Details) {
		return nil, false
	}
	return o.Details, true
}

// HasDetails returns a boolean if a field has been set.
func (o *HotelInterfaceDetail) HasDetails() bool {
	if o != nil && !IsNil(o.Details) {
		return true
	}

	return false
}

// SetDetails gets a reference to the given HotelInterfaceDetailType and assigns it to the Details field.
func (o *HotelInterfaceDetail) SetDetails(v HotelInterfaceDetailType) {
	o.Details = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HotelInterfaceDetail) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceDetail) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HotelInterfaceDetail) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HotelInterfaceDetail) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HotelInterfaceDetail) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceDetail) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HotelInterfaceDetail) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HotelInterfaceDetail) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HotelInterfaceDetail) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInterfaceDetail) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Details) {
		toSerialize["details"] = o.Details
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHotelInterfaceDetail struct {
	value *HotelInterfaceDetail
	isSet bool
}

func (v NullableHotelInterfaceDetail) Get() *HotelInterfaceDetail {
	return v.value
}

func (v *NullableHotelInterfaceDetail) Set(val *HotelInterfaceDetail) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInterfaceDetail) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInterfaceDetail) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInterfaceDetail(val *HotelInterfaceDetail) *NullableHotelInterfaceDetail {
	return &NullableHotelInterfaceDetail{value: val, isSet: true}
}

func (v NullableHotelInterfaceDetail) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInterfaceDetail) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

