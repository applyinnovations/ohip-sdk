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

// checks if the InvoicesOnHold type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InvoicesOnHold{}

// InvoicesOnHold Response after fetching on-hold invoices.
type InvoicesOnHold struct {
	// Account Invoice information.
	Details []ARAccountInvoicesPaymentsType `json:"details,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewInvoicesOnHold instantiates a new InvoicesOnHold object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInvoicesOnHold() *InvoicesOnHold {
	this := InvoicesOnHold{}
	return &this
}

// NewInvoicesOnHoldWithDefaults instantiates a new InvoicesOnHold object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInvoicesOnHoldWithDefaults() *InvoicesOnHold {
	this := InvoicesOnHold{}
	return &this
}

// GetDetails returns the Details field value if set, zero value otherwise.
func (o *InvoicesOnHold) GetDetails() []ARAccountInvoicesPaymentsType {
	if o == nil || IsNil(o.Details) {
		var ret []ARAccountInvoicesPaymentsType
		return ret
	}
	return o.Details
}

// GetDetailsOk returns a tuple with the Details field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InvoicesOnHold) GetDetailsOk() ([]ARAccountInvoicesPaymentsType, bool) {
	if o == nil || IsNil(o.Details) {
		return nil, false
	}
	return o.Details, true
}

// HasDetails returns a boolean if a field has been set.
func (o *InvoicesOnHold) HasDetails() bool {
	if o != nil && !IsNil(o.Details) {
		return true
	}

	return false
}

// SetDetails gets a reference to the given []ARAccountInvoicesPaymentsType and assigns it to the Details field.
func (o *InvoicesOnHold) SetDetails(v []ARAccountInvoicesPaymentsType) {
	o.Details = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *InvoicesOnHold) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InvoicesOnHold) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *InvoicesOnHold) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *InvoicesOnHold) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *InvoicesOnHold) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InvoicesOnHold) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *InvoicesOnHold) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *InvoicesOnHold) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o InvoicesOnHold) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InvoicesOnHold) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Details) {
		toSerialize["details"] = o.Details
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableInvoicesOnHold struct {
	value *InvoicesOnHold
	isSet bool
}

func (v NullableInvoicesOnHold) Get() *InvoicesOnHold {
	return v.value
}

func (v *NullableInvoicesOnHold) Set(val *InvoicesOnHold) {
	v.value = val
	v.isSet = true
}

func (v NullableInvoicesOnHold) IsSet() bool {
	return v.isSet
}

func (v *NullableInvoicesOnHold) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvoicesOnHold(val *InvoicesOnHold) *NullableInvoicesOnHold {
	return &NullableInvoicesOnHold{value: val, isSet: true}
}

func (v NullableInvoicesOnHold) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvoicesOnHold) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


