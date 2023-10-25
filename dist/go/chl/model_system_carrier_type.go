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

// checks if the SystemCarrierType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SystemCarrierType{}

// SystemCarrierType Identify carrier details of external system.
type SystemCarrierType struct {
	CarrierCode *CodeDescriptionType `json:"carrierCode,omitempty"`
	// Indicates whether external system carrier is active or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicates whether external system carrier is merchant or not.
	Merchant *bool `json:"merchant,omitempty"`
}

// NewSystemCarrierType instantiates a new SystemCarrierType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemCarrierType() *SystemCarrierType {
	this := SystemCarrierType{}
	return &this
}

// NewSystemCarrierTypeWithDefaults instantiates a new SystemCarrierType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemCarrierTypeWithDefaults() *SystemCarrierType {
	this := SystemCarrierType{}
	return &this
}

// GetCarrierCode returns the CarrierCode field value if set, zero value otherwise.
func (o *SystemCarrierType) GetCarrierCode() CodeDescriptionType {
	if o == nil || IsNil(o.CarrierCode) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.CarrierCode
}

// GetCarrierCodeOk returns a tuple with the CarrierCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemCarrierType) GetCarrierCodeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.CarrierCode) {
		return nil, false
	}
	return o.CarrierCode, true
}

// HasCarrierCode returns a boolean if a field has been set.
func (o *SystemCarrierType) HasCarrierCode() bool {
	if o != nil && !IsNil(o.CarrierCode) {
		return true
	}

	return false
}

// SetCarrierCode gets a reference to the given CodeDescriptionType and assigns it to the CarrierCode field.
func (o *SystemCarrierType) SetCarrierCode(v CodeDescriptionType) {
	o.CarrierCode = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *SystemCarrierType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemCarrierType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *SystemCarrierType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *SystemCarrierType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetMerchant returns the Merchant field value if set, zero value otherwise.
func (o *SystemCarrierType) GetMerchant() bool {
	if o == nil || IsNil(o.Merchant) {
		var ret bool
		return ret
	}
	return *o.Merchant
}

// GetMerchantOk returns a tuple with the Merchant field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemCarrierType) GetMerchantOk() (*bool, bool) {
	if o == nil || IsNil(o.Merchant) {
		return nil, false
	}
	return o.Merchant, true
}

// HasMerchant returns a boolean if a field has been set.
func (o *SystemCarrierType) HasMerchant() bool {
	if o != nil && !IsNil(o.Merchant) {
		return true
	}

	return false
}

// SetMerchant gets a reference to the given bool and assigns it to the Merchant field.
func (o *SystemCarrierType) SetMerchant(v bool) {
	o.Merchant = &v
}

func (o SystemCarrierType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SystemCarrierType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CarrierCode) {
		toSerialize["carrierCode"] = o.CarrierCode
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Merchant) {
		toSerialize["merchant"] = o.Merchant
	}
	return toSerialize, nil
}

type NullableSystemCarrierType struct {
	value *SystemCarrierType
	isSet bool
}

func (v NullableSystemCarrierType) Get() *SystemCarrierType {
	return v.value
}

func (v *NullableSystemCarrierType) Set(val *SystemCarrierType) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemCarrierType) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemCarrierType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemCarrierType(val *SystemCarrierType) *NullableSystemCarrierType {
	return &NullableSystemCarrierType{value: val, isSet: true}
}

func (v NullableSystemCarrierType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemCarrierType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


