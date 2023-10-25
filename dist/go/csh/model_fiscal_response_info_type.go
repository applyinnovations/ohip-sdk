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

// checks if the FiscalResponseInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalResponseInfoType{}

// FiscalResponseInfoType Invoice information returned from the fiscal service.
type FiscalResponseInfoType struct {
	// Uniquely identifies data sent from FLIP.
	FiscalResponseId *float32 `json:"fiscalResponseId,omitempty"`
	// Fiscal terminal invoice number returned from fiscal service.
	InvoiceNo *float32 `json:"invoiceNo,omitempty"`
}

// NewFiscalResponseInfoType instantiates a new FiscalResponseInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalResponseInfoType() *FiscalResponseInfoType {
	this := FiscalResponseInfoType{}
	return &this
}

// NewFiscalResponseInfoTypeWithDefaults instantiates a new FiscalResponseInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalResponseInfoTypeWithDefaults() *FiscalResponseInfoType {
	this := FiscalResponseInfoType{}
	return &this
}

// GetFiscalResponseId returns the FiscalResponseId field value if set, zero value otherwise.
func (o *FiscalResponseInfoType) GetFiscalResponseId() float32 {
	if o == nil || IsNil(o.FiscalResponseId) {
		var ret float32
		return ret
	}
	return *o.FiscalResponseId
}

// GetFiscalResponseIdOk returns a tuple with the FiscalResponseId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalResponseInfoType) GetFiscalResponseIdOk() (*float32, bool) {
	if o == nil || IsNil(o.FiscalResponseId) {
		return nil, false
	}
	return o.FiscalResponseId, true
}

// HasFiscalResponseId returns a boolean if a field has been set.
func (o *FiscalResponseInfoType) HasFiscalResponseId() bool {
	if o != nil && !IsNil(o.FiscalResponseId) {
		return true
	}

	return false
}

// SetFiscalResponseId gets a reference to the given float32 and assigns it to the FiscalResponseId field.
func (o *FiscalResponseInfoType) SetFiscalResponseId(v float32) {
	o.FiscalResponseId = &v
}

// GetInvoiceNo returns the InvoiceNo field value if set, zero value otherwise.
func (o *FiscalResponseInfoType) GetInvoiceNo() float32 {
	if o == nil || IsNil(o.InvoiceNo) {
		var ret float32
		return ret
	}
	return *o.InvoiceNo
}

// GetInvoiceNoOk returns a tuple with the InvoiceNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalResponseInfoType) GetInvoiceNoOk() (*float32, bool) {
	if o == nil || IsNil(o.InvoiceNo) {
		return nil, false
	}
	return o.InvoiceNo, true
}

// HasInvoiceNo returns a boolean if a field has been set.
func (o *FiscalResponseInfoType) HasInvoiceNo() bool {
	if o != nil && !IsNil(o.InvoiceNo) {
		return true
	}

	return false
}

// SetInvoiceNo gets a reference to the given float32 and assigns it to the InvoiceNo field.
func (o *FiscalResponseInfoType) SetInvoiceNo(v float32) {
	o.InvoiceNo = &v
}

func (o FiscalResponseInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalResponseInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalResponseId) {
		toSerialize["fiscalResponseId"] = o.FiscalResponseId
	}
	if !IsNil(o.InvoiceNo) {
		toSerialize["invoiceNo"] = o.InvoiceNo
	}
	return toSerialize, nil
}

type NullableFiscalResponseInfoType struct {
	value *FiscalResponseInfoType
	isSet bool
}

func (v NullableFiscalResponseInfoType) Get() *FiscalResponseInfoType {
	return v.value
}

func (v *NullableFiscalResponseInfoType) Set(val *FiscalResponseInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalResponseInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalResponseInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalResponseInfoType(val *FiscalResponseInfoType) *NullableFiscalResponseInfoType {
	return &NullableFiscalResponseInfoType{value: val, isSet: true}
}

func (v NullableFiscalResponseInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalResponseInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


