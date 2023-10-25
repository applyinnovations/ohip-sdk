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

// checks if the TemplateTransactionSubgroupIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateTransactionSubgroupIDType{}

// TemplateTransactionSubgroupIDType Information that uniquely identifies template transaction subgroups
type TemplateTransactionSubgroupIDType struct {
	// Template transaction group configuration code
	Group *string `json:"group,omitempty"`
	// Template transaction subgroup configuration code
	Subgroup *string `json:"subgroup,omitempty"`
}

// NewTemplateTransactionSubgroupIDType instantiates a new TemplateTransactionSubgroupIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateTransactionSubgroupIDType() *TemplateTransactionSubgroupIDType {
	this := TemplateTransactionSubgroupIDType{}
	return &this
}

// NewTemplateTransactionSubgroupIDTypeWithDefaults instantiates a new TemplateTransactionSubgroupIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateTransactionSubgroupIDTypeWithDefaults() *TemplateTransactionSubgroupIDType {
	this := TemplateTransactionSubgroupIDType{}
	return &this
}

// GetGroup returns the Group field value if set, zero value otherwise.
func (o *TemplateTransactionSubgroupIDType) GetGroup() string {
	if o == nil || IsNil(o.Group) {
		var ret string
		return ret
	}
	return *o.Group
}

// GetGroupOk returns a tuple with the Group field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTransactionSubgroupIDType) GetGroupOk() (*string, bool) {
	if o == nil || IsNil(o.Group) {
		return nil, false
	}
	return o.Group, true
}

// HasGroup returns a boolean if a field has been set.
func (o *TemplateTransactionSubgroupIDType) HasGroup() bool {
	if o != nil && !IsNil(o.Group) {
		return true
	}

	return false
}

// SetGroup gets a reference to the given string and assigns it to the Group field.
func (o *TemplateTransactionSubgroupIDType) SetGroup(v string) {
	o.Group = &v
}

// GetSubgroup returns the Subgroup field value if set, zero value otherwise.
func (o *TemplateTransactionSubgroupIDType) GetSubgroup() string {
	if o == nil || IsNil(o.Subgroup) {
		var ret string
		return ret
	}
	return *o.Subgroup
}

// GetSubgroupOk returns a tuple with the Subgroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTransactionSubgroupIDType) GetSubgroupOk() (*string, bool) {
	if o == nil || IsNil(o.Subgroup) {
		return nil, false
	}
	return o.Subgroup, true
}

// HasSubgroup returns a boolean if a field has been set.
func (o *TemplateTransactionSubgroupIDType) HasSubgroup() bool {
	if o != nil && !IsNil(o.Subgroup) {
		return true
	}

	return false
}

// SetSubgroup gets a reference to the given string and assigns it to the Subgroup field.
func (o *TemplateTransactionSubgroupIDType) SetSubgroup(v string) {
	o.Subgroup = &v
}

func (o TemplateTransactionSubgroupIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateTransactionSubgroupIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Group) {
		toSerialize["group"] = o.Group
	}
	if !IsNil(o.Subgroup) {
		toSerialize["subgroup"] = o.Subgroup
	}
	return toSerialize, nil
}

type NullableTemplateTransactionSubgroupIDType struct {
	value *TemplateTransactionSubgroupIDType
	isSet bool
}

func (v NullableTemplateTransactionSubgroupIDType) Get() *TemplateTransactionSubgroupIDType {
	return v.value
}

func (v *NullableTemplateTransactionSubgroupIDType) Set(val *TemplateTransactionSubgroupIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateTransactionSubgroupIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateTransactionSubgroupIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateTransactionSubgroupIDType(val *TemplateTransactionSubgroupIDType) *NullableTemplateTransactionSubgroupIDType {
	return &NullableTemplateTransactionSubgroupIDType{value: val, isSet: true}
}

func (v NullableTemplateTransactionSubgroupIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateTransactionSubgroupIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


