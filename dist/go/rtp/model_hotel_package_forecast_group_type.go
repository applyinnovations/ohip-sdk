/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the HotelPackageForecastGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelPackageForecastGroupType{}

// HotelPackageForecastGroupType Base details common between hotel and template package forecast groups.
type HotelPackageForecastGroupType struct {
	// Package forecast group code to identify the package forecast group.
	Code *string `json:"code,omitempty"`
	// Description of the package forecast group.
	Description *string `json:"description,omitempty"`
	// Hotel code that the package forecast group belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Inactive flag for a package forecast group.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicates package forecast sell sequence.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewHotelPackageForecastGroupType instantiates a new HotelPackageForecastGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelPackageForecastGroupType() *HotelPackageForecastGroupType {
	this := HotelPackageForecastGroupType{}
	return &this
}

// NewHotelPackageForecastGroupTypeWithDefaults instantiates a new HotelPackageForecastGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelPackageForecastGroupTypeWithDefaults() *HotelPackageForecastGroupType {
	this := HotelPackageForecastGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelPackageForecastGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageForecastGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelPackageForecastGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelPackageForecastGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelPackageForecastGroupType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageForecastGroupType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelPackageForecastGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelPackageForecastGroupType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelPackageForecastGroupType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageForecastGroupType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelPackageForecastGroupType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelPackageForecastGroupType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HotelPackageForecastGroupType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageForecastGroupType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HotelPackageForecastGroupType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HotelPackageForecastGroupType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *HotelPackageForecastGroupType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageForecastGroupType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *HotelPackageForecastGroupType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *HotelPackageForecastGroupType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o HotelPackageForecastGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelPackageForecastGroupType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableHotelPackageForecastGroupType struct {
	value *HotelPackageForecastGroupType
	isSet bool
}

func (v NullableHotelPackageForecastGroupType) Get() *HotelPackageForecastGroupType {
	return v.value
}

func (v *NullableHotelPackageForecastGroupType) Set(val *HotelPackageForecastGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelPackageForecastGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelPackageForecastGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelPackageForecastGroupType(val *HotelPackageForecastGroupType) *NullableHotelPackageForecastGroupType {
	return &NullableHotelPackageForecastGroupType{value: val, isSet: true}
}

func (v NullableHotelPackageForecastGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelPackageForecastGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


