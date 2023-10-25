/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the HotelCodeMappingInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelCodeMappingInfoType{}

// HotelCodeMappingInfoType Generic information of the OPERA hotel code, channel hotelcode for the requested booking channel code.
type HotelCodeMappingInfoType struct {
	// Channel hotel code for the requested OPERA hotel code.
	ChannelHotelCode *string `json:"channelHotelCode,omitempty"`
	// OPERA hotel code for the requested channel hotel code.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewHotelCodeMappingInfoType instantiates a new HotelCodeMappingInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelCodeMappingInfoType() *HotelCodeMappingInfoType {
	this := HotelCodeMappingInfoType{}
	return &this
}

// NewHotelCodeMappingInfoTypeWithDefaults instantiates a new HotelCodeMappingInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelCodeMappingInfoTypeWithDefaults() *HotelCodeMappingInfoType {
	this := HotelCodeMappingInfoType{}
	return &this
}

// GetChannelHotelCode returns the ChannelHotelCode field value if set, zero value otherwise.
func (o *HotelCodeMappingInfoType) GetChannelHotelCode() string {
	if o == nil || IsNil(o.ChannelHotelCode) {
		var ret string
		return ret
	}
	return *o.ChannelHotelCode
}

// GetChannelHotelCodeOk returns a tuple with the ChannelHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCodeMappingInfoType) GetChannelHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelHotelCode) {
		return nil, false
	}
	return o.ChannelHotelCode, true
}

// HasChannelHotelCode returns a boolean if a field has been set.
func (o *HotelCodeMappingInfoType) HasChannelHotelCode() bool {
	if o != nil && !IsNil(o.ChannelHotelCode) {
		return true
	}

	return false
}

// SetChannelHotelCode gets a reference to the given string and assigns it to the ChannelHotelCode field.
func (o *HotelCodeMappingInfoType) SetChannelHotelCode(v string) {
	o.ChannelHotelCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelCodeMappingInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCodeMappingInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelCodeMappingInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelCodeMappingInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o HotelCodeMappingInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelCodeMappingInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelHotelCode) {
		toSerialize["channelHotelCode"] = o.ChannelHotelCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableHotelCodeMappingInfoType struct {
	value *HotelCodeMappingInfoType
	isSet bool
}

func (v NullableHotelCodeMappingInfoType) Get() *HotelCodeMappingInfoType {
	return v.value
}

func (v *NullableHotelCodeMappingInfoType) Set(val *HotelCodeMappingInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelCodeMappingInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelCodeMappingInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelCodeMappingInfoType(val *HotelCodeMappingInfoType) *NullableHotelCodeMappingInfoType {
	return &NullableHotelCodeMappingInfoType{value: val, isSet: true}
}

func (v NullableHotelCodeMappingInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelCodeMappingInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


