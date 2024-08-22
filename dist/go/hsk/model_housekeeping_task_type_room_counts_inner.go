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

// checks if the HousekeepingTaskTypeRoomCountsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskTypeRoomCountsInner{}

// HousekeepingTaskTypeRoomCountsInner struct for HousekeepingTaskTypeRoomCountsInner
type HousekeepingTaskTypeRoomCountsInner struct {
	TotalCount *int32 `json:"totalCount,omitempty"`
	// Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
	Value *string `json:"value,omitempty"`
}

// NewHousekeepingTaskTypeRoomCountsInner instantiates a new HousekeepingTaskTypeRoomCountsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskTypeRoomCountsInner() *HousekeepingTaskTypeRoomCountsInner {
	this := HousekeepingTaskTypeRoomCountsInner{}
	return &this
}

// NewHousekeepingTaskTypeRoomCountsInnerWithDefaults instantiates a new HousekeepingTaskTypeRoomCountsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskTypeRoomCountsInnerWithDefaults() *HousekeepingTaskTypeRoomCountsInner {
	this := HousekeepingTaskTypeRoomCountsInner{}
	return &this
}

// GetTotalCount returns the TotalCount field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeRoomCountsInner) GetTotalCount() int32 {
	if o == nil || IsNil(o.TotalCount) {
		var ret int32
		return ret
	}
	return *o.TotalCount
}

// GetTotalCountOk returns a tuple with the TotalCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeRoomCountsInner) GetTotalCountOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalCount) {
		return nil, false
	}
	return o.TotalCount, true
}

// HasTotalCount returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeRoomCountsInner) HasTotalCount() bool {
	if o != nil && !IsNil(o.TotalCount) {
		return true
	}

	return false
}

// SetTotalCount gets a reference to the given int32 and assigns it to the TotalCount field.
func (o *HousekeepingTaskTypeRoomCountsInner) SetTotalCount(v int32) {
	o.TotalCount = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeRoomCountsInner) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeRoomCountsInner) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeRoomCountsInner) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *HousekeepingTaskTypeRoomCountsInner) SetValue(v string) {
	o.Value = &v
}

func (o HousekeepingTaskTypeRoomCountsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskTypeRoomCountsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TotalCount) {
		toSerialize["totalCount"] = o.TotalCount
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskTypeRoomCountsInner struct {
	value *HousekeepingTaskTypeRoomCountsInner
	isSet bool
}

func (v NullableHousekeepingTaskTypeRoomCountsInner) Get() *HousekeepingTaskTypeRoomCountsInner {
	return v.value
}

func (v *NullableHousekeepingTaskTypeRoomCountsInner) Set(val *HousekeepingTaskTypeRoomCountsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskTypeRoomCountsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskTypeRoomCountsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskTypeRoomCountsInner(val *HousekeepingTaskTypeRoomCountsInner) *NullableHousekeepingTaskTypeRoomCountsInner {
	return &NullableHousekeepingTaskTypeRoomCountsInner{value: val, isSet: true}
}

func (v NullableHousekeepingTaskTypeRoomCountsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskTypeRoomCountsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


