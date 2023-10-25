/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the DailyPlanCodes type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DailyPlanCodes{}

// DailyPlanCodes struct for DailyPlanCodes
type DailyPlanCodes struct {
	// Details for daily plan code along with associated transaction codes.
	DailyPlanCodes []DailyPlanCodeType `json:"dailyPlanCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDailyPlanCodes instantiates a new DailyPlanCodes object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDailyPlanCodes() *DailyPlanCodes {
	this := DailyPlanCodes{}
	return &this
}

// NewDailyPlanCodesWithDefaults instantiates a new DailyPlanCodes object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDailyPlanCodesWithDefaults() *DailyPlanCodes {
	this := DailyPlanCodes{}
	return &this
}

// GetDailyPlanCodes returns the DailyPlanCodes field value if set, zero value otherwise.
func (o *DailyPlanCodes) GetDailyPlanCodes() []DailyPlanCodeType {
	if o == nil || IsNil(o.DailyPlanCodes) {
		var ret []DailyPlanCodeType
		return ret
	}
	return o.DailyPlanCodes
}

// GetDailyPlanCodesOk returns a tuple with the DailyPlanCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPlanCodes) GetDailyPlanCodesOk() ([]DailyPlanCodeType, bool) {
	if o == nil || IsNil(o.DailyPlanCodes) {
		return nil, false
	}
	return o.DailyPlanCodes, true
}

// HasDailyPlanCodes returns a boolean if a field has been set.
func (o *DailyPlanCodes) HasDailyPlanCodes() bool {
	if o != nil && !IsNil(o.DailyPlanCodes) {
		return true
	}

	return false
}

// SetDailyPlanCodes gets a reference to the given []DailyPlanCodeType and assigns it to the DailyPlanCodes field.
func (o *DailyPlanCodes) SetDailyPlanCodes(v []DailyPlanCodeType) {
	o.DailyPlanCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DailyPlanCodes) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPlanCodes) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DailyPlanCodes) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DailyPlanCodes) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DailyPlanCodes) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPlanCodes) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DailyPlanCodes) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DailyPlanCodes) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DailyPlanCodes) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DailyPlanCodes) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DailyPlanCodes) {
		toSerialize["dailyPlanCodes"] = o.DailyPlanCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDailyPlanCodes struct {
	value *DailyPlanCodes
	isSet bool
}

func (v NullableDailyPlanCodes) Get() *DailyPlanCodes {
	return v.value
}

func (v *NullableDailyPlanCodes) Set(val *DailyPlanCodes) {
	v.value = val
	v.isSet = true
}

func (v NullableDailyPlanCodes) IsSet() bool {
	return v.isSet
}

func (v *NullableDailyPlanCodes) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDailyPlanCodes(val *DailyPlanCodes) *NullableDailyPlanCodes {
	return &NullableDailyPlanCodes{value: val, isSet: true}
}

func (v NullableDailyPlanCodes) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDailyPlanCodes) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


