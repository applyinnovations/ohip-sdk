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

// checks if the PostNoteTypesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostNoteTypesRequest{}

// PostNoteTypesRequest struct for PostNoteTypesRequest
type PostNoteTypesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Note Types Collection element.
	NoteTypes []NoteTypeType `json:"noteTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostNoteTypesRequest instantiates a new PostNoteTypesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostNoteTypesRequest() *PostNoteTypesRequest {
	this := PostNoteTypesRequest{}
	return &this
}

// NewPostNoteTypesRequestWithDefaults instantiates a new PostNoteTypesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostNoteTypesRequestWithDefaults() *PostNoteTypesRequest {
	this := PostNoteTypesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostNoteTypesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNoteTypesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostNoteTypesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostNoteTypesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNoteTypes returns the NoteTypes field value if set, zero value otherwise.
func (o *PostNoteTypesRequest) GetNoteTypes() []NoteTypeType {
	if o == nil || IsNil(o.NoteTypes) {
		var ret []NoteTypeType
		return ret
	}
	return o.NoteTypes
}

// GetNoteTypesOk returns a tuple with the NoteTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNoteTypesRequest) GetNoteTypesOk() ([]NoteTypeType, bool) {
	if o == nil || IsNil(o.NoteTypes) {
		return nil, false
	}
	return o.NoteTypes, true
}

// HasNoteTypes returns a boolean if a field has been set.
func (o *PostNoteTypesRequest) HasNoteTypes() bool {
	if o != nil && !IsNil(o.NoteTypes) {
		return true
	}

	return false
}

// SetNoteTypes gets a reference to the given []NoteTypeType and assigns it to the NoteTypes field.
func (o *PostNoteTypesRequest) SetNoteTypes(v []NoteTypeType) {
	o.NoteTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostNoteTypesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNoteTypesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostNoteTypesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostNoteTypesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostNoteTypesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostNoteTypesRequest) ToMap() (map[string]interface{}, error) {
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

type NullablePostNoteTypesRequest struct {
	value *PostNoteTypesRequest
	isSet bool
}

func (v NullablePostNoteTypesRequest) Get() *PostNoteTypesRequest {
	return v.value
}

func (v *NullablePostNoteTypesRequest) Set(val *PostNoteTypesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostNoteTypesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostNoteTypesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostNoteTypesRequest(val *PostNoteTypesRequest) *NullablePostNoteTypesRequest {
	return &NullablePostNoteTypesRequest{value: val, isSet: true}
}

func (v NullablePostNoteTypesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostNoteTypesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


