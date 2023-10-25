/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the PutRotationPeriodRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutRotationPeriodRequest{}

// PutRotationPeriodRequest struct for PutRotationPeriodRequest
type PutRotationPeriodRequest struct {
	RotationPeriod *RotationPeriodType `json:"rotationPeriod,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutRotationPeriodRequest instantiates a new PutRotationPeriodRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutRotationPeriodRequest() *PutRotationPeriodRequest {
	this := PutRotationPeriodRequest{}
	return &this
}

// NewPutRotationPeriodRequestWithDefaults instantiates a new PutRotationPeriodRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutRotationPeriodRequestWithDefaults() *PutRotationPeriodRequest {
	this := PutRotationPeriodRequest{}
	return &this
}

// GetRotationPeriod returns the RotationPeriod field value if set, zero value otherwise.
func (o *PutRotationPeriodRequest) GetRotationPeriod() RotationPeriodType {
	if o == nil || IsNil(o.RotationPeriod) {
		var ret RotationPeriodType
		return ret
	}
	return *o.RotationPeriod
}

// GetRotationPeriodOk returns a tuple with the RotationPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRotationPeriodRequest) GetRotationPeriodOk() (*RotationPeriodType, bool) {
	if o == nil || IsNil(o.RotationPeriod) {
		return nil, false
	}
	return o.RotationPeriod, true
}

// HasRotationPeriod returns a boolean if a field has been set.
func (o *PutRotationPeriodRequest) HasRotationPeriod() bool {
	if o != nil && !IsNil(o.RotationPeriod) {
		return true
	}

	return false
}

// SetRotationPeriod gets a reference to the given RotationPeriodType and assigns it to the RotationPeriod field.
func (o *PutRotationPeriodRequest) SetRotationPeriod(v RotationPeriodType) {
	o.RotationPeriod = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutRotationPeriodRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRotationPeriodRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutRotationPeriodRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutRotationPeriodRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutRotationPeriodRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutRotationPeriodRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RotationPeriod) {
		toSerialize["rotationPeriod"] = o.RotationPeriod
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutRotationPeriodRequest struct {
	value *PutRotationPeriodRequest
	isSet bool
}

func (v NullablePutRotationPeriodRequest) Get() *PutRotationPeriodRequest {
	return v.value
}

func (v *NullablePutRotationPeriodRequest) Set(val *PutRotationPeriodRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutRotationPeriodRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutRotationPeriodRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutRotationPeriodRequest(val *PutRotationPeriodRequest) *NullablePutRotationPeriodRequest {
	return &NullablePutRotationPeriodRequest{value: val, isSet: true}
}

func (v NullablePutRotationPeriodRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutRotationPeriodRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


