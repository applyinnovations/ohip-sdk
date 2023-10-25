/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ConvertFolioType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConvertFolioType{}

// ConvertFolioType Criteria for Converting Folio.
type ConvertFolioType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Date of folio generation.
	FolioDate *string `json:"folioDate,omitempty"`
	// Folio number of the Folio which is going to be converted.
	FolioNo *float32 `json:"folioNo,omitempty"`
	// Folio Type of the folio(Example: Ricevuta, Fattura).
	FolioTypeName *string `json:"folioTypeName,omitempty"`
	// Hotel code where this folio was generated at.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewConvertFolioType instantiates a new ConvertFolioType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConvertFolioType() *ConvertFolioType {
	this := ConvertFolioType{}
	return &this
}

// NewConvertFolioTypeWithDefaults instantiates a new ConvertFolioType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConvertFolioTypeWithDefaults() *ConvertFolioType {
	this := ConvertFolioType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ConvertFolioType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConvertFolioType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ConvertFolioType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ConvertFolioType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetFolioDate returns the FolioDate field value if set, zero value otherwise.
func (o *ConvertFolioType) GetFolioDate() string {
	if o == nil || IsNil(o.FolioDate) {
		var ret string
		return ret
	}
	return *o.FolioDate
}

// GetFolioDateOk returns a tuple with the FolioDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConvertFolioType) GetFolioDateOk() (*string, bool) {
	if o == nil || IsNil(o.FolioDate) {
		return nil, false
	}
	return o.FolioDate, true
}

// HasFolioDate returns a boolean if a field has been set.
func (o *ConvertFolioType) HasFolioDate() bool {
	if o != nil && !IsNil(o.FolioDate) {
		return true
	}

	return false
}

// SetFolioDate gets a reference to the given string and assigns it to the FolioDate field.
func (o *ConvertFolioType) SetFolioDate(v string) {
	o.FolioDate = &v
}

// GetFolioNo returns the FolioNo field value if set, zero value otherwise.
func (o *ConvertFolioType) GetFolioNo() float32 {
	if o == nil || IsNil(o.FolioNo) {
		var ret float32
		return ret
	}
	return *o.FolioNo
}

// GetFolioNoOk returns a tuple with the FolioNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConvertFolioType) GetFolioNoOk() (*float32, bool) {
	if o == nil || IsNil(o.FolioNo) {
		return nil, false
	}
	return o.FolioNo, true
}

// HasFolioNo returns a boolean if a field has been set.
func (o *ConvertFolioType) HasFolioNo() bool {
	if o != nil && !IsNil(o.FolioNo) {
		return true
	}

	return false
}

// SetFolioNo gets a reference to the given float32 and assigns it to the FolioNo field.
func (o *ConvertFolioType) SetFolioNo(v float32) {
	o.FolioNo = &v
}

// GetFolioTypeName returns the FolioTypeName field value if set, zero value otherwise.
func (o *ConvertFolioType) GetFolioTypeName() string {
	if o == nil || IsNil(o.FolioTypeName) {
		var ret string
		return ret
	}
	return *o.FolioTypeName
}

// GetFolioTypeNameOk returns a tuple with the FolioTypeName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConvertFolioType) GetFolioTypeNameOk() (*string, bool) {
	if o == nil || IsNil(o.FolioTypeName) {
		return nil, false
	}
	return o.FolioTypeName, true
}

// HasFolioTypeName returns a boolean if a field has been set.
func (o *ConvertFolioType) HasFolioTypeName() bool {
	if o != nil && !IsNil(o.FolioTypeName) {
		return true
	}

	return false
}

// SetFolioTypeName gets a reference to the given string and assigns it to the FolioTypeName field.
func (o *ConvertFolioType) SetFolioTypeName(v string) {
	o.FolioTypeName = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConvertFolioType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConvertFolioType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConvertFolioType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConvertFolioType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o ConvertFolioType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConvertFolioType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.FolioDate) {
		toSerialize["folioDate"] = o.FolioDate
	}
	if !IsNil(o.FolioNo) {
		toSerialize["folioNo"] = o.FolioNo
	}
	if !IsNil(o.FolioTypeName) {
		toSerialize["folioTypeName"] = o.FolioTypeName
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableConvertFolioType struct {
	value *ConvertFolioType
	isSet bool
}

func (v NullableConvertFolioType) Get() *ConvertFolioType {
	return v.value
}

func (v *NullableConvertFolioType) Set(val *ConvertFolioType) {
	v.value = val
	v.isSet = true
}

func (v NullableConvertFolioType) IsSet() bool {
	return v.isSet
}

func (v *NullableConvertFolioType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConvertFolioType(val *ConvertFolioType) *NullableConvertFolioType {
	return &NullableConvertFolioType{value: val, isSet: true}
}

func (v NullableConvertFolioType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConvertFolioType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


