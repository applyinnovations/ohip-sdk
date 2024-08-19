/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ProfileCashieringType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileCashieringType{}

// ProfileCashieringType Contains cashiering related details for the profile
type ProfileCashieringType struct {
	// Account Receivables Central Number.
	ArNoCentral *string `json:"arNoCentral,omitempty"`
	// Contains the auto folio settlement type for the profile.
	AutoFolioSettlementType *string `json:"autoFolioSettlementType,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	// Contains the direct billing related information for the profile.
	DirectBillingList []DirectBillingType `json:"directBillingList,omitempty"`
	// Ability to define on the account, the number of days after which the invoice should be paid.
	PaymentDueDays *int32 `json:"paymentDueDays,omitempty"`
	// Reference Currency.
	ReferenceCurrency *string `json:"referenceCurrency,omitempty"`
	// Tax1 Percentage for Collecting Agent.
	TaxPercent1 *int32 `json:"taxPercent1,omitempty"`
	// Tax2 Percentage for Collecting Agent.
	TaxPercent2 *int32 `json:"taxPercent2,omitempty"`
	// Tax3 Percentage for Collecting Agent.
	TaxPercent3 *int32 `json:"taxPercent3,omitempty"`
	// Tax4 Percentage for Collecting Agent.
	TaxPercent4 *int32 `json:"taxPercent4,omitempty"`
	// Tax5 Percentage for Collecting Agent.
	TaxPercent5 *int32 `json:"taxPercent5,omitempty"`
	// VAT Offset Flag.
	VATOffsetYN *string `json:"vATOffsetYN,omitempty"`
}

// NewProfileCashieringType instantiates a new ProfileCashieringType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileCashieringType() *ProfileCashieringType {
	this := ProfileCashieringType{}
	return &this
}

// NewProfileCashieringTypeWithDefaults instantiates a new ProfileCashieringType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileCashieringTypeWithDefaults() *ProfileCashieringType {
	this := ProfileCashieringType{}
	return &this
}

// GetArNoCentral returns the ArNoCentral field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetArNoCentral() string {
	if o == nil || IsNil(o.ArNoCentral) {
		var ret string
		return ret
	}
	return *o.ArNoCentral
}

// GetArNoCentralOk returns a tuple with the ArNoCentral field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetArNoCentralOk() (*string, bool) {
	if o == nil || IsNil(o.ArNoCentral) {
		return nil, false
	}
	return o.ArNoCentral, true
}

// HasArNoCentral returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasArNoCentral() bool {
	if o != nil && !IsNil(o.ArNoCentral) {
		return true
	}

	return false
}

// SetArNoCentral gets a reference to the given string and assigns it to the ArNoCentral field.
func (o *ProfileCashieringType) SetArNoCentral(v string) {
	o.ArNoCentral = &v
}

// GetAutoFolioSettlementType returns the AutoFolioSettlementType field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetAutoFolioSettlementType() string {
	if o == nil || IsNil(o.AutoFolioSettlementType) {
		var ret string
		return ret
	}
	return *o.AutoFolioSettlementType
}

// GetAutoFolioSettlementTypeOk returns a tuple with the AutoFolioSettlementType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetAutoFolioSettlementTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AutoFolioSettlementType) {
		return nil, false
	}
	return o.AutoFolioSettlementType, true
}

// HasAutoFolioSettlementType returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasAutoFolioSettlementType() bool {
	if o != nil && !IsNil(o.AutoFolioSettlementType) {
		return true
	}

	return false
}

// SetAutoFolioSettlementType gets a reference to the given string and assigns it to the AutoFolioSettlementType field.
func (o *ProfileCashieringType) SetAutoFolioSettlementType(v string) {
	o.AutoFolioSettlementType = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *ProfileCashieringType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *ProfileCashieringType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *ProfileCashieringType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetDirectBillingList returns the DirectBillingList field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetDirectBillingList() []DirectBillingType {
	if o == nil || IsNil(o.DirectBillingList) {
		var ret []DirectBillingType
		return ret
	}
	return o.DirectBillingList
}

// GetDirectBillingListOk returns a tuple with the DirectBillingList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetDirectBillingListOk() ([]DirectBillingType, bool) {
	if o == nil || IsNil(o.DirectBillingList) {
		return nil, false
	}
	return o.DirectBillingList, true
}

// HasDirectBillingList returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasDirectBillingList() bool {
	if o != nil && !IsNil(o.DirectBillingList) {
		return true
	}

	return false
}

// SetDirectBillingList gets a reference to the given []DirectBillingType and assigns it to the DirectBillingList field.
func (o *ProfileCashieringType) SetDirectBillingList(v []DirectBillingType) {
	o.DirectBillingList = v
}

// GetPaymentDueDays returns the PaymentDueDays field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetPaymentDueDays() int32 {
	if o == nil || IsNil(o.PaymentDueDays) {
		var ret int32
		return ret
	}
	return *o.PaymentDueDays
}

// GetPaymentDueDaysOk returns a tuple with the PaymentDueDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetPaymentDueDaysOk() (*int32, bool) {
	if o == nil || IsNil(o.PaymentDueDays) {
		return nil, false
	}
	return o.PaymentDueDays, true
}

// HasPaymentDueDays returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasPaymentDueDays() bool {
	if o != nil && !IsNil(o.PaymentDueDays) {
		return true
	}

	return false
}

// SetPaymentDueDays gets a reference to the given int32 and assigns it to the PaymentDueDays field.
func (o *ProfileCashieringType) SetPaymentDueDays(v int32) {
	o.PaymentDueDays = &v
}

// GetReferenceCurrency returns the ReferenceCurrency field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetReferenceCurrency() string {
	if o == nil || IsNil(o.ReferenceCurrency) {
		var ret string
		return ret
	}
	return *o.ReferenceCurrency
}

// GetReferenceCurrencyOk returns a tuple with the ReferenceCurrency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetReferenceCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.ReferenceCurrency) {
		return nil, false
	}
	return o.ReferenceCurrency, true
}

// HasReferenceCurrency returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasReferenceCurrency() bool {
	if o != nil && !IsNil(o.ReferenceCurrency) {
		return true
	}

	return false
}

// SetReferenceCurrency gets a reference to the given string and assigns it to the ReferenceCurrency field.
func (o *ProfileCashieringType) SetReferenceCurrency(v string) {
	o.ReferenceCurrency = &v
}

// GetTaxPercent1 returns the TaxPercent1 field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetTaxPercent1() int32 {
	if o == nil || IsNil(o.TaxPercent1) {
		var ret int32
		return ret
	}
	return *o.TaxPercent1
}

// GetTaxPercent1Ok returns a tuple with the TaxPercent1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetTaxPercent1Ok() (*int32, bool) {
	if o == nil || IsNil(o.TaxPercent1) {
		return nil, false
	}
	return o.TaxPercent1, true
}

// HasTaxPercent1 returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasTaxPercent1() bool {
	if o != nil && !IsNil(o.TaxPercent1) {
		return true
	}

	return false
}

// SetTaxPercent1 gets a reference to the given int32 and assigns it to the TaxPercent1 field.
func (o *ProfileCashieringType) SetTaxPercent1(v int32) {
	o.TaxPercent1 = &v
}

// GetTaxPercent2 returns the TaxPercent2 field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetTaxPercent2() int32 {
	if o == nil || IsNil(o.TaxPercent2) {
		var ret int32
		return ret
	}
	return *o.TaxPercent2
}

// GetTaxPercent2Ok returns a tuple with the TaxPercent2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetTaxPercent2Ok() (*int32, bool) {
	if o == nil || IsNil(o.TaxPercent2) {
		return nil, false
	}
	return o.TaxPercent2, true
}

// HasTaxPercent2 returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasTaxPercent2() bool {
	if o != nil && !IsNil(o.TaxPercent2) {
		return true
	}

	return false
}

// SetTaxPercent2 gets a reference to the given int32 and assigns it to the TaxPercent2 field.
func (o *ProfileCashieringType) SetTaxPercent2(v int32) {
	o.TaxPercent2 = &v
}

// GetTaxPercent3 returns the TaxPercent3 field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetTaxPercent3() int32 {
	if o == nil || IsNil(o.TaxPercent3) {
		var ret int32
		return ret
	}
	return *o.TaxPercent3
}

// GetTaxPercent3Ok returns a tuple with the TaxPercent3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetTaxPercent3Ok() (*int32, bool) {
	if o == nil || IsNil(o.TaxPercent3) {
		return nil, false
	}
	return o.TaxPercent3, true
}

// HasTaxPercent3 returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasTaxPercent3() bool {
	if o != nil && !IsNil(o.TaxPercent3) {
		return true
	}

	return false
}

// SetTaxPercent3 gets a reference to the given int32 and assigns it to the TaxPercent3 field.
func (o *ProfileCashieringType) SetTaxPercent3(v int32) {
	o.TaxPercent3 = &v
}

// GetTaxPercent4 returns the TaxPercent4 field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetTaxPercent4() int32 {
	if o == nil || IsNil(o.TaxPercent4) {
		var ret int32
		return ret
	}
	return *o.TaxPercent4
}

// GetTaxPercent4Ok returns a tuple with the TaxPercent4 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetTaxPercent4Ok() (*int32, bool) {
	if o == nil || IsNil(o.TaxPercent4) {
		return nil, false
	}
	return o.TaxPercent4, true
}

// HasTaxPercent4 returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasTaxPercent4() bool {
	if o != nil && !IsNil(o.TaxPercent4) {
		return true
	}

	return false
}

// SetTaxPercent4 gets a reference to the given int32 and assigns it to the TaxPercent4 field.
func (o *ProfileCashieringType) SetTaxPercent4(v int32) {
	o.TaxPercent4 = &v
}

// GetTaxPercent5 returns the TaxPercent5 field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetTaxPercent5() int32 {
	if o == nil || IsNil(o.TaxPercent5) {
		var ret int32
		return ret
	}
	return *o.TaxPercent5
}

// GetTaxPercent5Ok returns a tuple with the TaxPercent5 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetTaxPercent5Ok() (*int32, bool) {
	if o == nil || IsNil(o.TaxPercent5) {
		return nil, false
	}
	return o.TaxPercent5, true
}

// HasTaxPercent5 returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasTaxPercent5() bool {
	if o != nil && !IsNil(o.TaxPercent5) {
		return true
	}

	return false
}

// SetTaxPercent5 gets a reference to the given int32 and assigns it to the TaxPercent5 field.
func (o *ProfileCashieringType) SetTaxPercent5(v int32) {
	o.TaxPercent5 = &v
}

// GetVATOffsetYN returns the VATOffsetYN field value if set, zero value otherwise.
func (o *ProfileCashieringType) GetVATOffsetYN() string {
	if o == nil || IsNil(o.VATOffsetYN) {
		var ret string
		return ret
	}
	return *o.VATOffsetYN
}

// GetVATOffsetYNOk returns a tuple with the VATOffsetYN field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringType) GetVATOffsetYNOk() (*string, bool) {
	if o == nil || IsNil(o.VATOffsetYN) {
		return nil, false
	}
	return o.VATOffsetYN, true
}

// HasVATOffsetYN returns a boolean if a field has been set.
func (o *ProfileCashieringType) HasVATOffsetYN() bool {
	if o != nil && !IsNil(o.VATOffsetYN) {
		return true
	}

	return false
}

// SetVATOffsetYN gets a reference to the given string and assigns it to the VATOffsetYN field.
func (o *ProfileCashieringType) SetVATOffsetYN(v string) {
	o.VATOffsetYN = &v
}

func (o ProfileCashieringType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileCashieringType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArNoCentral) {
		toSerialize["arNoCentral"] = o.ArNoCentral
	}
	if !IsNil(o.AutoFolioSettlementType) {
		toSerialize["autoFolioSettlementType"] = o.AutoFolioSettlementType
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
	if !IsNil(o.DirectBillingList) {
		toSerialize["directBillingList"] = o.DirectBillingList
	}
	if !IsNil(o.PaymentDueDays) {
		toSerialize["paymentDueDays"] = o.PaymentDueDays
	}
	if !IsNil(o.ReferenceCurrency) {
		toSerialize["referenceCurrency"] = o.ReferenceCurrency
	}
	if !IsNil(o.TaxPercent1) {
		toSerialize["taxPercent1"] = o.TaxPercent1
	}
	if !IsNil(o.TaxPercent2) {
		toSerialize["taxPercent2"] = o.TaxPercent2
	}
	if !IsNil(o.TaxPercent3) {
		toSerialize["taxPercent3"] = o.TaxPercent3
	}
	if !IsNil(o.TaxPercent4) {
		toSerialize["taxPercent4"] = o.TaxPercent4
	}
	if !IsNil(o.TaxPercent5) {
		toSerialize["taxPercent5"] = o.TaxPercent5
	}
	if !IsNil(o.VATOffsetYN) {
		toSerialize["vATOffsetYN"] = o.VATOffsetYN
	}
	return toSerialize, nil
}

type NullableProfileCashieringType struct {
	value *ProfileCashieringType
	isSet bool
}

func (v NullableProfileCashieringType) Get() *ProfileCashieringType {
	return v.value
}

func (v *NullableProfileCashieringType) Set(val *ProfileCashieringType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileCashieringType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileCashieringType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileCashieringType(val *ProfileCashieringType) *NullableProfileCashieringType {
	return &NullableProfileCashieringType{value: val, isSet: true}
}

func (v NullableProfileCashieringType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileCashieringType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


