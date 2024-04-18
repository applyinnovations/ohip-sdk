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

// checks if the RateCategoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateCategoryType{}

// RateCategoryType This type represents the rate category type.
type RateCategoryType struct {
	// Rate category Code.
	RateCategory *string `json:"rateCategory,omitempty"`
	RateCategoryDetails *HotelRateCategoryTypeRateCategoryDetails `json:"rateCategoryDetails,omitempty"`
}

// NewRateCategoryType instantiates a new RateCategoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateCategoryType() *RateCategoryType {
	this := RateCategoryType{}
	return &this
}

// NewRateCategoryTypeWithDefaults instantiates a new RateCategoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateCategoryTypeWithDefaults() *RateCategoryType {
	this := RateCategoryType{}
	return &this
}

// GetRateCategory returns the RateCategory field value if set, zero value otherwise.
func (o *RateCategoryType) GetRateCategory() string {
	if o == nil || IsNil(o.RateCategory) {
		var ret string
		return ret
	}
	return *o.RateCategory
}

// GetRateCategoryOk returns a tuple with the RateCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCategoryType) GetRateCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RateCategory) {
		return nil, false
	}
	return o.RateCategory, true
}

// HasRateCategory returns a boolean if a field has been set.
func (o *RateCategoryType) HasRateCategory() bool {
	if o != nil && !IsNil(o.RateCategory) {
		return true
	}

	return false
}

// SetRateCategory gets a reference to the given string and assigns it to the RateCategory field.
func (o *RateCategoryType) SetRateCategory(v string) {
	o.RateCategory = &v
}

// GetRateCategoryDetails returns the RateCategoryDetails field value if set, zero value otherwise.
func (o *RateCategoryType) GetRateCategoryDetails() HotelRateCategoryTypeRateCategoryDetails {
	if o == nil || IsNil(o.RateCategoryDetails) {
		var ret HotelRateCategoryTypeRateCategoryDetails
		return ret
	}
	return *o.RateCategoryDetails
}

// GetRateCategoryDetailsOk returns a tuple with the RateCategoryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCategoryType) GetRateCategoryDetailsOk() (*HotelRateCategoryTypeRateCategoryDetails, bool) {
	if o == nil || IsNil(o.RateCategoryDetails) {
		return nil, false
	}
	return o.RateCategoryDetails, true
}

// HasRateCategoryDetails returns a boolean if a field has been set.
func (o *RateCategoryType) HasRateCategoryDetails() bool {
	if o != nil && !IsNil(o.RateCategoryDetails) {
		return true
	}

	return false
}

// SetRateCategoryDetails gets a reference to the given HotelRateCategoryTypeRateCategoryDetails and assigns it to the RateCategoryDetails field.
func (o *RateCategoryType) SetRateCategoryDetails(v HotelRateCategoryTypeRateCategoryDetails) {
	o.RateCategoryDetails = &v
}

func (o RateCategoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateCategoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RateCategory) {
		toSerialize["rateCategory"] = o.RateCategory
	}
	if !IsNil(o.RateCategoryDetails) {
		toSerialize["rateCategoryDetails"] = o.RateCategoryDetails
	}
	return toSerialize, nil
}

type NullableRateCategoryType struct {
	value *RateCategoryType
	isSet bool
}

func (v NullableRateCategoryType) Get() *RateCategoryType {
	return v.value
}

func (v *NullableRateCategoryType) Set(val *RateCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateCategoryType(val *RateCategoryType) *NullableRateCategoryType {
	return &NullableRateCategoryType{value: val, isSet: true}
}

func (v NullableRateCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

