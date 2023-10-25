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

// checks if the TemplateOutOfOrderServiceReasonsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateOutOfOrderServiceReasonsCriteria{}

// TemplateOutOfOrderServiceReasonsCriteria Request object for creating new template out of order/service reasons.
type TemplateOutOfOrderServiceReasonsCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Template of out of order/service reason details.
	TemplateOutOfOrderServiceReasons []TemplateOutOfOrderServiceReasonType `json:"templateOutOfOrderServiceReasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateOutOfOrderServiceReasonsCriteria instantiates a new TemplateOutOfOrderServiceReasonsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateOutOfOrderServiceReasonsCriteria() *TemplateOutOfOrderServiceReasonsCriteria {
	this := TemplateOutOfOrderServiceReasonsCriteria{}
	return &this
}

// NewTemplateOutOfOrderServiceReasonsCriteriaWithDefaults instantiates a new TemplateOutOfOrderServiceReasonsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateOutOfOrderServiceReasonsCriteriaWithDefaults() *TemplateOutOfOrderServiceReasonsCriteria {
	this := TemplateOutOfOrderServiceReasonsCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateOutOfOrderServiceReasonsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateOutOfOrderServiceReasons returns the TemplateOutOfOrderServiceReasons field value if set, zero value otherwise.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetTemplateOutOfOrderServiceReasons() []TemplateOutOfOrderServiceReasonType {
	if o == nil || IsNil(o.TemplateOutOfOrderServiceReasons) {
		var ret []TemplateOutOfOrderServiceReasonType
		return ret
	}
	return o.TemplateOutOfOrderServiceReasons
}

// GetTemplateOutOfOrderServiceReasonsOk returns a tuple with the TemplateOutOfOrderServiceReasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetTemplateOutOfOrderServiceReasonsOk() ([]TemplateOutOfOrderServiceReasonType, bool) {
	if o == nil || IsNil(o.TemplateOutOfOrderServiceReasons) {
		return nil, false
	}
	return o.TemplateOutOfOrderServiceReasons, true
}

// HasTemplateOutOfOrderServiceReasons returns a boolean if a field has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) HasTemplateOutOfOrderServiceReasons() bool {
	if o != nil && !IsNil(o.TemplateOutOfOrderServiceReasons) {
		return true
	}

	return false
}

// SetTemplateOutOfOrderServiceReasons gets a reference to the given []TemplateOutOfOrderServiceReasonType and assigns it to the TemplateOutOfOrderServiceReasons field.
func (o *TemplateOutOfOrderServiceReasonsCriteria) SetTemplateOutOfOrderServiceReasons(v []TemplateOutOfOrderServiceReasonType) {
	o.TemplateOutOfOrderServiceReasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateOutOfOrderServiceReasonsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateOutOfOrderServiceReasonsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateOutOfOrderServiceReasonsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateOutOfOrderServiceReasonsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateOutOfOrderServiceReasons) {
		toSerialize["templateOutOfOrderServiceReasons"] = o.TemplateOutOfOrderServiceReasons
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateOutOfOrderServiceReasonsCriteria struct {
	value *TemplateOutOfOrderServiceReasonsCriteria
	isSet bool
}

func (v NullableTemplateOutOfOrderServiceReasonsCriteria) Get() *TemplateOutOfOrderServiceReasonsCriteria {
	return v.value
}

func (v *NullableTemplateOutOfOrderServiceReasonsCriteria) Set(val *TemplateOutOfOrderServiceReasonsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateOutOfOrderServiceReasonsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateOutOfOrderServiceReasonsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateOutOfOrderServiceReasonsCriteria(val *TemplateOutOfOrderServiceReasonsCriteria) *NullableTemplateOutOfOrderServiceReasonsCriteria {
	return &NullableTemplateOutOfOrderServiceReasonsCriteria{value: val, isSet: true}
}

func (v NullableTemplateOutOfOrderServiceReasonsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateOutOfOrderServiceReasonsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


