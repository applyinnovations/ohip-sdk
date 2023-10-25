/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomConditionTemplateCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomConditionTemplateCriteria{}

// RoomConditionTemplateCriteria Request object for creating a new Room Condition Template.
type RoomConditionTemplateCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	RoomConditionTemplate *RoomCondtionTemplateType `json:"roomConditionTemplate,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomConditionTemplateCriteria instantiates a new RoomConditionTemplateCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomConditionTemplateCriteria() *RoomConditionTemplateCriteria {
	this := RoomConditionTemplateCriteria{}
	return &this
}

// NewRoomConditionTemplateCriteriaWithDefaults instantiates a new RoomConditionTemplateCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomConditionTemplateCriteriaWithDefaults() *RoomConditionTemplateCriteria {
	this := RoomConditionTemplateCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomConditionTemplateCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplateCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomConditionTemplateCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomConditionTemplateCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomConditionTemplate returns the RoomConditionTemplate field value if set, zero value otherwise.
func (o *RoomConditionTemplateCriteria) GetRoomConditionTemplate() RoomCondtionTemplateType {
	if o == nil || IsNil(o.RoomConditionTemplate) {
		var ret RoomCondtionTemplateType
		return ret
	}
	return *o.RoomConditionTemplate
}

// GetRoomConditionTemplateOk returns a tuple with the RoomConditionTemplate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplateCriteria) GetRoomConditionTemplateOk() (*RoomCondtionTemplateType, bool) {
	if o == nil || IsNil(o.RoomConditionTemplate) {
		return nil, false
	}
	return o.RoomConditionTemplate, true
}

// HasRoomConditionTemplate returns a boolean if a field has been set.
func (o *RoomConditionTemplateCriteria) HasRoomConditionTemplate() bool {
	if o != nil && !IsNil(o.RoomConditionTemplate) {
		return true
	}

	return false
}

// SetRoomConditionTemplate gets a reference to the given RoomCondtionTemplateType and assigns it to the RoomConditionTemplate field.
func (o *RoomConditionTemplateCriteria) SetRoomConditionTemplate(v RoomCondtionTemplateType) {
	o.RoomConditionTemplate = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomConditionTemplateCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplateCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomConditionTemplateCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomConditionTemplateCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomConditionTemplateCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomConditionTemplateCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomConditionTemplate) {
		toSerialize["roomConditionTemplate"] = o.RoomConditionTemplate
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomConditionTemplateCriteria struct {
	value *RoomConditionTemplateCriteria
	isSet bool
}

func (v NullableRoomConditionTemplateCriteria) Get() *RoomConditionTemplateCriteria {
	return v.value
}

func (v *NullableRoomConditionTemplateCriteria) Set(val *RoomConditionTemplateCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomConditionTemplateCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomConditionTemplateCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomConditionTemplateCriteria(val *RoomConditionTemplateCriteria) *NullableRoomConditionTemplateCriteria {
	return &NullableRoomConditionTemplateCriteria{value: val, isSet: true}
}

func (v NullableRoomConditionTemplateCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomConditionTemplateCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


