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

// checks if the TraceTextChanges type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TraceTextChanges{}

// TraceTextChanges Request object for changing trace texts.
type TraceTextChanges struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of trace texts that will be modified.
	TraceTexts []TraceTextChangeType `json:"traceTexts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTraceTextChanges instantiates a new TraceTextChanges object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTraceTextChanges() *TraceTextChanges {
	this := TraceTextChanges{}
	return &this
}

// NewTraceTextChangesWithDefaults instantiates a new TraceTextChanges object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTraceTextChangesWithDefaults() *TraceTextChanges {
	this := TraceTextChanges{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TraceTextChanges) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextChanges) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TraceTextChanges) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TraceTextChanges) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTraceTexts returns the TraceTexts field value if set, zero value otherwise.
func (o *TraceTextChanges) GetTraceTexts() []TraceTextChangeType {
	if o == nil || IsNil(o.TraceTexts) {
		var ret []TraceTextChangeType
		return ret
	}
	return o.TraceTexts
}

// GetTraceTextsOk returns a tuple with the TraceTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextChanges) GetTraceTextsOk() ([]TraceTextChangeType, bool) {
	if o == nil || IsNil(o.TraceTexts) {
		return nil, false
	}
	return o.TraceTexts, true
}

// HasTraceTexts returns a boolean if a field has been set.
func (o *TraceTextChanges) HasTraceTexts() bool {
	if o != nil && !IsNil(o.TraceTexts) {
		return true
	}

	return false
}

// SetTraceTexts gets a reference to the given []TraceTextChangeType and assigns it to the TraceTexts field.
func (o *TraceTextChanges) SetTraceTexts(v []TraceTextChangeType) {
	o.TraceTexts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TraceTextChanges) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextChanges) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TraceTextChanges) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TraceTextChanges) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TraceTextChanges) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TraceTextChanges) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TraceTexts) {
		toSerialize["traceTexts"] = o.TraceTexts
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTraceTextChanges struct {
	value *TraceTextChanges
	isSet bool
}

func (v NullableTraceTextChanges) Get() *TraceTextChanges {
	return v.value
}

func (v *NullableTraceTextChanges) Set(val *TraceTextChanges) {
	v.value = val
	v.isSet = true
}

func (v NullableTraceTextChanges) IsSet() bool {
	return v.isSet
}

func (v *NullableTraceTextChanges) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTraceTextChanges(val *TraceTextChanges) *NullableTraceTextChanges {
	return &NullableTraceTextChanges{value: val, isSet: true}
}

func (v NullableTraceTextChanges) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTraceTextChanges) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

