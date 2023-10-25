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

// checks if the TemplateRoomFeaturesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateRoomFeaturesCriteria{}

// TemplateRoomFeaturesCriteria Request object for creating template room features.
type TemplateRoomFeaturesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Template room feature details.
	TemplateRoomFeatures []TemplateRoomFeatureConfigType `json:"templateRoomFeatures,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateRoomFeaturesCriteria instantiates a new TemplateRoomFeaturesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateRoomFeaturesCriteria() *TemplateRoomFeaturesCriteria {
	this := TemplateRoomFeaturesCriteria{}
	return &this
}

// NewTemplateRoomFeaturesCriteriaWithDefaults instantiates a new TemplateRoomFeaturesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateRoomFeaturesCriteriaWithDefaults() *TemplateRoomFeaturesCriteria {
	this := TemplateRoomFeaturesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateRoomFeaturesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRoomFeaturesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateRoomFeaturesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateRoomFeaturesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateRoomFeatures returns the TemplateRoomFeatures field value if set, zero value otherwise.
func (o *TemplateRoomFeaturesCriteria) GetTemplateRoomFeatures() []TemplateRoomFeatureConfigType {
	if o == nil || IsNil(o.TemplateRoomFeatures) {
		var ret []TemplateRoomFeatureConfigType
		return ret
	}
	return o.TemplateRoomFeatures
}

// GetTemplateRoomFeaturesOk returns a tuple with the TemplateRoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRoomFeaturesCriteria) GetTemplateRoomFeaturesOk() ([]TemplateRoomFeatureConfigType, bool) {
	if o == nil || IsNil(o.TemplateRoomFeatures) {
		return nil, false
	}
	return o.TemplateRoomFeatures, true
}

// HasTemplateRoomFeatures returns a boolean if a field has been set.
func (o *TemplateRoomFeaturesCriteria) HasTemplateRoomFeatures() bool {
	if o != nil && !IsNil(o.TemplateRoomFeatures) {
		return true
	}

	return false
}

// SetTemplateRoomFeatures gets a reference to the given []TemplateRoomFeatureConfigType and assigns it to the TemplateRoomFeatures field.
func (o *TemplateRoomFeaturesCriteria) SetTemplateRoomFeatures(v []TemplateRoomFeatureConfigType) {
	o.TemplateRoomFeatures = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateRoomFeaturesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRoomFeaturesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateRoomFeaturesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateRoomFeaturesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateRoomFeaturesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateRoomFeaturesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateRoomFeatures) {
		toSerialize["templateRoomFeatures"] = o.TemplateRoomFeatures
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateRoomFeaturesCriteria struct {
	value *TemplateRoomFeaturesCriteria
	isSet bool
}

func (v NullableTemplateRoomFeaturesCriteria) Get() *TemplateRoomFeaturesCriteria {
	return v.value
}

func (v *NullableTemplateRoomFeaturesCriteria) Set(val *TemplateRoomFeaturesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateRoomFeaturesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateRoomFeaturesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateRoomFeaturesCriteria(val *TemplateRoomFeaturesCriteria) *NullableTemplateRoomFeaturesCriteria {
	return &NullableTemplateRoomFeaturesCriteria{value: val, isSet: true}
}

func (v NullableTemplateRoomFeaturesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateRoomFeaturesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


