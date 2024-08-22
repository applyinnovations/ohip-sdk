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

// checks if the ReservationsToMerge type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationsToMerge{}

// ReservationsToMerge Request method to Merge reservations.
type ReservationsToMerge struct {
	FromReservationID *UniqueIDType `json:"fromReservationID,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ToReservationIDList []UniqueIDType `json:"toReservationIDList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationsToMerge instantiates a new ReservationsToMerge object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationsToMerge() *ReservationsToMerge {
	this := ReservationsToMerge{}
	return &this
}

// NewReservationsToMergeWithDefaults instantiates a new ReservationsToMerge object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationsToMergeWithDefaults() *ReservationsToMerge {
	this := ReservationsToMerge{}
	return &this
}

// GetFromReservationID returns the FromReservationID field value if set, zero value otherwise.
func (o *ReservationsToMerge) GetFromReservationID() UniqueIDType {
	if o == nil || IsNil(o.FromReservationID) {
		var ret UniqueIDType
		return ret
	}
	return *o.FromReservationID
}

// GetFromReservationIDOk returns a tuple with the FromReservationID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsToMerge) GetFromReservationIDOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.FromReservationID) {
		return nil, false
	}
	return o.FromReservationID, true
}

// HasFromReservationID returns a boolean if a field has been set.
func (o *ReservationsToMerge) HasFromReservationID() bool {
	if o != nil && !IsNil(o.FromReservationID) {
		return true
	}

	return false
}

// SetFromReservationID gets a reference to the given UniqueIDType and assigns it to the FromReservationID field.
func (o *ReservationsToMerge) SetFromReservationID(v UniqueIDType) {
	o.FromReservationID = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReservationsToMerge) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsToMerge) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReservationsToMerge) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReservationsToMerge) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationsToMerge) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsToMerge) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationsToMerge) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationsToMerge) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetToReservationIDList returns the ToReservationIDList field value if set, zero value otherwise.
func (o *ReservationsToMerge) GetToReservationIDList() []UniqueIDType {
	if o == nil || IsNil(o.ToReservationIDList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ToReservationIDList
}

// GetToReservationIDListOk returns a tuple with the ToReservationIDList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsToMerge) GetToReservationIDListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ToReservationIDList) {
		return nil, false
	}
	return o.ToReservationIDList, true
}

// HasToReservationIDList returns a boolean if a field has been set.
func (o *ReservationsToMerge) HasToReservationIDList() bool {
	if o != nil && !IsNil(o.ToReservationIDList) {
		return true
	}

	return false
}

// SetToReservationIDList gets a reference to the given []UniqueIDType and assigns it to the ToReservationIDList field.
func (o *ReservationsToMerge) SetToReservationIDList(v []UniqueIDType) {
	o.ToReservationIDList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationsToMerge) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationsToMerge) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationsToMerge) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationsToMerge) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationsToMerge) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationsToMerge) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FromReservationID) {
		toSerialize["fromReservationID"] = o.FromReservationID
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ToReservationIDList) {
		toSerialize["toReservationIDList"] = o.ToReservationIDList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationsToMerge struct {
	value *ReservationsToMerge
	isSet bool
}

func (v NullableReservationsToMerge) Get() *ReservationsToMerge {
	return v.value
}

func (v *NullableReservationsToMerge) Set(val *ReservationsToMerge) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationsToMerge) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationsToMerge) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationsToMerge(val *ReservationsToMerge) *NullableReservationsToMerge {
	return &NullableReservationsToMerge{value: val, isSet: true}
}

func (v NullableReservationsToMerge) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationsToMerge) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


