/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomRepairOutOfOrder type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRepairOutOfOrder{}

// RoomRepairOutOfOrder struct for RoomRepairOutOfOrder
type RoomRepairOutOfOrder struct {
	Criteria *RoomRepairOutOfOrderCriteria `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomRepairOutOfOrder instantiates a new RoomRepairOutOfOrder object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRepairOutOfOrder() *RoomRepairOutOfOrder {
	this := RoomRepairOutOfOrder{}
	return &this
}

// NewRoomRepairOutOfOrderWithDefaults instantiates a new RoomRepairOutOfOrder object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRepairOutOfOrderWithDefaults() *RoomRepairOutOfOrder {
	this := RoomRepairOutOfOrder{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *RoomRepairOutOfOrder) GetCriteria() RoomRepairOutOfOrderCriteria {
	if o == nil || IsNil(o.Criteria) {
		var ret RoomRepairOutOfOrderCriteria
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRepairOutOfOrder) GetCriteriaOk() (*RoomRepairOutOfOrderCriteria, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *RoomRepairOutOfOrder) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given RoomRepairOutOfOrderCriteria and assigns it to the Criteria field.
func (o *RoomRepairOutOfOrder) SetCriteria(v RoomRepairOutOfOrderCriteria) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomRepairOutOfOrder) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRepairOutOfOrder) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomRepairOutOfOrder) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomRepairOutOfOrder) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomRepairOutOfOrder) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRepairOutOfOrder) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomRepairOutOfOrder) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomRepairOutOfOrder) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomRepairOutOfOrder) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRepairOutOfOrder) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomRepairOutOfOrder struct {
	value *RoomRepairOutOfOrder
	isSet bool
}

func (v NullableRoomRepairOutOfOrder) Get() *RoomRepairOutOfOrder {
	return v.value
}

func (v *NullableRoomRepairOutOfOrder) Set(val *RoomRepairOutOfOrder) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRepairOutOfOrder) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRepairOutOfOrder) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRepairOutOfOrder(val *RoomRepairOutOfOrder) *NullableRoomRepairOutOfOrder {
	return &NullableRoomRepairOutOfOrder{value: val, isSet: true}
}

func (v NullableRoomRepairOutOfOrder) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRepairOutOfOrder) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


