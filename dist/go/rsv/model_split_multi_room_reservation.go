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

// checks if the SplitMultiRoomReservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SplitMultiRoomReservation{}

// SplitMultiRoomReservation Request to split multi-room reservation into separate reservations.
type SplitMultiRoomReservation struct {
	// Flag to instruct the operation to copy payment methods of the original reservation to the new reservation to be created.
	CopyPaymentInformation *bool `json:"copyPaymentInformation,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// An identifier representing the record lock for the reservation under process. When passed, the operation will verify that the lock is still valid.
	LockHandle *float32 `json:"lockHandle,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	ReservationPaymentMethods *CopyReservationPaymentMethodsType `json:"reservationPaymentMethods,omitempty"`
	ResponseInstructions *SplitMultiRoomReservationResponseInstructions `json:"responseInstructions,omitempty"`
	// If set to TRUE, the reservation will be separated into number of rooms that it currently has. Otherwise, only 1 single room reservation will be created and the original reservation will be deducted with 1 room.
	SplitAll *bool `json:"splitAll,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSplitMultiRoomReservation instantiates a new SplitMultiRoomReservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSplitMultiRoomReservation() *SplitMultiRoomReservation {
	this := SplitMultiRoomReservation{}
	return &this
}

// NewSplitMultiRoomReservationWithDefaults instantiates a new SplitMultiRoomReservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSplitMultiRoomReservationWithDefaults() *SplitMultiRoomReservation {
	this := SplitMultiRoomReservation{}
	return &this
}

// GetCopyPaymentInformation returns the CopyPaymentInformation field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetCopyPaymentInformation() bool {
	if o == nil || IsNil(o.CopyPaymentInformation) {
		var ret bool
		return ret
	}
	return *o.CopyPaymentInformation
}

// GetCopyPaymentInformationOk returns a tuple with the CopyPaymentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetCopyPaymentInformationOk() (*bool, bool) {
	if o == nil || IsNil(o.CopyPaymentInformation) {
		return nil, false
	}
	return o.CopyPaymentInformation, true
}

// HasCopyPaymentInformation returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasCopyPaymentInformation() bool {
	if o != nil && !IsNil(o.CopyPaymentInformation) {
		return true
	}

	return false
}

// SetCopyPaymentInformation gets a reference to the given bool and assigns it to the CopyPaymentInformation field.
func (o *SplitMultiRoomReservation) SetCopyPaymentInformation(v bool) {
	o.CopyPaymentInformation = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SplitMultiRoomReservation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetLockHandle returns the LockHandle field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetLockHandle() float32 {
	if o == nil || IsNil(o.LockHandle) {
		var ret float32
		return ret
	}
	return *o.LockHandle
}

// GetLockHandleOk returns a tuple with the LockHandle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetLockHandleOk() (*float32, bool) {
	if o == nil || IsNil(o.LockHandle) {
		return nil, false
	}
	return o.LockHandle, true
}

// HasLockHandle returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasLockHandle() bool {
	if o != nil && !IsNil(o.LockHandle) {
		return true
	}

	return false
}

// SetLockHandle gets a reference to the given float32 and assigns it to the LockHandle field.
func (o *SplitMultiRoomReservation) SetLockHandle(v float32) {
	o.LockHandle = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *SplitMultiRoomReservation) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetReservationPaymentMethods returns the ReservationPaymentMethods field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetReservationPaymentMethods() CopyReservationPaymentMethodsType {
	if o == nil || IsNil(o.ReservationPaymentMethods) {
		var ret CopyReservationPaymentMethodsType
		return ret
	}
	return *o.ReservationPaymentMethods
}

// GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetReservationPaymentMethodsOk() (*CopyReservationPaymentMethodsType, bool) {
	if o == nil || IsNil(o.ReservationPaymentMethods) {
		return nil, false
	}
	return o.ReservationPaymentMethods, true
}

// HasReservationPaymentMethods returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasReservationPaymentMethods() bool {
	if o != nil && !IsNil(o.ReservationPaymentMethods) {
		return true
	}

	return false
}

// SetReservationPaymentMethods gets a reference to the given CopyReservationPaymentMethodsType and assigns it to the ReservationPaymentMethods field.
func (o *SplitMultiRoomReservation) SetReservationPaymentMethods(v CopyReservationPaymentMethodsType) {
	o.ReservationPaymentMethods = &v
}

// GetResponseInstructions returns the ResponseInstructions field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetResponseInstructions() SplitMultiRoomReservationResponseInstructions {
	if o == nil || IsNil(o.ResponseInstructions) {
		var ret SplitMultiRoomReservationResponseInstructions
		return ret
	}
	return *o.ResponseInstructions
}

// GetResponseInstructionsOk returns a tuple with the ResponseInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetResponseInstructionsOk() (*SplitMultiRoomReservationResponseInstructions, bool) {
	if o == nil || IsNil(o.ResponseInstructions) {
		return nil, false
	}
	return o.ResponseInstructions, true
}

// HasResponseInstructions returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasResponseInstructions() bool {
	if o != nil && !IsNil(o.ResponseInstructions) {
		return true
	}

	return false
}

// SetResponseInstructions gets a reference to the given SplitMultiRoomReservationResponseInstructions and assigns it to the ResponseInstructions field.
func (o *SplitMultiRoomReservation) SetResponseInstructions(v SplitMultiRoomReservationResponseInstructions) {
	o.ResponseInstructions = &v
}

// GetSplitAll returns the SplitAll field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetSplitAll() bool {
	if o == nil || IsNil(o.SplitAll) {
		var ret bool
		return ret
	}
	return *o.SplitAll
}

// GetSplitAllOk returns a tuple with the SplitAll field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetSplitAllOk() (*bool, bool) {
	if o == nil || IsNil(o.SplitAll) {
		return nil, false
	}
	return o.SplitAll, true
}

// HasSplitAll returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasSplitAll() bool {
	if o != nil && !IsNil(o.SplitAll) {
		return true
	}

	return false
}

// SetSplitAll gets a reference to the given bool and assigns it to the SplitAll field.
func (o *SplitMultiRoomReservation) SetSplitAll(v bool) {
	o.SplitAll = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SplitMultiRoomReservation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitMultiRoomReservation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SplitMultiRoomReservation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SplitMultiRoomReservation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SplitMultiRoomReservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SplitMultiRoomReservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyPaymentInformation) {
		toSerialize["copyPaymentInformation"] = o.CopyPaymentInformation
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.LockHandle) {
		toSerialize["lockHandle"] = o.LockHandle
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ReservationPaymentMethods) {
		toSerialize["reservationPaymentMethods"] = o.ReservationPaymentMethods
	}
	if !IsNil(o.ResponseInstructions) {
		toSerialize["responseInstructions"] = o.ResponseInstructions
	}
	if !IsNil(o.SplitAll) {
		toSerialize["splitAll"] = o.SplitAll
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSplitMultiRoomReservation struct {
	value *SplitMultiRoomReservation
	isSet bool
}

func (v NullableSplitMultiRoomReservation) Get() *SplitMultiRoomReservation {
	return v.value
}

func (v *NullableSplitMultiRoomReservation) Set(val *SplitMultiRoomReservation) {
	v.value = val
	v.isSet = true
}

func (v NullableSplitMultiRoomReservation) IsSet() bool {
	return v.isSet
}

func (v *NullableSplitMultiRoomReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSplitMultiRoomReservation(val *SplitMultiRoomReservation) *NullableSplitMultiRoomReservation {
	return &NullableSplitMultiRoomReservation{value: val, isSet: true}
}

func (v NullableSplitMultiRoomReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSplitMultiRoomReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


