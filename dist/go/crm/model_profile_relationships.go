/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ProfileRelationships type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileRelationships{}

// ProfileRelationships struct for ProfileRelationships
type ProfileRelationships struct {
	Links []InstanceLink `json:"links,omitempty"`
	Relationships *RelationshipsSummary `json:"relationships,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewProfileRelationships instantiates a new ProfileRelationships object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileRelationships() *ProfileRelationships {
	this := ProfileRelationships{}
	return &this
}

// NewProfileRelationshipsWithDefaults instantiates a new ProfileRelationships object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileRelationshipsWithDefaults() *ProfileRelationships {
	this := ProfileRelationships{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ProfileRelationships) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRelationships) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ProfileRelationships) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ProfileRelationships) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRelationships returns the Relationships field value if set, zero value otherwise.
func (o *ProfileRelationships) GetRelationships() RelationshipsSummary {
	if o == nil || IsNil(o.Relationships) {
		var ret RelationshipsSummary
		return ret
	}
	return *o.Relationships
}

// GetRelationshipsOk returns a tuple with the Relationships field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRelationships) GetRelationshipsOk() (*RelationshipsSummary, bool) {
	if o == nil || IsNil(o.Relationships) {
		return nil, false
	}
	return o.Relationships, true
}

// HasRelationships returns a boolean if a field has been set.
func (o *ProfileRelationships) HasRelationships() bool {
	if o != nil && !IsNil(o.Relationships) {
		return true
	}

	return false
}

// SetRelationships gets a reference to the given RelationshipsSummary and assigns it to the Relationships field.
func (o *ProfileRelationships) SetRelationships(v RelationshipsSummary) {
	o.Relationships = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ProfileRelationships) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRelationships) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ProfileRelationships) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ProfileRelationships) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ProfileRelationships) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileRelationships) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Relationships) {
		toSerialize["relationships"] = o.Relationships
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableProfileRelationships struct {
	value *ProfileRelationships
	isSet bool
}

func (v NullableProfileRelationships) Get() *ProfileRelationships {
	return v.value
}

func (v *NullableProfileRelationships) Set(val *ProfileRelationships) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileRelationships) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileRelationships) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileRelationships(val *ProfileRelationships) *NullableProfileRelationships {
	return &NullableProfileRelationships{value: val, isSet: true}
}

func (v NullableProfileRelationships) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileRelationships) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


