/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ReservationInfoTypeCancellationInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationInfoTypeCancellationInfo{}

// ReservationInfoTypeCancellationInfo Information regarding why reservation has been/was cancelled.
type ReservationInfoTypeCancellationInfo struct {
	Code *string `json:"code,omitempty"`
	// Date when reservation was last cancelled.
	Date *string `json:"date,omitempty"`
	Description *string `json:"description,omitempty"`
}

// NewReservationInfoTypeCancellationInfo instantiates a new ReservationInfoTypeCancellationInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationInfoTypeCancellationInfo() *ReservationInfoTypeCancellationInfo {
	this := ReservationInfoTypeCancellationInfo{}
	return &this
}

// NewReservationInfoTypeCancellationInfoWithDefaults instantiates a new ReservationInfoTypeCancellationInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationInfoTypeCancellationInfoWithDefaults() *ReservationInfoTypeCancellationInfo {
	this := ReservationInfoTypeCancellationInfo{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ReservationInfoTypeCancellationInfo) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInfoTypeCancellationInfo) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ReservationInfoTypeCancellationInfo) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ReservationInfoTypeCancellationInfo) SetCode(v string) {
	o.Code = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ReservationInfoTypeCancellationInfo) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInfoTypeCancellationInfo) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ReservationInfoTypeCancellationInfo) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ReservationInfoTypeCancellationInfo) SetDate(v string) {
	o.Date = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ReservationInfoTypeCancellationInfo) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInfoTypeCancellationInfo) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ReservationInfoTypeCancellationInfo) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ReservationInfoTypeCancellationInfo) SetDescription(v string) {
	o.Description = &v
}

func (o ReservationInfoTypeCancellationInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationInfoTypeCancellationInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableReservationInfoTypeCancellationInfo struct {
	value *ReservationInfoTypeCancellationInfo
	isSet bool
}

func (v NullableReservationInfoTypeCancellationInfo) Get() *ReservationInfoTypeCancellationInfo {
	return v.value
}

func (v *NullableReservationInfoTypeCancellationInfo) Set(val *ReservationInfoTypeCancellationInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationInfoTypeCancellationInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationInfoTypeCancellationInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationInfoTypeCancellationInfo(val *ReservationInfoTypeCancellationInfo) *NullableReservationInfoTypeCancellationInfo {
	return &NullableReservationInfoTypeCancellationInfo{value: val, isSet: true}
}

func (v NullableReservationInfoTypeCancellationInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationInfoTypeCancellationInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


