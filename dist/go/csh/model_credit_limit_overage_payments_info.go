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

// checks if the CreditLimitOveragePaymentsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreditLimitOveragePaymentsInfo{}

// CreditLimitOveragePaymentsInfo Response for Fetch Credit Limit Overage Payments request
type CreditLimitOveragePaymentsInfo struct {
	Links []InstanceLink `json:"links,omitempty"`
	ReservationOveragePayments *ReservationOveragePaymentsType `json:"reservationOveragePayments,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCreditLimitOveragePaymentsInfo instantiates a new CreditLimitOveragePaymentsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreditLimitOveragePaymentsInfo() *CreditLimitOveragePaymentsInfo {
	this := CreditLimitOveragePaymentsInfo{}
	return &this
}

// NewCreditLimitOveragePaymentsInfoWithDefaults instantiates a new CreditLimitOveragePaymentsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreditLimitOveragePaymentsInfoWithDefaults() *CreditLimitOveragePaymentsInfo {
	this := CreditLimitOveragePaymentsInfo{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CreditLimitOveragePaymentsInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditLimitOveragePaymentsInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CreditLimitOveragePaymentsInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CreditLimitOveragePaymentsInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationOveragePayments returns the ReservationOveragePayments field value if set, zero value otherwise.
func (o *CreditLimitOveragePaymentsInfo) GetReservationOveragePayments() ReservationOveragePaymentsType {
	if o == nil || IsNil(o.ReservationOveragePayments) {
		var ret ReservationOveragePaymentsType
		return ret
	}
	return *o.ReservationOveragePayments
}

// GetReservationOveragePaymentsOk returns a tuple with the ReservationOveragePayments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditLimitOveragePaymentsInfo) GetReservationOveragePaymentsOk() (*ReservationOveragePaymentsType, bool) {
	if o == nil || IsNil(o.ReservationOveragePayments) {
		return nil, false
	}
	return o.ReservationOveragePayments, true
}

// HasReservationOveragePayments returns a boolean if a field has been set.
func (o *CreditLimitOveragePaymentsInfo) HasReservationOveragePayments() bool {
	if o != nil && !IsNil(o.ReservationOveragePayments) {
		return true
	}

	return false
}

// SetReservationOveragePayments gets a reference to the given ReservationOveragePaymentsType and assigns it to the ReservationOveragePayments field.
func (o *CreditLimitOveragePaymentsInfo) SetReservationOveragePayments(v ReservationOveragePaymentsType) {
	o.ReservationOveragePayments = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CreditLimitOveragePaymentsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditLimitOveragePaymentsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CreditLimitOveragePaymentsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CreditLimitOveragePaymentsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CreditLimitOveragePaymentsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreditLimitOveragePaymentsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationOveragePayments) {
		toSerialize["reservationOveragePayments"] = o.ReservationOveragePayments
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCreditLimitOveragePaymentsInfo struct {
	value *CreditLimitOveragePaymentsInfo
	isSet bool
}

func (v NullableCreditLimitOveragePaymentsInfo) Get() *CreditLimitOveragePaymentsInfo {
	return v.value
}

func (v *NullableCreditLimitOveragePaymentsInfo) Set(val *CreditLimitOveragePaymentsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableCreditLimitOveragePaymentsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableCreditLimitOveragePaymentsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreditLimitOveragePaymentsInfo(val *CreditLimitOveragePaymentsInfo) *NullableCreditLimitOveragePaymentsInfo {
	return &NullableCreditLimitOveragePaymentsInfo{value: val, isSet: true}
}

func (v NullableCreditLimitOveragePaymentsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreditLimitOveragePaymentsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

