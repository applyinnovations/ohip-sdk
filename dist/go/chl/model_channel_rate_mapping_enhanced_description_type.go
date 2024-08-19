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

// checks if the ChannelRateMappingEnhancedDescriptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRateMappingEnhancedDescriptionType{}

// ChannelRateMappingEnhancedDescriptionType Enhanced descriptions of hotel-channel room type or rate code mapping.
type ChannelRateMappingEnhancedDescriptionType struct {
	Description *TranslationTextType2000 `json:"description,omitempty"`
	EnhancedDescriptionLine1 *TranslationTextType50 `json:"enhancedDescriptionLine1,omitempty"`
	EnhancedDescriptionLine2 *TranslationTextType50 `json:"enhancedDescriptionLine2,omitempty"`
	EnhancedDescriptionLine3 *TranslationTextType50 `json:"enhancedDescriptionLine3,omitempty"`
}

// NewChannelRateMappingEnhancedDescriptionType instantiates a new ChannelRateMappingEnhancedDescriptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRateMappingEnhancedDescriptionType() *ChannelRateMappingEnhancedDescriptionType {
	this := ChannelRateMappingEnhancedDescriptionType{}
	return &this
}

// NewChannelRateMappingEnhancedDescriptionTypeWithDefaults instantiates a new ChannelRateMappingEnhancedDescriptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRateMappingEnhancedDescriptionTypeWithDefaults() *ChannelRateMappingEnhancedDescriptionType {
	this := ChannelRateMappingEnhancedDescriptionType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ChannelRateMappingEnhancedDescriptionType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *ChannelRateMappingEnhancedDescriptionType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetEnhancedDescriptionLine1 returns the EnhancedDescriptionLine1 field value if set, zero value otherwise.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine1() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDescriptionLine1) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDescriptionLine1
}

// GetEnhancedDescriptionLine1Ok returns a tuple with the EnhancedDescriptionLine1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine1Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDescriptionLine1) {
		return nil, false
	}
	return o.EnhancedDescriptionLine1, true
}

// HasEnhancedDescriptionLine1 returns a boolean if a field has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) HasEnhancedDescriptionLine1() bool {
	if o != nil && !IsNil(o.EnhancedDescriptionLine1) {
		return true
	}

	return false
}

// SetEnhancedDescriptionLine1 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDescriptionLine1 field.
func (o *ChannelRateMappingEnhancedDescriptionType) SetEnhancedDescriptionLine1(v TranslationTextType50) {
	o.EnhancedDescriptionLine1 = &v
}

// GetEnhancedDescriptionLine2 returns the EnhancedDescriptionLine2 field value if set, zero value otherwise.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine2() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDescriptionLine2) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDescriptionLine2
}

// GetEnhancedDescriptionLine2Ok returns a tuple with the EnhancedDescriptionLine2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine2Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDescriptionLine2) {
		return nil, false
	}
	return o.EnhancedDescriptionLine2, true
}

// HasEnhancedDescriptionLine2 returns a boolean if a field has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) HasEnhancedDescriptionLine2() bool {
	if o != nil && !IsNil(o.EnhancedDescriptionLine2) {
		return true
	}

	return false
}

// SetEnhancedDescriptionLine2 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDescriptionLine2 field.
func (o *ChannelRateMappingEnhancedDescriptionType) SetEnhancedDescriptionLine2(v TranslationTextType50) {
	o.EnhancedDescriptionLine2 = &v
}

// GetEnhancedDescriptionLine3 returns the EnhancedDescriptionLine3 field value if set, zero value otherwise.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine3() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDescriptionLine3) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDescriptionLine3
}

// GetEnhancedDescriptionLine3Ok returns a tuple with the EnhancedDescriptionLine3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) GetEnhancedDescriptionLine3Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDescriptionLine3) {
		return nil, false
	}
	return o.EnhancedDescriptionLine3, true
}

// HasEnhancedDescriptionLine3 returns a boolean if a field has been set.
func (o *ChannelRateMappingEnhancedDescriptionType) HasEnhancedDescriptionLine3() bool {
	if o != nil && !IsNil(o.EnhancedDescriptionLine3) {
		return true
	}

	return false
}

// SetEnhancedDescriptionLine3 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDescriptionLine3 field.
func (o *ChannelRateMappingEnhancedDescriptionType) SetEnhancedDescriptionLine3(v TranslationTextType50) {
	o.EnhancedDescriptionLine3 = &v
}

func (o ChannelRateMappingEnhancedDescriptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRateMappingEnhancedDescriptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EnhancedDescriptionLine1) {
		toSerialize["enhancedDescriptionLine1"] = o.EnhancedDescriptionLine1
	}
	if !IsNil(o.EnhancedDescriptionLine2) {
		toSerialize["enhancedDescriptionLine2"] = o.EnhancedDescriptionLine2
	}
	if !IsNil(o.EnhancedDescriptionLine3) {
		toSerialize["enhancedDescriptionLine3"] = o.EnhancedDescriptionLine3
	}
	return toSerialize, nil
}

type NullableChannelRateMappingEnhancedDescriptionType struct {
	value *ChannelRateMappingEnhancedDescriptionType
	isSet bool
}

func (v NullableChannelRateMappingEnhancedDescriptionType) Get() *ChannelRateMappingEnhancedDescriptionType {
	return v.value
}

func (v *NullableChannelRateMappingEnhancedDescriptionType) Set(val *ChannelRateMappingEnhancedDescriptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRateMappingEnhancedDescriptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRateMappingEnhancedDescriptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRateMappingEnhancedDescriptionType(val *ChannelRateMappingEnhancedDescriptionType) *NullableChannelRateMappingEnhancedDescriptionType {
	return &NullableChannelRateMappingEnhancedDescriptionType{value: val, isSet: true}
}

func (v NullableChannelRateMappingEnhancedDescriptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRateMappingEnhancedDescriptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


