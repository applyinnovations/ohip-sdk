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

// checks if the AmountEligible type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AmountEligible{}

// AmountEligible List of eligible bill amounts for each folio.
type AmountEligible struct {
	// Retrieves eligible amount details in order to post redemption on a reservation folio <p><strong>OperationId:</strong> getEligibleBillAmount</p>
	AmountEligibleInfo []AwardFolioInfo `json:"amountEligibleInfo,omitempty"`
}

// NewAmountEligible instantiates a new AmountEligible object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAmountEligible() *AmountEligible {
	this := AmountEligible{}
	return &this
}

// NewAmountEligibleWithDefaults instantiates a new AmountEligible object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAmountEligibleWithDefaults() *AmountEligible {
	this := AmountEligible{}
	return &this
}

// GetAmountEligibleInfo returns the AmountEligibleInfo field value if set, zero value otherwise.
func (o *AmountEligible) GetAmountEligibleInfo() []AwardFolioInfo {
	if o == nil || IsNil(o.AmountEligibleInfo) {
		var ret []AwardFolioInfo
		return ret
	}
	return o.AmountEligibleInfo
}

// GetAmountEligibleInfoOk returns a tuple with the AmountEligibleInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountEligible) GetAmountEligibleInfoOk() ([]AwardFolioInfo, bool) {
	if o == nil || IsNil(o.AmountEligibleInfo) {
		return nil, false
	}
	return o.AmountEligibleInfo, true
}

// HasAmountEligibleInfo returns a boolean if a field has been set.
func (o *AmountEligible) HasAmountEligibleInfo() bool {
	if o != nil && !IsNil(o.AmountEligibleInfo) {
		return true
	}

	return false
}

// SetAmountEligibleInfo gets a reference to the given []AwardFolioInfo and assigns it to the AmountEligibleInfo field.
func (o *AmountEligible) SetAmountEligibleInfo(v []AwardFolioInfo) {
	o.AmountEligibleInfo = v
}

func (o AmountEligible) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AmountEligible) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountEligibleInfo) {
		toSerialize["amountEligibleInfo"] = o.AmountEligibleInfo
	}
	return toSerialize, nil
}

type NullableAmountEligible struct {
	value *AmountEligible
	isSet bool
}

func (v NullableAmountEligible) Get() *AmountEligible {
	return v.value
}

func (v *NullableAmountEligible) Set(val *AmountEligible) {
	v.value = val
	v.isSet = true
}

func (v NullableAmountEligible) IsSet() bool {
	return v.isSet
}

func (v *NullableAmountEligible) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAmountEligible(val *AmountEligible) *NullableAmountEligible {
	return &NullableAmountEligible{value: val, isSet: true}
}

func (v NullableAmountEligible) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAmountEligible) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

