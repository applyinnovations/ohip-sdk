/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the PrepaidCardRedemptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrepaidCardRedemptionType{}

// PrepaidCardRedemptionType Redemption information.
type PrepaidCardRedemptionType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Prepaid card number.
	CardNo *string `json:"cardNo,omitempty"`
	InterfaceId *UniqueIDType `json:"interfaceId,omitempty"`
	// Prepaid card number.
	Pin *string `json:"pin,omitempty"`
	// Additional information regarding the redemption.
	Reference *string `json:"reference,omitempty"`
	// The associated redemption transaction code.
	TransactionCode *string `json:"transactionCode,omitempty"`
}

// NewPrepaidCardRedemptionType instantiates a new PrepaidCardRedemptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrepaidCardRedemptionType() *PrepaidCardRedemptionType {
	this := PrepaidCardRedemptionType{}
	return &this
}

// NewPrepaidCardRedemptionTypeWithDefaults instantiates a new PrepaidCardRedemptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrepaidCardRedemptionTypeWithDefaults() *PrepaidCardRedemptionType {
	this := PrepaidCardRedemptionType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *PrepaidCardRedemptionType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetCardNo returns the CardNo field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetCardNo() string {
	if o == nil || IsNil(o.CardNo) {
		var ret string
		return ret
	}
	return *o.CardNo
}

// GetCardNoOk returns a tuple with the CardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.CardNo) {
		return nil, false
	}
	return o.CardNo, true
}

// HasCardNo returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasCardNo() bool {
	if o != nil && !IsNil(o.CardNo) {
		return true
	}

	return false
}

// SetCardNo gets a reference to the given string and assigns it to the CardNo field.
func (o *PrepaidCardRedemptionType) SetCardNo(v string) {
	o.CardNo = &v
}

// GetInterfaceId returns the InterfaceId field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetInterfaceId() UniqueIDType {
	if o == nil || IsNil(o.InterfaceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InterfaceId
}

// GetInterfaceIdOk returns a tuple with the InterfaceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetInterfaceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InterfaceId) {
		return nil, false
	}
	return o.InterfaceId, true
}

// HasInterfaceId returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasInterfaceId() bool {
	if o != nil && !IsNil(o.InterfaceId) {
		return true
	}

	return false
}

// SetInterfaceId gets a reference to the given UniqueIDType and assigns it to the InterfaceId field.
func (o *PrepaidCardRedemptionType) SetInterfaceId(v UniqueIDType) {
	o.InterfaceId = &v
}

// GetPin returns the Pin field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetPin() string {
	if o == nil || IsNil(o.Pin) {
		var ret string
		return ret
	}
	return *o.Pin
}

// GetPinOk returns a tuple with the Pin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetPinOk() (*string, bool) {
	if o == nil || IsNil(o.Pin) {
		return nil, false
	}
	return o.Pin, true
}

// HasPin returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasPin() bool {
	if o != nil && !IsNil(o.Pin) {
		return true
	}

	return false
}

// SetPin gets a reference to the given string and assigns it to the Pin field.
func (o *PrepaidCardRedemptionType) SetPin(v string) {
	o.Pin = &v
}

// GetReference returns the Reference field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetReference() string {
	if o == nil || IsNil(o.Reference) {
		var ret string
		return ret
	}
	return *o.Reference
}

// GetReferenceOk returns a tuple with the Reference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.Reference) {
		return nil, false
	}
	return o.Reference, true
}

// HasReference returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasReference() bool {
	if o != nil && !IsNil(o.Reference) {
		return true
	}

	return false
}

// SetReference gets a reference to the given string and assigns it to the Reference field.
func (o *PrepaidCardRedemptionType) SetReference(v string) {
	o.Reference = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *PrepaidCardRedemptionType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardRedemptionType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *PrepaidCardRedemptionType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *PrepaidCardRedemptionType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

func (o PrepaidCardRedemptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrepaidCardRedemptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CardNo) {
		toSerialize["cardNo"] = o.CardNo
	}
	if !IsNil(o.InterfaceId) {
		toSerialize["interfaceId"] = o.InterfaceId
	}
	if !IsNil(o.Pin) {
		toSerialize["pin"] = o.Pin
	}
	if !IsNil(o.Reference) {
		toSerialize["reference"] = o.Reference
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullablePrepaidCardRedemptionType struct {
	value *PrepaidCardRedemptionType
	isSet bool
}

func (v NullablePrepaidCardRedemptionType) Get() *PrepaidCardRedemptionType {
	return v.value
}

func (v *NullablePrepaidCardRedemptionType) Set(val *PrepaidCardRedemptionType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardRedemptionType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardRedemptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardRedemptionType(val *PrepaidCardRedemptionType) *NullablePrepaidCardRedemptionType {
	return &NullablePrepaidCardRedemptionType{value: val, isSet: true}
}

func (v NullablePrepaidCardRedemptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardRedemptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


