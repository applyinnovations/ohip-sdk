/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the HotelTransactionDiscountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelTransactionDiscountType{}

// HotelTransactionDiscountType Provides information about Transaction Discount Configuration.
type HotelTransactionDiscountType struct {
	// The amount applicable to the transaction discount.This would be a positive amount indicating the discount.
	Amount *float64 `json:"amount,omitempty"`
	// Collection of article codes eligible for transaction discounts.
	ArticleCodes []string `json:"articleCodes,omitempty"`
	CodeType TransactionDiscountCodeType `json:"codeType"`
	// Description of the transaction discount.
	Description string `json:"description"`
	// Holds Transaction Discounts Attributes details.If discount is applied to a membership type, only membership type details are required. If discount is applied on a membership level , membership type and membership level details are required.
	DiscountAttributes []TransactionDiscountsAttributeType `json:"discountAttributes"`
	// Indicates for which hotel this transaction discount apply to.
	HotelId string `json:"hotelId"`
	// Indicates whether the transaction discount is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// A percentage value if the transaction discount is percentage based.
	Percent *float32 `json:"percent,omitempty"`
	RuleType TransactionDiscountRuleType `json:"ruleType"`
	// Collection of transaction codes eligible for transaction discounts.
	TransactionCodes []string `json:"transactionCodes,omitempty"`
	// Unique code of the transaction discount.
	TransactionDiscountCode string `json:"transactionDiscountCode"`
	// Unique code of the transaction discount.
	TransactionDiscountId *float32 `json:"transactionDiscountId,omitempty"`
}

// NewHotelTransactionDiscountType instantiates a new HotelTransactionDiscountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelTransactionDiscountType(codeType TransactionDiscountCodeType, description string, discountAttributes []TransactionDiscountsAttributeType, hotelId string, ruleType TransactionDiscountRuleType, transactionDiscountCode string) *HotelTransactionDiscountType {
	this := HotelTransactionDiscountType{}
	this.CodeType = codeType
	this.Description = description
	this.DiscountAttributes = discountAttributes
	this.HotelId = hotelId
	this.RuleType = ruleType
	this.TransactionDiscountCode = transactionDiscountCode
	return &this
}

// NewHotelTransactionDiscountTypeWithDefaults instantiates a new HotelTransactionDiscountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelTransactionDiscountTypeWithDefaults() *HotelTransactionDiscountType {
	this := HotelTransactionDiscountType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetAmount() float64 {
	if o == nil || IsNil(o.Amount) {
		var ret float64
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetAmountOk() (*float64, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float64 and assigns it to the Amount field.
func (o *HotelTransactionDiscountType) SetAmount(v float64) {
	o.Amount = &v
}

// GetArticleCodes returns the ArticleCodes field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetArticleCodes() []string {
	if o == nil || IsNil(o.ArticleCodes) {
		var ret []string
		return ret
	}
	return o.ArticleCodes
}

// GetArticleCodesOk returns a tuple with the ArticleCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetArticleCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.ArticleCodes) {
		return nil, false
	}
	return o.ArticleCodes, true
}

// HasArticleCodes returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasArticleCodes() bool {
	if o != nil && !IsNil(o.ArticleCodes) {
		return true
	}

	return false
}

// SetArticleCodes gets a reference to the given []string and assigns it to the ArticleCodes field.
func (o *HotelTransactionDiscountType) SetArticleCodes(v []string) {
	o.ArticleCodes = v
}

// GetCodeType returns the CodeType field value
func (o *HotelTransactionDiscountType) GetCodeType() TransactionDiscountCodeType {
	if o == nil {
		var ret TransactionDiscountCodeType
		return ret
	}

	return o.CodeType
}

// GetCodeTypeOk returns a tuple with the CodeType field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetCodeTypeOk() (*TransactionDiscountCodeType, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CodeType, true
}

// SetCodeType sets field value
func (o *HotelTransactionDiscountType) SetCodeType(v TransactionDiscountCodeType) {
	o.CodeType = v
}

// GetDescription returns the Description field value
func (o *HotelTransactionDiscountType) GetDescription() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Description
}

// GetDescriptionOk returns a tuple with the Description field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetDescriptionOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Description, true
}

// SetDescription sets field value
func (o *HotelTransactionDiscountType) SetDescription(v string) {
	o.Description = v
}

// GetDiscountAttributes returns the DiscountAttributes field value
func (o *HotelTransactionDiscountType) GetDiscountAttributes() []TransactionDiscountsAttributeType {
	if o == nil {
		var ret []TransactionDiscountsAttributeType
		return ret
	}

	return o.DiscountAttributes
}

// GetDiscountAttributesOk returns a tuple with the DiscountAttributes field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetDiscountAttributesOk() ([]TransactionDiscountsAttributeType, bool) {
	if o == nil {
		return nil, false
	}
	return o.DiscountAttributes, true
}

// SetDiscountAttributes sets field value
func (o *HotelTransactionDiscountType) SetDiscountAttributes(v []TransactionDiscountsAttributeType) {
	o.DiscountAttributes = v
}

// GetHotelId returns the HotelId field value
func (o *HotelTransactionDiscountType) GetHotelId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetHotelIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.HotelId, true
}

// SetHotelId sets field value
func (o *HotelTransactionDiscountType) SetHotelId(v string) {
	o.HotelId = v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HotelTransactionDiscountType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *HotelTransactionDiscountType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPercent returns the Percent field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetPercent() float32 {
	if o == nil || IsNil(o.Percent) {
		var ret float32
		return ret
	}
	return *o.Percent
}

// GetPercentOk returns a tuple with the Percent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetPercentOk() (*float32, bool) {
	if o == nil || IsNil(o.Percent) {
		return nil, false
	}
	return o.Percent, true
}

// HasPercent returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasPercent() bool {
	if o != nil && !IsNil(o.Percent) {
		return true
	}

	return false
}

// SetPercent gets a reference to the given float32 and assigns it to the Percent field.
func (o *HotelTransactionDiscountType) SetPercent(v float32) {
	o.Percent = &v
}

// GetRuleType returns the RuleType field value
func (o *HotelTransactionDiscountType) GetRuleType() TransactionDiscountRuleType {
	if o == nil {
		var ret TransactionDiscountRuleType
		return ret
	}

	return o.RuleType
}

// GetRuleTypeOk returns a tuple with the RuleType field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetRuleTypeOk() (*TransactionDiscountRuleType, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RuleType, true
}

// SetRuleType sets field value
func (o *HotelTransactionDiscountType) SetRuleType(v TransactionDiscountRuleType) {
	o.RuleType = v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetTransactionCodes() []string {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []string
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetTransactionCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []string and assigns it to the TransactionCodes field.
func (o *HotelTransactionDiscountType) SetTransactionCodes(v []string) {
	o.TransactionCodes = v
}

// GetTransactionDiscountCode returns the TransactionDiscountCode field value
func (o *HotelTransactionDiscountType) GetTransactionDiscountCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.TransactionDiscountCode
}

// GetTransactionDiscountCodeOk returns a tuple with the TransactionDiscountCode field value
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetTransactionDiscountCodeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TransactionDiscountCode, true
}

// SetTransactionDiscountCode sets field value
func (o *HotelTransactionDiscountType) SetTransactionDiscountCode(v string) {
	o.TransactionDiscountCode = v
}

// GetTransactionDiscountId returns the TransactionDiscountId field value if set, zero value otherwise.
func (o *HotelTransactionDiscountType) GetTransactionDiscountId() float32 {
	if o == nil || IsNil(o.TransactionDiscountId) {
		var ret float32
		return ret
	}
	return *o.TransactionDiscountId
}

// GetTransactionDiscountIdOk returns a tuple with the TransactionDiscountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelTransactionDiscountType) GetTransactionDiscountIdOk() (*float32, bool) {
	if o == nil || IsNil(o.TransactionDiscountId) {
		return nil, false
	}
	return o.TransactionDiscountId, true
}

// HasTransactionDiscountId returns a boolean if a field has been set.
func (o *HotelTransactionDiscountType) HasTransactionDiscountId() bool {
	if o != nil && !IsNil(o.TransactionDiscountId) {
		return true
	}

	return false
}

// SetTransactionDiscountId gets a reference to the given float32 and assigns it to the TransactionDiscountId field.
func (o *HotelTransactionDiscountType) SetTransactionDiscountId(v float32) {
	o.TransactionDiscountId = &v
}

func (o HotelTransactionDiscountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelTransactionDiscountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.ArticleCodes) {
		toSerialize["articleCodes"] = o.ArticleCodes
	}
	toSerialize["codeType"] = o.CodeType
	toSerialize["description"] = o.Description
	toSerialize["discountAttributes"] = o.DiscountAttributes
	toSerialize["hotelId"] = o.HotelId
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.Percent) {
		toSerialize["percent"] = o.Percent
	}
	toSerialize["ruleType"] = o.RuleType
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	toSerialize["transactionDiscountCode"] = o.TransactionDiscountCode
	if !IsNil(o.TransactionDiscountId) {
		toSerialize["transactionDiscountId"] = o.TransactionDiscountId
	}
	return toSerialize, nil
}

type NullableHotelTransactionDiscountType struct {
	value *HotelTransactionDiscountType
	isSet bool
}

func (v NullableHotelTransactionDiscountType) Get() *HotelTransactionDiscountType {
	return v.value
}

func (v *NullableHotelTransactionDiscountType) Set(val *HotelTransactionDiscountType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelTransactionDiscountType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelTransactionDiscountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelTransactionDiscountType(val *HotelTransactionDiscountType) *NullableHotelTransactionDiscountType {
	return &NullableHotelTransactionDiscountType{value: val, isSet: true}
}

func (v NullableHotelTransactionDiscountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelTransactionDiscountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


