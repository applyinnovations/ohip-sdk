/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ChangeHurdleRatesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeHurdleRatesDetails{}

// ChangeHurdleRatesDetails Existing Operations Responses will eventually be modified to be extended from this type.
type ChangeHurdleRatesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeHurdleRatesDetails instantiates a new ChangeHurdleRatesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeHurdleRatesDetails() *ChangeHurdleRatesDetails {
	this := ChangeHurdleRatesDetails{}
	return &this
}

// NewChangeHurdleRatesDetailsWithDefaults instantiates a new ChangeHurdleRatesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeHurdleRatesDetailsWithDefaults() *ChangeHurdleRatesDetails {
	this := ChangeHurdleRatesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeHurdleRatesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHurdleRatesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeHurdleRatesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeHurdleRatesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeHurdleRatesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHurdleRatesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeHurdleRatesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeHurdleRatesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeHurdleRatesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeHurdleRatesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeHurdleRatesDetails struct {
	value *ChangeHurdleRatesDetails
	isSet bool
}

func (v NullableChangeHurdleRatesDetails) Get() *ChangeHurdleRatesDetails {
	return v.value
}

func (v *NullableChangeHurdleRatesDetails) Set(val *ChangeHurdleRatesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeHurdleRatesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeHurdleRatesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeHurdleRatesDetails(val *ChangeHurdleRatesDetails) *NullableChangeHurdleRatesDetails {
	return &NullableChangeHurdleRatesDetails{value: val, isSet: true}
}

func (v NullableChangeHurdleRatesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeHurdleRatesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


