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

// checks if the AvailablePreferences type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AvailablePreferences{}

// AvailablePreferences struct for AvailablePreferences
type AvailablePreferences struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A collection of preferences
	PreferenceCollection []PreferenceTypeType `json:"preferenceCollection,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAvailablePreferences instantiates a new AvailablePreferences object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAvailablePreferences() *AvailablePreferences {
	this := AvailablePreferences{}
	return &this
}

// NewAvailablePreferencesWithDefaults instantiates a new AvailablePreferences object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAvailablePreferencesWithDefaults() *AvailablePreferences {
	this := AvailablePreferences{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AvailablePreferences) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailablePreferences) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AvailablePreferences) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AvailablePreferences) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPreferenceCollection returns the PreferenceCollection field value if set, zero value otherwise.
func (o *AvailablePreferences) GetPreferenceCollection() []PreferenceTypeType {
	if o == nil || IsNil(o.PreferenceCollection) {
		var ret []PreferenceTypeType
		return ret
	}
	return o.PreferenceCollection
}

// GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailablePreferences) GetPreferenceCollectionOk() ([]PreferenceTypeType, bool) {
	if o == nil || IsNil(o.PreferenceCollection) {
		return nil, false
	}
	return o.PreferenceCollection, true
}

// HasPreferenceCollection returns a boolean if a field has been set.
func (o *AvailablePreferences) HasPreferenceCollection() bool {
	if o != nil && !IsNil(o.PreferenceCollection) {
		return true
	}

	return false
}

// SetPreferenceCollection gets a reference to the given []PreferenceTypeType and assigns it to the PreferenceCollection field.
func (o *AvailablePreferences) SetPreferenceCollection(v []PreferenceTypeType) {
	o.PreferenceCollection = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AvailablePreferences) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailablePreferences) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AvailablePreferences) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AvailablePreferences) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AvailablePreferences) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AvailablePreferences) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PreferenceCollection) {
		toSerialize["preferenceCollection"] = o.PreferenceCollection
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAvailablePreferences struct {
	value *AvailablePreferences
	isSet bool
}

func (v NullableAvailablePreferences) Get() *AvailablePreferences {
	return v.value
}

func (v *NullableAvailablePreferences) Set(val *AvailablePreferences) {
	v.value = val
	v.isSet = true
}

func (v NullableAvailablePreferences) IsSet() bool {
	return v.isSet
}

func (v *NullableAvailablePreferences) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAvailablePreferences(val *AvailablePreferences) *NullableAvailablePreferences {
	return &NullableAvailablePreferences{value: val, isSet: true}
}

func (v NullableAvailablePreferences) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAvailablePreferences) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


