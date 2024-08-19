/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the RegisterTurnaway type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegisterTurnaway{}

// RegisterTurnaway Request to register turn away reservation.
type RegisterTurnaway struct {
	Links []InstanceLink `json:"links,omitempty"`
	Turnaway *TurnawayType `json:"turnaway,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRegisterTurnaway instantiates a new RegisterTurnaway object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegisterTurnaway() *RegisterTurnaway {
	this := RegisterTurnaway{}
	return &this
}

// NewRegisterTurnawayWithDefaults instantiates a new RegisterTurnaway object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegisterTurnawayWithDefaults() *RegisterTurnaway {
	this := RegisterTurnaway{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RegisterTurnaway) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegisterTurnaway) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RegisterTurnaway) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RegisterTurnaway) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTurnaway returns the Turnaway field value if set, zero value otherwise.
func (o *RegisterTurnaway) GetTurnaway() TurnawayType {
	if o == nil || IsNil(o.Turnaway) {
		var ret TurnawayType
		return ret
	}
	return *o.Turnaway
}

// GetTurnawayOk returns a tuple with the Turnaway field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegisterTurnaway) GetTurnawayOk() (*TurnawayType, bool) {
	if o == nil || IsNil(o.Turnaway) {
		return nil, false
	}
	return o.Turnaway, true
}

// HasTurnaway returns a boolean if a field has been set.
func (o *RegisterTurnaway) HasTurnaway() bool {
	if o != nil && !IsNil(o.Turnaway) {
		return true
	}

	return false
}

// SetTurnaway gets a reference to the given TurnawayType and assigns it to the Turnaway field.
func (o *RegisterTurnaway) SetTurnaway(v TurnawayType) {
	o.Turnaway = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RegisterTurnaway) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegisterTurnaway) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RegisterTurnaway) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RegisterTurnaway) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RegisterTurnaway) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegisterTurnaway) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Turnaway) {
		toSerialize["turnaway"] = o.Turnaway
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRegisterTurnaway struct {
	value *RegisterTurnaway
	isSet bool
}

func (v NullableRegisterTurnaway) Get() *RegisterTurnaway {
	return v.value
}

func (v *NullableRegisterTurnaway) Set(val *RegisterTurnaway) {
	v.value = val
	v.isSet = true
}

func (v NullableRegisterTurnaway) IsSet() bool {
	return v.isSet
}

func (v *NullableRegisterTurnaway) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegisterTurnaway(val *RegisterTurnaway) *NullableRegisterTurnaway {
	return &NullableRegisterTurnaway{value: val, isSet: true}
}

func (v NullableRegisterTurnaway) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegisterTurnaway) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


