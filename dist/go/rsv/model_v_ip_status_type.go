/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the VIPStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &VIPStatusType{}

// VIPStatusType VIP status of the customer.
type VIPStatusType struct {
	// VIP status of the customer.
	Code *string `json:"code,omitempty"`
	// Used for Character Strings, length 0 to 2000.
	Value *string `json:"value,omitempty"`
}

// NewVIPStatusType instantiates a new VIPStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVIPStatusType() *VIPStatusType {
	this := VIPStatusType{}
	return &this
}

// NewVIPStatusTypeWithDefaults instantiates a new VIPStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVIPStatusTypeWithDefaults() *VIPStatusType {
	this := VIPStatusType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *VIPStatusType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPStatusType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *VIPStatusType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *VIPStatusType) SetCode(v string) {
	o.Code = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *VIPStatusType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPStatusType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *VIPStatusType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *VIPStatusType) SetValue(v string) {
	o.Value = &v
}

func (o VIPStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o VIPStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableVIPStatusType struct {
	value *VIPStatusType
	isSet bool
}

func (v NullableVIPStatusType) Get() *VIPStatusType {
	return v.value
}

func (v *NullableVIPStatusType) Set(val *VIPStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableVIPStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableVIPStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVIPStatusType(val *VIPStatusType) *NullableVIPStatusType {
	return &NullableVIPStatusType{value: val, isSet: true}
}

func (v NullableVIPStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVIPStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


