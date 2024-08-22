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

// checks if the ReservationProfileType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationProfileType{}

// ReservationProfileType struct for ReservationProfileType
type ReservationProfileType struct {
	Profile *ProfileType `json:"profile,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	ReservationProfileType *ResProfileTypeType `json:"reservationProfileType,omitempty"`
}

// NewReservationProfileType instantiates a new ReservationProfileType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationProfileType() *ReservationProfileType {
	this := ReservationProfileType{}
	return &this
}

// NewReservationProfileTypeWithDefaults instantiates a new ReservationProfileType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationProfileTypeWithDefaults() *ReservationProfileType {
	this := ReservationProfileType{}
	return &this
}

// GetProfile returns the Profile field value if set, zero value otherwise.
func (o *ReservationProfileType) GetProfile() ProfileType {
	if o == nil || IsNil(o.Profile) {
		var ret ProfileType
		return ret
	}
	return *o.Profile
}

// GetProfileOk returns a tuple with the Profile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationProfileType) GetProfileOk() (*ProfileType, bool) {
	if o == nil || IsNil(o.Profile) {
		return nil, false
	}
	return o.Profile, true
}

// HasProfile returns a boolean if a field has been set.
func (o *ReservationProfileType) HasProfile() bool {
	if o != nil && !IsNil(o.Profile) {
		return true
	}

	return false
}

// SetProfile gets a reference to the given ProfileType and assigns it to the Profile field.
func (o *ReservationProfileType) SetProfile(v ProfileType) {
	o.Profile = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *ReservationProfileType) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationProfileType) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *ReservationProfileType) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *ReservationProfileType) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetReservationProfileType returns the ReservationProfileType field value if set, zero value otherwise.
func (o *ReservationProfileType) GetReservationProfileType() ResProfileTypeType {
	if o == nil || IsNil(o.ReservationProfileType) {
		var ret ResProfileTypeType
		return ret
	}
	return *o.ReservationProfileType
}

// GetReservationProfileTypeOk returns a tuple with the ReservationProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationProfileType) GetReservationProfileTypeOk() (*ResProfileTypeType, bool) {
	if o == nil || IsNil(o.ReservationProfileType) {
		return nil, false
	}
	return o.ReservationProfileType, true
}

// HasReservationProfileType returns a boolean if a field has been set.
func (o *ReservationProfileType) HasReservationProfileType() bool {
	if o != nil && !IsNil(o.ReservationProfileType) {
		return true
	}

	return false
}

// SetReservationProfileType gets a reference to the given ResProfileTypeType and assigns it to the ReservationProfileType field.
func (o *ReservationProfileType) SetReservationProfileType(v ResProfileTypeType) {
	o.ReservationProfileType = &v
}

func (o ReservationProfileType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationProfileType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Profile) {
		toSerialize["profile"] = o.Profile
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.ReservationProfileType) {
		toSerialize["reservationProfileType"] = o.ReservationProfileType
	}
	return toSerialize, nil
}

type NullableReservationProfileType struct {
	value *ReservationProfileType
	isSet bool
}

func (v NullableReservationProfileType) Get() *ReservationProfileType {
	return v.value
}

func (v *NullableReservationProfileType) Set(val *ReservationProfileType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationProfileType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationProfileType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationProfileType(val *ReservationProfileType) *NullableReservationProfileType {
	return &NullableReservationProfileType{value: val, isSet: true}
}

func (v NullableReservationProfileType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationProfileType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


