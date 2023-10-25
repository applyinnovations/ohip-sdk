/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingTaskSheetRoomType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskSheetRoomType{}

// HousekeepingTaskSheetRoomType Details used for storing information about a housekeeping room
type HousekeepingTaskSheetRoomType struct {
	// Specifies the building to which the housekeeping room is mapped to. This element will be used only if the BUILDINGS parameter is active.
	Building *string `json:"building,omitempty"`
	// Specifies the day section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active.
	DaySectionCode *string `json:"daySectionCode,omitempty"`
	// Specifies the evening section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active.
	EveningSectionCode *string `json:"eveningSectionCode,omitempty"`
	// Specifies the floor to which the housekeeping room is mapped to
	Floor *string `json:"floor,omitempty"`
	// Specifies the hotel code of the housekeeping room
	HotelId *string `json:"hotelId,omitempty"`
	// Specifies the housekeeping room code
	Room *string `json:"room,omitempty"`
	// This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM. Room credits can be defined for Stayover, Turndown, Departure and Pickup. For Turndown Credits to be used, the TURNDOWN parameter should be active and HOUSEKEEPING_CREDITS setting should be set to a value other than NONE. For Pickup Credits to be used, the PICKUP_STATUS parameter should be active.
	RoomCredit []HousekeepingCreditsType `json:"roomCredit,omitempty"`
	// Specifies the housekeeping room type
	RoomType *string `json:"roomType,omitempty"`
	RuleCredit *HousekeepingTaskSheetRoomTypeRuleCredit `json:"ruleCredit,omitempty"`
	// Specifies the sorting sequence number for the housekeeping room
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewHousekeepingTaskSheetRoomType instantiates a new HousekeepingTaskSheetRoomType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskSheetRoomType() *HousekeepingTaskSheetRoomType {
	this := HousekeepingTaskSheetRoomType{}
	return &this
}

// NewHousekeepingTaskSheetRoomTypeWithDefaults instantiates a new HousekeepingTaskSheetRoomType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskSheetRoomTypeWithDefaults() *HousekeepingTaskSheetRoomType {
	this := HousekeepingTaskSheetRoomType{}
	return &this
}

// GetBuilding returns the Building field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetBuilding() string {
	if o == nil || IsNil(o.Building) {
		var ret string
		return ret
	}
	return *o.Building
}

// GetBuildingOk returns a tuple with the Building field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetBuildingOk() (*string, bool) {
	if o == nil || IsNil(o.Building) {
		return nil, false
	}
	return o.Building, true
}

// HasBuilding returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasBuilding() bool {
	if o != nil && !IsNil(o.Building) {
		return true
	}

	return false
}

// SetBuilding gets a reference to the given string and assigns it to the Building field.
func (o *HousekeepingTaskSheetRoomType) SetBuilding(v string) {
	o.Building = &v
}

// GetDaySectionCode returns the DaySectionCode field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetDaySectionCode() string {
	if o == nil || IsNil(o.DaySectionCode) {
		var ret string
		return ret
	}
	return *o.DaySectionCode
}

// GetDaySectionCodeOk returns a tuple with the DaySectionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetDaySectionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DaySectionCode) {
		return nil, false
	}
	return o.DaySectionCode, true
}

// HasDaySectionCode returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasDaySectionCode() bool {
	if o != nil && !IsNil(o.DaySectionCode) {
		return true
	}

	return false
}

// SetDaySectionCode gets a reference to the given string and assigns it to the DaySectionCode field.
func (o *HousekeepingTaskSheetRoomType) SetDaySectionCode(v string) {
	o.DaySectionCode = &v
}

// GetEveningSectionCode returns the EveningSectionCode field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetEveningSectionCode() string {
	if o == nil || IsNil(o.EveningSectionCode) {
		var ret string
		return ret
	}
	return *o.EveningSectionCode
}

// GetEveningSectionCodeOk returns a tuple with the EveningSectionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetEveningSectionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.EveningSectionCode) {
		return nil, false
	}
	return o.EveningSectionCode, true
}

// HasEveningSectionCode returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasEveningSectionCode() bool {
	if o != nil && !IsNil(o.EveningSectionCode) {
		return true
	}

	return false
}

// SetEveningSectionCode gets a reference to the given string and assigns it to the EveningSectionCode field.
func (o *HousekeepingTaskSheetRoomType) SetEveningSectionCode(v string) {
	o.EveningSectionCode = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *HousekeepingTaskSheetRoomType) SetFloor(v string) {
	o.Floor = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingTaskSheetRoomType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetRoom() string {
	if o == nil || IsNil(o.Room) {
		var ret string
		return ret
	}
	return *o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetRoomOk() (*string, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given string and assigns it to the Room field.
func (o *HousekeepingTaskSheetRoomType) SetRoom(v string) {
	o.Room = &v
}

// GetRoomCredit returns the RoomCredit field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetRoomCredit() []HousekeepingCreditsType {
	if o == nil || IsNil(o.RoomCredit) {
		var ret []HousekeepingCreditsType
		return ret
	}
	return o.RoomCredit
}

// GetRoomCreditOk returns a tuple with the RoomCredit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetRoomCreditOk() ([]HousekeepingCreditsType, bool) {
	if o == nil || IsNil(o.RoomCredit) {
		return nil, false
	}
	return o.RoomCredit, true
}

// HasRoomCredit returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasRoomCredit() bool {
	if o != nil && !IsNil(o.RoomCredit) {
		return true
	}

	return false
}

// SetRoomCredit gets a reference to the given []HousekeepingCreditsType and assigns it to the RoomCredit field.
func (o *HousekeepingTaskSheetRoomType) SetRoomCredit(v []HousekeepingCreditsType) {
	o.RoomCredit = v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *HousekeepingTaskSheetRoomType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRuleCredit returns the RuleCredit field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetRuleCredit() HousekeepingTaskSheetRoomTypeRuleCredit {
	if o == nil || IsNil(o.RuleCredit) {
		var ret HousekeepingTaskSheetRoomTypeRuleCredit
		return ret
	}
	return *o.RuleCredit
}

// GetRuleCreditOk returns a tuple with the RuleCredit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetRuleCreditOk() (*HousekeepingTaskSheetRoomTypeRuleCredit, bool) {
	if o == nil || IsNil(o.RuleCredit) {
		return nil, false
	}
	return o.RuleCredit, true
}

// HasRuleCredit returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasRuleCredit() bool {
	if o != nil && !IsNil(o.RuleCredit) {
		return true
	}

	return false
}

// SetRuleCredit gets a reference to the given HousekeepingTaskSheetRoomTypeRuleCredit and assigns it to the RuleCredit field.
func (o *HousekeepingTaskSheetRoomType) SetRuleCredit(v HousekeepingTaskSheetRoomTypeRuleCredit) {
	o.RuleCredit = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *HousekeepingTaskSheetRoomType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o HousekeepingTaskSheetRoomType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskSheetRoomType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Building) {
		toSerialize["building"] = o.Building
	}
	if !IsNil(o.DaySectionCode) {
		toSerialize["daySectionCode"] = o.DaySectionCode
	}
	if !IsNil(o.EveningSectionCode) {
		toSerialize["eveningSectionCode"] = o.EveningSectionCode
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	if !IsNil(o.RoomCredit) {
		toSerialize["roomCredit"] = o.RoomCredit
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RuleCredit) {
		toSerialize["ruleCredit"] = o.RuleCredit
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskSheetRoomType struct {
	value *HousekeepingTaskSheetRoomType
	isSet bool
}

func (v NullableHousekeepingTaskSheetRoomType) Get() *HousekeepingTaskSheetRoomType {
	return v.value
}

func (v *NullableHousekeepingTaskSheetRoomType) Set(val *HousekeepingTaskSheetRoomType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskSheetRoomType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskSheetRoomType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskSheetRoomType(val *HousekeepingTaskSheetRoomType) *NullableHousekeepingTaskSheetRoomType {
	return &NullableHousekeepingTaskSheetRoomType{value: val, isSet: true}
}

func (v NullableHousekeepingTaskSheetRoomType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskSheetRoomType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


