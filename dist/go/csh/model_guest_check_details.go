/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the GuestCheckDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestCheckDetails{}

// GuestCheckDetails Request to process a guest check detail.
type GuestCheckDetails struct {
	CheckDetails *CheckDetailsType `json:"checkDetails,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuestCheckDetails instantiates a new GuestCheckDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestCheckDetails() *GuestCheckDetails {
	this := GuestCheckDetails{}
	return &this
}

// NewGuestCheckDetailsWithDefaults instantiates a new GuestCheckDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestCheckDetailsWithDefaults() *GuestCheckDetails {
	this := GuestCheckDetails{}
	return &this
}

// GetCheckDetails returns the CheckDetails field value if set, zero value otherwise.
func (o *GuestCheckDetails) GetCheckDetails() CheckDetailsType {
	if o == nil || IsNil(o.CheckDetails) {
		var ret CheckDetailsType
		return ret
	}
	return *o.CheckDetails
}

// GetCheckDetailsOk returns a tuple with the CheckDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCheckDetails) GetCheckDetailsOk() (*CheckDetailsType, bool) {
	if o == nil || IsNil(o.CheckDetails) {
		return nil, false
	}
	return o.CheckDetails, true
}

// HasCheckDetails returns a boolean if a field has been set.
func (o *GuestCheckDetails) HasCheckDetails() bool {
	if o != nil && !IsNil(o.CheckDetails) {
		return true
	}

	return false
}

// SetCheckDetails gets a reference to the given CheckDetailsType and assigns it to the CheckDetails field.
func (o *GuestCheckDetails) SetCheckDetails(v CheckDetailsType) {
	o.CheckDetails = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuestCheckDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCheckDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuestCheckDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuestCheckDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *GuestCheckDetails) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCheckDetails) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *GuestCheckDetails) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *GuestCheckDetails) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuestCheckDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCheckDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuestCheckDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuestCheckDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuestCheckDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestCheckDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CheckDetails) {
		toSerialize["checkDetails"] = o.CheckDetails
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuestCheckDetails struct {
	value *GuestCheckDetails
	isSet bool
}

func (v NullableGuestCheckDetails) Get() *GuestCheckDetails {
	return v.value
}

func (v *NullableGuestCheckDetails) Set(val *GuestCheckDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestCheckDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestCheckDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestCheckDetails(val *GuestCheckDetails) *NullableGuestCheckDetails {
	return &NullableGuestCheckDetails{value: val, isSet: true}
}

func (v NullableGuestCheckDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestCheckDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


