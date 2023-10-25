/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the CompanyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompanyType{}

// CompanyType struct for CompanyType
type CompanyType struct {
	// Name of the company.
	CompanyName *string `json:"companyName,omitempty"`
}

// NewCompanyType instantiates a new CompanyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompanyType() *CompanyType {
	this := CompanyType{}
	return &this
}

// NewCompanyTypeWithDefaults instantiates a new CompanyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompanyTypeWithDefaults() *CompanyType {
	this := CompanyType{}
	return &this
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *CompanyType) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *CompanyType) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *CompanyType) SetCompanyName(v string) {
	o.CompanyName = &v
}

func (o CompanyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompanyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompanyName) {
		toSerialize["companyName"] = o.CompanyName
	}
	return toSerialize, nil
}

type NullableCompanyType struct {
	value *CompanyType
	isSet bool
}

func (v NullableCompanyType) Get() *CompanyType {
	return v.value
}

func (v *NullableCompanyType) Set(val *CompanyType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompanyType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompanyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompanyType(val *CompanyType) *NullableCompanyType {
	return &NullableCompanyType{value: val, isSet: true}
}

func (v NullableCompanyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompanyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


