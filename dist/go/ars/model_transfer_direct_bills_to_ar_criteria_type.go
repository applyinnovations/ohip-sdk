/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the TransferDirectBillsToArCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransferDirectBillsToArCriteriaType{}

// TransferDirectBillsToArCriteriaType Provides information about Transfer Direct Bills To Ar Criteria Type.
type TransferDirectBillsToArCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Code of the Hotel.
	HotelId *string `json:"hotelId,omitempty"`
	// List of Invoice Numbers.
	InvoiceNo []float32 `json:"invoiceNo,omitempty"`
}

// NewTransferDirectBillsToArCriteriaType instantiates a new TransferDirectBillsToArCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferDirectBillsToArCriteriaType() *TransferDirectBillsToArCriteriaType {
	this := TransferDirectBillsToArCriteriaType{}
	return &this
}

// NewTransferDirectBillsToArCriteriaTypeWithDefaults instantiates a new TransferDirectBillsToArCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferDirectBillsToArCriteriaTypeWithDefaults() *TransferDirectBillsToArCriteriaType {
	this := TransferDirectBillsToArCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *TransferDirectBillsToArCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *TransferDirectBillsToArCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *TransferDirectBillsToArCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TransferDirectBillsToArCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TransferDirectBillsToArCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TransferDirectBillsToArCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInvoiceNo returns the InvoiceNo field value if set, zero value otherwise.
func (o *TransferDirectBillsToArCriteriaType) GetInvoiceNo() []float32 {
	if o == nil || IsNil(o.InvoiceNo) {
		var ret []float32
		return ret
	}
	return o.InvoiceNo
}

// GetInvoiceNoOk returns a tuple with the InvoiceNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArCriteriaType) GetInvoiceNoOk() ([]float32, bool) {
	if o == nil || IsNil(o.InvoiceNo) {
		return nil, false
	}
	return o.InvoiceNo, true
}

// HasInvoiceNo returns a boolean if a field has been set.
func (o *TransferDirectBillsToArCriteriaType) HasInvoiceNo() bool {
	if o != nil && !IsNil(o.InvoiceNo) {
		return true
	}

	return false
}

// SetInvoiceNo gets a reference to the given []float32 and assigns it to the InvoiceNo field.
func (o *TransferDirectBillsToArCriteriaType) SetInvoiceNo(v []float32) {
	o.InvoiceNo = v
}

func (o TransferDirectBillsToArCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransferDirectBillsToArCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InvoiceNo) {
		toSerialize["invoiceNo"] = o.InvoiceNo
	}
	return toSerialize, nil
}

type NullableTransferDirectBillsToArCriteriaType struct {
	value *TransferDirectBillsToArCriteriaType
	isSet bool
}

func (v NullableTransferDirectBillsToArCriteriaType) Get() *TransferDirectBillsToArCriteriaType {
	return v.value
}

func (v *NullableTransferDirectBillsToArCriteriaType) Set(val *TransferDirectBillsToArCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferDirectBillsToArCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferDirectBillsToArCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferDirectBillsToArCriteriaType(val *TransferDirectBillsToArCriteriaType) *NullableTransferDirectBillsToArCriteriaType {
	return &NullableTransferDirectBillsToArCriteriaType{value: val, isSet: true}
}

func (v NullableTransferDirectBillsToArCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferDirectBillsToArCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


