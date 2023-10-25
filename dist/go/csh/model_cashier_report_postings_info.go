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

// checks if the CashierReportPostingsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierReportPostingsInfo{}

// CashierReportPostingsInfo Response for fetching the Cashier report transactions.
type CashierReportPostingsInfo struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Details of the transaction(Posting).
	Postings []DetailPostingType `json:"postings,omitempty"`
	// List of Transaction codes info.
	TransactionCodes []TrxInfoType `json:"transactionCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCashierReportPostingsInfo instantiates a new CashierReportPostingsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierReportPostingsInfo() *CashierReportPostingsInfo {
	this := CashierReportPostingsInfo{}
	return &this
}

// NewCashierReportPostingsInfoWithDefaults instantiates a new CashierReportPostingsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierReportPostingsInfoWithDefaults() *CashierReportPostingsInfo {
	this := CashierReportPostingsInfo{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CashierReportPostingsInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierReportPostingsInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CashierReportPostingsInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CashierReportPostingsInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPostings returns the Postings field value if set, zero value otherwise.
func (o *CashierReportPostingsInfo) GetPostings() []DetailPostingType {
	if o == nil || IsNil(o.Postings) {
		var ret []DetailPostingType
		return ret
	}
	return o.Postings
}

// GetPostingsOk returns a tuple with the Postings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierReportPostingsInfo) GetPostingsOk() ([]DetailPostingType, bool) {
	if o == nil || IsNil(o.Postings) {
		return nil, false
	}
	return o.Postings, true
}

// HasPostings returns a boolean if a field has been set.
func (o *CashierReportPostingsInfo) HasPostings() bool {
	if o != nil && !IsNil(o.Postings) {
		return true
	}

	return false
}

// SetPostings gets a reference to the given []DetailPostingType and assigns it to the Postings field.
func (o *CashierReportPostingsInfo) SetPostings(v []DetailPostingType) {
	o.Postings = v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *CashierReportPostingsInfo) GetTransactionCodes() []TrxInfoType {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []TrxInfoType
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierReportPostingsInfo) GetTransactionCodesOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *CashierReportPostingsInfo) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []TrxInfoType and assigns it to the TransactionCodes field.
func (o *CashierReportPostingsInfo) SetTransactionCodes(v []TrxInfoType) {
	o.TransactionCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CashierReportPostingsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierReportPostingsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CashierReportPostingsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CashierReportPostingsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CashierReportPostingsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierReportPostingsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Postings) {
		toSerialize["postings"] = o.Postings
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCashierReportPostingsInfo struct {
	value *CashierReportPostingsInfo
	isSet bool
}

func (v NullableCashierReportPostingsInfo) Get() *CashierReportPostingsInfo {
	return v.value
}

func (v *NullableCashierReportPostingsInfo) Set(val *CashierReportPostingsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierReportPostingsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierReportPostingsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierReportPostingsInfo(val *CashierReportPostingsInfo) *NullableCashierReportPostingsInfo {
	return &NullableCashierReportPostingsInfo{value: val, isSet: true}
}

func (v NullableCashierReportPostingsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierReportPostingsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


