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

// checks if the TemplateSourceGroupToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateSourceGroupToBeChanged{}

// TemplateSourceGroupToBeChanged Request object that holds the details of template Source Group to be changed.
type TemplateSourceGroupToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateSourceGroup *TemplateSourceGroupType `json:"templateSourceGroup,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateSourceGroupToBeChanged instantiates a new TemplateSourceGroupToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateSourceGroupToBeChanged() *TemplateSourceGroupToBeChanged {
	this := TemplateSourceGroupToBeChanged{}
	return &this
}

// NewTemplateSourceGroupToBeChangedWithDefaults instantiates a new TemplateSourceGroupToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateSourceGroupToBeChangedWithDefaults() *TemplateSourceGroupToBeChanged {
	this := TemplateSourceGroupToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateSourceGroupToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceGroupToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateSourceGroupToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateSourceGroupToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateSourceGroup returns the TemplateSourceGroup field value if set, zero value otherwise.
func (o *TemplateSourceGroupToBeChanged) GetTemplateSourceGroup() TemplateSourceGroupType {
	if o == nil || IsNil(o.TemplateSourceGroup) {
		var ret TemplateSourceGroupType
		return ret
	}
	return *o.TemplateSourceGroup
}

// GetTemplateSourceGroupOk returns a tuple with the TemplateSourceGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceGroupToBeChanged) GetTemplateSourceGroupOk() (*TemplateSourceGroupType, bool) {
	if o == nil || IsNil(o.TemplateSourceGroup) {
		return nil, false
	}
	return o.TemplateSourceGroup, true
}

// HasTemplateSourceGroup returns a boolean if a field has been set.
func (o *TemplateSourceGroupToBeChanged) HasTemplateSourceGroup() bool {
	if o != nil && !IsNil(o.TemplateSourceGroup) {
		return true
	}

	return false
}

// SetTemplateSourceGroup gets a reference to the given TemplateSourceGroupType and assigns it to the TemplateSourceGroup field.
func (o *TemplateSourceGroupToBeChanged) SetTemplateSourceGroup(v TemplateSourceGroupType) {
	o.TemplateSourceGroup = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateSourceGroupToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceGroupToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateSourceGroupToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateSourceGroupToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateSourceGroupToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateSourceGroupToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateSourceGroup) {
		toSerialize["templateSourceGroup"] = o.TemplateSourceGroup
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateSourceGroupToBeChanged struct {
	value *TemplateSourceGroupToBeChanged
	isSet bool
}

func (v NullableTemplateSourceGroupToBeChanged) Get() *TemplateSourceGroupToBeChanged {
	return v.value
}

func (v *NullableTemplateSourceGroupToBeChanged) Set(val *TemplateSourceGroupToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateSourceGroupToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateSourceGroupToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateSourceGroupToBeChanged(val *TemplateSourceGroupToBeChanged) *NullableTemplateSourceGroupToBeChanged {
	return &NullableTemplateSourceGroupToBeChanged{value: val, isSet: true}
}

func (v NullableTemplateSourceGroupToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateSourceGroupToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


