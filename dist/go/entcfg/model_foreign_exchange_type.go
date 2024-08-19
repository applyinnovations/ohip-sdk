/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ForeignExchangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ForeignExchangeType{}

// ForeignExchangeType Foreign Exchange info.
type ForeignExchangeType struct {
	// Exchange Type for the postings.
	Type *string `json:"type,omitempty"`
	// Effective Exchange date for the foreign currency posting.
	EffectiveDate *string `json:"effectiveDate,omitempty"`
}

// NewForeignExchangeType instantiates a new ForeignExchangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewForeignExchangeType() *ForeignExchangeType {
	this := ForeignExchangeType{}
	return &this
}

// NewForeignExchangeTypeWithDefaults instantiates a new ForeignExchangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewForeignExchangeTypeWithDefaults() *ForeignExchangeType {
	this := ForeignExchangeType{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ForeignExchangeType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForeignExchangeType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ForeignExchangeType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ForeignExchangeType) SetType(v string) {
	o.Type = &v
}

// GetEffectiveDate returns the EffectiveDate field value if set, zero value otherwise.
func (o *ForeignExchangeType) GetEffectiveDate() string {
	if o == nil || IsNil(o.EffectiveDate) {
		var ret string
		return ret
	}
	return *o.EffectiveDate
}

// GetEffectiveDateOk returns a tuple with the EffectiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForeignExchangeType) GetEffectiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.EffectiveDate) {
		return nil, false
	}
	return o.EffectiveDate, true
}

// HasEffectiveDate returns a boolean if a field has been set.
func (o *ForeignExchangeType) HasEffectiveDate() bool {
	if o != nil && !IsNil(o.EffectiveDate) {
		return true
	}

	return false
}

// SetEffectiveDate gets a reference to the given string and assigns it to the EffectiveDate field.
func (o *ForeignExchangeType) SetEffectiveDate(v string) {
	o.EffectiveDate = &v
}

func (o ForeignExchangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ForeignExchangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.EffectiveDate) {
		toSerialize["effectiveDate"] = o.EffectiveDate
	}
	return toSerialize, nil
}

type NullableForeignExchangeType struct {
	value *ForeignExchangeType
	isSet bool
}

func (v NullableForeignExchangeType) Get() *ForeignExchangeType {
	return v.value
}

func (v *NullableForeignExchangeType) Set(val *ForeignExchangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableForeignExchangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableForeignExchangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableForeignExchangeType(val *ForeignExchangeType) *NullableForeignExchangeType {
	return &NullableForeignExchangeType{value: val, isSet: true}
}

func (v NullableForeignExchangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableForeignExchangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


