/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ShiftedBlock type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ShiftedBlock{}

// ShiftedBlock Response object for shift block operation.
type ShiftedBlock struct {
	// Status/Info of the processed events.
	CateringEventsProcessedInfo []CateringEventsProcessedInfoType `json:"cateringEventsProcessedInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewShiftedBlock instantiates a new ShiftedBlock object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewShiftedBlock() *ShiftedBlock {
	this := ShiftedBlock{}
	return &this
}

// NewShiftedBlockWithDefaults instantiates a new ShiftedBlock object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewShiftedBlockWithDefaults() *ShiftedBlock {
	this := ShiftedBlock{}
	return &this
}

// GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field value if set, zero value otherwise.
func (o *ShiftedBlock) GetCateringEventsProcessedInfo() []CateringEventsProcessedInfoType {
	if o == nil || IsNil(o.CateringEventsProcessedInfo) {
		var ret []CateringEventsProcessedInfoType
		return ret
	}
	return o.CateringEventsProcessedInfo
}

// GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftedBlock) GetCateringEventsProcessedInfoOk() ([]CateringEventsProcessedInfoType, bool) {
	if o == nil || IsNil(o.CateringEventsProcessedInfo) {
		return nil, false
	}
	return o.CateringEventsProcessedInfo, true
}

// HasCateringEventsProcessedInfo returns a boolean if a field has been set.
func (o *ShiftedBlock) HasCateringEventsProcessedInfo() bool {
	if o != nil && !IsNil(o.CateringEventsProcessedInfo) {
		return true
	}

	return false
}

// SetCateringEventsProcessedInfo gets a reference to the given []CateringEventsProcessedInfoType and assigns it to the CateringEventsProcessedInfo field.
func (o *ShiftedBlock) SetCateringEventsProcessedInfo(v []CateringEventsProcessedInfoType) {
	o.CateringEventsProcessedInfo = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ShiftedBlock) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftedBlock) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ShiftedBlock) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ShiftedBlock) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ShiftedBlock) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftedBlock) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ShiftedBlock) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ShiftedBlock) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ShiftedBlock) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ShiftedBlock) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CateringEventsProcessedInfo) {
		toSerialize["cateringEventsProcessedInfo"] = o.CateringEventsProcessedInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableShiftedBlock struct {
	value *ShiftedBlock
	isSet bool
}

func (v NullableShiftedBlock) Get() *ShiftedBlock {
	return v.value
}

func (v *NullableShiftedBlock) Set(val *ShiftedBlock) {
	v.value = val
	v.isSet = true
}

func (v NullableShiftedBlock) IsSet() bool {
	return v.isSet
}

func (v *NullableShiftedBlock) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableShiftedBlock(val *ShiftedBlock) *NullableShiftedBlock {
	return &NullableShiftedBlock{value: val, isSet: true}
}

func (v NullableShiftedBlock) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableShiftedBlock) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


