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

// checks if the ChangeNoteTypesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeNoteTypesRequest{}

// ChangeNoteTypesRequest struct for ChangeNoteTypesRequest
type ChangeNoteTypesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Note Types Collection element.
	NoteTypes []NoteTypeType `json:"noteTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeNoteTypesRequest instantiates a new ChangeNoteTypesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeNoteTypesRequest() *ChangeNoteTypesRequest {
	this := ChangeNoteTypesRequest{}
	return &this
}

// NewChangeNoteTypesRequestWithDefaults instantiates a new ChangeNoteTypesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeNoteTypesRequestWithDefaults() *ChangeNoteTypesRequest {
	this := ChangeNoteTypesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeNoteTypesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeNoteTypesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeNoteTypesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeNoteTypesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNoteTypes returns the NoteTypes field value if set, zero value otherwise.
func (o *ChangeNoteTypesRequest) GetNoteTypes() []NoteTypeType {
	if o == nil || IsNil(o.NoteTypes) {
		var ret []NoteTypeType
		return ret
	}
	return o.NoteTypes
}

// GetNoteTypesOk returns a tuple with the NoteTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeNoteTypesRequest) GetNoteTypesOk() ([]NoteTypeType, bool) {
	if o == nil || IsNil(o.NoteTypes) {
		return nil, false
	}
	return o.NoteTypes, true
}

// HasNoteTypes returns a boolean if a field has been set.
func (o *ChangeNoteTypesRequest) HasNoteTypes() bool {
	if o != nil && !IsNil(o.NoteTypes) {
		return true
	}

	return false
}

// SetNoteTypes gets a reference to the given []NoteTypeType and assigns it to the NoteTypes field.
func (o *ChangeNoteTypesRequest) SetNoteTypes(v []NoteTypeType) {
	o.NoteTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeNoteTypesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeNoteTypesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeNoteTypesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeNoteTypesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeNoteTypesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeNoteTypesRequest) ToMap() (map[string]interface{}, error) {
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

type NullableChangeNoteTypesRequest struct {
	value *ChangeNoteTypesRequest
	isSet bool
}

func (v NullableChangeNoteTypesRequest) Get() *ChangeNoteTypesRequest {
	return v.value
}

func (v *NullableChangeNoteTypesRequest) Set(val *ChangeNoteTypesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeNoteTypesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeNoteTypesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeNoteTypesRequest(val *ChangeNoteTypesRequest) *NullableChangeNoteTypesRequest {
	return &NullableChangeNoteTypesRequest{value: val, isSet: true}
}

func (v NullableChangeNoteTypesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeNoteTypesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


