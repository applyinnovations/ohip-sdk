/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PostFiscalInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostFiscalInfoType{}

// PostFiscalInfoType FiscalInfo criteria type.
type PostFiscalInfoType struct {
	FiscalPayloadType *PayloadType `json:"fiscalPayloadType,omitempty"`
}

// NewPostFiscalInfoType instantiates a new PostFiscalInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostFiscalInfoType() *PostFiscalInfoType {
	this := PostFiscalInfoType{}
	return &this
}

// NewPostFiscalInfoTypeWithDefaults instantiates a new PostFiscalInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostFiscalInfoTypeWithDefaults() *PostFiscalInfoType {
	this := PostFiscalInfoType{}
	return &this
}

// GetFiscalPayloadType returns the FiscalPayloadType field value if set, zero value otherwise.
func (o *PostFiscalInfoType) GetFiscalPayloadType() PayloadType {
	if o == nil || IsNil(o.FiscalPayloadType) {
		var ret PayloadType
		return ret
	}
	return *o.FiscalPayloadType
}

// GetFiscalPayloadTypeOk returns a tuple with the FiscalPayloadType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostFiscalInfoType) GetFiscalPayloadTypeOk() (*PayloadType, bool) {
	if o == nil || IsNil(o.FiscalPayloadType) {
		return nil, false
	}
	return o.FiscalPayloadType, true
}

// HasFiscalPayloadType returns a boolean if a field has been set.
func (o *PostFiscalInfoType) HasFiscalPayloadType() bool {
	if o != nil && !IsNil(o.FiscalPayloadType) {
		return true
	}

	return false
}

// SetFiscalPayloadType gets a reference to the given PayloadType and assigns it to the FiscalPayloadType field.
func (o *PostFiscalInfoType) SetFiscalPayloadType(v PayloadType) {
	o.FiscalPayloadType = &v
}

func (o PostFiscalInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostFiscalInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalPayloadType) {
		toSerialize["fiscalPayloadType"] = o.FiscalPayloadType
	}
	return toSerialize, nil
}

type NullablePostFiscalInfoType struct {
	value *PostFiscalInfoType
	isSet bool
}

func (v NullablePostFiscalInfoType) Get() *PostFiscalInfoType {
	return v.value
}

func (v *NullablePostFiscalInfoType) Set(val *PostFiscalInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullablePostFiscalInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullablePostFiscalInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostFiscalInfoType(val *PostFiscalInfoType) *NullablePostFiscalInfoType {
	return &NullablePostFiscalInfoType{value: val, isSet: true}
}

func (v NullablePostFiscalInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostFiscalInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


