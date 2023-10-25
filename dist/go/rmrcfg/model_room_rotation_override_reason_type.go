/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RoomRotationOverrideReasonType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRotationOverrideReasonType{}

// RoomRotationOverrideReasonType Defines Rotation Override Reason Details.
type RoomRotationOverrideReasonType struct {
	// Defines the Rotation Override Reason Code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Rotation Override Reason sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
}

// NewRoomRotationOverrideReasonType instantiates a new RoomRotationOverrideReasonType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRotationOverrideReasonType() *RoomRotationOverrideReasonType {
	this := RoomRotationOverrideReasonType{}
	return &this
}

// NewRoomRotationOverrideReasonTypeWithDefaults instantiates a new RoomRotationOverrideReasonType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRotationOverrideReasonTypeWithDefaults() *RoomRotationOverrideReasonType {
	this := RoomRotationOverrideReasonType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RoomRotationOverrideReasonType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationOverrideReasonType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RoomRotationOverrideReasonType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *RoomRotationOverrideReasonType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomRotationOverrideReasonType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationOverrideReasonType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomRotationOverrideReasonType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *RoomRotationOverrideReasonType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *RoomRotationOverrideReasonType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationOverrideReasonType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *RoomRotationOverrideReasonType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *RoomRotationOverrideReasonType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

func (o RoomRotationOverrideReasonType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRotationOverrideReasonType) ToMap() (map[string]interface{}, error) {
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
	return toSerialize, nil
}

type NullableRoomRotationOverrideReasonType struct {
	value *RoomRotationOverrideReasonType
	isSet bool
}

func (v NullableRoomRotationOverrideReasonType) Get() *RoomRotationOverrideReasonType {
	return v.value
}

func (v *NullableRoomRotationOverrideReasonType) Set(val *RoomRotationOverrideReasonType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRotationOverrideReasonType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRotationOverrideReasonType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRotationOverrideReasonType(val *RoomRotationOverrideReasonType) *NullableRoomRotationOverrideReasonType {
	return &NullableRoomRotationOverrideReasonType{value: val, isSet: true}
}

func (v NullableRoomRotationOverrideReasonType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRotationOverrideReasonType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


