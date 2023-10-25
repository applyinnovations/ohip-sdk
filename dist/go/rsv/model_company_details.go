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

// checks if the CompanyDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompanyDetails{}

// CompanyDetails Company Details
type CompanyDetails struct {
	// ID of the company for the reservation.
	CompanyId *string `json:"companyId,omitempty"`
	// Name of the company for the reservation.
	CompanyName *string `json:"companyName,omitempty"`
}

// NewCompanyDetails instantiates a new CompanyDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompanyDetails() *CompanyDetails {
	this := CompanyDetails{}
	return &this
}

// NewCompanyDetailsWithDefaults instantiates a new CompanyDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompanyDetailsWithDefaults() *CompanyDetails {
	this := CompanyDetails{}
	return &this
}

// GetCompanyId returns the CompanyId field value if set, zero value otherwise.
func (o *CompanyDetails) GetCompanyId() string {
	if o == nil || IsNil(o.CompanyId) {
		var ret string
		return ret
	}
	return *o.CompanyId
}

// GetCompanyIdOk returns a tuple with the CompanyId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyDetails) GetCompanyIdOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyId) {
		return nil, false
	}
	return o.CompanyId, true
}

// HasCompanyId returns a boolean if a field has been set.
func (o *CompanyDetails) HasCompanyId() bool {
	if o != nil && !IsNil(o.CompanyId) {
		return true
	}

	return false
}

// SetCompanyId gets a reference to the given string and assigns it to the CompanyId field.
func (o *CompanyDetails) SetCompanyId(v string) {
	o.CompanyId = &v
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *CompanyDetails) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyDetails) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *CompanyDetails) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *CompanyDetails) SetCompanyName(v string) {
	o.CompanyName = &v
}

func (o CompanyDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompanyDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompanyId) {
		toSerialize["companyId"] = o.CompanyId
	}
	if !IsNil(o.CompanyName) {
		toSerialize["companyName"] = o.CompanyName
	}
	return toSerialize, nil
}

type NullableCompanyDetails struct {
	value *CompanyDetails
	isSet bool
}

func (v NullableCompanyDetails) Get() *CompanyDetails {
	return v.value
}

func (v *NullableCompanyDetails) Set(val *CompanyDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCompanyDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCompanyDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompanyDetails(val *CompanyDetails) *NullableCompanyDetails {
	return &NullableCompanyDetails{value: val, isSet: true}
}

func (v NullableCompanyDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompanyDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


