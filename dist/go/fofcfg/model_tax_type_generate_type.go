/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TaxTypeGenerateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaxTypeGenerateType{}

// TaxTypeGenerateType Defines the Calculation Rules for the Tax Type
type TaxTypeGenerateType struct {
	// Code.
	Code *string `json:"code,omitempty"`
	// description.
	Description *string `json:"description,omitempty"`
	// Defines the Calculation Rule for the Tax Type for a specific date schedule
	Schedule []TaxTypeGenerateScheduleType `json:"schedule,omitempty"`
}

// NewTaxTypeGenerateType instantiates a new TaxTypeGenerateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaxTypeGenerateType() *TaxTypeGenerateType {
	this := TaxTypeGenerateType{}
	return &this
}

// NewTaxTypeGenerateTypeWithDefaults instantiates a new TaxTypeGenerateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaxTypeGenerateTypeWithDefaults() *TaxTypeGenerateType {
	this := TaxTypeGenerateType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TaxTypeGenerateType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxTypeGenerateType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TaxTypeGenerateType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TaxTypeGenerateType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TaxTypeGenerateType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxTypeGenerateType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TaxTypeGenerateType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TaxTypeGenerateType) SetDescription(v string) {
	o.Description = &v
}

// GetSchedule returns the Schedule field value if set, zero value otherwise.
func (o *TaxTypeGenerateType) GetSchedule() []TaxTypeGenerateScheduleType {
	if o == nil || IsNil(o.Schedule) {
		var ret []TaxTypeGenerateScheduleType
		return ret
	}
	return o.Schedule
}

// GetScheduleOk returns a tuple with the Schedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxTypeGenerateType) GetScheduleOk() ([]TaxTypeGenerateScheduleType, bool) {
	if o == nil || IsNil(o.Schedule) {
		return nil, false
	}
	return o.Schedule, true
}

// HasSchedule returns a boolean if a field has been set.
func (o *TaxTypeGenerateType) HasSchedule() bool {
	if o != nil && !IsNil(o.Schedule) {
		return true
	}

	return false
}

// SetSchedule gets a reference to the given []TaxTypeGenerateScheduleType and assigns it to the Schedule field.
func (o *TaxTypeGenerateType) SetSchedule(v []TaxTypeGenerateScheduleType) {
	o.Schedule = v
}

func (o TaxTypeGenerateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaxTypeGenerateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Schedule) {
		toSerialize["schedule"] = o.Schedule
	}
	return toSerialize, nil
}

type NullableTaxTypeGenerateType struct {
	value *TaxTypeGenerateType
	isSet bool
}

func (v NullableTaxTypeGenerateType) Get() *TaxTypeGenerateType {
	return v.value
}

func (v *NullableTaxTypeGenerateType) Set(val *TaxTypeGenerateType) {
	v.value = val
	v.isSet = true
}

func (v NullableTaxTypeGenerateType) IsSet() bool {
	return v.isSet
}

func (v *NullableTaxTypeGenerateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaxTypeGenerateType(val *TaxTypeGenerateType) *NullableTaxTypeGenerateType {
	return &NullableTaxTypeGenerateType{value: val, isSet: true}
}

func (v NullableTaxTypeGenerateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaxTypeGenerateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


