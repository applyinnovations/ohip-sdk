/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the CompressedARInvoices type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompressedARInvoices{}

// CompressedARInvoices Response for the request to compress two or more invoices.
type CompressedARInvoices struct {
	Invoice *ARInvoiceType `json:"invoice,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCompressedARInvoices instantiates a new CompressedARInvoices object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompressedARInvoices() *CompressedARInvoices {
	this := CompressedARInvoices{}
	return &this
}

// NewCompressedARInvoicesWithDefaults instantiates a new CompressedARInvoices object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompressedARInvoicesWithDefaults() *CompressedARInvoices {
	this := CompressedARInvoices{}
	return &this
}

// GetInvoice returns the Invoice field value if set, zero value otherwise.
func (o *CompressedARInvoices) GetInvoice() ARInvoiceType {
	if o == nil || IsNil(o.Invoice) {
		var ret ARInvoiceType
		return ret
	}
	return *o.Invoice
}

// GetInvoiceOk returns a tuple with the Invoice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompressedARInvoices) GetInvoiceOk() (*ARInvoiceType, bool) {
	if o == nil || IsNil(o.Invoice) {
		return nil, false
	}
	return o.Invoice, true
}

// HasInvoice returns a boolean if a field has been set.
func (o *CompressedARInvoices) HasInvoice() bool {
	if o != nil && !IsNil(o.Invoice) {
		return true
	}

	return false
}

// SetInvoice gets a reference to the given ARInvoiceType and assigns it to the Invoice field.
func (o *CompressedARInvoices) SetInvoice(v ARInvoiceType) {
	o.Invoice = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CompressedARInvoices) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompressedARInvoices) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CompressedARInvoices) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CompressedARInvoices) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CompressedARInvoices) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompressedARInvoices) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CompressedARInvoices) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CompressedARInvoices) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CompressedARInvoices) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompressedARInvoices) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Invoice) {
		toSerialize["invoice"] = o.Invoice
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCompressedARInvoices struct {
	value *CompressedARInvoices
	isSet bool
}

func (v NullableCompressedARInvoices) Get() *CompressedARInvoices {
	return v.value
}

func (v *NullableCompressedARInvoices) Set(val *CompressedARInvoices) {
	v.value = val
	v.isSet = true
}

func (v NullableCompressedARInvoices) IsSet() bool {
	return v.isSet
}

func (v *NullableCompressedARInvoices) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompressedARInvoices(val *CompressedARInvoices) *NullableCompressedARInvoices {
	return &NullableCompressedARInvoices{value: val, isSet: true}
}

func (v NullableCompressedARInvoices) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompressedARInvoices) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


