/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the PostConfirmationLettersRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostConfirmationLettersRequest{}

// PostConfirmationLettersRequest struct for PostConfirmationLettersRequest
type PostConfirmationLettersRequest struct {
	// List of confirmation letters.
	ConfLetters []ConfirmationType `json:"confLetters,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	ResponseInstruction *ResponseInstructionsType `json:"responseInstruction,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostConfirmationLettersRequest instantiates a new PostConfirmationLettersRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostConfirmationLettersRequest() *PostConfirmationLettersRequest {
	this := PostConfirmationLettersRequest{}
	return &this
}

// NewPostConfirmationLettersRequestWithDefaults instantiates a new PostConfirmationLettersRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostConfirmationLettersRequestWithDefaults() *PostConfirmationLettersRequest {
	this := PostConfirmationLettersRequest{}
	return &this
}

// GetConfLetters returns the ConfLetters field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetConfLetters() []ConfirmationType {
	if o == nil || IsNil(o.ConfLetters) {
		var ret []ConfirmationType
		return ret
	}
	return o.ConfLetters
}

// GetConfLettersOk returns a tuple with the ConfLetters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetConfLettersOk() ([]ConfirmationType, bool) {
	if o == nil || IsNil(o.ConfLetters) {
		return nil, false
	}
	return o.ConfLetters, true
}

// HasConfLetters returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasConfLetters() bool {
	if o != nil && !IsNil(o.ConfLetters) {
		return true
	}

	return false
}

// SetConfLetters gets a reference to the given []ConfirmationType and assigns it to the ConfLetters field.
func (o *PostConfirmationLettersRequest) SetConfLetters(v []ConfirmationType) {
	o.ConfLetters = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PostConfirmationLettersRequest) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostConfirmationLettersRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *PostConfirmationLettersRequest) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetResponseInstruction returns the ResponseInstruction field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetResponseInstruction() ResponseInstructionsType {
	if o == nil || IsNil(o.ResponseInstruction) {
		var ret ResponseInstructionsType
		return ret
	}
	return *o.ResponseInstruction
}

// GetResponseInstructionOk returns a tuple with the ResponseInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetResponseInstructionOk() (*ResponseInstructionsType, bool) {
	if o == nil || IsNil(o.ResponseInstruction) {
		return nil, false
	}
	return o.ResponseInstruction, true
}

// HasResponseInstruction returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasResponseInstruction() bool {
	if o != nil && !IsNil(o.ResponseInstruction) {
		return true
	}

	return false
}

// SetResponseInstruction gets a reference to the given ResponseInstructionsType and assigns it to the ResponseInstruction field.
func (o *PostConfirmationLettersRequest) SetResponseInstruction(v ResponseInstructionsType) {
	o.ResponseInstruction = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostConfirmationLettersRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostConfirmationLettersRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostConfirmationLettersRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostConfirmationLettersRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostConfirmationLettersRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostConfirmationLettersRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConfLetters) {
		toSerialize["confLetters"] = o.ConfLetters
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ResponseInstruction) {
		toSerialize["responseInstruction"] = o.ResponseInstruction
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostConfirmationLettersRequest struct {
	value *PostConfirmationLettersRequest
	isSet bool
}

func (v NullablePostConfirmationLettersRequest) Get() *PostConfirmationLettersRequest {
	return v.value
}

func (v *NullablePostConfirmationLettersRequest) Set(val *PostConfirmationLettersRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostConfirmationLettersRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostConfirmationLettersRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostConfirmationLettersRequest(val *PostConfirmationLettersRequest) *NullablePostConfirmationLettersRequest {
	return &NullablePostConfirmationLettersRequest{value: val, isSet: true}
}

func (v NullablePostConfirmationLettersRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostConfirmationLettersRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


