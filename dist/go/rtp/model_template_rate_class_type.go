/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the TemplateRateClassType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateRateClassType{}

// TemplateRateClassType A template rate class.
type TemplateRateClassType struct {
	// Description of the rate class.
	Description *string `json:"description,omitempty"`
	// Code that uniquely identifies the rate class.
	RateClass *string `json:"rateClass,omitempty"`
	// Display Sequence of the rate class.
	Sequence *int32 `json:"sequence,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewTemplateRateClassType instantiates a new TemplateRateClassType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateRateClassType() *TemplateRateClassType {
	this := TemplateRateClassType{}
	return &this
}

// NewTemplateRateClassTypeWithDefaults instantiates a new TemplateRateClassType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateRateClassTypeWithDefaults() *TemplateRateClassType {
	this := TemplateRateClassType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateRateClassType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateClassType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateRateClassType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TemplateRateClassType) SetDescription(v string) {
	o.Description = &v
}

// GetRateClass returns the RateClass field value if set, zero value otherwise.
func (o *TemplateRateClassType) GetRateClass() string {
	if o == nil || IsNil(o.RateClass) {
		var ret string
		return ret
	}
	return *o.RateClass
}

// GetRateClassOk returns a tuple with the RateClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateClassType) GetRateClassOk() (*string, bool) {
	if o == nil || IsNil(o.RateClass) {
		return nil, false
	}
	return o.RateClass, true
}

// HasRateClass returns a boolean if a field has been set.
func (o *TemplateRateClassType) HasRateClass() bool {
	if o != nil && !IsNil(o.RateClass) {
		return true
	}

	return false
}

// SetRateClass gets a reference to the given string and assigns it to the RateClass field.
func (o *TemplateRateClassType) SetRateClass(v string) {
	o.RateClass = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *TemplateRateClassType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateClassType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *TemplateRateClassType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *TemplateRateClassType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *TemplateRateClassType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateClassType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *TemplateRateClassType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *TemplateRateClassType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o TemplateRateClassType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateRateClassType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.RateClass) {
		toSerialize["rateClass"] = o.RateClass
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableTemplateRateClassType struct {
	value *TemplateRateClassType
	isSet bool
}

func (v NullableTemplateRateClassType) Get() *TemplateRateClassType {
	return v.value
}

func (v *NullableTemplateRateClassType) Set(val *TemplateRateClassType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateRateClassType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateRateClassType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateRateClassType(val *TemplateRateClassType) *NullableTemplateRateClassType {
	return &NullableTemplateRateClassType{value: val, isSet: true}
}

func (v NullableTemplateRateClassType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateRateClassType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

