/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CodeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CodeInfoType{}

// CodeInfoType struct for CodeInfoType
type CodeInfoType struct {
	// Holds name of additional code information
	AddtionalCodeInfo []AddtionalCodeInfoTypeInner `json:"addtionalCodeInfo,omitempty"`
	Code *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
}

// NewCodeInfoType instantiates a new CodeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCodeInfoType() *CodeInfoType {
	this := CodeInfoType{}
	return &this
}

// NewCodeInfoTypeWithDefaults instantiates a new CodeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCodeInfoTypeWithDefaults() *CodeInfoType {
	this := CodeInfoType{}
	return &this
}

// GetAddtionalCodeInfo returns the AddtionalCodeInfo field value if set, zero value otherwise.
func (o *CodeInfoType) GetAddtionalCodeInfo() []AddtionalCodeInfoTypeInner {
	if o == nil || IsNil(o.AddtionalCodeInfo) {
		var ret []AddtionalCodeInfoTypeInner
		return ret
	}
	return o.AddtionalCodeInfo
}

// GetAddtionalCodeInfoOk returns a tuple with the AddtionalCodeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeInfoType) GetAddtionalCodeInfoOk() ([]AddtionalCodeInfoTypeInner, bool) {
	if o == nil || IsNil(o.AddtionalCodeInfo) {
		return nil, false
	}
	return o.AddtionalCodeInfo, true
}

// HasAddtionalCodeInfo returns a boolean if a field has been set.
func (o *CodeInfoType) HasAddtionalCodeInfo() bool {
	if o != nil && !IsNil(o.AddtionalCodeInfo) {
		return true
	}

	return false
}

// SetAddtionalCodeInfo gets a reference to the given []AddtionalCodeInfoTypeInner and assigns it to the AddtionalCodeInfo field.
func (o *CodeInfoType) SetAddtionalCodeInfo(v []AddtionalCodeInfoTypeInner) {
	o.AddtionalCodeInfo = v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CodeInfoType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeInfoType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CodeInfoType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CodeInfoType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CodeInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CodeInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CodeInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CodeInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CodeInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CodeInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o CodeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CodeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddtionalCodeInfo) {
		toSerialize["addtionalCodeInfo"] = o.AddtionalCodeInfo
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableCodeInfoType struct {
	value *CodeInfoType
	isSet bool
}

func (v NullableCodeInfoType) Get() *CodeInfoType {
	return v.value
}

func (v *NullableCodeInfoType) Set(val *CodeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCodeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCodeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCodeInfoType(val *CodeInfoType) *NullableCodeInfoType {
	return &NullableCodeInfoType{value: val, isSet: true}
}

func (v NullableCodeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCodeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


