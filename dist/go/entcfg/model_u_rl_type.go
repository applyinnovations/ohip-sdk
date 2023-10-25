/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the URLType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &URLType{}

// URLType Web site address, in IETF(The Internet Engineering Task Force) specified format.
type URLType struct {
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// When true, indicates a primary information.
	PrimaryInd *bool `json:"primaryInd,omitempty"`
	// Defines the purpose of the URL address, such as personal, business, public, etc.
	Type *string `json:"type,omitempty"`
	// Describes the Type code
	TypeDescription *string `json:"typeDescription,omitempty"`
	// Property Value
	Value *string `json:"value,omitempty"`
}

// NewURLType instantiates a new URLType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewURLType() *URLType {
	this := URLType{}
	return &this
}

// NewURLTypeWithDefaults instantiates a new URLType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewURLTypeWithDefaults() *URLType {
	this := URLType{}
	return &this
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *URLType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *URLType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *URLType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *URLType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPrimaryInd returns the PrimaryInd field value if set, zero value otherwise.
func (o *URLType) GetPrimaryInd() bool {
	if o == nil || IsNil(o.PrimaryInd) {
		var ret bool
		return ret
	}
	return *o.PrimaryInd
}

// GetPrimaryIndOk returns a tuple with the PrimaryInd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *URLType) GetPrimaryIndOk() (*bool, bool) {
	if o == nil || IsNil(o.PrimaryInd) {
		return nil, false
	}
	return o.PrimaryInd, true
}

// HasPrimaryInd returns a boolean if a field has been set.
func (o *URLType) HasPrimaryInd() bool {
	if o != nil && !IsNil(o.PrimaryInd) {
		return true
	}

	return false
}

// SetPrimaryInd gets a reference to the given bool and assigns it to the PrimaryInd field.
func (o *URLType) SetPrimaryInd(v bool) {
	o.PrimaryInd = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *URLType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *URLType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *URLType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *URLType) SetType(v string) {
	o.Type = &v
}

// GetTypeDescription returns the TypeDescription field value if set, zero value otherwise.
func (o *URLType) GetTypeDescription() string {
	if o == nil || IsNil(o.TypeDescription) {
		var ret string
		return ret
	}
	return *o.TypeDescription
}

// GetTypeDescriptionOk returns a tuple with the TypeDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *URLType) GetTypeDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.TypeDescription) {
		return nil, false
	}
	return o.TypeDescription, true
}

// HasTypeDescription returns a boolean if a field has been set.
func (o *URLType) HasTypeDescription() bool {
	if o != nil && !IsNil(o.TypeDescription) {
		return true
	}

	return false
}

// SetTypeDescription gets a reference to the given string and assigns it to the TypeDescription field.
func (o *URLType) SetTypeDescription(v string) {
	o.TypeDescription = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *URLType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *URLType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *URLType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *URLType) SetValue(v string) {
	o.Value = &v
}

func (o URLType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o URLType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PrimaryInd) {
		toSerialize["primaryInd"] = o.PrimaryInd
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.TypeDescription) {
		toSerialize["typeDescription"] = o.TypeDescription
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableURLType struct {
	value *URLType
	isSet bool
}

func (v NullableURLType) Get() *URLType {
	return v.value
}

func (v *NullableURLType) Set(val *URLType) {
	v.value = val
	v.isSet = true
}

func (v NullableURLType) IsSet() bool {
	return v.isSet
}

func (v *NullableURLType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableURLType(val *URLType) *NullableURLType {
	return &NullableURLType{value: val, isSet: true}
}

func (v NullableURLType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableURLType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


