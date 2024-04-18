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

// checks if the LeadInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LeadInfoType{}

// LeadInfoType struct for LeadInfoType
type LeadInfoType struct {
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	// Lead description.
	BlockName *string `json:"blockName,omitempty"`
	BlockStatus *BookingStatusType `json:"blockStatus,omitempty"`
	BlockType *BlockClassificationType `json:"blockType,omitempty"`
	CateringStatus *BookingStatusType `json:"cateringStatus,omitempty"`
	// Hotel Id.
	HotelId *string `json:"hotelId,omitempty"`
	// Number of blocked rooms for the lead.
	RoomNightsBlocked *int32 `json:"roomNightsBlocked,omitempty"`
	// Number of reserved rooms for the lead.
	RoomNightsPickedup *int32 `json:"roomNightsPickedup,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewLeadInfoType instantiates a new LeadInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLeadInfoType() *LeadInfoType {
	this := LeadInfoType{}
	return &this
}

// NewLeadInfoTypeWithDefaults instantiates a new LeadInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLeadInfoTypeWithDefaults() *LeadInfoType {
	this := LeadInfoType{}
	return &this
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *LeadInfoType) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *LeadInfoType) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *LeadInfoType) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetBlockName returns the BlockName field value if set, zero value otherwise.
func (o *LeadInfoType) GetBlockName() string {
	if o == nil || IsNil(o.BlockName) {
		var ret string
		return ret
	}
	return *o.BlockName
}

// GetBlockNameOk returns a tuple with the BlockName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetBlockNameOk() (*string, bool) {
	if o == nil || IsNil(o.BlockName) {
		return nil, false
	}
	return o.BlockName, true
}

// HasBlockName returns a boolean if a field has been set.
func (o *LeadInfoType) HasBlockName() bool {
	if o != nil && !IsNil(o.BlockName) {
		return true
	}

	return false
}

// SetBlockName gets a reference to the given string and assigns it to the BlockName field.
func (o *LeadInfoType) SetBlockName(v string) {
	o.BlockName = &v
}

// GetBlockStatus returns the BlockStatus field value if set, zero value otherwise.
func (o *LeadInfoType) GetBlockStatus() BookingStatusType {
	if o == nil || IsNil(o.BlockStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.BlockStatus
}

// GetBlockStatusOk returns a tuple with the BlockStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetBlockStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.BlockStatus) {
		return nil, false
	}
	return o.BlockStatus, true
}

// HasBlockStatus returns a boolean if a field has been set.
func (o *LeadInfoType) HasBlockStatus() bool {
	if o != nil && !IsNil(o.BlockStatus) {
		return true
	}

	return false
}

// SetBlockStatus gets a reference to the given BookingStatusType and assigns it to the BlockStatus field.
func (o *LeadInfoType) SetBlockStatus(v BookingStatusType) {
	o.BlockStatus = &v
}

// GetBlockType returns the BlockType field value if set, zero value otherwise.
func (o *LeadInfoType) GetBlockType() BlockClassificationType {
	if o == nil || IsNil(o.BlockType) {
		var ret BlockClassificationType
		return ret
	}
	return *o.BlockType
}

// GetBlockTypeOk returns a tuple with the BlockType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetBlockTypeOk() (*BlockClassificationType, bool) {
	if o == nil || IsNil(o.BlockType) {
		return nil, false
	}
	return o.BlockType, true
}

// HasBlockType returns a boolean if a field has been set.
func (o *LeadInfoType) HasBlockType() bool {
	if o != nil && !IsNil(o.BlockType) {
		return true
	}

	return false
}

// SetBlockType gets a reference to the given BlockClassificationType and assigns it to the BlockType field.
func (o *LeadInfoType) SetBlockType(v BlockClassificationType) {
	o.BlockType = &v
}

// GetCateringStatus returns the CateringStatus field value if set, zero value otherwise.
func (o *LeadInfoType) GetCateringStatus() BookingStatusType {
	if o == nil || IsNil(o.CateringStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.CateringStatus
}

// GetCateringStatusOk returns a tuple with the CateringStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetCateringStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.CateringStatus) {
		return nil, false
	}
	return o.CateringStatus, true
}

// HasCateringStatus returns a boolean if a field has been set.
func (o *LeadInfoType) HasCateringStatus() bool {
	if o != nil && !IsNil(o.CateringStatus) {
		return true
	}

	return false
}

// SetCateringStatus gets a reference to the given BookingStatusType and assigns it to the CateringStatus field.
func (o *LeadInfoType) SetCateringStatus(v BookingStatusType) {
	o.CateringStatus = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *LeadInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *LeadInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *LeadInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomNightsBlocked returns the RoomNightsBlocked field value if set, zero value otherwise.
func (o *LeadInfoType) GetRoomNightsBlocked() int32 {
	if o == nil || IsNil(o.RoomNightsBlocked) {
		var ret int32
		return ret
	}
	return *o.RoomNightsBlocked
}

// GetRoomNightsBlockedOk returns a tuple with the RoomNightsBlocked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetRoomNightsBlockedOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomNightsBlocked) {
		return nil, false
	}
	return o.RoomNightsBlocked, true
}

// HasRoomNightsBlocked returns a boolean if a field has been set.
func (o *LeadInfoType) HasRoomNightsBlocked() bool {
	if o != nil && !IsNil(o.RoomNightsBlocked) {
		return true
	}

	return false
}

// SetRoomNightsBlocked gets a reference to the given int32 and assigns it to the RoomNightsBlocked field.
func (o *LeadInfoType) SetRoomNightsBlocked(v int32) {
	o.RoomNightsBlocked = &v
}

// GetRoomNightsPickedup returns the RoomNightsPickedup field value if set, zero value otherwise.
func (o *LeadInfoType) GetRoomNightsPickedup() int32 {
	if o == nil || IsNil(o.RoomNightsPickedup) {
		var ret int32
		return ret
	}
	return *o.RoomNightsPickedup
}

// GetRoomNightsPickedupOk returns a tuple with the RoomNightsPickedup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetRoomNightsPickedupOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomNightsPickedup) {
		return nil, false
	}
	return o.RoomNightsPickedup, true
}

// HasRoomNightsPickedup returns a boolean if a field has been set.
func (o *LeadInfoType) HasRoomNightsPickedup() bool {
	if o != nil && !IsNil(o.RoomNightsPickedup) {
		return true
	}

	return false
}

// SetRoomNightsPickedup gets a reference to the given int32 and assigns it to the RoomNightsPickedup field.
func (o *LeadInfoType) SetRoomNightsPickedup(v int32) {
	o.RoomNightsPickedup = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *LeadInfoType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LeadInfoType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *LeadInfoType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *LeadInfoType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o LeadInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LeadInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.BlockName) {
		toSerialize["blockName"] = o.BlockName
	}
	if !IsNil(o.BlockStatus) {
		toSerialize["blockStatus"] = o.BlockStatus
	}
	if !IsNil(o.BlockType) {
		toSerialize["blockType"] = o.BlockType
	}
	if !IsNil(o.CateringStatus) {
		toSerialize["cateringStatus"] = o.CateringStatus
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomNightsBlocked) {
		toSerialize["roomNightsBlocked"] = o.RoomNightsBlocked
	}
	if !IsNil(o.RoomNightsPickedup) {
		toSerialize["roomNightsPickedup"] = o.RoomNightsPickedup
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableLeadInfoType struct {
	value *LeadInfoType
	isSet bool
}

func (v NullableLeadInfoType) Get() *LeadInfoType {
	return v.value
}

func (v *NullableLeadInfoType) Set(val *LeadInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableLeadInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableLeadInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLeadInfoType(val *LeadInfoType) *NullableLeadInfoType {
	return &NullableLeadInfoType{value: val, isSet: true}
}

func (v NullableLeadInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLeadInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

