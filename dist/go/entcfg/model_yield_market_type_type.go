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

// checks if the YieldMarketTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &YieldMarketTypeType{}

// YieldMarketTypeType Details for Yield Market Type.
type YieldMarketTypeType struct {
	// Yield Market Code.
	Code *string `json:"code,omitempty"`
	// Hotel code for which the yield market type belong to.
	HotelId *string `json:"hotelId,omitempty"`
	// Description for the yield market code.
	Description *string `json:"description,omitempty"`
	// If the yield market code does not return a result, this alternative yield market code is used instead.
	AlternativeCode *string `json:"alternativeCode,omitempty"`
	// Indicates the default yield market type.
	Default *bool `json:"default,omitempty"`
}

// NewYieldMarketTypeType instantiates a new YieldMarketTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYieldMarketTypeType() *YieldMarketTypeType {
	this := YieldMarketTypeType{}
	return &this
}

// NewYieldMarketTypeTypeWithDefaults instantiates a new YieldMarketTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYieldMarketTypeTypeWithDefaults() *YieldMarketTypeType {
	this := YieldMarketTypeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *YieldMarketTypeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *YieldMarketTypeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *YieldMarketTypeType) SetCode(v string) {
	o.Code = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *YieldMarketTypeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *YieldMarketTypeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *YieldMarketTypeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *YieldMarketTypeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *YieldMarketTypeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *YieldMarketTypeType) SetDescription(v string) {
	o.Description = &v
}

// GetAlternativeCode returns the AlternativeCode field value if set, zero value otherwise.
func (o *YieldMarketTypeType) GetAlternativeCode() string {
	if o == nil || IsNil(o.AlternativeCode) {
		var ret string
		return ret
	}
	return *o.AlternativeCode
}

// GetAlternativeCodeOk returns a tuple with the AlternativeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypeType) GetAlternativeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AlternativeCode) {
		return nil, false
	}
	return o.AlternativeCode, true
}

// HasAlternativeCode returns a boolean if a field has been set.
func (o *YieldMarketTypeType) HasAlternativeCode() bool {
	if o != nil && !IsNil(o.AlternativeCode) {
		return true
	}

	return false
}

// SetAlternativeCode gets a reference to the given string and assigns it to the AlternativeCode field.
func (o *YieldMarketTypeType) SetAlternativeCode(v string) {
	o.AlternativeCode = &v
}

// GetDefault returns the Default field value if set, zero value otherwise.
func (o *YieldMarketTypeType) GetDefault() bool {
	if o == nil || IsNil(o.Default) {
		var ret bool
		return ret
	}
	return *o.Default
}

// GetDefaultOk returns a tuple with the Default field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypeType) GetDefaultOk() (*bool, bool) {
	if o == nil || IsNil(o.Default) {
		return nil, false
	}
	return o.Default, true
}

// HasDefault returns a boolean if a field has been set.
func (o *YieldMarketTypeType) HasDefault() bool {
	if o != nil && !IsNil(o.Default) {
		return true
	}

	return false
}

// SetDefault gets a reference to the given bool and assigns it to the Default field.
func (o *YieldMarketTypeType) SetDefault(v bool) {
	o.Default = &v
}

func (o YieldMarketTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o YieldMarketTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.AlternativeCode) {
		toSerialize["alternativeCode"] = o.AlternativeCode
	}
	if !IsNil(o.Default) {
		toSerialize["default"] = o.Default
	}
	return toSerialize, nil
}

type NullableYieldMarketTypeType struct {
	value *YieldMarketTypeType
	isSet bool
}

func (v NullableYieldMarketTypeType) Get() *YieldMarketTypeType {
	return v.value
}

func (v *NullableYieldMarketTypeType) Set(val *YieldMarketTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableYieldMarketTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableYieldMarketTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYieldMarketTypeType(val *YieldMarketTypeType) *NullableYieldMarketTypeType {
	return &NullableYieldMarketTypeType{value: val, isSet: true}
}

func (v NullableYieldMarketTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYieldMarketTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

