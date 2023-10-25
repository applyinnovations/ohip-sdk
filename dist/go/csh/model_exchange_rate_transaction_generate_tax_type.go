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

// checks if the ExchangeRateTransactionGenerateTaxType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExchangeRateTransactionGenerateTaxType{}

// ExchangeRateTransactionGenerateTaxType Tax information based on Transaction Code Generate.
type ExchangeRateTransactionGenerateTaxType struct {
	// Transaction Code Generate description.
	Code *string `json:"code,omitempty"`
	// Transaction Code Generate description.
	Description *string `json:"description,omitempty"`
	TaxAmount *CurrencyAmountType `json:"taxAmount,omitempty"`
}

// NewExchangeRateTransactionGenerateTaxType instantiates a new ExchangeRateTransactionGenerateTaxType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExchangeRateTransactionGenerateTaxType() *ExchangeRateTransactionGenerateTaxType {
	this := ExchangeRateTransactionGenerateTaxType{}
	return &this
}

// NewExchangeRateTransactionGenerateTaxTypeWithDefaults instantiates a new ExchangeRateTransactionGenerateTaxType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExchangeRateTransactionGenerateTaxTypeWithDefaults() *ExchangeRateTransactionGenerateTaxType {
	this := ExchangeRateTransactionGenerateTaxType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ExchangeRateTransactionGenerateTaxType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateTransactionGenerateTaxType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ExchangeRateTransactionGenerateTaxType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ExchangeRateTransactionGenerateTaxType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ExchangeRateTransactionGenerateTaxType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateTransactionGenerateTaxType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ExchangeRateTransactionGenerateTaxType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ExchangeRateTransactionGenerateTaxType) SetDescription(v string) {
	o.Description = &v
}

// GetTaxAmount returns the TaxAmount field value if set, zero value otherwise.
func (o *ExchangeRateTransactionGenerateTaxType) GetTaxAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TaxAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TaxAmount
}

// GetTaxAmountOk returns a tuple with the TaxAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateTransactionGenerateTaxType) GetTaxAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TaxAmount) {
		return nil, false
	}
	return o.TaxAmount, true
}

// HasTaxAmount returns a boolean if a field has been set.
func (o *ExchangeRateTransactionGenerateTaxType) HasTaxAmount() bool {
	if o != nil && !IsNil(o.TaxAmount) {
		return true
	}

	return false
}

// SetTaxAmount gets a reference to the given CurrencyAmountType and assigns it to the TaxAmount field.
func (o *ExchangeRateTransactionGenerateTaxType) SetTaxAmount(v CurrencyAmountType) {
	o.TaxAmount = &v
}

func (o ExchangeRateTransactionGenerateTaxType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExchangeRateTransactionGenerateTaxType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.TaxAmount) {
		toSerialize["taxAmount"] = o.TaxAmount
	}
	return toSerialize, nil
}

type NullableExchangeRateTransactionGenerateTaxType struct {
	value *ExchangeRateTransactionGenerateTaxType
	isSet bool
}

func (v NullableExchangeRateTransactionGenerateTaxType) Get() *ExchangeRateTransactionGenerateTaxType {
	return v.value
}

func (v *NullableExchangeRateTransactionGenerateTaxType) Set(val *ExchangeRateTransactionGenerateTaxType) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangeRateTransactionGenerateTaxType) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangeRateTransactionGenerateTaxType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangeRateTransactionGenerateTaxType(val *ExchangeRateTransactionGenerateTaxType) *NullableExchangeRateTransactionGenerateTaxType {
	return &NullableExchangeRateTransactionGenerateTaxType{value: val, isSet: true}
}

func (v NullableExchangeRateTransactionGenerateTaxType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangeRateTransactionGenerateTaxType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


