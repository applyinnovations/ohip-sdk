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

// checks if the DateUDFType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DateUDFType{}

// DateUDFType Used to hold user defined field of Date Type.
type DateUDFType struct {
	// Label of user defined field used by vendors or customers.
	AlternateName *string `json:"alternateName,omitempty"`
	// Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
	Name *string `json:"name,omitempty"`
	// Value of user defined field.
	Value *string `json:"value,omitempty"`
}

// NewDateUDFType instantiates a new DateUDFType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDateUDFType() *DateUDFType {
	this := DateUDFType{}
	return &this
}

// NewDateUDFTypeWithDefaults instantiates a new DateUDFType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDateUDFTypeWithDefaults() *DateUDFType {
	this := DateUDFType{}
	return &this
}

// GetAlternateName returns the AlternateName field value if set, zero value otherwise.
func (o *DateUDFType) GetAlternateName() string {
	if o == nil || IsNil(o.AlternateName) {
		var ret string
		return ret
	}
	return *o.AlternateName
}

// GetAlternateNameOk returns a tuple with the AlternateName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateUDFType) GetAlternateNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateName) {
		return nil, false
	}
	return o.AlternateName, true
}

// HasAlternateName returns a boolean if a field has been set.
func (o *DateUDFType) HasAlternateName() bool {
	if o != nil && !IsNil(o.AlternateName) {
		return true
	}

	return false
}

// SetAlternateName gets a reference to the given string and assigns it to the AlternateName field.
func (o *DateUDFType) SetAlternateName(v string) {
	o.AlternateName = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *DateUDFType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateUDFType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *DateUDFType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *DateUDFType) SetName(v string) {
	o.Name = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *DateUDFType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateUDFType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *DateUDFType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *DateUDFType) SetValue(v string) {
	o.Value = &v
}

func (o DateUDFType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DateUDFType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateName) {
		toSerialize["alternateName"] = o.AlternateName
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableDateUDFType struct {
	value *DateUDFType
	isSet bool
}

func (v NullableDateUDFType) Get() *DateUDFType {
	return v.value
}

func (v *NullableDateUDFType) Set(val *DateUDFType) {
	v.value = val
	v.isSet = true
}

func (v NullableDateUDFType) IsSet() bool {
	return v.isSet
}

func (v *NullableDateUDFType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDateUDFType(val *DateUDFType) *NullableDateUDFType {
	return &NullableDateUDFType{value: val, isSet: true}
}

func (v NullableDateUDFType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDateUDFType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


