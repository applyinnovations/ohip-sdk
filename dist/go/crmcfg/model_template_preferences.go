/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the TemplatePreferences type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplatePreferences{}

// TemplatePreferences Response object for fetching preferences at the template level.
type TemplatePreferences struct {
	// This type holds a collection of preferences at the template level.
	TemplatePreferences []ConfigTemplatePreferenceType `json:"templatePreferences,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplatePreferences instantiates a new TemplatePreferences object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplatePreferences() *TemplatePreferences {
	this := TemplatePreferences{}
	return &this
}

// NewTemplatePreferencesWithDefaults instantiates a new TemplatePreferences object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplatePreferencesWithDefaults() *TemplatePreferences {
	this := TemplatePreferences{}
	return &this
}

// GetTemplatePreferences returns the TemplatePreferences field value if set, zero value otherwise.
func (o *TemplatePreferences) GetTemplatePreferences() []ConfigTemplatePreferenceType {
	if o == nil || IsNil(o.TemplatePreferences) {
		var ret []ConfigTemplatePreferenceType
		return ret
	}
	return o.TemplatePreferences
}

// GetTemplatePreferencesOk returns a tuple with the TemplatePreferences field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePreferences) GetTemplatePreferencesOk() ([]ConfigTemplatePreferenceType, bool) {
	if o == nil || IsNil(o.TemplatePreferences) {
		return nil, false
	}
	return o.TemplatePreferences, true
}

// HasTemplatePreferences returns a boolean if a field has been set.
func (o *TemplatePreferences) HasTemplatePreferences() bool {
	if o != nil && !IsNil(o.TemplatePreferences) {
		return true
	}

	return false
}

// SetTemplatePreferences gets a reference to the given []ConfigTemplatePreferenceType and assigns it to the TemplatePreferences field.
func (o *TemplatePreferences) SetTemplatePreferences(v []ConfigTemplatePreferenceType) {
	o.TemplatePreferences = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplatePreferences) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePreferences) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplatePreferences) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplatePreferences) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplatePreferences) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePreferences) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplatePreferences) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplatePreferences) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplatePreferences) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplatePreferences) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TemplatePreferences) {
		toSerialize["templatePreferences"] = o.TemplatePreferences
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplatePreferences struct {
	value *TemplatePreferences
	isSet bool
}

func (v NullableTemplatePreferences) Get() *TemplatePreferences {
	return v.value
}

func (v *NullableTemplatePreferences) Set(val *TemplatePreferences) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplatePreferences) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplatePreferences) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplatePreferences(val *TemplatePreferences) *NullableTemplatePreferences {
	return &NullableTemplatePreferences{value: val, isSet: true}
}

func (v NullableTemplatePreferences) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplatePreferences) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


