/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CashierTransactionsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierTransactionsDetails{}

// CashierTransactionsDetails Response for the fetch cashier's shift transactions.
type CashierTransactionsDetails struct {
	CashierTransactionsInfo *CashierTransactionsType `json:"cashierTransactionsInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCashierTransactionsDetails instantiates a new CashierTransactionsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierTransactionsDetails() *CashierTransactionsDetails {
	this := CashierTransactionsDetails{}
	return &this
}

// NewCashierTransactionsDetailsWithDefaults instantiates a new CashierTransactionsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierTransactionsDetailsWithDefaults() *CashierTransactionsDetails {
	this := CashierTransactionsDetails{}
	return &this
}

// GetCashierTransactionsInfo returns the CashierTransactionsInfo field value if set, zero value otherwise.
func (o *CashierTransactionsDetails) GetCashierTransactionsInfo() CashierTransactionsType {
	if o == nil || IsNil(o.CashierTransactionsInfo) {
		var ret CashierTransactionsType
		return ret
	}
	return *o.CashierTransactionsInfo
}

// GetCashierTransactionsInfoOk returns a tuple with the CashierTransactionsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierTransactionsDetails) GetCashierTransactionsInfoOk() (*CashierTransactionsType, bool) {
	if o == nil || IsNil(o.CashierTransactionsInfo) {
		return nil, false
	}
	return o.CashierTransactionsInfo, true
}

// HasCashierTransactionsInfo returns a boolean if a field has been set.
func (o *CashierTransactionsDetails) HasCashierTransactionsInfo() bool {
	if o != nil && !IsNil(o.CashierTransactionsInfo) {
		return true
	}

	return false
}

// SetCashierTransactionsInfo gets a reference to the given CashierTransactionsType and assigns it to the CashierTransactionsInfo field.
func (o *CashierTransactionsDetails) SetCashierTransactionsInfo(v CashierTransactionsType) {
	o.CashierTransactionsInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CashierTransactionsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierTransactionsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CashierTransactionsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CashierTransactionsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CashierTransactionsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierTransactionsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CashierTransactionsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CashierTransactionsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CashierTransactionsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierTransactionsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierTransactionsInfo) {
		toSerialize["cashierTransactionsInfo"] = o.CashierTransactionsInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCashierTransactionsDetails struct {
	value *CashierTransactionsDetails
	isSet bool
}

func (v NullableCashierTransactionsDetails) Get() *CashierTransactionsDetails {
	return v.value
}

func (v *NullableCashierTransactionsDetails) Set(val *CashierTransactionsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierTransactionsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierTransactionsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierTransactionsDetails(val *CashierTransactionsDetails) *NullableCashierTransactionsDetails {
	return &NullableCashierTransactionsDetails{value: val, isSet: true}
}

func (v NullableCashierTransactionsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierTransactionsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

