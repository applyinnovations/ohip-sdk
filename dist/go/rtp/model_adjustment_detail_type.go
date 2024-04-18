/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the AdjustmentDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AdjustmentDetailType{}

// AdjustmentDetailType The adjustment code details for the rate schedule.
type AdjustmentDetailType struct {
	// the adjustment code that needs to be attached to the rate schedule.
	AdjustmentCode *string `json:"adjustmentCode,omitempty"`
	// Should this Adjustment code be deleted ?
	DeleteAdjustment *bool `json:"deleteAdjustment,omitempty"`
	// The amount with which the actual adjustment will be overridden. if no amount is sent, default adjustment code's amount will be used.
	OverriddenAmount *float32 `json:"overriddenAmount,omitempty"`
}

// NewAdjustmentDetailType instantiates a new AdjustmentDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdjustmentDetailType() *AdjustmentDetailType {
	this := AdjustmentDetailType{}
	return &this
}

// NewAdjustmentDetailTypeWithDefaults instantiates a new AdjustmentDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdjustmentDetailTypeWithDefaults() *AdjustmentDetailType {
	this := AdjustmentDetailType{}
	return &this
}

// GetAdjustmentCode returns the AdjustmentCode field value if set, zero value otherwise.
func (o *AdjustmentDetailType) GetAdjustmentCode() string {
	if o == nil || IsNil(o.AdjustmentCode) {
		var ret string
		return ret
	}
	return *o.AdjustmentCode
}

// GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdjustmentDetailType) GetAdjustmentCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AdjustmentCode) {
		return nil, false
	}
	return o.AdjustmentCode, true
}

// HasAdjustmentCode returns a boolean if a field has been set.
func (o *AdjustmentDetailType) HasAdjustmentCode() bool {
	if o != nil && !IsNil(o.AdjustmentCode) {
		return true
	}

	return false
}

// SetAdjustmentCode gets a reference to the given string and assigns it to the AdjustmentCode field.
func (o *AdjustmentDetailType) SetAdjustmentCode(v string) {
	o.AdjustmentCode = &v
}

// GetDeleteAdjustment returns the DeleteAdjustment field value if set, zero value otherwise.
func (o *AdjustmentDetailType) GetDeleteAdjustment() bool {
	if o == nil || IsNil(o.DeleteAdjustment) {
		var ret bool
		return ret
	}
	return *o.DeleteAdjustment
}

// GetDeleteAdjustmentOk returns a tuple with the DeleteAdjustment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdjustmentDetailType) GetDeleteAdjustmentOk() (*bool, bool) {
	if o == nil || IsNil(o.DeleteAdjustment) {
		return nil, false
	}
	return o.DeleteAdjustment, true
}

// HasDeleteAdjustment returns a boolean if a field has been set.
func (o *AdjustmentDetailType) HasDeleteAdjustment() bool {
	if o != nil && !IsNil(o.DeleteAdjustment) {
		return true
	}

	return false
}

// SetDeleteAdjustment gets a reference to the given bool and assigns it to the DeleteAdjustment field.
func (o *AdjustmentDetailType) SetDeleteAdjustment(v bool) {
	o.DeleteAdjustment = &v
}

// GetOverriddenAmount returns the OverriddenAmount field value if set, zero value otherwise.
func (o *AdjustmentDetailType) GetOverriddenAmount() float32 {
	if o == nil || IsNil(o.OverriddenAmount) {
		var ret float32
		return ret
	}
	return *o.OverriddenAmount
}

// GetOverriddenAmountOk returns a tuple with the OverriddenAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdjustmentDetailType) GetOverriddenAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.OverriddenAmount) {
		return nil, false
	}
	return o.OverriddenAmount, true
}

// HasOverriddenAmount returns a boolean if a field has been set.
func (o *AdjustmentDetailType) HasOverriddenAmount() bool {
	if o != nil && !IsNil(o.OverriddenAmount) {
		return true
	}

	return false
}

// SetOverriddenAmount gets a reference to the given float32 and assigns it to the OverriddenAmount field.
func (o *AdjustmentDetailType) SetOverriddenAmount(v float32) {
	o.OverriddenAmount = &v
}

func (o AdjustmentDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AdjustmentDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdjustmentCode) {
		toSerialize["adjustmentCode"] = o.AdjustmentCode
	}
	if !IsNil(o.DeleteAdjustment) {
		toSerialize["deleteAdjustment"] = o.DeleteAdjustment
	}
	if !IsNil(o.OverriddenAmount) {
		toSerialize["overriddenAmount"] = o.OverriddenAmount
	}
	return toSerialize, nil
}

type NullableAdjustmentDetailType struct {
	value *AdjustmentDetailType
	isSet bool
}

func (v NullableAdjustmentDetailType) Get() *AdjustmentDetailType {
	return v.value
}

func (v *NullableAdjustmentDetailType) Set(val *AdjustmentDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableAdjustmentDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableAdjustmentDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdjustmentDetailType(val *AdjustmentDetailType) *NullableAdjustmentDetailType {
	return &NullableAdjustmentDetailType{value: val, isSet: true}
}

func (v NullableAdjustmentDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdjustmentDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

