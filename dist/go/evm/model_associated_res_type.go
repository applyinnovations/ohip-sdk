/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the AssociatedResType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AssociatedResType{}

// AssociatedResType Information regarding associated reservations to the reservation.
type AssociatedResType struct {
	OriginalMultiRoomRes *UniqueIDType `json:"originalMultiRoomRes,omitempty"`
	ParentReservation *UniqueIDType `json:"parentReservation,omitempty"`
}

// NewAssociatedResType instantiates a new AssociatedResType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssociatedResType() *AssociatedResType {
	this := AssociatedResType{}
	return &this
}

// NewAssociatedResTypeWithDefaults instantiates a new AssociatedResType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssociatedResTypeWithDefaults() *AssociatedResType {
	this := AssociatedResType{}
	return &this
}

// GetOriginalMultiRoomRes returns the OriginalMultiRoomRes field value if set, zero value otherwise.
func (o *AssociatedResType) GetOriginalMultiRoomRes() UniqueIDType {
	if o == nil || IsNil(o.OriginalMultiRoomRes) {
		var ret UniqueIDType
		return ret
	}
	return *o.OriginalMultiRoomRes
}

// GetOriginalMultiRoomResOk returns a tuple with the OriginalMultiRoomRes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedResType) GetOriginalMultiRoomResOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.OriginalMultiRoomRes) {
		return nil, false
	}
	return o.OriginalMultiRoomRes, true
}

// HasOriginalMultiRoomRes returns a boolean if a field has been set.
func (o *AssociatedResType) HasOriginalMultiRoomRes() bool {
	if o != nil && !IsNil(o.OriginalMultiRoomRes) {
		return true
	}

	return false
}

// SetOriginalMultiRoomRes gets a reference to the given UniqueIDType and assigns it to the OriginalMultiRoomRes field.
func (o *AssociatedResType) SetOriginalMultiRoomRes(v UniqueIDType) {
	o.OriginalMultiRoomRes = &v
}

// GetParentReservation returns the ParentReservation field value if set, zero value otherwise.
func (o *AssociatedResType) GetParentReservation() UniqueIDType {
	if o == nil || IsNil(o.ParentReservation) {
		var ret UniqueIDType
		return ret
	}
	return *o.ParentReservation
}

// GetParentReservationOk returns a tuple with the ParentReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedResType) GetParentReservationOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ParentReservation) {
		return nil, false
	}
	return o.ParentReservation, true
}

// HasParentReservation returns a boolean if a field has been set.
func (o *AssociatedResType) HasParentReservation() bool {
	if o != nil && !IsNil(o.ParentReservation) {
		return true
	}

	return false
}

// SetParentReservation gets a reference to the given UniqueIDType and assigns it to the ParentReservation field.
func (o *AssociatedResType) SetParentReservation(v UniqueIDType) {
	o.ParentReservation = &v
}

func (o AssociatedResType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AssociatedResType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OriginalMultiRoomRes) {
		toSerialize["originalMultiRoomRes"] = o.OriginalMultiRoomRes
	}
	if !IsNil(o.ParentReservation) {
		toSerialize["parentReservation"] = o.ParentReservation
	}
	return toSerialize, nil
}

type NullableAssociatedResType struct {
	value *AssociatedResType
	isSet bool
}

func (v NullableAssociatedResType) Get() *AssociatedResType {
	return v.value
}

func (v *NullableAssociatedResType) Set(val *AssociatedResType) {
	v.value = val
	v.isSet = true
}

func (v NullableAssociatedResType) IsSet() bool {
	return v.isSet
}

func (v *NullableAssociatedResType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssociatedResType(val *AssociatedResType) *NullableAssociatedResType {
	return &NullableAssociatedResType{value: val, isSet: true}
}

func (v NullableAssociatedResType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssociatedResType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


