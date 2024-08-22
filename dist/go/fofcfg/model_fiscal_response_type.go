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

// checks if the FiscalResponseType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalResponseType{}

// FiscalResponseType Provides information which is used for fiscal response processing.
type FiscalResponseType struct {
	// Fiscal Folio sequence ID stored in queue table.
	FolioSeqId *int32 `json:"folioSeqId,omitempty"`
	// Flag to do the retrieval process of fiscal printing or not.
	RetryFiscalPrinting *bool `json:"retryFiscalPrinting,omitempty"`
}

// NewFiscalResponseType instantiates a new FiscalResponseType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalResponseType() *FiscalResponseType {
	this := FiscalResponseType{}
	return &this
}

// NewFiscalResponseTypeWithDefaults instantiates a new FiscalResponseType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalResponseTypeWithDefaults() *FiscalResponseType {
	this := FiscalResponseType{}
	return &this
}

// GetFolioSeqId returns the FolioSeqId field value if set, zero value otherwise.
func (o *FiscalResponseType) GetFolioSeqId() int32 {
	if o == nil || IsNil(o.FolioSeqId) {
		var ret int32
		return ret
	}
	return *o.FolioSeqId
}

// GetFolioSeqIdOk returns a tuple with the FolioSeqId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalResponseType) GetFolioSeqIdOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioSeqId) {
		return nil, false
	}
	return o.FolioSeqId, true
}

// HasFolioSeqId returns a boolean if a field has been set.
func (o *FiscalResponseType) HasFolioSeqId() bool {
	if o != nil && !IsNil(o.FolioSeqId) {
		return true
	}

	return false
}

// SetFolioSeqId gets a reference to the given int32 and assigns it to the FolioSeqId field.
func (o *FiscalResponseType) SetFolioSeqId(v int32) {
	o.FolioSeqId = &v
}

// GetRetryFiscalPrinting returns the RetryFiscalPrinting field value if set, zero value otherwise.
func (o *FiscalResponseType) GetRetryFiscalPrinting() bool {
	if o == nil || IsNil(o.RetryFiscalPrinting) {
		var ret bool
		return ret
	}
	return *o.RetryFiscalPrinting
}

// GetRetryFiscalPrintingOk returns a tuple with the RetryFiscalPrinting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalResponseType) GetRetryFiscalPrintingOk() (*bool, bool) {
	if o == nil || IsNil(o.RetryFiscalPrinting) {
		return nil, false
	}
	return o.RetryFiscalPrinting, true
}

// HasRetryFiscalPrinting returns a boolean if a field has been set.
func (o *FiscalResponseType) HasRetryFiscalPrinting() bool {
	if o != nil && !IsNil(o.RetryFiscalPrinting) {
		return true
	}

	return false
}

// SetRetryFiscalPrinting gets a reference to the given bool and assigns it to the RetryFiscalPrinting field.
func (o *FiscalResponseType) SetRetryFiscalPrinting(v bool) {
	o.RetryFiscalPrinting = &v
}

func (o FiscalResponseType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalResponseType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioSeqId) {
		toSerialize["folioSeqId"] = o.FolioSeqId
	}
	if !IsNil(o.RetryFiscalPrinting) {
		toSerialize["retryFiscalPrinting"] = o.RetryFiscalPrinting
	}
	return toSerialize, nil
}

type NullableFiscalResponseType struct {
	value *FiscalResponseType
	isSet bool
}

func (v NullableFiscalResponseType) Get() *FiscalResponseType {
	return v.value
}

func (v *NullableFiscalResponseType) Set(val *FiscalResponseType) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalResponseType) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalResponseType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalResponseType(val *FiscalResponseType) *NullableFiscalResponseType {
	return &NullableFiscalResponseType{value: val, isSet: true}
}

func (v NullableFiscalResponseType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalResponseType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


