/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the HotelRevenueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRevenueType{}

// HotelRevenueType Hotel revenue type.
type HotelRevenueType struct {
	// Total comp revenue for this hotel.
	CompRevenue *float32 `json:"compRevenue,omitempty"`
	// Total comp rooms for this hotel.
	CompRooms *float32 `json:"compRooms,omitempty"`
	// The base currency code for this hotel.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Total house revenue for this hotel.
	HouseRevenue *float32 `json:"houseRevenue,omitempty"`
	// Total house rooms for this hotel.
	HouseRooms *float32 `json:"houseRooms,omitempty"`
	// Total occupied revenue for this hotel.
	OccupiedRooms *float32 `json:"occupiedRooms,omitempty"`
	// Total room revenue for this hotel.
	RoomRevenue *float32 `json:"roomRevenue,omitempty"`
	// Total zero rooms revenue for this hotel.
	ZeroRoomsRevenue *float32 `json:"zeroRoomsRevenue,omitempty"`
}

// NewHotelRevenueType instantiates a new HotelRevenueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRevenueType() *HotelRevenueType {
	this := HotelRevenueType{}
	return &this
}

// NewHotelRevenueTypeWithDefaults instantiates a new HotelRevenueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRevenueTypeWithDefaults() *HotelRevenueType {
	this := HotelRevenueType{}
	return &this
}

// GetCompRevenue returns the CompRevenue field value if set, zero value otherwise.
func (o *HotelRevenueType) GetCompRevenue() float32 {
	if o == nil || IsNil(o.CompRevenue) {
		var ret float32
		return ret
	}
	return *o.CompRevenue
}

// GetCompRevenueOk returns a tuple with the CompRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetCompRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.CompRevenue) {
		return nil, false
	}
	return o.CompRevenue, true
}

// HasCompRevenue returns a boolean if a field has been set.
func (o *HotelRevenueType) HasCompRevenue() bool {
	if o != nil && !IsNil(o.CompRevenue) {
		return true
	}

	return false
}

// SetCompRevenue gets a reference to the given float32 and assigns it to the CompRevenue field.
func (o *HotelRevenueType) SetCompRevenue(v float32) {
	o.CompRevenue = &v
}

// GetCompRooms returns the CompRooms field value if set, zero value otherwise.
func (o *HotelRevenueType) GetCompRooms() float32 {
	if o == nil || IsNil(o.CompRooms) {
		var ret float32
		return ret
	}
	return *o.CompRooms
}

// GetCompRoomsOk returns a tuple with the CompRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetCompRoomsOk() (*float32, bool) {
	if o == nil || IsNil(o.CompRooms) {
		return nil, false
	}
	return o.CompRooms, true
}

// HasCompRooms returns a boolean if a field has been set.
func (o *HotelRevenueType) HasCompRooms() bool {
	if o != nil && !IsNil(o.CompRooms) {
		return true
	}

	return false
}

// SetCompRooms gets a reference to the given float32 and assigns it to the CompRooms field.
func (o *HotelRevenueType) SetCompRooms(v float32) {
	o.CompRooms = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *HotelRevenueType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *HotelRevenueType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *HotelRevenueType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetHouseRevenue returns the HouseRevenue field value if set, zero value otherwise.
func (o *HotelRevenueType) GetHouseRevenue() float32 {
	if o == nil || IsNil(o.HouseRevenue) {
		var ret float32
		return ret
	}
	return *o.HouseRevenue
}

// GetHouseRevenueOk returns a tuple with the HouseRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetHouseRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.HouseRevenue) {
		return nil, false
	}
	return o.HouseRevenue, true
}

// HasHouseRevenue returns a boolean if a field has been set.
func (o *HotelRevenueType) HasHouseRevenue() bool {
	if o != nil && !IsNil(o.HouseRevenue) {
		return true
	}

	return false
}

// SetHouseRevenue gets a reference to the given float32 and assigns it to the HouseRevenue field.
func (o *HotelRevenueType) SetHouseRevenue(v float32) {
	o.HouseRevenue = &v
}

// GetHouseRooms returns the HouseRooms field value if set, zero value otherwise.
func (o *HotelRevenueType) GetHouseRooms() float32 {
	if o == nil || IsNil(o.HouseRooms) {
		var ret float32
		return ret
	}
	return *o.HouseRooms
}

// GetHouseRoomsOk returns a tuple with the HouseRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetHouseRoomsOk() (*float32, bool) {
	if o == nil || IsNil(o.HouseRooms) {
		return nil, false
	}
	return o.HouseRooms, true
}

// HasHouseRooms returns a boolean if a field has been set.
func (o *HotelRevenueType) HasHouseRooms() bool {
	if o != nil && !IsNil(o.HouseRooms) {
		return true
	}

	return false
}

// SetHouseRooms gets a reference to the given float32 and assigns it to the HouseRooms field.
func (o *HotelRevenueType) SetHouseRooms(v float32) {
	o.HouseRooms = &v
}

// GetOccupiedRooms returns the OccupiedRooms field value if set, zero value otherwise.
func (o *HotelRevenueType) GetOccupiedRooms() float32 {
	if o == nil || IsNil(o.OccupiedRooms) {
		var ret float32
		return ret
	}
	return *o.OccupiedRooms
}

// GetOccupiedRoomsOk returns a tuple with the OccupiedRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetOccupiedRoomsOk() (*float32, bool) {
	if o == nil || IsNil(o.OccupiedRooms) {
		return nil, false
	}
	return o.OccupiedRooms, true
}

// HasOccupiedRooms returns a boolean if a field has been set.
func (o *HotelRevenueType) HasOccupiedRooms() bool {
	if o != nil && !IsNil(o.OccupiedRooms) {
		return true
	}

	return false
}

// SetOccupiedRooms gets a reference to the given float32 and assigns it to the OccupiedRooms field.
func (o *HotelRevenueType) SetOccupiedRooms(v float32) {
	o.OccupiedRooms = &v
}

// GetRoomRevenue returns the RoomRevenue field value if set, zero value otherwise.
func (o *HotelRevenueType) GetRoomRevenue() float32 {
	if o == nil || IsNil(o.RoomRevenue) {
		var ret float32
		return ret
	}
	return *o.RoomRevenue
}

// GetRoomRevenueOk returns a tuple with the RoomRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetRoomRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomRevenue) {
		return nil, false
	}
	return o.RoomRevenue, true
}

// HasRoomRevenue returns a boolean if a field has been set.
func (o *HotelRevenueType) HasRoomRevenue() bool {
	if o != nil && !IsNil(o.RoomRevenue) {
		return true
	}

	return false
}

// SetRoomRevenue gets a reference to the given float32 and assigns it to the RoomRevenue field.
func (o *HotelRevenueType) SetRoomRevenue(v float32) {
	o.RoomRevenue = &v
}

// GetZeroRoomsRevenue returns the ZeroRoomsRevenue field value if set, zero value otherwise.
func (o *HotelRevenueType) GetZeroRoomsRevenue() float32 {
	if o == nil || IsNil(o.ZeroRoomsRevenue) {
		var ret float32
		return ret
	}
	return *o.ZeroRoomsRevenue
}

// GetZeroRoomsRevenueOk returns a tuple with the ZeroRoomsRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRevenueType) GetZeroRoomsRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.ZeroRoomsRevenue) {
		return nil, false
	}
	return o.ZeroRoomsRevenue, true
}

// HasZeroRoomsRevenue returns a boolean if a field has been set.
func (o *HotelRevenueType) HasZeroRoomsRevenue() bool {
	if o != nil && !IsNil(o.ZeroRoomsRevenue) {
		return true
	}

	return false
}

// SetZeroRoomsRevenue gets a reference to the given float32 and assigns it to the ZeroRoomsRevenue field.
func (o *HotelRevenueType) SetZeroRoomsRevenue(v float32) {
	o.ZeroRoomsRevenue = &v
}

func (o HotelRevenueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRevenueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompRevenue) {
		toSerialize["compRevenue"] = o.CompRevenue
	}
	if !IsNil(o.CompRooms) {
		toSerialize["compRooms"] = o.CompRooms
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.HouseRevenue) {
		toSerialize["houseRevenue"] = o.HouseRevenue
	}
	if !IsNil(o.HouseRooms) {
		toSerialize["houseRooms"] = o.HouseRooms
	}
	if !IsNil(o.OccupiedRooms) {
		toSerialize["occupiedRooms"] = o.OccupiedRooms
	}
	if !IsNil(o.RoomRevenue) {
		toSerialize["roomRevenue"] = o.RoomRevenue
	}
	if !IsNil(o.ZeroRoomsRevenue) {
		toSerialize["zeroRoomsRevenue"] = o.ZeroRoomsRevenue
	}
	return toSerialize, nil
}

type NullableHotelRevenueType struct {
	value *HotelRevenueType
	isSet bool
}

func (v NullableHotelRevenueType) Get() *HotelRevenueType {
	return v.value
}

func (v *NullableHotelRevenueType) Set(val *HotelRevenueType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRevenueType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRevenueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRevenueType(val *HotelRevenueType) *NullableHotelRevenueType {
	return &NullableHotelRevenueType{value: val, isSet: true}
}

func (v NullableHotelRevenueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRevenueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

