/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the FunctionSpaceEvents type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceEvents{}

// FunctionSpaceEvents Response object for fetching events shared by function space.
type FunctionSpaceEvents struct {
	Links []InstanceLink `json:"links,omitempty"`
	SharedFunctionSpaceEvents *SharedFunctionSpaceEventsType `json:"sharedFunctionSpaceEvents,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFunctionSpaceEvents instantiates a new FunctionSpaceEvents object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceEvents() *FunctionSpaceEvents {
	this := FunctionSpaceEvents{}
	return &this
}

// NewFunctionSpaceEventsWithDefaults instantiates a new FunctionSpaceEvents object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceEventsWithDefaults() *FunctionSpaceEvents {
	this := FunctionSpaceEvents{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FunctionSpaceEvents) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceEvents) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FunctionSpaceEvents) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FunctionSpaceEvents) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSharedFunctionSpaceEvents returns the SharedFunctionSpaceEvents field value if set, zero value otherwise.
func (o *FunctionSpaceEvents) GetSharedFunctionSpaceEvents() SharedFunctionSpaceEventsType {
	if o == nil || IsNil(o.SharedFunctionSpaceEvents) {
		var ret SharedFunctionSpaceEventsType
		return ret
	}
	return *o.SharedFunctionSpaceEvents
}

// GetSharedFunctionSpaceEventsOk returns a tuple with the SharedFunctionSpaceEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceEvents) GetSharedFunctionSpaceEventsOk() (*SharedFunctionSpaceEventsType, bool) {
	if o == nil || IsNil(o.SharedFunctionSpaceEvents) {
		return nil, false
	}
	return o.SharedFunctionSpaceEvents, true
}

// HasSharedFunctionSpaceEvents returns a boolean if a field has been set.
func (o *FunctionSpaceEvents) HasSharedFunctionSpaceEvents() bool {
	if o != nil && !IsNil(o.SharedFunctionSpaceEvents) {
		return true
	}

	return false
}

// SetSharedFunctionSpaceEvents gets a reference to the given SharedFunctionSpaceEventsType and assigns it to the SharedFunctionSpaceEvents field.
func (o *FunctionSpaceEvents) SetSharedFunctionSpaceEvents(v SharedFunctionSpaceEventsType) {
	o.SharedFunctionSpaceEvents = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FunctionSpaceEvents) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceEvents) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FunctionSpaceEvents) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FunctionSpaceEvents) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FunctionSpaceEvents) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceEvents) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SharedFunctionSpaceEvents) {
		toSerialize["sharedFunctionSpaceEvents"] = o.SharedFunctionSpaceEvents
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFunctionSpaceEvents struct {
	value *FunctionSpaceEvents
	isSet bool
}

func (v NullableFunctionSpaceEvents) Get() *FunctionSpaceEvents {
	return v.value
}

func (v *NullableFunctionSpaceEvents) Set(val *FunctionSpaceEvents) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceEvents) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceEvents) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceEvents(val *FunctionSpaceEvents) *NullableFunctionSpaceEvents {
	return &NullableFunctionSpaceEvents{value: val, isSet: true}
}

func (v NullableFunctionSpaceEvents) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceEvents) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


