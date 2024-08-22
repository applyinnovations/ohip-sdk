/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the ExportGenerateConfigurationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportGenerateConfigurationType{}

// ExportGenerateConfigurationType Details of how and when the export is to be executed.
type ExportGenerateConfigurationType struct {
	// A flag to set export to generate automatically.
	AutoExport *bool `json:"autoExport,omitempty"`
	NightAudit *ExportGenerateConfigurationTypeNightAudit `json:"nightAudit,omitempty"`
}

// NewExportGenerateConfigurationType instantiates a new ExportGenerateConfigurationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportGenerateConfigurationType() *ExportGenerateConfigurationType {
	this := ExportGenerateConfigurationType{}
	return &this
}

// NewExportGenerateConfigurationTypeWithDefaults instantiates a new ExportGenerateConfigurationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportGenerateConfigurationTypeWithDefaults() *ExportGenerateConfigurationType {
	this := ExportGenerateConfigurationType{}
	return &this
}

// GetAutoExport returns the AutoExport field value if set, zero value otherwise.
func (o *ExportGenerateConfigurationType) GetAutoExport() bool {
	if o == nil || IsNil(o.AutoExport) {
		var ret bool
		return ret
	}
	return *o.AutoExport
}

// GetAutoExportOk returns a tuple with the AutoExport field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportGenerateConfigurationType) GetAutoExportOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoExport) {
		return nil, false
	}
	return o.AutoExport, true
}

// HasAutoExport returns a boolean if a field has been set.
func (o *ExportGenerateConfigurationType) HasAutoExport() bool {
	if o != nil && !IsNil(o.AutoExport) {
		return true
	}

	return false
}

// SetAutoExport gets a reference to the given bool and assigns it to the AutoExport field.
func (o *ExportGenerateConfigurationType) SetAutoExport(v bool) {
	o.AutoExport = &v
}

// GetNightAudit returns the NightAudit field value if set, zero value otherwise.
func (o *ExportGenerateConfigurationType) GetNightAudit() ExportGenerateConfigurationTypeNightAudit {
	if o == nil || IsNil(o.NightAudit) {
		var ret ExportGenerateConfigurationTypeNightAudit
		return ret
	}
	return *o.NightAudit
}

// GetNightAuditOk returns a tuple with the NightAudit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportGenerateConfigurationType) GetNightAuditOk() (*ExportGenerateConfigurationTypeNightAudit, bool) {
	if o == nil || IsNil(o.NightAudit) {
		return nil, false
	}
	return o.NightAudit, true
}

// HasNightAudit returns a boolean if a field has been set.
func (o *ExportGenerateConfigurationType) HasNightAudit() bool {
	if o != nil && !IsNil(o.NightAudit) {
		return true
	}

	return false
}

// SetNightAudit gets a reference to the given ExportGenerateConfigurationTypeNightAudit and assigns it to the NightAudit field.
func (o *ExportGenerateConfigurationType) SetNightAudit(v ExportGenerateConfigurationTypeNightAudit) {
	o.NightAudit = &v
}

func (o ExportGenerateConfigurationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportGenerateConfigurationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoExport) {
		toSerialize["autoExport"] = o.AutoExport
	}
	if !IsNil(o.NightAudit) {
		toSerialize["nightAudit"] = o.NightAudit
	}
	return toSerialize, nil
}

type NullableExportGenerateConfigurationType struct {
	value *ExportGenerateConfigurationType
	isSet bool
}

func (v NullableExportGenerateConfigurationType) Get() *ExportGenerateConfigurationType {
	return v.value
}

func (v *NullableExportGenerateConfigurationType) Set(val *ExportGenerateConfigurationType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportGenerateConfigurationType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportGenerateConfigurationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportGenerateConfigurationType(val *ExportGenerateConfigurationType) *NullableExportGenerateConfigurationType {
	return &NullableExportGenerateConfigurationType{value: val, isSet: true}
}

func (v NullableExportGenerateConfigurationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportGenerateConfigurationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


