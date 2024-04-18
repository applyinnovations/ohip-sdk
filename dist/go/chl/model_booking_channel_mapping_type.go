/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the BookingChannelMappingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BookingChannelMappingType{}

// BookingChannelMappingType struct for BookingChannelMappingType
type BookingChannelMappingType struct {
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	Code *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
}

// NewBookingChannelMappingType instantiates a new BookingChannelMappingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBookingChannelMappingType() *BookingChannelMappingType {
	this := BookingChannelMappingType{}
	return &this
}

// NewBookingChannelMappingTypeWithDefaults instantiates a new BookingChannelMappingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBookingChannelMappingTypeWithDefaults() *BookingChannelMappingType {
	this := BookingChannelMappingType{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *BookingChannelMappingType) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingChannelMappingType) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *BookingChannelMappingType) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *BookingChannelMappingType) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *BookingChannelMappingType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingChannelMappingType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *BookingChannelMappingType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *BookingChannelMappingType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *BookingChannelMappingType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingChannelMappingType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *BookingChannelMappingType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *BookingChannelMappingType) SetDescription(v string) {
	o.Description = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *BookingChannelMappingType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingChannelMappingType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *BookingChannelMappingType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *BookingChannelMappingType) SetName(v string) {
	o.Name = &v
}

func (o BookingChannelMappingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BookingChannelMappingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	return toSerialize, nil
}

type NullableBookingChannelMappingType struct {
	value *BookingChannelMappingType
	isSet bool
}

func (v NullableBookingChannelMappingType) Get() *BookingChannelMappingType {
	return v.value
}

func (v *NullableBookingChannelMappingType) Set(val *BookingChannelMappingType) {
	v.value = val
	v.isSet = true
}

func (v NullableBookingChannelMappingType) IsSet() bool {
	return v.isSet
}

func (v *NullableBookingChannelMappingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBookingChannelMappingType(val *BookingChannelMappingType) *NullableBookingChannelMappingType {
	return &NullableBookingChannelMappingType{value: val, isSet: true}
}

func (v NullableBookingChannelMappingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBookingChannelMappingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

