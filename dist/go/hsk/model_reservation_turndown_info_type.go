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

// checks if the ReservationTurndownInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationTurndownInfoType{}

// ReservationTurndownInfoType Turndown information for a reservation
type ReservationTurndownInfoType struct {
	// Indicates if turndown is allowed or not
	Allowed *bool `json:"allowed,omitempty"`
	Status *TurndownStatusType `json:"status,omitempty"`
}

// NewReservationTurndownInfoType instantiates a new ReservationTurndownInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationTurndownInfoType() *ReservationTurndownInfoType {
	this := ReservationTurndownInfoType{}
	return &this
}

// NewReservationTurndownInfoTypeWithDefaults instantiates a new ReservationTurndownInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationTurndownInfoTypeWithDefaults() *ReservationTurndownInfoType {
	this := ReservationTurndownInfoType{}
	return &this
}

// GetAllowed returns the Allowed field value if set, zero value otherwise.
func (o *ReservationTurndownInfoType) GetAllowed() bool {
	if o == nil || IsNil(o.Allowed) {
		var ret bool
		return ret
	}
	return *o.Allowed
}

// GetAllowedOk returns a tuple with the Allowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationTurndownInfoType) GetAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.Allowed) {
		return nil, false
	}
	return o.Allowed, true
}

// HasAllowed returns a boolean if a field has been set.
func (o *ReservationTurndownInfoType) HasAllowed() bool {
	if o != nil && !IsNil(o.Allowed) {
		return true
	}

	return false
}

// SetAllowed gets a reference to the given bool and assigns it to the Allowed field.
func (o *ReservationTurndownInfoType) SetAllowed(v bool) {
	o.Allowed = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ReservationTurndownInfoType) GetStatus() TurndownStatusType {
	if o == nil || IsNil(o.Status) {
		var ret TurndownStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationTurndownInfoType) GetStatusOk() (*TurndownStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ReservationTurndownInfoType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given TurndownStatusType and assigns it to the Status field.
func (o *ReservationTurndownInfoType) SetStatus(v TurndownStatusType) {
	o.Status = &v
}

func (o ReservationTurndownInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationTurndownInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Allowed) {
		toSerialize["allowed"] = o.Allowed
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableReservationTurndownInfoType struct {
	value *ReservationTurndownInfoType
	isSet bool
}

func (v NullableReservationTurndownInfoType) Get() *ReservationTurndownInfoType {
	return v.value
}

func (v *NullableReservationTurndownInfoType) Set(val *ReservationTurndownInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationTurndownInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationTurndownInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationTurndownInfoType(val *ReservationTurndownInfoType) *NullableReservationTurndownInfoType {
	return &NullableReservationTurndownInfoType{value: val, isSet: true}
}

func (v NullableReservationTurndownInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationTurndownInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


