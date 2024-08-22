/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the HousekeepingScheduleShiftRequestType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingScheduleShiftRequestType{}

// HousekeepingScheduleShiftRequestType Criteria type for fetching reservation housekeeping schedule.
type HousekeepingScheduleShiftRequestType struct {
	// Begin date from which to start fetching facility tasks.
	BeginDate *string `json:"beginDate,omitempty"`
	// End date for facility task schedule request.
	EndDate *string `json:"endDate,omitempty"`
	// The hotel code where reservation is made.
	HotelId *string `json:"hotelId,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	ShiftDay *HousekeepingScheduleShiftDayType `json:"shiftDay,omitempty"`
}

// NewHousekeepingScheduleShiftRequestType instantiates a new HousekeepingScheduleShiftRequestType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingScheduleShiftRequestType() *HousekeepingScheduleShiftRequestType {
	this := HousekeepingScheduleShiftRequestType{}
	return &this
}

// NewHousekeepingScheduleShiftRequestTypeWithDefaults instantiates a new HousekeepingScheduleShiftRequestType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingScheduleShiftRequestTypeWithDefaults() *HousekeepingScheduleShiftRequestType {
	this := HousekeepingScheduleShiftRequestType{}
	return &this
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftRequestType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftRequestType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftRequestType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *HousekeepingScheduleShiftRequestType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftRequestType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftRequestType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftRequestType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *HousekeepingScheduleShiftRequestType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftRequestType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftRequestType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftRequestType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingScheduleShiftRequestType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftRequestType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftRequestType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftRequestType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *HousekeepingScheduleShiftRequestType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetShiftDay returns the ShiftDay field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftRequestType) GetShiftDay() HousekeepingScheduleShiftDayType {
	if o == nil || IsNil(o.ShiftDay) {
		var ret HousekeepingScheduleShiftDayType
		return ret
	}
	return *o.ShiftDay
}

// GetShiftDayOk returns a tuple with the ShiftDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftRequestType) GetShiftDayOk() (*HousekeepingScheduleShiftDayType, bool) {
	if o == nil || IsNil(o.ShiftDay) {
		return nil, false
	}
	return o.ShiftDay, true
}

// HasShiftDay returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftRequestType) HasShiftDay() bool {
	if o != nil && !IsNil(o.ShiftDay) {
		return true
	}

	return false
}

// SetShiftDay gets a reference to the given HousekeepingScheduleShiftDayType and assigns it to the ShiftDay field.
func (o *HousekeepingScheduleShiftRequestType) SetShiftDay(v HousekeepingScheduleShiftDayType) {
	o.ShiftDay = &v
}

func (o HousekeepingScheduleShiftRequestType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingScheduleShiftRequestType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ShiftDay) {
		toSerialize["shiftDay"] = o.ShiftDay
	}
	return toSerialize, nil
}

type NullableHousekeepingScheduleShiftRequestType struct {
	value *HousekeepingScheduleShiftRequestType
	isSet bool
}

func (v NullableHousekeepingScheduleShiftRequestType) Get() *HousekeepingScheduleShiftRequestType {
	return v.value
}

func (v *NullableHousekeepingScheduleShiftRequestType) Set(val *HousekeepingScheduleShiftRequestType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingScheduleShiftRequestType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingScheduleShiftRequestType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingScheduleShiftRequestType(val *HousekeepingScheduleShiftRequestType) *NullableHousekeepingScheduleShiftRequestType {
	return &NullableHousekeepingScheduleShiftRequestType{value: val, isSet: true}
}

func (v NullableHousekeepingScheduleShiftRequestType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingScheduleShiftRequestType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


