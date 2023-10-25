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

// checks if the PostDepartmentsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostDepartmentsRequest{}

// PostDepartmentsRequest struct for PostDepartmentsRequest
type PostDepartmentsRequest struct {
	// Collection of departments.
	Departments []DepartmentType `json:"departments,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostDepartmentsRequest instantiates a new PostDepartmentsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostDepartmentsRequest() *PostDepartmentsRequest {
	this := PostDepartmentsRequest{}
	return &this
}

// NewPostDepartmentsRequestWithDefaults instantiates a new PostDepartmentsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostDepartmentsRequestWithDefaults() *PostDepartmentsRequest {
	this := PostDepartmentsRequest{}
	return &this
}

// GetDepartments returns the Departments field value if set, zero value otherwise.
func (o *PostDepartmentsRequest) GetDepartments() []DepartmentType {
	if o == nil || IsNil(o.Departments) {
		var ret []DepartmentType
		return ret
	}
	return o.Departments
}

// GetDepartmentsOk returns a tuple with the Departments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostDepartmentsRequest) GetDepartmentsOk() ([]DepartmentType, bool) {
	if o == nil || IsNil(o.Departments) {
		return nil, false
	}
	return o.Departments, true
}

// HasDepartments returns a boolean if a field has been set.
func (o *PostDepartmentsRequest) HasDepartments() bool {
	if o != nil && !IsNil(o.Departments) {
		return true
	}

	return false
}

// SetDepartments gets a reference to the given []DepartmentType and assigns it to the Departments field.
func (o *PostDepartmentsRequest) SetDepartments(v []DepartmentType) {
	o.Departments = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostDepartmentsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostDepartmentsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostDepartmentsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostDepartmentsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostDepartmentsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostDepartmentsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostDepartmentsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostDepartmentsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostDepartmentsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostDepartmentsRequest) ToMap() (map[string]interface{}, error) {
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

type NullablePostDepartmentsRequest struct {
	value *PostDepartmentsRequest
	isSet bool
}

func (v NullablePostDepartmentsRequest) Get() *PostDepartmentsRequest {
	return v.value
}

func (v *NullablePostDepartmentsRequest) Set(val *PostDepartmentsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostDepartmentsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostDepartmentsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostDepartmentsRequest(val *PostDepartmentsRequest) *NullablePostDepartmentsRequest {
	return &NullablePostDepartmentsRequest{value: val, isSet: true}
}

func (v NullablePostDepartmentsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostDepartmentsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


