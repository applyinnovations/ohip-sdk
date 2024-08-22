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

// checks if the AlertTemplateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AlertTemplateType{}

// AlertTemplateType Common code type for code, description
type AlertTemplateType struct {
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	// Description for the code type.
	Description *string `json:"description,omitempty"`
	// Sequence for alert template.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
}

// NewAlertTemplateType instantiates a new AlertTemplateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAlertTemplateType() *AlertTemplateType {
	this := AlertTemplateType{}
	return &this
}

// NewAlertTemplateTypeWithDefaults instantiates a new AlertTemplateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAlertTemplateTypeWithDefaults() *AlertTemplateType {
	this := AlertTemplateType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *AlertTemplateType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertTemplateType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *AlertTemplateType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *AlertTemplateType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AlertTemplateType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertTemplateType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AlertTemplateType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AlertTemplateType) SetDescription(v string) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *AlertTemplateType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertTemplateType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *AlertTemplateType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *AlertTemplateType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

func (o AlertTemplateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AlertTemplateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	return toSerialize, nil
}

type NullableAlertTemplateType struct {
	value *AlertTemplateType
	isSet bool
}

func (v NullableAlertTemplateType) Get() *AlertTemplateType {
	return v.value
}

func (v *NullableAlertTemplateType) Set(val *AlertTemplateType) {
	v.value = val
	v.isSet = true
}

func (v NullableAlertTemplateType) IsSet() bool {
	return v.isSet
}

func (v *NullableAlertTemplateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAlertTemplateType(val *AlertTemplateType) *NullableAlertTemplateType {
	return &NullableAlertTemplateType{value: val, isSet: true}
}

func (v NullableAlertTemplateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAlertTemplateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


