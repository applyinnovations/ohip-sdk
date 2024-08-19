/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the AiraLastRunStatusInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AiraLastRunStatusInfo{}

// AiraLastRunStatusInfo Response of last execution status for AI Room Assignment
type AiraLastRunStatusInfo struct {
	// Actual run status of an AI room assignment
	ActionValue *string `json:"actionValue,omitempty"`
	// When the AI Room Assignment starts execution
	InsertDate *string `json:"insertDate,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Date time of updated status of an executions
	UpdateDate *string `json:"updateDate,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAiraLastRunStatusInfo instantiates a new AiraLastRunStatusInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAiraLastRunStatusInfo() *AiraLastRunStatusInfo {
	this := AiraLastRunStatusInfo{}
	return &this
}

// NewAiraLastRunStatusInfoWithDefaults instantiates a new AiraLastRunStatusInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAiraLastRunStatusInfoWithDefaults() *AiraLastRunStatusInfo {
	this := AiraLastRunStatusInfo{}
	return &this
}

// GetActionValue returns the ActionValue field value if set, zero value otherwise.
func (o *AiraLastRunStatusInfo) GetActionValue() string {
	if o == nil || IsNil(o.ActionValue) {
		var ret string
		return ret
	}
	return *o.ActionValue
}

// GetActionValueOk returns a tuple with the ActionValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AiraLastRunStatusInfo) GetActionValueOk() (*string, bool) {
	if o == nil || IsNil(o.ActionValue) {
		return nil, false
	}
	return o.ActionValue, true
}

// HasActionValue returns a boolean if a field has been set.
func (o *AiraLastRunStatusInfo) HasActionValue() bool {
	if o != nil && !IsNil(o.ActionValue) {
		return true
	}

	return false
}

// SetActionValue gets a reference to the given string and assigns it to the ActionValue field.
func (o *AiraLastRunStatusInfo) SetActionValue(v string) {
	o.ActionValue = &v
}

// GetInsertDate returns the InsertDate field value if set, zero value otherwise.
func (o *AiraLastRunStatusInfo) GetInsertDate() string {
	if o == nil || IsNil(o.InsertDate) {
		var ret string
		return ret
	}
	return *o.InsertDate
}

// GetInsertDateOk returns a tuple with the InsertDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AiraLastRunStatusInfo) GetInsertDateOk() (*string, bool) {
	if o == nil || IsNil(o.InsertDate) {
		return nil, false
	}
	return o.InsertDate, true
}

// HasInsertDate returns a boolean if a field has been set.
func (o *AiraLastRunStatusInfo) HasInsertDate() bool {
	if o != nil && !IsNil(o.InsertDate) {
		return true
	}

	return false
}

// SetInsertDate gets a reference to the given string and assigns it to the InsertDate field.
func (o *AiraLastRunStatusInfo) SetInsertDate(v string) {
	o.InsertDate = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AiraLastRunStatusInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AiraLastRunStatusInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AiraLastRunStatusInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AiraLastRunStatusInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetUpdateDate returns the UpdateDate field value if set, zero value otherwise.
func (o *AiraLastRunStatusInfo) GetUpdateDate() string {
	if o == nil || IsNil(o.UpdateDate) {
		var ret string
		return ret
	}
	return *o.UpdateDate
}

// GetUpdateDateOk returns a tuple with the UpdateDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AiraLastRunStatusInfo) GetUpdateDateOk() (*string, bool) {
	if o == nil || IsNil(o.UpdateDate) {
		return nil, false
	}
	return o.UpdateDate, true
}

// HasUpdateDate returns a boolean if a field has been set.
func (o *AiraLastRunStatusInfo) HasUpdateDate() bool {
	if o != nil && !IsNil(o.UpdateDate) {
		return true
	}

	return false
}

// SetUpdateDate gets a reference to the given string and assigns it to the UpdateDate field.
func (o *AiraLastRunStatusInfo) SetUpdateDate(v string) {
	o.UpdateDate = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AiraLastRunStatusInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AiraLastRunStatusInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AiraLastRunStatusInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AiraLastRunStatusInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AiraLastRunStatusInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AiraLastRunStatusInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionValue) {
		toSerialize["actionValue"] = o.ActionValue
	}
	if !IsNil(o.InsertDate) {
		toSerialize["insertDate"] = o.InsertDate
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.UpdateDate) {
		toSerialize["updateDate"] = o.UpdateDate
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAiraLastRunStatusInfo struct {
	value *AiraLastRunStatusInfo
	isSet bool
}

func (v NullableAiraLastRunStatusInfo) Get() *AiraLastRunStatusInfo {
	return v.value
}

func (v *NullableAiraLastRunStatusInfo) Set(val *AiraLastRunStatusInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableAiraLastRunStatusInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableAiraLastRunStatusInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAiraLastRunStatusInfo(val *AiraLastRunStatusInfo) *NullableAiraLastRunStatusInfo {
	return &NullableAiraLastRunStatusInfo{value: val, isSet: true}
}

func (v NullableAiraLastRunStatusInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAiraLastRunStatusInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


