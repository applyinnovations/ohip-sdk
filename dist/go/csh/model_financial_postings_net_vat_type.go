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

// checks if the FinancialPostingsNetVatType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FinancialPostingsNetVatType{}

// FinancialPostingsNetVatType Financial Postings with their Net and Vat breakup
type FinancialPostingsNetVatType struct {
	Posting *DetailPostingType `json:"posting,omitempty"`
	PostingBreakdown *PostingBreakdownType `json:"postingBreakdown,omitempty"`
}

// NewFinancialPostingsNetVatType instantiates a new FinancialPostingsNetVatType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFinancialPostingsNetVatType() *FinancialPostingsNetVatType {
	this := FinancialPostingsNetVatType{}
	return &this
}

// NewFinancialPostingsNetVatTypeWithDefaults instantiates a new FinancialPostingsNetVatType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFinancialPostingsNetVatTypeWithDefaults() *FinancialPostingsNetVatType {
	this := FinancialPostingsNetVatType{}
	return &this
}

// GetPosting returns the Posting field value if set, zero value otherwise.
func (o *FinancialPostingsNetVatType) GetPosting() DetailPostingType {
	if o == nil || IsNil(o.Posting) {
		var ret DetailPostingType
		return ret
	}
	return *o.Posting
}

// GetPostingOk returns a tuple with the Posting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FinancialPostingsNetVatType) GetPostingOk() (*DetailPostingType, bool) {
	if o == nil || IsNil(o.Posting) {
		return nil, false
	}
	return o.Posting, true
}

// HasPosting returns a boolean if a field has been set.
func (o *FinancialPostingsNetVatType) HasPosting() bool {
	if o != nil && !IsNil(o.Posting) {
		return true
	}

	return false
}

// SetPosting gets a reference to the given DetailPostingType and assigns it to the Posting field.
func (o *FinancialPostingsNetVatType) SetPosting(v DetailPostingType) {
	o.Posting = &v
}

// GetPostingBreakdown returns the PostingBreakdown field value if set, zero value otherwise.
func (o *FinancialPostingsNetVatType) GetPostingBreakdown() PostingBreakdownType {
	if o == nil || IsNil(o.PostingBreakdown) {
		var ret PostingBreakdownType
		return ret
	}
	return *o.PostingBreakdown
}

// GetPostingBreakdownOk returns a tuple with the PostingBreakdown field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FinancialPostingsNetVatType) GetPostingBreakdownOk() (*PostingBreakdownType, bool) {
	if o == nil || IsNil(o.PostingBreakdown) {
		return nil, false
	}
	return o.PostingBreakdown, true
}

// HasPostingBreakdown returns a boolean if a field has been set.
func (o *FinancialPostingsNetVatType) HasPostingBreakdown() bool {
	if o != nil && !IsNil(o.PostingBreakdown) {
		return true
	}

	return false
}

// SetPostingBreakdown gets a reference to the given PostingBreakdownType and assigns it to the PostingBreakdown field.
func (o *FinancialPostingsNetVatType) SetPostingBreakdown(v PostingBreakdownType) {
	o.PostingBreakdown = &v
}

func (o FinancialPostingsNetVatType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FinancialPostingsNetVatType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Posting) {
		toSerialize["posting"] = o.Posting
	}
	if !IsNil(o.PostingBreakdown) {
		toSerialize["postingBreakdown"] = o.PostingBreakdown
	}
	return toSerialize, nil
}

type NullableFinancialPostingsNetVatType struct {
	value *FinancialPostingsNetVatType
	isSet bool
}

func (v NullableFinancialPostingsNetVatType) Get() *FinancialPostingsNetVatType {
	return v.value
}

func (v *NullableFinancialPostingsNetVatType) Set(val *FinancialPostingsNetVatType) {
	v.value = val
	v.isSet = true
}

func (v NullableFinancialPostingsNetVatType) IsSet() bool {
	return v.isSet
}

func (v *NullableFinancialPostingsNetVatType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFinancialPostingsNetVatType(val *FinancialPostingsNetVatType) *NullableFinancialPostingsNetVatType {
	return &NullableFinancialPostingsNetVatType{value: val, isSet: true}
}

func (v NullableFinancialPostingsNetVatType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFinancialPostingsNetVatType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

