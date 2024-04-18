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

// checks if the TrxSplitAndTransferCriteriaTypeSplitDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrxSplitAndTransferCriteriaTypeSplitDetails{}

// TrxSplitAndTransferCriteriaTypeSplitDetails The criteria required for the transaction splitting. Splitting can be done either by an amount or by a percentage. Atleast one should be defined.
type TrxSplitAndTransferCriteriaTypeSplitDetails struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// The percentage by which the transaction has to be split.
	Percentage *float32 `json:"percentage,omitempty"`
	// The quantity to split. This can be used only if the original quantity of the transaction(s) was > 1.
	Quantity *int32 `json:"quantity,omitempty"`
}

// NewTrxSplitAndTransferCriteriaTypeSplitDetails instantiates a new TrxSplitAndTransferCriteriaTypeSplitDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrxSplitAndTransferCriteriaTypeSplitDetails() *TrxSplitAndTransferCriteriaTypeSplitDetails {
	this := TrxSplitAndTransferCriteriaTypeSplitDetails{}
	return &this
}

// NewTrxSplitAndTransferCriteriaTypeSplitDetailsWithDefaults instantiates a new TrxSplitAndTransferCriteriaTypeSplitDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrxSplitAndTransferCriteriaTypeSplitDetailsWithDefaults() *TrxSplitAndTransferCriteriaTypeSplitDetails {
	this := TrxSplitAndTransferCriteriaTypeSplitDetails{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) SetPercentage(v float32) {
	o.Percentage = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *TrxSplitAndTransferCriteriaTypeSplitDetails) SetQuantity(v int32) {
	o.Quantity = &v
}

func (o TrxSplitAndTransferCriteriaTypeSplitDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrxSplitAndTransferCriteriaTypeSplitDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.Percentage) {
		toSerialize["percentage"] = o.Percentage
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	return toSerialize, nil
}

type NullableTrxSplitAndTransferCriteriaTypeSplitDetails struct {
	value *TrxSplitAndTransferCriteriaTypeSplitDetails
	isSet bool
}

func (v NullableTrxSplitAndTransferCriteriaTypeSplitDetails) Get() *TrxSplitAndTransferCriteriaTypeSplitDetails {
	return v.value
}

func (v *NullableTrxSplitAndTransferCriteriaTypeSplitDetails) Set(val *TrxSplitAndTransferCriteriaTypeSplitDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTrxSplitAndTransferCriteriaTypeSplitDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTrxSplitAndTransferCriteriaTypeSplitDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrxSplitAndTransferCriteriaTypeSplitDetails(val *TrxSplitAndTransferCriteriaTypeSplitDetails) *NullableTrxSplitAndTransferCriteriaTypeSplitDetails {
	return &NullableTrxSplitAndTransferCriteriaTypeSplitDetails{value: val, isSet: true}
}

func (v NullableTrxSplitAndTransferCriteriaTypeSplitDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrxSplitAndTransferCriteriaTypeSplitDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

