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

// checks if the BlockResvSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockResvSummaryType{}

// BlockResvSummaryType Indicates summary of the Total reservations for the block.
type BlockResvSummaryType struct {
	// Number of reservations with block.
	TotalReservations *int32 `json:"totalReservations,omitempty"`
}

// NewBlockResvSummaryType instantiates a new BlockResvSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockResvSummaryType() *BlockResvSummaryType {
	this := BlockResvSummaryType{}
	return &this
}

// NewBlockResvSummaryTypeWithDefaults instantiates a new BlockResvSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockResvSummaryTypeWithDefaults() *BlockResvSummaryType {
	this := BlockResvSummaryType{}
	return &this
}

// GetTotalReservations returns the TotalReservations field value if set, zero value otherwise.
func (o *BlockResvSummaryType) GetTotalReservations() int32 {
	if o == nil || IsNil(o.TotalReservations) {
		var ret int32
		return ret
	}
	return *o.TotalReservations
}

// GetTotalReservationsOk returns a tuple with the TotalReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockResvSummaryType) GetTotalReservationsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalReservations) {
		return nil, false
	}
	return o.TotalReservations, true
}

// HasTotalReservations returns a boolean if a field has been set.
func (o *BlockResvSummaryType) HasTotalReservations() bool {
	if o != nil && !IsNil(o.TotalReservations) {
		return true
	}

	return false
}

// SetTotalReservations gets a reference to the given int32 and assigns it to the TotalReservations field.
func (o *BlockResvSummaryType) SetTotalReservations(v int32) {
	o.TotalReservations = &v
}

func (o BlockResvSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockResvSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TotalReservations) {
		toSerialize["totalReservations"] = o.TotalReservations
	}
	return toSerialize, nil
}

type NullableBlockResvSummaryType struct {
	value *BlockResvSummaryType
	isSet bool
}

func (v NullableBlockResvSummaryType) Get() *BlockResvSummaryType {
	return v.value
}

func (v *NullableBlockResvSummaryType) Set(val *BlockResvSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockResvSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockResvSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockResvSummaryType(val *BlockResvSummaryType) *NullableBlockResvSummaryType {
	return &NullableBlockResvSummaryType{value: val, isSet: true}
}

func (v NullableBlockResvSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockResvSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


