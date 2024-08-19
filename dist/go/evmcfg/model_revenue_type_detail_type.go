/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the RevenueTypeDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueTypeDetailType{}

// RevenueTypeDetailType Details type provides information about Catering Revenue Type Details.
type RevenueTypeDetailType struct {
	// Hotel Code is used to set associated revenue type details.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if this revenue type contributes to the revenue minimum.
	RevenueMinimum *bool `json:"revenueMinimum,omitempty"`
	// VAT % to calculate Net Catering Revenues.
	Tax *float32 `json:"tax,omitempty"`
}

// NewRevenueTypeDetailType instantiates a new RevenueTypeDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueTypeDetailType() *RevenueTypeDetailType {
	this := RevenueTypeDetailType{}
	return &this
}

// NewRevenueTypeDetailTypeWithDefaults instantiates a new RevenueTypeDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueTypeDetailTypeWithDefaults() *RevenueTypeDetailType {
	this := RevenueTypeDetailType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RevenueTypeDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RevenueTypeDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RevenueTypeDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRevenueMinimum returns the RevenueMinimum field value if set, zero value otherwise.
func (o *RevenueTypeDetailType) GetRevenueMinimum() bool {
	if o == nil || IsNil(o.RevenueMinimum) {
		var ret bool
		return ret
	}
	return *o.RevenueMinimum
}

// GetRevenueMinimumOk returns a tuple with the RevenueMinimum field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeDetailType) GetRevenueMinimumOk() (*bool, bool) {
	if o == nil || IsNil(o.RevenueMinimum) {
		return nil, false
	}
	return o.RevenueMinimum, true
}

// HasRevenueMinimum returns a boolean if a field has been set.
func (o *RevenueTypeDetailType) HasRevenueMinimum() bool {
	if o != nil && !IsNil(o.RevenueMinimum) {
		return true
	}

	return false
}

// SetRevenueMinimum gets a reference to the given bool and assigns it to the RevenueMinimum field.
func (o *RevenueTypeDetailType) SetRevenueMinimum(v bool) {
	o.RevenueMinimum = &v
}

// GetTax returns the Tax field value if set, zero value otherwise.
func (o *RevenueTypeDetailType) GetTax() float32 {
	if o == nil || IsNil(o.Tax) {
		var ret float32
		return ret
	}
	return *o.Tax
}

// GetTaxOk returns a tuple with the Tax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeDetailType) GetTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.Tax) {
		return nil, false
	}
	return o.Tax, true
}

// HasTax returns a boolean if a field has been set.
func (o *RevenueTypeDetailType) HasTax() bool {
	if o != nil && !IsNil(o.Tax) {
		return true
	}

	return false
}

// SetTax gets a reference to the given float32 and assigns it to the Tax field.
func (o *RevenueTypeDetailType) SetTax(v float32) {
	o.Tax = &v
}

func (o RevenueTypeDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueTypeDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RevenueMinimum) {
		toSerialize["revenueMinimum"] = o.RevenueMinimum
	}
	if !IsNil(o.Tax) {
		toSerialize["tax"] = o.Tax
	}
	return toSerialize, nil
}

type NullableRevenueTypeDetailType struct {
	value *RevenueTypeDetailType
	isSet bool
}

func (v NullableRevenueTypeDetailType) Get() *RevenueTypeDetailType {
	return v.value
}

func (v *NullableRevenueTypeDetailType) Set(val *RevenueTypeDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueTypeDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueTypeDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueTypeDetailType(val *RevenueTypeDetailType) *NullableRevenueTypeDetailType {
	return &NullableRevenueTypeDetailType{value: val, isSet: true}
}

func (v NullableRevenueTypeDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueTypeDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


