/*
OPERA Cloud Content Service

Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package medcfg

import (
	"encoding/json"
)

// checks if the RegistrationCardType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrationCardType{}

// RegistrationCardType Registration card details, including PDF report.
type RegistrationCardType struct {
	// Hotel code for the registration card.
	HotelId *string `json:"hotelId,omitempty"`
	// Registration card PDF.
	RegistrationCard *string `json:"registrationCard,omitempty"`
	ReservationId *UniqueIDType `json:"reservationId,omitempty"`
}

// NewRegistrationCardType instantiates a new RegistrationCardType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrationCardType() *RegistrationCardType {
	this := RegistrationCardType{}
	return &this
}

// NewRegistrationCardTypeWithDefaults instantiates a new RegistrationCardType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrationCardTypeWithDefaults() *RegistrationCardType {
	this := RegistrationCardType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RegistrationCardType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCardType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RegistrationCardType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RegistrationCardType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRegistrationCard returns the RegistrationCard field value if set, zero value otherwise.
func (o *RegistrationCardType) GetRegistrationCard() string {
	if o == nil || IsNil(o.RegistrationCard) {
		var ret string
		return ret
	}
	return *o.RegistrationCard
}

// GetRegistrationCardOk returns a tuple with the RegistrationCard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCardType) GetRegistrationCardOk() (*string, bool) {
	if o == nil || IsNil(o.RegistrationCard) {
		return nil, false
	}
	return o.RegistrationCard, true
}

// HasRegistrationCard returns a boolean if a field has been set.
func (o *RegistrationCardType) HasRegistrationCard() bool {
	if o != nil && !IsNil(o.RegistrationCard) {
		return true
	}

	return false
}

// SetRegistrationCard gets a reference to the given string and assigns it to the RegistrationCard field.
func (o *RegistrationCardType) SetRegistrationCard(v string) {
	o.RegistrationCard = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *RegistrationCardType) GetReservationId() UniqueIDType {
	if o == nil || IsNil(o.ReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrationCardType) GetReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *RegistrationCardType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given UniqueIDType and assigns it to the ReservationId field.
func (o *RegistrationCardType) SetReservationId(v UniqueIDType) {
	o.ReservationId = &v
}

func (o RegistrationCardType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrationCardType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RegistrationCard) {
		toSerialize["registrationCard"] = o.RegistrationCard
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	return toSerialize, nil
}

type NullableRegistrationCardType struct {
	value *RegistrationCardType
	isSet bool
}

func (v NullableRegistrationCardType) Get() *RegistrationCardType {
	return v.value
}

func (v *NullableRegistrationCardType) Set(val *RegistrationCardType) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrationCardType) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrationCardType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrationCardType(val *RegistrationCardType) *NullableRegistrationCardType {
	return &NullableRegistrationCardType{value: val, isSet: true}
}

func (v NullableRegistrationCardType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrationCardType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

