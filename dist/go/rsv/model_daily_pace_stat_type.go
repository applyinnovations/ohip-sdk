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

// checks if the DailyPaceStatType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DailyPaceStatType{}

// DailyPaceStatType An instance or a day of a reservation pace statistic.
type DailyPaceStatType struct {
	Channel *string `json:"channel,omitempty"`
	// The day to which the information belongs.
	ConsideredDate *string `json:"consideredDate,omitempty"`
	// Number of rooms reserved.
	Rooms *int32 `json:"rooms,omitempty"`
}

// NewDailyPaceStatType instantiates a new DailyPaceStatType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDailyPaceStatType() *DailyPaceStatType {
	this := DailyPaceStatType{}
	return &this
}

// NewDailyPaceStatTypeWithDefaults instantiates a new DailyPaceStatType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDailyPaceStatTypeWithDefaults() *DailyPaceStatType {
	this := DailyPaceStatType{}
	return &this
}

// GetChannel returns the Channel field value if set, zero value otherwise.
func (o *DailyPaceStatType) GetChannel() string {
	if o == nil || IsNil(o.Channel) {
		var ret string
		return ret
	}
	return *o.Channel
}

// GetChannelOk returns a tuple with the Channel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPaceStatType) GetChannelOk() (*string, bool) {
	if o == nil || IsNil(o.Channel) {
		return nil, false
	}
	return o.Channel, true
}

// HasChannel returns a boolean if a field has been set.
func (o *DailyPaceStatType) HasChannel() bool {
	if o != nil && !IsNil(o.Channel) {
		return true
	}

	return false
}

// SetChannel gets a reference to the given string and assigns it to the Channel field.
func (o *DailyPaceStatType) SetChannel(v string) {
	o.Channel = &v
}

// GetConsideredDate returns the ConsideredDate field value if set, zero value otherwise.
func (o *DailyPaceStatType) GetConsideredDate() string {
	if o == nil || IsNil(o.ConsideredDate) {
		var ret string
		return ret
	}
	return *o.ConsideredDate
}

// GetConsideredDateOk returns a tuple with the ConsideredDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPaceStatType) GetConsideredDateOk() (*string, bool) {
	if o == nil || IsNil(o.ConsideredDate) {
		return nil, false
	}
	return o.ConsideredDate, true
}

// HasConsideredDate returns a boolean if a field has been set.
func (o *DailyPaceStatType) HasConsideredDate() bool {
	if o != nil && !IsNil(o.ConsideredDate) {
		return true
	}

	return false
}

// SetConsideredDate gets a reference to the given string and assigns it to the ConsideredDate field.
func (o *DailyPaceStatType) SetConsideredDate(v string) {
	o.ConsideredDate = &v
}

// GetRooms returns the Rooms field value if set, zero value otherwise.
func (o *DailyPaceStatType) GetRooms() int32 {
	if o == nil || IsNil(o.Rooms) {
		var ret int32
		return ret
	}
	return *o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyPaceStatType) GetRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.Rooms) {
		return nil, false
	}
	return o.Rooms, true
}

// HasRooms returns a boolean if a field has been set.
func (o *DailyPaceStatType) HasRooms() bool {
	if o != nil && !IsNil(o.Rooms) {
		return true
	}

	return false
}

// SetRooms gets a reference to the given int32 and assigns it to the Rooms field.
func (o *DailyPaceStatType) SetRooms(v int32) {
	o.Rooms = &v
}

func (o DailyPaceStatType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DailyPaceStatType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Channel) {
		toSerialize["channel"] = o.Channel
	}
	if !IsNil(o.ConsideredDate) {
		toSerialize["consideredDate"] = o.ConsideredDate
	}
	if !IsNil(o.Rooms) {
		toSerialize["rooms"] = o.Rooms
	}
	return toSerialize, nil
}

type NullableDailyPaceStatType struct {
	value *DailyPaceStatType
	isSet bool
}

func (v NullableDailyPaceStatType) Get() *DailyPaceStatType {
	return v.value
}

func (v *NullableDailyPaceStatType) Set(val *DailyPaceStatType) {
	v.value = val
	v.isSet = true
}

func (v NullableDailyPaceStatType) IsSet() bool {
	return v.isSet
}

func (v *NullableDailyPaceStatType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDailyPaceStatType(val *DailyPaceStatType) *NullableDailyPaceStatType {
	return &NullableDailyPaceStatType{value: val, isSet: true}
}

func (v NullableDailyPaceStatType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDailyPaceStatType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


