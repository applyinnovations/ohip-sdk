/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HotelInfoTypePropertyControlsCurrencyFormatting type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInfoTypePropertyControlsCurrencyFormatting{}

// HotelInfoTypePropertyControlsCurrencyFormatting Currency Formatting information configuration of the hotel.
type HotelInfoTypePropertyControlsCurrencyFormatting struct {
	// The base currency code for this hotel..
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Format for the local currency.
	CurrencyFormat *string `json:"currencyFormat,omitempty"`
	// Symbol to designate the default currency of the hotel.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Number of decimal positions used for this currency type.
	DecimalPositions *int32 `json:"decimalPositions,omitempty"`
}

// NewHotelInfoTypePropertyControlsCurrencyFormatting instantiates a new HotelInfoTypePropertyControlsCurrencyFormatting object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInfoTypePropertyControlsCurrencyFormatting() *HotelInfoTypePropertyControlsCurrencyFormatting {
	this := HotelInfoTypePropertyControlsCurrencyFormatting{}
	return &this
}

// NewHotelInfoTypePropertyControlsCurrencyFormattingWithDefaults instantiates a new HotelInfoTypePropertyControlsCurrencyFormatting object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInfoTypePropertyControlsCurrencyFormattingWithDefaults() *HotelInfoTypePropertyControlsCurrencyFormatting {
	this := HotelInfoTypePropertyControlsCurrencyFormatting{}
	return &this
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencyFormat returns the CurrencyFormat field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencyFormat() string {
	if o == nil || IsNil(o.CurrencyFormat) {
		var ret string
		return ret
	}
	return *o.CurrencyFormat
}

// GetCurrencyFormatOk returns a tuple with the CurrencyFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencyFormatOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyFormat) {
		return nil, false
	}
	return o.CurrencyFormat, true
}

// HasCurrencyFormat returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) HasCurrencyFormat() bool {
	if o != nil && !IsNil(o.CurrencyFormat) {
		return true
	}

	return false
}

// SetCurrencyFormat gets a reference to the given string and assigns it to the CurrencyFormat field.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) SetCurrencyFormat(v string) {
	o.CurrencyFormat = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPositions returns the DecimalPositions field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetDecimalPositions() int32 {
	if o == nil || IsNil(o.DecimalPositions) {
		var ret int32
		return ret
	}
	return *o.DecimalPositions
}

// GetDecimalPositionsOk returns a tuple with the DecimalPositions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) GetDecimalPositionsOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPositions) {
		return nil, false
	}
	return o.DecimalPositions, true
}

// HasDecimalPositions returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) HasDecimalPositions() bool {
	if o != nil && !IsNil(o.DecimalPositions) {
		return true
	}

	return false
}

// SetDecimalPositions gets a reference to the given int32 and assigns it to the DecimalPositions field.
func (o *HotelInfoTypePropertyControlsCurrencyFormatting) SetDecimalPositions(v int32) {
	o.DecimalPositions = &v
}

func (o HotelInfoTypePropertyControlsCurrencyFormatting) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInfoTypePropertyControlsCurrencyFormatting) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CurrencyFormat) {
		toSerialize["currencyFormat"] = o.CurrencyFormat
	}
	if !IsNil(o.CurrencySymbol) {
		toSerialize["currencySymbol"] = o.CurrencySymbol
	}
	if !IsNil(o.DecimalPositions) {
		toSerialize["decimalPositions"] = o.DecimalPositions
	}
	return toSerialize, nil
}

type NullableHotelInfoTypePropertyControlsCurrencyFormatting struct {
	value *HotelInfoTypePropertyControlsCurrencyFormatting
	isSet bool
}

func (v NullableHotelInfoTypePropertyControlsCurrencyFormatting) Get() *HotelInfoTypePropertyControlsCurrencyFormatting {
	return v.value
}

func (v *NullableHotelInfoTypePropertyControlsCurrencyFormatting) Set(val *HotelInfoTypePropertyControlsCurrencyFormatting) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInfoTypePropertyControlsCurrencyFormatting) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInfoTypePropertyControlsCurrencyFormatting) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInfoTypePropertyControlsCurrencyFormatting(val *HotelInfoTypePropertyControlsCurrencyFormatting) *NullableHotelInfoTypePropertyControlsCurrencyFormatting {
	return &NullableHotelInfoTypePropertyControlsCurrencyFormatting{value: val, isSet: true}
}

func (v NullableHotelInfoTypePropertyControlsCurrencyFormatting) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInfoTypePropertyControlsCurrencyFormatting) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


