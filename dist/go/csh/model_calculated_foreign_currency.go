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

// checks if the CalculatedForeignCurrency type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CalculatedForeignCurrency{}

// CalculatedForeignCurrency Information regarding charges in batch result for each reservation.
type CalculatedForeignCurrency struct {
	ExchangeInfo []ExchangeRateCalculationType `json:"exchangeInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCalculatedForeignCurrency instantiates a new CalculatedForeignCurrency object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCalculatedForeignCurrency() *CalculatedForeignCurrency {
	this := CalculatedForeignCurrency{}
	return &this
}

// NewCalculatedForeignCurrencyWithDefaults instantiates a new CalculatedForeignCurrency object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCalculatedForeignCurrencyWithDefaults() *CalculatedForeignCurrency {
	this := CalculatedForeignCurrency{}
	return &this
}

// GetExchangeInfo returns the ExchangeInfo field value if set, zero value otherwise.
func (o *CalculatedForeignCurrency) GetExchangeInfo() []ExchangeRateCalculationType {
	if o == nil || IsNil(o.ExchangeInfo) {
		var ret []ExchangeRateCalculationType
		return ret
	}
	return o.ExchangeInfo
}

// GetExchangeInfoOk returns a tuple with the ExchangeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalculatedForeignCurrency) GetExchangeInfoOk() ([]ExchangeRateCalculationType, bool) {
	if o == nil || IsNil(o.ExchangeInfo) {
		return nil, false
	}
	return o.ExchangeInfo, true
}

// HasExchangeInfo returns a boolean if a field has been set.
func (o *CalculatedForeignCurrency) HasExchangeInfo() bool {
	if o != nil && !IsNil(o.ExchangeInfo) {
		return true
	}

	return false
}

// SetExchangeInfo gets a reference to the given []ExchangeRateCalculationType and assigns it to the ExchangeInfo field.
func (o *CalculatedForeignCurrency) SetExchangeInfo(v []ExchangeRateCalculationType) {
	o.ExchangeInfo = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CalculatedForeignCurrency) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalculatedForeignCurrency) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CalculatedForeignCurrency) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CalculatedForeignCurrency) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CalculatedForeignCurrency) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalculatedForeignCurrency) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CalculatedForeignCurrency) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CalculatedForeignCurrency) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CalculatedForeignCurrency) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CalculatedForeignCurrency) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExchangeInfo) {
		toSerialize["exchangeInfo"] = o.ExchangeInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCalculatedForeignCurrency struct {
	value *CalculatedForeignCurrency
	isSet bool
}

func (v NullableCalculatedForeignCurrency) Get() *CalculatedForeignCurrency {
	return v.value
}

func (v *NullableCalculatedForeignCurrency) Set(val *CalculatedForeignCurrency) {
	v.value = val
	v.isSet = true
}

func (v NullableCalculatedForeignCurrency) IsSet() bool {
	return v.isSet
}

func (v *NullableCalculatedForeignCurrency) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCalculatedForeignCurrency(val *CalculatedForeignCurrency) *NullableCalculatedForeignCurrency {
	return &NullableCalculatedForeignCurrency{value: val, isSet: true}
}

func (v NullableCalculatedForeignCurrency) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCalculatedForeignCurrency) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


