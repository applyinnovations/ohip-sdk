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

// checks if the GenerateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GenerateType{}

// GenerateType Defines the Generate and its Calculation Rules
type GenerateType struct {
	AddGeneratedAmtTo *GenerateCalculationBucketsType `json:"addGeneratedAmtTo,omitempty"`
	// Code.
	Code *string `json:"code,omitempty"`
	// description.
	Description *string `json:"description,omitempty"`
	GenerateId *UniqueIDType `json:"generateId,omitempty"`
	Level *GenerateLevelType `json:"level,omitempty"`
	Rule *GenerateCalcRuleType `json:"rule,omitempty"`
}

// NewGenerateType instantiates a new GenerateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGenerateType() *GenerateType {
	this := GenerateType{}
	return &this
}

// NewGenerateTypeWithDefaults instantiates a new GenerateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGenerateTypeWithDefaults() *GenerateType {
	this := GenerateType{}
	return &this
}

// GetAddGeneratedAmtTo returns the AddGeneratedAmtTo field value if set, zero value otherwise.
func (o *GenerateType) GetAddGeneratedAmtTo() GenerateCalculationBucketsType {
	if o == nil || IsNil(o.AddGeneratedAmtTo) {
		var ret GenerateCalculationBucketsType
		return ret
	}
	return *o.AddGeneratedAmtTo
}

// GetAddGeneratedAmtToOk returns a tuple with the AddGeneratedAmtTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetAddGeneratedAmtToOk() (*GenerateCalculationBucketsType, bool) {
	if o == nil || IsNil(o.AddGeneratedAmtTo) {
		return nil, false
	}
	return o.AddGeneratedAmtTo, true
}

// HasAddGeneratedAmtTo returns a boolean if a field has been set.
func (o *GenerateType) HasAddGeneratedAmtTo() bool {
	if o != nil && !IsNil(o.AddGeneratedAmtTo) {
		return true
	}

	return false
}

// SetAddGeneratedAmtTo gets a reference to the given GenerateCalculationBucketsType and assigns it to the AddGeneratedAmtTo field.
func (o *GenerateType) SetAddGeneratedAmtTo(v GenerateCalculationBucketsType) {
	o.AddGeneratedAmtTo = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *GenerateType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *GenerateType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *GenerateType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *GenerateType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *GenerateType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *GenerateType) SetDescription(v string) {
	o.Description = &v
}

// GetGenerateId returns the GenerateId field value if set, zero value otherwise.
func (o *GenerateType) GetGenerateId() UniqueIDType {
	if o == nil || IsNil(o.GenerateId) {
		var ret UniqueIDType
		return ret
	}
	return *o.GenerateId
}

// GetGenerateIdOk returns a tuple with the GenerateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetGenerateIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.GenerateId) {
		return nil, false
	}
	return o.GenerateId, true
}

// HasGenerateId returns a boolean if a field has been set.
func (o *GenerateType) HasGenerateId() bool {
	if o != nil && !IsNil(o.GenerateId) {
		return true
	}

	return false
}

// SetGenerateId gets a reference to the given UniqueIDType and assigns it to the GenerateId field.
func (o *GenerateType) SetGenerateId(v UniqueIDType) {
	o.GenerateId = &v
}

// GetLevel returns the Level field value if set, zero value otherwise.
func (o *GenerateType) GetLevel() GenerateLevelType {
	if o == nil || IsNil(o.Level) {
		var ret GenerateLevelType
		return ret
	}
	return *o.Level
}

// GetLevelOk returns a tuple with the Level field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetLevelOk() (*GenerateLevelType, bool) {
	if o == nil || IsNil(o.Level) {
		return nil, false
	}
	return o.Level, true
}

// HasLevel returns a boolean if a field has been set.
func (o *GenerateType) HasLevel() bool {
	if o != nil && !IsNil(o.Level) {
		return true
	}

	return false
}

// SetLevel gets a reference to the given GenerateLevelType and assigns it to the Level field.
func (o *GenerateType) SetLevel(v GenerateLevelType) {
	o.Level = &v
}

// GetRule returns the Rule field value if set, zero value otherwise.
func (o *GenerateType) GetRule() GenerateCalcRuleType {
	if o == nil || IsNil(o.Rule) {
		var ret GenerateCalcRuleType
		return ret
	}
	return *o.Rule
}

// GetRuleOk returns a tuple with the Rule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateType) GetRuleOk() (*GenerateCalcRuleType, bool) {
	if o == nil || IsNil(o.Rule) {
		return nil, false
	}
	return o.Rule, true
}

// HasRule returns a boolean if a field has been set.
func (o *GenerateType) HasRule() bool {
	if o != nil && !IsNil(o.Rule) {
		return true
	}

	return false
}

// SetRule gets a reference to the given GenerateCalcRuleType and assigns it to the Rule field.
func (o *GenerateType) SetRule(v GenerateCalcRuleType) {
	o.Rule = &v
}

func (o GenerateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GenerateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddGeneratedAmtTo) {
		toSerialize["addGeneratedAmtTo"] = o.AddGeneratedAmtTo
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.GenerateId) {
		toSerialize["generateId"] = o.GenerateId
	}
	if !IsNil(o.Level) {
		toSerialize["level"] = o.Level
	}
	if !IsNil(o.Rule) {
		toSerialize["rule"] = o.Rule
	}
	return toSerialize, nil
}

type NullableGenerateType struct {
	value *GenerateType
	isSet bool
}

func (v NullableGenerateType) Get() *GenerateType {
	return v.value
}

func (v *NullableGenerateType) Set(val *GenerateType) {
	v.value = val
	v.isSet = true
}

func (v NullableGenerateType) IsSet() bool {
	return v.isSet
}

func (v *NullableGenerateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenerateType(val *GenerateType) *NullableGenerateType {
	return &NullableGenerateType{value: val, isSet: true}
}

func (v NullableGenerateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenerateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


