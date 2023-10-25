/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CopyDepartments type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyDepartments{}

// CopyDepartments struct for CopyDepartments
type CopyDepartments struct {
	// List of the departments to be copied.
	Departments []CopyConfigurationCodeType `json:"departments,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyDepartments instantiates a new CopyDepartments object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyDepartments() *CopyDepartments {
	this := CopyDepartments{}
	return &this
}

// NewCopyDepartmentsWithDefaults instantiates a new CopyDepartments object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyDepartmentsWithDefaults() *CopyDepartments {
	this := CopyDepartments{}
	return &this
}

// GetDepartments returns the Departments field value if set, zero value otherwise.
func (o *CopyDepartments) GetDepartments() []CopyConfigurationCodeType {
	if o == nil || IsNil(o.Departments) {
		var ret []CopyConfigurationCodeType
		return ret
	}
	return o.Departments
}

// GetDepartmentsOk returns a tuple with the Departments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyDepartments) GetDepartmentsOk() ([]CopyConfigurationCodeType, bool) {
	if o == nil || IsNil(o.Departments) {
		return nil, false
	}
	return o.Departments, true
}

// HasDepartments returns a boolean if a field has been set.
func (o *CopyDepartments) HasDepartments() bool {
	if o != nil && !IsNil(o.Departments) {
		return true
	}

	return false
}

// SetDepartments gets a reference to the given []CopyConfigurationCodeType and assigns it to the Departments field.
func (o *CopyDepartments) SetDepartments(v []CopyConfigurationCodeType) {
	o.Departments = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyDepartments) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyDepartments) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyDepartments) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyDepartments) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyDepartments) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyDepartments) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyDepartments) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyDepartments) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyDepartments) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyDepartments) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Departments) {
		toSerialize["departments"] = o.Departments
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyDepartments struct {
	value *CopyDepartments
	isSet bool
}

func (v NullableCopyDepartments) Get() *CopyDepartments {
	return v.value
}

func (v *NullableCopyDepartments) Set(val *CopyDepartments) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyDepartments) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyDepartments) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyDepartments(val *CopyDepartments) *NullableCopyDepartments {
	return &NullableCopyDepartments{value: val, isSet: true}
}

func (v NullableCopyDepartments) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyDepartments) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


