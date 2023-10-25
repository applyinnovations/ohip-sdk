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

// checks if the ExtendReservationLock type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExtendReservationLock{}

// ExtendReservationLock Operation for extending the lifetime of a lock on a reservation.
type ExtendReservationLock struct {
	// The number of seconds to add to the lock's validity time.
	AdditionalTimeToLive *float32 `json:"additionalTimeToLive,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// The lock handle of the record lock we are attempting to release.
	LockHandle *float32 `json:"lockHandle,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewExtendReservationLock instantiates a new ExtendReservationLock object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExtendReservationLock() *ExtendReservationLock {
	this := ExtendReservationLock{}
	return &this
}

// NewExtendReservationLockWithDefaults instantiates a new ExtendReservationLock object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExtendReservationLockWithDefaults() *ExtendReservationLock {
	this := ExtendReservationLock{}
	return &this
}

// GetAdditionalTimeToLive returns the AdditionalTimeToLive field value if set, zero value otherwise.
func (o *ExtendReservationLock) GetAdditionalTimeToLive() float32 {
	if o == nil || IsNil(o.AdditionalTimeToLive) {
		var ret float32
		return ret
	}
	return *o.AdditionalTimeToLive
}

// GetAdditionalTimeToLiveOk returns a tuple with the AdditionalTimeToLive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendReservationLock) GetAdditionalTimeToLiveOk() (*float32, bool) {
	if o == nil || IsNil(o.AdditionalTimeToLive) {
		return nil, false
	}
	return o.AdditionalTimeToLive, true
}

// HasAdditionalTimeToLive returns a boolean if a field has been set.
func (o *ExtendReservationLock) HasAdditionalTimeToLive() bool {
	if o != nil && !IsNil(o.AdditionalTimeToLive) {
		return true
	}

	return false
}

// SetAdditionalTimeToLive gets a reference to the given float32 and assigns it to the AdditionalTimeToLive field.
func (o *ExtendReservationLock) SetAdditionalTimeToLive(v float32) {
	o.AdditionalTimeToLive = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ExtendReservationLock) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendReservationLock) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ExtendReservationLock) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ExtendReservationLock) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ExtendReservationLock) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendReservationLock) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ExtendReservationLock) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ExtendReservationLock) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetLockHandle returns the LockHandle field value if set, zero value otherwise.
func (o *ExtendReservationLock) GetLockHandle() float32 {
	if o == nil || IsNil(o.LockHandle) {
		var ret float32
		return ret
	}
	return *o.LockHandle
}

// GetLockHandleOk returns a tuple with the LockHandle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendReservationLock) GetLockHandleOk() (*float32, bool) {
	if o == nil || IsNil(o.LockHandle) {
		return nil, false
	}
	return o.LockHandle, true
}

// HasLockHandle returns a boolean if a field has been set.
func (o *ExtendReservationLock) HasLockHandle() bool {
	if o != nil && !IsNil(o.LockHandle) {
		return true
	}

	return false
}

// SetLockHandle gets a reference to the given float32 and assigns it to the LockHandle field.
func (o *ExtendReservationLock) SetLockHandle(v float32) {
	o.LockHandle = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ExtendReservationLock) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendReservationLock) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ExtendReservationLock) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ExtendReservationLock) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ExtendReservationLock) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExtendReservationLock) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalTimeToLive) {
		toSerialize["additionalTimeToLive"] = o.AdditionalTimeToLive
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.LockHandle) {
		toSerialize["lockHandle"] = o.LockHandle
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableExtendReservationLock struct {
	value *ExtendReservationLock
	isSet bool
}

func (v NullableExtendReservationLock) Get() *ExtendReservationLock {
	return v.value
}

func (v *NullableExtendReservationLock) Set(val *ExtendReservationLock) {
	v.value = val
	v.isSet = true
}

func (v NullableExtendReservationLock) IsSet() bool {
	return v.isSet
}

func (v *NullableExtendReservationLock) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExtendReservationLock(val *ExtendReservationLock) *NullableExtendReservationLock {
	return &NullableExtendReservationLock{value: val, isSet: true}
}

func (v NullableExtendReservationLock) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExtendReservationLock) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


