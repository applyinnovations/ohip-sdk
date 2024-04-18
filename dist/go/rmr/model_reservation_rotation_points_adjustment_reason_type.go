/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the ReservationRotationPointsAdjustmentReasonType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationRotationPointsAdjustmentReasonType{}

// ReservationRotationPointsAdjustmentReasonType Contains adjustment reason code and description.
type ReservationRotationPointsAdjustmentReasonType struct {
	// Code.
	Code *string `json:"code,omitempty"`
	// Description of the code.
	Description *string `json:"description,omitempty"`
}

// NewReservationRotationPointsAdjustmentReasonType instantiates a new ReservationRotationPointsAdjustmentReasonType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationRotationPointsAdjustmentReasonType() *ReservationRotationPointsAdjustmentReasonType {
	this := ReservationRotationPointsAdjustmentReasonType{}
	return &this
}

// NewReservationRotationPointsAdjustmentReasonTypeWithDefaults instantiates a new ReservationRotationPointsAdjustmentReasonType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationRotationPointsAdjustmentReasonTypeWithDefaults() *ReservationRotationPointsAdjustmentReasonType {
	this := ReservationRotationPointsAdjustmentReasonType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ReservationRotationPointsAdjustmentReasonType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsAdjustmentReasonType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ReservationRotationPointsAdjustmentReasonType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ReservationRotationPointsAdjustmentReasonType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ReservationRotationPointsAdjustmentReasonType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsAdjustmentReasonType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ReservationRotationPointsAdjustmentReasonType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ReservationRotationPointsAdjustmentReasonType) SetDescription(v string) {
	o.Description = &v
}

func (o ReservationRotationPointsAdjustmentReasonType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationRotationPointsAdjustmentReasonType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableReservationRotationPointsAdjustmentReasonType struct {
	value *ReservationRotationPointsAdjustmentReasonType
	isSet bool
}

func (v NullableReservationRotationPointsAdjustmentReasonType) Get() *ReservationRotationPointsAdjustmentReasonType {
	return v.value
}

func (v *NullableReservationRotationPointsAdjustmentReasonType) Set(val *ReservationRotationPointsAdjustmentReasonType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationRotationPointsAdjustmentReasonType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationRotationPointsAdjustmentReasonType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationRotationPointsAdjustmentReasonType(val *ReservationRotationPointsAdjustmentReasonType) *NullableReservationRotationPointsAdjustmentReasonType {
	return &NullableReservationRotationPointsAdjustmentReasonType{value: val, isSet: true}
}

func (v NullableReservationRotationPointsAdjustmentReasonType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationRotationPointsAdjustmentReasonType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

