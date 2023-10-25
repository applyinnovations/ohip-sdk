/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the VIPType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &VIPType{}

// VIPType The supplier's ranking of the customer.
type VIPType struct {
	// VIP Code.
	VipCode *string `json:"vipCode,omitempty"`
	// VIP Description.
	VipDescription *string `json:"vipDescription,omitempty"`
}

// NewVIPType instantiates a new VIPType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVIPType() *VIPType {
	this := VIPType{}
	return &this
}

// NewVIPTypeWithDefaults instantiates a new VIPType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVIPTypeWithDefaults() *VIPType {
	this := VIPType{}
	return &this
}

// GetVipCode returns the VipCode field value if set, zero value otherwise.
func (o *VIPType) GetVipCode() string {
	if o == nil || IsNil(o.VipCode) {
		var ret string
		return ret
	}
	return *o.VipCode
}

// GetVipCodeOk returns a tuple with the VipCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPType) GetVipCodeOk() (*string, bool) {
	if o == nil || IsNil(o.VipCode) {
		return nil, false
	}
	return o.VipCode, true
}

// HasVipCode returns a boolean if a field has been set.
func (o *VIPType) HasVipCode() bool {
	if o != nil && !IsNil(o.VipCode) {
		return true
	}

	return false
}

// SetVipCode gets a reference to the given string and assigns it to the VipCode field.
func (o *VIPType) SetVipCode(v string) {
	o.VipCode = &v
}

// GetVipDescription returns the VipDescription field value if set, zero value otherwise.
func (o *VIPType) GetVipDescription() string {
	if o == nil || IsNil(o.VipDescription) {
		var ret string
		return ret
	}
	return *o.VipDescription
}

// GetVipDescriptionOk returns a tuple with the VipDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPType) GetVipDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.VipDescription) {
		return nil, false
	}
	return o.VipDescription, true
}

// HasVipDescription returns a boolean if a field has been set.
func (o *VIPType) HasVipDescription() bool {
	if o != nil && !IsNil(o.VipDescription) {
		return true
	}

	return false
}

// SetVipDescription gets a reference to the given string and assigns it to the VipDescription field.
func (o *VIPType) SetVipDescription(v string) {
	o.VipDescription = &v
}

func (o VIPType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o VIPType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.VipCode) {
		toSerialize["vipCode"] = o.VipCode
	}
	if !IsNil(o.VipDescription) {
		toSerialize["vipDescription"] = o.VipDescription
	}
	return toSerialize, nil
}

type NullableVIPType struct {
	value *VIPType
	isSet bool
}

func (v NullableVIPType) Get() *VIPType {
	return v.value
}

func (v *NullableVIPType) Set(val *VIPType) {
	v.value = val
	v.isSet = true
}

func (v NullableVIPType) IsSet() bool {
	return v.isSet
}

func (v *NullableVIPType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVIPType(val *VIPType) *NullableVIPType {
	return &NullableVIPType{value: val, isSet: true}
}

func (v NullableVIPType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVIPType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


