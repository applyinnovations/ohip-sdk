/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the ProfileCommissionAccount type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileCommissionAccount{}

// ProfileCommissionAccount Request object for creating profile commission detail.
type ProfileCommissionAccount struct {
	Criteria *ProfileCommissionAccountCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
}

// NewProfileCommissionAccount instantiates a new ProfileCommissionAccount object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileCommissionAccount() *ProfileCommissionAccount {
	this := ProfileCommissionAccount{}
	return &this
}

// NewProfileCommissionAccountWithDefaults instantiates a new ProfileCommissionAccount object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileCommissionAccountWithDefaults() *ProfileCommissionAccount {
	this := ProfileCommissionAccount{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *ProfileCommissionAccount) GetCriteria() ProfileCommissionAccountCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret ProfileCommissionAccountCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionAccount) GetCriteriaOk() (*ProfileCommissionAccountCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *ProfileCommissionAccount) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given ProfileCommissionAccountCriteriaType and assigns it to the Criteria field.
func (o *ProfileCommissionAccount) SetCriteria(v ProfileCommissionAccountCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ProfileCommissionAccount) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionAccount) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ProfileCommissionAccount) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ProfileCommissionAccount) SetLinks(v []InstanceLink) {
	o.Links = v
}

func (o ProfileCommissionAccount) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileCommissionAccount) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	return toSerialize, nil
}

type NullableProfileCommissionAccount struct {
	value *ProfileCommissionAccount
	isSet bool
}

func (v NullableProfileCommissionAccount) Get() *ProfileCommissionAccount {
	return v.value
}

func (v *NullableProfileCommissionAccount) Set(val *ProfileCommissionAccount) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileCommissionAccount) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileCommissionAccount) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileCommissionAccount(val *ProfileCommissionAccount) *NullableProfileCommissionAccount {
	return &NullableProfileCommissionAccount{value: val, isSet: true}
}

func (v NullableProfileCommissionAccount) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileCommissionAccount) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


