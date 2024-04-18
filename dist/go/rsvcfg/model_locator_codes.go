/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the LocatorCodes type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LocatorCodes{}

// LocatorCodes Request object for modifying an existing locator code.
type LocatorCodes struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of locator codes.
	LocatorCodes []LocatorCodeType `json:"locatorCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewLocatorCodes instantiates a new LocatorCodes object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLocatorCodes() *LocatorCodes {
	this := LocatorCodes{}
	return &this
}

// NewLocatorCodesWithDefaults instantiates a new LocatorCodes object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLocatorCodesWithDefaults() *LocatorCodes {
	this := LocatorCodes{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *LocatorCodes) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LocatorCodes) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *LocatorCodes) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *LocatorCodes) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetLocatorCodes returns the LocatorCodes field value if set, zero value otherwise.
func (o *LocatorCodes) GetLocatorCodes() []LocatorCodeType {
	if o == nil || IsNil(o.LocatorCodes) {
		var ret []LocatorCodeType
		return ret
	}
	return o.LocatorCodes
}

// GetLocatorCodesOk returns a tuple with the LocatorCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LocatorCodes) GetLocatorCodesOk() ([]LocatorCodeType, bool) {
	if o == nil || IsNil(o.LocatorCodes) {
		return nil, false
	}
	return o.LocatorCodes, true
}

// HasLocatorCodes returns a boolean if a field has been set.
func (o *LocatorCodes) HasLocatorCodes() bool {
	if o != nil && !IsNil(o.LocatorCodes) {
		return true
	}

	return false
}

// SetLocatorCodes gets a reference to the given []LocatorCodeType and assigns it to the LocatorCodes field.
func (o *LocatorCodes) SetLocatorCodes(v []LocatorCodeType) {
	o.LocatorCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *LocatorCodes) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LocatorCodes) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *LocatorCodes) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *LocatorCodes) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o LocatorCodes) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LocatorCodes) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.LocatorCodes) {
		toSerialize["locatorCodes"] = o.LocatorCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableLocatorCodes struct {
	value *LocatorCodes
	isSet bool
}

func (v NullableLocatorCodes) Get() *LocatorCodes {
	return v.value
}

func (v *NullableLocatorCodes) Set(val *LocatorCodes) {
	v.value = val
	v.isSet = true
}

func (v NullableLocatorCodes) IsSet() bool {
	return v.isSet
}

func (v *NullableLocatorCodes) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLocatorCodes(val *LocatorCodes) *NullableLocatorCodes {
	return &NullableLocatorCodes{value: val, isSet: true}
}

func (v NullableLocatorCodes) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLocatorCodes) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

