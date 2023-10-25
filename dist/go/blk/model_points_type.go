/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the PointsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PointsType{}

// PointsType The Redeem Points contains the number of points required to book a room type.
type PointsType struct {
	// Awards type for the award type rate code.
	AwardsType *string `json:"awardsType,omitempty"`
	// No of points required to book this Room Stay.
	Points *int32 `json:"points,omitempty"`
}

// NewPointsType instantiates a new PointsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPointsType() *PointsType {
	this := PointsType{}
	return &this
}

// NewPointsTypeWithDefaults instantiates a new PointsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPointsTypeWithDefaults() *PointsType {
	this := PointsType{}
	return &this
}

// GetAwardsType returns the AwardsType field value if set, zero value otherwise.
func (o *PointsType) GetAwardsType() string {
	if o == nil || IsNil(o.AwardsType) {
		var ret string
		return ret
	}
	return *o.AwardsType
}

// GetAwardsTypeOk returns a tuple with the AwardsType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PointsType) GetAwardsTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AwardsType) {
		return nil, false
	}
	return o.AwardsType, true
}

// HasAwardsType returns a boolean if a field has been set.
func (o *PointsType) HasAwardsType() bool {
	if o != nil && !IsNil(o.AwardsType) {
		return true
	}

	return false
}

// SetAwardsType gets a reference to the given string and assigns it to the AwardsType field.
func (o *PointsType) SetAwardsType(v string) {
	o.AwardsType = &v
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *PointsType) GetPoints() int32 {
	if o == nil || IsNil(o.Points) {
		var ret int32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PointsType) GetPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *PointsType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given int32 and assigns it to the Points field.
func (o *PointsType) SetPoints(v int32) {
	o.Points = &v
}

func (o PointsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PointsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardsType) {
		toSerialize["awardsType"] = o.AwardsType
	}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	return toSerialize, nil
}

type NullablePointsType struct {
	value *PointsType
	isSet bool
}

func (v NullablePointsType) Get() *PointsType {
	return v.value
}

func (v *NullablePointsType) Set(val *PointsType) {
	v.value = val
	v.isSet = true
}

func (v NullablePointsType) IsSet() bool {
	return v.isSet
}

func (v *NullablePointsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePointsType(val *PointsType) *NullablePointsType {
	return &NullablePointsType{value: val, isSet: true}
}

func (v NullablePointsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePointsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


