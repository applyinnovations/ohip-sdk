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

// checks if the YieldCategoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &YieldCategoryType{}

// YieldCategoryType Provides information about the Yield Category.
type YieldCategoryType struct {
	// Code of the Yield Category.
	Code *string `json:"code,omitempty"`
	// Description of the Yield Category.
	Description *string `json:"description,omitempty"`
	// Code of the Hotel.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewYieldCategoryType instantiates a new YieldCategoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYieldCategoryType() *YieldCategoryType {
	this := YieldCategoryType{}
	return &this
}

// NewYieldCategoryTypeWithDefaults instantiates a new YieldCategoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYieldCategoryTypeWithDefaults() *YieldCategoryType {
	this := YieldCategoryType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *YieldCategoryType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldCategoryType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *YieldCategoryType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *YieldCategoryType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *YieldCategoryType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldCategoryType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *YieldCategoryType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *YieldCategoryType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *YieldCategoryType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldCategoryType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *YieldCategoryType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *YieldCategoryType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o YieldCategoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o YieldCategoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
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

type NullableYieldCategoryType struct {
	value *YieldCategoryType
	isSet bool
}

func (v NullableYieldCategoryType) Get() *YieldCategoryType {
	return v.value
}

func (v *NullableYieldCategoryType) Set(val *YieldCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableYieldCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableYieldCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYieldCategoryType(val *YieldCategoryType) *NullableYieldCategoryType {
	return &NullableYieldCategoryType{value: val, isSet: true}
}

func (v NullableYieldCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYieldCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


