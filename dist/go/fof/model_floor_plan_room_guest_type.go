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

// checks if the FloorPlanRoomGuestType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FloorPlanRoomGuestType{}

// FloorPlanRoomGuestType struct for FloorPlanRoomGuestType
type FloorPlanRoomGuestType struct {
	Arrival *string `json:"arrival,omitempty"`
	ConfirmationNo *string `json:"confirmationNo,omitempty"`
	Departure *string `json:"departure,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	ShareID *string `json:"shareID,omitempty"`
}

// NewFloorPlanRoomGuestType instantiates a new FloorPlanRoomGuestType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFloorPlanRoomGuestType() *FloorPlanRoomGuestType {
	this := FloorPlanRoomGuestType{}
	return &this
}

// NewFloorPlanRoomGuestTypeWithDefaults instantiates a new FloorPlanRoomGuestType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFloorPlanRoomGuestTypeWithDefaults() *FloorPlanRoomGuestType {
	this := FloorPlanRoomGuestType{}
	return &this
}

// GetArrival returns the Arrival field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetArrival() string {
	if o == nil || IsNil(o.Arrival) {
		var ret string
		return ret
	}
	return *o.Arrival
}

// GetArrivalOk returns a tuple with the Arrival field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetArrivalOk() (*string, bool) {
	if o == nil || IsNil(o.Arrival) {
		return nil, false
	}
	return o.Arrival, true
}

// HasArrival returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasArrival() bool {
	if o != nil && !IsNil(o.Arrival) {
		return true
	}

	return false
}

// SetArrival gets a reference to the given string and assigns it to the Arrival field.
func (o *FloorPlanRoomGuestType) SetArrival(v string) {
	o.Arrival = &v
}

// GetConfirmationNo returns the ConfirmationNo field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetConfirmationNo() string {
	if o == nil || IsNil(o.ConfirmationNo) {
		var ret string
		return ret
	}
	return *o.ConfirmationNo
}

// GetConfirmationNoOk returns a tuple with the ConfirmationNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetConfirmationNoOk() (*string, bool) {
	if o == nil || IsNil(o.ConfirmationNo) {
		return nil, false
	}
	return o.ConfirmationNo, true
}

// HasConfirmationNo returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasConfirmationNo() bool {
	if o != nil && !IsNil(o.ConfirmationNo) {
		return true
	}

	return false
}

// SetConfirmationNo gets a reference to the given string and assigns it to the ConfirmationNo field.
func (o *FloorPlanRoomGuestType) SetConfirmationNo(v string) {
	o.ConfirmationNo = &v
}

// GetDeparture returns the Departure field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetDeparture() string {
	if o == nil || IsNil(o.Departure) {
		var ret string
		return ret
	}
	return *o.Departure
}

// GetDepartureOk returns a tuple with the Departure field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetDepartureOk() (*string, bool) {
	if o == nil || IsNil(o.Departure) {
		return nil, false
	}
	return o.Departure, true
}

// HasDeparture returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasDeparture() bool {
	if o != nil && !IsNil(o.Departure) {
		return true
	}

	return false
}

// SetDeparture gets a reference to the given string and assigns it to the Departure field.
func (o *FloorPlanRoomGuestType) SetDeparture(v string) {
	o.Departure = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *FloorPlanRoomGuestType) SetFirstName(v string) {
	o.FirstName = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *FloorPlanRoomGuestType) SetLastName(v string) {
	o.LastName = &v
}

// GetShareID returns the ShareID field value if set, zero value otherwise.
func (o *FloorPlanRoomGuestType) GetShareID() string {
	if o == nil || IsNil(o.ShareID) {
		var ret string
		return ret
	}
	return *o.ShareID
}

// GetShareIDOk returns a tuple with the ShareID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorPlanRoomGuestType) GetShareIDOk() (*string, bool) {
	if o == nil || IsNil(o.ShareID) {
		return nil, false
	}
	return o.ShareID, true
}

// HasShareID returns a boolean if a field has been set.
func (o *FloorPlanRoomGuestType) HasShareID() bool {
	if o != nil && !IsNil(o.ShareID) {
		return true
	}

	return false
}

// SetShareID gets a reference to the given string and assigns it to the ShareID field.
func (o *FloorPlanRoomGuestType) SetShareID(v string) {
	o.ShareID = &v
}

func (o FloorPlanRoomGuestType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FloorPlanRoomGuestType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Arrival) {
		toSerialize["arrival"] = o.Arrival
	}
	if !IsNil(o.ConfirmationNo) {
		toSerialize["confirmationNo"] = o.ConfirmationNo
	}
	if !IsNil(o.Departure) {
		toSerialize["departure"] = o.Departure
	}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.LastName) {
		toSerialize["lastName"] = o.LastName
	}
	if !IsNil(o.ShareID) {
		toSerialize["shareID"] = o.ShareID
	}
	return toSerialize, nil
}

type NullableFloorPlanRoomGuestType struct {
	value *FloorPlanRoomGuestType
	isSet bool
}

func (v NullableFloorPlanRoomGuestType) Get() *FloorPlanRoomGuestType {
	return v.value
}

func (v *NullableFloorPlanRoomGuestType) Set(val *FloorPlanRoomGuestType) {
	v.value = val
	v.isSet = true
}

func (v NullableFloorPlanRoomGuestType) IsSet() bool {
	return v.isSet
}

func (v *NullableFloorPlanRoomGuestType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFloorPlanRoomGuestType(val *FloorPlanRoomGuestType) *NullableFloorPlanRoomGuestType {
	return &NullableFloorPlanRoomGuestType{value: val, isSet: true}
}

func (v NullableFloorPlanRoomGuestType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFloorPlanRoomGuestType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

