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

// checks if the TransactionAdjustmentInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionAdjustmentInfoType{}

// TransactionAdjustmentInfoType Adjustment details of the transaction, if the transaction was created as part of an adjustment.
type TransactionAdjustmentInfoType struct {
	// Adjustment code used.
	Code *string `json:"code,omitempty"`
	// Department code for service recovery
	DepartmentCode *string `json:"departmentCode,omitempty"`
	// Reason for the adjustment.
	Reason *string `json:"reason,omitempty"`
}

// NewTransactionAdjustmentInfoType instantiates a new TransactionAdjustmentInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionAdjustmentInfoType() *TransactionAdjustmentInfoType {
	this := TransactionAdjustmentInfoType{}
	return &this
}

// NewTransactionAdjustmentInfoTypeWithDefaults instantiates a new TransactionAdjustmentInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionAdjustmentInfoTypeWithDefaults() *TransactionAdjustmentInfoType {
	this := TransactionAdjustmentInfoType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TransactionAdjustmentInfoType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionAdjustmentInfoType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TransactionAdjustmentInfoType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TransactionAdjustmentInfoType) SetCode(v string) {
	o.Code = &v
}

// GetDepartmentCode returns the DepartmentCode field value if set, zero value otherwise.
func (o *TransactionAdjustmentInfoType) GetDepartmentCode() string {
	if o == nil || IsNil(o.DepartmentCode) {
		var ret string
		return ret
	}
	return *o.DepartmentCode
}

// GetDepartmentCodeOk returns a tuple with the DepartmentCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionAdjustmentInfoType) GetDepartmentCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DepartmentCode) {
		return nil, false
	}
	return o.DepartmentCode, true
}

// HasDepartmentCode returns a boolean if a field has been set.
func (o *TransactionAdjustmentInfoType) HasDepartmentCode() bool {
	if o != nil && !IsNil(o.DepartmentCode) {
		return true
	}

	return false
}

// SetDepartmentCode gets a reference to the given string and assigns it to the DepartmentCode field.
func (o *TransactionAdjustmentInfoType) SetDepartmentCode(v string) {
	o.DepartmentCode = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *TransactionAdjustmentInfoType) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionAdjustmentInfoType) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *TransactionAdjustmentInfoType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *TransactionAdjustmentInfoType) SetReason(v string) {
	o.Reason = &v
}

func (o TransactionAdjustmentInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionAdjustmentInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DepartmentCode) {
		toSerialize["departmentCode"] = o.DepartmentCode
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	return toSerialize, nil
}

type NullableTransactionAdjustmentInfoType struct {
	value *TransactionAdjustmentInfoType
	isSet bool
}

func (v NullableTransactionAdjustmentInfoType) Get() *TransactionAdjustmentInfoType {
	return v.value
}

func (v *NullableTransactionAdjustmentInfoType) Set(val *TransactionAdjustmentInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionAdjustmentInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionAdjustmentInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionAdjustmentInfoType(val *TransactionAdjustmentInfoType) *NullableTransactionAdjustmentInfoType {
	return &NullableTransactionAdjustmentInfoType{value: val, isSet: true}
}

func (v NullableTransactionAdjustmentInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionAdjustmentInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


