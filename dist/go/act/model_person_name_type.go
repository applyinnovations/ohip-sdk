/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the PersonNameType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PersonNameType{}

// PersonNameType This provides name information for a person.
type PersonNameType struct {
	// Given name, first name or names.
	GivenName *string `json:"givenName,omitempty"`
}

// NewPersonNameType instantiates a new PersonNameType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPersonNameType() *PersonNameType {
	this := PersonNameType{}
	return &this
}

// NewPersonNameTypeWithDefaults instantiates a new PersonNameType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPersonNameTypeWithDefaults() *PersonNameType {
	this := PersonNameType{}
	return &this
}

// GetGivenName returns the GivenName field value if set, zero value otherwise.
func (o *PersonNameType) GetGivenName() string {
	if o == nil || IsNil(o.GivenName) {
		var ret string
		return ret
	}
	return *o.GivenName
}

// GetGivenNameOk returns a tuple with the GivenName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PersonNameType) GetGivenNameOk() (*string, bool) {
	if o == nil || IsNil(o.GivenName) {
		return nil, false
	}
	return o.GivenName, true
}

// HasGivenName returns a boolean if a field has been set.
func (o *PersonNameType) HasGivenName() bool {
	if o != nil && !IsNil(o.GivenName) {
		return true
	}

	return false
}

// SetGivenName gets a reference to the given string and assigns it to the GivenName field.
func (o *PersonNameType) SetGivenName(v string) {
	o.GivenName = &v
}

func (o PersonNameType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PersonNameType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GivenName) {
		toSerialize["givenName"] = o.GivenName
	}
	return toSerialize, nil
}

type NullablePersonNameType struct {
	value *PersonNameType
	isSet bool
}

func (v NullablePersonNameType) Get() *PersonNameType {
	return v.value
}

func (v *NullablePersonNameType) Set(val *PersonNameType) {
	v.value = val
	v.isSet = true
}

func (v NullablePersonNameType) IsSet() bool {
	return v.isSet
}

func (v *NullablePersonNameType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePersonNameType(val *PersonNameType) *NullablePersonNameType {
	return &NullablePersonNameType{value: val, isSet: true}
}

func (v NullablePersonNameType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePersonNameType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


