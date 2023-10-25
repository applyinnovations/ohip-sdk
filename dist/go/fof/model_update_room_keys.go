/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the UpdateRoomKeys type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpdateRoomKeys{}

// UpdateRoomKeys Collection of error and warning if any.
type UpdateRoomKeys struct {
	// An error that occurred during the processing of a message.
	Errors []ErrorType `json:"errors,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewUpdateRoomKeys instantiates a new UpdateRoomKeys object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpdateRoomKeys() *UpdateRoomKeys {
	this := UpdateRoomKeys{}
	return &this
}

// NewUpdateRoomKeysWithDefaults instantiates a new UpdateRoomKeys object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpdateRoomKeysWithDefaults() *UpdateRoomKeys {
	this := UpdateRoomKeys{}
	return &this
}

// GetErrors returns the Errors field value if set, zero value otherwise.
func (o *UpdateRoomKeys) GetErrors() []ErrorType {
	if o == nil || IsNil(o.Errors) {
		var ret []ErrorType
		return ret
	}
	return o.Errors
}

// GetErrorsOk returns a tuple with the Errors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateRoomKeys) GetErrorsOk() ([]ErrorType, bool) {
	if o == nil || IsNil(o.Errors) {
		return nil, false
	}
	return o.Errors, true
}

// HasErrors returns a boolean if a field has been set.
func (o *UpdateRoomKeys) HasErrors() bool {
	if o != nil && !IsNil(o.Errors) {
		return true
	}

	return false
}

// SetErrors gets a reference to the given []ErrorType and assigns it to the Errors field.
func (o *UpdateRoomKeys) SetErrors(v []ErrorType) {
	o.Errors = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *UpdateRoomKeys) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateRoomKeys) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *UpdateRoomKeys) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *UpdateRoomKeys) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o UpdateRoomKeys) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpdateRoomKeys) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Errors) {
		toSerialize["errors"] = o.Errors
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableUpdateRoomKeys struct {
	value *UpdateRoomKeys
	isSet bool
}

func (v NullableUpdateRoomKeys) Get() *UpdateRoomKeys {
	return v.value
}

func (v *NullableUpdateRoomKeys) Set(val *UpdateRoomKeys) {
	v.value = val
	v.isSet = true
}

func (v NullableUpdateRoomKeys) IsSet() bool {
	return v.isSet
}

func (v *NullableUpdateRoomKeys) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpdateRoomKeys(val *UpdateRoomKeys) *NullableUpdateRoomKeys {
	return &NullableUpdateRoomKeys{value: val, isSet: true}
}

func (v NullableUpdateRoomKeys) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpdateRoomKeys) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


