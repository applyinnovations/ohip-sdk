/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the TurndownInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TurndownInfoType{}

// TurndownInfoType struct for TurndownInfoType
type TurndownInfoType struct {
	TurndownStatusInfo *TurndownStatusType `json:"turndownStatusInfo,omitempty"`
}

// NewTurndownInfoType instantiates a new TurndownInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTurndownInfoType() *TurndownInfoType {
	this := TurndownInfoType{}
	return &this
}

// NewTurndownInfoTypeWithDefaults instantiates a new TurndownInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTurndownInfoTypeWithDefaults() *TurndownInfoType {
	this := TurndownInfoType{}
	return &this
}

// GetTurndownStatusInfo returns the TurndownStatusInfo field value if set, zero value otherwise.
func (o *TurndownInfoType) GetTurndownStatusInfo() TurndownStatusType {
	if o == nil || IsNil(o.TurndownStatusInfo) {
		var ret TurndownStatusType
		return ret
	}
	return *o.TurndownStatusInfo
}

// GetTurndownStatusInfoOk returns a tuple with the TurndownStatusInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurndownInfoType) GetTurndownStatusInfoOk() (*TurndownStatusType, bool) {
	if o == nil || IsNil(o.TurndownStatusInfo) {
		return nil, false
	}
	return o.TurndownStatusInfo, true
}

// HasTurndownStatusInfo returns a boolean if a field has been set.
func (o *TurndownInfoType) HasTurndownStatusInfo() bool {
	if o != nil && !IsNil(o.TurndownStatusInfo) {
		return true
	}

	return false
}

// SetTurndownStatusInfo gets a reference to the given TurndownStatusType and assigns it to the TurndownStatusInfo field.
func (o *TurndownInfoType) SetTurndownStatusInfo(v TurndownStatusType) {
	o.TurndownStatusInfo = &v
}

func (o TurndownInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TurndownInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TurndownStatusInfo) {
		toSerialize["turndownStatusInfo"] = o.TurndownStatusInfo
	}
	return toSerialize, nil
}

type NullableTurndownInfoType struct {
	value *TurndownInfoType
	isSet bool
}

func (v NullableTurndownInfoType) Get() *TurndownInfoType {
	return v.value
}

func (v *NullableTurndownInfoType) Set(val *TurndownInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableTurndownInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableTurndownInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTurndownInfoType(val *TurndownInfoType) *NullableTurndownInfoType {
	return &NullableTurndownInfoType{value: val, isSet: true}
}

func (v NullableTurndownInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTurndownInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

