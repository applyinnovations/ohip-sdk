/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ChangePayeeTaxNumberCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangePayeeTaxNumberCriteriaType{}

// ChangePayeeTaxNumberCriteriaType Criteria to validate and change payee tax number.
type ChangePayeeTaxNumberCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	// Flag to ignore warnings while updating a payee folio tax number.
	IgnoreWarnings *bool `json:"ignoreWarnings,omitempty"`
	PayeeId *UniqueIDType `json:"payeeId,omitempty"`
	// Payee Tax Number.
	TaxNumber *string `json:"taxNumber,omitempty"`
}

// NewChangePayeeTaxNumberCriteriaType instantiates a new ChangePayeeTaxNumberCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangePayeeTaxNumberCriteriaType() *ChangePayeeTaxNumberCriteriaType {
	this := ChangePayeeTaxNumberCriteriaType{}
	return &this
}

// NewChangePayeeTaxNumberCriteriaTypeWithDefaults instantiates a new ChangePayeeTaxNumberCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangePayeeTaxNumberCriteriaTypeWithDefaults() *ChangePayeeTaxNumberCriteriaType {
	this := ChangePayeeTaxNumberCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ChangePayeeTaxNumberCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangePayeeTaxNumberCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ChangePayeeTaxNumberCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ChangePayeeTaxNumberCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ChangePayeeTaxNumberCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangePayeeTaxNumberCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ChangePayeeTaxNumberCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ChangePayeeTaxNumberCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIgnoreWarnings returns the IgnoreWarnings field value if set, zero value otherwise.
func (o *ChangePayeeTaxNumberCriteriaType) GetIgnoreWarnings() bool {
	if o == nil || IsNil(o.IgnoreWarnings) {
		var ret bool
		return ret
	}
	return *o.IgnoreWarnings
}

// GetIgnoreWarningsOk returns a tuple with the IgnoreWarnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangePayeeTaxNumberCriteriaType) GetIgnoreWarningsOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreWarnings) {
		return nil, false
	}
	return o.IgnoreWarnings, true
}

// HasIgnoreWarnings returns a boolean if a field has been set.
func (o *ChangePayeeTaxNumberCriteriaType) HasIgnoreWarnings() bool {
	if o != nil && !IsNil(o.IgnoreWarnings) {
		return true
	}

	return false
}

// SetIgnoreWarnings gets a reference to the given bool and assigns it to the IgnoreWarnings field.
func (o *ChangePayeeTaxNumberCriteriaType) SetIgnoreWarnings(v bool) {
	o.IgnoreWarnings = &v
}

// GetPayeeId returns the PayeeId field value if set, zero value otherwise.
func (o *ChangePayeeTaxNumberCriteriaType) GetPayeeId() UniqueIDType {
	if o == nil || IsNil(o.PayeeId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PayeeId
}

// GetPayeeIdOk returns a tuple with the PayeeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangePayeeTaxNumberCriteriaType) GetPayeeIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PayeeId) {
		return nil, false
	}
	return o.PayeeId, true
}

// HasPayeeId returns a boolean if a field has been set.
func (o *ChangePayeeTaxNumberCriteriaType) HasPayeeId() bool {
	if o != nil && !IsNil(o.PayeeId) {
		return true
	}

	return false
}

// SetPayeeId gets a reference to the given UniqueIDType and assigns it to the PayeeId field.
func (o *ChangePayeeTaxNumberCriteriaType) SetPayeeId(v UniqueIDType) {
	o.PayeeId = &v
}

// GetTaxNumber returns the TaxNumber field value if set, zero value otherwise.
func (o *ChangePayeeTaxNumberCriteriaType) GetTaxNumber() string {
	if o == nil || IsNil(o.TaxNumber) {
		var ret string
		return ret
	}
	return *o.TaxNumber
}

// GetTaxNumberOk returns a tuple with the TaxNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangePayeeTaxNumberCriteriaType) GetTaxNumberOk() (*string, bool) {
	if o == nil || IsNil(o.TaxNumber) {
		return nil, false
	}
	return o.TaxNumber, true
}

// HasTaxNumber returns a boolean if a field has been set.
func (o *ChangePayeeTaxNumberCriteriaType) HasTaxNumber() bool {
	if o != nil && !IsNil(o.TaxNumber) {
		return true
	}

	return false
}

// SetTaxNumber gets a reference to the given string and assigns it to the TaxNumber field.
func (o *ChangePayeeTaxNumberCriteriaType) SetTaxNumber(v string) {
	o.TaxNumber = &v
}

func (o ChangePayeeTaxNumberCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangePayeeTaxNumberCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IgnoreWarnings) {
		toSerialize["ignoreWarnings"] = o.IgnoreWarnings
	}
	if !IsNil(o.PayeeId) {
		toSerialize["payeeId"] = o.PayeeId
	}
	if !IsNil(o.TaxNumber) {
		toSerialize["taxNumber"] = o.TaxNumber
	}
	return toSerialize, nil
}

type NullableChangePayeeTaxNumberCriteriaType struct {
	value *ChangePayeeTaxNumberCriteriaType
	isSet bool
}

func (v NullableChangePayeeTaxNumberCriteriaType) Get() *ChangePayeeTaxNumberCriteriaType {
	return v.value
}

func (v *NullableChangePayeeTaxNumberCriteriaType) Set(val *ChangePayeeTaxNumberCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableChangePayeeTaxNumberCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableChangePayeeTaxNumberCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangePayeeTaxNumberCriteriaType(val *ChangePayeeTaxNumberCriteriaType) *NullableChangePayeeTaxNumberCriteriaType {
	return &NullableChangePayeeTaxNumberCriteriaType{value: val, isSet: true}
}

func (v NullableChangePayeeTaxNumberCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangePayeeTaxNumberCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

