/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the PostStatesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostStatesRequest{}

// PostStatesRequest struct for PostStatesRequest
type PostStatesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Lists of states.
	States []StateType `json:"states,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostStatesRequest instantiates a new PostStatesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostStatesRequest() *PostStatesRequest {
	this := PostStatesRequest{}
	return &this
}

// NewPostStatesRequestWithDefaults instantiates a new PostStatesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostStatesRequestWithDefaults() *PostStatesRequest {
	this := PostStatesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostStatesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostStatesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostStatesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostStatesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetStates returns the States field value if set, zero value otherwise.
func (o *PostStatesRequest) GetStates() []StateType {
	if o == nil || IsNil(o.States) {
		var ret []StateType
		return ret
	}
	return o.States
}

// GetStatesOk returns a tuple with the States field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostStatesRequest) GetStatesOk() ([]StateType, bool) {
	if o == nil || IsNil(o.States) {
		return nil, false
	}
	return o.States, true
}

// HasStates returns a boolean if a field has been set.
func (o *PostStatesRequest) HasStates() bool {
	if o != nil && !IsNil(o.States) {
		return true
	}

	return false
}

// SetStates gets a reference to the given []StateType and assigns it to the States field.
func (o *PostStatesRequest) SetStates(v []StateType) {
	o.States = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostStatesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostStatesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostStatesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostStatesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostStatesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostStatesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.States) {
		toSerialize["states"] = o.States
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostStatesRequest struct {
	value *PostStatesRequest
	isSet bool
}

func (v NullablePostStatesRequest) Get() *PostStatesRequest {
	return v.value
}

func (v *NullablePostStatesRequest) Set(val *PostStatesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostStatesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostStatesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostStatesRequest(val *PostStatesRequest) *NullablePostStatesRequest {
	return &NullablePostStatesRequest{value: val, isSet: true}
}

func (v NullablePostStatesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostStatesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


