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

// checks if the PutTemplateExclusivePreferencesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutTemplateExclusivePreferencesRequest{}

// PutTemplateExclusivePreferencesRequest struct for PutTemplateExclusivePreferencesRequest
type PutTemplateExclusivePreferencesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Base details common between both template and property level exclusive preferences.
	TemplateExclusivePreferences []ConfigExclusivePreferenceBaseType `json:"templateExclusivePreferences,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutTemplateExclusivePreferencesRequest instantiates a new PutTemplateExclusivePreferencesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutTemplateExclusivePreferencesRequest() *PutTemplateExclusivePreferencesRequest {
	this := PutTemplateExclusivePreferencesRequest{}
	return &this
}

// NewPutTemplateExclusivePreferencesRequestWithDefaults instantiates a new PutTemplateExclusivePreferencesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutTemplateExclusivePreferencesRequestWithDefaults() *PutTemplateExclusivePreferencesRequest {
	this := PutTemplateExclusivePreferencesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutTemplateExclusivePreferencesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateExclusivePreferencesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutTemplateExclusivePreferencesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutTemplateExclusivePreferencesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateExclusivePreferences returns the TemplateExclusivePreferences field value if set, zero value otherwise.
func (o *PutTemplateExclusivePreferencesRequest) GetTemplateExclusivePreferences() []ConfigExclusivePreferenceBaseType {
	if o == nil || IsNil(o.TemplateExclusivePreferences) {
		var ret []ConfigExclusivePreferenceBaseType
		return ret
	}
	return o.TemplateExclusivePreferences
}

// GetTemplateExclusivePreferencesOk returns a tuple with the TemplateExclusivePreferences field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateExclusivePreferencesRequest) GetTemplateExclusivePreferencesOk() ([]ConfigExclusivePreferenceBaseType, bool) {
	if o == nil || IsNil(o.TemplateExclusivePreferences) {
		return nil, false
	}
	return o.TemplateExclusivePreferences, true
}

// HasTemplateExclusivePreferences returns a boolean if a field has been set.
func (o *PutTemplateExclusivePreferencesRequest) HasTemplateExclusivePreferences() bool {
	if o != nil && !IsNil(o.TemplateExclusivePreferences) {
		return true
	}

	return false
}

// SetTemplateExclusivePreferences gets a reference to the given []ConfigExclusivePreferenceBaseType and assigns it to the TemplateExclusivePreferences field.
func (o *PutTemplateExclusivePreferencesRequest) SetTemplateExclusivePreferences(v []ConfigExclusivePreferenceBaseType) {
	o.TemplateExclusivePreferences = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutTemplateExclusivePreferencesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateExclusivePreferencesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutTemplateExclusivePreferencesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutTemplateExclusivePreferencesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutTemplateExclusivePreferencesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutTemplateExclusivePreferencesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateExclusivePreferences) {
		toSerialize["templateExclusivePreferences"] = o.TemplateExclusivePreferences
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutTemplateExclusivePreferencesRequest struct {
	value *PutTemplateExclusivePreferencesRequest
	isSet bool
}

func (v NullablePutTemplateExclusivePreferencesRequest) Get() *PutTemplateExclusivePreferencesRequest {
	return v.value
}

func (v *NullablePutTemplateExclusivePreferencesRequest) Set(val *PutTemplateExclusivePreferencesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutTemplateExclusivePreferencesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutTemplateExclusivePreferencesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutTemplateExclusivePreferencesRequest(val *PutTemplateExclusivePreferencesRequest) *NullablePutTemplateExclusivePreferencesRequest {
	return &NullablePutTemplateExclusivePreferencesRequest{value: val, isSet: true}
}

func (v NullablePutTemplateExclusivePreferencesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutTemplateExclusivePreferencesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


