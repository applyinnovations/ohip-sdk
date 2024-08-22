/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ParityRateTypeRateAmounts type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ParityRateTypeRateAmounts{}

// ParityRateTypeRateAmounts struct for ParityRateTypeRateAmounts
type ParityRateTypeRateAmounts struct {
	CancellationAmount *CurrencyAmountType `json:"cancellationAmount,omitempty"`
	CommissionAmount *CurrencyAmountType `json:"commissionAmount,omitempty"`
	DepositAmount *CurrencyAmountType `json:"depositAmount,omitempty"`
	TaxAmount *CurrencyAmountType `json:"taxAmount,omitempty"`
	TotalAmount *CurrencyAmountType `json:"totalAmount,omitempty"`
}

// NewParityRateTypeRateAmounts instantiates a new ParityRateTypeRateAmounts object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewParityRateTypeRateAmounts() *ParityRateTypeRateAmounts {
	this := ParityRateTypeRateAmounts{}
	return &this
}

// NewParityRateTypeRateAmountsWithDefaults instantiates a new ParityRateTypeRateAmounts object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewParityRateTypeRateAmountsWithDefaults() *ParityRateTypeRateAmounts {
	this := ParityRateTypeRateAmounts{}
	return &this
}

// GetCancellationAmount returns the CancellationAmount field value if set, zero value otherwise.
func (o *ParityRateTypeRateAmounts) GetCancellationAmount() CurrencyAmountType {
	if o == nil || IsNil(o.CancellationAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CancellationAmount
}

// GetCancellationAmountOk returns a tuple with the CancellationAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParityRateTypeRateAmounts) GetCancellationAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CancellationAmount) {
		return nil, false
	}
	return o.CancellationAmount, true
}

// HasCancellationAmount returns a boolean if a field has been set.
func (o *ParityRateTypeRateAmounts) HasCancellationAmount() bool {
	if o != nil && !IsNil(o.CancellationAmount) {
		return true
	}

	return false
}

// SetCancellationAmount gets a reference to the given CurrencyAmountType and assigns it to the CancellationAmount field.
func (o *ParityRateTypeRateAmounts) SetCancellationAmount(v CurrencyAmountType) {
	o.CancellationAmount = &v
}

// GetCommissionAmount returns the CommissionAmount field value if set, zero value otherwise.
func (o *ParityRateTypeRateAmounts) GetCommissionAmount() CurrencyAmountType {
	if o == nil || IsNil(o.CommissionAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CommissionAmount
}

// GetCommissionAmountOk returns a tuple with the CommissionAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParityRateTypeRateAmounts) GetCommissionAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CommissionAmount) {
		return nil, false
	}
	return o.CommissionAmount, true
}

// HasCommissionAmount returns a boolean if a field has been set.
func (o *ParityRateTypeRateAmounts) HasCommissionAmount() bool {
	if o != nil && !IsNil(o.CommissionAmount) {
		return true
	}

	return false
}

// SetCommissionAmount gets a reference to the given CurrencyAmountType and assigns it to the CommissionAmount field.
func (o *ParityRateTypeRateAmounts) SetCommissionAmount(v CurrencyAmountType) {
	o.CommissionAmount = &v
}

// GetDepositAmount returns the DepositAmount field value if set, zero value otherwise.
func (o *ParityRateTypeRateAmounts) GetDepositAmount() CurrencyAmountType {
	if o == nil || IsNil(o.DepositAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.DepositAmount
}

// GetDepositAmountOk returns a tuple with the DepositAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParityRateTypeRateAmounts) GetDepositAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.DepositAmount) {
		return nil, false
	}
	return o.DepositAmount, true
}

// HasDepositAmount returns a boolean if a field has been set.
func (o *ParityRateTypeRateAmounts) HasDepositAmount() bool {
	if o != nil && !IsNil(o.DepositAmount) {
		return true
	}

	return false
}

// SetDepositAmount gets a reference to the given CurrencyAmountType and assigns it to the DepositAmount field.
func (o *ParityRateTypeRateAmounts) SetDepositAmount(v CurrencyAmountType) {
	o.DepositAmount = &v
}

// GetTaxAmount returns the TaxAmount field value if set, zero value otherwise.
func (o *ParityRateTypeRateAmounts) GetTaxAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TaxAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TaxAmount
}

// GetTaxAmountOk returns a tuple with the TaxAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParityRateTypeRateAmounts) GetTaxAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TaxAmount) {
		return nil, false
	}
	return o.TaxAmount, true
}

// HasTaxAmount returns a boolean if a field has been set.
func (o *ParityRateTypeRateAmounts) HasTaxAmount() bool {
	if o != nil && !IsNil(o.TaxAmount) {
		return true
	}

	return false
}

// SetTaxAmount gets a reference to the given CurrencyAmountType and assigns it to the TaxAmount field.
func (o *ParityRateTypeRateAmounts) SetTaxAmount(v CurrencyAmountType) {
	o.TaxAmount = &v
}

// GetTotalAmount returns the TotalAmount field value if set, zero value otherwise.
func (o *ParityRateTypeRateAmounts) GetTotalAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TotalAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalAmount
}

// GetTotalAmountOk returns a tuple with the TotalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParityRateTypeRateAmounts) GetTotalAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalAmount) {
		return nil, false
	}
	return o.TotalAmount, true
}

// HasTotalAmount returns a boolean if a field has been set.
func (o *ParityRateTypeRateAmounts) HasTotalAmount() bool {
	if o != nil && !IsNil(o.TotalAmount) {
		return true
	}

	return false
}

// SetTotalAmount gets a reference to the given CurrencyAmountType and assigns it to the TotalAmount field.
func (o *ParityRateTypeRateAmounts) SetTotalAmount(v CurrencyAmountType) {
	o.TotalAmount = &v
}

func (o ParityRateTypeRateAmounts) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ParityRateTypeRateAmounts) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancellationAmount) {
		toSerialize["cancellationAmount"] = o.CancellationAmount
	}
	if !IsNil(o.CommissionAmount) {
		toSerialize["commissionAmount"] = o.CommissionAmount
	}
	if !IsNil(o.DepositAmount) {
		toSerialize["depositAmount"] = o.DepositAmount
	}
	if !IsNil(o.TaxAmount) {
		toSerialize["taxAmount"] = o.TaxAmount
	}
	if !IsNil(o.TotalAmount) {
		toSerialize["totalAmount"] = o.TotalAmount
	}
	return toSerialize, nil
}

type NullableParityRateTypeRateAmounts struct {
	value *ParityRateTypeRateAmounts
	isSet bool
}

func (v NullableParityRateTypeRateAmounts) Get() *ParityRateTypeRateAmounts {
	return v.value
}

func (v *NullableParityRateTypeRateAmounts) Set(val *ParityRateTypeRateAmounts) {
	v.value = val
	v.isSet = true
}

func (v NullableParityRateTypeRateAmounts) IsSet() bool {
	return v.isSet
}

func (v *NullableParityRateTypeRateAmounts) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParityRateTypeRateAmounts(val *ParityRateTypeRateAmounts) *NullableParityRateTypeRateAmounts {
	return &NullableParityRateTypeRateAmounts{value: val, isSet: true}
}

func (v NullableParityRateTypeRateAmounts) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParityRateTypeRateAmounts) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


