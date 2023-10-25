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

// checks if the CopyTransactionSubgroupsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyTransactionSubgroupsType{}

// CopyTransactionSubgroupsType Copy information required to copy transaction subgroup type
type CopyTransactionSubgroupsType struct {
	Hotels []string `json:"hotels,omitempty"`
	// List of template transaction subgroup IDs
	TransactionSubgroups []TemplateTransactionSubgroupIDType `json:"transactionSubgroups,omitempty"`
}

// NewCopyTransactionSubgroupsType instantiates a new CopyTransactionSubgroupsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyTransactionSubgroupsType() *CopyTransactionSubgroupsType {
	this := CopyTransactionSubgroupsType{}
	return &this
}

// NewCopyTransactionSubgroupsTypeWithDefaults instantiates a new CopyTransactionSubgroupsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyTransactionSubgroupsTypeWithDefaults() *CopyTransactionSubgroupsType {
	this := CopyTransactionSubgroupsType{}
	return &this
}

// GetHotels returns the Hotels field value if set, zero value otherwise.
func (o *CopyTransactionSubgroupsType) GetHotels() []string {
	if o == nil || IsNil(o.Hotels) {
		var ret []string
		return ret
	}
	return o.Hotels
}

// GetHotelsOk returns a tuple with the Hotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyTransactionSubgroupsType) GetHotelsOk() ([]string, bool) {
	if o == nil || IsNil(o.Hotels) {
		return nil, false
	}
	return o.Hotels, true
}

// HasHotels returns a boolean if a field has been set.
func (o *CopyTransactionSubgroupsType) HasHotels() bool {
	if o != nil && !IsNil(o.Hotels) {
		return true
	}

	return false
}

// SetHotels gets a reference to the given []string and assigns it to the Hotels field.
func (o *CopyTransactionSubgroupsType) SetHotels(v []string) {
	o.Hotels = v
}

// GetTransactionSubgroups returns the TransactionSubgroups field value if set, zero value otherwise.
func (o *CopyTransactionSubgroupsType) GetTransactionSubgroups() []TemplateTransactionSubgroupIDType {
	if o == nil || IsNil(o.TransactionSubgroups) {
		var ret []TemplateTransactionSubgroupIDType
		return ret
	}
	return o.TransactionSubgroups
}

// GetTransactionSubgroupsOk returns a tuple with the TransactionSubgroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyTransactionSubgroupsType) GetTransactionSubgroupsOk() ([]TemplateTransactionSubgroupIDType, bool) {
	if o == nil || IsNil(o.TransactionSubgroups) {
		return nil, false
	}
	return o.TransactionSubgroups, true
}

// HasTransactionSubgroups returns a boolean if a field has been set.
func (o *CopyTransactionSubgroupsType) HasTransactionSubgroups() bool {
	if o != nil && !IsNil(o.TransactionSubgroups) {
		return true
	}

	return false
}

// SetTransactionSubgroups gets a reference to the given []TemplateTransactionSubgroupIDType and assigns it to the TransactionSubgroups field.
func (o *CopyTransactionSubgroupsType) SetTransactionSubgroups(v []TemplateTransactionSubgroupIDType) {
	o.TransactionSubgroups = v
}

func (o CopyTransactionSubgroupsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyTransactionSubgroupsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Hotels) {
		toSerialize["hotels"] = o.Hotels
	}
	if !IsNil(o.TransactionSubgroups) {
		toSerialize["transactionSubgroups"] = o.TransactionSubgroups
	}
	return toSerialize, nil
}

type NullableCopyTransactionSubgroupsType struct {
	value *CopyTransactionSubgroupsType
	isSet bool
}

func (v NullableCopyTransactionSubgroupsType) Get() *CopyTransactionSubgroupsType {
	return v.value
}

func (v *NullableCopyTransactionSubgroupsType) Set(val *CopyTransactionSubgroupsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyTransactionSubgroupsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyTransactionSubgroupsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyTransactionSubgroupsType(val *CopyTransactionSubgroupsType) *NullableCopyTransactionSubgroupsType {
	return &NullableCopyTransactionSubgroupsType{value: val, isSet: true}
}

func (v NullableCopyTransactionSubgroupsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyTransactionSubgroupsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


