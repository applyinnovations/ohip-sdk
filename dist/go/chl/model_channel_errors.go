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

// checks if the ChannelErrors type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelErrors{}

// ChannelErrors Request object for creating channel errors.
type ChannelErrors struct {
	Errors *ChannelErrorsErrors `json:"errors,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChannelErrors instantiates a new ChannelErrors object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelErrors() *ChannelErrors {
	this := ChannelErrors{}
	return &this
}

// NewChannelErrorsWithDefaults instantiates a new ChannelErrors object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelErrorsWithDefaults() *ChannelErrors {
	this := ChannelErrors{}
	return &this
}

// GetErrors returns the Errors field value if set, zero value otherwise.
func (o *ChannelErrors) GetErrors() ChannelErrorsErrors {
	if o == nil || IsNil(o.Errors) {
		var ret ChannelErrorsErrors
		return ret
	}
	return *o.Errors
}

// GetErrorsOk returns a tuple with the Errors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelErrors) GetErrorsOk() (*ChannelErrorsErrors, bool) {
	if o == nil || IsNil(o.Errors) {
		return nil, false
	}
	return o.Errors, true
}

// HasErrors returns a boolean if a field has been set.
func (o *ChannelErrors) HasErrors() bool {
	if o != nil && !IsNil(o.Errors) {
		return true
	}

	return false
}

// SetErrors gets a reference to the given ChannelErrorsErrors and assigns it to the Errors field.
func (o *ChannelErrors) SetErrors(v ChannelErrorsErrors) {
	o.Errors = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChannelErrors) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelErrors) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChannelErrors) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChannelErrors) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChannelErrors) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelErrors) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Errors) {
		toSerialize["errors"] = o.Errors
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChannelErrors struct {
	value *ChannelErrors
	isSet bool
}

func (v NullableChannelErrors) Get() *ChannelErrors {
	return v.value
}

func (v *NullableChannelErrors) Set(val *ChannelErrors) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelErrors) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelErrors) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelErrors(val *ChannelErrors) *NullableChannelErrors {
	return &NullableChannelErrors{value: val, isSet: true}
}

func (v NullableChannelErrors) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelErrors) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


