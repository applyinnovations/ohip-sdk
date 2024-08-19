/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomPotentialType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomPotentialType{}

// RoomPotentialType Contains Common Master configuration detail.
type RoomPotentialType struct {
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
	// Determines whether this code is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
}

// NewRoomPotentialType instantiates a new RoomPotentialType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomPotentialType() *RoomPotentialType {
	this := RoomPotentialType{}
	return &this
}

// NewRoomPotentialTypeWithDefaults instantiates a new RoomPotentialType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomPotentialTypeWithDefaults() *RoomPotentialType {
	this := RoomPotentialType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RoomPotentialType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomPotentialType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RoomPotentialType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *RoomPotentialType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomPotentialType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomPotentialType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomPotentialType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *RoomPotentialType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *RoomPotentialType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomPotentialType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *RoomPotentialType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *RoomPotentialType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RoomPotentialType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomPotentialType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RoomPotentialType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RoomPotentialType) SetInactive(v bool) {
	o.Inactive = &v
}

func (o RoomPotentialType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomPotentialType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplayOrder) {
		toSerialize["displayOrder"] = o.DisplayOrder
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	return toSerialize, nil
}

type NullableRoomPotentialType struct {
	value *RoomPotentialType
	isSet bool
}

func (v NullableRoomPotentialType) Get() *RoomPotentialType {
	return v.value
}

func (v *NullableRoomPotentialType) Set(val *RoomPotentialType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomPotentialType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomPotentialType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomPotentialType(val *RoomPotentialType) *NullableRoomPotentialType {
	return &NullableRoomPotentialType{value: val, isSet: true}
}

func (v NullableRoomPotentialType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomPotentialType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


