/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
)

// checks if the AutoTraceDefinitionOwnerInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoTraceDefinitionOwnerInfoType{}

// AutoTraceDefinitionOwnerInfoType Owner Information of Auto Trace.
type AutoTraceDefinitionOwnerInfoType struct {
	// Custom owner code
	CustomOwnerCode *string `json:"customOwnerCode,omitempty"`
	// Detailed information of trace owner assignment.
	OwnerAssignment []AutoTraceOwnerAssignmentType `json:"ownerAssignment,omitempty"`
	// Indicates if Owner Assignment exists
	OwnerAssignmentExist *bool `json:"ownerAssignmentExist,omitempty"`
	OwnerofActivity *ActivityOwnerType `json:"ownerofActivity,omitempty"`
}

// NewAutoTraceDefinitionOwnerInfoType instantiates a new AutoTraceDefinitionOwnerInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoTraceDefinitionOwnerInfoType() *AutoTraceDefinitionOwnerInfoType {
	this := AutoTraceDefinitionOwnerInfoType{}
	return &this
}

// NewAutoTraceDefinitionOwnerInfoTypeWithDefaults instantiates a new AutoTraceDefinitionOwnerInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoTraceDefinitionOwnerInfoTypeWithDefaults() *AutoTraceDefinitionOwnerInfoType {
	this := AutoTraceDefinitionOwnerInfoType{}
	return &this
}

// GetCustomOwnerCode returns the CustomOwnerCode field value if set, zero value otherwise.
func (o *AutoTraceDefinitionOwnerInfoType) GetCustomOwnerCode() string {
	if o == nil || IsNil(o.CustomOwnerCode) {
		var ret string
		return ret
	}
	return *o.CustomOwnerCode
}

// GetCustomOwnerCodeOk returns a tuple with the CustomOwnerCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionOwnerInfoType) GetCustomOwnerCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CustomOwnerCode) {
		return nil, false
	}
	return o.CustomOwnerCode, true
}

// HasCustomOwnerCode returns a boolean if a field has been set.
func (o *AutoTraceDefinitionOwnerInfoType) HasCustomOwnerCode() bool {
	if o != nil && !IsNil(o.CustomOwnerCode) {
		return true
	}

	return false
}

// SetCustomOwnerCode gets a reference to the given string and assigns it to the CustomOwnerCode field.
func (o *AutoTraceDefinitionOwnerInfoType) SetCustomOwnerCode(v string) {
	o.CustomOwnerCode = &v
}

// GetOwnerAssignment returns the OwnerAssignment field value if set, zero value otherwise.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignment() []AutoTraceOwnerAssignmentType {
	if o == nil || IsNil(o.OwnerAssignment) {
		var ret []AutoTraceOwnerAssignmentType
		return ret
	}
	return o.OwnerAssignment
}

// GetOwnerAssignmentOk returns a tuple with the OwnerAssignment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentOk() ([]AutoTraceOwnerAssignmentType, bool) {
	if o == nil || IsNil(o.OwnerAssignment) {
		return nil, false
	}
	return o.OwnerAssignment, true
}

// HasOwnerAssignment returns a boolean if a field has been set.
func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerAssignment() bool {
	if o != nil && !IsNil(o.OwnerAssignment) {
		return true
	}

	return false
}

// SetOwnerAssignment gets a reference to the given []AutoTraceOwnerAssignmentType and assigns it to the OwnerAssignment field.
func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerAssignment(v []AutoTraceOwnerAssignmentType) {
	o.OwnerAssignment = v
}

// GetOwnerAssignmentExist returns the OwnerAssignmentExist field value if set, zero value otherwise.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentExist() bool {
	if o == nil || IsNil(o.OwnerAssignmentExist) {
		var ret bool
		return ret
	}
	return *o.OwnerAssignmentExist
}

// GetOwnerAssignmentExistOk returns a tuple with the OwnerAssignmentExist field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentExistOk() (*bool, bool) {
	if o == nil || IsNil(o.OwnerAssignmentExist) {
		return nil, false
	}
	return o.OwnerAssignmentExist, true
}

// HasOwnerAssignmentExist returns a boolean if a field has been set.
func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerAssignmentExist() bool {
	if o != nil && !IsNil(o.OwnerAssignmentExist) {
		return true
	}

	return false
}

// SetOwnerAssignmentExist gets a reference to the given bool and assigns it to the OwnerAssignmentExist field.
func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerAssignmentExist(v bool) {
	o.OwnerAssignmentExist = &v
}

// GetOwnerofActivity returns the OwnerofActivity field value if set, zero value otherwise.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerofActivity() ActivityOwnerType {
	if o == nil || IsNil(o.OwnerofActivity) {
		var ret ActivityOwnerType
		return ret
	}
	return *o.OwnerofActivity
}

// GetOwnerofActivityOk returns a tuple with the OwnerofActivity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerofActivityOk() (*ActivityOwnerType, bool) {
	if o == nil || IsNil(o.OwnerofActivity) {
		return nil, false
	}
	return o.OwnerofActivity, true
}

// HasOwnerofActivity returns a boolean if a field has been set.
func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerofActivity() bool {
	if o != nil && !IsNil(o.OwnerofActivity) {
		return true
	}

	return false
}

// SetOwnerofActivity gets a reference to the given ActivityOwnerType and assigns it to the OwnerofActivity field.
func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerofActivity(v ActivityOwnerType) {
	o.OwnerofActivity = &v
}

func (o AutoTraceDefinitionOwnerInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoTraceDefinitionOwnerInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomOwnerCode) {
		toSerialize["customOwnerCode"] = o.CustomOwnerCode
	}
	if !IsNil(o.OwnerAssignment) {
		toSerialize["ownerAssignment"] = o.OwnerAssignment
	}
	if !IsNil(o.OwnerAssignmentExist) {
		toSerialize["ownerAssignmentExist"] = o.OwnerAssignmentExist
	}
	if !IsNil(o.OwnerofActivity) {
		toSerialize["ownerofActivity"] = o.OwnerofActivity
	}
	return toSerialize, nil
}

type NullableAutoTraceDefinitionOwnerInfoType struct {
	value *AutoTraceDefinitionOwnerInfoType
	isSet bool
}

func (v NullableAutoTraceDefinitionOwnerInfoType) Get() *AutoTraceDefinitionOwnerInfoType {
	return v.value
}

func (v *NullableAutoTraceDefinitionOwnerInfoType) Set(val *AutoTraceDefinitionOwnerInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoTraceDefinitionOwnerInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoTraceDefinitionOwnerInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoTraceDefinitionOwnerInfoType(val *AutoTraceDefinitionOwnerInfoType) *NullableAutoTraceDefinitionOwnerInfoType {
	return &NullableAutoTraceDefinitionOwnerInfoType{value: val, isSet: true}
}

func (v NullableAutoTraceDefinitionOwnerInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoTraceDefinitionOwnerInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

