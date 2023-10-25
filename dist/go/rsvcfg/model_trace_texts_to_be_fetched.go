/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the TraceTextsToBeFetched type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TraceTextsToBeFetched{}

// TraceTextsToBeFetched Response object for fetching trace texts.
type TraceTextsToBeFetched struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of trace texts.
	TraceTexts []TraceTextType `json:"traceTexts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTraceTextsToBeFetched instantiates a new TraceTextsToBeFetched object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTraceTextsToBeFetched() *TraceTextsToBeFetched {
	this := TraceTextsToBeFetched{}
	return &this
}

// NewTraceTextsToBeFetchedWithDefaults instantiates a new TraceTextsToBeFetched object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTraceTextsToBeFetchedWithDefaults() *TraceTextsToBeFetched {
	this := TraceTextsToBeFetched{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TraceTextsToBeFetched) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextsToBeFetched) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TraceTextsToBeFetched) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TraceTextsToBeFetched) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTraceTexts returns the TraceTexts field value if set, zero value otherwise.
func (o *TraceTextsToBeFetched) GetTraceTexts() []TraceTextType {
	if o == nil || IsNil(o.TraceTexts) {
		var ret []TraceTextType
		return ret
	}
	return o.TraceTexts
}

// GetTraceTextsOk returns a tuple with the TraceTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextsToBeFetched) GetTraceTextsOk() ([]TraceTextType, bool) {
	if o == nil || IsNil(o.TraceTexts) {
		return nil, false
	}
	return o.TraceTexts, true
}

// HasTraceTexts returns a boolean if a field has been set.
func (o *TraceTextsToBeFetched) HasTraceTexts() bool {
	if o != nil && !IsNil(o.TraceTexts) {
		return true
	}

	return false
}

// SetTraceTexts gets a reference to the given []TraceTextType and assigns it to the TraceTexts field.
func (o *TraceTextsToBeFetched) SetTraceTexts(v []TraceTextType) {
	o.TraceTexts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TraceTextsToBeFetched) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceTextsToBeFetched) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TraceTextsToBeFetched) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TraceTextsToBeFetched) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TraceTextsToBeFetched) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TraceTextsToBeFetched) ToMap() (map[string]interface{}, error) {
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

type NullableTraceTextsToBeFetched struct {
	value *TraceTextsToBeFetched
	isSet bool
}

func (v NullableTraceTextsToBeFetched) Get() *TraceTextsToBeFetched {
	return v.value
}

func (v *NullableTraceTextsToBeFetched) Set(val *TraceTextsToBeFetched) {
	v.value = val
	v.isSet = true
}

func (v NullableTraceTextsToBeFetched) IsSet() bool {
	return v.isSet
}

func (v *NullableTraceTextsToBeFetched) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTraceTextsToBeFetched(val *TraceTextsToBeFetched) *NullableTraceTextsToBeFetched {
	return &NullableTraceTextsToBeFetched{value: val, isSet: true}
}

func (v NullableTraceTextsToBeFetched) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTraceTextsToBeFetched) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


