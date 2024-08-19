/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the SuggestedRoomType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SuggestedRoomType{}

// SuggestedRoomType List of suggested rooms and component rooms.
type SuggestedRoomType struct {
	// List of component Room number belongs to a room.
	ComponentRoomNumber []string `json:"componentRoomNumber,omitempty"`
	// Code of the room.
	RoomId *string `json:"roomId,omitempty"`
}

// NewSuggestedRoomType instantiates a new SuggestedRoomType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSuggestedRoomType() *SuggestedRoomType {
	this := SuggestedRoomType{}
	return &this
}

// NewSuggestedRoomTypeWithDefaults instantiates a new SuggestedRoomType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSuggestedRoomTypeWithDefaults() *SuggestedRoomType {
	this := SuggestedRoomType{}
	return &this
}

// GetComponentRoomNumber returns the ComponentRoomNumber field value if set, zero value otherwise.
func (o *SuggestedRoomType) GetComponentRoomNumber() []string {
	if o == nil || IsNil(o.ComponentRoomNumber) {
		var ret []string
		return ret
	}
	return o.ComponentRoomNumber
}

// GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SuggestedRoomType) GetComponentRoomNumberOk() ([]string, bool) {
	if o == nil || IsNil(o.ComponentRoomNumber) {
		return nil, false
	}
	return o.ComponentRoomNumber, true
}

// HasComponentRoomNumber returns a boolean if a field has been set.
func (o *SuggestedRoomType) HasComponentRoomNumber() bool {
	if o != nil && !IsNil(o.ComponentRoomNumber) {
		return true
	}

	return false
}

// SetComponentRoomNumber gets a reference to the given []string and assigns it to the ComponentRoomNumber field.
func (o *SuggestedRoomType) SetComponentRoomNumber(v []string) {
	o.ComponentRoomNumber = v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *SuggestedRoomType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SuggestedRoomType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *SuggestedRoomType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *SuggestedRoomType) SetRoomId(v string) {
	o.RoomId = &v
}

func (o SuggestedRoomType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SuggestedRoomType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ComponentRoomNumber) {
		toSerialize["componentRoomNumber"] = o.ComponentRoomNumber
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	return toSerialize, nil
}

type NullableSuggestedRoomType struct {
	value *SuggestedRoomType
	isSet bool
}

func (v NullableSuggestedRoomType) Get() *SuggestedRoomType {
	return v.value
}

func (v *NullableSuggestedRoomType) Set(val *SuggestedRoomType) {
	v.value = val
	v.isSet = true
}

func (v NullableSuggestedRoomType) IsSet() bool {
	return v.isSet
}

func (v *NullableSuggestedRoomType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSuggestedRoomType(val *SuggestedRoomType) *NullableSuggestedRoomType {
	return &NullableSuggestedRoomType{value: val, isSet: true}
}

func (v NullableSuggestedRoomType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSuggestedRoomType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


