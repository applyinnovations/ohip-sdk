/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the SalesAllowanceIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SalesAllowanceIDType{}

// SalesAllowanceIDType Unique identifier of a single sales allowance.
type SalesAllowanceIDType struct {
	// ID of sales allowance.
	CeilingId *float32 `json:"ceilingId,omitempty"`
}

// NewSalesAllowanceIDType instantiates a new SalesAllowanceIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSalesAllowanceIDType() *SalesAllowanceIDType {
	this := SalesAllowanceIDType{}
	return &this
}

// NewSalesAllowanceIDTypeWithDefaults instantiates a new SalesAllowanceIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSalesAllowanceIDTypeWithDefaults() *SalesAllowanceIDType {
	this := SalesAllowanceIDType{}
	return &this
}

// GetCeilingId returns the CeilingId field value if set, zero value otherwise.
func (o *SalesAllowanceIDType) GetCeilingId() float32 {
	if o == nil || IsNil(o.CeilingId) {
		var ret float32
		return ret
	}
	return *o.CeilingId
}

// GetCeilingIdOk returns a tuple with the CeilingId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceIDType) GetCeilingIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CeilingId) {
		return nil, false
	}
	return o.CeilingId, true
}

// HasCeilingId returns a boolean if a field has been set.
func (o *SalesAllowanceIDType) HasCeilingId() bool {
	if o != nil && !IsNil(o.CeilingId) {
		return true
	}

	return false
}

// SetCeilingId gets a reference to the given float32 and assigns it to the CeilingId field.
func (o *SalesAllowanceIDType) SetCeilingId(v float32) {
	o.CeilingId = &v
}

func (o SalesAllowanceIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SalesAllowanceIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CeilingId) {
		toSerialize["ceilingId"] = o.CeilingId
	}
	return toSerialize, nil
}

type NullableSalesAllowanceIDType struct {
	value *SalesAllowanceIDType
	isSet bool
}

func (v NullableSalesAllowanceIDType) Get() *SalesAllowanceIDType {
	return v.value
}

func (v *NullableSalesAllowanceIDType) Set(val *SalesAllowanceIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableSalesAllowanceIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableSalesAllowanceIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSalesAllowanceIDType(val *SalesAllowanceIDType) *NullableSalesAllowanceIDType {
	return &NullableSalesAllowanceIDType{value: val, isSet: true}
}

func (v NullableSalesAllowanceIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSalesAllowanceIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


