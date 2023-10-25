/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the CallHistory type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CallHistory{}

// CallHistory Response that contains either the fetched call history if was successful or error(s) if not.
type CallHistory struct {
	// Holds call information.
	CallHistory []CallType `json:"callHistory,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCallHistory instantiates a new CallHistory object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCallHistory() *CallHistory {
	this := CallHistory{}
	return &this
}

// NewCallHistoryWithDefaults instantiates a new CallHistory object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCallHistoryWithDefaults() *CallHistory {
	this := CallHistory{}
	return &this
}

// GetCallHistory returns the CallHistory field value if set, zero value otherwise.
func (o *CallHistory) GetCallHistory() []CallType {
	if o == nil || IsNil(o.CallHistory) {
		var ret []CallType
		return ret
	}
	return o.CallHistory
}

// GetCallHistoryOk returns a tuple with the CallHistory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallHistory) GetCallHistoryOk() ([]CallType, bool) {
	if o == nil || IsNil(o.CallHistory) {
		return nil, false
	}
	return o.CallHistory, true
}

// HasCallHistory returns a boolean if a field has been set.
func (o *CallHistory) HasCallHistory() bool {
	if o != nil && !IsNil(o.CallHistory) {
		return true
	}

	return false
}

// SetCallHistory gets a reference to the given []CallType and assigns it to the CallHistory field.
func (o *CallHistory) SetCallHistory(v []CallType) {
	o.CallHistory = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CallHistory) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallHistory) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CallHistory) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CallHistory) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CallHistory) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallHistory) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CallHistory) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CallHistory) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CallHistory) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CallHistory) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CallHistory) {
		toSerialize["callHistory"] = o.CallHistory
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCallHistory struct {
	value *CallHistory
	isSet bool
}

func (v NullableCallHistory) Get() *CallHistory {
	return v.value
}

func (v *NullableCallHistory) Set(val *CallHistory) {
	v.value = val
	v.isSet = true
}

func (v NullableCallHistory) IsSet() bool {
	return v.isSet
}

func (v *NullableCallHistory) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCallHistory(val *CallHistory) *NullableCallHistory {
	return &NullableCallHistory{value: val, isSet: true}
}

func (v NullableCallHistory) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCallHistory) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


