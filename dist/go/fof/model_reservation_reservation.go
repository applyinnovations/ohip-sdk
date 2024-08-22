/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReservationReservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationReservation{}

// ReservationReservation Criteria element to check-in a reservation
type ReservationReservation struct {
	// Request to update the checkout time.
	CheckOutTime *string `json:"checkOutTime,omitempty"`
	// Represents the time the user compeletes the check in process.
	EndCheckInProcessTime *string `json:"endCheckInProcessTime,omitempty"`
	// Dictates whether to ignore warnings ( e.g. room availability ) before check in.
	IgnoreWarnings *bool `json:"ignoreWarnings,omitempty"`
	// An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid.
	LockHandle *float32 `json:"lockHandle,omitempty"`
	// Flag to override advance payment validation.
	OverrideAdvancePaymentValidation *bool `json:"overrideAdvancePaymentValidation,omitempty"`
	// Flag for Print Registration Card
	PrintRegistration *bool `json:"printRegistration,omitempty"`
	// Dictates whether Profile privacy stop in check in is prompted.
	ProfilePrivacyPrompted *bool `json:"profilePrivacyPrompted,omitempty"`
	// Expected room no. If this attribute is included, then Opera will check if the currently configured room no in the database matches this value.
	RoomId *string `json:"roomId,omitempty"`
	// Represents the time the user starts the check in process.
	StartCheckInProcessTime *string `json:"startCheckInProcessTime,omitempty"`
	// Indicates the Stop Check In reservation Global Alert flag.
	StopCheckin *bool `json:"stopCheckin,omitempty"`
}

// NewReservationReservation instantiates a new ReservationReservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationReservation() *ReservationReservation {
	this := ReservationReservation{}
	return &this
}

// NewReservationReservationWithDefaults instantiates a new ReservationReservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationReservationWithDefaults() *ReservationReservation {
	this := ReservationReservation{}
	return &this
}

// GetCheckOutTime returns the CheckOutTime field value if set, zero value otherwise.
func (o *ReservationReservation) GetCheckOutTime() string {
	if o == nil || IsNil(o.CheckOutTime) {
		var ret string
		return ret
	}
	return *o.CheckOutTime
}

// GetCheckOutTimeOk returns a tuple with the CheckOutTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetCheckOutTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CheckOutTime) {
		return nil, false
	}
	return o.CheckOutTime, true
}

// HasCheckOutTime returns a boolean if a field has been set.
func (o *ReservationReservation) HasCheckOutTime() bool {
	if o != nil && !IsNil(o.CheckOutTime) {
		return true
	}

	return false
}

// SetCheckOutTime gets a reference to the given string and assigns it to the CheckOutTime field.
func (o *ReservationReservation) SetCheckOutTime(v string) {
	o.CheckOutTime = &v
}

// GetEndCheckInProcessTime returns the EndCheckInProcessTime field value if set, zero value otherwise.
func (o *ReservationReservation) GetEndCheckInProcessTime() string {
	if o == nil || IsNil(o.EndCheckInProcessTime) {
		var ret string
		return ret
	}
	return *o.EndCheckInProcessTime
}

// GetEndCheckInProcessTimeOk returns a tuple with the EndCheckInProcessTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetEndCheckInProcessTimeOk() (*string, bool) {
	if o == nil || IsNil(o.EndCheckInProcessTime) {
		return nil, false
	}
	return o.EndCheckInProcessTime, true
}

// HasEndCheckInProcessTime returns a boolean if a field has been set.
func (o *ReservationReservation) HasEndCheckInProcessTime() bool {
	if o != nil && !IsNil(o.EndCheckInProcessTime) {
		return true
	}

	return false
}

// SetEndCheckInProcessTime gets a reference to the given string and assigns it to the EndCheckInProcessTime field.
func (o *ReservationReservation) SetEndCheckInProcessTime(v string) {
	o.EndCheckInProcessTime = &v
}

// GetIgnoreWarnings returns the IgnoreWarnings field value if set, zero value otherwise.
func (o *ReservationReservation) GetIgnoreWarnings() bool {
	if o == nil || IsNil(o.IgnoreWarnings) {
		var ret bool
		return ret
	}
	return *o.IgnoreWarnings
}

// GetIgnoreWarningsOk returns a tuple with the IgnoreWarnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetIgnoreWarningsOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreWarnings) {
		return nil, false
	}
	return o.IgnoreWarnings, true
}

// HasIgnoreWarnings returns a boolean if a field has been set.
func (o *ReservationReservation) HasIgnoreWarnings() bool {
	if o != nil && !IsNil(o.IgnoreWarnings) {
		return true
	}

	return false
}

// SetIgnoreWarnings gets a reference to the given bool and assigns it to the IgnoreWarnings field.
func (o *ReservationReservation) SetIgnoreWarnings(v bool) {
	o.IgnoreWarnings = &v
}

// GetLockHandle returns the LockHandle field value if set, zero value otherwise.
func (o *ReservationReservation) GetLockHandle() float32 {
	if o == nil || IsNil(o.LockHandle) {
		var ret float32
		return ret
	}
	return *o.LockHandle
}

// GetLockHandleOk returns a tuple with the LockHandle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetLockHandleOk() (*float32, bool) {
	if o == nil || IsNil(o.LockHandle) {
		return nil, false
	}
	return o.LockHandle, true
}

// HasLockHandle returns a boolean if a field has been set.
func (o *ReservationReservation) HasLockHandle() bool {
	if o != nil && !IsNil(o.LockHandle) {
		return true
	}

	return false
}

// SetLockHandle gets a reference to the given float32 and assigns it to the LockHandle field.
func (o *ReservationReservation) SetLockHandle(v float32) {
	o.LockHandle = &v
}

// GetOverrideAdvancePaymentValidation returns the OverrideAdvancePaymentValidation field value if set, zero value otherwise.
func (o *ReservationReservation) GetOverrideAdvancePaymentValidation() bool {
	if o == nil || IsNil(o.OverrideAdvancePaymentValidation) {
		var ret bool
		return ret
	}
	return *o.OverrideAdvancePaymentValidation
}

// GetOverrideAdvancePaymentValidationOk returns a tuple with the OverrideAdvancePaymentValidation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetOverrideAdvancePaymentValidationOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideAdvancePaymentValidation) {
		return nil, false
	}
	return o.OverrideAdvancePaymentValidation, true
}

// HasOverrideAdvancePaymentValidation returns a boolean if a field has been set.
func (o *ReservationReservation) HasOverrideAdvancePaymentValidation() bool {
	if o != nil && !IsNil(o.OverrideAdvancePaymentValidation) {
		return true
	}

	return false
}

// SetOverrideAdvancePaymentValidation gets a reference to the given bool and assigns it to the OverrideAdvancePaymentValidation field.
func (o *ReservationReservation) SetOverrideAdvancePaymentValidation(v bool) {
	o.OverrideAdvancePaymentValidation = &v
}

// GetPrintRegistration returns the PrintRegistration field value if set, zero value otherwise.
func (o *ReservationReservation) GetPrintRegistration() bool {
	if o == nil || IsNil(o.PrintRegistration) {
		var ret bool
		return ret
	}
	return *o.PrintRegistration
}

// GetPrintRegistrationOk returns a tuple with the PrintRegistration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetPrintRegistrationOk() (*bool, bool) {
	if o == nil || IsNil(o.PrintRegistration) {
		return nil, false
	}
	return o.PrintRegistration, true
}

// HasPrintRegistration returns a boolean if a field has been set.
func (o *ReservationReservation) HasPrintRegistration() bool {
	if o != nil && !IsNil(o.PrintRegistration) {
		return true
	}

	return false
}

// SetPrintRegistration gets a reference to the given bool and assigns it to the PrintRegistration field.
func (o *ReservationReservation) SetPrintRegistration(v bool) {
	o.PrintRegistration = &v
}

// GetProfilePrivacyPrompted returns the ProfilePrivacyPrompted field value if set, zero value otherwise.
func (o *ReservationReservation) GetProfilePrivacyPrompted() bool {
	if o == nil || IsNil(o.ProfilePrivacyPrompted) {
		var ret bool
		return ret
	}
	return *o.ProfilePrivacyPrompted
}

// GetProfilePrivacyPromptedOk returns a tuple with the ProfilePrivacyPrompted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetProfilePrivacyPromptedOk() (*bool, bool) {
	if o == nil || IsNil(o.ProfilePrivacyPrompted) {
		return nil, false
	}
	return o.ProfilePrivacyPrompted, true
}

// HasProfilePrivacyPrompted returns a boolean if a field has been set.
func (o *ReservationReservation) HasProfilePrivacyPrompted() bool {
	if o != nil && !IsNil(o.ProfilePrivacyPrompted) {
		return true
	}

	return false
}

// SetProfilePrivacyPrompted gets a reference to the given bool and assigns it to the ProfilePrivacyPrompted field.
func (o *ReservationReservation) SetProfilePrivacyPrompted(v bool) {
	o.ProfilePrivacyPrompted = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *ReservationReservation) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *ReservationReservation) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *ReservationReservation) SetRoomId(v string) {
	o.RoomId = &v
}

// GetStartCheckInProcessTime returns the StartCheckInProcessTime field value if set, zero value otherwise.
func (o *ReservationReservation) GetStartCheckInProcessTime() string {
	if o == nil || IsNil(o.StartCheckInProcessTime) {
		var ret string
		return ret
	}
	return *o.StartCheckInProcessTime
}

// GetStartCheckInProcessTimeOk returns a tuple with the StartCheckInProcessTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetStartCheckInProcessTimeOk() (*string, bool) {
	if o == nil || IsNil(o.StartCheckInProcessTime) {
		return nil, false
	}
	return o.StartCheckInProcessTime, true
}

// HasStartCheckInProcessTime returns a boolean if a field has been set.
func (o *ReservationReservation) HasStartCheckInProcessTime() bool {
	if o != nil && !IsNil(o.StartCheckInProcessTime) {
		return true
	}

	return false
}

// SetStartCheckInProcessTime gets a reference to the given string and assigns it to the StartCheckInProcessTime field.
func (o *ReservationReservation) SetStartCheckInProcessTime(v string) {
	o.StartCheckInProcessTime = &v
}

// GetStopCheckin returns the StopCheckin field value if set, zero value otherwise.
func (o *ReservationReservation) GetStopCheckin() bool {
	if o == nil || IsNil(o.StopCheckin) {
		var ret bool
		return ret
	}
	return *o.StopCheckin
}

// GetStopCheckinOk returns a tuple with the StopCheckin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationReservation) GetStopCheckinOk() (*bool, bool) {
	if o == nil || IsNil(o.StopCheckin) {
		return nil, false
	}
	return o.StopCheckin, true
}

// HasStopCheckin returns a boolean if a field has been set.
func (o *ReservationReservation) HasStopCheckin() bool {
	if o != nil && !IsNil(o.StopCheckin) {
		return true
	}

	return false
}

// SetStopCheckin gets a reference to the given bool and assigns it to the StopCheckin field.
func (o *ReservationReservation) SetStopCheckin(v bool) {
	o.StopCheckin = &v
}

func (o ReservationReservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationReservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CheckOutTime) {
		toSerialize["checkOutTime"] = o.CheckOutTime
	}
	if !IsNil(o.EndCheckInProcessTime) {
		toSerialize["endCheckInProcessTime"] = o.EndCheckInProcessTime
	}
	if !IsNil(o.IgnoreWarnings) {
		toSerialize["ignoreWarnings"] = o.IgnoreWarnings
	}
	if !IsNil(o.LockHandle) {
		toSerialize["lockHandle"] = o.LockHandle
	}
	if !IsNil(o.OverrideAdvancePaymentValidation) {
		toSerialize["overrideAdvancePaymentValidation"] = o.OverrideAdvancePaymentValidation
	}
	if !IsNil(o.PrintRegistration) {
		toSerialize["printRegistration"] = o.PrintRegistration
	}
	if !IsNil(o.ProfilePrivacyPrompted) {
		toSerialize["profilePrivacyPrompted"] = o.ProfilePrivacyPrompted
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.StartCheckInProcessTime) {
		toSerialize["startCheckInProcessTime"] = o.StartCheckInProcessTime
	}
	if !IsNil(o.StopCheckin) {
		toSerialize["stopCheckin"] = o.StopCheckin
	}
	return toSerialize, nil
}

type NullableReservationReservation struct {
	value *ReservationReservation
	isSet bool
}

func (v NullableReservationReservation) Get() *ReservationReservation {
	return v.value
}

func (v *NullableReservationReservation) Set(val *ReservationReservation) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationReservation) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationReservation(val *ReservationReservation) *NullableReservationReservation {
	return &NullableReservationReservation{value: val, isSet: true}
}

func (v NullableReservationReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


