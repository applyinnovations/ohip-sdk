/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the CouponInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CouponInfoType{}

// CouponInfoType Information about the coupon.
type CouponInfoType struct {
	// Coupon code to validate.
	CouponCode *string `json:"couponCode,omitempty"`
	// Promotion Code to which the coupon belongs.
	PromotionCode *string `json:"promotionCode,omitempty"`
}

// NewCouponInfoType instantiates a new CouponInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCouponInfoType() *CouponInfoType {
	this := CouponInfoType{}
	return &this
}

// NewCouponInfoTypeWithDefaults instantiates a new CouponInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCouponInfoTypeWithDefaults() *CouponInfoType {
	this := CouponInfoType{}
	return &this
}

// GetCouponCode returns the CouponCode field value if set, zero value otherwise.
func (o *CouponInfoType) GetCouponCode() string {
	if o == nil || IsNil(o.CouponCode) {
		var ret string
		return ret
	}
	return *o.CouponCode
}

// GetCouponCodeOk returns a tuple with the CouponCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CouponInfoType) GetCouponCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CouponCode) {
		return nil, false
	}
	return o.CouponCode, true
}

// HasCouponCode returns a boolean if a field has been set.
func (o *CouponInfoType) HasCouponCode() bool {
	if o != nil && !IsNil(o.CouponCode) {
		return true
	}

	return false
}

// SetCouponCode gets a reference to the given string and assigns it to the CouponCode field.
func (o *CouponInfoType) SetCouponCode(v string) {
	o.CouponCode = &v
}

// GetPromotionCode returns the PromotionCode field value if set, zero value otherwise.
func (o *CouponInfoType) GetPromotionCode() string {
	if o == nil || IsNil(o.PromotionCode) {
		var ret string
		return ret
	}
	return *o.PromotionCode
}

// GetPromotionCodeOk returns a tuple with the PromotionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CouponInfoType) GetPromotionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PromotionCode) {
		return nil, false
	}
	return o.PromotionCode, true
}

// HasPromotionCode returns a boolean if a field has been set.
func (o *CouponInfoType) HasPromotionCode() bool {
	if o != nil && !IsNil(o.PromotionCode) {
		return true
	}

	return false
}

// SetPromotionCode gets a reference to the given string and assigns it to the PromotionCode field.
func (o *CouponInfoType) SetPromotionCode(v string) {
	o.PromotionCode = &v
}

func (o CouponInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CouponInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CouponCode) {
		toSerialize["couponCode"] = o.CouponCode
	}
	if !IsNil(o.PromotionCode) {
		toSerialize["promotionCode"] = o.PromotionCode
	}
	return toSerialize, nil
}

type NullableCouponInfoType struct {
	value *CouponInfoType
	isSet bool
}

func (v NullableCouponInfoType) Get() *CouponInfoType {
	return v.value
}

func (v *NullableCouponInfoType) Set(val *CouponInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCouponInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCouponInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCouponInfoType(val *CouponInfoType) *NullableCouponInfoType {
	return &NullableCouponInfoType{value: val, isSet: true}
}

func (v NullableCouponInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCouponInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

