/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomConditionTemplatesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomConditionTemplatesDetails{}

// RoomConditionTemplatesDetails Response object for information regarding room condition template of a property.
type RoomConditionTemplatesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Room Condition Template Type
	RoomConditionTemplates []RoomCondtionTemplateType `json:"roomConditionTemplates,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomConditionTemplatesDetails instantiates a new RoomConditionTemplatesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomConditionTemplatesDetails() *RoomConditionTemplatesDetails {
	this := RoomConditionTemplatesDetails{}
	return &this
}

// NewRoomConditionTemplatesDetailsWithDefaults instantiates a new RoomConditionTemplatesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomConditionTemplatesDetailsWithDefaults() *RoomConditionTemplatesDetails {
	this := RoomConditionTemplatesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomConditionTemplatesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplatesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomConditionTemplatesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomConditionTemplatesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomConditionTemplates returns the RoomConditionTemplates field value if set, zero value otherwise.
func (o *RoomConditionTemplatesDetails) GetRoomConditionTemplates() []RoomCondtionTemplateType {
	if o == nil || IsNil(o.RoomConditionTemplates) {
		var ret []RoomCondtionTemplateType
		return ret
	}
	return o.RoomConditionTemplates
}

// GetRoomConditionTemplatesOk returns a tuple with the RoomConditionTemplates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplatesDetails) GetRoomConditionTemplatesOk() ([]RoomCondtionTemplateType, bool) {
	if o == nil || IsNil(o.RoomConditionTemplates) {
		return nil, false
	}
	return o.RoomConditionTemplates, true
}

// HasRoomConditionTemplates returns a boolean if a field has been set.
func (o *RoomConditionTemplatesDetails) HasRoomConditionTemplates() bool {
	if o != nil && !IsNil(o.RoomConditionTemplates) {
		return true
	}

	return false
}

// SetRoomConditionTemplates gets a reference to the given []RoomCondtionTemplateType and assigns it to the RoomConditionTemplates field.
func (o *RoomConditionTemplatesDetails) SetRoomConditionTemplates(v []RoomCondtionTemplateType) {
	o.RoomConditionTemplates = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomConditionTemplatesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomConditionTemplatesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomConditionTemplatesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomConditionTemplatesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomConditionTemplatesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomConditionTemplatesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomConditionTemplates) {
		toSerialize["roomConditionTemplates"] = o.RoomConditionTemplates
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomConditionTemplatesDetails struct {
	value *RoomConditionTemplatesDetails
	isSet bool
}

func (v NullableRoomConditionTemplatesDetails) Get() *RoomConditionTemplatesDetails {
	return v.value
}

func (v *NullableRoomConditionTemplatesDetails) Set(val *RoomConditionTemplatesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomConditionTemplatesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomConditionTemplatesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomConditionTemplatesDetails(val *RoomConditionTemplatesDetails) *NullableRoomConditionTemplatesDetails {
	return &NullableRoomConditionTemplatesDetails{value: val, isSet: true}
}

func (v NullableRoomConditionTemplatesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomConditionTemplatesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

