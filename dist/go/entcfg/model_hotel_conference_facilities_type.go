/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelConferenceFacilitiesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelConferenceFacilitiesType{}

// HotelConferenceFacilitiesType struct for HotelConferenceFacilitiesType
type HotelConferenceFacilitiesType struct {
	HotelBanquetSpace *HotelBanquetSpaceType `json:"hotelBanquetSpace,omitempty"`
	HotelConferenceRooms []HotelConferenceRoomType `json:"hotelConferenceRooms,omitempty"`
}

// NewHotelConferenceFacilitiesType instantiates a new HotelConferenceFacilitiesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelConferenceFacilitiesType() *HotelConferenceFacilitiesType {
	this := HotelConferenceFacilitiesType{}
	return &this
}

// NewHotelConferenceFacilitiesTypeWithDefaults instantiates a new HotelConferenceFacilitiesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelConferenceFacilitiesTypeWithDefaults() *HotelConferenceFacilitiesType {
	this := HotelConferenceFacilitiesType{}
	return &this
}

// GetHotelBanquetSpace returns the HotelBanquetSpace field value if set, zero value otherwise.
func (o *HotelConferenceFacilitiesType) GetHotelBanquetSpace() HotelBanquetSpaceType {
	if o == nil || IsNil(o.HotelBanquetSpace) {
		var ret HotelBanquetSpaceType
		return ret
	}
	return *o.HotelBanquetSpace
}

// GetHotelBanquetSpaceOk returns a tuple with the HotelBanquetSpace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelConferenceFacilitiesType) GetHotelBanquetSpaceOk() (*HotelBanquetSpaceType, bool) {
	if o == nil || IsNil(o.HotelBanquetSpace) {
		return nil, false
	}
	return o.HotelBanquetSpace, true
}

// HasHotelBanquetSpace returns a boolean if a field has been set.
func (o *HotelConferenceFacilitiesType) HasHotelBanquetSpace() bool {
	if o != nil && !IsNil(o.HotelBanquetSpace) {
		return true
	}

	return false
}

// SetHotelBanquetSpace gets a reference to the given HotelBanquetSpaceType and assigns it to the HotelBanquetSpace field.
func (o *HotelConferenceFacilitiesType) SetHotelBanquetSpace(v HotelBanquetSpaceType) {
	o.HotelBanquetSpace = &v
}

// GetHotelConferenceRooms returns the HotelConferenceRooms field value if set, zero value otherwise.
func (o *HotelConferenceFacilitiesType) GetHotelConferenceRooms() []HotelConferenceRoomType {
	if o == nil || IsNil(o.HotelConferenceRooms) {
		var ret []HotelConferenceRoomType
		return ret
	}
	return o.HotelConferenceRooms
}

// GetHotelConferenceRoomsOk returns a tuple with the HotelConferenceRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelConferenceFacilitiesType) GetHotelConferenceRoomsOk() ([]HotelConferenceRoomType, bool) {
	if o == nil || IsNil(o.HotelConferenceRooms) {
		return nil, false
	}
	return o.HotelConferenceRooms, true
}

// HasHotelConferenceRooms returns a boolean if a field has been set.
func (o *HotelConferenceFacilitiesType) HasHotelConferenceRooms() bool {
	if o != nil && !IsNil(o.HotelConferenceRooms) {
		return true
	}

	return false
}

// SetHotelConferenceRooms gets a reference to the given []HotelConferenceRoomType and assigns it to the HotelConferenceRooms field.
func (o *HotelConferenceFacilitiesType) SetHotelConferenceRooms(v []HotelConferenceRoomType) {
	o.HotelConferenceRooms = v
}

func (o HotelConferenceFacilitiesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelConferenceFacilitiesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelBanquetSpace) {
		toSerialize["hotelBanquetSpace"] = o.HotelBanquetSpace
	}
	if !IsNil(o.HotelConferenceRooms) {
		toSerialize["hotelConferenceRooms"] = o.HotelConferenceRooms
	}
	return toSerialize, nil
}

type NullableHotelConferenceFacilitiesType struct {
	value *HotelConferenceFacilitiesType
	isSet bool
}

func (v NullableHotelConferenceFacilitiesType) Get() *HotelConferenceFacilitiesType {
	return v.value
}

func (v *NullableHotelConferenceFacilitiesType) Set(val *HotelConferenceFacilitiesType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelConferenceFacilitiesType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelConferenceFacilitiesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelConferenceFacilitiesType(val *HotelConferenceFacilitiesType) *NullableHotelConferenceFacilitiesType {
	return &NullableHotelConferenceFacilitiesType{value: val, isSet: true}
}

func (v NullableHotelConferenceFacilitiesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelConferenceFacilitiesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


