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

// checks if the ArticleInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ArticleInfoType{}

// ArticleInfoType Information regarding an article.
type ArticleInfoType struct {
	// Unique code of the article.
	ArticleCode *string `json:"articleCode,omitempty"`
	// Description of the article.
	Description *string `json:"description,omitempty"`
	// Hotel code to which the article belongs.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates whether the article is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	PostIt *ArticlePostItType `json:"postIt,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
	// Transaction code to which the article belongs.
	TransactionCode *string `json:"transactionCode,omitempty"`
	// Unique Universal product code of the article.
	UniversalProductCode *string `json:"universalProductCode,omitempty"`
}

// NewArticleInfoType instantiates a new ArticleInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArticleInfoType() *ArticleInfoType {
	this := ArticleInfoType{}
	return &this
}

// NewArticleInfoTypeWithDefaults instantiates a new ArticleInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArticleInfoTypeWithDefaults() *ArticleInfoType {
	this := ArticleInfoType{}
	return &this
}

// GetArticleCode returns the ArticleCode field value if set, zero value otherwise.
func (o *ArticleInfoType) GetArticleCode() string {
	if o == nil || IsNil(o.ArticleCode) {
		var ret string
		return ret
	}
	return *o.ArticleCode
}

// GetArticleCodeOk returns a tuple with the ArticleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetArticleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ArticleCode) {
		return nil, false
	}
	return o.ArticleCode, true
}

// HasArticleCode returns a boolean if a field has been set.
func (o *ArticleInfoType) HasArticleCode() bool {
	if o != nil && !IsNil(o.ArticleCode) {
		return true
	}

	return false
}

// SetArticleCode gets a reference to the given string and assigns it to the ArticleCode field.
func (o *ArticleInfoType) SetArticleCode(v string) {
	o.ArticleCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ArticleInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ArticleInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ArticleInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ArticleInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ArticleInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ArticleInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *ArticleInfoType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *ArticleInfoType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *ArticleInfoType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *ArticleInfoType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *ArticleInfoType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *ArticleInfoType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPostIt returns the PostIt field value if set, zero value otherwise.
func (o *ArticleInfoType) GetPostIt() ArticlePostItType {
	if o == nil || IsNil(o.PostIt) {
		var ret ArticlePostItType
		return ret
	}
	return *o.PostIt
}

// GetPostItOk returns a tuple with the PostIt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetPostItOk() (*ArticlePostItType, bool) {
	if o == nil || IsNil(o.PostIt) {
		return nil, false
	}
	return o.PostIt, true
}

// HasPostIt returns a boolean if a field has been set.
func (o *ArticleInfoType) HasPostIt() bool {
	if o != nil && !IsNil(o.PostIt) {
		return true
	}

	return false
}

// SetPostIt gets a reference to the given ArticlePostItType and assigns it to the PostIt field.
func (o *ArticleInfoType) SetPostIt(v ArticlePostItType) {
	o.PostIt = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *ArticleInfoType) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *ArticleInfoType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *ArticleInfoType) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *ArticleInfoType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *ArticleInfoType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *ArticleInfoType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

// GetUniversalProductCode returns the UniversalProductCode field value if set, zero value otherwise.
func (o *ArticleInfoType) GetUniversalProductCode() string {
	if o == nil || IsNil(o.UniversalProductCode) {
		var ret string
		return ret
	}
	return *o.UniversalProductCode
}

// GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticleInfoType) GetUniversalProductCodeOk() (*string, bool) {
	if o == nil || IsNil(o.UniversalProductCode) {
		return nil, false
	}
	return o.UniversalProductCode, true
}

// HasUniversalProductCode returns a boolean if a field has been set.
func (o *ArticleInfoType) HasUniversalProductCode() bool {
	if o != nil && !IsNil(o.UniversalProductCode) {
		return true
	}

	return false
}

// SetUniversalProductCode gets a reference to the given string and assigns it to the UniversalProductCode field.
func (o *ArticleInfoType) SetUniversalProductCode(v string) {
	o.UniversalProductCode = &v
}

func (o ArticleInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ArticleInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArticleCode) {
		toSerialize["articleCode"] = o.ArticleCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PostIt) {
		toSerialize["postIt"] = o.PostIt
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	if !IsNil(o.UniversalProductCode) {
		toSerialize["universalProductCode"] = o.UniversalProductCode
	}
	return toSerialize, nil
}

type NullableArticleInfoType struct {
	value *ArticleInfoType
	isSet bool
}

func (v NullableArticleInfoType) Get() *ArticleInfoType {
	return v.value
}

func (v *NullableArticleInfoType) Set(val *ArticleInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableArticleInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableArticleInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArticleInfoType(val *ArticleInfoType) *NullableArticleInfoType {
	return &NullableArticleInfoType{value: val, isSet: true}
}

func (v NullableArticleInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArticleInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


