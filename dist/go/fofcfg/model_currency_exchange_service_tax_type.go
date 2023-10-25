/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CurrencyExchangeServiceTaxType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CurrencyExchangeServiceTaxType{}

// CurrencyExchangeServiceTaxType Currency exchange service tax identification details
type CurrencyExchangeServiceTaxType struct {
	// Starting value of exchange equivalent range
	AmountFrom *float32 `json:"amountFrom,omitempty"`
	// End value of exchange equivalent range
	AmountTo *float32 `json:"amountTo,omitempty"`
	// Base tax basis of local currency. This is normally configured to the resulting tax basis of the previous tax slab range.
	BaseAmount *float32 `json:"baseAmount,omitempty"`
	// Currency exchange service tax code
	Code *string `json:"code,omitempty"`
	// Property associated with currency exchange service tax
	Hotel *string `json:"hotel,omitempty"`
	// Maximimum service tax to be collected
	MaxServiceTax *float32 `json:"maxServiceTax,omitempty"`
	// Minimum service tax to be collected
	MinServiceTax *float32 `json:"minServiceTax,omitempty"`
	// Percentage of local currency
	Percentage *float32 `json:"percentage,omitempty"`
}

// NewCurrencyExchangeServiceTaxType instantiates a new CurrencyExchangeServiceTaxType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrencyExchangeServiceTaxType() *CurrencyExchangeServiceTaxType {
	this := CurrencyExchangeServiceTaxType{}
	return &this
}

// NewCurrencyExchangeServiceTaxTypeWithDefaults instantiates a new CurrencyExchangeServiceTaxType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyExchangeServiceTaxTypeWithDefaults() *CurrencyExchangeServiceTaxType {
	this := CurrencyExchangeServiceTaxType{}
	return &this
}

// GetAmountFrom returns the AmountFrom field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetAmountFrom() float32 {
	if o == nil || IsNil(o.AmountFrom) {
		var ret float32
		return ret
	}
	return *o.AmountFrom
}

// GetAmountFromOk returns a tuple with the AmountFrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetAmountFromOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountFrom) {
		return nil, false
	}
	return o.AmountFrom, true
}

// HasAmountFrom returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasAmountFrom() bool {
	if o != nil && !IsNil(o.AmountFrom) {
		return true
	}

	return false
}

// SetAmountFrom gets a reference to the given float32 and assigns it to the AmountFrom field.
func (o *CurrencyExchangeServiceTaxType) SetAmountFrom(v float32) {
	o.AmountFrom = &v
}

// GetAmountTo returns the AmountTo field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetAmountTo() float32 {
	if o == nil || IsNil(o.AmountTo) {
		var ret float32
		return ret
	}
	return *o.AmountTo
}

// GetAmountToOk returns a tuple with the AmountTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetAmountToOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountTo) {
		return nil, false
	}
	return o.AmountTo, true
}

// HasAmountTo returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasAmountTo() bool {
	if o != nil && !IsNil(o.AmountTo) {
		return true
	}

	return false
}

// SetAmountTo gets a reference to the given float32 and assigns it to the AmountTo field.
func (o *CurrencyExchangeServiceTaxType) SetAmountTo(v float32) {
	o.AmountTo = &v
}

// GetBaseAmount returns the BaseAmount field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetBaseAmount() float32 {
	if o == nil || IsNil(o.BaseAmount) {
		var ret float32
		return ret
	}
	return *o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetBaseAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.BaseAmount) {
		return nil, false
	}
	return o.BaseAmount, true
}

// HasBaseAmount returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasBaseAmount() bool {
	if o != nil && !IsNil(o.BaseAmount) {
		return true
	}

	return false
}

// SetBaseAmount gets a reference to the given float32 and assigns it to the BaseAmount field.
func (o *CurrencyExchangeServiceTaxType) SetBaseAmount(v float32) {
	o.BaseAmount = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CurrencyExchangeServiceTaxType) SetCode(v string) {
	o.Code = &v
}

// GetHotel returns the Hotel field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetHotel() string {
	if o == nil || IsNil(o.Hotel) {
		var ret string
		return ret
	}
	return *o.Hotel
}

// GetHotelOk returns a tuple with the Hotel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetHotelOk() (*string, bool) {
	if o == nil || IsNil(o.Hotel) {
		return nil, false
	}
	return o.Hotel, true
}

// HasHotel returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasHotel() bool {
	if o != nil && !IsNil(o.Hotel) {
		return true
	}

	return false
}

// SetHotel gets a reference to the given string and assigns it to the Hotel field.
func (o *CurrencyExchangeServiceTaxType) SetHotel(v string) {
	o.Hotel = &v
}

// GetMaxServiceTax returns the MaxServiceTax field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetMaxServiceTax() float32 {
	if o == nil || IsNil(o.MaxServiceTax) {
		var ret float32
		return ret
	}
	return *o.MaxServiceTax
}

// GetMaxServiceTaxOk returns a tuple with the MaxServiceTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetMaxServiceTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.MaxServiceTax) {
		return nil, false
	}
	return o.MaxServiceTax, true
}

// HasMaxServiceTax returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasMaxServiceTax() bool {
	if o != nil && !IsNil(o.MaxServiceTax) {
		return true
	}

	return false
}

// SetMaxServiceTax gets a reference to the given float32 and assigns it to the MaxServiceTax field.
func (o *CurrencyExchangeServiceTaxType) SetMaxServiceTax(v float32) {
	o.MaxServiceTax = &v
}

// GetMinServiceTax returns the MinServiceTax field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetMinServiceTax() float32 {
	if o == nil || IsNil(o.MinServiceTax) {
		var ret float32
		return ret
	}
	return *o.MinServiceTax
}

// GetMinServiceTaxOk returns a tuple with the MinServiceTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetMinServiceTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.MinServiceTax) {
		return nil, false
	}
	return o.MinServiceTax, true
}

// HasMinServiceTax returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasMinServiceTax() bool {
	if o != nil && !IsNil(o.MinServiceTax) {
		return true
	}

	return false
}

// SetMinServiceTax gets a reference to the given float32 and assigns it to the MinServiceTax field.
func (o *CurrencyExchangeServiceTaxType) SetMinServiceTax(v float32) {
	o.MinServiceTax = &v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *CurrencyExchangeServiceTaxType) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeServiceTaxType) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *CurrencyExchangeServiceTaxType) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *CurrencyExchangeServiceTaxType) SetPercentage(v float32) {
	o.Percentage = &v
}

func (o CurrencyExchangeServiceTaxType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CurrencyExchangeServiceTaxType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountFrom) {
		toSerialize["amountFrom"] = o.AmountFrom
	}
	if !IsNil(o.AmountTo) {
		toSerialize["amountTo"] = o.AmountTo
	}
	if !IsNil(o.BaseAmount) {
		toSerialize["baseAmount"] = o.BaseAmount
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Hotel) {
		toSerialize["hotel"] = o.Hotel
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
	return toSerialize, nil
}

type NullableCurrencyExchangeServiceTaxType struct {
	value *CurrencyExchangeServiceTaxType
	isSet bool
}

func (v NullableCurrencyExchangeServiceTaxType) Get() *CurrencyExchangeServiceTaxType {
	return v.value
}

func (v *NullableCurrencyExchangeServiceTaxType) Set(val *CurrencyExchangeServiceTaxType) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrencyExchangeServiceTaxType) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrencyExchangeServiceTaxType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrencyExchangeServiceTaxType(val *CurrencyExchangeServiceTaxType) *NullableCurrencyExchangeServiceTaxType {
	return &NullableCurrencyExchangeServiceTaxType{value: val, isSet: true}
}

func (v NullableCurrencyExchangeServiceTaxType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrencyExchangeServiceTaxType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


