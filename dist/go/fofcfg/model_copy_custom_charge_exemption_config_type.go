/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CopyCustomChargeExemptionConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyCustomChargeExemptionConfigType{}

// CopyCustomChargeExemptionConfigType Information needed to copy Custom Charge Exemption from one property to the other.
type CopyCustomChargeExemptionConfigType struct {
	// Custom Charge Exemption to be copied.
	ExemptionCodes []string `json:"exemptionCodes,omitempty"`
	// Property from which Custom Charge Exemptions to be copied from.
	SourceHotelCode *string `json:"sourceHotelCode,omitempty"`
	// Property to which Custom Charge Exemptions to be copied to.
	TargetHotelCode []string `json:"targetHotelCode,omitempty"`
}

// NewCopyCustomChargeExemptionConfigType instantiates a new CopyCustomChargeExemptionConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyCustomChargeExemptionConfigType() *CopyCustomChargeExemptionConfigType {
	this := CopyCustomChargeExemptionConfigType{}
	return &this
}

// NewCopyCustomChargeExemptionConfigTypeWithDefaults instantiates a new CopyCustomChargeExemptionConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyCustomChargeExemptionConfigTypeWithDefaults() *CopyCustomChargeExemptionConfigType {
	this := CopyCustomChargeExemptionConfigType{}
	return &this
}

// GetExemptionCodes returns the ExemptionCodes field value if set, zero value otherwise.
func (o *CopyCustomChargeExemptionConfigType) GetExemptionCodes() []string {
	if o == nil || IsNil(o.ExemptionCodes) {
		var ret []string
		return ret
	}
	return o.ExemptionCodes
}

// GetExemptionCodesOk returns a tuple with the ExemptionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCustomChargeExemptionConfigType) GetExemptionCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.ExemptionCodes) {
		return nil, false
	}
	return o.ExemptionCodes, true
}

// HasExemptionCodes returns a boolean if a field has been set.
func (o *CopyCustomChargeExemptionConfigType) HasExemptionCodes() bool {
	if o != nil && !IsNil(o.ExemptionCodes) {
		return true
	}

	return false
}

// SetExemptionCodes gets a reference to the given []string and assigns it to the ExemptionCodes field.
func (o *CopyCustomChargeExemptionConfigType) SetExemptionCodes(v []string) {
	o.ExemptionCodes = v
}

// GetSourceHotelCode returns the SourceHotelCode field value if set, zero value otherwise.
func (o *CopyCustomChargeExemptionConfigType) GetSourceHotelCode() string {
	if o == nil || IsNil(o.SourceHotelCode) {
		var ret string
		return ret
	}
	return *o.SourceHotelCode
}

// GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCustomChargeExemptionConfigType) GetSourceHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceHotelCode) {
		return nil, false
	}
	return o.SourceHotelCode, true
}

// HasSourceHotelCode returns a boolean if a field has been set.
func (o *CopyCustomChargeExemptionConfigType) HasSourceHotelCode() bool {
	if o != nil && !IsNil(o.SourceHotelCode) {
		return true
	}

	return false
}

// SetSourceHotelCode gets a reference to the given string and assigns it to the SourceHotelCode field.
func (o *CopyCustomChargeExemptionConfigType) SetSourceHotelCode(v string) {
	o.SourceHotelCode = &v
}

// GetTargetHotelCode returns the TargetHotelCode field value if set, zero value otherwise.
func (o *CopyCustomChargeExemptionConfigType) GetTargetHotelCode() []string {
	if o == nil || IsNil(o.TargetHotelCode) {
		var ret []string
		return ret
	}
	return o.TargetHotelCode
}

// GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCustomChargeExemptionConfigType) GetTargetHotelCodeOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCode) {
		return nil, false
	}
	return o.TargetHotelCode, true
}

// HasTargetHotelCode returns a boolean if a field has been set.
func (o *CopyCustomChargeExemptionConfigType) HasTargetHotelCode() bool {
	if o != nil && !IsNil(o.TargetHotelCode) {
		return true
	}

	return false
}

// SetTargetHotelCode gets a reference to the given []string and assigns it to the TargetHotelCode field.
func (o *CopyCustomChargeExemptionConfigType) SetTargetHotelCode(v []string) {
	o.TargetHotelCode = v
}

func (o CopyCustomChargeExemptionConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyCustomChargeExemptionConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExemptionCodes) {
		toSerialize["exemptionCodes"] = o.ExemptionCodes
	}
	if !IsNil(o.SourceHotelCode) {
		toSerialize["sourceHotelCode"] = o.SourceHotelCode
	}
	if !IsNil(o.TargetHotelCode) {
		toSerialize["targetHotelCode"] = o.TargetHotelCode
	}
	return toSerialize, nil
}

type NullableCopyCustomChargeExemptionConfigType struct {
	value *CopyCustomChargeExemptionConfigType
	isSet bool
}

func (v NullableCopyCustomChargeExemptionConfigType) Get() *CopyCustomChargeExemptionConfigType {
	return v.value
}

func (v *NullableCopyCustomChargeExemptionConfigType) Set(val *CopyCustomChargeExemptionConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyCustomChargeExemptionConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyCustomChargeExemptionConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyCustomChargeExemptionConfigType(val *CopyCustomChargeExemptionConfigType) *NullableCopyCustomChargeExemptionConfigType {
	return &NullableCopyCustomChargeExemptionConfigType{value: val, isSet: true}
}

func (v NullableCopyCustomChargeExemptionConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyCustomChargeExemptionConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

