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

// checks if the ReinstateReservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReinstateReservation{}

// ReinstateReservation Overriding the validation check will log the supposed errors in the warnings log if they would fail.
type ReinstateReservation struct {
	// Unique Id that references an object uniquely in the system.
	AdditionalReservationIdList []UniqueIDType `json:"additionalReservationIdList,omitempty"`
	// Collection of effective rate amount per guest on specific dates.
	EffectiveRates []EffectiveRateType `json:"effectiveRates,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Flag that indicates if room inventory check should be skipped when the reservation is being reinstated.
	OverrideInventory *bool `json:"overrideInventory,omitempty"`
	// Flag that indicates if rate code inventory check should be skipped when the reservation is being reinstated.
	OverrideRates *bool `json:"overrideRates,omitempty"`
	// Flag that indicates if the check on room allocation should be skipped.
	OverrideRoomAllocation *bool `json:"overrideRoomAllocation,omitempty"`
	// Flag that indicates if the check on the housekeeping status for out of service should be skipped.
	OverrideRoomOutOfService *bool `json:"overrideRoomOutOfService,omitempty"`
	Reservation *HotelReservationType `json:"reservation,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	ReservationLockHandle *float32 `json:"reservationLockHandle,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReinstateReservation instantiates a new ReinstateReservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReinstateReservation() *ReinstateReservation {
	this := ReinstateReservation{}
	return &this
}

// NewReinstateReservationWithDefaults instantiates a new ReinstateReservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReinstateReservationWithDefaults() *ReinstateReservation {
	this := ReinstateReservation{}
	return &this
}

// GetAdditionalReservationIdList returns the AdditionalReservationIdList field value if set, zero value otherwise.
func (o *ReinstateReservation) GetAdditionalReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.AdditionalReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.AdditionalReservationIdList
}

// GetAdditionalReservationIdListOk returns a tuple with the AdditionalReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetAdditionalReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.AdditionalReservationIdList) {
		return nil, false
	}
	return o.AdditionalReservationIdList, true
}

// HasAdditionalReservationIdList returns a boolean if a field has been set.
func (o *ReinstateReservation) HasAdditionalReservationIdList() bool {
	if o != nil && !IsNil(o.AdditionalReservationIdList) {
		return true
	}

	return false
}

// SetAdditionalReservationIdList gets a reference to the given []UniqueIDType and assigns it to the AdditionalReservationIdList field.
func (o *ReinstateReservation) SetAdditionalReservationIdList(v []UniqueIDType) {
	o.AdditionalReservationIdList = v
}

// GetEffectiveRates returns the EffectiveRates field value if set, zero value otherwise.
func (o *ReinstateReservation) GetEffectiveRates() []EffectiveRateType {
	if o == nil || IsNil(o.EffectiveRates) {
		var ret []EffectiveRateType
		return ret
	}
	return o.EffectiveRates
}

// GetEffectiveRatesOk returns a tuple with the EffectiveRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetEffectiveRatesOk() ([]EffectiveRateType, bool) {
	if o == nil || IsNil(o.EffectiveRates) {
		return nil, false
	}
	return o.EffectiveRates, true
}

// HasEffectiveRates returns a boolean if a field has been set.
func (o *ReinstateReservation) HasEffectiveRates() bool {
	if o != nil && !IsNil(o.EffectiveRates) {
		return true
	}

	return false
}

// SetEffectiveRates gets a reference to the given []EffectiveRateType and assigns it to the EffectiveRates field.
func (o *ReinstateReservation) SetEffectiveRates(v []EffectiveRateType) {
	o.EffectiveRates = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReinstateReservation) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReinstateReservation) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReinstateReservation) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReinstateReservation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReinstateReservation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReinstateReservation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOverrideInventory returns the OverrideInventory field value if set, zero value otherwise.
func (o *ReinstateReservation) GetOverrideInventory() bool {
	if o == nil || IsNil(o.OverrideInventory) {
		var ret bool
		return ret
	}
	return *o.OverrideInventory
}

// GetOverrideInventoryOk returns a tuple with the OverrideInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetOverrideInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideInventory) {
		return nil, false
	}
	return o.OverrideInventory, true
}

// HasOverrideInventory returns a boolean if a field has been set.
func (o *ReinstateReservation) HasOverrideInventory() bool {
	if o != nil && !IsNil(o.OverrideInventory) {
		return true
	}

	return false
}

// SetOverrideInventory gets a reference to the given bool and assigns it to the OverrideInventory field.
func (o *ReinstateReservation) SetOverrideInventory(v bool) {
	o.OverrideInventory = &v
}

// GetOverrideRates returns the OverrideRates field value if set, zero value otherwise.
func (o *ReinstateReservation) GetOverrideRates() bool {
	if o == nil || IsNil(o.OverrideRates) {
		var ret bool
		return ret
	}
	return *o.OverrideRates
}

// GetOverrideRatesOk returns a tuple with the OverrideRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetOverrideRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideRates) {
		return nil, false
	}
	return o.OverrideRates, true
}

// HasOverrideRates returns a boolean if a field has been set.
func (o *ReinstateReservation) HasOverrideRates() bool {
	if o != nil && !IsNil(o.OverrideRates) {
		return true
	}

	return false
}

// SetOverrideRates gets a reference to the given bool and assigns it to the OverrideRates field.
func (o *ReinstateReservation) SetOverrideRates(v bool) {
	o.OverrideRates = &v
}

// GetOverrideRoomAllocation returns the OverrideRoomAllocation field value if set, zero value otherwise.
func (o *ReinstateReservation) GetOverrideRoomAllocation() bool {
	if o == nil || IsNil(o.OverrideRoomAllocation) {
		var ret bool
		return ret
	}
	return *o.OverrideRoomAllocation
}

// GetOverrideRoomAllocationOk returns a tuple with the OverrideRoomAllocation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetOverrideRoomAllocationOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideRoomAllocation) {
		return nil, false
	}
	return o.OverrideRoomAllocation, true
}

// HasOverrideRoomAllocation returns a boolean if a field has been set.
func (o *ReinstateReservation) HasOverrideRoomAllocation() bool {
	if o != nil && !IsNil(o.OverrideRoomAllocation) {
		return true
	}

	return false
}

// SetOverrideRoomAllocation gets a reference to the given bool and assigns it to the OverrideRoomAllocation field.
func (o *ReinstateReservation) SetOverrideRoomAllocation(v bool) {
	o.OverrideRoomAllocation = &v
}

// GetOverrideRoomOutOfService returns the OverrideRoomOutOfService field value if set, zero value otherwise.
func (o *ReinstateReservation) GetOverrideRoomOutOfService() bool {
	if o == nil || IsNil(o.OverrideRoomOutOfService) {
		var ret bool
		return ret
	}
	return *o.OverrideRoomOutOfService
}

// GetOverrideRoomOutOfServiceOk returns a tuple with the OverrideRoomOutOfService field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetOverrideRoomOutOfServiceOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideRoomOutOfService) {
		return nil, false
	}
	return o.OverrideRoomOutOfService, true
}

// HasOverrideRoomOutOfService returns a boolean if a field has been set.
func (o *ReinstateReservation) HasOverrideRoomOutOfService() bool {
	if o != nil && !IsNil(o.OverrideRoomOutOfService) {
		return true
	}

	return false
}

// SetOverrideRoomOutOfService gets a reference to the given bool and assigns it to the OverrideRoomOutOfService field.
func (o *ReinstateReservation) SetOverrideRoomOutOfService(v bool) {
	o.OverrideRoomOutOfService = &v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *ReinstateReservation) GetReservation() HotelReservationType {
	if o == nil || IsNil(o.Reservation) {
		var ret HotelReservationType
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetReservationOk() (*HotelReservationType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *ReinstateReservation) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given HotelReservationType and assigns it to the Reservation field.
func (o *ReinstateReservation) SetReservation(v HotelReservationType) {
	o.Reservation = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *ReinstateReservation) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *ReinstateReservation) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *ReinstateReservation) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetReservationLockHandle returns the ReservationLockHandle field value if set, zero value otherwise.
func (o *ReinstateReservation) GetReservationLockHandle() float32 {
	if o == nil || IsNil(o.ReservationLockHandle) {
		var ret float32
		return ret
	}
	return *o.ReservationLockHandle
}

// GetReservationLockHandleOk returns a tuple with the ReservationLockHandle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetReservationLockHandleOk() (*float32, bool) {
	if o == nil || IsNil(o.ReservationLockHandle) {
		return nil, false
	}
	return o.ReservationLockHandle, true
}

// HasReservationLockHandle returns a boolean if a field has been set.
func (o *ReinstateReservation) HasReservationLockHandle() bool {
	if o != nil && !IsNil(o.ReservationLockHandle) {
		return true
	}

	return false
}

// SetReservationLockHandle gets a reference to the given float32 and assigns it to the ReservationLockHandle field.
func (o *ReinstateReservation) SetReservationLockHandle(v float32) {
	o.ReservationLockHandle = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReinstateReservation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReinstateReservation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReinstateReservation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReinstateReservation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReinstateReservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReinstateReservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalReservationIdList) {
		toSerialize["additionalReservationIdList"] = o.AdditionalReservationIdList
	}
	if !IsNil(o.EffectiveRates) {
		toSerialize["effectiveRates"] = o.EffectiveRates
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.OverrideInventory) {
		toSerialize["overrideInventory"] = o.OverrideInventory
	}
	if !IsNil(o.OverrideRates) {
		toSerialize["overrideRates"] = o.OverrideRates
	}
	if !IsNil(o.OverrideRoomAllocation) {
		toSerialize["overrideRoomAllocation"] = o.OverrideRoomAllocation
	}
	if !IsNil(o.OverrideRoomOutOfService) {
		toSerialize["overrideRoomOutOfService"] = o.OverrideRoomOutOfService
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.ReservationLockHandle) {
		toSerialize["reservationLockHandle"] = o.ReservationLockHandle
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReinstateReservation struct {
	value *ReinstateReservation
	isSet bool
}

func (v NullableReinstateReservation) Get() *ReinstateReservation {
	return v.value
}

func (v *NullableReinstateReservation) Set(val *ReinstateReservation) {
	v.value = val
	v.isSet = true
}

func (v NullableReinstateReservation) IsSet() bool {
	return v.isSet
}

func (v *NullableReinstateReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReinstateReservation(val *ReinstateReservation) *NullableReinstateReservation {
	return &NullableReinstateReservation{value: val, isSet: true}
}

func (v NullableReinstateReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReinstateReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


