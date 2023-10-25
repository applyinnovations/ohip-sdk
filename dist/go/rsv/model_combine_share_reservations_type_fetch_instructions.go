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

// checks if the CombineShareReservationsTypeFetchInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CombineShareReservationsTypeFetchInstructions{}

// CombineShareReservationsTypeFetchInstructions Collection of fetch reservation instructions to be returned.
type CombineShareReservationsTypeFetchInstructions struct {
	// Instruction on what information has to be fetched.
	FetchInstruction []ReservationInstructionType `json:"fetchInstruction,omitempty"`
	// After the combine shares operation, return the new list of share reservations.
	ReturnShareReservations *bool `json:"returnShareReservations,omitempty"`
}

// NewCombineShareReservationsTypeFetchInstructions instantiates a new CombineShareReservationsTypeFetchInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCombineShareReservationsTypeFetchInstructions() *CombineShareReservationsTypeFetchInstructions {
	this := CombineShareReservationsTypeFetchInstructions{}
	return &this
}

// NewCombineShareReservationsTypeFetchInstructionsWithDefaults instantiates a new CombineShareReservationsTypeFetchInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCombineShareReservationsTypeFetchInstructionsWithDefaults() *CombineShareReservationsTypeFetchInstructions {
	this := CombineShareReservationsTypeFetchInstructions{}
	return &this
}

// GetFetchInstruction returns the FetchInstruction field value if set, zero value otherwise.
func (o *CombineShareReservationsTypeFetchInstructions) GetFetchInstruction() []ReservationInstructionType {
	if o == nil || IsNil(o.FetchInstruction) {
		var ret []ReservationInstructionType
		return ret
	}
	return o.FetchInstruction
}

// GetFetchInstructionOk returns a tuple with the FetchInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CombineShareReservationsTypeFetchInstructions) GetFetchInstructionOk() ([]ReservationInstructionType, bool) {
	if o == nil || IsNil(o.FetchInstruction) {
		return nil, false
	}
	return o.FetchInstruction, true
}

// HasFetchInstruction returns a boolean if a field has been set.
func (o *CombineShareReservationsTypeFetchInstructions) HasFetchInstruction() bool {
	if o != nil && !IsNil(o.FetchInstruction) {
		return true
	}

	return false
}

// SetFetchInstruction gets a reference to the given []ReservationInstructionType and assigns it to the FetchInstruction field.
func (o *CombineShareReservationsTypeFetchInstructions) SetFetchInstruction(v []ReservationInstructionType) {
	o.FetchInstruction = v
}

// GetReturnShareReservations returns the ReturnShareReservations field value if set, zero value otherwise.
func (o *CombineShareReservationsTypeFetchInstructions) GetReturnShareReservations() bool {
	if o == nil || IsNil(o.ReturnShareReservations) {
		var ret bool
		return ret
	}
	return *o.ReturnShareReservations
}

// GetReturnShareReservationsOk returns a tuple with the ReturnShareReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CombineShareReservationsTypeFetchInstructions) GetReturnShareReservationsOk() (*bool, bool) {
	if o == nil || IsNil(o.ReturnShareReservations) {
		return nil, false
	}
	return o.ReturnShareReservations, true
}

// HasReturnShareReservations returns a boolean if a field has been set.
func (o *CombineShareReservationsTypeFetchInstructions) HasReturnShareReservations() bool {
	if o != nil && !IsNil(o.ReturnShareReservations) {
		return true
	}

	return false
}

// SetReturnShareReservations gets a reference to the given bool and assigns it to the ReturnShareReservations field.
func (o *CombineShareReservationsTypeFetchInstructions) SetReturnShareReservations(v bool) {
	o.ReturnShareReservations = &v
}

func (o CombineShareReservationsTypeFetchInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CombineShareReservationsTypeFetchInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FetchInstruction) {
		toSerialize["fetchInstruction"] = o.FetchInstruction
	}
	if !IsNil(o.ReturnShareReservations) {
		toSerialize["returnShareReservations"] = o.ReturnShareReservations
	}
	return toSerialize, nil
}

type NullableCombineShareReservationsTypeFetchInstructions struct {
	value *CombineShareReservationsTypeFetchInstructions
	isSet bool
}

func (v NullableCombineShareReservationsTypeFetchInstructions) Get() *CombineShareReservationsTypeFetchInstructions {
	return v.value
}

func (v *NullableCombineShareReservationsTypeFetchInstructions) Set(val *CombineShareReservationsTypeFetchInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableCombineShareReservationsTypeFetchInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableCombineShareReservationsTypeFetchInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCombineShareReservationsTypeFetchInstructions(val *CombineShareReservationsTypeFetchInstructions) *NullableCombineShareReservationsTypeFetchInstructions {
	return &NullableCombineShareReservationsTypeFetchInstructions{value: val, isSet: true}
}

func (v NullableCombineShareReservationsTypeFetchInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCombineShareReservationsTypeFetchInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


