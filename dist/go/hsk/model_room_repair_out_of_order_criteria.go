/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomRepairOutOfOrderCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRepairOutOfOrderCriteria{}

// RoomRepairOutOfOrderCriteria Criteria to set the room or a collection of rooms out of order. The criteria can include a collection of rooms or a range of rooms along with the date range.
type RoomRepairOutOfOrderCriteria struct {
	RoomRangeList *RoomRepairOutOfOrderCriteriaRoomRangeList `json:"roomRangeList,omitempty"`
}

// NewRoomRepairOutOfOrderCriteria instantiates a new RoomRepairOutOfOrderCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRepairOutOfOrderCriteria() *RoomRepairOutOfOrderCriteria {
	this := RoomRepairOutOfOrderCriteria{}
	return &this
}

// NewRoomRepairOutOfOrderCriteriaWithDefaults instantiates a new RoomRepairOutOfOrderCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRepairOutOfOrderCriteriaWithDefaults() *RoomRepairOutOfOrderCriteria {
	this := RoomRepairOutOfOrderCriteria{}
	return &this
}

// GetRoomRangeList returns the RoomRangeList field value if set, zero value otherwise.
func (o *RoomRepairOutOfOrderCriteria) GetRoomRangeList() RoomRepairOutOfOrderCriteriaRoomRangeList {
	if o == nil || IsNil(o.RoomRangeList) {
		var ret RoomRepairOutOfOrderCriteriaRoomRangeList
		return ret
	}
	return *o.RoomRangeList
}

// GetRoomRangeListOk returns a tuple with the RoomRangeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRepairOutOfOrderCriteria) GetRoomRangeListOk() (*RoomRepairOutOfOrderCriteriaRoomRangeList, bool) {
	if o == nil || IsNil(o.RoomRangeList) {
		return nil, false
	}
	return o.RoomRangeList, true
}

// HasRoomRangeList returns a boolean if a field has been set.
func (o *RoomRepairOutOfOrderCriteria) HasRoomRangeList() bool {
	if o != nil && !IsNil(o.RoomRangeList) {
		return true
	}

	return false
}

// SetRoomRangeList gets a reference to the given RoomRepairOutOfOrderCriteriaRoomRangeList and assigns it to the RoomRangeList field.
func (o *RoomRepairOutOfOrderCriteria) SetRoomRangeList(v RoomRepairOutOfOrderCriteriaRoomRangeList) {
	o.RoomRangeList = &v
}

func (o RoomRepairOutOfOrderCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRepairOutOfOrderCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RoomRangeList) {
		toSerialize["roomRangeList"] = o.RoomRangeList
	}
	return toSerialize, nil
}

type NullableRoomRepairOutOfOrderCriteria struct {
	value *RoomRepairOutOfOrderCriteria
	isSet bool
}

func (v NullableRoomRepairOutOfOrderCriteria) Get() *RoomRepairOutOfOrderCriteria {
	return v.value
}

func (v *NullableRoomRepairOutOfOrderCriteria) Set(val *RoomRepairOutOfOrderCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRepairOutOfOrderCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRepairOutOfOrderCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRepairOutOfOrderCriteria(val *RoomRepairOutOfOrderCriteria) *NullableRoomRepairOutOfOrderCriteria {
	return &NullableRoomRepairOutOfOrderCriteria{value: val, isSet: true}
}

func (v NullableRoomRepairOutOfOrderCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRepairOutOfOrderCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


