/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the ConfigPackageTransactionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigPackageTransactionType{}

// ConfigPackageTransactionType A HotelPackageTransaction type.
type ConfigPackageTransactionType struct {
	// Package is marked as an allowance, in case charge is expected back to the guest account from external interface eg. POS. which need to be offset against a consumption allowance.
	Allowance *bool `json:"allowance,omitempty"`
	// The price calculation rule for this package.
	CalculationRule *string `json:"calculationRule,omitempty"`
	// The currency code for this package.
	Currency *string `json:"currency,omitempty"`
	PackagePostingRules *PackagePostingRulesType `json:"packagePostingRules,omitempty"`
	// The posting frequency for this package, e.g., daily, arrival, departure, etc.
	PostingType *string `json:"postingType,omitempty"`
}

// NewConfigPackageTransactionType instantiates a new ConfigPackageTransactionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigPackageTransactionType() *ConfigPackageTransactionType {
	this := ConfigPackageTransactionType{}
	return &this
}

// NewConfigPackageTransactionTypeWithDefaults instantiates a new ConfigPackageTransactionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigPackageTransactionTypeWithDefaults() *ConfigPackageTransactionType {
	this := ConfigPackageTransactionType{}
	return &this
}

// GetAllowance returns the Allowance field value if set, zero value otherwise.
func (o *ConfigPackageTransactionType) GetAllowance() bool {
	if o == nil || IsNil(o.Allowance) {
		var ret bool
		return ret
	}
	return *o.Allowance
}

// GetAllowanceOk returns a tuple with the Allowance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageTransactionType) GetAllowanceOk() (*bool, bool) {
	if o == nil || IsNil(o.Allowance) {
		return nil, false
	}
	return o.Allowance, true
}

// HasAllowance returns a boolean if a field has been set.
func (o *ConfigPackageTransactionType) HasAllowance() bool {
	if o != nil && !IsNil(o.Allowance) {
		return true
	}

	return false
}

// SetAllowance gets a reference to the given bool and assigns it to the Allowance field.
func (o *ConfigPackageTransactionType) SetAllowance(v bool) {
	o.Allowance = &v
}

// GetCalculationRule returns the CalculationRule field value if set, zero value otherwise.
func (o *ConfigPackageTransactionType) GetCalculationRule() string {
	if o == nil || IsNil(o.CalculationRule) {
		var ret string
		return ret
	}
	return *o.CalculationRule
}

// GetCalculationRuleOk returns a tuple with the CalculationRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageTransactionType) GetCalculationRuleOk() (*string, bool) {
	if o == nil || IsNil(o.CalculationRule) {
		return nil, false
	}
	return o.CalculationRule, true
}

// HasCalculationRule returns a boolean if a field has been set.
func (o *ConfigPackageTransactionType) HasCalculationRule() bool {
	if o != nil && !IsNil(o.CalculationRule) {
		return true
	}

	return false
}

// SetCalculationRule gets a reference to the given string and assigns it to the CalculationRule field.
func (o *ConfigPackageTransactionType) SetCalculationRule(v string) {
	o.CalculationRule = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *ConfigPackageTransactionType) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageTransactionType) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *ConfigPackageTransactionType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *ConfigPackageTransactionType) SetCurrency(v string) {
	o.Currency = &v
}

// GetPackagePostingRules returns the PackagePostingRules field value if set, zero value otherwise.
func (o *ConfigPackageTransactionType) GetPackagePostingRules() PackagePostingRulesType {
	if o == nil || IsNil(o.PackagePostingRules) {
		var ret PackagePostingRulesType
		return ret
	}
	return *o.PackagePostingRules
}

// GetPackagePostingRulesOk returns a tuple with the PackagePostingRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageTransactionType) GetPackagePostingRulesOk() (*PackagePostingRulesType, bool) {
	if o == nil || IsNil(o.PackagePostingRules) {
		return nil, false
	}
	return o.PackagePostingRules, true
}

// HasPackagePostingRules returns a boolean if a field has been set.
func (o *ConfigPackageTransactionType) HasPackagePostingRules() bool {
	if o != nil && !IsNil(o.PackagePostingRules) {
		return true
	}

	return false
}

// SetPackagePostingRules gets a reference to the given PackagePostingRulesType and assigns it to the PackagePostingRules field.
func (o *ConfigPackageTransactionType) SetPackagePostingRules(v PackagePostingRulesType) {
	o.PackagePostingRules = &v
}

// GetPostingType returns the PostingType field value if set, zero value otherwise.
func (o *ConfigPackageTransactionType) GetPostingType() string {
	if o == nil || IsNil(o.PostingType) {
		var ret string
		return ret
	}
	return *o.PostingType
}

// GetPostingTypeOk returns a tuple with the PostingType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageTransactionType) GetPostingTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PostingType) {
		return nil, false
	}
	return o.PostingType, true
}

// HasPostingType returns a boolean if a field has been set.
func (o *ConfigPackageTransactionType) HasPostingType() bool {
	if o != nil && !IsNil(o.PostingType) {
		return true
	}

	return false
}

// SetPostingType gets a reference to the given string and assigns it to the PostingType field.
func (o *ConfigPackageTransactionType) SetPostingType(v string) {
	o.PostingType = &v
}

func (o ConfigPackageTransactionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigPackageTransactionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Allowance) {
		toSerialize["allowance"] = o.Allowance
	}
	if !IsNil(o.CalculationRule) {
		toSerialize["calculationRule"] = o.CalculationRule
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.PackagePostingRules) {
		toSerialize["packagePostingRules"] = o.PackagePostingRules
	}
	if !IsNil(o.PostingType) {
		toSerialize["postingType"] = o.PostingType
	}
	return toSerialize, nil
}

type NullableConfigPackageTransactionType struct {
	value *ConfigPackageTransactionType
	isSet bool
}

func (v NullableConfigPackageTransactionType) Get() *ConfigPackageTransactionType {
	return v.value
}

func (v *NullableConfigPackageTransactionType) Set(val *ConfigPackageTransactionType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigPackageTransactionType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigPackageTransactionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigPackageTransactionType(val *ConfigPackageTransactionType) *NullableConfigPackageTransactionType {
	return &NullableConfigPackageTransactionType{value: val, isSet: true}
}

func (v NullableConfigPackageTransactionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigPackageTransactionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

