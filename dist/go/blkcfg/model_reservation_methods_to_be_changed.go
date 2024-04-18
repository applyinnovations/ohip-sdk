/*
OPERA Cloud Block Configuration API

APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkcfg

import (
	"encoding/json"
)

// checks if the ReservationMethodsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationMethodsToBeChanged{}

// ReservationMethodsToBeChanged Request object for changing Reservation Methods.
type ReservationMethodsToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Reservation Methods.
	ReservationMethods []ReservationMethodType `json:"reservationMethods,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationMethodsToBeChanged instantiates a new ReservationMethodsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationMethodsToBeChanged() *ReservationMethodsToBeChanged {
	this := ReservationMethodsToBeChanged{}
	return &this
}

// NewReservationMethodsToBeChangedWithDefaults instantiates a new ReservationMethodsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationMethodsToBeChangedWithDefaults() *ReservationMethodsToBeChanged {
	this := ReservationMethodsToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationMethodsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationMethodsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationMethodsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationMethodsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationMethods returns the ReservationMethods field value if set, zero value otherwise.
func (o *ReservationMethodsToBeChanged) GetReservationMethods() []ReservationMethodType {
	if o == nil || IsNil(o.ReservationMethods) {
		var ret []ReservationMethodType
		return ret
	}
	return o.ReservationMethods
}

// GetReservationMethodsOk returns a tuple with the ReservationMethods field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationMethodsToBeChanged) GetReservationMethodsOk() ([]ReservationMethodType, bool) {
	if o == nil || IsNil(o.ReservationMethods) {
		return nil, false
	}
	return o.ReservationMethods, true
}

// HasReservationMethods returns a boolean if a field has been set.
func (o *ReservationMethodsToBeChanged) HasReservationMethods() bool {
	if o != nil && !IsNil(o.ReservationMethods) {
		return true
	}

	return false
}

// SetReservationMethods gets a reference to the given []ReservationMethodType and assigns it to the ReservationMethods field.
func (o *ReservationMethodsToBeChanged) SetReservationMethods(v []ReservationMethodType) {
	o.ReservationMethods = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationMethodsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationMethodsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationMethodsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationMethodsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationMethodsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationMethodsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationMethods) {
		toSerialize["reservationMethods"] = o.ReservationMethods
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationMethodsToBeChanged struct {
	value *ReservationMethodsToBeChanged
	isSet bool
}

func (v NullableReservationMethodsToBeChanged) Get() *ReservationMethodsToBeChanged {
	return v.value
}

func (v *NullableReservationMethodsToBeChanged) Set(val *ReservationMethodsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationMethodsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationMethodsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationMethodsToBeChanged(val *ReservationMethodsToBeChanged) *NullableReservationMethodsToBeChanged {
	return &NullableReservationMethodsToBeChanged{value: val, isSet: true}
}

func (v NullableReservationMethodsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationMethodsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

