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

// checks if the SmokingTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SmokingTypesCriteria{}

// SmokingTypesCriteria Request object for creating Smoking Types.
type SmokingTypesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Smoking Types.
	SmokingTypes []SmokingTypeType `json:"smokingTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSmokingTypesCriteria instantiates a new SmokingTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSmokingTypesCriteria() *SmokingTypesCriteria {
	this := SmokingTypesCriteria{}
	return &this
}

// NewSmokingTypesCriteriaWithDefaults instantiates a new SmokingTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSmokingTypesCriteriaWithDefaults() *SmokingTypesCriteria {
	this := SmokingTypesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SmokingTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmokingTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SmokingTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SmokingTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSmokingTypes returns the SmokingTypes field value if set, zero value otherwise.
func (o *SmokingTypesCriteria) GetSmokingTypes() []SmokingTypeType {
	if o == nil || IsNil(o.SmokingTypes) {
		var ret []SmokingTypeType
		return ret
	}
	return o.SmokingTypes
}

// GetSmokingTypesOk returns a tuple with the SmokingTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmokingTypesCriteria) GetSmokingTypesOk() ([]SmokingTypeType, bool) {
	if o == nil || IsNil(o.SmokingTypes) {
		return nil, false
	}
	return o.SmokingTypes, true
}

// HasSmokingTypes returns a boolean if a field has been set.
func (o *SmokingTypesCriteria) HasSmokingTypes() bool {
	if o != nil && !IsNil(o.SmokingTypes) {
		return true
	}

	return false
}

// SetSmokingTypes gets a reference to the given []SmokingTypeType and assigns it to the SmokingTypes field.
func (o *SmokingTypesCriteria) SetSmokingTypes(v []SmokingTypeType) {
	o.SmokingTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SmokingTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmokingTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SmokingTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SmokingTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SmokingTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SmokingTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SmokingTypes) {
		toSerialize["smokingTypes"] = o.SmokingTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSmokingTypesCriteria struct {
	value *SmokingTypesCriteria
	isSet bool
}

func (v NullableSmokingTypesCriteria) Get() *SmokingTypesCriteria {
	return v.value
}

func (v *NullableSmokingTypesCriteria) Set(val *SmokingTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableSmokingTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableSmokingTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSmokingTypesCriteria(val *SmokingTypesCriteria) *NullableSmokingTypesCriteria {
	return &NullableSmokingTypesCriteria{value: val, isSet: true}
}

func (v NullableSmokingTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSmokingTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


