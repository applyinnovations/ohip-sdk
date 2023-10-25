/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the BankAccountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BankAccountType{}

// BankAccountType Bank account information like Account ID, Bank Name, Currency, etc.
type BankAccountType struct {
	// Property of the bank account.
	HotelId *string `json:"hotelId,omitempty"`
	BankAccountId *UniqueIDType `json:"bankAccountId,omitempty"`
	// Account number at the bank.
	BankAccountNo *string `json:"bankAccountNo,omitempty"`
	// Unique code of the bank account.
	BankCode *string `json:"bankCode,omitempty"`
	// Code for the branch of the bank.
	BranchCode *string `json:"branchCode,omitempty"`
	// Name of the bank account.
	BankName *string `json:"bankName,omitempty"`
	PaymentMethod *CommissionPaymentMethodType `json:"paymentMethod,omitempty"`
	// Type of format for Payment Method.
	CheckFormat *string `json:"checkFormat,omitempty"`
	Currency *CodeDescriptionType `json:"currency,omitempty"`
	// Current check no of the bank account.
	CurrentCheckNo *float32 `json:"currentCheckNo,omitempty"`
	// Property name of the bank account.
	HotelName *string `json:"hotelName,omitempty"`
	// Whether this bank account is to be the default in case no bank account is associated with the travel agent or source.
	Default *bool `json:"default,omitempty"`
	// Whether this bank account is associated with the travel agent or source.
	LinkedToProfile *bool `json:"linkedToProfile,omitempty"`
}

// NewBankAccountType instantiates a new BankAccountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBankAccountType() *BankAccountType {
	this := BankAccountType{}
	return &this
}

// NewBankAccountTypeWithDefaults instantiates a new BankAccountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBankAccountTypeWithDefaults() *BankAccountType {
	this := BankAccountType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BankAccountType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BankAccountType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BankAccountType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetBankAccountId returns the BankAccountId field value if set, zero value otherwise.
func (o *BankAccountType) GetBankAccountId() UniqueIDType {
	if o == nil || IsNil(o.BankAccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BankAccountId
}

// GetBankAccountIdOk returns a tuple with the BankAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetBankAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BankAccountId) {
		return nil, false
	}
	return o.BankAccountId, true
}

// HasBankAccountId returns a boolean if a field has been set.
func (o *BankAccountType) HasBankAccountId() bool {
	if o != nil && !IsNil(o.BankAccountId) {
		return true
	}

	return false
}

// SetBankAccountId gets a reference to the given UniqueIDType and assigns it to the BankAccountId field.
func (o *BankAccountType) SetBankAccountId(v UniqueIDType) {
	o.BankAccountId = &v
}

// GetBankAccountNo returns the BankAccountNo field value if set, zero value otherwise.
func (o *BankAccountType) GetBankAccountNo() string {
	if o == nil || IsNil(o.BankAccountNo) {
		var ret string
		return ret
	}
	return *o.BankAccountNo
}

// GetBankAccountNoOk returns a tuple with the BankAccountNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetBankAccountNoOk() (*string, bool) {
	if o == nil || IsNil(o.BankAccountNo) {
		return nil, false
	}
	return o.BankAccountNo, true
}

// HasBankAccountNo returns a boolean if a field has been set.
func (o *BankAccountType) HasBankAccountNo() bool {
	if o != nil && !IsNil(o.BankAccountNo) {
		return true
	}

	return false
}

// SetBankAccountNo gets a reference to the given string and assigns it to the BankAccountNo field.
func (o *BankAccountType) SetBankAccountNo(v string) {
	o.BankAccountNo = &v
}

// GetBankCode returns the BankCode field value if set, zero value otherwise.
func (o *BankAccountType) GetBankCode() string {
	if o == nil || IsNil(o.BankCode) {
		var ret string
		return ret
	}
	return *o.BankCode
}

// GetBankCodeOk returns a tuple with the BankCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetBankCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BankCode) {
		return nil, false
	}
	return o.BankCode, true
}

// HasBankCode returns a boolean if a field has been set.
func (o *BankAccountType) HasBankCode() bool {
	if o != nil && !IsNil(o.BankCode) {
		return true
	}

	return false
}

// SetBankCode gets a reference to the given string and assigns it to the BankCode field.
func (o *BankAccountType) SetBankCode(v string) {
	o.BankCode = &v
}

// GetBranchCode returns the BranchCode field value if set, zero value otherwise.
func (o *BankAccountType) GetBranchCode() string {
	if o == nil || IsNil(o.BranchCode) {
		var ret string
		return ret
	}
	return *o.BranchCode
}

// GetBranchCodeOk returns a tuple with the BranchCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetBranchCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BranchCode) {
		return nil, false
	}
	return o.BranchCode, true
}

// HasBranchCode returns a boolean if a field has been set.
func (o *BankAccountType) HasBranchCode() bool {
	if o != nil && !IsNil(o.BranchCode) {
		return true
	}

	return false
}

// SetBranchCode gets a reference to the given string and assigns it to the BranchCode field.
func (o *BankAccountType) SetBranchCode(v string) {
	o.BranchCode = &v
}

// GetBankName returns the BankName field value if set, zero value otherwise.
func (o *BankAccountType) GetBankName() string {
	if o == nil || IsNil(o.BankName) {
		var ret string
		return ret
	}
	return *o.BankName
}

// GetBankNameOk returns a tuple with the BankName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetBankNameOk() (*string, bool) {
	if o == nil || IsNil(o.BankName) {
		return nil, false
	}
	return o.BankName, true
}

// HasBankName returns a boolean if a field has been set.
func (o *BankAccountType) HasBankName() bool {
	if o != nil && !IsNil(o.BankName) {
		return true
	}

	return false
}

// SetBankName gets a reference to the given string and assigns it to the BankName field.
func (o *BankAccountType) SetBankName(v string) {
	o.BankName = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *BankAccountType) GetPaymentMethod() CommissionPaymentMethodType {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret CommissionPaymentMethodType
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetPaymentMethodOk() (*CommissionPaymentMethodType, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *BankAccountType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given CommissionPaymentMethodType and assigns it to the PaymentMethod field.
func (o *BankAccountType) SetPaymentMethod(v CommissionPaymentMethodType) {
	o.PaymentMethod = &v
}

// GetCheckFormat returns the CheckFormat field value if set, zero value otherwise.
func (o *BankAccountType) GetCheckFormat() string {
	if o == nil || IsNil(o.CheckFormat) {
		var ret string
		return ret
	}
	return *o.CheckFormat
}

// GetCheckFormatOk returns a tuple with the CheckFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetCheckFormatOk() (*string, bool) {
	if o == nil || IsNil(o.CheckFormat) {
		return nil, false
	}
	return o.CheckFormat, true
}

// HasCheckFormat returns a boolean if a field has been set.
func (o *BankAccountType) HasCheckFormat() bool {
	if o != nil && !IsNil(o.CheckFormat) {
		return true
	}

	return false
}

// SetCheckFormat gets a reference to the given string and assigns it to the CheckFormat field.
func (o *BankAccountType) SetCheckFormat(v string) {
	o.CheckFormat = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *BankAccountType) GetCurrency() CodeDescriptionType {
	if o == nil || IsNil(o.Currency) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetCurrencyOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *BankAccountType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given CodeDescriptionType and assigns it to the Currency field.
func (o *BankAccountType) SetCurrency(v CodeDescriptionType) {
	o.Currency = &v
}

// GetCurrentCheckNo returns the CurrentCheckNo field value if set, zero value otherwise.
func (o *BankAccountType) GetCurrentCheckNo() float32 {
	if o == nil || IsNil(o.CurrentCheckNo) {
		var ret float32
		return ret
	}
	return *o.CurrentCheckNo
}

// GetCurrentCheckNoOk returns a tuple with the CurrentCheckNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetCurrentCheckNoOk() (*float32, bool) {
	if o == nil || IsNil(o.CurrentCheckNo) {
		return nil, false
	}
	return o.CurrentCheckNo, true
}

// HasCurrentCheckNo returns a boolean if a field has been set.
func (o *BankAccountType) HasCurrentCheckNo() bool {
	if o != nil && !IsNil(o.CurrentCheckNo) {
		return true
	}

	return false
}

// SetCurrentCheckNo gets a reference to the given float32 and assigns it to the CurrentCheckNo field.
func (o *BankAccountType) SetCurrentCheckNo(v float32) {
	o.CurrentCheckNo = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *BankAccountType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *BankAccountType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *BankAccountType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetDefault returns the Default field value if set, zero value otherwise.
func (o *BankAccountType) GetDefault() bool {
	if o == nil || IsNil(o.Default) {
		var ret bool
		return ret
	}
	return *o.Default
}

// GetDefaultOk returns a tuple with the Default field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetDefaultOk() (*bool, bool) {
	if o == nil || IsNil(o.Default) {
		return nil, false
	}
	return o.Default, true
}

// HasDefault returns a boolean if a field has been set.
func (o *BankAccountType) HasDefault() bool {
	if o != nil && !IsNil(o.Default) {
		return true
	}

	return false
}

// SetDefault gets a reference to the given bool and assigns it to the Default field.
func (o *BankAccountType) SetDefault(v bool) {
	o.Default = &v
}

// GetLinkedToProfile returns the LinkedToProfile field value if set, zero value otherwise.
func (o *BankAccountType) GetLinkedToProfile() bool {
	if o == nil || IsNil(o.LinkedToProfile) {
		var ret bool
		return ret
	}
	return *o.LinkedToProfile
}

// GetLinkedToProfileOk returns a tuple with the LinkedToProfile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BankAccountType) GetLinkedToProfileOk() (*bool, bool) {
	if o == nil || IsNil(o.LinkedToProfile) {
		return nil, false
	}
	return o.LinkedToProfile, true
}

// HasLinkedToProfile returns a boolean if a field has been set.
func (o *BankAccountType) HasLinkedToProfile() bool {
	if o != nil && !IsNil(o.LinkedToProfile) {
		return true
	}

	return false
}

// SetLinkedToProfile gets a reference to the given bool and assigns it to the LinkedToProfile field.
func (o *BankAccountType) SetLinkedToProfile(v bool) {
	o.LinkedToProfile = &v
}

func (o BankAccountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BankAccountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.BankAccountId) {
		toSerialize["bankAccountId"] = o.BankAccountId
	}
	if !IsNil(o.BankAccountNo) {
		toSerialize["bankAccountNo"] = o.BankAccountNo
	}
	if !IsNil(o.BankCode) {
		toSerialize["bankCode"] = o.BankCode
	}
	if !IsNil(o.BranchCode) {
		toSerialize["branchCode"] = o.BranchCode
	}
	if !IsNil(o.BankName) {
		toSerialize["bankName"] = o.BankName
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	if !IsNil(o.CheckFormat) {
		toSerialize["checkFormat"] = o.CheckFormat
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.CurrentCheckNo) {
		toSerialize["currentCheckNo"] = o.CurrentCheckNo
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.Default) {
		toSerialize["default"] = o.Default
	}
	if !IsNil(o.LinkedToProfile) {
		toSerialize["linkedToProfile"] = o.LinkedToProfile
	}
	return toSerialize, nil
}

type NullableBankAccountType struct {
	value *BankAccountType
	isSet bool
}

func (v NullableBankAccountType) Get() *BankAccountType {
	return v.value
}

func (v *NullableBankAccountType) Set(val *BankAccountType) {
	v.value = val
	v.isSet = true
}

func (v NullableBankAccountType) IsSet() bool {
	return v.isSet
}

func (v *NullableBankAccountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBankAccountType(val *BankAccountType) *NullableBankAccountType {
	return &NullableBankAccountType{value: val, isSet: true}
}

func (v NullableBankAccountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBankAccountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


