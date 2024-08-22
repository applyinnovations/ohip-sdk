/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HotelInfoTypePropertyControlsSellControls type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInfoTypePropertyControlsSellControls{}

// HotelInfoTypePropertyControlsSellControls The sell controls information configuration of the hotel.
type HotelInfoTypePropertyControlsSellControls struct {
	// The end date of the hotel.
	EndDate *string `json:"endDate,omitempty"`
	// The hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	// Date when the hotel become valid for use.
	StartDate *string `json:"startDate,omitempty"`
}

// NewHotelInfoTypePropertyControlsSellControls instantiates a new HotelInfoTypePropertyControlsSellControls object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInfoTypePropertyControlsSellControls() *HotelInfoTypePropertyControlsSellControls {
	this := HotelInfoTypePropertyControlsSellControls{}
	return &this
}

// NewHotelInfoTypePropertyControlsSellControlsWithDefaults instantiates a new HotelInfoTypePropertyControlsSellControls object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInfoTypePropertyControlsSellControlsWithDefaults() *HotelInfoTypePropertyControlsSellControls {
	this := HotelInfoTypePropertyControlsSellControls{}
	return &this
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsSellControls) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsSellControls) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsSellControls) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *HotelInfoTypePropertyControlsSellControls) SetEndDate(v string) {
	o.EndDate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsSellControls) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsSellControls) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsSellControls) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelInfoTypePropertyControlsSellControls) SetHotelId(v string) {
	o.HotelId = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsSellControls) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsSellControls) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsSellControls) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *HotelInfoTypePropertyControlsSellControls) SetStartDate(v string) {
	o.StartDate = &v
}

func (o HotelInfoTypePropertyControlsSellControls) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInfoTypePropertyControlsSellControls) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableHotelInfoTypePropertyControlsSellControls struct {
	value *HotelInfoTypePropertyControlsSellControls
	isSet bool
}

func (v NullableHotelInfoTypePropertyControlsSellControls) Get() *HotelInfoTypePropertyControlsSellControls {
	return v.value
}

func (v *NullableHotelInfoTypePropertyControlsSellControls) Set(val *HotelInfoTypePropertyControlsSellControls) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInfoTypePropertyControlsSellControls) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInfoTypePropertyControlsSellControls) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInfoTypePropertyControlsSellControls(val *HotelInfoTypePropertyControlsSellControls) *NullableHotelInfoTypePropertyControlsSellControls {
	return &NullableHotelInfoTypePropertyControlsSellControls{value: val, isSet: true}
}

func (v NullableHotelInfoTypePropertyControlsSellControls) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInfoTypePropertyControlsSellControls) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


