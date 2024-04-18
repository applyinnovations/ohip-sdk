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

// checks if the BlockPMReservations type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockPMReservations{}

// BlockPMReservations The response object that contains the PM reservations belonging to a block.
type BlockPMReservations struct {
	Links []InstanceLink `json:"links,omitempty"`
	Reservations *ReservationSnapshotsType `json:"reservations,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockPMReservations instantiates a new BlockPMReservations object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockPMReservations() *BlockPMReservations {
	this := BlockPMReservations{}
	return &this
}

// NewBlockPMReservationsWithDefaults instantiates a new BlockPMReservations object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockPMReservationsWithDefaults() *BlockPMReservations {
	this := BlockPMReservations{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockPMReservations) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPMReservations) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockPMReservations) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockPMReservations) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservations returns the Reservations field value if set, zero value otherwise.
func (o *BlockPMReservations) GetReservations() ReservationSnapshotsType {
	if o == nil || IsNil(o.Reservations) {
		var ret ReservationSnapshotsType
		return ret
	}
	return *o.Reservations
}

// GetReservationsOk returns a tuple with the Reservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPMReservations) GetReservationsOk() (*ReservationSnapshotsType, bool) {
	if o == nil || IsNil(o.Reservations) {
		return nil, false
	}
	return o.Reservations, true
}

// HasReservations returns a boolean if a field has been set.
func (o *BlockPMReservations) HasReservations() bool {
	if o != nil && !IsNil(o.Reservations) {
		return true
	}

	return false
}

// SetReservations gets a reference to the given ReservationSnapshotsType and assigns it to the Reservations field.
func (o *BlockPMReservations) SetReservations(v ReservationSnapshotsType) {
	o.Reservations = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockPMReservations) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPMReservations) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockPMReservations) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockPMReservations) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockPMReservations) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockPMReservations) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Reservations) {
		toSerialize["reservations"] = o.Reservations
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockPMReservations struct {
	value *BlockPMReservations
	isSet bool
}

func (v NullableBlockPMReservations) Get() *BlockPMReservations {
	return v.value
}

func (v *NullableBlockPMReservations) Set(val *BlockPMReservations) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockPMReservations) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockPMReservations) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockPMReservations(val *BlockPMReservations) *NullableBlockPMReservations {
	return &NullableBlockPMReservations{value: val, isSet: true}
}

func (v NullableBlockPMReservations) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockPMReservations) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

