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

// checks if the ExchangeRateCalculationTaxType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExchangeRateCalculationTaxType{}

// ExchangeRateCalculationTaxType Detailed information about exchange rate calculation service tax.
type ExchangeRateCalculationTaxType struct {
	// Based Amount in local currency to be added on top of computed service tax based on Percentage.
	BaseAmount *float32 `json:"baseAmount,omitempty"`
	// Exchange rate calculation tax information based on Transaction Code Generate.
	ExchangeRateTransactionGenerateTaxes []ExchangeRateTransactionGenerateTaxType `json:"exchangeRateTransactionGenerateTaxes,omitempty"`
	// Maximum service tax in local currency to be charged.
	MaxServiceTax *float32 `json:"maxServiceTax,omitempty"`
	// Minimum service tax in local currency to be charged
	MinServiceTax *float32 `json:"minServiceTax,omitempty"`
	// Percentage to be multiplied to Percentage Applied On to get the service tax.
	Percentage *float32 `json:"percentage,omitempty"`
	PercentageAppliedOn *CurrencyAmountType `json:"percentageAppliedOn,omitempty"`
}

// NewExchangeRateCalculationTaxType instantiates a new ExchangeRateCalculationTaxType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExchangeRateCalculationTaxType() *ExchangeRateCalculationTaxType {
	this := ExchangeRateCalculationTaxType{}
	return &this
}

// NewExchangeRateCalculationTaxTypeWithDefaults instantiates a new ExchangeRateCalculationTaxType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExchangeRateCalculationTaxTypeWithDefaults() *ExchangeRateCalculationTaxType {
	this := ExchangeRateCalculationTaxType{}
	return &this
}

// GetBaseAmount returns the BaseAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetBaseAmount() float32 {
	if o == nil || IsNil(o.BaseAmount) {
		var ret float32
		return ret
	}
	return *o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetBaseAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.BaseAmount) {
		return nil, false
	}
	return o.BaseAmount, true
}

// HasBaseAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasBaseAmount() bool {
	if o != nil && !IsNil(o.BaseAmount) {
		return true
	}

	return false
}

// SetBaseAmount gets a reference to the given float32 and assigns it to the BaseAmount field.
func (o *ExchangeRateCalculationTaxType) SetBaseAmount(v float32) {
	o.BaseAmount = &v
}

// GetExchangeRateTransactionGenerateTaxes returns the ExchangeRateTransactionGenerateTaxes field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetExchangeRateTransactionGenerateTaxes() []ExchangeRateTransactionGenerateTaxType {
	if o == nil || IsNil(o.ExchangeRateTransactionGenerateTaxes) {
		var ret []ExchangeRateTransactionGenerateTaxType
		return ret
	}
	return o.ExchangeRateTransactionGenerateTaxes
}

// GetExchangeRateTransactionGenerateTaxesOk returns a tuple with the ExchangeRateTransactionGenerateTaxes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetExchangeRateTransactionGenerateTaxesOk() ([]ExchangeRateTransactionGenerateTaxType, bool) {
	if o == nil || IsNil(o.ExchangeRateTransactionGenerateTaxes) {
		return nil, false
	}
	return o.ExchangeRateTransactionGenerateTaxes, true
}

// HasExchangeRateTransactionGenerateTaxes returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasExchangeRateTransactionGenerateTaxes() bool {
	if o != nil && !IsNil(o.ExchangeRateTransactionGenerateTaxes) {
		return true
	}

	return false
}

// SetExchangeRateTransactionGenerateTaxes gets a reference to the given []ExchangeRateTransactionGenerateTaxType and assigns it to the ExchangeRateTransactionGenerateTaxes field.
func (o *ExchangeRateCalculationTaxType) SetExchangeRateTransactionGenerateTaxes(v []ExchangeRateTransactionGenerateTaxType) {
	o.ExchangeRateTransactionGenerateTaxes = v
}

// GetMaxServiceTax returns the MaxServiceTax field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetMaxServiceTax() float32 {
	if o == nil || IsNil(o.MaxServiceTax) {
		var ret float32
		return ret
	}
	return *o.MaxServiceTax
}

// GetMaxServiceTaxOk returns a tuple with the MaxServiceTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetMaxServiceTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.MaxServiceTax) {
		return nil, false
	}
	return o.MaxServiceTax, true
}

// HasMaxServiceTax returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasMaxServiceTax() bool {
	if o != nil && !IsNil(o.MaxServiceTax) {
		return true
	}

	return false
}

// SetMaxServiceTax gets a reference to the given float32 and assigns it to the MaxServiceTax field.
func (o *ExchangeRateCalculationTaxType) SetMaxServiceTax(v float32) {
	o.MaxServiceTax = &v
}

// GetMinServiceTax returns the MinServiceTax field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetMinServiceTax() float32 {
	if o == nil || IsNil(o.MinServiceTax) {
		var ret float32
		return ret
	}
	return *o.MinServiceTax
}

// GetMinServiceTaxOk returns a tuple with the MinServiceTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetMinServiceTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.MinServiceTax) {
		return nil, false
	}
	return o.MinServiceTax, true
}

// HasMinServiceTax returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasMinServiceTax() bool {
	if o != nil && !IsNil(o.MinServiceTax) {
		return true
	}

	return false
}

// SetMinServiceTax gets a reference to the given float32 and assigns it to the MinServiceTax field.
func (o *ExchangeRateCalculationTaxType) SetMinServiceTax(v float32) {
	o.MinServiceTax = &v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *ExchangeRateCalculationTaxType) SetPercentage(v float32) {
	o.Percentage = &v
}

// GetPercentageAppliedOn returns the PercentageAppliedOn field value if set, zero value otherwise.
func (o *ExchangeRateCalculationTaxType) GetPercentageAppliedOn() CurrencyAmountType {
	if o == nil || IsNil(o.PercentageAppliedOn) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.PercentageAppliedOn
}

// GetPercentageAppliedOnOk returns a tuple with the PercentageAppliedOn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationTaxType) GetPercentageAppliedOnOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.PercentageAppliedOn) {
		return nil, false
	}
	return o.PercentageAppliedOn, true
}

// HasPercentageAppliedOn returns a boolean if a field has been set.
func (o *ExchangeRateCalculationTaxType) HasPercentageAppliedOn() bool {
	if o != nil && !IsNil(o.PercentageAppliedOn) {
		return true
	}

	return false
}

// SetPercentageAppliedOn gets a reference to the given CurrencyAmountType and assigns it to the PercentageAppliedOn field.
func (o *ExchangeRateCalculationTaxType) SetPercentageAppliedOn(v CurrencyAmountType) {
	o.PercentageAppliedOn = &v
}

func (o ExchangeRateCalculationTaxType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExchangeRateCalculationTaxType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BaseAmount) {
		toSerialize["baseAmount"] = o.BaseAmount
	}
	if !IsNil(o.ExchangeRateTransactionGenerateTaxes) {
		toSerialize["exchangeRateTransactionGenerateTaxes"] = o.ExchangeRateTransactionGenerateTaxes
	}
	if !IsNil(o.MaxServiceTax) {
		toSerialize["maxServiceTax"] = o.MaxServiceTax
	}
	if !IsNil(o.MinServiceTax) {
		toSerialize["minServiceTax"] = o.MinServiceTax
	}
	if !IsNil(o.Percentage) {
		toSerialize["percentage"] = o.Percentage
	}
	if !IsNil(o.PercentageAppliedOn) {
		toSerialize["percentageAppliedOn"] = o.PercentageAppliedOn
	}
	return toSerialize, nil
}

type NullableExchangeRateCalculationTaxType struct {
	value *ExchangeRateCalculationTaxType
	isSet bool
}

func (v NullableExchangeRateCalculationTaxType) Get() *ExchangeRateCalculationTaxType {
	return v.value
}

func (v *NullableExchangeRateCalculationTaxType) Set(val *ExchangeRateCalculationTaxType) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangeRateCalculationTaxType) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangeRateCalculationTaxType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangeRateCalculationTaxType(val *ExchangeRateCalculationTaxType) *NullableExchangeRateCalculationTaxType {
	return &NullableExchangeRateCalculationTaxType{value: val, isSet: true}
}

func (v NullableExchangeRateCalculationTaxType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangeRateCalculationTaxType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


