/*
OPERA Cloud Content Service

Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package medcfg

import (
	"encoding/json"
)

// checks if the RegistrationCard type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrationCard{}

// RegistrationCard Response object for registration card.
type RegistrationCard struct {
	Links []InstanceLink `json:"links,omitempty"`
	RegistrationCard *RegistrationCardType `json:"registrationCard,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRegistrationCard instantiates a new RegistrationCard object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrationCard() *RegistrationCard {
	this := RegistrationCard{}
	return &this
}

// NewRegistrationCardWithDefaults instantiates a new RegistrationCard object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrationCardWithDefaults() *RegistrationCard {
	this := RegistrationCard{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RegistrationCard) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCard) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RegistrationCard) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RegistrationCard) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRegistrationCard returns the RegistrationCard field value if set, zero value otherwise.
func (o *RegistrationCard) GetRegistrationCard() RegistrationCardType {
	if o == nil || IsNil(o.RegistrationCard) {
		var ret RegistrationCardType
		return ret
	}
	return *o.RegistrationCard
}

// GetRegistrationCardOk returns a tuple with the RegistrationCard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCard) GetRegistrationCardOk() (*RegistrationCardType, bool) {
	if o == nil || IsNil(o.RegistrationCard) {
		return nil, false
	}
	return o.RegistrationCard, true
}

// HasRegistrationCard returns a boolean if a field has been set.
func (o *RegistrationCard) HasRegistrationCard() bool {
	if o != nil && !IsNil(o.RegistrationCard) {
		return true
	}

	return false
}

// SetRegistrationCard gets a reference to the given RegistrationCardType and assigns it to the RegistrationCard field.
func (o *RegistrationCard) SetRegistrationCard(v RegistrationCardType) {
	o.RegistrationCard = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RegistrationCard) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCard) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RegistrationCard) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RegistrationCard) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RegistrationCard) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrationCard) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RegistrationCard) {
		toSerialize["registrationCard"] = o.RegistrationCard
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRegistrationCard struct {
	value *RegistrationCard
	isSet bool
}

func (v NullableRegistrationCard) Get() *RegistrationCard {
	return v.value
}

func (v *NullableRegistrationCard) Set(val *RegistrationCard) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrationCard) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrationCard) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrationCard(val *RegistrationCard) *NullableRegistrationCard {
	return &NullableRegistrationCard{value: val, isSet: true}
}

func (v NullableRegistrationCard) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrationCard) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


