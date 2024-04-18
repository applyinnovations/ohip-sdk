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

// checks if the GuestMessageCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestMessageCodeType{}

// GuestMessageCodeType A template for guest message.
type GuestMessageCodeType struct {
	// Code for the guest message type
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Sequence for guest message template.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Sequence for guest message.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewGuestMessageCodeType instantiates a new GuestMessageCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestMessageCodeType() *GuestMessageCodeType {
	this := GuestMessageCodeType{}
	return &this
}

// NewGuestMessageCodeTypeWithDefaults instantiates a new GuestMessageCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestMessageCodeTypeWithDefaults() *GuestMessageCodeType {
	this := GuestMessageCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *GuestMessageCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *GuestMessageCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *GuestMessageCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *GuestMessageCodeType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageCodeType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *GuestMessageCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *GuestMessageCodeType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *GuestMessageCodeType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageCodeType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *GuestMessageCodeType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *GuestMessageCodeType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *GuestMessageCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *GuestMessageCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *GuestMessageCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o GuestMessageCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestMessageCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableGuestMessageCodeType struct {
	value *GuestMessageCodeType
	isSet bool
}

func (v NullableGuestMessageCodeType) Get() *GuestMessageCodeType {
	return v.value
}

func (v *NullableGuestMessageCodeType) Set(val *GuestMessageCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestMessageCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestMessageCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestMessageCodeType(val *GuestMessageCodeType) *NullableGuestMessageCodeType {
	return &NullableGuestMessageCodeType{value: val, isSet: true}
}

func (v NullableGuestMessageCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestMessageCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

