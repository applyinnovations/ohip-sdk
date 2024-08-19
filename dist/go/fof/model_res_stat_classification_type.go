/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ResStatClassificationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResStatClassificationType{}

// ResStatClassificationType Statistical Classification information for the reservation.
type ResStatClassificationType struct {
	// Rate Tier used calculate statistics for export(DRS).
	RateTier *int32 `json:"rateTier,omitempty"`
	// Room Type used to calculate statistics for export(DRS).
	RoomType *string `json:"roomType,omitempty"`
}

// NewResStatClassificationType instantiates a new ResStatClassificationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResStatClassificationType() *ResStatClassificationType {
	this := ResStatClassificationType{}
	return &this
}

// NewResStatClassificationTypeWithDefaults instantiates a new ResStatClassificationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResStatClassificationTypeWithDefaults() *ResStatClassificationType {
	this := ResStatClassificationType{}
	return &this
}

// GetRateTier returns the RateTier field value if set, zero value otherwise.
func (o *ResStatClassificationType) GetRateTier() int32 {
	if o == nil || IsNil(o.RateTier) {
		var ret int32
		return ret
	}
	return *o.RateTier
}

// GetRateTierOk returns a tuple with the RateTier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResStatClassificationType) GetRateTierOk() (*int32, bool) {
	if o == nil || IsNil(o.RateTier) {
		return nil, false
	}
	return o.RateTier, true
}

// HasRateTier returns a boolean if a field has been set.
func (o *ResStatClassificationType) HasRateTier() bool {
	if o != nil && !IsNil(o.RateTier) {
		return true
	}

	return false
}

// SetRateTier gets a reference to the given int32 and assigns it to the RateTier field.
func (o *ResStatClassificationType) SetRateTier(v int32) {
	o.RateTier = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ResStatClassificationType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResStatClassificationType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ResStatClassificationType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *ResStatClassificationType) SetRoomType(v string) {
	o.RoomType = &v
}

func (o ResStatClassificationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResStatClassificationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RateTier) {
		toSerialize["rateTier"] = o.RateTier
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableResStatClassificationType struct {
	value *ResStatClassificationType
	isSet bool
}

func (v NullableResStatClassificationType) Get() *ResStatClassificationType {
	return v.value
}

func (v *NullableResStatClassificationType) Set(val *ResStatClassificationType) {
	v.value = val
	v.isSet = true
}

func (v NullableResStatClassificationType) IsSet() bool {
	return v.isSet
}

func (v *NullableResStatClassificationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResStatClassificationType(val *ResStatClassificationType) *NullableResStatClassificationType {
	return &NullableResStatClassificationType{value: val, isSet: true}
}

func (v NullableResStatClassificationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResStatClassificationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


