/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CateringRevenueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringRevenueType{}

// CateringRevenueType Information about Catering Revenue.
type CateringRevenueType struct {
	// Item discount for the block.
	ItemDiscount *float32 `json:"itemDiscount,omitempty"`
	// The discount percentage to be applied to resource items associated with catering events.
	ItemDiscountPercentage *float32 `json:"itemDiscountPercentage,omitempty"`
	ServiceCharge *CurrencyAmountType `json:"serviceCharge,omitempty"`
	TaxAmount *CurrencyAmountType `json:"taxAmount,omitempty"`
}

// NewCateringRevenueType instantiates a new CateringRevenueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringRevenueType() *CateringRevenueType {
	this := CateringRevenueType{}
	return &this
}

// NewCateringRevenueTypeWithDefaults instantiates a new CateringRevenueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringRevenueTypeWithDefaults() *CateringRevenueType {
	this := CateringRevenueType{}
	return &this
}

// GetItemDiscount returns the ItemDiscount field value if set, zero value otherwise.
func (o *CateringRevenueType) GetItemDiscount() float32 {
	if o == nil || IsNil(o.ItemDiscount) {
		var ret float32
		return ret
	}
	return *o.ItemDiscount
}

// GetItemDiscountOk returns a tuple with the ItemDiscount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRevenueType) GetItemDiscountOk() (*float32, bool) {
	if o == nil || IsNil(o.ItemDiscount) {
		return nil, false
	}
	return o.ItemDiscount, true
}

// HasItemDiscount returns a boolean if a field has been set.
func (o *CateringRevenueType) HasItemDiscount() bool {
	if o != nil && !IsNil(o.ItemDiscount) {
		return true
	}

	return false
}

// SetItemDiscount gets a reference to the given float32 and assigns it to the ItemDiscount field.
func (o *CateringRevenueType) SetItemDiscount(v float32) {
	o.ItemDiscount = &v
}

// GetItemDiscountPercentage returns the ItemDiscountPercentage field value if set, zero value otherwise.
func (o *CateringRevenueType) GetItemDiscountPercentage() float32 {
	if o == nil || IsNil(o.ItemDiscountPercentage) {
		var ret float32
		return ret
	}
	return *o.ItemDiscountPercentage
}

// GetItemDiscountPercentageOk returns a tuple with the ItemDiscountPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRevenueType) GetItemDiscountPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.ItemDiscountPercentage) {
		return nil, false
	}
	return o.ItemDiscountPercentage, true
}

// HasItemDiscountPercentage returns a boolean if a field has been set.
func (o *CateringRevenueType) HasItemDiscountPercentage() bool {
	if o != nil && !IsNil(o.ItemDiscountPercentage) {
		return true
	}

	return false
}

// SetItemDiscountPercentage gets a reference to the given float32 and assigns it to the ItemDiscountPercentage field.
func (o *CateringRevenueType) SetItemDiscountPercentage(v float32) {
	o.ItemDiscountPercentage = &v
}

// GetServiceCharge returns the ServiceCharge field value if set, zero value otherwise.
func (o *CateringRevenueType) GetServiceCharge() CurrencyAmountType {
	if o == nil || IsNil(o.ServiceCharge) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ServiceCharge
}

// GetServiceChargeOk returns a tuple with the ServiceCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRevenueType) GetServiceChargeOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ServiceCharge) {
		return nil, false
	}
	return o.ServiceCharge, true
}

// HasServiceCharge returns a boolean if a field has been set.
func (o *CateringRevenueType) HasServiceCharge() bool {
	if o != nil && !IsNil(o.ServiceCharge) {
		return true
	}

	return false
}

// SetServiceCharge gets a reference to the given CurrencyAmountType and assigns it to the ServiceCharge field.
func (o *CateringRevenueType) SetServiceCharge(v CurrencyAmountType) {
	o.ServiceCharge = &v
}

// GetTaxAmount returns the TaxAmount field value if set, zero value otherwise.
func (o *CateringRevenueType) GetTaxAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TaxAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TaxAmount
}

// GetTaxAmountOk returns a tuple with the TaxAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRevenueType) GetTaxAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TaxAmount) {
		return nil, false
	}
	return o.TaxAmount, true
}

// HasTaxAmount returns a boolean if a field has been set.
func (o *CateringRevenueType) HasTaxAmount() bool {
	if o != nil && !IsNil(o.TaxAmount) {
		return true
	}

	return false
}

// SetTaxAmount gets a reference to the given CurrencyAmountType and assigns it to the TaxAmount field.
func (o *CateringRevenueType) SetTaxAmount(v CurrencyAmountType) {
	o.TaxAmount = &v
}

func (o CateringRevenueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringRevenueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ItemDiscount) {
		toSerialize["itemDiscount"] = o.ItemDiscount
	}
	if !IsNil(o.ItemDiscountPercentage) {
		toSerialize["itemDiscountPercentage"] = o.ItemDiscountPercentage
	}
	if !IsNil(o.ServiceCharge) {
		toSerialize["serviceCharge"] = o.ServiceCharge
	}
	if !IsNil(o.TaxAmount) {
		toSerialize["taxAmount"] = o.TaxAmount
	}
	return toSerialize, nil
}

type NullableCateringRevenueType struct {
	value *CateringRevenueType
	isSet bool
}

func (v NullableCateringRevenueType) Get() *CateringRevenueType {
	return v.value
}

func (v *NullableCateringRevenueType) Set(val *CateringRevenueType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringRevenueType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringRevenueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringRevenueType(val *CateringRevenueType) *NullableCateringRevenueType {
	return &NullableCateringRevenueType{value: val, isSet: true}
}

func (v NullableCateringRevenueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringRevenueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

