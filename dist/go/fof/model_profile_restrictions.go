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

// checks if the ProfileRestrictions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileRestrictions{}

// ProfileRestrictions struct for ProfileRestrictions
type ProfileRestrictions struct {
	// Restriction reason associated with the current profile.
	Reason *string `json:"reason,omitempty"`
	// Description of restriction reason.
	ReasonDescription *string `json:"reasonDescription,omitempty"`
	// True indicates there are restrictions associated with the current profile.
	Restricted *bool `json:"restricted,omitempty"`
}

// NewProfileRestrictions instantiates a new ProfileRestrictions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileRestrictions() *ProfileRestrictions {
	this := ProfileRestrictions{}
	return &this
}

// NewProfileRestrictionsWithDefaults instantiates a new ProfileRestrictions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileRestrictionsWithDefaults() *ProfileRestrictions {
	this := ProfileRestrictions{}
	return &this
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *ProfileRestrictions) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRestrictions) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *ProfileRestrictions) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *ProfileRestrictions) SetReason(v string) {
	o.Reason = &v
}

// GetReasonDescription returns the ReasonDescription field value if set, zero value otherwise.
func (o *ProfileRestrictions) GetReasonDescription() string {
	if o == nil || IsNil(o.ReasonDescription) {
		var ret string
		return ret
	}
	return *o.ReasonDescription
}

// GetReasonDescriptionOk returns a tuple with the ReasonDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRestrictions) GetReasonDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ReasonDescription) {
		return nil, false
	}
	return o.ReasonDescription, true
}

// HasReasonDescription returns a boolean if a field has been set.
func (o *ProfileRestrictions) HasReasonDescription() bool {
	if o != nil && !IsNil(o.ReasonDescription) {
		return true
	}

	return false
}

// SetReasonDescription gets a reference to the given string and assigns it to the ReasonDescription field.
func (o *ProfileRestrictions) SetReasonDescription(v string) {
	o.ReasonDescription = &v
}

// GetRestricted returns the Restricted field value if set, zero value otherwise.
func (o *ProfileRestrictions) GetRestricted() bool {
	if o == nil || IsNil(o.Restricted) {
		var ret bool
		return ret
	}
	return *o.Restricted
}

// GetRestrictedOk returns a tuple with the Restricted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRestrictions) GetRestrictedOk() (*bool, bool) {
	if o == nil || IsNil(o.Restricted) {
		return nil, false
	}
	return o.Restricted, true
}

// HasRestricted returns a boolean if a field has been set.
func (o *ProfileRestrictions) HasRestricted() bool {
	if o != nil && !IsNil(o.Restricted) {
		return true
	}

	return false
}

// SetRestricted gets a reference to the given bool and assigns it to the Restricted field.
func (o *ProfileRestrictions) SetRestricted(v bool) {
	o.Restricted = &v
}

func (o ProfileRestrictions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileRestrictions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.ReasonDescription) {
		toSerialize["reasonDescription"] = o.ReasonDescription
	}
	if !IsNil(o.Restricted) {
		toSerialize["restricted"] = o.Restricted
	}
	return toSerialize, nil
}

type NullableProfileRestrictions struct {
	value *ProfileRestrictions
	isSet bool
}

func (v NullableProfileRestrictions) Get() *ProfileRestrictions {
	return v.value
}

func (v *NullableProfileRestrictions) Set(val *ProfileRestrictions) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileRestrictions) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileRestrictions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileRestrictions(val *ProfileRestrictions) *NullableProfileRestrictions {
	return &NullableProfileRestrictions{value: val, isSet: true}
}

func (v NullableProfileRestrictions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileRestrictions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


