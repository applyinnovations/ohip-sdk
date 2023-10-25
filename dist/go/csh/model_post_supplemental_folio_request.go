/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PostSupplementalFolioRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostSupplementalFolioRequest{}

// PostSupplementalFolioRequest struct for PostSupplementalFolioRequest
type PostSupplementalFolioRequest struct {
	Criteria *SupplementalFolioCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostSupplementalFolioRequest instantiates a new PostSupplementalFolioRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostSupplementalFolioRequest() *PostSupplementalFolioRequest {
	this := PostSupplementalFolioRequest{}
	return &this
}

// NewPostSupplementalFolioRequestWithDefaults instantiates a new PostSupplementalFolioRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostSupplementalFolioRequestWithDefaults() *PostSupplementalFolioRequest {
	this := PostSupplementalFolioRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *PostSupplementalFolioRequest) GetCriteria() SupplementalFolioCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret SupplementalFolioCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSupplementalFolioRequest) GetCriteriaOk() (*SupplementalFolioCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *PostSupplementalFolioRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given SupplementalFolioCriteriaType and assigns it to the Criteria field.
func (o *PostSupplementalFolioRequest) SetCriteria(v SupplementalFolioCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostSupplementalFolioRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSupplementalFolioRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostSupplementalFolioRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostSupplementalFolioRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostSupplementalFolioRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSupplementalFolioRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostSupplementalFolioRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostSupplementalFolioRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostSupplementalFolioRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostSupplementalFolioRequest) ToMap() (map[string]interface{}, error) {
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

type NullablePostSupplementalFolioRequest struct {
	value *PostSupplementalFolioRequest
	isSet bool
}

func (v NullablePostSupplementalFolioRequest) Get() *PostSupplementalFolioRequest {
	return v.value
}

func (v *NullablePostSupplementalFolioRequest) Set(val *PostSupplementalFolioRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostSupplementalFolioRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostSupplementalFolioRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostSupplementalFolioRequest(val *PostSupplementalFolioRequest) *NullablePostSupplementalFolioRequest {
	return &NullablePostSupplementalFolioRequest{value: val, isSet: true}
}

func (v NullablePostSupplementalFolioRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostSupplementalFolioRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


