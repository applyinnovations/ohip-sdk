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

// checks if the ChangeShareRateAmountTypeChangeShareRateInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeShareRateAmountTypeChangeShareRateInstructions{}

// ChangeShareRateAmountTypeChangeShareRateInstructions Instruction to apply new effective rates to the reservations.
type ChangeShareRateAmountTypeChangeShareRateInstructions struct {
	// Collection of effective rate amount per guest on specific dates.
	EffectiveRates []EffectiveRateType `json:"effectiveRates,omitempty"`
	// After the change rate operation, return the new list of Sharer Reservaitions.
	ReturnShareReservations *bool `json:"returnShareReservations,omitempty"`
}

// NewChangeShareRateAmountTypeChangeShareRateInstructions instantiates a new ChangeShareRateAmountTypeChangeShareRateInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeShareRateAmountTypeChangeShareRateInstructions() *ChangeShareRateAmountTypeChangeShareRateInstructions {
	this := ChangeShareRateAmountTypeChangeShareRateInstructions{}
	return &this
}

// NewChangeShareRateAmountTypeChangeShareRateInstructionsWithDefaults instantiates a new ChangeShareRateAmountTypeChangeShareRateInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeShareRateAmountTypeChangeShareRateInstructionsWithDefaults() *ChangeShareRateAmountTypeChangeShareRateInstructions {
	this := ChangeShareRateAmountTypeChangeShareRateInstructions{}
	return &this
}

// GetEffectiveRates returns the EffectiveRates field value if set, zero value otherwise.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetEffectiveRates() []EffectiveRateType {
	if o == nil || IsNil(o.EffectiveRates) {
		var ret []EffectiveRateType
		return ret
	}
	return o.EffectiveRates
}

// GetEffectiveRatesOk returns a tuple with the EffectiveRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetEffectiveRatesOk() ([]EffectiveRateType, bool) {
	if o == nil || IsNil(o.EffectiveRates) {
		return nil, false
	}
	return o.EffectiveRates, true
}

// HasEffectiveRates returns a boolean if a field has been set.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) HasEffectiveRates() bool {
	if o != nil && !IsNil(o.EffectiveRates) {
		return true
	}

	return false
}

// SetEffectiveRates gets a reference to the given []EffectiveRateType and assigns it to the EffectiveRates field.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) SetEffectiveRates(v []EffectiveRateType) {
	o.EffectiveRates = v
}

// GetReturnShareReservations returns the ReturnShareReservations field value if set, zero value otherwise.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetReturnShareReservations() bool {
	if o == nil || IsNil(o.ReturnShareReservations) {
		var ret bool
		return ret
	}
	return *o.ReturnShareReservations
}

// GetReturnShareReservationsOk returns a tuple with the ReturnShareReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetReturnShareReservationsOk() (*bool, bool) {
	if o == nil || IsNil(o.ReturnShareReservations) {
		return nil, false
	}
	return o.ReturnShareReservations, true
}

// HasReturnShareReservations returns a boolean if a field has been set.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) HasReturnShareReservations() bool {
	if o != nil && !IsNil(o.ReturnShareReservations) {
		return true
	}

	return false
}

// SetReturnShareReservations gets a reference to the given bool and assigns it to the ReturnShareReservations field.
func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) SetReturnShareReservations(v bool) {
	o.ReturnShareReservations = &v
}

func (o ChangeShareRateAmountTypeChangeShareRateInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeShareRateAmountTypeChangeShareRateInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EffectiveRates) {
		toSerialize["effectiveRates"] = o.EffectiveRates
	}
	if !IsNil(o.ReturnShareReservations) {
		toSerialize["returnShareReservations"] = o.ReturnShareReservations
	}
	return toSerialize, nil
}

type NullableChangeShareRateAmountTypeChangeShareRateInstructions struct {
	value *ChangeShareRateAmountTypeChangeShareRateInstructions
	isSet bool
}

func (v NullableChangeShareRateAmountTypeChangeShareRateInstructions) Get() *ChangeShareRateAmountTypeChangeShareRateInstructions {
	return v.value
}

func (v *NullableChangeShareRateAmountTypeChangeShareRateInstructions) Set(val *ChangeShareRateAmountTypeChangeShareRateInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeShareRateAmountTypeChangeShareRateInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeShareRateAmountTypeChangeShareRateInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeShareRateAmountTypeChangeShareRateInstructions(val *ChangeShareRateAmountTypeChangeShareRateInstructions) *NullableChangeShareRateAmountTypeChangeShareRateInstructions {
	return &NullableChangeShareRateAmountTypeChangeShareRateInstructions{value: val, isSet: true}
}

func (v NullableChangeShareRateAmountTypeChangeShareRateInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeShareRateAmountTypeChangeShareRateInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

