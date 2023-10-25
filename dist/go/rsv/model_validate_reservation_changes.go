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

// checks if the ValidateReservationChanges type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ValidateReservationChanges{}

// ValidateReservationChanges Request to validate reservation changes.
type ValidateReservationChanges struct {
	Instructions *ValidateReservationChangesInstructions `json:"instructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	Reservation *HotelReservationType `json:"reservation,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewValidateReservationChanges instantiates a new ValidateReservationChanges object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewValidateReservationChanges() *ValidateReservationChanges {
	this := ValidateReservationChanges{}
	return &this
}

// NewValidateReservationChangesWithDefaults instantiates a new ValidateReservationChanges object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewValidateReservationChangesWithDefaults() *ValidateReservationChanges {
	this := ValidateReservationChanges{}
	return &this
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *ValidateReservationChanges) GetInstructions() ValidateReservationChangesInstructions {
	if o == nil || IsNil(o.Instructions) {
		var ret ValidateReservationChangesInstructions
		return ret
	}
	return *o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationChanges) GetInstructionsOk() (*ValidateReservationChangesInstructions, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *ValidateReservationChanges) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given ValidateReservationChangesInstructions and assigns it to the Instructions field.
func (o *ValidateReservationChanges) SetInstructions(v ValidateReservationChangesInstructions) {
	o.Instructions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ValidateReservationChanges) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationChanges) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ValidateReservationChanges) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ValidateReservationChanges) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *ValidateReservationChanges) GetReservation() HotelReservationType {
	if o == nil || IsNil(o.Reservation) {
		var ret HotelReservationType
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationChanges) GetReservationOk() (*HotelReservationType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *ValidateReservationChanges) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given HotelReservationType and assigns it to the Reservation field.
func (o *ValidateReservationChanges) SetReservation(v HotelReservationType) {
	o.Reservation = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *ValidateReservationChanges) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationChanges) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *ValidateReservationChanges) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *ValidateReservationChanges) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ValidateReservationChanges) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationChanges) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ValidateReservationChanges) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ValidateReservationChanges) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ValidateReservationChanges) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ValidateReservationChanges) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableValidateReservationChanges struct {
	value *ValidateReservationChanges
	isSet bool
}

func (v NullableValidateReservationChanges) Get() *ValidateReservationChanges {
	return v.value
}

func (v *NullableValidateReservationChanges) Set(val *ValidateReservationChanges) {
	v.value = val
	v.isSet = true
}

func (v NullableValidateReservationChanges) IsSet() bool {
	return v.isSet
}

func (v *NullableValidateReservationChanges) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableValidateReservationChanges(val *ValidateReservationChanges) *NullableValidateReservationChanges {
	return &NullableValidateReservationChanges{value: val, isSet: true}
}

func (v NullableValidateReservationChanges) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableValidateReservationChanges) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


