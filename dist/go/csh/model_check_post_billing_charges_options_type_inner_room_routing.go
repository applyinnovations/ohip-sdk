/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CheckPostBillingChargesOptionsTypeInnerRoomRouting type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CheckPostBillingChargesOptionsTypeInnerRoomRouting{}

// CheckPostBillingChargesOptionsTypeInnerRoomRouting Room routing is applicable on the requested consumable.
type CheckPostBillingChargesOptionsTypeInnerRoomRouting struct {
	Applicable *bool `json:"applicable,omitempty"`
	Guest *PersonNameType `json:"guest,omitempty"`
	RoomId *string `json:"roomId,omitempty"`
}

// NewCheckPostBillingChargesOptionsTypeInnerRoomRouting instantiates a new CheckPostBillingChargesOptionsTypeInnerRoomRouting object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCheckPostBillingChargesOptionsTypeInnerRoomRouting() *CheckPostBillingChargesOptionsTypeInnerRoomRouting {
	this := CheckPostBillingChargesOptionsTypeInnerRoomRouting{}
	return &this
}

// NewCheckPostBillingChargesOptionsTypeInnerRoomRoutingWithDefaults instantiates a new CheckPostBillingChargesOptionsTypeInnerRoomRouting object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCheckPostBillingChargesOptionsTypeInnerRoomRoutingWithDefaults() *CheckPostBillingChargesOptionsTypeInnerRoomRouting {
	this := CheckPostBillingChargesOptionsTypeInnerRoomRouting{}
	return &this
}

// GetApplicable returns the Applicable field value if set, zero value otherwise.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetApplicable() bool {
	if o == nil || IsNil(o.Applicable) {
		var ret bool
		return ret
	}
	return *o.Applicable
}

// GetApplicableOk returns a tuple with the Applicable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetApplicableOk() (*bool, bool) {
	if o == nil || IsNil(o.Applicable) {
		return nil, false
	}
	return o.Applicable, true
}

// HasApplicable returns a boolean if a field has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) HasApplicable() bool {
	if o != nil && !IsNil(o.Applicable) {
		return true
	}

	return false
}

// SetApplicable gets a reference to the given bool and assigns it to the Applicable field.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) SetApplicable(v bool) {
	o.Applicable = &v
}

// GetGuest returns the Guest field value if set, zero value otherwise.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetGuest() PersonNameType {
	if o == nil || IsNil(o.Guest) {
		var ret PersonNameType
		return ret
	}
	return *o.Guest
}

// GetGuestOk returns a tuple with the Guest field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetGuestOk() (*PersonNameType, bool) {
	if o == nil || IsNil(o.Guest) {
		return nil, false
	}
	return o.Guest, true
}

// HasGuest returns a boolean if a field has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) HasGuest() bool {
	if o != nil && !IsNil(o.Guest) {
		return true
	}

	return false
}

// SetGuest gets a reference to the given PersonNameType and assigns it to the Guest field.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) SetGuest(v PersonNameType) {
	o.Guest = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *CheckPostBillingChargesOptionsTypeInnerRoomRouting) SetRoomId(v string) {
	o.RoomId = &v
}

func (o CheckPostBillingChargesOptionsTypeInnerRoomRouting) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CheckPostBillingChargesOptionsTypeInnerRoomRouting) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Applicable) {
		toSerialize["applicable"] = o.Applicable
	}
	if !IsNil(o.Guest) {
		toSerialize["guest"] = o.Guest
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	return toSerialize, nil
}

type NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting struct {
	value *CheckPostBillingChargesOptionsTypeInnerRoomRouting
	isSet bool
}

func (v NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) Get() *CheckPostBillingChargesOptionsTypeInnerRoomRouting {
	return v.value
}

func (v *NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) Set(val *CheckPostBillingChargesOptionsTypeInnerRoomRouting) {
	v.value = val
	v.isSet = true
}

func (v NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) IsSet() bool {
	return v.isSet
}

func (v *NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCheckPostBillingChargesOptionsTypeInnerRoomRouting(val *CheckPostBillingChargesOptionsTypeInnerRoomRouting) *NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting {
	return &NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting{value: val, isSet: true}
}

func (v NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCheckPostBillingChargesOptionsTypeInnerRoomRouting) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


