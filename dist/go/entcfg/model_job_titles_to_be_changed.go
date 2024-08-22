/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the JobTitlesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &JobTitlesToBeChanged{}

// JobTitlesToBeChanged Request object for modifying job titles for hotels.
type JobTitlesToBeChanged struct {
	// Job Title details for a hotel.
	JobTitles []JobTitleType `json:"jobTitles,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewJobTitlesToBeChanged instantiates a new JobTitlesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewJobTitlesToBeChanged() *JobTitlesToBeChanged {
	this := JobTitlesToBeChanged{}
	return &this
}

// NewJobTitlesToBeChangedWithDefaults instantiates a new JobTitlesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewJobTitlesToBeChangedWithDefaults() *JobTitlesToBeChanged {
	this := JobTitlesToBeChanged{}
	return &this
}

// GetJobTitles returns the JobTitles field value if set, zero value otherwise.
func (o *JobTitlesToBeChanged) GetJobTitles() []JobTitleType {
	if o == nil || IsNil(o.JobTitles) {
		var ret []JobTitleType
		return ret
	}
	return o.JobTitles
}

// GetJobTitlesOk returns a tuple with the JobTitles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *JobTitlesToBeChanged) GetJobTitlesOk() ([]JobTitleType, bool) {
	if o == nil || IsNil(o.JobTitles) {
		return nil, false
	}
	return o.JobTitles, true
}

// HasJobTitles returns a boolean if a field has been set.
func (o *JobTitlesToBeChanged) HasJobTitles() bool {
	if o != nil && !IsNil(o.JobTitles) {
		return true
	}

	return false
}

// SetJobTitles gets a reference to the given []JobTitleType and assigns it to the JobTitles field.
func (o *JobTitlesToBeChanged) SetJobTitles(v []JobTitleType) {
	o.JobTitles = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *JobTitlesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *JobTitlesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *JobTitlesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *JobTitlesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *JobTitlesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *JobTitlesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *JobTitlesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *JobTitlesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o JobTitlesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o JobTitlesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.JobTitles) {
		toSerialize["jobTitles"] = o.JobTitles
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableJobTitlesToBeChanged struct {
	value *JobTitlesToBeChanged
	isSet bool
}

func (v NullableJobTitlesToBeChanged) Get() *JobTitlesToBeChanged {
	return v.value
}

func (v *NullableJobTitlesToBeChanged) Set(val *JobTitlesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableJobTitlesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableJobTitlesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableJobTitlesToBeChanged(val *JobTitlesToBeChanged) *NullableJobTitlesToBeChanged {
	return &NullableJobTitlesToBeChanged{value: val, isSet: true}
}

func (v NullableJobTitlesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableJobTitlesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


