/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the NoteTypesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NoteTypesDetails{}

// NoteTypesDetails Response object for fetching Note Types of specific Notes Group.
type NoteTypesDetails struct {
	// Note Types Collection element.
	NoteTypes []NoteTypeType `json:"noteTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewNoteTypesDetails instantiates a new NoteTypesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNoteTypesDetails() *NoteTypesDetails {
	this := NoteTypesDetails{}
	return &this
}

// NewNoteTypesDetailsWithDefaults instantiates a new NoteTypesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNoteTypesDetailsWithDefaults() *NoteTypesDetails {
	this := NoteTypesDetails{}
	return &this
}

// GetNoteTypes returns the NoteTypes field value if set, zero value otherwise.
func (o *NoteTypesDetails) GetNoteTypes() []NoteTypeType {
	if o == nil || IsNil(o.NoteTypes) {
		var ret []NoteTypeType
		return ret
	}
	return o.NoteTypes
}

// GetNoteTypesOk returns a tuple with the NoteTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesDetails) GetNoteTypesOk() ([]NoteTypeType, bool) {
	if o == nil || IsNil(o.NoteTypes) {
		return nil, false
	}
	return o.NoteTypes, true
}

// HasNoteTypes returns a boolean if a field has been set.
func (o *NoteTypesDetails) HasNoteTypes() bool {
	if o != nil && !IsNil(o.NoteTypes) {
		return true
	}

	return false
}

// SetNoteTypes gets a reference to the given []NoteTypeType and assigns it to the NoteTypes field.
func (o *NoteTypesDetails) SetNoteTypes(v []NoteTypeType) {
	o.NoteTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *NoteTypesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *NoteTypesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *NoteTypesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *NoteTypesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *NoteTypesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *NoteTypesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o NoteTypesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NoteTypesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NoteTypes) {
		toSerialize["noteTypes"] = o.NoteTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableNoteTypesDetails struct {
	value *NoteTypesDetails
	isSet bool
}

func (v NullableNoteTypesDetails) Get() *NoteTypesDetails {
	return v.value
}

func (v *NullableNoteTypesDetails) Set(val *NoteTypesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableNoteTypesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableNoteTypesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNoteTypesDetails(val *NoteTypesDetails) *NullableNoteTypesDetails {
	return &NullableNoteTypesDetails{value: val, isSet: true}
}

func (v NullableNoteTypesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNoteTypesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


