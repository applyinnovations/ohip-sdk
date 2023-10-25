/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReservationInterface type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationInterface{}

// ReservationInterface Request to change the interface status for a reservation.
type ReservationInterface struct {
	Links []InstanceLink `json:"links,omitempty"`
	ReservationInterfaceStatus *ReservationInterfaceReservationInterfaceStatus `json:"reservationInterfaceStatus,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationInterface instantiates a new ReservationInterface object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationInterface() *ReservationInterface {
	this := ReservationInterface{}
	return &this
}

// NewReservationInterfaceWithDefaults instantiates a new ReservationInterface object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationInterfaceWithDefaults() *ReservationInterface {
	this := ReservationInterface{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationInterface) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterface) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationInterface) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationInterface) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationInterfaceStatus returns the ReservationInterfaceStatus field value if set, zero value otherwise.
func (o *ReservationInterface) GetReservationInterfaceStatus() ReservationInterfaceReservationInterfaceStatus {
	if o == nil || IsNil(o.ReservationInterfaceStatus) {
		var ret ReservationInterfaceReservationInterfaceStatus
		return ret
	}
	return *o.ReservationInterfaceStatus
}

// GetReservationInterfaceStatusOk returns a tuple with the ReservationInterfaceStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterface) GetReservationInterfaceStatusOk() (*ReservationInterfaceReservationInterfaceStatus, bool) {
	if o == nil || IsNil(o.ReservationInterfaceStatus) {
		return nil, false
	}
	return o.ReservationInterfaceStatus, true
}

// HasReservationInterfaceStatus returns a boolean if a field has been set.
func (o *ReservationInterface) HasReservationInterfaceStatus() bool {
	if o != nil && !IsNil(o.ReservationInterfaceStatus) {
		return true
	}

	return false
}

// SetReservationInterfaceStatus gets a reference to the given ReservationInterfaceReservationInterfaceStatus and assigns it to the ReservationInterfaceStatus field.
func (o *ReservationInterface) SetReservationInterfaceStatus(v ReservationInterfaceReservationInterfaceStatus) {
	o.ReservationInterfaceStatus = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationInterface) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterface) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationInterface) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationInterface) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationInterface) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationInterface) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationInterfaceStatus) {
		toSerialize["reservationInterfaceStatus"] = o.ReservationInterfaceStatus
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationInterface struct {
	value *ReservationInterface
	isSet bool
}

func (v NullableReservationInterface) Get() *ReservationInterface {
	return v.value
}

func (v *NullableReservationInterface) Set(val *ReservationInterface) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationInterface) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationInterface) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationInterface(val *ReservationInterface) *NullableReservationInterface {
	return &NullableReservationInterface{value: val, isSet: true}
}

func (v NullableReservationInterface) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationInterface) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


