/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the DiscountReasonType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DiscountReasonType{}

// DiscountReasonType Contains Common Master configuration detail.
type DiscountReasonType struct {
	// Collection of advanced discount rules.
	AdvancedDiscountRules []AdvancedDiscountRuleType `json:"advancedDiscountRules,omitempty"`
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
}

// NewDiscountReasonType instantiates a new DiscountReasonType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDiscountReasonType() *DiscountReasonType {
	this := DiscountReasonType{}
	return &this
}

// NewDiscountReasonTypeWithDefaults instantiates a new DiscountReasonType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDiscountReasonTypeWithDefaults() *DiscountReasonType {
	this := DiscountReasonType{}
	return &this
}

// GetAdvancedDiscountRules returns the AdvancedDiscountRules field value if set, zero value otherwise.
func (o *DiscountReasonType) GetAdvancedDiscountRules() []AdvancedDiscountRuleType {
	if o == nil || IsNil(o.AdvancedDiscountRules) {
		var ret []AdvancedDiscountRuleType
		return ret
	}
	return o.AdvancedDiscountRules
}

// GetAdvancedDiscountRulesOk returns a tuple with the AdvancedDiscountRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DiscountReasonType) GetAdvancedDiscountRulesOk() ([]AdvancedDiscountRuleType, bool) {
	if o == nil || IsNil(o.AdvancedDiscountRules) {
		return nil, false
	}
	return o.AdvancedDiscountRules, true
}

// HasAdvancedDiscountRules returns a boolean if a field has been set.
func (o *DiscountReasonType) HasAdvancedDiscountRules() bool {
	if o != nil && !IsNil(o.AdvancedDiscountRules) {
		return true
	}

	return false
}

// SetAdvancedDiscountRules gets a reference to the given []AdvancedDiscountRuleType and assigns it to the AdvancedDiscountRules field.
func (o *DiscountReasonType) SetAdvancedDiscountRules(v []AdvancedDiscountRuleType) {
	o.AdvancedDiscountRules = v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *DiscountReasonType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DiscountReasonType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *DiscountReasonType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *DiscountReasonType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *DiscountReasonType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DiscountReasonType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *DiscountReasonType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *DiscountReasonType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *DiscountReasonType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DiscountReasonType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *DiscountReasonType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *DiscountReasonType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

func (o DiscountReasonType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DiscountReasonType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdvancedDiscountRules) {
		toSerialize["advancedDiscountRules"] = o.AdvancedDiscountRules
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplayOrder) {
		toSerialize["displayOrder"] = o.DisplayOrder
	}
	return toSerialize, nil
}

type NullableDiscountReasonType struct {
	value *DiscountReasonType
	isSet bool
}

func (v NullableDiscountReasonType) Get() *DiscountReasonType {
	return v.value
}

func (v *NullableDiscountReasonType) Set(val *DiscountReasonType) {
	v.value = val
	v.isSet = true
}

func (v NullableDiscountReasonType) IsSet() bool {
	return v.isSet
}

func (v *NullableDiscountReasonType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDiscountReasonType(val *DiscountReasonType) *NullableDiscountReasonType {
	return &NullableDiscountReasonType{value: val, isSet: true}
}

func (v NullableDiscountReasonType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDiscountReasonType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

