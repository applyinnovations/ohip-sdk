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

// checks if the ProfileRoutingInstructionsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileRoutingInstructionsType{}

// ProfileRoutingInstructionsType The type contains routing instructions for the profile.
type ProfileRoutingInstructionsType struct {
	// A flag which determines whether the instructions has to be automatically populated for this profile or not.
	AutoPopulateRouting *bool `json:"autoPopulateRouting,omitempty"`
	// Set of Billing Instruction codes.
	BillingInstructions []BillingInstructionType `json:"billingInstructions,omitempty"`
	// List of Transaction codes info.
	TransactionCodes []TrxInfoType `json:"transactionCodes,omitempty"`
}

// NewProfileRoutingInstructionsType instantiates a new ProfileRoutingInstructionsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileRoutingInstructionsType() *ProfileRoutingInstructionsType {
	this := ProfileRoutingInstructionsType{}
	return &this
}

// NewProfileRoutingInstructionsTypeWithDefaults instantiates a new ProfileRoutingInstructionsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileRoutingInstructionsTypeWithDefaults() *ProfileRoutingInstructionsType {
	this := ProfileRoutingInstructionsType{}
	return &this
}

// GetAutoPopulateRouting returns the AutoPopulateRouting field value if set, zero value otherwise.
func (o *ProfileRoutingInstructionsType) GetAutoPopulateRouting() bool {
	if o == nil || IsNil(o.AutoPopulateRouting) {
		var ret bool
		return ret
	}
	return *o.AutoPopulateRouting
}

// GetAutoPopulateRoutingOk returns a tuple with the AutoPopulateRouting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRoutingInstructionsType) GetAutoPopulateRoutingOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoPopulateRouting) {
		return nil, false
	}
	return o.AutoPopulateRouting, true
}

// HasAutoPopulateRouting returns a boolean if a field has been set.
func (o *ProfileRoutingInstructionsType) HasAutoPopulateRouting() bool {
	if o != nil && !IsNil(o.AutoPopulateRouting) {
		return true
	}

	return false
}

// SetAutoPopulateRouting gets a reference to the given bool and assigns it to the AutoPopulateRouting field.
func (o *ProfileRoutingInstructionsType) SetAutoPopulateRouting(v bool) {
	o.AutoPopulateRouting = &v
}

// GetBillingInstructions returns the BillingInstructions field value if set, zero value otherwise.
func (o *ProfileRoutingInstructionsType) GetBillingInstructions() []BillingInstructionType {
	if o == nil || IsNil(o.BillingInstructions) {
		var ret []BillingInstructionType
		return ret
	}
	return o.BillingInstructions
}

// GetBillingInstructionsOk returns a tuple with the BillingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRoutingInstructionsType) GetBillingInstructionsOk() ([]BillingInstructionType, bool) {
	if o == nil || IsNil(o.BillingInstructions) {
		return nil, false
	}
	return o.BillingInstructions, true
}

// HasBillingInstructions returns a boolean if a field has been set.
func (o *ProfileRoutingInstructionsType) HasBillingInstructions() bool {
	if o != nil && !IsNil(o.BillingInstructions) {
		return true
	}

	return false
}

// SetBillingInstructions gets a reference to the given []BillingInstructionType and assigns it to the BillingInstructions field.
func (o *ProfileRoutingInstructionsType) SetBillingInstructions(v []BillingInstructionType) {
	o.BillingInstructions = v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *ProfileRoutingInstructionsType) GetTransactionCodes() []TrxInfoType {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []TrxInfoType
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileRoutingInstructionsType) GetTransactionCodesOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *ProfileRoutingInstructionsType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []TrxInfoType and assigns it to the TransactionCodes field.
func (o *ProfileRoutingInstructionsType) SetTransactionCodes(v []TrxInfoType) {
	o.TransactionCodes = v
}

func (o ProfileRoutingInstructionsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileRoutingInstructionsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoPopulateRouting) {
		toSerialize["autoPopulateRouting"] = o.AutoPopulateRouting
	}
	if !IsNil(o.BillingInstructions) {
		toSerialize["billingInstructions"] = o.BillingInstructions
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	return toSerialize, nil
}

type NullableProfileRoutingInstructionsType struct {
	value *ProfileRoutingInstructionsType
	isSet bool
}

func (v NullableProfileRoutingInstructionsType) Get() *ProfileRoutingInstructionsType {
	return v.value
}

func (v *NullableProfileRoutingInstructionsType) Set(val *ProfileRoutingInstructionsType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileRoutingInstructionsType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileRoutingInstructionsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileRoutingInstructionsType(val *ProfileRoutingInstructionsType) *NullableProfileRoutingInstructionsType {
	return &NullableProfileRoutingInstructionsType{value: val, isSet: true}
}

func (v NullableProfileRoutingInstructionsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileRoutingInstructionsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


