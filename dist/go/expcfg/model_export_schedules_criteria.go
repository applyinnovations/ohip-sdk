/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the ExportSchedulesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportSchedulesCriteria{}

// ExportSchedulesCriteria Request to create export schedules
type ExportSchedulesCriteria struct {
	ExportScheduleConfig *ExportSchedulesConfigType `json:"exportScheduleConfig,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewExportSchedulesCriteria instantiates a new ExportSchedulesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportSchedulesCriteria() *ExportSchedulesCriteria {
	this := ExportSchedulesCriteria{}
	return &this
}

// NewExportSchedulesCriteriaWithDefaults instantiates a new ExportSchedulesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportSchedulesCriteriaWithDefaults() *ExportSchedulesCriteria {
	this := ExportSchedulesCriteria{}
	return &this
}

// GetExportScheduleConfig returns the ExportScheduleConfig field value if set, zero value otherwise.
func (o *ExportSchedulesCriteria) GetExportScheduleConfig() ExportSchedulesConfigType {
	if o == nil || IsNil(o.ExportScheduleConfig) {
		var ret ExportSchedulesConfigType
		return ret
	}
	return *o.ExportScheduleConfig
}

// GetExportScheduleConfigOk returns a tuple with the ExportScheduleConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportSchedulesCriteria) GetExportScheduleConfigOk() (*ExportSchedulesConfigType, bool) {
	if o == nil || IsNil(o.ExportScheduleConfig) {
		return nil, false
	}
	return o.ExportScheduleConfig, true
}

// HasExportScheduleConfig returns a boolean if a field has been set.
func (o *ExportSchedulesCriteria) HasExportScheduleConfig() bool {
	if o != nil && !IsNil(o.ExportScheduleConfig) {
		return true
	}

	return false
}

// SetExportScheduleConfig gets a reference to the given ExportSchedulesConfigType and assigns it to the ExportScheduleConfig field.
func (o *ExportSchedulesCriteria) SetExportScheduleConfig(v ExportSchedulesConfigType) {
	o.ExportScheduleConfig = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ExportSchedulesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportSchedulesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ExportSchedulesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ExportSchedulesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ExportSchedulesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportSchedulesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ExportSchedulesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ExportSchedulesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ExportSchedulesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportSchedulesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExportScheduleConfig) {
		toSerialize["exportScheduleConfig"] = o.ExportScheduleConfig
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableExportSchedulesCriteria struct {
	value *ExportSchedulesCriteria
	isSet bool
}

func (v NullableExportSchedulesCriteria) Get() *ExportSchedulesCriteria {
	return v.value
}

func (v *NullableExportSchedulesCriteria) Set(val *ExportSchedulesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableExportSchedulesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableExportSchedulesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportSchedulesCriteria(val *ExportSchedulesCriteria) *NullableExportSchedulesCriteria {
	return &NullableExportSchedulesCriteria{value: val, isSet: true}
}

func (v NullableExportSchedulesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportSchedulesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


