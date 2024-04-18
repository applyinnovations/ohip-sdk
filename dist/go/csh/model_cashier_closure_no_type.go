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

// checks if the CashierClosureNoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierClosureNoType{}

// CashierClosureNoType Type used in cashier closure to specify a cashier's shift.
type CashierClosureNoType struct {
	// Cashier closure shift drop cash payment method type bag number.
	BagNumberForCash *string `json:"bagNumberForCash,omitempty"`
	// Cashier closure shift drop others payment method type bag number.
	BagNumberForOthers *string `json:"bagNumberForOthers,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// The Cashier Shift Number.
	ClosureNo *float32 `json:"closureNo,omitempty"`
	// Cashier closure shift drop location code.
	ShiftDropLocationCode *string `json:"shiftDropLocationCode,omitempty"`
}

// NewCashierClosureNoType instantiates a new CashierClosureNoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierClosureNoType() *CashierClosureNoType {
	this := CashierClosureNoType{}
	return &this
}

// NewCashierClosureNoTypeWithDefaults instantiates a new CashierClosureNoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierClosureNoTypeWithDefaults() *CashierClosureNoType {
	this := CashierClosureNoType{}
	return &this
}

// GetBagNumberForCash returns the BagNumberForCash field value if set, zero value otherwise.
func (o *CashierClosureNoType) GetBagNumberForCash() string {
	if o == nil || IsNil(o.BagNumberForCash) {
		var ret string
		return ret
	}
	return *o.BagNumberForCash
}

// GetBagNumberForCashOk returns a tuple with the BagNumberForCash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureNoType) GetBagNumberForCashOk() (*string, bool) {
	if o == nil || IsNil(o.BagNumberForCash) {
		return nil, false
	}
	return o.BagNumberForCash, true
}

// HasBagNumberForCash returns a boolean if a field has been set.
func (o *CashierClosureNoType) HasBagNumberForCash() bool {
	if o != nil && !IsNil(o.BagNumberForCash) {
		return true
	}

	return false
}

// SetBagNumberForCash gets a reference to the given string and assigns it to the BagNumberForCash field.
func (o *CashierClosureNoType) SetBagNumberForCash(v string) {
	o.BagNumberForCash = &v
}

// GetBagNumberForOthers returns the BagNumberForOthers field value if set, zero value otherwise.
func (o *CashierClosureNoType) GetBagNumberForOthers() string {
	if o == nil || IsNil(o.BagNumberForOthers) {
		var ret string
		return ret
	}
	return *o.BagNumberForOthers
}

// GetBagNumberForOthersOk returns a tuple with the BagNumberForOthers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureNoType) GetBagNumberForOthersOk() (*string, bool) {
	if o == nil || IsNil(o.BagNumberForOthers) {
		return nil, false
	}
	return o.BagNumberForOthers, true
}

// HasBagNumberForOthers returns a boolean if a field has been set.
func (o *CashierClosureNoType) HasBagNumberForOthers() bool {
	if o != nil && !IsNil(o.BagNumberForOthers) {
		return true
	}

	return false
}

// SetBagNumberForOthers gets a reference to the given string and assigns it to the BagNumberForOthers field.
func (o *CashierClosureNoType) SetBagNumberForOthers(v string) {
	o.BagNumberForOthers = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *CashierClosureNoType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureNoType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *CashierClosureNoType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *CashierClosureNoType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetClosureNo returns the ClosureNo field value if set, zero value otherwise.
func (o *CashierClosureNoType) GetClosureNo() float32 {
	if o == nil || IsNil(o.ClosureNo) {
		var ret float32
		return ret
	}
	return *o.ClosureNo
}

// GetClosureNoOk returns a tuple with the ClosureNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureNoType) GetClosureNoOk() (*float32, bool) {
	if o == nil || IsNil(o.ClosureNo) {
		return nil, false
	}
	return o.ClosureNo, true
}

// HasClosureNo returns a boolean if a field has been set.
func (o *CashierClosureNoType) HasClosureNo() bool {
	if o != nil && !IsNil(o.ClosureNo) {
		return true
	}

	return false
}

// SetClosureNo gets a reference to the given float32 and assigns it to the ClosureNo field.
func (o *CashierClosureNoType) SetClosureNo(v float32) {
	o.ClosureNo = &v
}

// GetShiftDropLocationCode returns the ShiftDropLocationCode field value if set, zero value otherwise.
func (o *CashierClosureNoType) GetShiftDropLocationCode() string {
	if o == nil || IsNil(o.ShiftDropLocationCode) {
		var ret string
		return ret
	}
	return *o.ShiftDropLocationCode
}

// GetShiftDropLocationCodeOk returns a tuple with the ShiftDropLocationCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureNoType) GetShiftDropLocationCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ShiftDropLocationCode) {
		return nil, false
	}
	return o.ShiftDropLocationCode, true
}

// HasShiftDropLocationCode returns a boolean if a field has been set.
func (o *CashierClosureNoType) HasShiftDropLocationCode() bool {
	if o != nil && !IsNil(o.ShiftDropLocationCode) {
		return true
	}

	return false
}

// SetShiftDropLocationCode gets a reference to the given string and assigns it to the ShiftDropLocationCode field.
func (o *CashierClosureNoType) SetShiftDropLocationCode(v string) {
	o.ShiftDropLocationCode = &v
}

func (o CashierClosureNoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierClosureNoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BagNumberForCash) {
		toSerialize["bagNumberForCash"] = o.BagNumberForCash
	}
	if !IsNil(o.BagNumberForOthers) {
		toSerialize["bagNumberForOthers"] = o.BagNumberForOthers
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.ClosureNo) {
		toSerialize["closureNo"] = o.ClosureNo
	}
	if !IsNil(o.ShiftDropLocationCode) {
		toSerialize["shiftDropLocationCode"] = o.ShiftDropLocationCode
	}
	return toSerialize, nil
}

type NullableCashierClosureNoType struct {
	value *CashierClosureNoType
	isSet bool
}

func (v NullableCashierClosureNoType) Get() *CashierClosureNoType {
	return v.value
}

func (v *NullableCashierClosureNoType) Set(val *CashierClosureNoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierClosureNoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierClosureNoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierClosureNoType(val *CashierClosureNoType) *NullableCashierClosureNoType {
	return &NullableCashierClosureNoType{value: val, isSet: true}
}

func (v NullableCashierClosureNoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierClosureNoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

