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

// checks if the PackageCodeHeaderType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageCodeHeaderType{}

// PackageCodeHeaderType struct for PackageCodeHeaderType
type PackageCodeHeaderType struct {
	PostingAttributes *ConfigPostingAttributesType `json:"postingAttributes,omitempty"`
	PrimaryDetails *ConfigPackagePrimaryDetailsType `json:"primaryDetails,omitempty"`
	TransactionDetails *ConfigPackageTransactionType `json:"transactionDetails,omitempty"`
}

// NewPackageCodeHeaderType instantiates a new PackageCodeHeaderType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageCodeHeaderType() *PackageCodeHeaderType {
	this := PackageCodeHeaderType{}
	return &this
}

// NewPackageCodeHeaderTypeWithDefaults instantiates a new PackageCodeHeaderType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageCodeHeaderTypeWithDefaults() *PackageCodeHeaderType {
	this := PackageCodeHeaderType{}
	return &this
}

// GetPostingAttributes returns the PostingAttributes field value if set, zero value otherwise.
func (o *PackageCodeHeaderType) GetPostingAttributes() ConfigPostingAttributesType {
	if o == nil || IsNil(o.PostingAttributes) {
		var ret ConfigPostingAttributesType
		return ret
	}
	return *o.PostingAttributes
}

// GetPostingAttributesOk returns a tuple with the PostingAttributes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeHeaderType) GetPostingAttributesOk() (*ConfigPostingAttributesType, bool) {
	if o == nil || IsNil(o.PostingAttributes) {
		return nil, false
	}
	return o.PostingAttributes, true
}

// HasPostingAttributes returns a boolean if a field has been set.
func (o *PackageCodeHeaderType) HasPostingAttributes() bool {
	if o != nil && !IsNil(o.PostingAttributes) {
		return true
	}

	return false
}

// SetPostingAttributes gets a reference to the given ConfigPostingAttributesType and assigns it to the PostingAttributes field.
func (o *PackageCodeHeaderType) SetPostingAttributes(v ConfigPostingAttributesType) {
	o.PostingAttributes = &v
}

// GetPrimaryDetails returns the PrimaryDetails field value if set, zero value otherwise.
func (o *PackageCodeHeaderType) GetPrimaryDetails() ConfigPackagePrimaryDetailsType {
	if o == nil || IsNil(o.PrimaryDetails) {
		var ret ConfigPackagePrimaryDetailsType
		return ret
	}
	return *o.PrimaryDetails
}

// GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeHeaderType) GetPrimaryDetailsOk() (*ConfigPackagePrimaryDetailsType, bool) {
	if o == nil || IsNil(o.PrimaryDetails) {
		return nil, false
	}
	return o.PrimaryDetails, true
}

// HasPrimaryDetails returns a boolean if a field has been set.
func (o *PackageCodeHeaderType) HasPrimaryDetails() bool {
	if o != nil && !IsNil(o.PrimaryDetails) {
		return true
	}

	return false
}

// SetPrimaryDetails gets a reference to the given ConfigPackagePrimaryDetailsType and assigns it to the PrimaryDetails field.
func (o *PackageCodeHeaderType) SetPrimaryDetails(v ConfigPackagePrimaryDetailsType) {
	o.PrimaryDetails = &v
}

// GetTransactionDetails returns the TransactionDetails field value if set, zero value otherwise.
func (o *PackageCodeHeaderType) GetTransactionDetails() ConfigPackageTransactionType {
	if o == nil || IsNil(o.TransactionDetails) {
		var ret ConfigPackageTransactionType
		return ret
	}
	return *o.TransactionDetails
}

// GetTransactionDetailsOk returns a tuple with the TransactionDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeHeaderType) GetTransactionDetailsOk() (*ConfigPackageTransactionType, bool) {
	if o == nil || IsNil(o.TransactionDetails) {
		return nil, false
	}
	return o.TransactionDetails, true
}

// HasTransactionDetails returns a boolean if a field has been set.
func (o *PackageCodeHeaderType) HasTransactionDetails() bool {
	if o != nil && !IsNil(o.TransactionDetails) {
		return true
	}

	return false
}

// SetTransactionDetails gets a reference to the given ConfigPackageTransactionType and assigns it to the TransactionDetails field.
func (o *PackageCodeHeaderType) SetTransactionDetails(v ConfigPackageTransactionType) {
	o.TransactionDetails = &v
}

func (o PackageCodeHeaderType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageCodeHeaderType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PostingAttributes) {
		toSerialize["postingAttributes"] = o.PostingAttributes
	}
	if !IsNil(o.PrimaryDetails) {
		toSerialize["primaryDetails"] = o.PrimaryDetails
	}
	if !IsNil(o.TransactionDetails) {
		toSerialize["transactionDetails"] = o.TransactionDetails
	}
	return toSerialize, nil
}

type NullablePackageCodeHeaderType struct {
	value *PackageCodeHeaderType
	isSet bool
}

func (v NullablePackageCodeHeaderType) Get() *PackageCodeHeaderType {
	return v.value
}

func (v *NullablePackageCodeHeaderType) Set(val *PackageCodeHeaderType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageCodeHeaderType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageCodeHeaderType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageCodeHeaderType(val *PackageCodeHeaderType) *NullablePackageCodeHeaderType {
	return &NullablePackageCodeHeaderType{value: val, isSet: true}
}

func (v NullablePackageCodeHeaderType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageCodeHeaderType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

