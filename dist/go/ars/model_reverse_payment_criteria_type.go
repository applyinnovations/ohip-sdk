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

// checks if the ReversePaymentCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReversePaymentCriteriaType{}

// ReversePaymentCriteriaType Criteria type for an AR Account.
type ReversePaymentCriteriaType struct {
	AccountId *UniqueIDType `json:"accountId,omitempty"`
	// Account Name for the AR Account.
	AccountName *string `json:"accountName,omitempty"`
	// Account Number for the AR Account.
	AccountNo *string `json:"accountNo,omitempty"`
	// Property where the AR Account exists. This is required.
	HotelId *string `json:"hotelId,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	TransactionNo *float32 `json:"transactionNo,omitempty"`
}

// NewReversePaymentCriteriaType instantiates a new ReversePaymentCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReversePaymentCriteriaType() *ReversePaymentCriteriaType {
	this := ReversePaymentCriteriaType{}
	return &this
}

// NewReversePaymentCriteriaTypeWithDefaults instantiates a new ReversePaymentCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReversePaymentCriteriaTypeWithDefaults() *ReversePaymentCriteriaType {
	this := ReversePaymentCriteriaType{}
	return &this
}

// GetAccountId returns the AccountId field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetAccountId() UniqueIDType {
	if o == nil || IsNil(o.AccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AccountId
}

// GetAccountIdOk returns a tuple with the AccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AccountId) {
		return nil, false
	}
	return o.AccountId, true
}

// HasAccountId returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasAccountId() bool {
	if o != nil && !IsNil(o.AccountId) {
		return true
	}

	return false
}

// SetAccountId gets a reference to the given UniqueIDType and assigns it to the AccountId field.
func (o *ReversePaymentCriteriaType) SetAccountId(v UniqueIDType) {
	o.AccountId = &v
}

// GetAccountName returns the AccountName field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetAccountName() string {
	if o == nil || IsNil(o.AccountName) {
		var ret string
		return ret
	}
	return *o.AccountName
}

// GetAccountNameOk returns a tuple with the AccountName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetAccountNameOk() (*string, bool) {
	if o == nil || IsNil(o.AccountName) {
		return nil, false
	}
	return o.AccountName, true
}

// HasAccountName returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasAccountName() bool {
	if o != nil && !IsNil(o.AccountName) {
		return true
	}

	return false
}

// SetAccountName gets a reference to the given string and assigns it to the AccountName field.
func (o *ReversePaymentCriteriaType) SetAccountName(v string) {
	o.AccountName = &v
}

// GetAccountNo returns the AccountNo field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetAccountNo() string {
	if o == nil || IsNil(o.AccountNo) {
		var ret string
		return ret
	}
	return *o.AccountNo
}

// GetAccountNoOk returns a tuple with the AccountNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetAccountNoOk() (*string, bool) {
	if o == nil || IsNil(o.AccountNo) {
		return nil, false
	}
	return o.AccountNo, true
}

// HasAccountNo returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasAccountNo() bool {
	if o != nil && !IsNil(o.AccountNo) {
		return true
	}

	return false
}

// SetAccountNo gets a reference to the given string and assigns it to the AccountNo field.
func (o *ReversePaymentCriteriaType) SetAccountNo(v string) {
	o.AccountNo = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReversePaymentCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ReversePaymentCriteriaType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetTransactionNo returns the TransactionNo field value if set, zero value otherwise.
func (o *ReversePaymentCriteriaType) GetTransactionNo() float32 {
	if o == nil || IsNil(o.TransactionNo) {
		var ret float32
		return ret
	}
	return *o.TransactionNo
}

// GetTransactionNoOk returns a tuple with the TransactionNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReversePaymentCriteriaType) GetTransactionNoOk() (*float32, bool) {
	if o == nil || IsNil(o.TransactionNo) {
		return nil, false
	}
	return o.TransactionNo, true
}

// HasTransactionNo returns a boolean if a field has been set.
func (o *ReversePaymentCriteriaType) HasTransactionNo() bool {
	if o != nil && !IsNil(o.TransactionNo) {
		return true
	}

	return false
}

// SetTransactionNo gets a reference to the given float32 and assigns it to the TransactionNo field.
func (o *ReversePaymentCriteriaType) SetTransactionNo(v float32) {
	o.TransactionNo = &v
}

func (o ReversePaymentCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReversePaymentCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountId) {
		toSerialize["accountId"] = o.AccountId
	}
	if !IsNil(o.AccountName) {
		toSerialize["accountName"] = o.AccountName
	}
	if !IsNil(o.AccountNo) {
		toSerialize["accountNo"] = o.AccountNo
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.TransactionNo) {
		toSerialize["transactionNo"] = o.TransactionNo
	}
	return toSerialize, nil
}

type NullableReversePaymentCriteriaType struct {
	value *ReversePaymentCriteriaType
	isSet bool
}

func (v NullableReversePaymentCriteriaType) Get() *ReversePaymentCriteriaType {
	return v.value
}

func (v *NullableReversePaymentCriteriaType) Set(val *ReversePaymentCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableReversePaymentCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableReversePaymentCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReversePaymentCriteriaType(val *ReversePaymentCriteriaType) *NullableReversePaymentCriteriaType {
	return &NullableReversePaymentCriteriaType{value: val, isSet: true}
}

func (v NullableReversePaymentCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReversePaymentCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


