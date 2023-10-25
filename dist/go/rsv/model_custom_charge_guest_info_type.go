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

// checks if the CustomChargeGuestInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeGuestInfoType{}

// CustomChargeGuestInfoType struct for CustomChargeGuestInfoType
type CustomChargeGuestInfoType struct {
	// Given name, first name or names
	FirstName *string `json:"firstName,omitempty"`
	// String representation of the full name
	FullName *string `json:"fullName,omitempty"`
	// Family name, last name.
	LastName *string `json:"lastName,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
}

// NewCustomChargeGuestInfoType instantiates a new CustomChargeGuestInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeGuestInfoType() *CustomChargeGuestInfoType {
	this := CustomChargeGuestInfoType{}
	return &this
}

// NewCustomChargeGuestInfoTypeWithDefaults instantiates a new CustomChargeGuestInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeGuestInfoTypeWithDefaults() *CustomChargeGuestInfoType {
	this := CustomChargeGuestInfoType{}
	return &this
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *CustomChargeGuestInfoType) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeGuestInfoType) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *CustomChargeGuestInfoType) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *CustomChargeGuestInfoType) SetFirstName(v string) {
	o.FirstName = &v
}

// GetFullName returns the FullName field value if set, zero value otherwise.
func (o *CustomChargeGuestInfoType) GetFullName() string {
	if o == nil || IsNil(o.FullName) {
		var ret string
		return ret
	}
	return *o.FullName
}

// GetFullNameOk returns a tuple with the FullName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeGuestInfoType) GetFullNameOk() (*string, bool) {
	if o == nil || IsNil(o.FullName) {
		return nil, false
	}
	return o.FullName, true
}

// HasFullName returns a boolean if a field has been set.
func (o *CustomChargeGuestInfoType) HasFullName() bool {
	if o != nil && !IsNil(o.FullName) {
		return true
	}

	return false
}

// SetFullName gets a reference to the given string and assigns it to the FullName field.
func (o *CustomChargeGuestInfoType) SetFullName(v string) {
	o.FullName = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *CustomChargeGuestInfoType) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeGuestInfoType) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *CustomChargeGuestInfoType) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *CustomChargeGuestInfoType) SetLastName(v string) {
	o.LastName = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *CustomChargeGuestInfoType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeGuestInfoType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *CustomChargeGuestInfoType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *CustomChargeGuestInfoType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

func (o CustomChargeGuestInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeGuestInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.FullName) {
		toSerialize["fullName"] = o.FullName
	}
	if !IsNil(o.LastName) {
		toSerialize["lastName"] = o.LastName
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	return toSerialize, nil
}

type NullableCustomChargeGuestInfoType struct {
	value *CustomChargeGuestInfoType
	isSet bool
}

func (v NullableCustomChargeGuestInfoType) Get() *CustomChargeGuestInfoType {
	return v.value
}

func (v *NullableCustomChargeGuestInfoType) Set(val *CustomChargeGuestInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeGuestInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeGuestInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeGuestInfoType(val *CustomChargeGuestInfoType) *NullableCustomChargeGuestInfoType {
	return &NullableCustomChargeGuestInfoType{value: val, isSet: true}
}

func (v NullableCustomChargeGuestInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeGuestInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


