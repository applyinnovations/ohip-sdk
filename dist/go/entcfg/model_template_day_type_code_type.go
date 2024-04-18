/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the TemplateDayTypeCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateDayTypeCodeType{}

// TemplateDayTypeCodeType Base structure for Day Type Code at both template and hotel levels.
type TemplateDayTypeCodeType struct {
	// Code of a Day Type.
	Code *string `json:"code,omitempty"`
	// Description of a Day Type.
	Description *string `json:"description,omitempty"`
	// Value by which the rates will be multiplied on a day.
	Multiplier *float32 `json:"multiplier,omitempty"`
	// Value that will be added to rate on a day.
	Adder *float32 `json:"adder,omitempty"`
	Color *ColorType `json:"color,omitempty"`
	// Sell sequence for a Day Type.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewTemplateDayTypeCodeType instantiates a new TemplateDayTypeCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateDayTypeCodeType() *TemplateDayTypeCodeType {
	this := TemplateDayTypeCodeType{}
	return &this
}

// NewTemplateDayTypeCodeTypeWithDefaults instantiates a new TemplateDayTypeCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateDayTypeCodeTypeWithDefaults() *TemplateDayTypeCodeType {
	this := TemplateDayTypeCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TemplateDayTypeCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TemplateDayTypeCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetMultiplier returns the Multiplier field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetMultiplier() float32 {
	if o == nil || IsNil(o.Multiplier) {
		var ret float32
		return ret
	}
	return *o.Multiplier
}

// GetMultiplierOk returns a tuple with the Multiplier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetMultiplierOk() (*float32, bool) {
	if o == nil || IsNil(o.Multiplier) {
		return nil, false
	}
	return o.Multiplier, true
}

// HasMultiplier returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasMultiplier() bool {
	if o != nil && !IsNil(o.Multiplier) {
		return true
	}

	return false
}

// SetMultiplier gets a reference to the given float32 and assigns it to the Multiplier field.
func (o *TemplateDayTypeCodeType) SetMultiplier(v float32) {
	o.Multiplier = &v
}

// GetAdder returns the Adder field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetAdder() float32 {
	if o == nil || IsNil(o.Adder) {
		var ret float32
		return ret
	}
	return *o.Adder
}

// GetAdderOk returns a tuple with the Adder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetAdderOk() (*float32, bool) {
	if o == nil || IsNil(o.Adder) {
		return nil, false
	}
	return o.Adder, true
}

// HasAdder returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasAdder() bool {
	if o != nil && !IsNil(o.Adder) {
		return true
	}

	return false
}

// SetAdder gets a reference to the given float32 and assigns it to the Adder field.
func (o *TemplateDayTypeCodeType) SetAdder(v float32) {
	o.Adder = &v
}

// GetColor returns the Color field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetColor() ColorType {
	if o == nil || IsNil(o.Color) {
		var ret ColorType
		return ret
	}
	return *o.Color
}

// GetColorOk returns a tuple with the Color field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetColorOk() (*ColorType, bool) {
	if o == nil || IsNil(o.Color) {
		return nil, false
	}
	return o.Color, true
}

// HasColor returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasColor() bool {
	if o != nil && !IsNil(o.Color) {
		return true
	}

	return false
}

// SetColor gets a reference to the given ColorType and assigns it to the Color field.
func (o *TemplateDayTypeCodeType) SetColor(v ColorType) {
	o.Color = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *TemplateDayTypeCodeType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDayTypeCodeType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *TemplateDayTypeCodeType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *TemplateDayTypeCodeType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o TemplateDayTypeCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateDayTypeCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Multiplier) {
		toSerialize["multiplier"] = o.Multiplier
	}
	if !IsNil(o.Adder) {
		toSerialize["adder"] = o.Adder
	}
	if !IsNil(o.Color) {
		toSerialize["color"] = o.Color
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableTemplateDayTypeCodeType struct {
	value *TemplateDayTypeCodeType
	isSet bool
}

func (v NullableTemplateDayTypeCodeType) Get() *TemplateDayTypeCodeType {
	return v.value
}

func (v *NullableTemplateDayTypeCodeType) Set(val *TemplateDayTypeCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateDayTypeCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateDayTypeCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateDayTypeCodeType(val *TemplateDayTypeCodeType) *NullableTemplateDayTypeCodeType {
	return &NullableTemplateDayTypeCodeType{value: val, isSet: true}
}

func (v NullableTemplateDayTypeCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateDayTypeCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

