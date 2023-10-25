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

// checks if the PostBillingCheckChargesItemCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostBillingCheckChargesItemCriteriaType{}

// PostBillingCheckChargesItemCriteriaType Line item of check to post.
type PostBillingCheckChargesItemCriteriaType struct {
	// Text describing any applicable detail of the posting.
	PostingRemark *string `json:"postingRemark,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
	// Transaction code to use for the posting.
	TransactionCode *string `json:"transactionCode,omitempty"`
}

// NewPostBillingCheckChargesItemCriteriaType instantiates a new PostBillingCheckChargesItemCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostBillingCheckChargesItemCriteriaType() *PostBillingCheckChargesItemCriteriaType {
	this := PostBillingCheckChargesItemCriteriaType{}
	return &this
}

// NewPostBillingCheckChargesItemCriteriaTypeWithDefaults instantiates a new PostBillingCheckChargesItemCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostBillingCheckChargesItemCriteriaTypeWithDefaults() *PostBillingCheckChargesItemCriteriaType {
	this := PostBillingCheckChargesItemCriteriaType{}
	return &this
}

// GetPostingRemark returns the PostingRemark field value if set, zero value otherwise.
func (o *PostBillingCheckChargesItemCriteriaType) GetPostingRemark() string {
	if o == nil || IsNil(o.PostingRemark) {
		var ret string
		return ret
	}
	return *o.PostingRemark
}

// GetPostingRemarkOk returns a tuple with the PostingRemark field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingCheckChargesItemCriteriaType) GetPostingRemarkOk() (*string, bool) {
	if o == nil || IsNil(o.PostingRemark) {
		return nil, false
	}
	return o.PostingRemark, true
}

// HasPostingRemark returns a boolean if a field has been set.
func (o *PostBillingCheckChargesItemCriteriaType) HasPostingRemark() bool {
	if o != nil && !IsNil(o.PostingRemark) {
		return true
	}

	return false
}

// SetPostingRemark gets a reference to the given string and assigns it to the PostingRemark field.
func (o *PostBillingCheckChargesItemCriteriaType) SetPostingRemark(v string) {
	o.PostingRemark = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *PostBillingCheckChargesItemCriteriaType) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingCheckChargesItemCriteriaType) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *PostBillingCheckChargesItemCriteriaType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *PostBillingCheckChargesItemCriteriaType) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *PostBillingCheckChargesItemCriteriaType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingCheckChargesItemCriteriaType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *PostBillingCheckChargesItemCriteriaType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *PostBillingCheckChargesItemCriteriaType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

func (o PostBillingCheckChargesItemCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostBillingCheckChargesItemCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PostingRemark) {
		toSerialize["postingRemark"] = o.PostingRemark
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullablePostBillingCheckChargesItemCriteriaType struct {
	value *PostBillingCheckChargesItemCriteriaType
	isSet bool
}

func (v NullablePostBillingCheckChargesItemCriteriaType) Get() *PostBillingCheckChargesItemCriteriaType {
	return v.value
}

func (v *NullablePostBillingCheckChargesItemCriteriaType) Set(val *PostBillingCheckChargesItemCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullablePostBillingCheckChargesItemCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullablePostBillingCheckChargesItemCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostBillingCheckChargesItemCriteriaType(val *PostBillingCheckChargesItemCriteriaType) *NullablePostBillingCheckChargesItemCriteriaType {
	return &NullablePostBillingCheckChargesItemCriteriaType{value: val, isSet: true}
}

func (v NullablePostBillingCheckChargesItemCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostBillingCheckChargesItemCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


