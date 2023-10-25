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

// checks if the CashOutPrepaidCardRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashOutPrepaidCardRequest{}

// CashOutPrepaidCardRequest struct for CashOutPrepaidCardRequest
type CashOutPrepaidCardRequest struct {
	Criteria *ActivatePrepaidCardCriteria `json:"criteria,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCashOutPrepaidCardRequest instantiates a new CashOutPrepaidCardRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashOutPrepaidCardRequest() *CashOutPrepaidCardRequest {
	this := CashOutPrepaidCardRequest{}
	return &this
}

// NewCashOutPrepaidCardRequestWithDefaults instantiates a new CashOutPrepaidCardRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashOutPrepaidCardRequestWithDefaults() *CashOutPrepaidCardRequest {
	this := CashOutPrepaidCardRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *CashOutPrepaidCardRequest) GetCriteria() ActivatePrepaidCardCriteria {
	if o == nil || IsNil(o.Criteria) {
		var ret ActivatePrepaidCardCriteria
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashOutPrepaidCardRequest) GetCriteriaOk() (*ActivatePrepaidCardCriteria, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *CashOutPrepaidCardRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given ActivatePrepaidCardCriteria and assigns it to the Criteria field.
func (o *CashOutPrepaidCardRequest) SetCriteria(v ActivatePrepaidCardCriteria) {
	o.Criteria = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CashOutPrepaidCardRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashOutPrepaidCardRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CashOutPrepaidCardRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CashOutPrepaidCardRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CashOutPrepaidCardRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashOutPrepaidCardRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCashOutPrepaidCardRequest struct {
	value *CashOutPrepaidCardRequest
	isSet bool
}

func (v NullableCashOutPrepaidCardRequest) Get() *CashOutPrepaidCardRequest {
	return v.value
}

func (v *NullableCashOutPrepaidCardRequest) Set(val *CashOutPrepaidCardRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCashOutPrepaidCardRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCashOutPrepaidCardRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashOutPrepaidCardRequest(val *CashOutPrepaidCardRequest) *NullableCashOutPrepaidCardRequest {
	return &NullableCashOutPrepaidCardRequest{value: val, isSet: true}
}

func (v NullableCashOutPrepaidCardRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashOutPrepaidCardRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


