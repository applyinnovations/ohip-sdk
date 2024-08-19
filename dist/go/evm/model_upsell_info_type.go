/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the UpsellInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpsellInfoType{}

// UpsellInfoType Information regarding upsell for a reservation.
type UpsellInfoType struct {
	OriginalInfo *UpsellInfoTypeOriginalInfo `json:"originalInfo,omitempty"`
	UpsellInfo *UpsellInfoTypeUpsellInfo `json:"upsellInfo,omitempty"`
}

// NewUpsellInfoType instantiates a new UpsellInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpsellInfoType() *UpsellInfoType {
	this := UpsellInfoType{}
	return &this
}

// NewUpsellInfoTypeWithDefaults instantiates a new UpsellInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpsellInfoTypeWithDefaults() *UpsellInfoType {
	this := UpsellInfoType{}
	return &this
}

// GetOriginalInfo returns the OriginalInfo field value if set, zero value otherwise.
func (o *UpsellInfoType) GetOriginalInfo() UpsellInfoTypeOriginalInfo {
	if o == nil || IsNil(o.OriginalInfo) {
		var ret UpsellInfoTypeOriginalInfo
		return ret
	}
	return *o.OriginalInfo
}

// GetOriginalInfoOk returns a tuple with the OriginalInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoType) GetOriginalInfoOk() (*UpsellInfoTypeOriginalInfo, bool) {
	if o == nil || IsNil(o.OriginalInfo) {
		return nil, false
	}
	return o.OriginalInfo, true
}

// HasOriginalInfo returns a boolean if a field has been set.
func (o *UpsellInfoType) HasOriginalInfo() bool {
	if o != nil && !IsNil(o.OriginalInfo) {
		return true
	}

	return false
}

// SetOriginalInfo gets a reference to the given UpsellInfoTypeOriginalInfo and assigns it to the OriginalInfo field.
func (o *UpsellInfoType) SetOriginalInfo(v UpsellInfoTypeOriginalInfo) {
	o.OriginalInfo = &v
}

// GetUpsellInfo returns the UpsellInfo field value if set, zero value otherwise.
func (o *UpsellInfoType) GetUpsellInfo() UpsellInfoTypeUpsellInfo {
	if o == nil || IsNil(o.UpsellInfo) {
		var ret UpsellInfoTypeUpsellInfo
		return ret
	}
	return *o.UpsellInfo
}

// GetUpsellInfoOk returns a tuple with the UpsellInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoType) GetUpsellInfoOk() (*UpsellInfoTypeUpsellInfo, bool) {
	if o == nil || IsNil(o.UpsellInfo) {
		return nil, false
	}
	return o.UpsellInfo, true
}

// HasUpsellInfo returns a boolean if a field has been set.
func (o *UpsellInfoType) HasUpsellInfo() bool {
	if o != nil && !IsNil(o.UpsellInfo) {
		return true
	}

	return false
}

// SetUpsellInfo gets a reference to the given UpsellInfoTypeUpsellInfo and assigns it to the UpsellInfo field.
func (o *UpsellInfoType) SetUpsellInfo(v UpsellInfoTypeUpsellInfo) {
	o.UpsellInfo = &v
}

func (o UpsellInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpsellInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OriginalInfo) {
		toSerialize["originalInfo"] = o.OriginalInfo
	}
	if !IsNil(o.UpsellInfo) {
		toSerialize["upsellInfo"] = o.UpsellInfo
	}
	return toSerialize, nil
}

type NullableUpsellInfoType struct {
	value *UpsellInfoType
	isSet bool
}

func (v NullableUpsellInfoType) Get() *UpsellInfoType {
	return v.value
}

func (v *NullableUpsellInfoType) Set(val *UpsellInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableUpsellInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableUpsellInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpsellInfoType(val *UpsellInfoType) *NullableUpsellInfoType {
	return &NullableUpsellInfoType{value: val, isSet: true}
}

func (v NullableUpsellInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpsellInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


