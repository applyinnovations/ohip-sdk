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

// checks if the CashierClosureAmountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierClosureAmountType{}

// CashierClosureAmountType Cashier Opening Balance and Shift Amounts type.
type CashierClosureAmountType struct {
	// Actual Cashier shift amount.
	ActualShiftBalance *float32 `json:"actualShiftBalance,omitempty"`
	// Expected Cashier shift amount.
	ExpectedShiftBalance *float32 `json:"expectedShiftBalance,omitempty"`
	// Cashier shift amounts type.
	OpeningBalance *float32 `json:"openingBalance,omitempty"`
	// Paid Out amount.
	PaidOut *float32 `json:"paidOut,omitempty"`
	// Receviced amount.
	Received *float32 `json:"received,omitempty"`
}

// NewCashierClosureAmountType instantiates a new CashierClosureAmountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierClosureAmountType() *CashierClosureAmountType {
	this := CashierClosureAmountType{}
	return &this
}

// NewCashierClosureAmountTypeWithDefaults instantiates a new CashierClosureAmountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierClosureAmountTypeWithDefaults() *CashierClosureAmountType {
	this := CashierClosureAmountType{}
	return &this
}

// GetActualShiftBalance returns the ActualShiftBalance field value if set, zero value otherwise.
func (o *CashierClosureAmountType) GetActualShiftBalance() float32 {
	if o == nil || IsNil(o.ActualShiftBalance) {
		var ret float32
		return ret
	}
	return *o.ActualShiftBalance
}

// GetActualShiftBalanceOk returns a tuple with the ActualShiftBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureAmountType) GetActualShiftBalanceOk() (*float32, bool) {
	if o == nil || IsNil(o.ActualShiftBalance) {
		return nil, false
	}
	return o.ActualShiftBalance, true
}

// HasActualShiftBalance returns a boolean if a field has been set.
func (o *CashierClosureAmountType) HasActualShiftBalance() bool {
	if o != nil && !IsNil(o.ActualShiftBalance) {
		return true
	}

	return false
}

// SetActualShiftBalance gets a reference to the given float32 and assigns it to the ActualShiftBalance field.
func (o *CashierClosureAmountType) SetActualShiftBalance(v float32) {
	o.ActualShiftBalance = &v
}

// GetExpectedShiftBalance returns the ExpectedShiftBalance field value if set, zero value otherwise.
func (o *CashierClosureAmountType) GetExpectedShiftBalance() float32 {
	if o == nil || IsNil(o.ExpectedShiftBalance) {
		var ret float32
		return ret
	}
	return *o.ExpectedShiftBalance
}

// GetExpectedShiftBalanceOk returns a tuple with the ExpectedShiftBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureAmountType) GetExpectedShiftBalanceOk() (*float32, bool) {
	if o == nil || IsNil(o.ExpectedShiftBalance) {
		return nil, false
	}
	return o.ExpectedShiftBalance, true
}

// HasExpectedShiftBalance returns a boolean if a field has been set.
func (o *CashierClosureAmountType) HasExpectedShiftBalance() bool {
	if o != nil && !IsNil(o.ExpectedShiftBalance) {
		return true
	}

	return false
}

// SetExpectedShiftBalance gets a reference to the given float32 and assigns it to the ExpectedShiftBalance field.
func (o *CashierClosureAmountType) SetExpectedShiftBalance(v float32) {
	o.ExpectedShiftBalance = &v
}

// GetOpeningBalance returns the OpeningBalance field value if set, zero value otherwise.
func (o *CashierClosureAmountType) GetOpeningBalance() float32 {
	if o == nil || IsNil(o.OpeningBalance) {
		var ret float32
		return ret
	}
	return *o.OpeningBalance
}

// GetOpeningBalanceOk returns a tuple with the OpeningBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureAmountType) GetOpeningBalanceOk() (*float32, bool) {
	if o == nil || IsNil(o.OpeningBalance) {
		return nil, false
	}
	return o.OpeningBalance, true
}

// HasOpeningBalance returns a boolean if a field has been set.
func (o *CashierClosureAmountType) HasOpeningBalance() bool {
	if o != nil && !IsNil(o.OpeningBalance) {
		return true
	}

	return false
}

// SetOpeningBalance gets a reference to the given float32 and assigns it to the OpeningBalance field.
func (o *CashierClosureAmountType) SetOpeningBalance(v float32) {
	o.OpeningBalance = &v
}

// GetPaidOut returns the PaidOut field value if set, zero value otherwise.
func (o *CashierClosureAmountType) GetPaidOut() float32 {
	if o == nil || IsNil(o.PaidOut) {
		var ret float32
		return ret
	}
	return *o.PaidOut
}

// GetPaidOutOk returns a tuple with the PaidOut field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureAmountType) GetPaidOutOk() (*float32, bool) {
	if o == nil || IsNil(o.PaidOut) {
		return nil, false
	}
	return o.PaidOut, true
}

// HasPaidOut returns a boolean if a field has been set.
func (o *CashierClosureAmountType) HasPaidOut() bool {
	if o != nil && !IsNil(o.PaidOut) {
		return true
	}

	return false
}

// SetPaidOut gets a reference to the given float32 and assigns it to the PaidOut field.
func (o *CashierClosureAmountType) SetPaidOut(v float32) {
	o.PaidOut = &v
}

// GetReceived returns the Received field value if set, zero value otherwise.
func (o *CashierClosureAmountType) GetReceived() float32 {
	if o == nil || IsNil(o.Received) {
		var ret float32
		return ret
	}
	return *o.Received
}

// GetReceivedOk returns a tuple with the Received field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierClosureAmountType) GetReceivedOk() (*float32, bool) {
	if o == nil || IsNil(o.Received) {
		return nil, false
	}
	return o.Received, true
}

// HasReceived returns a boolean if a field has been set.
func (o *CashierClosureAmountType) HasReceived() bool {
	if o != nil && !IsNil(o.Received) {
		return true
	}

	return false
}

// SetReceived gets a reference to the given float32 and assigns it to the Received field.
func (o *CashierClosureAmountType) SetReceived(v float32) {
	o.Received = &v
}

func (o CashierClosureAmountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierClosureAmountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActualShiftBalance) {
		toSerialize["actualShiftBalance"] = o.ActualShiftBalance
	}
	if !IsNil(o.ExpectedShiftBalance) {
		toSerialize["expectedShiftBalance"] = o.ExpectedShiftBalance
	}
	if !IsNil(o.OpeningBalance) {
		toSerialize["openingBalance"] = o.OpeningBalance
	}
	if !IsNil(o.PaidOut) {
		toSerialize["paidOut"] = o.PaidOut
	}
	if !IsNil(o.Received) {
		toSerialize["received"] = o.Received
	}
	return toSerialize, nil
}

type NullableCashierClosureAmountType struct {
	value *CashierClosureAmountType
	isSet bool
}

func (v NullableCashierClosureAmountType) Get() *CashierClosureAmountType {
	return v.value
}

func (v *NullableCashierClosureAmountType) Set(val *CashierClosureAmountType) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierClosureAmountType) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierClosureAmountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierClosureAmountType(val *CashierClosureAmountType) *NullableCashierClosureAmountType {
	return &NullableCashierClosureAmountType{value: val, isSet: true}
}

func (v NullableCashierClosureAmountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierClosureAmountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


