/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the MembershipTypeLevelType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTypeLevelType{}

// MembershipTypeLevelType struct for MembershipTypeLevelType
type MembershipTypeLevelType struct {
	// Description type for Rule Details
	Level *string `json:"level,omitempty"`
	// Code type for Rule Details
	Type *string `json:"type,omitempty"`
}

// NewMembershipTypeLevelType instantiates a new MembershipTypeLevelType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTypeLevelType() *MembershipTypeLevelType {
	this := MembershipTypeLevelType{}
	return &this
}

// NewMembershipTypeLevelTypeWithDefaults instantiates a new MembershipTypeLevelType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTypeLevelTypeWithDefaults() *MembershipTypeLevelType {
	this := MembershipTypeLevelType{}
	return &this
}

// GetLevel returns the Level field value if set, zero value otherwise.
func (o *MembershipTypeLevelType) GetLevel() string {
	if o == nil || IsNil(o.Level) {
		var ret string
		return ret
	}
	return *o.Level
}

// GetLevelOk returns a tuple with the Level field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeLevelType) GetLevelOk() (*string, bool) {
	if o == nil || IsNil(o.Level) {
		return nil, false
	}
	return o.Level, true
}

// HasLevel returns a boolean if a field has been set.
func (o *MembershipTypeLevelType) HasLevel() bool {
	if o != nil && !IsNil(o.Level) {
		return true
	}

	return false
}

// SetLevel gets a reference to the given string and assigns it to the Level field.
func (o *MembershipTypeLevelType) SetLevel(v string) {
	o.Level = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *MembershipTypeLevelType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeLevelType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *MembershipTypeLevelType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *MembershipTypeLevelType) SetType(v string) {
	o.Type = &v
}

func (o MembershipTypeLevelType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTypeLevelType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Level) {
		toSerialize["level"] = o.Level
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableMembershipTypeLevelType struct {
	value *MembershipTypeLevelType
	isSet bool
}

func (v NullableMembershipTypeLevelType) Get() *MembershipTypeLevelType {
	return v.value
}

func (v *NullableMembershipTypeLevelType) Set(val *MembershipTypeLevelType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTypeLevelType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTypeLevelType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTypeLevelType(val *MembershipTypeLevelType) *NullableMembershipTypeLevelType {
	return &NullableMembershipTypeLevelType{value: val, isSet: true}
}

func (v NullableMembershipTypeLevelType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTypeLevelType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


