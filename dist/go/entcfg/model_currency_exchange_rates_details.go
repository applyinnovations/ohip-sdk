/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CurrencyExchangeRatesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CurrencyExchangeRatesDetails{}

// CurrencyExchangeRatesDetails Response with the list of currency codes and their exchange rates for each property requested.
type CurrencyExchangeRatesDetails struct {
	// List of currency codes with their exchange rates.
	ExchangeRates []CurrencyExchangeRatesDetailsExchangeRatesInner `json:"exchangeRates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCurrencyExchangeRatesDetails instantiates a new CurrencyExchangeRatesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrencyExchangeRatesDetails() *CurrencyExchangeRatesDetails {
	this := CurrencyExchangeRatesDetails{}
	return &this
}

// NewCurrencyExchangeRatesDetailsWithDefaults instantiates a new CurrencyExchangeRatesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyExchangeRatesDetailsWithDefaults() *CurrencyExchangeRatesDetails {
	this := CurrencyExchangeRatesDetails{}
	return &this
}

// GetExchangeRates returns the ExchangeRates field value if set, zero value otherwise.
func (o *CurrencyExchangeRatesDetails) GetExchangeRates() []CurrencyExchangeRatesDetailsExchangeRatesInner {
	if o == nil || IsNil(o.ExchangeRates) {
		var ret []CurrencyExchangeRatesDetailsExchangeRatesInner
		return ret
	}
	return o.ExchangeRates
}

// GetExchangeRatesOk returns a tuple with the ExchangeRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeRatesDetails) GetExchangeRatesOk() ([]CurrencyExchangeRatesDetailsExchangeRatesInner, bool) {
	if o == nil || IsNil(o.ExchangeRates) {
		return nil, false
	}
	return o.ExchangeRates, true
}

// HasExchangeRates returns a boolean if a field has been set.
func (o *CurrencyExchangeRatesDetails) HasExchangeRates() bool {
	if o != nil && !IsNil(o.ExchangeRates) {
		return true
	}

	return false
}

// SetExchangeRates gets a reference to the given []CurrencyExchangeRatesDetailsExchangeRatesInner and assigns it to the ExchangeRates field.
func (o *CurrencyExchangeRatesDetails) SetExchangeRates(v []CurrencyExchangeRatesDetailsExchangeRatesInner) {
	o.ExchangeRates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CurrencyExchangeRatesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeRatesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CurrencyExchangeRatesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CurrencyExchangeRatesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CurrencyExchangeRatesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyExchangeRatesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CurrencyExchangeRatesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CurrencyExchangeRatesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CurrencyExchangeRatesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CurrencyExchangeRatesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExchangeRates) {
		toSerialize["exchangeRates"] = o.ExchangeRates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCurrencyExchangeRatesDetails struct {
	value *CurrencyExchangeRatesDetails
	isSet bool
}

func (v NullableCurrencyExchangeRatesDetails) Get() *CurrencyExchangeRatesDetails {
	return v.value
}

func (v *NullableCurrencyExchangeRatesDetails) Set(val *CurrencyExchangeRatesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrencyExchangeRatesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrencyExchangeRatesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrencyExchangeRatesDetails(val *CurrencyExchangeRatesDetails) *NullableCurrencyExchangeRatesDetails {
	return &NullableCurrencyExchangeRatesDetails{value: val, isSet: true}
}

func (v NullableCurrencyExchangeRatesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrencyExchangeRatesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

