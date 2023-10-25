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

// checks if the ECertificateInfoTypeHotels type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateInfoTypeHotels{}

// ECertificateInfoTypeHotels Hotel to which certificate is attached to.
type ECertificateInfoTypeHotels struct {
	Code []string `json:"code,omitempty"`
	Scope *ECertificateScopeType `json:"scope,omitempty"`
}

// NewECertificateInfoTypeHotels instantiates a new ECertificateInfoTypeHotels object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateInfoTypeHotels() *ECertificateInfoTypeHotels {
	this := ECertificateInfoTypeHotels{}
	return &this
}

// NewECertificateInfoTypeHotelsWithDefaults instantiates a new ECertificateInfoTypeHotels object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateInfoTypeHotelsWithDefaults() *ECertificateInfoTypeHotels {
	this := ECertificateInfoTypeHotels{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ECertificateInfoTypeHotels) GetCode() []string {
	if o == nil || IsNil(o.Code) {
		var ret []string
		return ret
	}
	return o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoTypeHotels) GetCodeOk() ([]string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ECertificateInfoTypeHotels) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given []string and assigns it to the Code field.
func (o *ECertificateInfoTypeHotels) SetCode(v []string) {
	o.Code = v
}

// GetScope returns the Scope field value if set, zero value otherwise.
func (o *ECertificateInfoTypeHotels) GetScope() ECertificateScopeType {
	if o == nil || IsNil(o.Scope) {
		var ret ECertificateScopeType
		return ret
	}
	return *o.Scope
}

// GetScopeOk returns a tuple with the Scope field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoTypeHotels) GetScopeOk() (*ECertificateScopeType, bool) {
	if o == nil || IsNil(o.Scope) {
		return nil, false
	}
	return o.Scope, true
}

// HasScope returns a boolean if a field has been set.
func (o *ECertificateInfoTypeHotels) HasScope() bool {
	if o != nil && !IsNil(o.Scope) {
		return true
	}

	return false
}

// SetScope gets a reference to the given ECertificateScopeType and assigns it to the Scope field.
func (o *ECertificateInfoTypeHotels) SetScope(v ECertificateScopeType) {
	o.Scope = &v
}

func (o ECertificateInfoTypeHotels) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateInfoTypeHotels) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Scope) {
		toSerialize["scope"] = o.Scope
	}
	return toSerialize, nil
}

type NullableECertificateInfoTypeHotels struct {
	value *ECertificateInfoTypeHotels
	isSet bool
}

func (v NullableECertificateInfoTypeHotels) Get() *ECertificateInfoTypeHotels {
	return v.value
}

func (v *NullableECertificateInfoTypeHotels) Set(val *ECertificateInfoTypeHotels) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateInfoTypeHotels) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateInfoTypeHotels) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateInfoTypeHotels(val *ECertificateInfoTypeHotels) *NullableECertificateInfoTypeHotels {
	return &NullableECertificateInfoTypeHotels{value: val, isSet: true}
}

func (v NullableECertificateInfoTypeHotels) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateInfoTypeHotels) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


