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

// checks if the CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions{}

// CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored.
type CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions struct {
	// When true, this will copy the owner assignments to the trace definition.
	AllowOwnerAssignmentsCopy *bool `json:"allowOwnerAssignmentsCopy,omitempty"`
}

// NewCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions instantiates a new CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions() *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions {
	this := CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions{}
	return &this
}

// NewCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsWithDefaults instantiates a new CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsWithDefaults() *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions {
	this := CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions{}
	return &this
}

// GetAllowOwnerAssignmentsCopy returns the AllowOwnerAssignmentsCopy field value if set, zero value otherwise.
func (o *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) GetAllowOwnerAssignmentsCopy() bool {
	if o == nil || IsNil(o.AllowOwnerAssignmentsCopy) {
		var ret bool
		return ret
	}
	return *o.AllowOwnerAssignmentsCopy
}

// GetAllowOwnerAssignmentsCopyOk returns a tuple with the AllowOwnerAssignmentsCopy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) GetAllowOwnerAssignmentsCopyOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowOwnerAssignmentsCopy) {
		return nil, false
	}
	return o.AllowOwnerAssignmentsCopy, true
}

// HasAllowOwnerAssignmentsCopy returns a boolean if a field has been set.
func (o *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) HasAllowOwnerAssignmentsCopy() bool {
	if o != nil && !IsNil(o.AllowOwnerAssignmentsCopy) {
		return true
	}

	return false
}

// SetAllowOwnerAssignmentsCopy gets a reference to the given bool and assigns it to the AllowOwnerAssignmentsCopy field.
func (o *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) SetAllowOwnerAssignmentsCopy(v bool) {
	o.AllowOwnerAssignmentsCopy = &v
}

func (o CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowOwnerAssignmentsCopy) {
		toSerialize["allowOwnerAssignmentsCopy"] = o.AllowOwnerAssignmentsCopy
	}
	return toSerialize, nil
}

type NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions struct {
	value *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions
	isSet bool
}

func (v NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) Get() *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions {
	return v.value
}

func (v *NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) Set(val *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions(val *CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) *NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions {
	return &NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions{value: val, isSet: true}
}

func (v NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

