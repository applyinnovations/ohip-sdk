/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ProfileCommissionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileCommissionType{}

// ProfileCommissionType This is the preconfigured routing instruction type.
type ProfileCommissionType struct {
	// Bank account used for the commission for a profile.
	BankAccount *string `json:"bankAccount,omitempty"`
	// commission Code for a profile.
	CommissionCode *string `json:"commissionCode,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	// Hotel Code for the commission being used for a profile.
	HotelId *string `json:"hotelId,omitempty"`
	PaymentMethod *CommissionPaymentMethods `json:"paymentMethod,omitempty"`
}

// NewProfileCommissionType instantiates a new ProfileCommissionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileCommissionType() *ProfileCommissionType {
	this := ProfileCommissionType{}
	return &this
}

// NewProfileCommissionTypeWithDefaults instantiates a new ProfileCommissionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileCommissionTypeWithDefaults() *ProfileCommissionType {
	this := ProfileCommissionType{}
	return &this
}

// GetBankAccount returns the BankAccount field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetBankAccount() string {
	if o == nil || IsNil(o.BankAccount) {
		var ret string
		return ret
	}
	return *o.BankAccount
}

// GetBankAccountOk returns a tuple with the BankAccount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetBankAccountOk() (*string, bool) {
	if o == nil || IsNil(o.BankAccount) {
		return nil, false
	}
	return o.BankAccount, true
}

// HasBankAccount returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasBankAccount() bool {
	if o != nil && !IsNil(o.BankAccount) {
		return true
	}

	return false
}

// SetBankAccount gets a reference to the given string and assigns it to the BankAccount field.
func (o *ProfileCommissionType) SetBankAccount(v string) {
	o.BankAccount = &v
}

// GetCommissionCode returns the CommissionCode field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetCommissionCode() string {
	if o == nil || IsNil(o.CommissionCode) {
		var ret string
		return ret
	}
	return *o.CommissionCode
}

// GetCommissionCodeOk returns a tuple with the CommissionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetCommissionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CommissionCode) {
		return nil, false
	}
	return o.CommissionCode, true
}

// HasCommissionCode returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasCommissionCode() bool {
	if o != nil && !IsNil(o.CommissionCode) {
		return true
	}

	return false
}

// SetCommissionCode gets a reference to the given string and assigns it to the CommissionCode field.
func (o *ProfileCommissionType) SetCommissionCode(v string) {
	o.CommissionCode = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *ProfileCommissionType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *ProfileCommissionType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *ProfileCommissionType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ProfileCommissionType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *ProfileCommissionType) GetPaymentMethod() CommissionPaymentMethods {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret CommissionPaymentMethods
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCommissionType) GetPaymentMethodOk() (*CommissionPaymentMethods, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *ProfileCommissionType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given CommissionPaymentMethods and assigns it to the PaymentMethod field.
func (o *ProfileCommissionType) SetPaymentMethod(v CommissionPaymentMethods) {
	o.PaymentMethod = &v
}

func (o ProfileCommissionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileCommissionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BankAccount) {
		toSerialize["bankAccount"] = o.BankAccount
	}
	if !IsNil(o.CommissionCode) {
		toSerialize["commissionCode"] = o.CommissionCode
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CurrencySymbol) {
		toSerialize["currencySymbol"] = o.CurrencySymbol
	}
	if !IsNil(o.DecimalPlaces) {
		toSerialize["decimalPlaces"] = o.DecimalPlaces
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	return toSerialize, nil
}

type NullableProfileCommissionType struct {
	value *ProfileCommissionType
	isSet bool
}

func (v NullableProfileCommissionType) Get() *ProfileCommissionType {
	return v.value
}

func (v *NullableProfileCommissionType) Set(val *ProfileCommissionType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileCommissionType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileCommissionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileCommissionType(val *ProfileCommissionType) *NullableProfileCommissionType {
	return &NullableProfileCommissionType{value: val, isSet: true}
}

func (v NullableProfileCommissionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileCommissionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


