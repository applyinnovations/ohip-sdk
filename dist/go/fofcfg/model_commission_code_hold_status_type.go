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

// checks if the CommissionCodeHoldStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionCodeHoldStatusType{}

// CommissionCodeHoldStatusType Commission Code Hold Status type
type CommissionCodeHoldStatusType struct {
	// Hold accoutn receivables status for commission code.
	HoldAccountReceivables *bool `json:"holdAccountReceivables,omitempty"`
	// Hold always status for commission code.
	HoldAlways *bool `json:"holdAlways,omitempty"`
	// Hold prepaid status for commission code.
	HoldPrepaid *bool `json:"holdPrepaid,omitempty"`
}

// NewCommissionCodeHoldStatusType instantiates a new CommissionCodeHoldStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionCodeHoldStatusType() *CommissionCodeHoldStatusType {
	this := CommissionCodeHoldStatusType{}
	return &this
}

// NewCommissionCodeHoldStatusTypeWithDefaults instantiates a new CommissionCodeHoldStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionCodeHoldStatusTypeWithDefaults() *CommissionCodeHoldStatusType {
	this := CommissionCodeHoldStatusType{}
	return &this
}

// GetHoldAccountReceivables returns the HoldAccountReceivables field value if set, zero value otherwise.
func (o *CommissionCodeHoldStatusType) GetHoldAccountReceivables() bool {
	if o == nil || IsNil(o.HoldAccountReceivables) {
		var ret bool
		return ret
	}
	return *o.HoldAccountReceivables
}

// GetHoldAccountReceivablesOk returns a tuple with the HoldAccountReceivables field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionCodeHoldStatusType) GetHoldAccountReceivablesOk() (*bool, bool) {
	if o == nil || IsNil(o.HoldAccountReceivables) {
		return nil, false
	}
	return o.HoldAccountReceivables, true
}

// HasHoldAccountReceivables returns a boolean if a field has been set.
func (o *CommissionCodeHoldStatusType) HasHoldAccountReceivables() bool {
	if o != nil && !IsNil(o.HoldAccountReceivables) {
		return true
	}

	return false
}

// SetHoldAccountReceivables gets a reference to the given bool and assigns it to the HoldAccountReceivables field.
func (o *CommissionCodeHoldStatusType) SetHoldAccountReceivables(v bool) {
	o.HoldAccountReceivables = &v
}

// GetHoldAlways returns the HoldAlways field value if set, zero value otherwise.
func (o *CommissionCodeHoldStatusType) GetHoldAlways() bool {
	if o == nil || IsNil(o.HoldAlways) {
		var ret bool
		return ret
	}
	return *o.HoldAlways
}

// GetHoldAlwaysOk returns a tuple with the HoldAlways field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionCodeHoldStatusType) GetHoldAlwaysOk() (*bool, bool) {
	if o == nil || IsNil(o.HoldAlways) {
		return nil, false
	}
	return o.HoldAlways, true
}

// HasHoldAlways returns a boolean if a field has been set.
func (o *CommissionCodeHoldStatusType) HasHoldAlways() bool {
	if o != nil && !IsNil(o.HoldAlways) {
		return true
	}

	return false
}

// SetHoldAlways gets a reference to the given bool and assigns it to the HoldAlways field.
func (o *CommissionCodeHoldStatusType) SetHoldAlways(v bool) {
	o.HoldAlways = &v
}

// GetHoldPrepaid returns the HoldPrepaid field value if set, zero value otherwise.
func (o *CommissionCodeHoldStatusType) GetHoldPrepaid() bool {
	if o == nil || IsNil(o.HoldPrepaid) {
		var ret bool
		return ret
	}
	return *o.HoldPrepaid
}

// GetHoldPrepaidOk returns a tuple with the HoldPrepaid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionCodeHoldStatusType) GetHoldPrepaidOk() (*bool, bool) {
	if o == nil || IsNil(o.HoldPrepaid) {
		return nil, false
	}
	return o.HoldPrepaid, true
}

// HasHoldPrepaid returns a boolean if a field has been set.
func (o *CommissionCodeHoldStatusType) HasHoldPrepaid() bool {
	if o != nil && !IsNil(o.HoldPrepaid) {
		return true
	}

	return false
}

// SetHoldPrepaid gets a reference to the given bool and assigns it to the HoldPrepaid field.
func (o *CommissionCodeHoldStatusType) SetHoldPrepaid(v bool) {
	o.HoldPrepaid = &v
}

func (o CommissionCodeHoldStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionCodeHoldStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HoldAccountReceivables) {
		toSerialize["holdAccountReceivables"] = o.HoldAccountReceivables
	}
	if !IsNil(o.HoldAlways) {
		toSerialize["holdAlways"] = o.HoldAlways
	}
	if !IsNil(o.HoldPrepaid) {
		toSerialize["holdPrepaid"] = o.HoldPrepaid
	}
	return toSerialize, nil
}

type NullableCommissionCodeHoldStatusType struct {
	value *CommissionCodeHoldStatusType
	isSet bool
}

func (v NullableCommissionCodeHoldStatusType) Get() *CommissionCodeHoldStatusType {
	return v.value
}

func (v *NullableCommissionCodeHoldStatusType) Set(val *CommissionCodeHoldStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionCodeHoldStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionCodeHoldStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionCodeHoldStatusType(val *CommissionCodeHoldStatusType) *NullableCommissionCodeHoldStatusType {
	return &NullableCommissionCodeHoldStatusType{value: val, isSet: true}
}

func (v NullableCommissionCodeHoldStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionCodeHoldStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

