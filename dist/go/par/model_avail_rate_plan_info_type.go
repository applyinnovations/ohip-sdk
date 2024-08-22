/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the AvailRatePlanInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AvailRatePlanInfoType{}

// AvailRatePlanInfoType The rate plan element is used to contain all the rate information for a single Rate Plan
type AvailRatePlanInfoType struct {
	HotelId *string `json:"hotelId,omitempty"`
	// Rate plan information
	RatePlan []AvailRatePlanInfoTypeRatePlanInner `json:"ratePlan,omitempty"`
}

// NewAvailRatePlanInfoType instantiates a new AvailRatePlanInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAvailRatePlanInfoType() *AvailRatePlanInfoType {
	this := AvailRatePlanInfoType{}
	return &this
}

// NewAvailRatePlanInfoTypeWithDefaults instantiates a new AvailRatePlanInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAvailRatePlanInfoTypeWithDefaults() *AvailRatePlanInfoType {
	this := AvailRatePlanInfoType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AvailRatePlanInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailRatePlanInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AvailRatePlanInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AvailRatePlanInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRatePlan returns the RatePlan field value if set, zero value otherwise.
func (o *AvailRatePlanInfoType) GetRatePlan() []AvailRatePlanInfoTypeRatePlanInner {
	if o == nil || IsNil(o.RatePlan) {
		var ret []AvailRatePlanInfoTypeRatePlanInner
		return ret
	}
	return o.RatePlan
}

// GetRatePlanOk returns a tuple with the RatePlan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailRatePlanInfoType) GetRatePlanOk() ([]AvailRatePlanInfoTypeRatePlanInner, bool) {
	if o == nil || IsNil(o.RatePlan) {
		return nil, false
	}
	return o.RatePlan, true
}

// HasRatePlan returns a boolean if a field has been set.
func (o *AvailRatePlanInfoType) HasRatePlan() bool {
	if o != nil && !IsNil(o.RatePlan) {
		return true
	}

	return false
}

// SetRatePlan gets a reference to the given []AvailRatePlanInfoTypeRatePlanInner and assigns it to the RatePlan field.
func (o *AvailRatePlanInfoType) SetRatePlan(v []AvailRatePlanInfoTypeRatePlanInner) {
	o.RatePlan = v
}

func (o AvailRatePlanInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AvailRatePlanInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RatePlan) {
		toSerialize["ratePlan"] = o.RatePlan
	}
	return toSerialize, nil
}

type NullableAvailRatePlanInfoType struct {
	value *AvailRatePlanInfoType
	isSet bool
}

func (v NullableAvailRatePlanInfoType) Get() *AvailRatePlanInfoType {
	return v.value
}

func (v *NullableAvailRatePlanInfoType) Set(val *AvailRatePlanInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAvailRatePlanInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAvailRatePlanInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAvailRatePlanInfoType(val *AvailRatePlanInfoType) *NullableAvailRatePlanInfoType {
	return &NullableAvailRatePlanInfoType{value: val, isSet: true}
}

func (v NullableAvailRatePlanInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAvailRatePlanInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


