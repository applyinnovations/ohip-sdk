/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the PackagePostingRulesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackagePostingRulesType{}

// PackagePostingRulesType struct for PackagePostingRulesType
type PackagePostingRulesType struct {
	// The alternate transaction code that can be consumed by the guest in place of the transaction code.
	AlternateCodesList []PackageTransactionCodeType `json:"alternateCodesList,omitempty"`
	LossCode *PackageTransactionCodeType `json:"lossCode,omitempty"`
	OverageCode *PackageTransactionCodeType `json:"overageCode,omitempty"`
	ProfitCode *PackageTransactionCodeType `json:"profitCode,omitempty"`
	TransactionCode *PackageTransactionCodeType `json:"transactionCode,omitempty"`
}

// NewPackagePostingRulesType instantiates a new PackagePostingRulesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackagePostingRulesType() *PackagePostingRulesType {
	this := PackagePostingRulesType{}
	return &this
}

// NewPackagePostingRulesTypeWithDefaults instantiates a new PackagePostingRulesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackagePostingRulesTypeWithDefaults() *PackagePostingRulesType {
	this := PackagePostingRulesType{}
	return &this
}

// GetAlternateCodesList returns the AlternateCodesList field value if set, zero value otherwise.
func (o *PackagePostingRulesType) GetAlternateCodesList() []PackageTransactionCodeType {
	if o == nil || IsNil(o.AlternateCodesList) {
		var ret []PackageTransactionCodeType
		return ret
	}
	return o.AlternateCodesList
}

// GetAlternateCodesListOk returns a tuple with the AlternateCodesList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRulesType) GetAlternateCodesListOk() ([]PackageTransactionCodeType, bool) {
	if o == nil || IsNil(o.AlternateCodesList) {
		return nil, false
	}
	return o.AlternateCodesList, true
}

// HasAlternateCodesList returns a boolean if a field has been set.
func (o *PackagePostingRulesType) HasAlternateCodesList() bool {
	if o != nil && !IsNil(o.AlternateCodesList) {
		return true
	}

	return false
}

// SetAlternateCodesList gets a reference to the given []PackageTransactionCodeType and assigns it to the AlternateCodesList field.
func (o *PackagePostingRulesType) SetAlternateCodesList(v []PackageTransactionCodeType) {
	o.AlternateCodesList = v
}

// GetLossCode returns the LossCode field value if set, zero value otherwise.
func (o *PackagePostingRulesType) GetLossCode() PackageTransactionCodeType {
	if o == nil || IsNil(o.LossCode) {
		var ret PackageTransactionCodeType
		return ret
	}
	return *o.LossCode
}

// GetLossCodeOk returns a tuple with the LossCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRulesType) GetLossCodeOk() (*PackageTransactionCodeType, bool) {
	if o == nil || IsNil(o.LossCode) {
		return nil, false
	}
	return o.LossCode, true
}

// HasLossCode returns a boolean if a field has been set.
func (o *PackagePostingRulesType) HasLossCode() bool {
	if o != nil && !IsNil(o.LossCode) {
		return true
	}

	return false
}

// SetLossCode gets a reference to the given PackageTransactionCodeType and assigns it to the LossCode field.
func (o *PackagePostingRulesType) SetLossCode(v PackageTransactionCodeType) {
	o.LossCode = &v
}

// GetOverageCode returns the OverageCode field value if set, zero value otherwise.
func (o *PackagePostingRulesType) GetOverageCode() PackageTransactionCodeType {
	if o == nil || IsNil(o.OverageCode) {
		var ret PackageTransactionCodeType
		return ret
	}
	return *o.OverageCode
}

// GetOverageCodeOk returns a tuple with the OverageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRulesType) GetOverageCodeOk() (*PackageTransactionCodeType, bool) {
	if o == nil || IsNil(o.OverageCode) {
		return nil, false
	}
	return o.OverageCode, true
}

// HasOverageCode returns a boolean if a field has been set.
func (o *PackagePostingRulesType) HasOverageCode() bool {
	if o != nil && !IsNil(o.OverageCode) {
		return true
	}

	return false
}

// SetOverageCode gets a reference to the given PackageTransactionCodeType and assigns it to the OverageCode field.
func (o *PackagePostingRulesType) SetOverageCode(v PackageTransactionCodeType) {
	o.OverageCode = &v
}

// GetProfitCode returns the ProfitCode field value if set, zero value otherwise.
func (o *PackagePostingRulesType) GetProfitCode() PackageTransactionCodeType {
	if o == nil || IsNil(o.ProfitCode) {
		var ret PackageTransactionCodeType
		return ret
	}
	return *o.ProfitCode
}

// GetProfitCodeOk returns a tuple with the ProfitCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRulesType) GetProfitCodeOk() (*PackageTransactionCodeType, bool) {
	if o == nil || IsNil(o.ProfitCode) {
		return nil, false
	}
	return o.ProfitCode, true
}

// HasProfitCode returns a boolean if a field has been set.
func (o *PackagePostingRulesType) HasProfitCode() bool {
	if o != nil && !IsNil(o.ProfitCode) {
		return true
	}

	return false
}

// SetProfitCode gets a reference to the given PackageTransactionCodeType and assigns it to the ProfitCode field.
func (o *PackagePostingRulesType) SetProfitCode(v PackageTransactionCodeType) {
	o.ProfitCode = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *PackagePostingRulesType) GetTransactionCode() PackageTransactionCodeType {
	if o == nil || IsNil(o.TransactionCode) {
		var ret PackageTransactionCodeType
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRulesType) GetTransactionCodeOk() (*PackageTransactionCodeType, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *PackagePostingRulesType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given PackageTransactionCodeType and assigns it to the TransactionCode field.
func (o *PackagePostingRulesType) SetTransactionCode(v PackageTransactionCodeType) {
	o.TransactionCode = &v
}

func (o PackagePostingRulesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackagePostingRulesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateCodesList) {
		toSerialize["alternateCodesList"] = o.AlternateCodesList
	}
	if !IsNil(o.LossCode) {
		toSerialize["lossCode"] = o.LossCode
	}
	if !IsNil(o.OverageCode) {
		toSerialize["overageCode"] = o.OverageCode
	}
	if !IsNil(o.ProfitCode) {
		toSerialize["profitCode"] = o.ProfitCode
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullablePackagePostingRulesType struct {
	value *PackagePostingRulesType
	isSet bool
}

func (v NullablePackagePostingRulesType) Get() *PackagePostingRulesType {
	return v.value
}

func (v *NullablePackagePostingRulesType) Set(val *PackagePostingRulesType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackagePostingRulesType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackagePostingRulesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackagePostingRulesType(val *PackagePostingRulesType) *NullablePackagePostingRulesType {
	return &NullablePackagePostingRulesType{value: val, isSet: true}
}

func (v NullablePackagePostingRulesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackagePostingRulesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


