/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the TotalType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TotalType{}

// TotalType The total amount charged for the service including additional amounts and fees.
type TotalType struct {
	// The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax).
	AmountAfterTax *float32 `json:"amountAfterTax,omitempty"`
	// The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).
	AmountBeforeTax *float32 `json:"amountBeforeTax,omitempty"`
	// The rate's base price. Amount excluding price for any add to rate combine line package attached to the rate.Also excludes any discounts
	BaseAmount *float32 `json:"baseAmount,omitempty"`
	// Type of charge.
	Code *string `json:"code,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	Description *string `json:"description,omitempty"`
	Fees *FeesType `json:"fees,omitempty"`
	// When true indicates that the rate amount has been overridden.
	RateOverride *bool `json:"rateOverride,omitempty"`
	Taxes *TaxesType `json:"taxes,omitempty"`
}

// NewTotalType instantiates a new TotalType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTotalType() *TotalType {
	this := TotalType{}
	return &this
}

// NewTotalTypeWithDefaults instantiates a new TotalType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTotalTypeWithDefaults() *TotalType {
	this := TotalType{}
	return &this
}

// GetAmountAfterTax returns the AmountAfterTax field value if set, zero value otherwise.
func (o *TotalType) GetAmountAfterTax() float32 {
	if o == nil || IsNil(o.AmountAfterTax) {
		var ret float32
		return ret
	}
	return *o.AmountAfterTax
}

// GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetAmountAfterTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountAfterTax) {
		return nil, false
	}
	return o.AmountAfterTax, true
}

// HasAmountAfterTax returns a boolean if a field has been set.
func (o *TotalType) HasAmountAfterTax() bool {
	if o != nil && !IsNil(o.AmountAfterTax) {
		return true
	}

	return false
}

// SetAmountAfterTax gets a reference to the given float32 and assigns it to the AmountAfterTax field.
func (o *TotalType) SetAmountAfterTax(v float32) {
	o.AmountAfterTax = &v
}

// GetAmountBeforeTax returns the AmountBeforeTax field value if set, zero value otherwise.
func (o *TotalType) GetAmountBeforeTax() float32 {
	if o == nil || IsNil(o.AmountBeforeTax) {
		var ret float32
		return ret
	}
	return *o.AmountBeforeTax
}

// GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetAmountBeforeTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountBeforeTax) {
		return nil, false
	}
	return o.AmountBeforeTax, true
}

// HasAmountBeforeTax returns a boolean if a field has been set.
func (o *TotalType) HasAmountBeforeTax() bool {
	if o != nil && !IsNil(o.AmountBeforeTax) {
		return true
	}

	return false
}

// SetAmountBeforeTax gets a reference to the given float32 and assigns it to the AmountBeforeTax field.
func (o *TotalType) SetAmountBeforeTax(v float32) {
	o.AmountBeforeTax = &v
}

// GetBaseAmount returns the BaseAmount field value if set, zero value otherwise.
func (o *TotalType) GetBaseAmount() float32 {
	if o == nil || IsNil(o.BaseAmount) {
		var ret float32
		return ret
	}
	return *o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetBaseAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.BaseAmount) {
		return nil, false
	}
	return o.BaseAmount, true
}

// HasBaseAmount returns a boolean if a field has been set.
func (o *TotalType) HasBaseAmount() bool {
	if o != nil && !IsNil(o.BaseAmount) {
		return true
	}

	return false
}

// SetBaseAmount gets a reference to the given float32 and assigns it to the BaseAmount field.
func (o *TotalType) SetBaseAmount(v float32) {
	o.BaseAmount = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TotalType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TotalType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TotalType) SetCode(v string) {
	o.Code = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *TotalType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *TotalType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *TotalType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *TotalType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *TotalType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *TotalType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *TotalType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *TotalType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *TotalType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TotalType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TotalType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TotalType) SetDescription(v string) {
	o.Description = &v
}

// GetFees returns the Fees field value if set, zero value otherwise.
func (o *TotalType) GetFees() FeesType {
	if o == nil || IsNil(o.Fees) {
		var ret FeesType
		return ret
	}
	return *o.Fees
}

// GetFeesOk returns a tuple with the Fees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetFeesOk() (*FeesType, bool) {
	if o == nil || IsNil(o.Fees) {
		return nil, false
	}
	return o.Fees, true
}

// HasFees returns a boolean if a field has been set.
func (o *TotalType) HasFees() bool {
	if o != nil && !IsNil(o.Fees) {
		return true
	}

	return false
}

// SetFees gets a reference to the given FeesType and assigns it to the Fees field.
func (o *TotalType) SetFees(v FeesType) {
	o.Fees = &v
}

// GetRateOverride returns the RateOverride field value if set, zero value otherwise.
func (o *TotalType) GetRateOverride() bool {
	if o == nil || IsNil(o.RateOverride) {
		var ret bool
		return ret
	}
	return *o.RateOverride
}

// GetRateOverrideOk returns a tuple with the RateOverride field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetRateOverrideOk() (*bool, bool) {
	if o == nil || IsNil(o.RateOverride) {
		return nil, false
	}
	return o.RateOverride, true
}

// HasRateOverride returns a boolean if a field has been set.
func (o *TotalType) HasRateOverride() bool {
	if o != nil && !IsNil(o.RateOverride) {
		return true
	}

	return false
}

// SetRateOverride gets a reference to the given bool and assigns it to the RateOverride field.
func (o *TotalType) SetRateOverride(v bool) {
	o.RateOverride = &v
}

// GetTaxes returns the Taxes field value if set, zero value otherwise.
func (o *TotalType) GetTaxes() TaxesType {
	if o == nil || IsNil(o.Taxes) {
		var ret TaxesType
		return ret
	}
	return *o.Taxes
}

// GetTaxesOk returns a tuple with the Taxes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalType) GetTaxesOk() (*TaxesType, bool) {
	if o == nil || IsNil(o.Taxes) {
		return nil, false
	}
	return o.Taxes, true
}

// HasTaxes returns a boolean if a field has been set.
func (o *TotalType) HasTaxes() bool {
	if o != nil && !IsNil(o.Taxes) {
		return true
	}

	return false
}

// SetTaxes gets a reference to the given TaxesType and assigns it to the Taxes field.
func (o *TotalType) SetTaxes(v TaxesType) {
	o.Taxes = &v
}

func (o TotalType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TotalType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountAfterTax) {
		toSerialize["amountAfterTax"] = o.AmountAfterTax
	}
	if !IsNil(o.AmountBeforeTax) {
		toSerialize["amountBeforeTax"] = o.AmountBeforeTax
	}
	if !IsNil(o.BaseAmount) {
		toSerialize["baseAmount"] = o.BaseAmount
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
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
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Fees) {
		toSerialize["fees"] = o.Fees
	}
	if !IsNil(o.RateOverride) {
		toSerialize["rateOverride"] = o.RateOverride
	}
	if !IsNil(o.Taxes) {
		toSerialize["taxes"] = o.Taxes
	}
	return toSerialize, nil
}

type NullableTotalType struct {
	value *TotalType
	isSet bool
}

func (v NullableTotalType) Get() *TotalType {
	return v.value
}

func (v *NullableTotalType) Set(val *TotalType) {
	v.value = val
	v.isSet = true
}

func (v NullableTotalType) IsSet() bool {
	return v.isSet
}

func (v *NullableTotalType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTotalType(val *TotalType) *NullableTotalType {
	return &NullableTotalType{value: val, isSet: true}
}

func (v NullableTotalType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTotalType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


