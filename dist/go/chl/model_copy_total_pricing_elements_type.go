/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the CopyTotalPricingElementsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyTotalPricingElementsType{}

// CopyTotalPricingElementsType Total Pricing Elements to copy from single source property to multi target properties
type CopyTotalPricingElementsType struct {
	TargetHotels []string `json:"targetHotels,omitempty"`
	// List of Total Pricing Element Type
	TotalPricingElements []TotalPricingElementType `json:"totalPricingElements,omitempty"`
}

// NewCopyTotalPricingElementsType instantiates a new CopyTotalPricingElementsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyTotalPricingElementsType() *CopyTotalPricingElementsType {
	this := CopyTotalPricingElementsType{}
	return &this
}

// NewCopyTotalPricingElementsTypeWithDefaults instantiates a new CopyTotalPricingElementsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyTotalPricingElementsTypeWithDefaults() *CopyTotalPricingElementsType {
	this := CopyTotalPricingElementsType{}
	return &this
}

// GetTargetHotels returns the TargetHotels field value if set, zero value otherwise.
func (o *CopyTotalPricingElementsType) GetTargetHotels() []string {
	if o == nil || IsNil(o.TargetHotels) {
		var ret []string
		return ret
	}
	return o.TargetHotels
}

// GetTargetHotelsOk returns a tuple with the TargetHotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyTotalPricingElementsType) GetTargetHotelsOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotels) {
		return nil, false
	}
	return o.TargetHotels, true
}

// HasTargetHotels returns a boolean if a field has been set.
func (o *CopyTotalPricingElementsType) HasTargetHotels() bool {
	if o != nil && !IsNil(o.TargetHotels) {
		return true
	}

	return false
}

// SetTargetHotels gets a reference to the given []string and assigns it to the TargetHotels field.
func (o *CopyTotalPricingElementsType) SetTargetHotels(v []string) {
	o.TargetHotels = v
}

// GetTotalPricingElements returns the TotalPricingElements field value if set, zero value otherwise.
func (o *CopyTotalPricingElementsType) GetTotalPricingElements() []TotalPricingElementType {
	if o == nil || IsNil(o.TotalPricingElements) {
		var ret []TotalPricingElementType
		return ret
	}
	return o.TotalPricingElements
}

// GetTotalPricingElementsOk returns a tuple with the TotalPricingElements field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyTotalPricingElementsType) GetTotalPricingElementsOk() ([]TotalPricingElementType, bool) {
	if o == nil || IsNil(o.TotalPricingElements) {
		return nil, false
	}
	return o.TotalPricingElements, true
}

// HasTotalPricingElements returns a boolean if a field has been set.
func (o *CopyTotalPricingElementsType) HasTotalPricingElements() bool {
	if o != nil && !IsNil(o.TotalPricingElements) {
		return true
	}

	return false
}

// SetTotalPricingElements gets a reference to the given []TotalPricingElementType and assigns it to the TotalPricingElements field.
func (o *CopyTotalPricingElementsType) SetTotalPricingElements(v []TotalPricingElementType) {
	o.TotalPricingElements = v
}

func (o CopyTotalPricingElementsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyTotalPricingElementsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TargetHotels) {
		toSerialize["targetHotels"] = o.TargetHotels
	}
	if !IsNil(o.TotalPricingElements) {
		toSerialize["totalPricingElements"] = o.TotalPricingElements
	}
	return toSerialize, nil
}

type NullableCopyTotalPricingElementsType struct {
	value *CopyTotalPricingElementsType
	isSet bool
}

func (v NullableCopyTotalPricingElementsType) Get() *CopyTotalPricingElementsType {
	return v.value
}

func (v *NullableCopyTotalPricingElementsType) Set(val *CopyTotalPricingElementsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyTotalPricingElementsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyTotalPricingElementsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyTotalPricingElementsType(val *CopyTotalPricingElementsType) *NullableCopyTotalPricingElementsType {
	return &NullableCopyTotalPricingElementsType{value: val, isSet: true}
}

func (v NullableCopyTotalPricingElementsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyTotalPricingElementsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


