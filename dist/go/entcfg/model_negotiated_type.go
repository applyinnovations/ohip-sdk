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

// checks if the NegotiatedType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NegotiatedType{}

// NegotiatedType This holds a list of NegotiatedInfoType.
type NegotiatedType struct {
	NegotiatedInfoList []NegotiatedInfoType `json:"negotiatedInfoList,omitempty"`
	// Hotel code for the negotiated rate.
	HotelId *string `json:"hotelId,omitempty"`
	// Rate plan code for the negotiated rate.
	RateCode *string `json:"rateCode,omitempty"`
}

// NewNegotiatedType instantiates a new NegotiatedType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNegotiatedType() *NegotiatedType {
	this := NegotiatedType{}
	return &this
}

// NewNegotiatedTypeWithDefaults instantiates a new NegotiatedType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNegotiatedTypeWithDefaults() *NegotiatedType {
	this := NegotiatedType{}
	return &this
}

// GetNegotiatedInfoList returns the NegotiatedInfoList field value if set, zero value otherwise.
func (o *NegotiatedType) GetNegotiatedInfoList() []NegotiatedInfoType {
	if o == nil || IsNil(o.NegotiatedInfoList) {
		var ret []NegotiatedInfoType
		return ret
	}
	return o.NegotiatedInfoList
}

// GetNegotiatedInfoListOk returns a tuple with the NegotiatedInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NegotiatedType) GetNegotiatedInfoListOk() ([]NegotiatedInfoType, bool) {
	if o == nil || IsNil(o.NegotiatedInfoList) {
		return nil, false
	}
	return o.NegotiatedInfoList, true
}

// HasNegotiatedInfoList returns a boolean if a field has been set.
func (o *NegotiatedType) HasNegotiatedInfoList() bool {
	if o != nil && !IsNil(o.NegotiatedInfoList) {
		return true
	}

	return false
}

// SetNegotiatedInfoList gets a reference to the given []NegotiatedInfoType and assigns it to the NegotiatedInfoList field.
func (o *NegotiatedType) SetNegotiatedInfoList(v []NegotiatedInfoType) {
	o.NegotiatedInfoList = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *NegotiatedType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NegotiatedType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *NegotiatedType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *NegotiatedType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *NegotiatedType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NegotiatedType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *NegotiatedType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *NegotiatedType) SetRateCode(v string) {
	o.RateCode = &v
}

func (o NegotiatedType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NegotiatedType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NegotiatedInfoList) {
		toSerialize["negotiatedInfoList"] = o.NegotiatedInfoList
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	return toSerialize, nil
}

type NullableNegotiatedType struct {
	value *NegotiatedType
	isSet bool
}

func (v NullableNegotiatedType) Get() *NegotiatedType {
	return v.value
}

func (v *NullableNegotiatedType) Set(val *NegotiatedType) {
	v.value = val
	v.isSet = true
}

func (v NullableNegotiatedType) IsSet() bool {
	return v.isSet
}

func (v *NullableNegotiatedType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNegotiatedType(val *NegotiatedType) *NullableNegotiatedType {
	return &NullableNegotiatedType{value: val, isSet: true}
}

func (v NullableNegotiatedType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNegotiatedType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

