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

// checks if the HotelReservationInstructionTypeTransactionDiversions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationInstructionTypeTransactionDiversions{}

// HotelReservationInstructionTypeTransactionDiversions List of transaction diversions attached to the reservation.
type HotelReservationInstructionTypeTransactionDiversions struct {
	ActionType *string `json:"actionType,omitempty"`
	TransactionDiversions [][]ReservationTransactionDiversionType `json:"transactionDiversions,omitempty"`
}

// NewHotelReservationInstructionTypeTransactionDiversions instantiates a new HotelReservationInstructionTypeTransactionDiversions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationInstructionTypeTransactionDiversions() *HotelReservationInstructionTypeTransactionDiversions {
	this := HotelReservationInstructionTypeTransactionDiversions{}
	return &this
}

// NewHotelReservationInstructionTypeTransactionDiversionsWithDefaults instantiates a new HotelReservationInstructionTypeTransactionDiversions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationInstructionTypeTransactionDiversionsWithDefaults() *HotelReservationInstructionTypeTransactionDiversions {
	this := HotelReservationInstructionTypeTransactionDiversions{}
	return &this
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeTransactionDiversions) GetActionType() string {
	if o == nil || IsNil(o.ActionType) {
		var ret string
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeTransactionDiversions) GetActionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeTransactionDiversions) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given string and assigns it to the ActionType field.
func (o *HotelReservationInstructionTypeTransactionDiversions) SetActionType(v string) {
	o.ActionType = &v
}

// GetTransactionDiversions returns the TransactionDiversions field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeTransactionDiversions) GetTransactionDiversions() [][]ReservationTransactionDiversionType {
	if o == nil || IsNil(o.TransactionDiversions) {
		var ret [][]ReservationTransactionDiversionType
		return ret
	}
	return o.TransactionDiversions
}

// GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeTransactionDiversions) GetTransactionDiversionsOk() ([][]ReservationTransactionDiversionType, bool) {
	if o == nil || IsNil(o.TransactionDiversions) {
		return nil, false
	}
	return o.TransactionDiversions, true
}

// HasTransactionDiversions returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeTransactionDiversions) HasTransactionDiversions() bool {
	if o != nil && !IsNil(o.TransactionDiversions) {
		return true
	}

	return false
}

// SetTransactionDiversions gets a reference to the given [][]ReservationTransactionDiversionType and assigns it to the TransactionDiversions field.
func (o *HotelReservationInstructionTypeTransactionDiversions) SetTransactionDiversions(v [][]ReservationTransactionDiversionType) {
	o.TransactionDiversions = v
}

func (o HotelReservationInstructionTypeTransactionDiversions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationInstructionTypeTransactionDiversions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.TransactionDiversions) {
		toSerialize["transactionDiversions"] = o.TransactionDiversions
	}
	return toSerialize, nil
}

type NullableHotelReservationInstructionTypeTransactionDiversions struct {
	value *HotelReservationInstructionTypeTransactionDiversions
	isSet bool
}

func (v NullableHotelReservationInstructionTypeTransactionDiversions) Get() *HotelReservationInstructionTypeTransactionDiversions {
	return v.value
}

func (v *NullableHotelReservationInstructionTypeTransactionDiversions) Set(val *HotelReservationInstructionTypeTransactionDiversions) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationInstructionTypeTransactionDiversions) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationInstructionTypeTransactionDiversions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationInstructionTypeTransactionDiversions(val *HotelReservationInstructionTypeTransactionDiversions) *NullableHotelReservationInstructionTypeTransactionDiversions {
	return &NullableHotelReservationInstructionTypeTransactionDiversions{value: val, isSet: true}
}

func (v NullableHotelReservationInstructionTypeTransactionDiversions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationInstructionTypeTransactionDiversions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


