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

// checks if the CarrierInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CarrierInfoType{}

// CarrierInfoType Carrier Information Type.
type CarrierInfoType struct {
	// Use the SGA(Signature Airline Code) to filter rate codes for specific sources of business. This field can also be used to exclude specific sources of availability and bookings from the selection of rates.
	CarrierCode *string `json:"carrierCode,omitempty"`
	// Return to SGA.
	ReturnToSGA *bool `json:"returnToSGA,omitempty"`
}

// NewCarrierInfoType instantiates a new CarrierInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCarrierInfoType() *CarrierInfoType {
	this := CarrierInfoType{}
	return &this
}

// NewCarrierInfoTypeWithDefaults instantiates a new CarrierInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCarrierInfoTypeWithDefaults() *CarrierInfoType {
	this := CarrierInfoType{}
	return &this
}

// GetCarrierCode returns the CarrierCode field value if set, zero value otherwise.
func (o *CarrierInfoType) GetCarrierCode() string {
	if o == nil || IsNil(o.CarrierCode) {
		var ret string
		return ret
	}
	return *o.CarrierCode
}

// GetCarrierCodeOk returns a tuple with the CarrierCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CarrierInfoType) GetCarrierCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CarrierCode) {
		return nil, false
	}
	return o.CarrierCode, true
}

// HasCarrierCode returns a boolean if a field has been set.
func (o *CarrierInfoType) HasCarrierCode() bool {
	if o != nil && !IsNil(o.CarrierCode) {
		return true
	}

	return false
}

// SetCarrierCode gets a reference to the given string and assigns it to the CarrierCode field.
func (o *CarrierInfoType) SetCarrierCode(v string) {
	o.CarrierCode = &v
}

// GetReturnToSGA returns the ReturnToSGA field value if set, zero value otherwise.
func (o *CarrierInfoType) GetReturnToSGA() bool {
	if o == nil || IsNil(o.ReturnToSGA) {
		var ret bool
		return ret
	}
	return *o.ReturnToSGA
}

// GetReturnToSGAOk returns a tuple with the ReturnToSGA field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CarrierInfoType) GetReturnToSGAOk() (*bool, bool) {
	if o == nil || IsNil(o.ReturnToSGA) {
		return nil, false
	}
	return o.ReturnToSGA, true
}

// HasReturnToSGA returns a boolean if a field has been set.
func (o *CarrierInfoType) HasReturnToSGA() bool {
	if o != nil && !IsNil(o.ReturnToSGA) {
		return true
	}

	return false
}

// SetReturnToSGA gets a reference to the given bool and assigns it to the ReturnToSGA field.
func (o *CarrierInfoType) SetReturnToSGA(v bool) {
	o.ReturnToSGA = &v
}

func (o CarrierInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CarrierInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CarrierCode) {
		toSerialize["carrierCode"] = o.CarrierCode
	}
	if !IsNil(o.ReturnToSGA) {
		toSerialize["returnToSGA"] = o.ReturnToSGA
	}
	return toSerialize, nil
}

type NullableCarrierInfoType struct {
	value *CarrierInfoType
	isSet bool
}

func (v NullableCarrierInfoType) Get() *CarrierInfoType {
	return v.value
}

func (v *NullableCarrierInfoType) Set(val *CarrierInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCarrierInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCarrierInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCarrierInfoType(val *CarrierInfoType) *NullableCarrierInfoType {
	return &NullableCarrierInfoType{value: val, isSet: true}
}

func (v NullableCarrierInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCarrierInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

