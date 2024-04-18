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

// checks if the GuaranteeCodeScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteeCodeScheduleType{}

// GuaranteeCodeScheduleType The Guarantee Code Schedule Type.
type GuaranteeCodeScheduleType struct {
	// Hotel code for the Guarantee Code Schedule.
	HotelId *string `json:"hotelId,omitempty"`
	ScheduleDetail *GuaranteeCodeScheduleDetailType `json:"scheduleDetail,omitempty"`
	ScheduleId *UniqueIDType `json:"scheduleId,omitempty"`
}

// NewGuaranteeCodeScheduleType instantiates a new GuaranteeCodeScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteeCodeScheduleType() *GuaranteeCodeScheduleType {
	this := GuaranteeCodeScheduleType{}
	return &this
}

// NewGuaranteeCodeScheduleTypeWithDefaults instantiates a new GuaranteeCodeScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteeCodeScheduleTypeWithDefaults() *GuaranteeCodeScheduleType {
	this := GuaranteeCodeScheduleType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *GuaranteeCodeScheduleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetScheduleDetail returns the ScheduleDetail field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleType) GetScheduleDetail() GuaranteeCodeScheduleDetailType {
	if o == nil || IsNil(o.ScheduleDetail) {
		var ret GuaranteeCodeScheduleDetailType
		return ret
	}
	return *o.ScheduleDetail
}

// GetScheduleDetailOk returns a tuple with the ScheduleDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleType) GetScheduleDetailOk() (*GuaranteeCodeScheduleDetailType, bool) {
	if o == nil || IsNil(o.ScheduleDetail) {
		return nil, false
	}
	return o.ScheduleDetail, true
}

// HasScheduleDetail returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleType) HasScheduleDetail() bool {
	if o != nil && !IsNil(o.ScheduleDetail) {
		return true
	}

	return false
}

// SetScheduleDetail gets a reference to the given GuaranteeCodeScheduleDetailType and assigns it to the ScheduleDetail field.
func (o *GuaranteeCodeScheduleType) SetScheduleDetail(v GuaranteeCodeScheduleDetailType) {
	o.ScheduleDetail = &v
}

// GetScheduleId returns the ScheduleId field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleType) GetScheduleId() UniqueIDType {
	if o == nil || IsNil(o.ScheduleId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ScheduleId
}

// GetScheduleIdOk returns a tuple with the ScheduleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleType) GetScheduleIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ScheduleId) {
		return nil, false
	}
	return o.ScheduleId, true
}

// HasScheduleId returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleType) HasScheduleId() bool {
	if o != nil && !IsNil(o.ScheduleId) {
		return true
	}

	return false
}

// SetScheduleId gets a reference to the given UniqueIDType and assigns it to the ScheduleId field.
func (o *GuaranteeCodeScheduleType) SetScheduleId(v UniqueIDType) {
	o.ScheduleId = &v
}

func (o GuaranteeCodeScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteeCodeScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ScheduleDetail) {
		toSerialize["scheduleDetail"] = o.ScheduleDetail
	}
	if !IsNil(o.ScheduleId) {
		toSerialize["scheduleId"] = o.ScheduleId
	}
	return toSerialize, nil
}

type NullableGuaranteeCodeScheduleType struct {
	value *GuaranteeCodeScheduleType
	isSet bool
}

func (v NullableGuaranteeCodeScheduleType) Get() *GuaranteeCodeScheduleType {
	return v.value
}

func (v *NullableGuaranteeCodeScheduleType) Set(val *GuaranteeCodeScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteeCodeScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteeCodeScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteeCodeScheduleType(val *GuaranteeCodeScheduleType) *NullableGuaranteeCodeScheduleType {
	return &NullableGuaranteeCodeScheduleType{value: val, isSet: true}
}

func (v NullableGuaranteeCodeScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteeCodeScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

