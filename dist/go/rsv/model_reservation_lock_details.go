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

// checks if the ReservationLockDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationLockDetails{}

// ReservationLockDetails This response will indicate whether the requested lock has been granted or some other user owns the lock.
type ReservationLockDetails struct {
	AcquiredReservationLock *OperaRecordLock `json:"acquiredReservationLock,omitempty"`
	ExistingReservationLock *OperaRecordLock `json:"existingReservationLock,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationLockDetails instantiates a new ReservationLockDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationLockDetails() *ReservationLockDetails {
	this := ReservationLockDetails{}
	return &this
}

// NewReservationLockDetailsWithDefaults instantiates a new ReservationLockDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationLockDetailsWithDefaults() *ReservationLockDetails {
	this := ReservationLockDetails{}
	return &this
}

// GetAcquiredReservationLock returns the AcquiredReservationLock field value if set, zero value otherwise.
func (o *ReservationLockDetails) GetAcquiredReservationLock() OperaRecordLock {
	if o == nil || IsNil(o.AcquiredReservationLock) {
		var ret OperaRecordLock
		return ret
	}
	return *o.AcquiredReservationLock
}

// GetAcquiredReservationLockOk returns a tuple with the AcquiredReservationLock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationLockDetails) GetAcquiredReservationLockOk() (*OperaRecordLock, bool) {
	if o == nil || IsNil(o.AcquiredReservationLock) {
		return nil, false
	}
	return o.AcquiredReservationLock, true
}

// HasAcquiredReservationLock returns a boolean if a field has been set.
func (o *ReservationLockDetails) HasAcquiredReservationLock() bool {
	if o != nil && !IsNil(o.AcquiredReservationLock) {
		return true
	}

	return false
}

// SetAcquiredReservationLock gets a reference to the given OperaRecordLock and assigns it to the AcquiredReservationLock field.
func (o *ReservationLockDetails) SetAcquiredReservationLock(v OperaRecordLock) {
	o.AcquiredReservationLock = &v
}

// GetExistingReservationLock returns the ExistingReservationLock field value if set, zero value otherwise.
func (o *ReservationLockDetails) GetExistingReservationLock() OperaRecordLock {
	if o == nil || IsNil(o.ExistingReservationLock) {
		var ret OperaRecordLock
		return ret
	}
	return *o.ExistingReservationLock
}

// GetExistingReservationLockOk returns a tuple with the ExistingReservationLock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationLockDetails) GetExistingReservationLockOk() (*OperaRecordLock, bool) {
	if o == nil || IsNil(o.ExistingReservationLock) {
		return nil, false
	}
	return o.ExistingReservationLock, true
}

// HasExistingReservationLock returns a boolean if a field has been set.
func (o *ReservationLockDetails) HasExistingReservationLock() bool {
	if o != nil && !IsNil(o.ExistingReservationLock) {
		return true
	}

	return false
}

// SetExistingReservationLock gets a reference to the given OperaRecordLock and assigns it to the ExistingReservationLock field.
func (o *ReservationLockDetails) SetExistingReservationLock(v OperaRecordLock) {
	o.ExistingReservationLock = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationLockDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationLockDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationLockDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationLockDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationLockDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationLockDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationLockDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationLockDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationLockDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationLockDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AcquiredReservationLock) {
		toSerialize["acquiredReservationLock"] = o.AcquiredReservationLock
	}
	if !IsNil(o.ExistingReservationLock) {
		toSerialize["existingReservationLock"] = o.ExistingReservationLock
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationLockDetails struct {
	value *ReservationLockDetails
	isSet bool
}

func (v NullableReservationLockDetails) Get() *ReservationLockDetails {
	return v.value
}

func (v *NullableReservationLockDetails) Set(val *ReservationLockDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationLockDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationLockDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationLockDetails(val *ReservationLockDetails) *NullableReservationLockDetails {
	return &NullableReservationLockDetails{value: val, isSet: true}
}

func (v NullableReservationLockDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationLockDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


