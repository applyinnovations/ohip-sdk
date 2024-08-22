/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the AREndOfMonthCycleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AREndOfMonthCycleType{}

// AREndOfMonthCycleType Reminder letters will be generated at the end of each month if user specifies this element
type AREndOfMonthCycleType struct {
	// Reminder letter file name for the reminder letter to be generated at the end of month
	ReportName *string `json:"reportName,omitempty"`
	// Description associated with reminder letter.
	ReportNameDesc *string `json:"reportNameDesc,omitempty"`
}

// NewAREndOfMonthCycleType instantiates a new AREndOfMonthCycleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAREndOfMonthCycleType() *AREndOfMonthCycleType {
	this := AREndOfMonthCycleType{}
	return &this
}

// NewAREndOfMonthCycleTypeWithDefaults instantiates a new AREndOfMonthCycleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAREndOfMonthCycleTypeWithDefaults() *AREndOfMonthCycleType {
	this := AREndOfMonthCycleType{}
	return &this
}

// GetReportName returns the ReportName field value if set, zero value otherwise.
func (o *AREndOfMonthCycleType) GetReportName() string {
	if o == nil || IsNil(o.ReportName) {
		var ret string
		return ret
	}
	return *o.ReportName
}

// GetReportNameOk returns a tuple with the ReportName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AREndOfMonthCycleType) GetReportNameOk() (*string, bool) {
	if o == nil || IsNil(o.ReportName) {
		return nil, false
	}
	return o.ReportName, true
}

// HasReportName returns a boolean if a field has been set.
func (o *AREndOfMonthCycleType) HasReportName() bool {
	if o != nil && !IsNil(o.ReportName) {
		return true
	}

	return false
}

// SetReportName gets a reference to the given string and assigns it to the ReportName field.
func (o *AREndOfMonthCycleType) SetReportName(v string) {
	o.ReportName = &v
}

// GetReportNameDesc returns the ReportNameDesc field value if set, zero value otherwise.
func (o *AREndOfMonthCycleType) GetReportNameDesc() string {
	if o == nil || IsNil(o.ReportNameDesc) {
		var ret string
		return ret
	}
	return *o.ReportNameDesc
}

// GetReportNameDescOk returns a tuple with the ReportNameDesc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AREndOfMonthCycleType) GetReportNameDescOk() (*string, bool) {
	if o == nil || IsNil(o.ReportNameDesc) {
		return nil, false
	}
	return o.ReportNameDesc, true
}

// HasReportNameDesc returns a boolean if a field has been set.
func (o *AREndOfMonthCycleType) HasReportNameDesc() bool {
	if o != nil && !IsNil(o.ReportNameDesc) {
		return true
	}

	return false
}

// SetReportNameDesc gets a reference to the given string and assigns it to the ReportNameDesc field.
func (o *AREndOfMonthCycleType) SetReportNameDesc(v string) {
	o.ReportNameDesc = &v
}

func (o AREndOfMonthCycleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AREndOfMonthCycleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ReportName) {
		toSerialize["reportName"] = o.ReportName
	}
	if !IsNil(o.ReportNameDesc) {
		toSerialize["reportNameDesc"] = o.ReportNameDesc
	}
	return toSerialize, nil
}

type NullableAREndOfMonthCycleType struct {
	value *AREndOfMonthCycleType
	isSet bool
}

func (v NullableAREndOfMonthCycleType) Get() *AREndOfMonthCycleType {
	return v.value
}

func (v *NullableAREndOfMonthCycleType) Set(val *AREndOfMonthCycleType) {
	v.value = val
	v.isSet = true
}

func (v NullableAREndOfMonthCycleType) IsSet() bool {
	return v.isSet
}

func (v *NullableAREndOfMonthCycleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAREndOfMonthCycleType(val *AREndOfMonthCycleType) *NullableAREndOfMonthCycleType {
	return &NullableAREndOfMonthCycleType{value: val, isSet: true}
}

func (v NullableAREndOfMonthCycleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAREndOfMonthCycleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


