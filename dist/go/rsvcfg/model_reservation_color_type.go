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

// checks if the ReservationColorType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationColorType{}

// ReservationColorType Property level reservation color information.
type ReservationColorType struct {
	// Code to identify reservation color.
	ColorCode *string `json:"colorCode,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Display sequence for reservation color.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Property which the reservation color belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if reservation color is inactive.
	Inactive *bool `json:"inactive,omitempty"`
}

// NewReservationColorType instantiates a new ReservationColorType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationColorType() *ReservationColorType {
	this := ReservationColorType{}
	return &this
}

// NewReservationColorTypeWithDefaults instantiates a new ReservationColorType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationColorTypeWithDefaults() *ReservationColorType {
	this := ReservationColorType{}
	return &this
}

// GetColorCode returns the ColorCode field value if set, zero value otherwise.
func (o *ReservationColorType) GetColorCode() string {
	if o == nil || IsNil(o.ColorCode) {
		var ret string
		return ret
	}
	return *o.ColorCode
}

// GetColorCodeOk returns a tuple with the ColorCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorType) GetColorCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ColorCode) {
		return nil, false
	}
	return o.ColorCode, true
}

// HasColorCode returns a boolean if a field has been set.
func (o *ReservationColorType) HasColorCode() bool {
	if o != nil && !IsNil(o.ColorCode) {
		return true
	}

	return false
}

// SetColorCode gets a reference to the given string and assigns it to the ColorCode field.
func (o *ReservationColorType) SetColorCode(v string) {
	o.ColorCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ReservationColorType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ReservationColorType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *ReservationColorType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *ReservationColorType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *ReservationColorType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *ReservationColorType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReservationColorType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReservationColorType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReservationColorType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *ReservationColorType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationColorType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *ReservationColorType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *ReservationColorType) SetInactive(v bool) {
	o.Inactive = &v
}

func (o ReservationColorType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationColorType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ColorCode) {
		toSerialize["colorCode"] = o.ColorCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	return toSerialize, nil
}

type NullableReservationColorType struct {
	value *ReservationColorType
	isSet bool
}

func (v NullableReservationColorType) Get() *ReservationColorType {
	return v.value
}

func (v *NullableReservationColorType) Set(val *ReservationColorType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationColorType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationColorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationColorType(val *ReservationColorType) *NullableReservationColorType {
	return &NullableReservationColorType{value: val, isSet: true}
}

func (v NullableReservationColorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationColorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


