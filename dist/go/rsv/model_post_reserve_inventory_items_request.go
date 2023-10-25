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

// checks if the PostReserveInventoryItemsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostReserveInventoryItemsRequest{}

// PostReserveInventoryItemsRequest struct for PostReserveInventoryItemsRequest
type PostReserveInventoryItemsRequest struct {
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	InventoryItems *ResInventoryItemsType `json:"inventoryItems,omitempty"`
	// ID of an Hold Item
	ItemHoldIdList []float32 `json:"itemHoldIdList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostReserveInventoryItemsRequest instantiates a new PostReserveInventoryItemsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostReserveInventoryItemsRequest() *PostReserveInventoryItemsRequest {
	this := PostReserveInventoryItemsRequest{}
	return &this
}

// NewPostReserveInventoryItemsRequestWithDefaults instantiates a new PostReserveInventoryItemsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostReserveInventoryItemsRequestWithDefaults() *PostReserveInventoryItemsRequest {
	this := PostReserveInventoryItemsRequest{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PostReserveInventoryItemsRequest) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInventoryItems returns the InventoryItems field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetInventoryItems() ResInventoryItemsType {
	if o == nil || IsNil(o.InventoryItems) {
		var ret ResInventoryItemsType
		return ret
	}
	return *o.InventoryItems
}

// GetInventoryItemsOk returns a tuple with the InventoryItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetInventoryItemsOk() (*ResInventoryItemsType, bool) {
	if o == nil || IsNil(o.InventoryItems) {
		return nil, false
	}
	return o.InventoryItems, true
}

// HasInventoryItems returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasInventoryItems() bool {
	if o != nil && !IsNil(o.InventoryItems) {
		return true
	}

	return false
}

// SetInventoryItems gets a reference to the given ResInventoryItemsType and assigns it to the InventoryItems field.
func (o *PostReserveInventoryItemsRequest) SetInventoryItems(v ResInventoryItemsType) {
	o.InventoryItems = &v
}

// GetItemHoldIdList returns the ItemHoldIdList field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetItemHoldIdList() []float32 {
	if o == nil || IsNil(o.ItemHoldIdList) {
		var ret []float32
		return ret
	}
	return o.ItemHoldIdList
}

// GetItemHoldIdListOk returns a tuple with the ItemHoldIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetItemHoldIdListOk() ([]float32, bool) {
	if o == nil || IsNil(o.ItemHoldIdList) {
		return nil, false
	}
	return o.ItemHoldIdList, true
}

// HasItemHoldIdList returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasItemHoldIdList() bool {
	if o != nil && !IsNil(o.ItemHoldIdList) {
		return true
	}

	return false
}

// SetItemHoldIdList gets a reference to the given []float32 and assigns it to the ItemHoldIdList field.
func (o *PostReserveInventoryItemsRequest) SetItemHoldIdList(v []float32) {
	o.ItemHoldIdList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostReserveInventoryItemsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *PostReserveInventoryItemsRequest) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostReserveInventoryItemsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostReserveInventoryItemsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostReserveInventoryItemsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostReserveInventoryItemsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostReserveInventoryItemsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostReserveInventoryItemsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InventoryItems) {
		toSerialize["inventoryItems"] = o.InventoryItems
	}
	if !IsNil(o.ItemHoldIdList) {
		toSerialize["itemHoldIdList"] = o.ItemHoldIdList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostReserveInventoryItemsRequest struct {
	value *PostReserveInventoryItemsRequest
	isSet bool
}

func (v NullablePostReserveInventoryItemsRequest) Get() *PostReserveInventoryItemsRequest {
	return v.value
}

func (v *NullablePostReserveInventoryItemsRequest) Set(val *PostReserveInventoryItemsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostReserveInventoryItemsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostReserveInventoryItemsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostReserveInventoryItemsRequest(val *PostReserveInventoryItemsRequest) *NullablePostReserveInventoryItemsRequest {
	return &NullablePostReserveInventoryItemsRequest{value: val, isSet: true}
}

func (v NullablePostReserveInventoryItemsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostReserveInventoryItemsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


