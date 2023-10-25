/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the SystemRateCategoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SystemRateCategoryType{}

// SystemRateCategoryType Identify rate category details of external system.
type SystemRateCategoryType struct {
	// Indicates whether external system rate category is active or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicates whether external system rate category is negotiated or not.
	Negotiated *bool `json:"negotiated,omitempty"`
	RateCategoryCode *CodeDescriptionType `json:"rateCategoryCode,omitempty"`
	// Shopping category of rate category external system.
	ShoppingCategory *string `json:"shoppingCategory,omitempty"`
}

// NewSystemRateCategoryType instantiates a new SystemRateCategoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemRateCategoryType() *SystemRateCategoryType {
	this := SystemRateCategoryType{}
	return &this
}

// NewSystemRateCategoryTypeWithDefaults instantiates a new SystemRateCategoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemRateCategoryTypeWithDefaults() *SystemRateCategoryType {
	this := SystemRateCategoryType{}
	return &this
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *SystemRateCategoryType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemRateCategoryType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *SystemRateCategoryType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *SystemRateCategoryType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetNegotiated returns the Negotiated field value if set, zero value otherwise.
func (o *SystemRateCategoryType) GetNegotiated() bool {
	if o == nil || IsNil(o.Negotiated) {
		var ret bool
		return ret
	}
	return *o.Negotiated
}

// GetNegotiatedOk returns a tuple with the Negotiated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemRateCategoryType) GetNegotiatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Negotiated) {
		return nil, false
	}
	return o.Negotiated, true
}

// HasNegotiated returns a boolean if a field has been set.
func (o *SystemRateCategoryType) HasNegotiated() bool {
	if o != nil && !IsNil(o.Negotiated) {
		return true
	}

	return false
}

// SetNegotiated gets a reference to the given bool and assigns it to the Negotiated field.
func (o *SystemRateCategoryType) SetNegotiated(v bool) {
	o.Negotiated = &v
}

// GetRateCategoryCode returns the RateCategoryCode field value if set, zero value otherwise.
func (o *SystemRateCategoryType) GetRateCategoryCode() CodeDescriptionType {
	if o == nil || IsNil(o.RateCategoryCode) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.RateCategoryCode
}

// GetRateCategoryCodeOk returns a tuple with the RateCategoryCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemRateCategoryType) GetRateCategoryCodeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.RateCategoryCode) {
		return nil, false
	}
	return o.RateCategoryCode, true
}

// HasRateCategoryCode returns a boolean if a field has been set.
func (o *SystemRateCategoryType) HasRateCategoryCode() bool {
	if o != nil && !IsNil(o.RateCategoryCode) {
		return true
	}

	return false
}

// SetRateCategoryCode gets a reference to the given CodeDescriptionType and assigns it to the RateCategoryCode field.
func (o *SystemRateCategoryType) SetRateCategoryCode(v CodeDescriptionType) {
	o.RateCategoryCode = &v
}

// GetShoppingCategory returns the ShoppingCategory field value if set, zero value otherwise.
func (o *SystemRateCategoryType) GetShoppingCategory() string {
	if o == nil || IsNil(o.ShoppingCategory) {
		var ret string
		return ret
	}
	return *o.ShoppingCategory
}

// GetShoppingCategoryOk returns a tuple with the ShoppingCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemRateCategoryType) GetShoppingCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.ShoppingCategory) {
		return nil, false
	}
	return o.ShoppingCategory, true
}

// HasShoppingCategory returns a boolean if a field has been set.
func (o *SystemRateCategoryType) HasShoppingCategory() bool {
	if o != nil && !IsNil(o.ShoppingCategory) {
		return true
	}

	return false
}

// SetShoppingCategory gets a reference to the given string and assigns it to the ShoppingCategory field.
func (o *SystemRateCategoryType) SetShoppingCategory(v string) {
	o.ShoppingCategory = &v
}

func (o SystemRateCategoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SystemRateCategoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Negotiated) {
		toSerialize["negotiated"] = o.Negotiated
	}
	if !IsNil(o.RateCategoryCode) {
		toSerialize["rateCategoryCode"] = o.RateCategoryCode
	}
	if !IsNil(o.ShoppingCategory) {
		toSerialize["shoppingCategory"] = o.ShoppingCategory
	}
	return toSerialize, nil
}

type NullableSystemRateCategoryType struct {
	value *SystemRateCategoryType
	isSet bool
}

func (v NullableSystemRateCategoryType) Get() *SystemRateCategoryType {
	return v.value
}

func (v *NullableSystemRateCategoryType) Set(val *SystemRateCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemRateCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemRateCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemRateCategoryType(val *SystemRateCategoryType) *NullableSystemRateCategoryType {
	return &NullableSystemRateCategoryType{value: val, isSet: true}
}

func (v NullableSystemRateCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemRateCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


