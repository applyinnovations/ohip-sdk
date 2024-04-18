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

// checks if the OwnerTeamsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OwnerTeamsToBeChanged{}

// OwnerTeamsToBeChanged Request object for changing Owner Teams.
type OwnerTeamsToBeChanged struct {
	// List of Owner Teams.
	OwnerTeams []OwnerTeamType `json:"ownerTeams,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewOwnerTeamsToBeChanged instantiates a new OwnerTeamsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOwnerTeamsToBeChanged() *OwnerTeamsToBeChanged {
	this := OwnerTeamsToBeChanged{}
	return &this
}

// NewOwnerTeamsToBeChangedWithDefaults instantiates a new OwnerTeamsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOwnerTeamsToBeChangedWithDefaults() *OwnerTeamsToBeChanged {
	this := OwnerTeamsToBeChanged{}
	return &this
}

// GetOwnerTeams returns the OwnerTeams field value if set, zero value otherwise.
func (o *OwnerTeamsToBeChanged) GetOwnerTeams() []OwnerTeamType {
	if o == nil || IsNil(o.OwnerTeams) {
		var ret []OwnerTeamType
		return ret
	}
	return o.OwnerTeams
}

// GetOwnerTeamsOk returns a tuple with the OwnerTeams field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OwnerTeamsToBeChanged) GetOwnerTeamsOk() ([]OwnerTeamType, bool) {
	if o == nil || IsNil(o.OwnerTeams) {
		return nil, false
	}
	return o.OwnerTeams, true
}

// HasOwnerTeams returns a boolean if a field has been set.
func (o *OwnerTeamsToBeChanged) HasOwnerTeams() bool {
	if o != nil && !IsNil(o.OwnerTeams) {
		return true
	}

	return false
}

// SetOwnerTeams gets a reference to the given []OwnerTeamType and assigns it to the OwnerTeams field.
func (o *OwnerTeamsToBeChanged) SetOwnerTeams(v []OwnerTeamType) {
	o.OwnerTeams = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *OwnerTeamsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OwnerTeamsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *OwnerTeamsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *OwnerTeamsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *OwnerTeamsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OwnerTeamsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *OwnerTeamsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *OwnerTeamsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o OwnerTeamsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OwnerTeamsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OwnerTeams) {
		toSerialize["ownerTeams"] = o.OwnerTeams
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableOwnerTeamsToBeChanged struct {
	value *OwnerTeamsToBeChanged
	isSet bool
}

func (v NullableOwnerTeamsToBeChanged) Get() *OwnerTeamsToBeChanged {
	return v.value
}

func (v *NullableOwnerTeamsToBeChanged) Set(val *OwnerTeamsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableOwnerTeamsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableOwnerTeamsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOwnerTeamsToBeChanged(val *OwnerTeamsToBeChanged) *NullableOwnerTeamsToBeChanged {
	return &NullableOwnerTeamsToBeChanged{value: val, isSet: true}
}

func (v NullableOwnerTeamsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOwnerTeamsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

