/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ReservationTypeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationTypeInfoType{}

// ReservationTypeInfoType struct for ReservationTypeInfoType
type ReservationTypeInfoType struct {
	ChainCode *string `json:"chainCode,omitempty"`
	Description *string `json:"description,omitempty"`
	ReservationType *string `json:"reservationType,omitempty"`
}

// NewReservationTypeInfoType instantiates a new ReservationTypeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationTypeInfoType() *ReservationTypeInfoType {
	this := ReservationTypeInfoType{}
	return &this
}

// NewReservationTypeInfoTypeWithDefaults instantiates a new ReservationTypeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationTypeInfoTypeWithDefaults() *ReservationTypeInfoType {
	this := ReservationTypeInfoType{}
	return &this
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *ReservationTypeInfoType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationTypeInfoType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *ReservationTypeInfoType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *ReservationTypeInfoType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ReservationTypeInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationTypeInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ReservationTypeInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ReservationTypeInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetReservationType returns the ReservationType field value if set, zero value otherwise.
func (o *ReservationTypeInfoType) GetReservationType() string {
	if o == nil || IsNil(o.ReservationType) {
		var ret string
		return ret
	}
	return *o.ReservationType
}

// GetReservationTypeOk returns a tuple with the ReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationTypeInfoType) GetReservationTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ReservationType) {
		return nil, false
	}
	return o.ReservationType, true
}

// HasReservationType returns a boolean if a field has been set.
func (o *ReservationTypeInfoType) HasReservationType() bool {
	if o != nil && !IsNil(o.ReservationType) {
		return true
	}

	return false
}

// SetReservationType gets a reference to the given string and assigns it to the ReservationType field.
func (o *ReservationTypeInfoType) SetReservationType(v string) {
	o.ReservationType = &v
}

func (o ReservationTypeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationTypeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ReservationType) {
		toSerialize["reservationType"] = o.ReservationType
	}
	return toSerialize, nil
}

type NullableReservationTypeInfoType struct {
	value *ReservationTypeInfoType
	isSet bool
}

func (v NullableReservationTypeInfoType) Get() *ReservationTypeInfoType {
	return v.value
}

func (v *NullableReservationTypeInfoType) Set(val *ReservationTypeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationTypeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationTypeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationTypeInfoType(val *ReservationTypeInfoType) *NullableReservationTypeInfoType {
	return &NullableReservationTypeInfoType{value: val, isSet: true}
}

func (v NullableReservationTypeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationTypeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


