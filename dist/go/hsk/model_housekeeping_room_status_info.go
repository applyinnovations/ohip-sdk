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

// checks if the HousekeepingRoomStatusInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingRoomStatusInfo{}

// HousekeepingRoomStatusInfo Housekeeping Room Status Info Type
type HousekeepingRoomStatusInfo struct {
	Code *string `json:"code,omitempty"`
	HousekeepingRoomStatus *string `json:"housekeepingRoomStatus,omitempty"`
	NumberOfRooms *int32 `json:"numberOfRooms,omitempty"`
}

// NewHousekeepingRoomStatusInfo instantiates a new HousekeepingRoomStatusInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingRoomStatusInfo() *HousekeepingRoomStatusInfo {
	this := HousekeepingRoomStatusInfo{}
	return &this
}

// NewHousekeepingRoomStatusInfoWithDefaults instantiates a new HousekeepingRoomStatusInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingRoomStatusInfoWithDefaults() *HousekeepingRoomStatusInfo {
	this := HousekeepingRoomStatusInfo{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HousekeepingRoomStatusInfo) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomStatusInfo) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HousekeepingRoomStatusInfo) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HousekeepingRoomStatusInfo) SetCode(v string) {
	o.Code = &v
}

// GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field value if set, zero value otherwise.
func (o *HousekeepingRoomStatusInfo) GetHousekeepingRoomStatus() string {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		var ret string
		return ret
	}
	return *o.HousekeepingRoomStatus
}

// GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomStatusInfo) GetHousekeepingRoomStatusOk() (*string, bool) {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		return nil, false
	}
	return o.HousekeepingRoomStatus, true
}

// HasHousekeepingRoomStatus returns a boolean if a field has been set.
func (o *HousekeepingRoomStatusInfo) HasHousekeepingRoomStatus() bool {
	if o != nil && !IsNil(o.HousekeepingRoomStatus) {
		return true
	}

	return false
}

// SetHousekeepingRoomStatus gets a reference to the given string and assigns it to the HousekeepingRoomStatus field.
func (o *HousekeepingRoomStatusInfo) SetHousekeepingRoomStatus(v string) {
	o.HousekeepingRoomStatus = &v
}

// GetNumberOfRooms returns the NumberOfRooms field value if set, zero value otherwise.
func (o *HousekeepingRoomStatusInfo) GetNumberOfRooms() int32 {
	if o == nil || IsNil(o.NumberOfRooms) {
		var ret int32
		return ret
	}
	return *o.NumberOfRooms
}

// GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomStatusInfo) GetNumberOfRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfRooms) {
		return nil, false
	}
	return o.NumberOfRooms, true
}

// HasNumberOfRooms returns a boolean if a field has been set.
func (o *HousekeepingRoomStatusInfo) HasNumberOfRooms() bool {
	if o != nil && !IsNil(o.NumberOfRooms) {
		return true
	}

	return false
}

// SetNumberOfRooms gets a reference to the given int32 and assigns it to the NumberOfRooms field.
func (o *HousekeepingRoomStatusInfo) SetNumberOfRooms(v int32) {
	o.NumberOfRooms = &v
}

func (o HousekeepingRoomStatusInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingRoomStatusInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.HousekeepingRoomStatus) {
		toSerialize["housekeepingRoomStatus"] = o.HousekeepingRoomStatus
	}
	if !IsNil(o.NumberOfRooms) {
		toSerialize["numberOfRooms"] = o.NumberOfRooms
	}
	return toSerialize, nil
}

type NullableHousekeepingRoomStatusInfo struct {
	value *HousekeepingRoomStatusInfo
	isSet bool
}

func (v NullableHousekeepingRoomStatusInfo) Get() *HousekeepingRoomStatusInfo {
	return v.value
}

func (v *NullableHousekeepingRoomStatusInfo) Set(val *HousekeepingRoomStatusInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingRoomStatusInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingRoomStatusInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingRoomStatusInfo(val *HousekeepingRoomStatusInfo) *NullableHousekeepingRoomStatusInfo {
	return &NullableHousekeepingRoomStatusInfo{value: val, isSet: true}
}

func (v NullableHousekeepingRoomStatusInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingRoomStatusInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


