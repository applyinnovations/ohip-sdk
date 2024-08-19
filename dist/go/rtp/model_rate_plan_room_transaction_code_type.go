/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanRoomTransactionCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanRoomTransactionCodeType{}

// RatePlanRoomTransactionCodeType Transaction code associated to a room type or room class on a rate plan.
type RatePlanRoomTransactionCodeType struct {
	// Room class which the transaction code is associated to.
	RoomClass *string `json:"roomClass,omitempty"`
	// Room type which the transaction code is associated to.
	RoomType *string `json:"roomType,omitempty"`
	// Transaction code associated to the room type/room class.
	TransactionCode *string `json:"transactionCode,omitempty"`
}

// NewRatePlanRoomTransactionCodeType instantiates a new RatePlanRoomTransactionCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanRoomTransactionCodeType() *RatePlanRoomTransactionCodeType {
	this := RatePlanRoomTransactionCodeType{}
	return &this
}

// NewRatePlanRoomTransactionCodeTypeWithDefaults instantiates a new RatePlanRoomTransactionCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanRoomTransactionCodeTypeWithDefaults() *RatePlanRoomTransactionCodeType {
	this := RatePlanRoomTransactionCodeType{}
	return &this
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RatePlanRoomTransactionCodeType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanRoomTransactionCodeType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RatePlanRoomTransactionCodeType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *RatePlanRoomTransactionCodeType) SetRoomClass(v string) {
	o.RoomClass = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RatePlanRoomTransactionCodeType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanRoomTransactionCodeType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RatePlanRoomTransactionCodeType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RatePlanRoomTransactionCodeType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *RatePlanRoomTransactionCodeType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanRoomTransactionCodeType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *RatePlanRoomTransactionCodeType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *RatePlanRoomTransactionCodeType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

func (o RatePlanRoomTransactionCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanRoomTransactionCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullableRatePlanRoomTransactionCodeType struct {
	value *RatePlanRoomTransactionCodeType
	isSet bool
}

func (v NullableRatePlanRoomTransactionCodeType) Get() *RatePlanRoomTransactionCodeType {
	return v.value
}

func (v *NullableRatePlanRoomTransactionCodeType) Set(val *RatePlanRoomTransactionCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanRoomTransactionCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanRoomTransactionCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanRoomTransactionCodeType(val *RatePlanRoomTransactionCodeType) *NullableRatePlanRoomTransactionCodeType {
	return &NullableRatePlanRoomTransactionCodeType{value: val, isSet: true}
}

func (v NullableRatePlanRoomTransactionCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanRoomTransactionCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


