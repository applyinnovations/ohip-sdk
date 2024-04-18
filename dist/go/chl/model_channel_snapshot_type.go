/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelSnapshotType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelSnapshotType{}

// ChannelSnapshotType Inventory statistic and restriction information for a given date.
type ChannelSnapshotType struct {
	// Number of available rooms.
	AvailableRooms *float32 `json:"availableRooms,omitempty"`
	// Date of the statistics and restrictions.
	Date *string `json:"date,omitempty"`
	// Number of rooms in inventory.
	InventoryRooms *float32 `json:"inventoryRooms,omitempty"`
	// Provides the basic Restriction type details, specifically used in snapshot operations for efficiency.
	RestrictionsInfo []RestrictionInfoType `json:"restrictionsInfo,omitempty"`
	// Number of rooms sold.
	RoomsSold *float32 `json:"roomsSold,omitempty"`
	// Number of overbooking rooms allowed.
	SellLimit *float32 `json:"sellLimit,omitempty"`
	// Number of tentative rooms sold - does not include definite reservations.
	TentativeRoomsSold *float32 `json:"tentativeRoomsSold,omitempty"`
}

// NewChannelSnapshotType instantiates a new ChannelSnapshotType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelSnapshotType() *ChannelSnapshotType {
	this := ChannelSnapshotType{}
	return &this
}

// NewChannelSnapshotTypeWithDefaults instantiates a new ChannelSnapshotType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelSnapshotTypeWithDefaults() *ChannelSnapshotType {
	this := ChannelSnapshotType{}
	return &this
}

// GetAvailableRooms returns the AvailableRooms field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetAvailableRooms() float32 {
	if o == nil || IsNil(o.AvailableRooms) {
		var ret float32
		return ret
	}
	return *o.AvailableRooms
}

// GetAvailableRoomsOk returns a tuple with the AvailableRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetAvailableRoomsOk() (*float32, bool) {
	if o == nil || IsNil(o.AvailableRooms) {
		return nil, false
	}
	return o.AvailableRooms, true
}

// HasAvailableRooms returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasAvailableRooms() bool {
	if o != nil && !IsNil(o.AvailableRooms) {
		return true
	}

	return false
}

// SetAvailableRooms gets a reference to the given float32 and assigns it to the AvailableRooms field.
func (o *ChannelSnapshotType) SetAvailableRooms(v float32) {
	o.AvailableRooms = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ChannelSnapshotType) SetDate(v string) {
	o.Date = &v
}

// GetInventoryRooms returns the InventoryRooms field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetInventoryRooms() float32 {
	if o == nil || IsNil(o.InventoryRooms) {
		var ret float32
		return ret
	}
	return *o.InventoryRooms
}

// GetInventoryRoomsOk returns a tuple with the InventoryRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetInventoryRoomsOk() (*float32, bool) {
	if o == nil || IsNil(o.InventoryRooms) {
		return nil, false
	}
	return o.InventoryRooms, true
}

// HasInventoryRooms returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasInventoryRooms() bool {
	if o != nil && !IsNil(o.InventoryRooms) {
		return true
	}

	return false
}

// SetInventoryRooms gets a reference to the given float32 and assigns it to the InventoryRooms field.
func (o *ChannelSnapshotType) SetInventoryRooms(v float32) {
	o.InventoryRooms = &v
}

// GetRestrictionsInfo returns the RestrictionsInfo field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetRestrictionsInfo() []RestrictionInfoType {
	if o == nil || IsNil(o.RestrictionsInfo) {
		var ret []RestrictionInfoType
		return ret
	}
	return o.RestrictionsInfo
}

// GetRestrictionsInfoOk returns a tuple with the RestrictionsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetRestrictionsInfoOk() ([]RestrictionInfoType, bool) {
	if o == nil || IsNil(o.RestrictionsInfo) {
		return nil, false
	}
	return o.RestrictionsInfo, true
}

// HasRestrictionsInfo returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasRestrictionsInfo() bool {
	if o != nil && !IsNil(o.RestrictionsInfo) {
		return true
	}

	return false
}

// SetRestrictionsInfo gets a reference to the given []RestrictionInfoType and assigns it to the RestrictionsInfo field.
func (o *ChannelSnapshotType) SetRestrictionsInfo(v []RestrictionInfoType) {
	o.RestrictionsInfo = v
}

// GetRoomsSold returns the RoomsSold field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetRoomsSold() float32 {
	if o == nil || IsNil(o.RoomsSold) {
		var ret float32
		return ret
	}
	return *o.RoomsSold
}

// GetRoomsSoldOk returns a tuple with the RoomsSold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetRoomsSoldOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomsSold) {
		return nil, false
	}
	return o.RoomsSold, true
}

// HasRoomsSold returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasRoomsSold() bool {
	if o != nil && !IsNil(o.RoomsSold) {
		return true
	}

	return false
}

// SetRoomsSold gets a reference to the given float32 and assigns it to the RoomsSold field.
func (o *ChannelSnapshotType) SetRoomsSold(v float32) {
	o.RoomsSold = &v
}

// GetSellLimit returns the SellLimit field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetSellLimit() float32 {
	if o == nil || IsNil(o.SellLimit) {
		var ret float32
		return ret
	}
	return *o.SellLimit
}

// GetSellLimitOk returns a tuple with the SellLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetSellLimitOk() (*float32, bool) {
	if o == nil || IsNil(o.SellLimit) {
		return nil, false
	}
	return o.SellLimit, true
}

// HasSellLimit returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasSellLimit() bool {
	if o != nil && !IsNil(o.SellLimit) {
		return true
	}

	return false
}

// SetSellLimit gets a reference to the given float32 and assigns it to the SellLimit field.
func (o *ChannelSnapshotType) SetSellLimit(v float32) {
	o.SellLimit = &v
}

// GetTentativeRoomsSold returns the TentativeRoomsSold field value if set, zero value otherwise.
func (o *ChannelSnapshotType) GetTentativeRoomsSold() float32 {
	if o == nil || IsNil(o.TentativeRoomsSold) {
		var ret float32
		return ret
	}
	return *o.TentativeRoomsSold
}

// GetTentativeRoomsSoldOk returns a tuple with the TentativeRoomsSold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelSnapshotType) GetTentativeRoomsSoldOk() (*float32, bool) {
	if o == nil || IsNil(o.TentativeRoomsSold) {
		return nil, false
	}
	return o.TentativeRoomsSold, true
}

// HasTentativeRoomsSold returns a boolean if a field has been set.
func (o *ChannelSnapshotType) HasTentativeRoomsSold() bool {
	if o != nil && !IsNil(o.TentativeRoomsSold) {
		return true
	}

	return false
}

// SetTentativeRoomsSold gets a reference to the given float32 and assigns it to the TentativeRoomsSold field.
func (o *ChannelSnapshotType) SetTentativeRoomsSold(v float32) {
	o.TentativeRoomsSold = &v
}

func (o ChannelSnapshotType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelSnapshotType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AvailableRooms) {
		toSerialize["availableRooms"] = o.AvailableRooms
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.InventoryRooms) {
		toSerialize["inventoryRooms"] = o.InventoryRooms
	}
	if !IsNil(o.RestrictionsInfo) {
		toSerialize["restrictionsInfo"] = o.RestrictionsInfo
	}
	if !IsNil(o.RoomsSold) {
		toSerialize["roomsSold"] = o.RoomsSold
	}
	if !IsNil(o.SellLimit) {
		toSerialize["sellLimit"] = o.SellLimit
	}
	if !IsNil(o.TentativeRoomsSold) {
		toSerialize["tentativeRoomsSold"] = o.TentativeRoomsSold
	}
	return toSerialize, nil
}

type NullableChannelSnapshotType struct {
	value *ChannelSnapshotType
	isSet bool
}

func (v NullableChannelSnapshotType) Get() *ChannelSnapshotType {
	return v.value
}

func (v *NullableChannelSnapshotType) Set(val *ChannelSnapshotType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelSnapshotType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelSnapshotType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelSnapshotType(val *ChannelSnapshotType) *NullableChannelSnapshotType {
	return &NullableChannelSnapshotType{value: val, isSet: true}
}

func (v NullableChannelSnapshotType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelSnapshotType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

