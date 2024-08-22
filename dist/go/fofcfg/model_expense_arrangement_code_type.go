/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ExpenseArrangementCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExpenseArrangementCodeType{}

// ExpenseArrangementCodeType Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request.
type ExpenseArrangementCodeType struct {
	// Primay key of arrangement codes
	ArrangementId *float32 `json:"arrangementId,omitempty"`
	// Configuration code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Hotel where the code is configured.
	HotelId *string `json:"hotelId,omitempty"`
	// specify whether the arrangement postings are classed as revenue.
	Revenue *bool `json:"revenue,omitempty"`
	// information about the tax type code linked to the folio arrangment Code.
	TaxTypeCode *string `json:"taxTypeCode,omitempty"`
	TransactionCodes []string `json:"transactionCodes,omitempty"`
}

// NewExpenseArrangementCodeType instantiates a new ExpenseArrangementCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExpenseArrangementCodeType() *ExpenseArrangementCodeType {
	this := ExpenseArrangementCodeType{}
	return &this
}

// NewExpenseArrangementCodeTypeWithDefaults instantiates a new ExpenseArrangementCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExpenseArrangementCodeTypeWithDefaults() *ExpenseArrangementCodeType {
	this := ExpenseArrangementCodeType{}
	return &this
}

// GetArrangementId returns the ArrangementId field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetArrangementId() float32 {
	if o == nil || IsNil(o.ArrangementId) {
		var ret float32
		return ret
	}
	return *o.ArrangementId
}

// GetArrangementIdOk returns a tuple with the ArrangementId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetArrangementIdOk() (*float32, bool) {
	if o == nil || IsNil(o.ArrangementId) {
		return nil, false
	}
	return o.ArrangementId, true
}

// HasArrangementId returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasArrangementId() bool {
	if o != nil && !IsNil(o.ArrangementId) {
		return true
	}

	return false
}

// SetArrangementId gets a reference to the given float32 and assigns it to the ArrangementId field.
func (o *ExpenseArrangementCodeType) SetArrangementId(v float32) {
	o.ArrangementId = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ExpenseArrangementCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *ExpenseArrangementCodeType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ExpenseArrangementCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetRevenue() bool {
	if o == nil || IsNil(o.Revenue) {
		var ret bool
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetRevenueOk() (*bool, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given bool and assigns it to the Revenue field.
func (o *ExpenseArrangementCodeType) SetRevenue(v bool) {
	o.Revenue = &v
}

// GetTaxTypeCode returns the TaxTypeCode field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetTaxTypeCode() string {
	if o == nil || IsNil(o.TaxTypeCode) {
		var ret string
		return ret
	}
	return *o.TaxTypeCode
}

// GetTaxTypeCodeOk returns a tuple with the TaxTypeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetTaxTypeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TaxTypeCode) {
		return nil, false
	}
	return o.TaxTypeCode, true
}

// HasTaxTypeCode returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasTaxTypeCode() bool {
	if o != nil && !IsNil(o.TaxTypeCode) {
		return true
	}

	return false
}

// SetTaxTypeCode gets a reference to the given string and assigns it to the TaxTypeCode field.
func (o *ExpenseArrangementCodeType) SetTaxTypeCode(v string) {
	o.TaxTypeCode = &v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *ExpenseArrangementCodeType) GetTransactionCodes() []string {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []string
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExpenseArrangementCodeType) GetTransactionCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *ExpenseArrangementCodeType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []string and assigns it to the TransactionCodes field.
func (o *ExpenseArrangementCodeType) SetTransactionCodes(v []string) {
	o.TransactionCodes = v
}

func (o ExpenseArrangementCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExpenseArrangementCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrangementId) {
		toSerialize["arrangementId"] = o.ArrangementId
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	if !IsNil(o.TaxTypeCode) {
		toSerialize["taxTypeCode"] = o.TaxTypeCode
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	return toSerialize, nil
}

type NullableExpenseArrangementCodeType struct {
	value *ExpenseArrangementCodeType
	isSet bool
}

func (v NullableExpenseArrangementCodeType) Get() *ExpenseArrangementCodeType {
	return v.value
}

func (v *NullableExpenseArrangementCodeType) Set(val *ExpenseArrangementCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableExpenseArrangementCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableExpenseArrangementCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExpenseArrangementCodeType(val *ExpenseArrangementCodeType) *NullableExpenseArrangementCodeType {
	return &NullableExpenseArrangementCodeType{value: val, isSet: true}
}

func (v NullableExpenseArrangementCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExpenseArrangementCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


