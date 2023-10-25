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

// checks if the CustomNumberTemplateConfigurationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomNumberTemplateConfigurationType{}

// CustomNumberTemplateConfigurationType Custom number configuration details.
type CustomNumberTemplateConfigurationType struct {
	Area *CustomNumberConfigurationAreaType `json:"area,omitempty"`
	// Custom number configuration code.
	Code *string `json:"code,omitempty"`
	// The condition to be met to generate and apply the custom number.
	Condition *string `json:"condition,omitempty"`
	// The description of the custom number configuration code.
	Description *string `json:"description,omitempty"`
	// The formula to generate the custom number.
	Formula *string `json:"formula,omitempty"`
	// Indicator that tells whether the configuration is active or not.
	InActive *bool `json:"inActive,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewCustomNumberTemplateConfigurationType instantiates a new CustomNumberTemplateConfigurationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomNumberTemplateConfigurationType() *CustomNumberTemplateConfigurationType {
	this := CustomNumberTemplateConfigurationType{}
	return &this
}

// NewCustomNumberTemplateConfigurationTypeWithDefaults instantiates a new CustomNumberTemplateConfigurationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomNumberTemplateConfigurationTypeWithDefaults() *CustomNumberTemplateConfigurationType {
	this := CustomNumberTemplateConfigurationType{}
	return &this
}

// GetArea returns the Area field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetArea() CustomNumberConfigurationAreaType {
	if o == nil || IsNil(o.Area) {
		var ret CustomNumberConfigurationAreaType
		return ret
	}
	return *o.Area
}

// GetAreaOk returns a tuple with the Area field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetAreaOk() (*CustomNumberConfigurationAreaType, bool) {
	if o == nil || IsNil(o.Area) {
		return nil, false
	}
	return o.Area, true
}

// HasArea returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasArea() bool {
	if o != nil && !IsNil(o.Area) {
		return true
	}

	return false
}

// SetArea gets a reference to the given CustomNumberConfigurationAreaType and assigns it to the Area field.
func (o *CustomNumberTemplateConfigurationType) SetArea(v CustomNumberConfigurationAreaType) {
	o.Area = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CustomNumberTemplateConfigurationType) SetCode(v string) {
	o.Code = &v
}

// GetCondition returns the Condition field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetCondition() string {
	if o == nil || IsNil(o.Condition) {
		var ret string
		return ret
	}
	return *o.Condition
}

// GetConditionOk returns a tuple with the Condition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetConditionOk() (*string, bool) {
	if o == nil || IsNil(o.Condition) {
		return nil, false
	}
	return o.Condition, true
}

// HasCondition returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasCondition() bool {
	if o != nil && !IsNil(o.Condition) {
		return true
	}

	return false
}

// SetCondition gets a reference to the given string and assigns it to the Condition field.
func (o *CustomNumberTemplateConfigurationType) SetCondition(v string) {
	o.Condition = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CustomNumberTemplateConfigurationType) SetDescription(v string) {
	o.Description = &v
}

// GetFormula returns the Formula field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetFormula() string {
	if o == nil || IsNil(o.Formula) {
		var ret string
		return ret
	}
	return *o.Formula
}

// GetFormulaOk returns a tuple with the Formula field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetFormulaOk() (*string, bool) {
	if o == nil || IsNil(o.Formula) {
		return nil, false
	}
	return o.Formula, true
}

// HasFormula returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasFormula() bool {
	if o != nil && !IsNil(o.Formula) {
		return true
	}

	return false
}

// SetFormula gets a reference to the given string and assigns it to the Formula field.
func (o *CustomNumberTemplateConfigurationType) SetFormula(v string) {
	o.Formula = &v
}

// GetInActive returns the InActive field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetInActive() bool {
	if o == nil || IsNil(o.InActive) {
		var ret bool
		return ret
	}
	return *o.InActive
}

// GetInActiveOk returns a tuple with the InActive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetInActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.InActive) {
		return nil, false
	}
	return o.InActive, true
}

// HasInActive returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasInActive() bool {
	if o != nil && !IsNil(o.InActive) {
		return true
	}

	return false
}

// SetInActive gets a reference to the given bool and assigns it to the InActive field.
func (o *CustomNumberTemplateConfigurationType) SetInActive(v bool) {
	o.InActive = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *CustomNumberTemplateConfigurationType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *CustomNumberTemplateConfigurationType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberTemplateConfigurationType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *CustomNumberTemplateConfigurationType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *CustomNumberTemplateConfigurationType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o CustomNumberTemplateConfigurationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomNumberTemplateConfigurationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Area) {
		toSerialize["area"] = o.Area
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Condition) {
		toSerialize["condition"] = o.Condition
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Formula) {
		toSerialize["formula"] = o.Formula
	}
	if !IsNil(o.InActive) {
		toSerialize["inActive"] = o.InActive
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableCustomNumberTemplateConfigurationType struct {
	value *CustomNumberTemplateConfigurationType
	isSet bool
}

func (v NullableCustomNumberTemplateConfigurationType) Get() *CustomNumberTemplateConfigurationType {
	return v.value
}

func (v *NullableCustomNumberTemplateConfigurationType) Set(val *CustomNumberTemplateConfigurationType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomNumberTemplateConfigurationType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomNumberTemplateConfigurationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomNumberTemplateConfigurationType(val *CustomNumberTemplateConfigurationType) *NullableCustomNumberTemplateConfigurationType {
	return &NullableCustomNumberTemplateConfigurationType{value: val, isSet: true}
}

func (v NullableCustomNumberTemplateConfigurationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomNumberTemplateConfigurationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


