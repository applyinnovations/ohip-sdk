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

// checks if the TotalPricingElementIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TotalPricingElementIDType{}

// TotalPricingElementIDType Total Pricing Element ID type used to identify the record
type TotalPricingElementIDType struct {
	// Hotel Code that associated with Transaction Code and Total Pricing Element
	HotelId *string `json:"hotelId,omitempty"`
	Transaction *CodeDescriptionType `json:"transaction,omitempty"`
}

// NewTotalPricingElementIDType instantiates a new TotalPricingElementIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTotalPricingElementIDType() *TotalPricingElementIDType {
	this := TotalPricingElementIDType{}
	return &this
}

// NewTotalPricingElementIDTypeWithDefaults instantiates a new TotalPricingElementIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTotalPricingElementIDTypeWithDefaults() *TotalPricingElementIDType {
	this := TotalPricingElementIDType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TotalPricingElementIDType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalPricingElementIDType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TotalPricingElementIDType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TotalPricingElementIDType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetTransaction returns the Transaction field value if set, zero value otherwise.
func (o *TotalPricingElementIDType) GetTransaction() CodeDescriptionType {
	if o == nil || IsNil(o.Transaction) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Transaction
}

// GetTransactionOk returns a tuple with the Transaction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TotalPricingElementIDType) GetTransactionOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Transaction) {
		return nil, false
	}
	return o.Transaction, true
}

// HasTransaction returns a boolean if a field has been set.
func (o *TotalPricingElementIDType) HasTransaction() bool {
	if o != nil && !IsNil(o.Transaction) {
		return true
	}

	return false
}

// SetTransaction gets a reference to the given CodeDescriptionType and assigns it to the Transaction field.
func (o *TotalPricingElementIDType) SetTransaction(v CodeDescriptionType) {
	o.Transaction = &v
}

func (o TotalPricingElementIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TotalPricingElementIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Transaction) {
		toSerialize["transaction"] = o.Transaction
	}
	return toSerialize, nil
}

type NullableTotalPricingElementIDType struct {
	value *TotalPricingElementIDType
	isSet bool
}

func (v NullableTotalPricingElementIDType) Get() *TotalPricingElementIDType {
	return v.value
}

func (v *NullableTotalPricingElementIDType) Set(val *TotalPricingElementIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableTotalPricingElementIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableTotalPricingElementIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTotalPricingElementIDType(val *TotalPricingElementIDType) *NullableTotalPricingElementIDType {
	return &NullableTotalPricingElementIDType{value: val, isSet: true}
}

func (v NullableTotalPricingElementIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTotalPricingElementIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


