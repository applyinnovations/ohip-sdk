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

// checks if the TransactionDiversions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionDiversions{}

// TransactionDiversions Response to fetch the transaction diversion rules attached to a reservation.
type TransactionDiversions struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Transaction Diversion rules.
	TransactionDiversions []ReservationTransactionDiversionType `json:"transactionDiversions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTransactionDiversions instantiates a new TransactionDiversions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionDiversions() *TransactionDiversions {
	this := TransactionDiversions{}
	return &this
}

// NewTransactionDiversionsWithDefaults instantiates a new TransactionDiversions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionDiversionsWithDefaults() *TransactionDiversions {
	this := TransactionDiversions{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TransactionDiversions) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversions) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TransactionDiversions) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TransactionDiversions) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTransactionDiversions returns the TransactionDiversions field value if set, zero value otherwise.
func (o *TransactionDiversions) GetTransactionDiversions() []ReservationTransactionDiversionType {
	if o == nil || IsNil(o.TransactionDiversions) {
		var ret []ReservationTransactionDiversionType
		return ret
	}
	return o.TransactionDiversions
}

// GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversions) GetTransactionDiversionsOk() ([]ReservationTransactionDiversionType, bool) {
	if o == nil || IsNil(o.TransactionDiversions) {
		return nil, false
	}
	return o.TransactionDiversions, true
}

// HasTransactionDiversions returns a boolean if a field has been set.
func (o *TransactionDiversions) HasTransactionDiversions() bool {
	if o != nil && !IsNil(o.TransactionDiversions) {
		return true
	}

	return false
}

// SetTransactionDiversions gets a reference to the given []ReservationTransactionDiversionType and assigns it to the TransactionDiversions field.
func (o *TransactionDiversions) SetTransactionDiversions(v []ReservationTransactionDiversionType) {
	o.TransactionDiversions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TransactionDiversions) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversions) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TransactionDiversions) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TransactionDiversions) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TransactionDiversions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionDiversions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TransactionDiversions) {
		toSerialize["transactionDiversions"] = o.TransactionDiversions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTransactionDiversions struct {
	value *TransactionDiversions
	isSet bool
}

func (v NullableTransactionDiversions) Get() *TransactionDiversions {
	return v.value
}

func (v *NullableTransactionDiversions) Set(val *TransactionDiversions) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiversions) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiversions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiversions(val *TransactionDiversions) *NullableTransactionDiversions {
	return &NullableTransactionDiversions{value: val, isSet: true}
}

func (v NullableTransactionDiversions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiversions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


