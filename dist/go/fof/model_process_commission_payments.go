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

// checks if the ProcessCommissionPayments type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProcessCommissionPayments{}

// ProcessCommissionPayments Request type for processing commission payments.
type ProcessCommissionPayments struct {
	Criteria *ProcessCommissionPaymentsCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewProcessCommissionPayments instantiates a new ProcessCommissionPayments object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProcessCommissionPayments() *ProcessCommissionPayments {
	this := ProcessCommissionPayments{}
	return &this
}

// NewProcessCommissionPaymentsWithDefaults instantiates a new ProcessCommissionPayments object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProcessCommissionPaymentsWithDefaults() *ProcessCommissionPayments {
	this := ProcessCommissionPayments{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *ProcessCommissionPayments) GetCriteria() ProcessCommissionPaymentsCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret ProcessCommissionPaymentsCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPayments) GetCriteriaOk() (*ProcessCommissionPaymentsCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *ProcessCommissionPayments) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given ProcessCommissionPaymentsCriteriaType and assigns it to the Criteria field.
func (o *ProcessCommissionPayments) SetCriteria(v ProcessCommissionPaymentsCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ProcessCommissionPayments) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPayments) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ProcessCommissionPayments) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ProcessCommissionPayments) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ProcessCommissionPayments) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPayments) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ProcessCommissionPayments) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ProcessCommissionPayments) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ProcessCommissionPayments) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProcessCommissionPayments) ToMap() (map[string]interface{}, error) {
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

type NullableProcessCommissionPayments struct {
	value *ProcessCommissionPayments
	isSet bool
}

func (v NullableProcessCommissionPayments) Get() *ProcessCommissionPayments {
	return v.value
}

func (v *NullableProcessCommissionPayments) Set(val *ProcessCommissionPayments) {
	v.value = val
	v.isSet = true
}

func (v NullableProcessCommissionPayments) IsSet() bool {
	return v.isSet
}

func (v *NullableProcessCommissionPayments) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProcessCommissionPayments(val *ProcessCommissionPayments) *NullableProcessCommissionPayments {
	return &NullableProcessCommissionPayments{value: val, isSet: true}
}

func (v NullableProcessCommissionPayments) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProcessCommissionPayments) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


