/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the PostAccountRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostAccountRequest{}

// PostAccountRequest struct for PostAccountRequest
type PostAccountRequest struct {
	Criteria *ARAccountType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostAccountRequest instantiates a new PostAccountRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostAccountRequest() *PostAccountRequest {
	this := PostAccountRequest{}
	return &this
}

// NewPostAccountRequestWithDefaults instantiates a new PostAccountRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostAccountRequestWithDefaults() *PostAccountRequest {
	this := PostAccountRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *PostAccountRequest) GetCriteria() ARAccountType {
	if o == nil || IsNil(o.Criteria) {
		var ret ARAccountType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostAccountRequest) GetCriteriaOk() (*ARAccountType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *PostAccountRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given ARAccountType and assigns it to the Criteria field.
func (o *PostAccountRequest) SetCriteria(v ARAccountType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostAccountRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostAccountRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostAccountRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostAccountRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostAccountRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostAccountRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostAccountRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostAccountRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostAccountRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostAccountRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostAccountRequest struct {
	value *PostAccountRequest
	isSet bool
}

func (v NullablePostAccountRequest) Get() *PostAccountRequest {
	return v.value
}

func (v *NullablePostAccountRequest) Set(val *PostAccountRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostAccountRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostAccountRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostAccountRequest(val *PostAccountRequest) *NullablePostAccountRequest {
	return &NullablePostAccountRequest{value: val, isSet: true}
}

func (v NullablePostAccountRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostAccountRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


