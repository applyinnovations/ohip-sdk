/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ARProfileYearViewInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARProfileYearViewInfoType{}

// ARProfileYearViewInfoType Year View information for a profile. Includes information for the profile for all accounts across properties.
type ARProfileYearViewInfoType struct {
	// Year View information for the Property, based on the criteria selected.
	Hotel []ARProfileYearViewInfoTypeHotelInner `json:"hotel,omitempty"`
	TotalProfileYearView *ARYearViewInfoType `json:"totalProfileYearView,omitempty"`
}

// NewARProfileYearViewInfoType instantiates a new ARProfileYearViewInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARProfileYearViewInfoType() *ARProfileYearViewInfoType {
	this := ARProfileYearViewInfoType{}
	return &this
}

// NewARProfileYearViewInfoTypeWithDefaults instantiates a new ARProfileYearViewInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARProfileYearViewInfoTypeWithDefaults() *ARProfileYearViewInfoType {
	this := ARProfileYearViewInfoType{}
	return &this
}

// GetHotel returns the Hotel field value if set, zero value otherwise.
func (o *ARProfileYearViewInfoType) GetHotel() []ARProfileYearViewInfoTypeHotelInner {
	if o == nil || IsNil(o.Hotel) {
		var ret []ARProfileYearViewInfoTypeHotelInner
		return ret
	}
	return o.Hotel
}

// GetHotelOk returns a tuple with the Hotel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARProfileYearViewInfoType) GetHotelOk() ([]ARProfileYearViewInfoTypeHotelInner, bool) {
	if o == nil || IsNil(o.Hotel) {
		return nil, false
	}
	return o.Hotel, true
}

// HasHotel returns a boolean if a field has been set.
func (o *ARProfileYearViewInfoType) HasHotel() bool {
	if o != nil && !IsNil(o.Hotel) {
		return true
	}

	return false
}

// SetHotel gets a reference to the given []ARProfileYearViewInfoTypeHotelInner and assigns it to the Hotel field.
func (o *ARProfileYearViewInfoType) SetHotel(v []ARProfileYearViewInfoTypeHotelInner) {
	o.Hotel = v
}

// GetTotalProfileYearView returns the TotalProfileYearView field value if set, zero value otherwise.
func (o *ARProfileYearViewInfoType) GetTotalProfileYearView() ARYearViewInfoType {
	if o == nil || IsNil(o.TotalProfileYearView) {
		var ret ARYearViewInfoType
		return ret
	}
	return *o.TotalProfileYearView
}

// GetTotalProfileYearViewOk returns a tuple with the TotalProfileYearView field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARProfileYearViewInfoType) GetTotalProfileYearViewOk() (*ARYearViewInfoType, bool) {
	if o == nil || IsNil(o.TotalProfileYearView) {
		return nil, false
	}
	return o.TotalProfileYearView, true
}

// HasTotalProfileYearView returns a boolean if a field has been set.
func (o *ARProfileYearViewInfoType) HasTotalProfileYearView() bool {
	if o != nil && !IsNil(o.TotalProfileYearView) {
		return true
	}

	return false
}

// SetTotalProfileYearView gets a reference to the given ARYearViewInfoType and assigns it to the TotalProfileYearView field.
func (o *ARProfileYearViewInfoType) SetTotalProfileYearView(v ARYearViewInfoType) {
	o.TotalProfileYearView = &v
}

func (o ARProfileYearViewInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARProfileYearViewInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Hotel) {
		toSerialize["hotel"] = o.Hotel
	}
	if !IsNil(o.TotalProfileYearView) {
		toSerialize["totalProfileYearView"] = o.TotalProfileYearView
	}
	return toSerialize, nil
}

type NullableARProfileYearViewInfoType struct {
	value *ARProfileYearViewInfoType
	isSet bool
}

func (v NullableARProfileYearViewInfoType) Get() *ARProfileYearViewInfoType {
	return v.value
}

func (v *NullableARProfileYearViewInfoType) Set(val *ARProfileYearViewInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableARProfileYearViewInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableARProfileYearViewInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARProfileYearViewInfoType(val *ARProfileYearViewInfoType) *NullableARProfileYearViewInfoType {
	return &NullableARProfileYearViewInfoType{value: val, isSet: true}
}

func (v NullableARProfileYearViewInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARProfileYearViewInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


