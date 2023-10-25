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

// checks if the UnAssignRoomCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UnAssignRoomCriteria{}

// UnAssignRoomCriteria Request to the remove a room(unassign) from a reserved reservation.
type UnAssignRoomCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Criteria for removing the room from a reservation.
	OverrideRoomNumberLocked *bool `json:"overrideRoomNumberLocked,omitempty"`
	// Override the room ownership indicator in the reservation when removing rooms. This is applicable when Room Rotation OPERA Control is active.
	OverrideRoomOwnership *bool `json:"overrideRoomOwnership,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewUnAssignRoomCriteria instantiates a new UnAssignRoomCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUnAssignRoomCriteria() *UnAssignRoomCriteria {
	this := UnAssignRoomCriteria{}
	return &this
}

// NewUnAssignRoomCriteriaWithDefaults instantiates a new UnAssignRoomCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUnAssignRoomCriteriaWithDefaults() *UnAssignRoomCriteria {
	this := UnAssignRoomCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *UnAssignRoomCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnAssignRoomCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *UnAssignRoomCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *UnAssignRoomCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOverrideRoomNumberLocked returns the OverrideRoomNumberLocked field value if set, zero value otherwise.
func (o *UnAssignRoomCriteria) GetOverrideRoomNumberLocked() bool {
	if o == nil || IsNil(o.OverrideRoomNumberLocked) {
		var ret bool
		return ret
	}
	return *o.OverrideRoomNumberLocked
}

// GetOverrideRoomNumberLockedOk returns a tuple with the OverrideRoomNumberLocked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnAssignRoomCriteria) GetOverrideRoomNumberLockedOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideRoomNumberLocked) {
		return nil, false
	}
	return o.OverrideRoomNumberLocked, true
}

// HasOverrideRoomNumberLocked returns a boolean if a field has been set.
func (o *UnAssignRoomCriteria) HasOverrideRoomNumberLocked() bool {
	if o != nil && !IsNil(o.OverrideRoomNumberLocked) {
		return true
	}

	return false
}

// SetOverrideRoomNumberLocked gets a reference to the given bool and assigns it to the OverrideRoomNumberLocked field.
func (o *UnAssignRoomCriteria) SetOverrideRoomNumberLocked(v bool) {
	o.OverrideRoomNumberLocked = &v
}

// GetOverrideRoomOwnership returns the OverrideRoomOwnership field value if set, zero value otherwise.
func (o *UnAssignRoomCriteria) GetOverrideRoomOwnership() bool {
	if o == nil || IsNil(o.OverrideRoomOwnership) {
		var ret bool
		return ret
	}
	return *o.OverrideRoomOwnership
}

// GetOverrideRoomOwnershipOk returns a tuple with the OverrideRoomOwnership field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnAssignRoomCriteria) GetOverrideRoomOwnershipOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideRoomOwnership) {
		return nil, false
	}
	return o.OverrideRoomOwnership, true
}

// HasOverrideRoomOwnership returns a boolean if a field has been set.
func (o *UnAssignRoomCriteria) HasOverrideRoomOwnership() bool {
	if o != nil && !IsNil(o.OverrideRoomOwnership) {
		return true
	}

	return false
}

// SetOverrideRoomOwnership gets a reference to the given bool and assigns it to the OverrideRoomOwnership field.
func (o *UnAssignRoomCriteria) SetOverrideRoomOwnership(v bool) {
	o.OverrideRoomOwnership = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *UnAssignRoomCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnAssignRoomCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *UnAssignRoomCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *UnAssignRoomCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o UnAssignRoomCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UnAssignRoomCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.OverrideRoomNumberLocked) {
		toSerialize["overrideRoomNumberLocked"] = o.OverrideRoomNumberLocked
	}
	if !IsNil(o.OverrideRoomOwnership) {
		toSerialize["overrideRoomOwnership"] = o.OverrideRoomOwnership
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableUnAssignRoomCriteria struct {
	value *UnAssignRoomCriteria
	isSet bool
}

func (v NullableUnAssignRoomCriteria) Get() *UnAssignRoomCriteria {
	return v.value
}

func (v *NullableUnAssignRoomCriteria) Set(val *UnAssignRoomCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableUnAssignRoomCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableUnAssignRoomCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUnAssignRoomCriteria(val *UnAssignRoomCriteria) *NullableUnAssignRoomCriteria {
	return &NullableUnAssignRoomCriteria{value: val, isSet: true}
}

func (v NullableUnAssignRoomCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUnAssignRoomCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


