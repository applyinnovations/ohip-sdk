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

// checks if the CompleteRoomRepairCriteriaRoomRangeListRange type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompleteRoomRepairCriteriaRoomRangeListRange{}

// CompleteRoomRepairCriteriaRoomRangeListRange struct for CompleteRoomRepairCriteriaRoomRangeListRange
type CompleteRoomRepairCriteriaRoomRangeListRange struct {
	RoomRange *RoomRangeType `json:"roomRange,omitempty"`
}

// NewCompleteRoomRepairCriteriaRoomRangeListRange instantiates a new CompleteRoomRepairCriteriaRoomRangeListRange object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompleteRoomRepairCriteriaRoomRangeListRange() *CompleteRoomRepairCriteriaRoomRangeListRange {
	this := CompleteRoomRepairCriteriaRoomRangeListRange{}
	return &this
}

// NewCompleteRoomRepairCriteriaRoomRangeListRangeWithDefaults instantiates a new CompleteRoomRepairCriteriaRoomRangeListRange object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompleteRoomRepairCriteriaRoomRangeListRangeWithDefaults() *CompleteRoomRepairCriteriaRoomRangeListRange {
	this := CompleteRoomRepairCriteriaRoomRangeListRange{}
	return &this
}

// GetRoomRange returns the RoomRange field value if set, zero value otherwise.
func (o *CompleteRoomRepairCriteriaRoomRangeListRange) GetRoomRange() RoomRangeType {
	if o == nil || IsNil(o.RoomRange) {
		var ret RoomRangeType
		return ret
	}
	return *o.RoomRange
}

// GetRoomRangeOk returns a tuple with the RoomRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompleteRoomRepairCriteriaRoomRangeListRange) GetRoomRangeOk() (*RoomRangeType, bool) {
	if o == nil || IsNil(o.RoomRange) {
		return nil, false
	}
	return o.RoomRange, true
}

// HasRoomRange returns a boolean if a field has been set.
func (o *CompleteRoomRepairCriteriaRoomRangeListRange) HasRoomRange() bool {
	if o != nil && !IsNil(o.RoomRange) {
		return true
	}

	return false
}

// SetRoomRange gets a reference to the given RoomRangeType and assigns it to the RoomRange field.
func (o *CompleteRoomRepairCriteriaRoomRangeListRange) SetRoomRange(v RoomRangeType) {
	o.RoomRange = &v
}

func (o CompleteRoomRepairCriteriaRoomRangeListRange) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompleteRoomRepairCriteriaRoomRangeListRange) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RoomRange) {
		toSerialize["roomRange"] = o.RoomRange
	}
	return toSerialize, nil
}

type NullableCompleteRoomRepairCriteriaRoomRangeListRange struct {
	value *CompleteRoomRepairCriteriaRoomRangeListRange
	isSet bool
}

func (v NullableCompleteRoomRepairCriteriaRoomRangeListRange) Get() *CompleteRoomRepairCriteriaRoomRangeListRange {
	return v.value
}

func (v *NullableCompleteRoomRepairCriteriaRoomRangeListRange) Set(val *CompleteRoomRepairCriteriaRoomRangeListRange) {
	v.value = val
	v.isSet = true
}

func (v NullableCompleteRoomRepairCriteriaRoomRangeListRange) IsSet() bool {
	return v.isSet
}

func (v *NullableCompleteRoomRepairCriteriaRoomRangeListRange) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompleteRoomRepairCriteriaRoomRangeListRange(val *CompleteRoomRepairCriteriaRoomRangeListRange) *NullableCompleteRoomRepairCriteriaRoomRangeListRange {
	return &NullableCompleteRoomRepairCriteriaRoomRangeListRange{value: val, isSet: true}
}

func (v NullableCompleteRoomRepairCriteriaRoomRangeListRange) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompleteRoomRepairCriteriaRoomRangeListRange) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


