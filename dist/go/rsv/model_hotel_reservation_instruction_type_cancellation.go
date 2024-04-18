/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the HotelReservationInstructionTypeCancellation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationInstructionTypeCancellation{}

// HotelReservationInstructionTypeCancellation Information regarding why reservation has been/was cancelled. This could hold information as history even if reservation is no more in in Cancelled status.
type HotelReservationInstructionTypeCancellation struct {
	CancellationNo *UniqueIDType `json:"cancellationNo,omitempty"`
	Code *string `json:"code,omitempty"`
	// Date when reservation was last cancelled.
	Date *string `json:"date,omitempty"`
	Description *string `json:"description,omitempty"`
}

// NewHotelReservationInstructionTypeCancellation instantiates a new HotelReservationInstructionTypeCancellation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationInstructionTypeCancellation() *HotelReservationInstructionTypeCancellation {
	this := HotelReservationInstructionTypeCancellation{}
	return &this
}

// NewHotelReservationInstructionTypeCancellationWithDefaults instantiates a new HotelReservationInstructionTypeCancellation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationInstructionTypeCancellationWithDefaults() *HotelReservationInstructionTypeCancellation {
	this := HotelReservationInstructionTypeCancellation{}
	return &this
}

// GetCancellationNo returns the CancellationNo field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeCancellation) GetCancellationNo() UniqueIDType {
	if o == nil || IsNil(o.CancellationNo) {
		var ret UniqueIDType
		return ret
	}
	return *o.CancellationNo
}

// GetCancellationNoOk returns a tuple with the CancellationNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeCancellation) GetCancellationNoOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.CancellationNo) {
		return nil, false
	}
	return o.CancellationNo, true
}

// HasCancellationNo returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeCancellation) HasCancellationNo() bool {
	if o != nil && !IsNil(o.CancellationNo) {
		return true
	}

	return false
}

// SetCancellationNo gets a reference to the given UniqueIDType and assigns it to the CancellationNo field.
func (o *HotelReservationInstructionTypeCancellation) SetCancellationNo(v UniqueIDType) {
	o.CancellationNo = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeCancellation) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeCancellation) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeCancellation) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelReservationInstructionTypeCancellation) SetCode(v string) {
	o.Code = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeCancellation) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeCancellation) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeCancellation) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *HotelReservationInstructionTypeCancellation) SetDate(v string) {
	o.Date = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeCancellation) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeCancellation) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeCancellation) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelReservationInstructionTypeCancellation) SetDescription(v string) {
	o.Description = &v
}

func (o HotelReservationInstructionTypeCancellation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationInstructionTypeCancellation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancellationNo) {
		toSerialize["cancellationNo"] = o.CancellationNo
	}
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

type NullableHotelReservationInstructionTypeCancellation struct {
	value *HotelReservationInstructionTypeCancellation
	isSet bool
}

func (v NullableHotelReservationInstructionTypeCancellation) Get() *HotelReservationInstructionTypeCancellation {
	return v.value
}

func (v *NullableHotelReservationInstructionTypeCancellation) Set(val *HotelReservationInstructionTypeCancellation) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationInstructionTypeCancellation) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationInstructionTypeCancellation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationInstructionTypeCancellation(val *HotelReservationInstructionTypeCancellation) *NullableHotelReservationInstructionTypeCancellation {
	return &NullableHotelReservationInstructionTypeCancellation{value: val, isSet: true}
}

func (v NullableHotelReservationInstructionTypeCancellation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationInstructionTypeCancellation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

