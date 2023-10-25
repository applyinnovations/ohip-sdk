/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the TraceResolveType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TraceResolveType{}

// TraceResolveType struct for TraceResolveType
type TraceResolveType struct {
	// User that resolved the trace
	ResolvedBy *string `json:"resolvedBy,omitempty"`
	// Date the trace was resolved
	ResolvedOn *string `json:"resolvedOn,omitempty"`
}

// NewTraceResolveType instantiates a new TraceResolveType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTraceResolveType() *TraceResolveType {
	this := TraceResolveType{}
	return &this
}

// NewTraceResolveTypeWithDefaults instantiates a new TraceResolveType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTraceResolveTypeWithDefaults() *TraceResolveType {
	this := TraceResolveType{}
	return &this
}

// GetResolvedBy returns the ResolvedBy field value if set, zero value otherwise.
func (o *TraceResolveType) GetResolvedBy() string {
	if o == nil || IsNil(o.ResolvedBy) {
		var ret string
		return ret
	}
	return *o.ResolvedBy
}

// GetResolvedByOk returns a tuple with the ResolvedBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceResolveType) GetResolvedByOk() (*string, bool) {
	if o == nil || IsNil(o.ResolvedBy) {
		return nil, false
	}
	return o.ResolvedBy, true
}

// HasResolvedBy returns a boolean if a field has been set.
func (o *TraceResolveType) HasResolvedBy() bool {
	if o != nil && !IsNil(o.ResolvedBy) {
		return true
	}

	return false
}

// SetResolvedBy gets a reference to the given string and assigns it to the ResolvedBy field.
func (o *TraceResolveType) SetResolvedBy(v string) {
	o.ResolvedBy = &v
}

// GetResolvedOn returns the ResolvedOn field value if set, zero value otherwise.
func (o *TraceResolveType) GetResolvedOn() string {
	if o == nil || IsNil(o.ResolvedOn) {
		var ret string
		return ret
	}
	return *o.ResolvedOn
}

// GetResolvedOnOk returns a tuple with the ResolvedOn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TraceResolveType) GetResolvedOnOk() (*string, bool) {
	if o == nil || IsNil(o.ResolvedOn) {
		return nil, false
	}
	return o.ResolvedOn, true
}

// HasResolvedOn returns a boolean if a field has been set.
func (o *TraceResolveType) HasResolvedOn() bool {
	if o != nil && !IsNil(o.ResolvedOn) {
		return true
	}

	return false
}

// SetResolvedOn gets a reference to the given string and assigns it to the ResolvedOn field.
func (o *TraceResolveType) SetResolvedOn(v string) {
	o.ResolvedOn = &v
}

func (o TraceResolveType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TraceResolveType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ResolvedBy) {
		toSerialize["resolvedBy"] = o.ResolvedBy
	}
	if !IsNil(o.ResolvedOn) {
		toSerialize["resolvedOn"] = o.ResolvedOn
	}
	return toSerialize, nil
}

type NullableTraceResolveType struct {
	value *TraceResolveType
	isSet bool
}

func (v NullableTraceResolveType) Get() *TraceResolveType {
	return v.value
}

func (v *NullableTraceResolveType) Set(val *TraceResolveType) {
	v.value = val
	v.isSet = true
}

func (v NullableTraceResolveType) IsSet() bool {
	return v.isSet
}

func (v *NullableTraceResolveType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTraceResolveType(val *TraceResolveType) *NullableTraceResolveType {
	return &NullableTraceResolveType{value: val, isSet: true}
}

func (v NullableTraceResolveType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTraceResolveType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


