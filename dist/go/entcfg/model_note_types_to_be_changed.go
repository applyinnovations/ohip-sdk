/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the NoteTypesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NoteTypesToBeChanged{}

// NoteTypesToBeChanged Request object for changing existing Note Types.
type NoteTypesToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Note Types Collection element.
	NoteTypes []NoteTypeType `json:"noteTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewNoteTypesToBeChanged instantiates a new NoteTypesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNoteTypesToBeChanged() *NoteTypesToBeChanged {
	this := NoteTypesToBeChanged{}
	return &this
}

// NewNoteTypesToBeChangedWithDefaults instantiates a new NoteTypesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNoteTypesToBeChangedWithDefaults() *NoteTypesToBeChanged {
	this := NoteTypesToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *NoteTypesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *NoteTypesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *NoteTypesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNoteTypes returns the NoteTypes field value if set, zero value otherwise.
func (o *NoteTypesToBeChanged) GetNoteTypes() []NoteTypeType {
	if o == nil || IsNil(o.NoteTypes) {
		var ret []NoteTypeType
		return ret
	}
	return o.NoteTypes
}

// GetNoteTypesOk returns a tuple with the NoteTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesToBeChanged) GetNoteTypesOk() ([]NoteTypeType, bool) {
	if o == nil || IsNil(o.NoteTypes) {
		return nil, false
	}
	return o.NoteTypes, true
}

// HasNoteTypes returns a boolean if a field has been set.
func (o *NoteTypesToBeChanged) HasNoteTypes() bool {
	if o != nil && !IsNil(o.NoteTypes) {
		return true
	}

	return false
}

// SetNoteTypes gets a reference to the given []NoteTypeType and assigns it to the NoteTypes field.
func (o *NoteTypesToBeChanged) SetNoteTypes(v []NoteTypeType) {
	o.NoteTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *NoteTypesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *NoteTypesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *NoteTypesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o NoteTypesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NoteTypesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.NoteTypes) {
		toSerialize["noteTypes"] = o.NoteTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableNoteTypesToBeChanged struct {
	value *NoteTypesToBeChanged
	isSet bool
}

func (v NullableNoteTypesToBeChanged) Get() *NoteTypesToBeChanged {
	return v.value
}

func (v *NullableNoteTypesToBeChanged) Set(val *NoteTypesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableNoteTypesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableNoteTypesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNoteTypesToBeChanged(val *NoteTypesToBeChanged) *NullableNoteTypesToBeChanged {
	return &NullableNoteTypesToBeChanged{value: val, isSet: true}
}

func (v NullableNoteTypesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNoteTypesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


