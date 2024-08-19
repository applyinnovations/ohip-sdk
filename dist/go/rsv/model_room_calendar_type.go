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

// checks if the RoomCalendarType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomCalendarType{}

// RoomCalendarType Room Calendar entry that holds Room and Reservation Information.
type RoomCalendarType struct {
	// The resort of the Room Calendar.
	HotelId *string `json:"hotelId,omitempty"`
	// Current Page the group of Rooms is included in.
	PageIndex *int32 `json:"pageIndex,omitempty"`
	// Number of records per page.
	RecordsPerPage *int32 `json:"recordsPerPage,omitempty"`
	// Holds the Room Information.
	Room []RoomCalendarInfoType `json:"room,omitempty"`
	// Total Numebr of Rooms.
	TotalRooms *int32 `json:"totalRooms,omitempty"`
}

// NewRoomCalendarType instantiates a new RoomCalendarType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomCalendarType() *RoomCalendarType {
	this := RoomCalendarType{}
	return &this
}

// NewRoomCalendarTypeWithDefaults instantiates a new RoomCalendarType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomCalendarTypeWithDefaults() *RoomCalendarType {
	this := RoomCalendarType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomCalendarType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCalendarType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomCalendarType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomCalendarType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPageIndex returns the PageIndex field value if set, zero value otherwise.
func (o *RoomCalendarType) GetPageIndex() int32 {
	if o == nil || IsNil(o.PageIndex) {
		var ret int32
		return ret
	}
	return *o.PageIndex
}

// GetPageIndexOk returns a tuple with the PageIndex field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCalendarType) GetPageIndexOk() (*int32, bool) {
	if o == nil || IsNil(o.PageIndex) {
		return nil, false
	}
	return o.PageIndex, true
}

// HasPageIndex returns a boolean if a field has been set.
func (o *RoomCalendarType) HasPageIndex() bool {
	if o != nil && !IsNil(o.PageIndex) {
		return true
	}

	return false
}

// SetPageIndex gets a reference to the given int32 and assigns it to the PageIndex field.
func (o *RoomCalendarType) SetPageIndex(v int32) {
	o.PageIndex = &v
}

// GetRecordsPerPage returns the RecordsPerPage field value if set, zero value otherwise.
func (o *RoomCalendarType) GetRecordsPerPage() int32 {
	if o == nil || IsNil(o.RecordsPerPage) {
		var ret int32
		return ret
	}
	return *o.RecordsPerPage
}

// GetRecordsPerPageOk returns a tuple with the RecordsPerPage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCalendarType) GetRecordsPerPageOk() (*int32, bool) {
	if o == nil || IsNil(o.RecordsPerPage) {
		return nil, false
	}
	return o.RecordsPerPage, true
}

// HasRecordsPerPage returns a boolean if a field has been set.
func (o *RoomCalendarType) HasRecordsPerPage() bool {
	if o != nil && !IsNil(o.RecordsPerPage) {
		return true
	}

	return false
}

// SetRecordsPerPage gets a reference to the given int32 and assigns it to the RecordsPerPage field.
func (o *RoomCalendarType) SetRecordsPerPage(v int32) {
	o.RecordsPerPage = &v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *RoomCalendarType) GetRoom() []RoomCalendarInfoType {
	if o == nil || IsNil(o.Room) {
		var ret []RoomCalendarInfoType
		return ret
	}
	return o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCalendarType) GetRoomOk() ([]RoomCalendarInfoType, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *RoomCalendarType) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given []RoomCalendarInfoType and assigns it to the Room field.
func (o *RoomCalendarType) SetRoom(v []RoomCalendarInfoType) {
	o.Room = v
}

// GetTotalRooms returns the TotalRooms field value if set, zero value otherwise.
func (o *RoomCalendarType) GetTotalRooms() int32 {
	if o == nil || IsNil(o.TotalRooms) {
		var ret int32
		return ret
	}
	return *o.TotalRooms
}

// GetTotalRoomsOk returns a tuple with the TotalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCalendarType) GetTotalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRooms) {
		return nil, false
	}
	return o.TotalRooms, true
}

// HasTotalRooms returns a boolean if a field has been set.
func (o *RoomCalendarType) HasTotalRooms() bool {
	if o != nil && !IsNil(o.TotalRooms) {
		return true
	}

	return false
}

// SetTotalRooms gets a reference to the given int32 and assigns it to the TotalRooms field.
func (o *RoomCalendarType) SetTotalRooms(v int32) {
	o.TotalRooms = &v
}

func (o RoomCalendarType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomCalendarType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PageIndex) {
		toSerialize["pageIndex"] = o.PageIndex
	}
	if !IsNil(o.RecordsPerPage) {
		toSerialize["recordsPerPage"] = o.RecordsPerPage
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	if !IsNil(o.TotalRooms) {
		toSerialize["totalRooms"] = o.TotalRooms
	}
	return toSerialize, nil
}

type NullableRoomCalendarType struct {
	value *RoomCalendarType
	isSet bool
}

func (v NullableRoomCalendarType) Get() *RoomCalendarType {
	return v.value
}

func (v *NullableRoomCalendarType) Set(val *RoomCalendarType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomCalendarType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomCalendarType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomCalendarType(val *RoomCalendarType) *NullableRoomCalendarType {
	return &NullableRoomCalendarType{value: val, isSet: true}
}

func (v NullableRoomCalendarType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomCalendarType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


