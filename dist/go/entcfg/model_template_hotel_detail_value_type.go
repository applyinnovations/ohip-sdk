/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the TemplateHotelDetailValueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateHotelDetailValueType{}

// TemplateHotelDetailValueType This type holds the base information of the hotel detail value which will be associated with a hotel detail.
type TemplateHotelDetailValueType struct {
	// Specifies the hotel detail value code.
	Code *string `json:"code,omitempty"`
	// Specifies the description of the hotel detail value.
	Description *string `json:"description,omitempty"`
	// Specifies the sorting sequence number for the hotel detail value.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewTemplateHotelDetailValueType instantiates a new TemplateHotelDetailValueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateHotelDetailValueType() *TemplateHotelDetailValueType {
	this := TemplateHotelDetailValueType{}
	return &this
}

// NewTemplateHotelDetailValueTypeWithDefaults instantiates a new TemplateHotelDetailValueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateHotelDetailValueTypeWithDefaults() *TemplateHotelDetailValueType {
	this := TemplateHotelDetailValueType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TemplateHotelDetailValueType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateHotelDetailValueType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TemplateHotelDetailValueType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TemplateHotelDetailValueType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateHotelDetailValueType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateHotelDetailValueType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateHotelDetailValueType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TemplateHotelDetailValueType) SetDescription(v string) {
	o.Description = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *TemplateHotelDetailValueType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateHotelDetailValueType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *TemplateHotelDetailValueType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *TemplateHotelDetailValueType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o TemplateHotelDetailValueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateHotelDetailValueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableTemplateHotelDetailValueType struct {
	value *TemplateHotelDetailValueType
	isSet bool
}

func (v NullableTemplateHotelDetailValueType) Get() *TemplateHotelDetailValueType {
	return v.value
}

func (v *NullableTemplateHotelDetailValueType) Set(val *TemplateHotelDetailValueType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateHotelDetailValueType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateHotelDetailValueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateHotelDetailValueType(val *TemplateHotelDetailValueType) *NullableTemplateHotelDetailValueType {
	return &NullableTemplateHotelDetailValueType{value: val, isSet: true}
}

func (v NullableTemplateHotelDetailValueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateHotelDetailValueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


