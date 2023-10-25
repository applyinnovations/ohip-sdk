/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the DepositPolicyCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DepositPolicyCriteria{}

// DepositPolicyCriteria Request object that holds the details of hotel level Deposit Policy to be created.
type DepositPolicyCriteria struct {
	DepositPolicy *HotelConfigDepositPoliciesType `json:"depositPolicy,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDepositPolicyCriteria instantiates a new DepositPolicyCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDepositPolicyCriteria() *DepositPolicyCriteria {
	this := DepositPolicyCriteria{}
	return &this
}

// NewDepositPolicyCriteriaWithDefaults instantiates a new DepositPolicyCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDepositPolicyCriteriaWithDefaults() *DepositPolicyCriteria {
	this := DepositPolicyCriteria{}
	return &this
}

// GetDepositPolicy returns the DepositPolicy field value if set, zero value otherwise.
func (o *DepositPolicyCriteria) GetDepositPolicy() HotelConfigDepositPoliciesType {
	if o == nil || IsNil(o.DepositPolicy) {
		var ret HotelConfigDepositPoliciesType
		return ret
	}
	return *o.DepositPolicy
}

// GetDepositPolicyOk returns a tuple with the DepositPolicy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyCriteria) GetDepositPolicyOk() (*HotelConfigDepositPoliciesType, bool) {
	if o == nil || IsNil(o.DepositPolicy) {
		return nil, false
	}
	return o.DepositPolicy, true
}

// HasDepositPolicy returns a boolean if a field has been set.
func (o *DepositPolicyCriteria) HasDepositPolicy() bool {
	if o != nil && !IsNil(o.DepositPolicy) {
		return true
	}

	return false
}

// SetDepositPolicy gets a reference to the given HotelConfigDepositPoliciesType and assigns it to the DepositPolicy field.
func (o *DepositPolicyCriteria) SetDepositPolicy(v HotelConfigDepositPoliciesType) {
	o.DepositPolicy = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DepositPolicyCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DepositPolicyCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DepositPolicyCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DepositPolicyCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DepositPolicyCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DepositPolicyCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DepositPolicyCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DepositPolicyCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DepositPolicy) {
		toSerialize["depositPolicy"] = o.DepositPolicy
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDepositPolicyCriteria struct {
	value *DepositPolicyCriteria
	isSet bool
}

func (v NullableDepositPolicyCriteria) Get() *DepositPolicyCriteria {
	return v.value
}

func (v *NullableDepositPolicyCriteria) Set(val *DepositPolicyCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositPolicyCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositPolicyCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositPolicyCriteria(val *DepositPolicyCriteria) *NullableDepositPolicyCriteria {
	return &NullableDepositPolicyCriteria{value: val, isSet: true}
}

func (v NullableDepositPolicyCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositPolicyCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


