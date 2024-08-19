/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ExchangeRatesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExchangeRatesDetails{}

// ExchangeRatesDetails struct for ExchangeRatesDetails
type ExchangeRatesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of exchange rates and their information.
	Rates []ExchangeRateType `json:"rates,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewExchangeRatesDetails instantiates a new ExchangeRatesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExchangeRatesDetails() *ExchangeRatesDetails {
	this := ExchangeRatesDetails{}
	return &this
}

// NewExchangeRatesDetailsWithDefaults instantiates a new ExchangeRatesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExchangeRatesDetailsWithDefaults() *ExchangeRatesDetails {
	this := ExchangeRatesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ExchangeRatesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRatesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ExchangeRatesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ExchangeRatesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRates returns the Rates field value if set, zero value otherwise.
func (o *ExchangeRatesDetails) GetRates() []ExchangeRateType {
	if o == nil || IsNil(o.Rates) {
		var ret []ExchangeRateType
		return ret
	}
	return o.Rates
}

// GetRatesOk returns a tuple with the Rates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRatesDetails) GetRatesOk() ([]ExchangeRateType, bool) {
	if o == nil || IsNil(o.Rates) {
		return nil, false
	}
	return o.Rates, true
}

// HasRates returns a boolean if a field has been set.
func (o *ExchangeRatesDetails) HasRates() bool {
	if o != nil && !IsNil(o.Rates) {
		return true
	}

	return false
}

// SetRates gets a reference to the given []ExchangeRateType and assigns it to the Rates field.
func (o *ExchangeRatesDetails) SetRates(v []ExchangeRateType) {
	o.Rates = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ExchangeRatesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRatesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ExchangeRatesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ExchangeRatesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ExchangeRatesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExchangeRatesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Rates) {
		toSerialize["rates"] = o.Rates
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableExchangeRatesDetails struct {
	value *ExchangeRatesDetails
	isSet bool
}

func (v NullableExchangeRatesDetails) Get() *ExchangeRatesDetails {
	return v.value
}

func (v *NullableExchangeRatesDetails) Set(val *ExchangeRatesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangeRatesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangeRatesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangeRatesDetails(val *ExchangeRatesDetails) *NullableExchangeRatesDetails {
	return &NullableExchangeRatesDetails{value: val, isSet: true}
}

func (v NullableExchangeRatesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangeRatesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


