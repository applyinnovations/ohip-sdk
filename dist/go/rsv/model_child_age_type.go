/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ChildAgeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChildAgeType{}

// ChildAgeType Defines Child's Age.
type ChildAgeType struct {
	// Age of a child in years.
	Age *int32 `json:"age,omitempty"`
}

// NewChildAgeType instantiates a new ChildAgeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChildAgeType() *ChildAgeType {
	this := ChildAgeType{}
	return &this
}

// NewChildAgeTypeWithDefaults instantiates a new ChildAgeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChildAgeTypeWithDefaults() *ChildAgeType {
	this := ChildAgeType{}
	return &this
}

// GetAge returns the Age field value if set, zero value otherwise.
func (o *ChildAgeType) GetAge() int32 {
	if o == nil || IsNil(o.Age) {
		var ret int32
		return ret
	}
	return *o.Age
}

// GetAgeOk returns a tuple with the Age field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildAgeType) GetAgeOk() (*int32, bool) {
	if o == nil || IsNil(o.Age) {
		return nil, false
	}
	return o.Age, true
}

// HasAge returns a boolean if a field has been set.
func (o *ChildAgeType) HasAge() bool {
	if o != nil && !IsNil(o.Age) {
		return true
	}

	return false
}

// SetAge gets a reference to the given int32 and assigns it to the Age field.
func (o *ChildAgeType) SetAge(v int32) {
	o.Age = &v
}

func (o ChildAgeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChildAgeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Age) {
		toSerialize["age"] = o.Age
	}
	return toSerialize, nil
}

type NullableChildAgeType struct {
	value *ChildAgeType
	isSet bool
}

func (v NullableChildAgeType) Get() *ChildAgeType {
	return v.value
}

func (v *NullableChildAgeType) Set(val *ChildAgeType) {
	v.value = val
	v.isSet = true
}

func (v NullableChildAgeType) IsSet() bool {
	return v.isSet
}

func (v *NullableChildAgeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChildAgeType(val *ChildAgeType) *NullableChildAgeType {
	return &NullableChildAgeType{value: val, isSet: true}
}

func (v NullableChildAgeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChildAgeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

