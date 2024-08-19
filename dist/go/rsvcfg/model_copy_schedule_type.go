/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the CopyScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyScheduleType{}

// CopyScheduleType The Schedule copy criteria type.
type CopyScheduleType struct {
	ScheduleId *UniqueIDType `json:"scheduleId,omitempty"`
	TargetHotelCodes []string `json:"targetHotelCodes,omitempty"`
}

// NewCopyScheduleType instantiates a new CopyScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyScheduleType() *CopyScheduleType {
	this := CopyScheduleType{}
	return &this
}

// NewCopyScheduleTypeWithDefaults instantiates a new CopyScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyScheduleTypeWithDefaults() *CopyScheduleType {
	this := CopyScheduleType{}
	return &this
}

// GetScheduleId returns the ScheduleId field value if set, zero value otherwise.
func (o *CopyScheduleType) GetScheduleId() UniqueIDType {
	if o == nil || IsNil(o.ScheduleId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ScheduleId
}

// GetScheduleIdOk returns a tuple with the ScheduleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyScheduleType) GetScheduleIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ScheduleId) {
		return nil, false
	}
	return o.ScheduleId, true
}

// HasScheduleId returns a boolean if a field has been set.
func (o *CopyScheduleType) HasScheduleId() bool {
	if o != nil && !IsNil(o.ScheduleId) {
		return true
	}

	return false
}

// SetScheduleId gets a reference to the given UniqueIDType and assigns it to the ScheduleId field.
func (o *CopyScheduleType) SetScheduleId(v UniqueIDType) {
	o.ScheduleId = &v
}

// GetTargetHotelCodes returns the TargetHotelCodes field value if set, zero value otherwise.
func (o *CopyScheduleType) GetTargetHotelCodes() []string {
	if o == nil || IsNil(o.TargetHotelCodes) {
		var ret []string
		return ret
	}
	return o.TargetHotelCodes
}

// GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyScheduleType) GetTargetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCodes) {
		return nil, false
	}
	return o.TargetHotelCodes, true
}

// HasTargetHotelCodes returns a boolean if a field has been set.
func (o *CopyScheduleType) HasTargetHotelCodes() bool {
	if o != nil && !IsNil(o.TargetHotelCodes) {
		return true
	}

	return false
}

// SetTargetHotelCodes gets a reference to the given []string and assigns it to the TargetHotelCodes field.
func (o *CopyScheduleType) SetTargetHotelCodes(v []string) {
	o.TargetHotelCodes = v
}

func (o CopyScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ScheduleId) {
		toSerialize["scheduleId"] = o.ScheduleId
	}
	if !IsNil(o.TargetHotelCodes) {
		toSerialize["targetHotelCodes"] = o.TargetHotelCodes
	}
	return toSerialize, nil
}

type NullableCopyScheduleType struct {
	value *CopyScheduleType
	isSet bool
}

func (v NullableCopyScheduleType) Get() *CopyScheduleType {
	return v.value
}

func (v *NullableCopyScheduleType) Set(val *CopyScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyScheduleType(val *CopyScheduleType) *NullableCopyScheduleType {
	return &NullableCopyScheduleType{value: val, isSet: true}
}

func (v NullableCopyScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


