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

// checks if the AdvanceCheckInReservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AdvanceCheckInReservation{}

// AdvanceCheckInReservation Request object to perform Advance Check In of a Reservation.
type AdvanceCheckInReservation struct {
	Links []InstanceLink `json:"links,omitempty"`
	Reservation *AdvanceCheckInReservationType `json:"reservation,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAdvanceCheckInReservation instantiates a new AdvanceCheckInReservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdvanceCheckInReservation() *AdvanceCheckInReservation {
	this := AdvanceCheckInReservation{}
	return &this
}

// NewAdvanceCheckInReservationWithDefaults instantiates a new AdvanceCheckInReservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdvanceCheckInReservationWithDefaults() *AdvanceCheckInReservation {
	this := AdvanceCheckInReservation{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AdvanceCheckInReservation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceCheckInReservation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AdvanceCheckInReservation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AdvanceCheckInReservation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *AdvanceCheckInReservation) GetReservation() AdvanceCheckInReservationType {
	if o == nil || IsNil(o.Reservation) {
		var ret AdvanceCheckInReservationType
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceCheckInReservation) GetReservationOk() (*AdvanceCheckInReservationType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *AdvanceCheckInReservation) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given AdvanceCheckInReservationType and assigns it to the Reservation field.
func (o *AdvanceCheckInReservation) SetReservation(v AdvanceCheckInReservationType) {
	o.Reservation = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AdvanceCheckInReservation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceCheckInReservation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AdvanceCheckInReservation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AdvanceCheckInReservation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AdvanceCheckInReservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AdvanceCheckInReservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAdvanceCheckInReservation struct {
	value *AdvanceCheckInReservation
	isSet bool
}

func (v NullableAdvanceCheckInReservation) Get() *AdvanceCheckInReservation {
	return v.value
}

func (v *NullableAdvanceCheckInReservation) Set(val *AdvanceCheckInReservation) {
	v.value = val
	v.isSet = true
}

func (v NullableAdvanceCheckInReservation) IsSet() bool {
	return v.isSet
}

func (v *NullableAdvanceCheckInReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdvanceCheckInReservation(val *AdvanceCheckInReservation) *NullableAdvanceCheckInReservation {
	return &NullableAdvanceCheckInReservation{value: val, isSet: true}
}

func (v NullableAdvanceCheckInReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdvanceCheckInReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


