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

// checks if the HotelDetailValueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelDetailValueType{}

// HotelDetailValueType This type holds the base information of the hotel detail value which will be associated with a hotel detail.
type HotelDetailValueType struct {
	// Specifies the hotel detail value code.
	Code *string `json:"code,omitempty"`
	// Specifies the description of the hotel detail value.
	Description *string `json:"description,omitempty"`
	// Specifies the new hotel detail value code.
	NewCode *string `json:"newCode,omitempty"`
	// Specifies the sorting sequence number for the hotel detail value.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewHotelDetailValueType instantiates a new HotelDetailValueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelDetailValueType() *HotelDetailValueType {
	this := HotelDetailValueType{}
	return &this
}

// NewHotelDetailValueTypeWithDefaults instantiates a new HotelDetailValueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelDetailValueTypeWithDefaults() *HotelDetailValueType {
	this := HotelDetailValueType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelDetailValueType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailValueType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelDetailValueType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelDetailValueType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelDetailValueType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailValueType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelDetailValueType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelDetailValueType) SetDescription(v string) {
	o.Description = &v
}

// GetNewCode returns the NewCode field value if set, zero value otherwise.
func (o *HotelDetailValueType) GetNewCode() string {
	if o == nil || IsNil(o.NewCode) {
		var ret string
		return ret
	}
	return *o.NewCode
}

// GetNewCodeOk returns a tuple with the NewCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailValueType) GetNewCodeOk() (*string, bool) {
	if o == nil || IsNil(o.NewCode) {
		return nil, false
	}
	return o.NewCode, true
}

// HasNewCode returns a boolean if a field has been set.
func (o *HotelDetailValueType) HasNewCode() bool {
	if o != nil && !IsNil(o.NewCode) {
		return true
	}

	return false
}

// SetNewCode gets a reference to the given string and assigns it to the NewCode field.
func (o *HotelDetailValueType) SetNewCode(v string) {
	o.NewCode = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *HotelDetailValueType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailValueType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *HotelDetailValueType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *HotelDetailValueType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o HotelDetailValueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelDetailValueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.NewCode) {
		toSerialize["newCode"] = o.NewCode
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableHotelDetailValueType struct {
	value *HotelDetailValueType
	isSet bool
}

func (v NullableHotelDetailValueType) Get() *HotelDetailValueType {
	return v.value
}

func (v *NullableHotelDetailValueType) Set(val *HotelDetailValueType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelDetailValueType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelDetailValueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelDetailValueType(val *HotelDetailValueType) *NullableHotelDetailValueType {
	return &NullableHotelDetailValueType{value: val, isSet: true}
}

func (v NullableHotelDetailValueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelDetailValueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


