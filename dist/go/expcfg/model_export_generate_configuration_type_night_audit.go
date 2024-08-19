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

// checks if the ExportGenerateConfigurationTypeNightAudit type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportGenerateConfigurationTypeNightAudit{}

// ExportGenerateConfigurationTypeNightAudit A flag to set export to be run in Night Audit.
type ExportGenerateConfigurationTypeNightAudit struct {
	// Day of the week, when the export routine is run in the night audit and the NA_FREQUENCY is set to 'Day of Week'.
	NightAuditExportDetail *string `json:"nightAuditExportDetail,omitempty"`
	// The frequency at which export should be generated. Eg. Nightly, End of Month or End of Year.
	NightAuditFrequency *string `json:"nightAuditFrequency,omitempty"`
	// A flag to set export to be run in Night Audit.
	RunInNightAudit *bool `json:"runInNightAudit,omitempty"`
}

// NewExportGenerateConfigurationTypeNightAudit instantiates a new ExportGenerateConfigurationTypeNightAudit object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportGenerateConfigurationTypeNightAudit() *ExportGenerateConfigurationTypeNightAudit {
	this := ExportGenerateConfigurationTypeNightAudit{}
	return &this
}

// NewExportGenerateConfigurationTypeNightAuditWithDefaults instantiates a new ExportGenerateConfigurationTypeNightAudit object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportGenerateConfigurationTypeNightAuditWithDefaults() *ExportGenerateConfigurationTypeNightAudit {
	this := ExportGenerateConfigurationTypeNightAudit{}
	return &this
}

// GetNightAuditExportDetail returns the NightAuditExportDetail field value if set, zero value otherwise.
func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditExportDetail() string {
	if o == nil || IsNil(o.NightAuditExportDetail) {
		var ret string
		return ret
	}
	return *o.NightAuditExportDetail
}

// GetNightAuditExportDetailOk returns a tuple with the NightAuditExportDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditExportDetailOk() (*string, bool) {
	if o == nil || IsNil(o.NightAuditExportDetail) {
		return nil, false
	}
	return o.NightAuditExportDetail, true
}

// HasNightAuditExportDetail returns a boolean if a field has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) HasNightAuditExportDetail() bool {
	if o != nil && !IsNil(o.NightAuditExportDetail) {
		return true
	}

	return false
}

// SetNightAuditExportDetail gets a reference to the given string and assigns it to the NightAuditExportDetail field.
func (o *ExportGenerateConfigurationTypeNightAudit) SetNightAuditExportDetail(v string) {
	o.NightAuditExportDetail = &v
}

// GetNightAuditFrequency returns the NightAuditFrequency field value if set, zero value otherwise.
func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditFrequency() string {
	if o == nil || IsNil(o.NightAuditFrequency) {
		var ret string
		return ret
	}
	return *o.NightAuditFrequency
}

// GetNightAuditFrequencyOk returns a tuple with the NightAuditFrequency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditFrequencyOk() (*string, bool) {
	if o == nil || IsNil(o.NightAuditFrequency) {
		return nil, false
	}
	return o.NightAuditFrequency, true
}

// HasNightAuditFrequency returns a boolean if a field has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) HasNightAuditFrequency() bool {
	if o != nil && !IsNil(o.NightAuditFrequency) {
		return true
	}

	return false
}

// SetNightAuditFrequency gets a reference to the given string and assigns it to the NightAuditFrequency field.
func (o *ExportGenerateConfigurationTypeNightAudit) SetNightAuditFrequency(v string) {
	o.NightAuditFrequency = &v
}

// GetRunInNightAudit returns the RunInNightAudit field value if set, zero value otherwise.
func (o *ExportGenerateConfigurationTypeNightAudit) GetRunInNightAudit() bool {
	if o == nil || IsNil(o.RunInNightAudit) {
		var ret bool
		return ret
	}
	return *o.RunInNightAudit
}

// GetRunInNightAuditOk returns a tuple with the RunInNightAudit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) GetRunInNightAuditOk() (*bool, bool) {
	if o == nil || IsNil(o.RunInNightAudit) {
		return nil, false
	}
	return o.RunInNightAudit, true
}

// HasRunInNightAudit returns a boolean if a field has been set.
func (o *ExportGenerateConfigurationTypeNightAudit) HasRunInNightAudit() bool {
	if o != nil && !IsNil(o.RunInNightAudit) {
		return true
	}

	return false
}

// SetRunInNightAudit gets a reference to the given bool and assigns it to the RunInNightAudit field.
func (o *ExportGenerateConfigurationTypeNightAudit) SetRunInNightAudit(v bool) {
	o.RunInNightAudit = &v
}

func (o ExportGenerateConfigurationTypeNightAudit) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportGenerateConfigurationTypeNightAudit) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NightAuditExportDetail) {
		toSerialize["nightAuditExportDetail"] = o.NightAuditExportDetail
	}
	if !IsNil(o.NightAuditFrequency) {
		toSerialize["nightAuditFrequency"] = o.NightAuditFrequency
	}
	if !IsNil(o.RunInNightAudit) {
		toSerialize["runInNightAudit"] = o.RunInNightAudit
	}
	return toSerialize, nil
}

type NullableExportGenerateConfigurationTypeNightAudit struct {
	value *ExportGenerateConfigurationTypeNightAudit
	isSet bool
}

func (v NullableExportGenerateConfigurationTypeNightAudit) Get() *ExportGenerateConfigurationTypeNightAudit {
	return v.value
}

func (v *NullableExportGenerateConfigurationTypeNightAudit) Set(val *ExportGenerateConfigurationTypeNightAudit) {
	v.value = val
	v.isSet = true
}

func (v NullableExportGenerateConfigurationTypeNightAudit) IsSet() bool {
	return v.isSet
}

func (v *NullableExportGenerateConfigurationTypeNightAudit) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportGenerateConfigurationTypeNightAudit(val *ExportGenerateConfigurationTypeNightAudit) *NullableExportGenerateConfigurationTypeNightAudit {
	return &NullableExportGenerateConfigurationTypeNightAudit{value: val, isSet: true}
}

func (v NullableExportGenerateConfigurationTypeNightAudit) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportGenerateConfigurationTypeNightAudit) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


