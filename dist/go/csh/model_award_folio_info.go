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

// checks if the AwardFolioInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AwardFolioInfo{}

// AwardFolioInfo eligible amount that is allowed to pay with award payment
type AwardFolioInfo struct {
	// Eligible Bill Amount
	EligibleBill *float32 `json:"eligibleBill,omitempty"`
	// Folio Window.
	FolioView *int32 `json:"folioView,omitempty"`
}

// NewAwardFolioInfo instantiates a new AwardFolioInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAwardFolioInfo() *AwardFolioInfo {
	this := AwardFolioInfo{}
	return &this
}

// NewAwardFolioInfoWithDefaults instantiates a new AwardFolioInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAwardFolioInfoWithDefaults() *AwardFolioInfo {
	this := AwardFolioInfo{}
	return &this
}

// GetEligibleBill returns the EligibleBill field value if set, zero value otherwise.
func (o *AwardFolioInfo) GetEligibleBill() float32 {
	if o == nil || IsNil(o.EligibleBill) {
		var ret float32
		return ret
	}
	return *o.EligibleBill
}

// GetEligibleBillOk returns a tuple with the EligibleBill field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardFolioInfo) GetEligibleBillOk() (*float32, bool) {
	if o == nil || IsNil(o.EligibleBill) {
		return nil, false
	}
	return o.EligibleBill, true
}

// HasEligibleBill returns a boolean if a field has been set.
func (o *AwardFolioInfo) HasEligibleBill() bool {
	if o != nil && !IsNil(o.EligibleBill) {
		return true
	}

	return false
}

// SetEligibleBill gets a reference to the given float32 and assigns it to the EligibleBill field.
func (o *AwardFolioInfo) SetEligibleBill(v float32) {
	o.EligibleBill = &v
}

// GetFolioView returns the FolioView field value if set, zero value otherwise.
func (o *AwardFolioInfo) GetFolioView() int32 {
	if o == nil || IsNil(o.FolioView) {
		var ret int32
		return ret
	}
	return *o.FolioView
}

// GetFolioViewOk returns a tuple with the FolioView field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardFolioInfo) GetFolioViewOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioView) {
		return nil, false
	}
	return o.FolioView, true
}

// HasFolioView returns a boolean if a field has been set.
func (o *AwardFolioInfo) HasFolioView() bool {
	if o != nil && !IsNil(o.FolioView) {
		return true
	}

	return false
}

// SetFolioView gets a reference to the given int32 and assigns it to the FolioView field.
func (o *AwardFolioInfo) SetFolioView(v int32) {
	o.FolioView = &v
}

func (o AwardFolioInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AwardFolioInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EligibleBill) {
		toSerialize["eligibleBill"] = o.EligibleBill
	}
	if !IsNil(o.FolioView) {
		toSerialize["folioView"] = o.FolioView
	}
	return toSerialize, nil
}

type NullableAwardFolioInfo struct {
	value *AwardFolioInfo
	isSet bool
}

func (v NullableAwardFolioInfo) Get() *AwardFolioInfo {
	return v.value
}

func (v *NullableAwardFolioInfo) Set(val *AwardFolioInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardFolioInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardFolioInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardFolioInfo(val *AwardFolioInfo) *NullableAwardFolioInfo {
	return &NullableAwardFolioInfo{value: val, isSet: true}
}

func (v NullableAwardFolioInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardFolioInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

