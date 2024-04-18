/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReservationsSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationsSummaryType{}

// ReservationsSummaryType Type which shows all fetched reservations summary depends on Fetch Summary Instruction.
type ReservationsSummaryType struct {
	BlockSummary *BlockResvSummaryType `json:"blockSummary,omitempty"`
	PaymentMethodSummary *PaymentMethodsSummaryType `json:"paymentMethodSummary,omitempty"`
	RoomSummary *RoomSummaryType `json:"roomSummary,omitempty"`
}

// NewReservationsSummaryType instantiates a new ReservationsSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationsSummaryType() *ReservationsSummaryType {
	this := ReservationsSummaryType{}
	return &this
}

// NewReservationsSummaryTypeWithDefaults instantiates a new ReservationsSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationsSummaryTypeWithDefaults() *ReservationsSummaryType {
	this := ReservationsSummaryType{}
	return &this
}

// GetBlockSummary returns the BlockSummary field value if set, zero value otherwise.
func (o *ReservationsSummaryType) GetBlockSummary() BlockResvSummaryType {
	if o == nil || IsNil(o.BlockSummary) {
		var ret BlockResvSummaryType
		return ret
	}
	return *o.BlockSummary
}

// GetBlockSummaryOk returns a tuple with the BlockSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsSummaryType) GetBlockSummaryOk() (*BlockResvSummaryType, bool) {
	if o == nil || IsNil(o.BlockSummary) {
		return nil, false
	}
	return o.BlockSummary, true
}

// HasBlockSummary returns a boolean if a field has been set.
func (o *ReservationsSummaryType) HasBlockSummary() bool {
	if o != nil && !IsNil(o.BlockSummary) {
		return true
	}

	return false
}

// SetBlockSummary gets a reference to the given BlockResvSummaryType and assigns it to the BlockSummary field.
func (o *ReservationsSummaryType) SetBlockSummary(v BlockResvSummaryType) {
	o.BlockSummary = &v
}

// GetPaymentMethodSummary returns the PaymentMethodSummary field value if set, zero value otherwise.
func (o *ReservationsSummaryType) GetPaymentMethodSummary() PaymentMethodsSummaryType {
	if o == nil || IsNil(o.PaymentMethodSummary) {
		var ret PaymentMethodsSummaryType
		return ret
	}
	return *o.PaymentMethodSummary
}

// GetPaymentMethodSummaryOk returns a tuple with the PaymentMethodSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsSummaryType) GetPaymentMethodSummaryOk() (*PaymentMethodsSummaryType, bool) {
	if o == nil || IsNil(o.PaymentMethodSummary) {
		return nil, false
	}
	return o.PaymentMethodSummary, true
}

// HasPaymentMethodSummary returns a boolean if a field has been set.
func (o *ReservationsSummaryType) HasPaymentMethodSummary() bool {
	if o != nil && !IsNil(o.PaymentMethodSummary) {
		return true
	}

	return false
}

// SetPaymentMethodSummary gets a reference to the given PaymentMethodsSummaryType and assigns it to the PaymentMethodSummary field.
func (o *ReservationsSummaryType) SetPaymentMethodSummary(v PaymentMethodsSummaryType) {
	o.PaymentMethodSummary = &v
}

// GetRoomSummary returns the RoomSummary field value if set, zero value otherwise.
func (o *ReservationsSummaryType) GetRoomSummary() RoomSummaryType {
	if o == nil || IsNil(o.RoomSummary) {
		var ret RoomSummaryType
		return ret
	}
	return *o.RoomSummary
}

// GetRoomSummaryOk returns a tuple with the RoomSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsSummaryType) GetRoomSummaryOk() (*RoomSummaryType, bool) {
	if o == nil || IsNil(o.RoomSummary) {
		return nil, false
	}
	return o.RoomSummary, true
}

// HasRoomSummary returns a boolean if a field has been set.
func (o *ReservationsSummaryType) HasRoomSummary() bool {
	if o != nil && !IsNil(o.RoomSummary) {
		return true
	}

	return false
}

// SetRoomSummary gets a reference to the given RoomSummaryType and assigns it to the RoomSummary field.
func (o *ReservationsSummaryType) SetRoomSummary(v RoomSummaryType) {
	o.RoomSummary = &v
}

func (o ReservationsSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationsSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockSummary) {
		toSerialize["blockSummary"] = o.BlockSummary
	}
	if !IsNil(o.PaymentMethodSummary) {
		toSerialize["paymentMethodSummary"] = o.PaymentMethodSummary
	}
	if !IsNil(o.RoomSummary) {
		toSerialize["roomSummary"] = o.RoomSummary
	}
	return toSerialize, nil
}

type NullableReservationsSummaryType struct {
	value *ReservationsSummaryType
	isSet bool
}

func (v NullableReservationsSummaryType) Get() *ReservationsSummaryType {
	return v.value
}

func (v *NullableReservationsSummaryType) Set(val *ReservationsSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationsSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationsSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationsSummaryType(val *ReservationsSummaryType) *NullableReservationsSummaryType {
	return &NullableReservationsSummaryType{value: val, isSet: true}
}

func (v NullableReservationsSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationsSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

