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

// checks if the TransferDirectBillsToArRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransferDirectBillsToArRequest{}

// TransferDirectBillsToArRequest struct for TransferDirectBillsToArRequest
type TransferDirectBillsToArRequest struct {
	Criteria *TransferDirectBillsToArCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTransferDirectBillsToArRequest instantiates a new TransferDirectBillsToArRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferDirectBillsToArRequest() *TransferDirectBillsToArRequest {
	this := TransferDirectBillsToArRequest{}
	return &this
}

// NewTransferDirectBillsToArRequestWithDefaults instantiates a new TransferDirectBillsToArRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferDirectBillsToArRequestWithDefaults() *TransferDirectBillsToArRequest {
	this := TransferDirectBillsToArRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *TransferDirectBillsToArRequest) GetCriteria() TransferDirectBillsToArCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret TransferDirectBillsToArCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArRequest) GetCriteriaOk() (*TransferDirectBillsToArCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *TransferDirectBillsToArRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given TransferDirectBillsToArCriteriaType and assigns it to the Criteria field.
func (o *TransferDirectBillsToArRequest) SetCriteria(v TransferDirectBillsToArCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TransferDirectBillsToArRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TransferDirectBillsToArRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TransferDirectBillsToArRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TransferDirectBillsToArRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferDirectBillsToArRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TransferDirectBillsToArRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TransferDirectBillsToArRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TransferDirectBillsToArRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransferDirectBillsToArRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTransferDirectBillsToArRequest struct {
	value *TransferDirectBillsToArRequest
	isSet bool
}

func (v NullableTransferDirectBillsToArRequest) Get() *TransferDirectBillsToArRequest {
	return v.value
}

func (v *NullableTransferDirectBillsToArRequest) Set(val *TransferDirectBillsToArRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferDirectBillsToArRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferDirectBillsToArRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferDirectBillsToArRequest(val *TransferDirectBillsToArRequest) *NullableTransferDirectBillsToArRequest {
	return &NullableTransferDirectBillsToArRequest{value: val, isSet: true}
}

func (v NullableTransferDirectBillsToArRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferDirectBillsToArRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


