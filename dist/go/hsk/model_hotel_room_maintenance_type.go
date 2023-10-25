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

// checks if the HotelRoomMaintenanceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRoomMaintenanceType{}

// HotelRoomMaintenanceType Hotel Rooms maintenance information type.
type HotelRoomMaintenanceType struct {
	HotelId *string `json:"hotelId,omitempty"`
	RoomMaintenance []RoomMaintenanceType `json:"roomMaintenance,omitempty"`
}

// NewHotelRoomMaintenanceType instantiates a new HotelRoomMaintenanceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRoomMaintenanceType() *HotelRoomMaintenanceType {
	this := HotelRoomMaintenanceType{}
	return &this
}

// NewHotelRoomMaintenanceTypeWithDefaults instantiates a new HotelRoomMaintenanceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRoomMaintenanceTypeWithDefaults() *HotelRoomMaintenanceType {
	this := HotelRoomMaintenanceType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelRoomMaintenanceType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomMaintenance returns the RoomMaintenance field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceType) GetRoomMaintenance() []RoomMaintenanceType {
	if o == nil || IsNil(o.RoomMaintenance) {
		var ret []RoomMaintenanceType
		return ret
	}
	return o.RoomMaintenance
}

// GetRoomMaintenanceOk returns a tuple with the RoomMaintenance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceType) GetRoomMaintenanceOk() ([]RoomMaintenanceType, bool) {
	if o == nil || IsNil(o.RoomMaintenance) {
		return nil, false
	}
	return o.RoomMaintenance, true
}

// HasRoomMaintenance returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceType) HasRoomMaintenance() bool {
	if o != nil && !IsNil(o.RoomMaintenance) {
		return true
	}

	return false
}

// SetRoomMaintenance gets a reference to the given []RoomMaintenanceType and assigns it to the RoomMaintenance field.
func (o *HotelRoomMaintenanceType) SetRoomMaintenance(v []RoomMaintenanceType) {
	o.RoomMaintenance = v
}

func (o HotelRoomMaintenanceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRoomMaintenanceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomMaintenance) {
		toSerialize["roomMaintenance"] = o.RoomMaintenance
	}
	return toSerialize, nil
}

type NullableHotelRoomMaintenanceType struct {
	value *HotelRoomMaintenanceType
	isSet bool
}

func (v NullableHotelRoomMaintenanceType) Get() *HotelRoomMaintenanceType {
	return v.value
}

func (v *NullableHotelRoomMaintenanceType) Set(val *HotelRoomMaintenanceType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRoomMaintenanceType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRoomMaintenanceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRoomMaintenanceType(val *HotelRoomMaintenanceType) *NullableHotelRoomMaintenanceType {
	return &NullableHotelRoomMaintenanceType{value: val, isSet: true}
}

func (v NullableHotelRoomMaintenanceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRoomMaintenanceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


