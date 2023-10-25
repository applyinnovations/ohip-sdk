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

// checks if the TransactionGroup type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionGroup{}

// TransactionGroup struct for TransactionGroup
type TransactionGroup struct {
	Links []InstanceLink `json:"links,omitempty"`
	TransactionGroup *HotelTransactionGroupType `json:"transactionGroup,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTransactionGroup instantiates a new TransactionGroup object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionGroup() *TransactionGroup {
	this := TransactionGroup{}
	return &this
}

// NewTransactionGroupWithDefaults instantiates a new TransactionGroup object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionGroupWithDefaults() *TransactionGroup {
	this := TransactionGroup{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TransactionGroup) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionGroup) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TransactionGroup) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TransactionGroup) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTransactionGroup returns the TransactionGroup field value if set, zero value otherwise.
func (o *TransactionGroup) GetTransactionGroup() HotelTransactionGroupType {
	if o == nil || IsNil(o.TransactionGroup) {
		var ret HotelTransactionGroupType
		return ret
	}
	return *o.TransactionGroup
}

// GetTransactionGroupOk returns a tuple with the TransactionGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionGroup) GetTransactionGroupOk() (*HotelTransactionGroupType, bool) {
	if o == nil || IsNil(o.TransactionGroup) {
		return nil, false
	}
	return o.TransactionGroup, true
}

// HasTransactionGroup returns a boolean if a field has been set.
func (o *TransactionGroup) HasTransactionGroup() bool {
	if o != nil && !IsNil(o.TransactionGroup) {
		return true
	}

	return false
}

// SetTransactionGroup gets a reference to the given HotelTransactionGroupType and assigns it to the TransactionGroup field.
func (o *TransactionGroup) SetTransactionGroup(v HotelTransactionGroupType) {
	o.TransactionGroup = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TransactionGroup) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionGroup) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TransactionGroup) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TransactionGroup) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TransactionGroup) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionGroup) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TransactionGroup) {
		toSerialize["transactionGroup"] = o.TransactionGroup
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTransactionGroup struct {
	value *TransactionGroup
	isSet bool
}

func (v NullableTransactionGroup) Get() *TransactionGroup {
	return v.value
}

func (v *NullableTransactionGroup) Set(val *TransactionGroup) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionGroup) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionGroup) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionGroup(val *TransactionGroup) *NullableTransactionGroup {
	return &NullableTransactionGroup{value: val, isSet: true}
}

func (v NullableTransactionGroup) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionGroup) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


