/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ECouponCopyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECouponCopyType{}

// ECouponCopyType Copy eCoupons from one Property to one or multiple properties.
type ECouponCopyType struct {
	ECouponCodes []string `json:"eCouponCodes,omitempty"`
	// Source property from which copy operation will happen.
	HotelId *string `json:"hotelId,omitempty"`
	TargetHotelCodes []string `json:"targetHotelCodes,omitempty"`
}

// NewECouponCopyType instantiates a new ECouponCopyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECouponCopyType() *ECouponCopyType {
	this := ECouponCopyType{}
	return &this
}

// NewECouponCopyTypeWithDefaults instantiates a new ECouponCopyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECouponCopyTypeWithDefaults() *ECouponCopyType {
	this := ECouponCopyType{}
	return &this
}

// GetECouponCodes returns the ECouponCodes field value if set, zero value otherwise.
func (o *ECouponCopyType) GetECouponCodes() []string {
	if o == nil || IsNil(o.ECouponCodes) {
		var ret []string
		return ret
	}
	return o.ECouponCodes
}

// GetECouponCodesOk returns a tuple with the ECouponCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponCopyType) GetECouponCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.ECouponCodes) {
		return nil, false
	}
	return o.ECouponCodes, true
}

// HasECouponCodes returns a boolean if a field has been set.
func (o *ECouponCopyType) HasECouponCodes() bool {
	if o != nil && !IsNil(o.ECouponCodes) {
		return true
	}

	return false
}

// SetECouponCodes gets a reference to the given []string and assigns it to the ECouponCodes field.
func (o *ECouponCopyType) SetECouponCodes(v []string) {
	o.ECouponCodes = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ECouponCopyType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponCopyType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ECouponCopyType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ECouponCopyType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetTargetHotelCodes returns the TargetHotelCodes field value if set, zero value otherwise.
func (o *ECouponCopyType) GetTargetHotelCodes() []string {
	if o == nil || IsNil(o.TargetHotelCodes) {
		var ret []string
		return ret
	}
	return o.TargetHotelCodes
}

// GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponCopyType) GetTargetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCodes) {
		return nil, false
	}
	return o.TargetHotelCodes, true
}

// HasTargetHotelCodes returns a boolean if a field has been set.
func (o *ECouponCopyType) HasTargetHotelCodes() bool {
	if o != nil && !IsNil(o.TargetHotelCodes) {
		return true
	}

	return false
}

// SetTargetHotelCodes gets a reference to the given []string and assigns it to the TargetHotelCodes field.
func (o *ECouponCopyType) SetTargetHotelCodes(v []string) {
	o.TargetHotelCodes = v
}

func (o ECouponCopyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECouponCopyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ECouponCodes) {
		toSerialize["eCouponCodes"] = o.ECouponCodes
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.TargetHotelCodes) {
		toSerialize["targetHotelCodes"] = o.TargetHotelCodes
	}
	return toSerialize, nil
}

type NullableECouponCopyType struct {
	value *ECouponCopyType
	isSet bool
}

func (v NullableECouponCopyType) Get() *ECouponCopyType {
	return v.value
}

func (v *NullableECouponCopyType) Set(val *ECouponCopyType) {
	v.value = val
	v.isSet = true
}

func (v NullableECouponCopyType) IsSet() bool {
	return v.isSet
}

func (v *NullableECouponCopyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECouponCopyType(val *ECouponCopyType) *NullableECouponCopyType {
	return &NullableECouponCopyType{value: val, isSet: true}
}

func (v NullableECouponCopyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECouponCopyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


