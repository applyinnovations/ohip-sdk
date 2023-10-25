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

// checks if the PreCheckInReservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PreCheckInReservation{}

// PreCheckInReservation Request to pre-register a reservation eligible for pre-registration and change arrival details.
type PreCheckInReservation struct {
	// Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device.
	AllowMobileViewFolio *bool `json:"allowMobileViewFolio,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	Reservation *ReservationPreCheckInDetailsType `json:"reservation,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPreCheckInReservation instantiates a new PreCheckInReservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPreCheckInReservation() *PreCheckInReservation {
	this := PreCheckInReservation{}
	return &this
}

// NewPreCheckInReservationWithDefaults instantiates a new PreCheckInReservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPreCheckInReservationWithDefaults() *PreCheckInReservation {
	this := PreCheckInReservation{}
	return &this
}

// GetAllowMobileViewFolio returns the AllowMobileViewFolio field value if set, zero value otherwise.
func (o *PreCheckInReservation) GetAllowMobileViewFolio() bool {
	if o == nil || IsNil(o.AllowMobileViewFolio) {
		var ret bool
		return ret
	}
	return *o.AllowMobileViewFolio
}

// GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInReservation) GetAllowMobileViewFolioOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowMobileViewFolio) {
		return nil, false
	}
	return o.AllowMobileViewFolio, true
}

// HasAllowMobileViewFolio returns a boolean if a field has been set.
func (o *PreCheckInReservation) HasAllowMobileViewFolio() bool {
	if o != nil && !IsNil(o.AllowMobileViewFolio) {
		return true
	}

	return false
}

// SetAllowMobileViewFolio gets a reference to the given bool and assigns it to the AllowMobileViewFolio field.
func (o *PreCheckInReservation) SetAllowMobileViewFolio(v bool) {
	o.AllowMobileViewFolio = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PreCheckInReservation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInReservation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PreCheckInReservation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PreCheckInReservation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *PreCheckInReservation) GetReservation() ReservationPreCheckInDetailsType {
	if o == nil || IsNil(o.Reservation) {
		var ret ReservationPreCheckInDetailsType
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInReservation) GetReservationOk() (*ReservationPreCheckInDetailsType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *PreCheckInReservation) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given ReservationPreCheckInDetailsType and assigns it to the Reservation field.
func (o *PreCheckInReservation) SetReservation(v ReservationPreCheckInDetailsType) {
	o.Reservation = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PreCheckInReservation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInReservation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PreCheckInReservation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PreCheckInReservation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PreCheckInReservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PreCheckInReservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowMobileViewFolio) {
		toSerialize["allowMobileViewFolio"] = o.AllowMobileViewFolio
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePreCheckInReservation struct {
	value *PreCheckInReservation
	isSet bool
}

func (v NullablePreCheckInReservation) Get() *PreCheckInReservation {
	return v.value
}

func (v *NullablePreCheckInReservation) Set(val *PreCheckInReservation) {
	v.value = val
	v.isSet = true
}

func (v NullablePreCheckInReservation) IsSet() bool {
	return v.isSet
}

func (v *NullablePreCheckInReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePreCheckInReservation(val *PreCheckInReservation) *NullablePreCheckInReservation {
	return &NullablePreCheckInReservation{value: val, isSet: true}
}

func (v NullablePreCheckInReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePreCheckInReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


