/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the DailyRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DailyRateType{}

// DailyRateType The total amount charged for the service including additional amounts and fees.
type DailyRateType struct {
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
	Discount *DiscountType `json:"discount,omitempty"`
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	Fees *FeesType `json:"fees,omitempty"`
	// When true indicates that the rate amount has been overridden.
	RateOverride *bool `json:"rateOverride,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
	Taxes *TaxesType `json:"taxes,omitempty"`
}

// NewDailyRateType instantiates a new DailyRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDailyRateType() *DailyRateType {
	this := DailyRateType{}
	return &this
}

// NewDailyRateTypeWithDefaults instantiates a new DailyRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDailyRateTypeWithDefaults() *DailyRateType {
	this := DailyRateType{}
	return &this
}

// GetAmountAfterTax returns the AmountAfterTax field value if set, zero value otherwise.
func (o *DailyRateType) GetAmountAfterTax() float32 {
	if o == nil || IsNil(o.AmountAfterTax) {
		var ret float32
		return ret
	}
	return *o.AmountAfterTax
}

// GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetAmountAfterTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountAfterTax) {
		return nil, false
	}
	return o.AmountAfterTax, true
}

// HasAmountAfterTax returns a boolean if a field has been set.
func (o *DailyRateType) HasAmountAfterTax() bool {
	if o != nil && !IsNil(o.AmountAfterTax) {
		return true
	}

	return false
}

// SetAmountAfterTax gets a reference to the given float32 and assigns it to the AmountAfterTax field.
func (o *DailyRateType) SetAmountAfterTax(v float32) {
	o.AmountAfterTax = &v
}

// GetAmountBeforeTax returns the AmountBeforeTax field value if set, zero value otherwise.
func (o *DailyRateType) GetAmountBeforeTax() float32 {
	if o == nil || IsNil(o.AmountBeforeTax) {
		var ret float32
		return ret
	}
	return *o.AmountBeforeTax
}

// GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetAmountBeforeTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountBeforeTax) {
		return nil, false
	}
	return o.AmountBeforeTax, true
}

// HasAmountBeforeTax returns a boolean if a field has been set.
func (o *DailyRateType) HasAmountBeforeTax() bool {
	if o != nil && !IsNil(o.AmountBeforeTax) {
		return true
	}

	return false
}

// SetAmountBeforeTax gets a reference to the given float32 and assigns it to the AmountBeforeTax field.
func (o *DailyRateType) SetAmountBeforeTax(v float32) {
	o.AmountBeforeTax = &v
}

// GetBaseAmount returns the BaseAmount field value if set, zero value otherwise.
func (o *DailyRateType) GetBaseAmount() float32 {
	if o == nil || IsNil(o.BaseAmount) {
		var ret float32
		return ret
	}
	return *o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetBaseAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.BaseAmount) {
		return nil, false
	}
	return o.BaseAmount, true
}

// HasBaseAmount returns a boolean if a field has been set.
func (o *DailyRateType) HasBaseAmount() bool {
	if o != nil && !IsNil(o.BaseAmount) {
		return true
	}

	return false
}

// SetBaseAmount gets a reference to the given float32 and assigns it to the BaseAmount field.
func (o *DailyRateType) SetBaseAmount(v float32) {
	o.BaseAmount = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *DailyRateType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *DailyRateType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *DailyRateType) SetCode(v string) {
	o.Code = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *DailyRateType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *DailyRateType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *DailyRateType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *DailyRateType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *DailyRateType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *DailyRateType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *DailyRateType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *DailyRateType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *DailyRateType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *DailyRateType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *DailyRateType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *DailyRateType) SetDescription(v string) {
	o.Description = &v
}

// GetDiscount returns the Discount field value if set, zero value otherwise.
func (o *DailyRateType) GetDiscount() DiscountType {
	if o == nil || IsNil(o.Discount) {
		var ret DiscountType
		return ret
	}
	return *o.Discount
}

// GetDiscountOk returns a tuple with the Discount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetDiscountOk() (*DiscountType, bool) {
	if o == nil || IsNil(o.Discount) {
		return nil, false
	}
	return o.Discount, true
}

// HasDiscount returns a boolean if a field has been set.
func (o *DailyRateType) HasDiscount() bool {
	if o != nil && !IsNil(o.Discount) {
		return true
	}

	return false
}

// SetDiscount gets a reference to the given DiscountType and assigns it to the Discount field.
func (o *DailyRateType) SetDiscount(v DiscountType) {
	o.Discount = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *DailyRateType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *DailyRateType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *DailyRateType) SetEnd(v string) {
	o.End = &v
}

// GetFees returns the Fees field value if set, zero value otherwise.
func (o *DailyRateType) GetFees() FeesType {
	if o == nil || IsNil(o.Fees) {
		var ret FeesType
		return ret
	}
	return *o.Fees
}

// GetFeesOk returns a tuple with the Fees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetFeesOk() (*FeesType, bool) {
	if o == nil || IsNil(o.Fees) {
		return nil, false
	}
	return o.Fees, true
}

// HasFees returns a boolean if a field has been set.
func (o *DailyRateType) HasFees() bool {
	if o != nil && !IsNil(o.Fees) {
		return true
	}

	return false
}

// SetFees gets a reference to the given FeesType and assigns it to the Fees field.
func (o *DailyRateType) SetFees(v FeesType) {
	o.Fees = &v
}

// GetRateOverride returns the RateOverride field value if set, zero value otherwise.
func (o *DailyRateType) GetRateOverride() bool {
	if o == nil || IsNil(o.RateOverride) {
		var ret bool
		return ret
	}
	return *o.RateOverride
}

// GetRateOverrideOk returns a tuple with the RateOverride field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetRateOverrideOk() (*bool, bool) {
	if o == nil || IsNil(o.RateOverride) {
		return nil, false
	}
	return o.RateOverride, true
}

// HasRateOverride returns a boolean if a field has been set.
func (o *DailyRateType) HasRateOverride() bool {
	if o != nil && !IsNil(o.RateOverride) {
		return true
	}

	return false
}

// SetRateOverride gets a reference to the given bool and assigns it to the RateOverride field.
func (o *DailyRateType) SetRateOverride(v bool) {
	o.RateOverride = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *DailyRateType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *DailyRateType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *DailyRateType) SetStart(v string) {
	o.Start = &v
}

// GetTaxes returns the Taxes field value if set, zero value otherwise.
func (o *DailyRateType) GetTaxes() TaxesType {
	if o == nil || IsNil(o.Taxes) {
		var ret TaxesType
		return ret
	}
	return *o.Taxes
}

// GetTaxesOk returns a tuple with the Taxes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateType) GetTaxesOk() (*TaxesType, bool) {
	if o == nil || IsNil(o.Taxes) {
		return nil, false
	}
	return o.Taxes, true
}

// HasTaxes returns a boolean if a field has been set.
func (o *DailyRateType) HasTaxes() bool {
	if o != nil && !IsNil(o.Taxes) {
		return true
	}

	return false
}

// SetTaxes gets a reference to the given TaxesType and assigns it to the Taxes field.
func (o *DailyRateType) SetTaxes(v TaxesType) {
	o.Taxes = &v
}

func (o DailyRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DailyRateType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.Discount) {
		toSerialize["discount"] = o.Discount
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Fees) {
		toSerialize["fees"] = o.Fees
	}
	if !IsNil(o.RateOverride) {
		toSerialize["rateOverride"] = o.RateOverride
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	if !IsNil(o.Taxes) {
		toSerialize["taxes"] = o.Taxes
	}
	return toSerialize, nil
}

type NullableDailyRateType struct {
	value *DailyRateType
	isSet bool
}

func (v NullableDailyRateType) Get() *DailyRateType {
	return v.value
}

func (v *NullableDailyRateType) Set(val *DailyRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableDailyRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableDailyRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDailyRateType(val *DailyRateType) *NullableDailyRateType {
	return &NullableDailyRateType{value: val, isSet: true}
}

func (v NullableDailyRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDailyRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


