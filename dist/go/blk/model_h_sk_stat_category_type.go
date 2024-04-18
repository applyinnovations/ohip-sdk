/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the HSKStatCategoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HSKStatCategoryType{}

// HSKStatCategoryType Defines the codes and corresponding categories for which the data in the other elements has been gathered.
type HSKStatCategoryType struct {
	Description *string `json:"description,omitempty"`
	StatCategoryCode *HSKStatCategoryCodeType `json:"statCategoryCode,omitempty"`
	// Defines where this statistical data is applied.
	StatCode *string `json:"statCode,omitempty"`
	// Classification of the statistical data.
	StatCodeClass *string `json:"statCodeClass,omitempty"`
	StatSet []HSKStatSetType `json:"statSet,omitempty"`
}

// NewHSKStatCategoryType instantiates a new HSKStatCategoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHSKStatCategoryType() *HSKStatCategoryType {
	this := HSKStatCategoryType{}
	return &this
}

// NewHSKStatCategoryTypeWithDefaults instantiates a new HSKStatCategoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHSKStatCategoryTypeWithDefaults() *HSKStatCategoryType {
	this := HSKStatCategoryType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HSKStatCategoryType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatCategoryType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HSKStatCategoryType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HSKStatCategoryType) SetDescription(v string) {
	o.Description = &v
}

// GetStatCategoryCode returns the StatCategoryCode field value if set, zero value otherwise.
func (o *HSKStatCategoryType) GetStatCategoryCode() HSKStatCategoryCodeType {
	if o == nil || IsNil(o.StatCategoryCode) {
		var ret HSKStatCategoryCodeType
		return ret
	}
	return *o.StatCategoryCode
}

// GetStatCategoryCodeOk returns a tuple with the StatCategoryCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatCategoryType) GetStatCategoryCodeOk() (*HSKStatCategoryCodeType, bool) {
	if o == nil || IsNil(o.StatCategoryCode) {
		return nil, false
	}
	return o.StatCategoryCode, true
}

// HasStatCategoryCode returns a boolean if a field has been set.
func (o *HSKStatCategoryType) HasStatCategoryCode() bool {
	if o != nil && !IsNil(o.StatCategoryCode) {
		return true
	}

	return false
}

// SetStatCategoryCode gets a reference to the given HSKStatCategoryCodeType and assigns it to the StatCategoryCode field.
func (o *HSKStatCategoryType) SetStatCategoryCode(v HSKStatCategoryCodeType) {
	o.StatCategoryCode = &v
}

// GetStatCode returns the StatCode field value if set, zero value otherwise.
func (o *HSKStatCategoryType) GetStatCode() string {
	if o == nil || IsNil(o.StatCode) {
		var ret string
		return ret
	}
	return *o.StatCode
}

// GetStatCodeOk returns a tuple with the StatCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatCategoryType) GetStatCodeOk() (*string, bool) {
	if o == nil || IsNil(o.StatCode) {
		return nil, false
	}
	return o.StatCode, true
}

// HasStatCode returns a boolean if a field has been set.
func (o *HSKStatCategoryType) HasStatCode() bool {
	if o != nil && !IsNil(o.StatCode) {
		return true
	}

	return false
}

// SetStatCode gets a reference to the given string and assigns it to the StatCode field.
func (o *HSKStatCategoryType) SetStatCode(v string) {
	o.StatCode = &v
}

// GetStatCodeClass returns the StatCodeClass field value if set, zero value otherwise.
func (o *HSKStatCategoryType) GetStatCodeClass() string {
	if o == nil || IsNil(o.StatCodeClass) {
		var ret string
		return ret
	}
	return *o.StatCodeClass
}

// GetStatCodeClassOk returns a tuple with the StatCodeClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatCategoryType) GetStatCodeClassOk() (*string, bool) {
	if o == nil || IsNil(o.StatCodeClass) {
		return nil, false
	}
	return o.StatCodeClass, true
}

// HasStatCodeClass returns a boolean if a field has been set.
func (o *HSKStatCategoryType) HasStatCodeClass() bool {
	if o != nil && !IsNil(o.StatCodeClass) {
		return true
	}

	return false
}

// SetStatCodeClass gets a reference to the given string and assigns it to the StatCodeClass field.
func (o *HSKStatCategoryType) SetStatCodeClass(v string) {
	o.StatCodeClass = &v
}

// GetStatSet returns the StatSet field value if set, zero value otherwise.
func (o *HSKStatCategoryType) GetStatSet() []HSKStatSetType {
	if o == nil || IsNil(o.StatSet) {
		var ret []HSKStatSetType
		return ret
	}
	return o.StatSet
}

// GetStatSetOk returns a tuple with the StatSet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatCategoryType) GetStatSetOk() ([]HSKStatSetType, bool) {
	if o == nil || IsNil(o.StatSet) {
		return nil, false
	}
	return o.StatSet, true
}

// HasStatSet returns a boolean if a field has been set.
func (o *HSKStatCategoryType) HasStatSet() bool {
	if o != nil && !IsNil(o.StatSet) {
		return true
	}

	return false
}

// SetStatSet gets a reference to the given []HSKStatSetType and assigns it to the StatSet field.
func (o *HSKStatCategoryType) SetStatSet(v []HSKStatSetType) {
	o.StatSet = v
}

func (o HSKStatCategoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HSKStatCategoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.StatCategoryCode) {
		toSerialize["statCategoryCode"] = o.StatCategoryCode
	}
	if !IsNil(o.StatCode) {
		toSerialize["statCode"] = o.StatCode
	}
	if !IsNil(o.StatCodeClass) {
		toSerialize["statCodeClass"] = o.StatCodeClass
	}
	if !IsNil(o.StatSet) {
		toSerialize["statSet"] = o.StatSet
	}
	return toSerialize, nil
}

type NullableHSKStatCategoryType struct {
	value *HSKStatCategoryType
	isSet bool
}

func (v NullableHSKStatCategoryType) Get() *HSKStatCategoryType {
	return v.value
}

func (v *NullableHSKStatCategoryType) Set(val *HSKStatCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableHSKStatCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableHSKStatCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHSKStatCategoryType(val *HSKStatCategoryType) *NullableHSKStatCategoryType {
	return &NullableHSKStatCategoryType{value: val, isSet: true}
}

func (v NullableHSKStatCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHSKStatCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

