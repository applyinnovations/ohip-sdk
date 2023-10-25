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

// checks if the PutTemplateHousekeepingTaskRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutTemplateHousekeepingTaskRequest{}

// PutTemplateHousekeepingTaskRequest struct for PutTemplateHousekeepingTaskRequest
type PutTemplateHousekeepingTaskRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	Task *TemplateHousekeepingTaskConfigType `json:"task,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutTemplateHousekeepingTaskRequest instantiates a new PutTemplateHousekeepingTaskRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutTemplateHousekeepingTaskRequest() *PutTemplateHousekeepingTaskRequest {
	this := PutTemplateHousekeepingTaskRequest{}
	return &this
}

// NewPutTemplateHousekeepingTaskRequestWithDefaults instantiates a new PutTemplateHousekeepingTaskRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutTemplateHousekeepingTaskRequestWithDefaults() *PutTemplateHousekeepingTaskRequest {
	this := PutTemplateHousekeepingTaskRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutTemplateHousekeepingTaskRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateHousekeepingTaskRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutTemplateHousekeepingTaskRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutTemplateHousekeepingTaskRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTask returns the Task field value if set, zero value otherwise.
func (o *PutTemplateHousekeepingTaskRequest) GetTask() TemplateHousekeepingTaskConfigType {
	if o == nil || IsNil(o.Task) {
		var ret TemplateHousekeepingTaskConfigType
		return ret
	}
	return *o.Task
}

// GetTaskOk returns a tuple with the Task field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateHousekeepingTaskRequest) GetTaskOk() (*TemplateHousekeepingTaskConfigType, bool) {
	if o == nil || IsNil(o.Task) {
		return nil, false
	}
	return o.Task, true
}

// HasTask returns a boolean if a field has been set.
func (o *PutTemplateHousekeepingTaskRequest) HasTask() bool {
	if o != nil && !IsNil(o.Task) {
		return true
	}

	return false
}

// SetTask gets a reference to the given TemplateHousekeepingTaskConfigType and assigns it to the Task field.
func (o *PutTemplateHousekeepingTaskRequest) SetTask(v TemplateHousekeepingTaskConfigType) {
	o.Task = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutTemplateHousekeepingTaskRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTemplateHousekeepingTaskRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutTemplateHousekeepingTaskRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutTemplateHousekeepingTaskRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutTemplateHousekeepingTaskRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutTemplateHousekeepingTaskRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Task) {
		toSerialize["task"] = o.Task
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutTemplateHousekeepingTaskRequest struct {
	value *PutTemplateHousekeepingTaskRequest
	isSet bool
}

func (v NullablePutTemplateHousekeepingTaskRequest) Get() *PutTemplateHousekeepingTaskRequest {
	return v.value
}

func (v *NullablePutTemplateHousekeepingTaskRequest) Set(val *PutTemplateHousekeepingTaskRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutTemplateHousekeepingTaskRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutTemplateHousekeepingTaskRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutTemplateHousekeepingTaskRequest(val *PutTemplateHousekeepingTaskRequest) *NullablePutTemplateHousekeepingTaskRequest {
	return &NullablePutTemplateHousekeepingTaskRequest{value: val, isSet: true}
}

func (v NullablePutTemplateHousekeepingTaskRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutTemplateHousekeepingTaskRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


