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

// checks if the AccountFixedCharge type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AccountFixedCharge{}

// AccountFixedCharge Request to create a Fixed Charge for an Account.
type AccountFixedCharge struct {
	FixedChargeInfo *ARAccountFixedChargeCriteriaType `json:"fixedChargeInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAccountFixedCharge instantiates a new AccountFixedCharge object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAccountFixedCharge() *AccountFixedCharge {
	this := AccountFixedCharge{}
	return &this
}

// NewAccountFixedChargeWithDefaults instantiates a new AccountFixedCharge object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAccountFixedChargeWithDefaults() *AccountFixedCharge {
	this := AccountFixedCharge{}
	return &this
}

// GetFixedChargeInfo returns the FixedChargeInfo field value if set, zero value otherwise.
func (o *AccountFixedCharge) GetFixedChargeInfo() ARAccountFixedChargeCriteriaType {
	if o == nil || IsNil(o.FixedChargeInfo) {
		var ret ARAccountFixedChargeCriteriaType
		return ret
	}
	return *o.FixedChargeInfo
}

// GetFixedChargeInfoOk returns a tuple with the FixedChargeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountFixedCharge) GetFixedChargeInfoOk() (*ARAccountFixedChargeCriteriaType, bool) {
	if o == nil || IsNil(o.FixedChargeInfo) {
		return nil, false
	}
	return o.FixedChargeInfo, true
}

// HasFixedChargeInfo returns a boolean if a field has been set.
func (o *AccountFixedCharge) HasFixedChargeInfo() bool {
	if o != nil && !IsNil(o.FixedChargeInfo) {
		return true
	}

	return false
}

// SetFixedChargeInfo gets a reference to the given ARAccountFixedChargeCriteriaType and assigns it to the FixedChargeInfo field.
func (o *AccountFixedCharge) SetFixedChargeInfo(v ARAccountFixedChargeCriteriaType) {
	o.FixedChargeInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AccountFixedCharge) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountFixedCharge) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AccountFixedCharge) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AccountFixedCharge) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AccountFixedCharge) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountFixedCharge) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AccountFixedCharge) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AccountFixedCharge) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AccountFixedCharge) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AccountFixedCharge) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FixedChargeInfo) {
		toSerialize["fixedChargeInfo"] = o.FixedChargeInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAccountFixedCharge struct {
	value *AccountFixedCharge
	isSet bool
}

func (v NullableAccountFixedCharge) Get() *AccountFixedCharge {
	return v.value
}

func (v *NullableAccountFixedCharge) Set(val *AccountFixedCharge) {
	v.value = val
	v.isSet = true
}

func (v NullableAccountFixedCharge) IsSet() bool {
	return v.isSet
}

func (v *NullableAccountFixedCharge) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAccountFixedCharge(val *AccountFixedCharge) *NullableAccountFixedCharge {
	return &NullableAccountFixedCharge{value: val, isSet: true}
}

func (v NullableAccountFixedCharge) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAccountFixedCharge) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


