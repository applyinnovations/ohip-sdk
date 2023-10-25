/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the MergeTaskSheetRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MergeTaskSheetRequest{}

// MergeTaskSheetRequest struct for MergeTaskSheetRequest
type MergeTaskSheetRequest struct {
	Criteria *MergeTaskSheetCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMergeTaskSheetRequest instantiates a new MergeTaskSheetRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMergeTaskSheetRequest() *MergeTaskSheetRequest {
	this := MergeTaskSheetRequest{}
	return &this
}

// NewMergeTaskSheetRequestWithDefaults instantiates a new MergeTaskSheetRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMergeTaskSheetRequestWithDefaults() *MergeTaskSheetRequest {
	this := MergeTaskSheetRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *MergeTaskSheetRequest) GetCriteria() MergeTaskSheetCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret MergeTaskSheetCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MergeTaskSheetRequest) GetCriteriaOk() (*MergeTaskSheetCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *MergeTaskSheetRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given MergeTaskSheetCriteriaType and assigns it to the Criteria field.
func (o *MergeTaskSheetRequest) SetCriteria(v MergeTaskSheetCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MergeTaskSheetRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MergeTaskSheetRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MergeTaskSheetRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MergeTaskSheetRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MergeTaskSheetRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MergeTaskSheetRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MergeTaskSheetRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MergeTaskSheetRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MergeTaskSheetRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MergeTaskSheetRequest) ToMap() (map[string]interface{}, error) {
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

type NullableMergeTaskSheetRequest struct {
	value *MergeTaskSheetRequest
	isSet bool
}

func (v NullableMergeTaskSheetRequest) Get() *MergeTaskSheetRequest {
	return v.value
}

func (v *NullableMergeTaskSheetRequest) Set(val *MergeTaskSheetRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableMergeTaskSheetRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableMergeTaskSheetRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMergeTaskSheetRequest(val *MergeTaskSheetRequest) *NullableMergeTaskSheetRequest {
	return &NullableMergeTaskSheetRequest{value: val, isSet: true}
}

func (v NullableMergeTaskSheetRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMergeTaskSheetRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


