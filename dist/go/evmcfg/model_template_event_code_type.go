/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the TemplateEventCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateEventCodeType{}

// TemplateEventCodeType Base structure for template and hotel Event Code.
type TemplateEventCodeType struct {
	// Black Out flag of Event.
	BlackOut *bool `json:"blackOut,omitempty"`
	// Code of an Event.
	Code *string `json:"code,omitempty"`
	// Description of an Event.
	Description *string `json:"description,omitempty"`
	// Inactive flag of Event.
	Inactive *bool `json:"inactive,omitempty"`
	// Sell sequence of Event.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewTemplateEventCodeType instantiates a new TemplateEventCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateEventCodeType() *TemplateEventCodeType {
	this := TemplateEventCodeType{}
	return &this
}

// NewTemplateEventCodeTypeWithDefaults instantiates a new TemplateEventCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateEventCodeTypeWithDefaults() *TemplateEventCodeType {
	this := TemplateEventCodeType{}
	return &this
}

// GetBlackOut returns the BlackOut field value if set, zero value otherwise.
func (o *TemplateEventCodeType) GetBlackOut() bool {
	if o == nil || IsNil(o.BlackOut) {
		var ret bool
		return ret
	}
	return *o.BlackOut
}

// GetBlackOutOk returns a tuple with the BlackOut field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateEventCodeType) GetBlackOutOk() (*bool, bool) {
	if o == nil || IsNil(o.BlackOut) {
		return nil, false
	}
	return o.BlackOut, true
}

// HasBlackOut returns a boolean if a field has been set.
func (o *TemplateEventCodeType) HasBlackOut() bool {
	if o != nil && !IsNil(o.BlackOut) {
		return true
	}

	return false
}

// SetBlackOut gets a reference to the given bool and assigns it to the BlackOut field.
func (o *TemplateEventCodeType) SetBlackOut(v bool) {
	o.BlackOut = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TemplateEventCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateEventCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TemplateEventCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TemplateEventCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateEventCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateEventCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateEventCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TemplateEventCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TemplateEventCodeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateEventCodeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TemplateEventCodeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TemplateEventCodeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *TemplateEventCodeType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateEventCodeType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *TemplateEventCodeType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *TemplateEventCodeType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o TemplateEventCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateEventCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlackOut) {
		toSerialize["blackOut"] = o.BlackOut
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableTemplateEventCodeType struct {
	value *TemplateEventCodeType
	isSet bool
}

func (v NullableTemplateEventCodeType) Get() *TemplateEventCodeType {
	return v.value
}

func (v *NullableTemplateEventCodeType) Set(val *TemplateEventCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateEventCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateEventCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateEventCodeType(val *TemplateEventCodeType) *NullableTemplateEventCodeType {
	return &NullableTemplateEventCodeType{value: val, isSet: true}
}

func (v NullableTemplateEventCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateEventCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

