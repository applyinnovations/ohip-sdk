/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the RoomAllocationInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomAllocationInfoType{}

// RoomAllocationInfoType A collection of Allocation objects for a block that indicate room inventory or rate amounts.
type RoomAllocationInfoType struct {
	// Indicates the values of room available room grid inventory's summary.
	AvailableRoomGridInvSummary []BlockGridInvType `json:"availableRoomGridInvSummary,omitempty"`
	// Indicates if the current date will require automatic block extension.
	ExtendedStay *bool `json:"extendedStay,omitempty"`
	// Indicates the values of room inventory or rate amounts.
	RoomGridDetails []RoomGridDetailsType `json:"roomGridDetails,omitempty"`
	// Indicates the values of room inventory's summary.
	RoomGridInvSummary []BlockGridInvType `json:"roomGridInvSummary,omitempty"`
	// Indicates the date of the room allocation or rate amount.
	StayDate *string `json:"stayDate,omitempty"`
}

// NewRoomAllocationInfoType instantiates a new RoomAllocationInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomAllocationInfoType() *RoomAllocationInfoType {
	this := RoomAllocationInfoType{}
	return &this
}

// NewRoomAllocationInfoTypeWithDefaults instantiates a new RoomAllocationInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomAllocationInfoTypeWithDefaults() *RoomAllocationInfoType {
	this := RoomAllocationInfoType{}
	return &this
}

// GetAvailableRoomGridInvSummary returns the AvailableRoomGridInvSummary field value if set, zero value otherwise.
func (o *RoomAllocationInfoType) GetAvailableRoomGridInvSummary() []BlockGridInvType {
	if o == nil || IsNil(o.AvailableRoomGridInvSummary) {
		var ret []BlockGridInvType
		return ret
	}
	return o.AvailableRoomGridInvSummary
}

// GetAvailableRoomGridInvSummaryOk returns a tuple with the AvailableRoomGridInvSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationInfoType) GetAvailableRoomGridInvSummaryOk() ([]BlockGridInvType, bool) {
	if o == nil || IsNil(o.AvailableRoomGridInvSummary) {
		return nil, false
	}
	return o.AvailableRoomGridInvSummary, true
}

// HasAvailableRoomGridInvSummary returns a boolean if a field has been set.
func (o *RoomAllocationInfoType) HasAvailableRoomGridInvSummary() bool {
	if o != nil && !IsNil(o.AvailableRoomGridInvSummary) {
		return true
	}

	return false
}

// SetAvailableRoomGridInvSummary gets a reference to the given []BlockGridInvType and assigns it to the AvailableRoomGridInvSummary field.
func (o *RoomAllocationInfoType) SetAvailableRoomGridInvSummary(v []BlockGridInvType) {
	o.AvailableRoomGridInvSummary = v
}

// GetExtendedStay returns the ExtendedStay field value if set, zero value otherwise.
func (o *RoomAllocationInfoType) GetExtendedStay() bool {
	if o == nil || IsNil(o.ExtendedStay) {
		var ret bool
		return ret
	}
	return *o.ExtendedStay
}

// GetExtendedStayOk returns a tuple with the ExtendedStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationInfoType) GetExtendedStayOk() (*bool, bool) {
	if o == nil || IsNil(o.ExtendedStay) {
		return nil, false
	}
	return o.ExtendedStay, true
}

// HasExtendedStay returns a boolean if a field has been set.
func (o *RoomAllocationInfoType) HasExtendedStay() bool {
	if o != nil && !IsNil(o.ExtendedStay) {
		return true
	}

	return false
}

// SetExtendedStay gets a reference to the given bool and assigns it to the ExtendedStay field.
func (o *RoomAllocationInfoType) SetExtendedStay(v bool) {
	o.ExtendedStay = &v
}

// GetRoomGridDetails returns the RoomGridDetails field value if set, zero value otherwise.
func (o *RoomAllocationInfoType) GetRoomGridDetails() []RoomGridDetailsType {
	if o == nil || IsNil(o.RoomGridDetails) {
		var ret []RoomGridDetailsType
		return ret
	}
	return o.RoomGridDetails
}

// GetRoomGridDetailsOk returns a tuple with the RoomGridDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationInfoType) GetRoomGridDetailsOk() ([]RoomGridDetailsType, bool) {
	if o == nil || IsNil(o.RoomGridDetails) {
		return nil, false
	}
	return o.RoomGridDetails, true
}

// HasRoomGridDetails returns a boolean if a field has been set.
func (o *RoomAllocationInfoType) HasRoomGridDetails() bool {
	if o != nil && !IsNil(o.RoomGridDetails) {
		return true
	}

	return false
}

// SetRoomGridDetails gets a reference to the given []RoomGridDetailsType and assigns it to the RoomGridDetails field.
func (o *RoomAllocationInfoType) SetRoomGridDetails(v []RoomGridDetailsType) {
	o.RoomGridDetails = v
}

// GetRoomGridInvSummary returns the RoomGridInvSummary field value if set, zero value otherwise.
func (o *RoomAllocationInfoType) GetRoomGridInvSummary() []BlockGridInvType {
	if o == nil || IsNil(o.RoomGridInvSummary) {
		var ret []BlockGridInvType
		return ret
	}
	return o.RoomGridInvSummary
}

// GetRoomGridInvSummaryOk returns a tuple with the RoomGridInvSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationInfoType) GetRoomGridInvSummaryOk() ([]BlockGridInvType, bool) {
	if o == nil || IsNil(o.RoomGridInvSummary) {
		return nil, false
	}
	return o.RoomGridInvSummary, true
}

// HasRoomGridInvSummary returns a boolean if a field has been set.
func (o *RoomAllocationInfoType) HasRoomGridInvSummary() bool {
	if o != nil && !IsNil(o.RoomGridInvSummary) {
		return true
	}

	return false
}

// SetRoomGridInvSummary gets a reference to the given []BlockGridInvType and assigns it to the RoomGridInvSummary field.
func (o *RoomAllocationInfoType) SetRoomGridInvSummary(v []BlockGridInvType) {
	o.RoomGridInvSummary = v
}

// GetStayDate returns the StayDate field value if set, zero value otherwise.
func (o *RoomAllocationInfoType) GetStayDate() string {
	if o == nil || IsNil(o.StayDate) {
		var ret string
		return ret
	}
	return *o.StayDate
}

// GetStayDateOk returns a tuple with the StayDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationInfoType) GetStayDateOk() (*string, bool) {
	if o == nil || IsNil(o.StayDate) {
		return nil, false
	}
	return o.StayDate, true
}

// HasStayDate returns a boolean if a field has been set.
func (o *RoomAllocationInfoType) HasStayDate() bool {
	if o != nil && !IsNil(o.StayDate) {
		return true
	}

	return false
}

// SetStayDate gets a reference to the given string and assigns it to the StayDate field.
func (o *RoomAllocationInfoType) SetStayDate(v string) {
	o.StayDate = &v
}

func (o RoomAllocationInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomAllocationInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AvailableRoomGridInvSummary) {
		toSerialize["availableRoomGridInvSummary"] = o.AvailableRoomGridInvSummary
	}
	if !IsNil(o.ExtendedStay) {
		toSerialize["extendedStay"] = o.ExtendedStay
	}
	if !IsNil(o.RoomGridDetails) {
		toSerialize["roomGridDetails"] = o.RoomGridDetails
	}
	if !IsNil(o.RoomGridInvSummary) {
		toSerialize["roomGridInvSummary"] = o.RoomGridInvSummary
	}
	if !IsNil(o.StayDate) {
		toSerialize["stayDate"] = o.StayDate
	}
	return toSerialize, nil
}

type NullableRoomAllocationInfoType struct {
	value *RoomAllocationInfoType
	isSet bool
}

func (v NullableRoomAllocationInfoType) Get() *RoomAllocationInfoType {
	return v.value
}

func (v *NullableRoomAllocationInfoType) Set(val *RoomAllocationInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomAllocationInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomAllocationInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomAllocationInfoType(val *RoomAllocationInfoType) *NullableRoomAllocationInfoType {
	return &NullableRoomAllocationInfoType{value: val, isSet: true}
}

func (v NullableRoomAllocationInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomAllocationInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


