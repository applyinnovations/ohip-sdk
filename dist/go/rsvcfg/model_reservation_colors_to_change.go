/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ReservationColorsToChange type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationColorsToChange{}

// ReservationColorsToChange Request object to change reservation colors.
type ReservationColorsToChange struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of reservation colors.
	ReservationColors []ReservationColorType `json:"reservationColors,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationColorsToChange instantiates a new ReservationColorsToChange object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationColorsToChange() *ReservationColorsToChange {
	this := ReservationColorsToChange{}
	return &this
}

// NewReservationColorsToChangeWithDefaults instantiates a new ReservationColorsToChange object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationColorsToChangeWithDefaults() *ReservationColorsToChange {
	this := ReservationColorsToChange{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationColorsToChange) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorsToChange) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationColorsToChange) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationColorsToChange) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationColors returns the ReservationColors field value if set, zero value otherwise.
func (o *ReservationColorsToChange) GetReservationColors() []ReservationColorType {
	if o == nil || IsNil(o.ReservationColors) {
		var ret []ReservationColorType
		return ret
	}
	return o.ReservationColors
}

// GetReservationColorsOk returns a tuple with the ReservationColors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorsToChange) GetReservationColorsOk() ([]ReservationColorType, bool) {
	if o == nil || IsNil(o.ReservationColors) {
		return nil, false
	}
	return o.ReservationColors, true
}

// HasReservationColors returns a boolean if a field has been set.
func (o *ReservationColorsToChange) HasReservationColors() bool {
	if o != nil && !IsNil(o.ReservationColors) {
		return true
	}

	return false
}

// SetReservationColors gets a reference to the given []ReservationColorType and assigns it to the ReservationColors field.
func (o *ReservationColorsToChange) SetReservationColors(v []ReservationColorType) {
	o.ReservationColors = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationColorsToChange) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorsToChange) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationColorsToChange) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationColorsToChange) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationColorsToChange) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationColorsToChange) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationColors) {
		toSerialize["reservationColors"] = o.ReservationColors
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationColorsToChange struct {
	value *ReservationColorsToChange
	isSet bool
}

func (v NullableReservationColorsToChange) Get() *ReservationColorsToChange {
	return v.value
}

func (v *NullableReservationColorsToChange) Set(val *ReservationColorsToChange) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationColorsToChange) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationColorsToChange) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationColorsToChange(val *ReservationColorsToChange) *NullableReservationColorsToChange {
	return &NullableReservationColorsToChange{value: val, isSet: true}
}

func (v NullableReservationColorsToChange) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationColorsToChange) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


