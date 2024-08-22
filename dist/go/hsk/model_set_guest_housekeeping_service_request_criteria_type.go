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

// checks if the SetGuestHousekeepingServiceRequestCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SetGuestHousekeepingServiceRequestCriteriaType{}

// SetGuestHousekeepingServiceRequestCriteriaType Criteria for changing the guest service status on an occupied room.
type SetGuestHousekeepingServiceRequestCriteriaType struct {
	// The hotel code of the rooms for which the guest service status needs to be changed.
	HotelId *string `json:"hotelId,omitempty"`
	// Collection of room numbers for which the status is to be updated.
	RoomList []string `json:"roomList,omitempty"`
	Status *GuestHousekeepingServiceRequestType `json:"status,omitempty"`
}

// NewSetGuestHousekeepingServiceRequestCriteriaType instantiates a new SetGuestHousekeepingServiceRequestCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSetGuestHousekeepingServiceRequestCriteriaType() *SetGuestHousekeepingServiceRequestCriteriaType {
	this := SetGuestHousekeepingServiceRequestCriteriaType{}
	return &this
}

// NewSetGuestHousekeepingServiceRequestCriteriaTypeWithDefaults instantiates a new SetGuestHousekeepingServiceRequestCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSetGuestHousekeepingServiceRequestCriteriaTypeWithDefaults() *SetGuestHousekeepingServiceRequestCriteriaType {
	this := SetGuestHousekeepingServiceRequestCriteriaType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomList returns the RoomList field value if set, zero value otherwise.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetRoomList() []string {
	if o == nil || IsNil(o.RoomList) {
		var ret []string
		return ret
	}
	return o.RoomList
}

// GetRoomListOk returns a tuple with the RoomList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetRoomListOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomList) {
		return nil, false
	}
	return o.RoomList, true
}

// HasRoomList returns a boolean if a field has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasRoomList() bool {
	if o != nil && !IsNil(o.RoomList) {
		return true
	}

	return false
}

// SetRoomList gets a reference to the given []string and assigns it to the RoomList field.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetRoomList(v []string) {
	o.RoomList = v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetStatus() GuestHousekeepingServiceRequestType {
	if o == nil || IsNil(o.Status) {
		var ret GuestHousekeepingServiceRequestType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetStatusOk() (*GuestHousekeepingServiceRequestType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given GuestHousekeepingServiceRequestType and assigns it to the Status field.
func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetStatus(v GuestHousekeepingServiceRequestType) {
	o.Status = &v
}

func (o SetGuestHousekeepingServiceRequestCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SetGuestHousekeepingServiceRequestCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomList) {
		toSerialize["roomList"] = o.RoomList
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableSetGuestHousekeepingServiceRequestCriteriaType struct {
	value *SetGuestHousekeepingServiceRequestCriteriaType
	isSet bool
}

func (v NullableSetGuestHousekeepingServiceRequestCriteriaType) Get() *SetGuestHousekeepingServiceRequestCriteriaType {
	return v.value
}

func (v *NullableSetGuestHousekeepingServiceRequestCriteriaType) Set(val *SetGuestHousekeepingServiceRequestCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableSetGuestHousekeepingServiceRequestCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableSetGuestHousekeepingServiceRequestCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSetGuestHousekeepingServiceRequestCriteriaType(val *SetGuestHousekeepingServiceRequestCriteriaType) *NullableSetGuestHousekeepingServiceRequestCriteriaType {
	return &NullableSetGuestHousekeepingServiceRequestCriteriaType{value: val, isSet: true}
}

func (v NullableSetGuestHousekeepingServiceRequestCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSetGuestHousekeepingServiceRequestCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


