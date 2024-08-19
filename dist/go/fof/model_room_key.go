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

// checks if the RoomKey type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomKey{}

// RoomKey Request for generation of room key.
type RoomKey struct {
	AdditionalRooms []string `json:"additionalRooms,omitempty"`
	EncoderId *UniqueIDType `json:"encoderId,omitempty"`
	EncoderTerminal *string `json:"encoderTerminal,omitempty"`
	KeyCardType *KeyCardType `json:"keyCardType,omitempty"`
	KeyCardUId *string `json:"keyCardUId,omitempty"`
	KeyOptions *string `json:"keyOptions,omitempty"`
	KeyTrack *KeyTrackType `json:"keyTrack,omitempty"`
	KeyType *RoomKeyType `json:"keyType,omitempty"`
	KeyValidityEnd *string `json:"keyValidityEnd,omitempty"`
	KeyValidityStart *string `json:"keyValidityStart,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	NoOfKeys *int32 `json:"noOfKeys,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	Resort *string `json:"resort,omitempty"`
	// Collection of of Room key guests for multiple guest room key functionality.
	RoomKeyGuests []RoomKeyGuest `json:"roomKeyGuests,omitempty"`
	// A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys.
	RoomNumber *string `json:"roomNumber,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomKey instantiates a new RoomKey object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomKey() *RoomKey {
	this := RoomKey{}
	return &this
}

// NewRoomKeyWithDefaults instantiates a new RoomKey object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomKeyWithDefaults() *RoomKey {
	this := RoomKey{}
	return &this
}

// GetAdditionalRooms returns the AdditionalRooms field value if set, zero value otherwise.
func (o *RoomKey) GetAdditionalRooms() []string {
	if o == nil || IsNil(o.AdditionalRooms) {
		var ret []string
		return ret
	}
	return o.AdditionalRooms
}

// GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetAdditionalRoomsOk() ([]string, bool) {
	if o == nil || IsNil(o.AdditionalRooms) {
		return nil, false
	}
	return o.AdditionalRooms, true
}

// HasAdditionalRooms returns a boolean if a field has been set.
func (o *RoomKey) HasAdditionalRooms() bool {
	if o != nil && !IsNil(o.AdditionalRooms) {
		return true
	}

	return false
}

// SetAdditionalRooms gets a reference to the given []string and assigns it to the AdditionalRooms field.
func (o *RoomKey) SetAdditionalRooms(v []string) {
	o.AdditionalRooms = v
}

// GetEncoderId returns the EncoderId field value if set, zero value otherwise.
func (o *RoomKey) GetEncoderId() UniqueIDType {
	if o == nil || IsNil(o.EncoderId) {
		var ret UniqueIDType
		return ret
	}
	return *o.EncoderId
}

// GetEncoderIdOk returns a tuple with the EncoderId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetEncoderIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.EncoderId) {
		return nil, false
	}
	return o.EncoderId, true
}

// HasEncoderId returns a boolean if a field has been set.
func (o *RoomKey) HasEncoderId() bool {
	if o != nil && !IsNil(o.EncoderId) {
		return true
	}

	return false
}

// SetEncoderId gets a reference to the given UniqueIDType and assigns it to the EncoderId field.
func (o *RoomKey) SetEncoderId(v UniqueIDType) {
	o.EncoderId = &v
}

// GetEncoderTerminal returns the EncoderTerminal field value if set, zero value otherwise.
func (o *RoomKey) GetEncoderTerminal() string {
	if o == nil || IsNil(o.EncoderTerminal) {
		var ret string
		return ret
	}
	return *o.EncoderTerminal
}

// GetEncoderTerminalOk returns a tuple with the EncoderTerminal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetEncoderTerminalOk() (*string, bool) {
	if o == nil || IsNil(o.EncoderTerminal) {
		return nil, false
	}
	return o.EncoderTerminal, true
}

// HasEncoderTerminal returns a boolean if a field has been set.
func (o *RoomKey) HasEncoderTerminal() bool {
	if o != nil && !IsNil(o.EncoderTerminal) {
		return true
	}

	return false
}

// SetEncoderTerminal gets a reference to the given string and assigns it to the EncoderTerminal field.
func (o *RoomKey) SetEncoderTerminal(v string) {
	o.EncoderTerminal = &v
}

// GetKeyCardType returns the KeyCardType field value if set, zero value otherwise.
func (o *RoomKey) GetKeyCardType() KeyCardType {
	if o == nil || IsNil(o.KeyCardType) {
		var ret KeyCardType
		return ret
	}
	return *o.KeyCardType
}

// GetKeyCardTypeOk returns a tuple with the KeyCardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyCardTypeOk() (*KeyCardType, bool) {
	if o == nil || IsNil(o.KeyCardType) {
		return nil, false
	}
	return o.KeyCardType, true
}

// HasKeyCardType returns a boolean if a field has been set.
func (o *RoomKey) HasKeyCardType() bool {
	if o != nil && !IsNil(o.KeyCardType) {
		return true
	}

	return false
}

// SetKeyCardType gets a reference to the given KeyCardType and assigns it to the KeyCardType field.
func (o *RoomKey) SetKeyCardType(v KeyCardType) {
	o.KeyCardType = &v
}

// GetKeyCardUId returns the KeyCardUId field value if set, zero value otherwise.
func (o *RoomKey) GetKeyCardUId() string {
	if o == nil || IsNil(o.KeyCardUId) {
		var ret string
		return ret
	}
	return *o.KeyCardUId
}

// GetKeyCardUIdOk returns a tuple with the KeyCardUId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyCardUIdOk() (*string, bool) {
	if o == nil || IsNil(o.KeyCardUId) {
		return nil, false
	}
	return o.KeyCardUId, true
}

// HasKeyCardUId returns a boolean if a field has been set.
func (o *RoomKey) HasKeyCardUId() bool {
	if o != nil && !IsNil(o.KeyCardUId) {
		return true
	}

	return false
}

// SetKeyCardUId gets a reference to the given string and assigns it to the KeyCardUId field.
func (o *RoomKey) SetKeyCardUId(v string) {
	o.KeyCardUId = &v
}

// GetKeyOptions returns the KeyOptions field value if set, zero value otherwise.
func (o *RoomKey) GetKeyOptions() string {
	if o == nil || IsNil(o.KeyOptions) {
		var ret string
		return ret
	}
	return *o.KeyOptions
}

// GetKeyOptionsOk returns a tuple with the KeyOptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyOptionsOk() (*string, bool) {
	if o == nil || IsNil(o.KeyOptions) {
		return nil, false
	}
	return o.KeyOptions, true
}

// HasKeyOptions returns a boolean if a field has been set.
func (o *RoomKey) HasKeyOptions() bool {
	if o != nil && !IsNil(o.KeyOptions) {
		return true
	}

	return false
}

// SetKeyOptions gets a reference to the given string and assigns it to the KeyOptions field.
func (o *RoomKey) SetKeyOptions(v string) {
	o.KeyOptions = &v
}

// GetKeyTrack returns the KeyTrack field value if set, zero value otherwise.
func (o *RoomKey) GetKeyTrack() KeyTrackType {
	if o == nil || IsNil(o.KeyTrack) {
		var ret KeyTrackType
		return ret
	}
	return *o.KeyTrack
}

// GetKeyTrackOk returns a tuple with the KeyTrack field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyTrackOk() (*KeyTrackType, bool) {
	if o == nil || IsNil(o.KeyTrack) {
		return nil, false
	}
	return o.KeyTrack, true
}

// HasKeyTrack returns a boolean if a field has been set.
func (o *RoomKey) HasKeyTrack() bool {
	if o != nil && !IsNil(o.KeyTrack) {
		return true
	}

	return false
}

// SetKeyTrack gets a reference to the given KeyTrackType and assigns it to the KeyTrack field.
func (o *RoomKey) SetKeyTrack(v KeyTrackType) {
	o.KeyTrack = &v
}

// GetKeyType returns the KeyType field value if set, zero value otherwise.
func (o *RoomKey) GetKeyType() RoomKeyType {
	if o == nil || IsNil(o.KeyType) {
		var ret RoomKeyType
		return ret
	}
	return *o.KeyType
}

// GetKeyTypeOk returns a tuple with the KeyType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyTypeOk() (*RoomKeyType, bool) {
	if o == nil || IsNil(o.KeyType) {
		return nil, false
	}
	return o.KeyType, true
}

// HasKeyType returns a boolean if a field has been set.
func (o *RoomKey) HasKeyType() bool {
	if o != nil && !IsNil(o.KeyType) {
		return true
	}

	return false
}

// SetKeyType gets a reference to the given RoomKeyType and assigns it to the KeyType field.
func (o *RoomKey) SetKeyType(v RoomKeyType) {
	o.KeyType = &v
}

// GetKeyValidityEnd returns the KeyValidityEnd field value if set, zero value otherwise.
func (o *RoomKey) GetKeyValidityEnd() string {
	if o == nil || IsNil(o.KeyValidityEnd) {
		var ret string
		return ret
	}
	return *o.KeyValidityEnd
}

// GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyValidityEndOk() (*string, bool) {
	if o == nil || IsNil(o.KeyValidityEnd) {
		return nil, false
	}
	return o.KeyValidityEnd, true
}

// HasKeyValidityEnd returns a boolean if a field has been set.
func (o *RoomKey) HasKeyValidityEnd() bool {
	if o != nil && !IsNil(o.KeyValidityEnd) {
		return true
	}

	return false
}

// SetKeyValidityEnd gets a reference to the given string and assigns it to the KeyValidityEnd field.
func (o *RoomKey) SetKeyValidityEnd(v string) {
	o.KeyValidityEnd = &v
}

// GetKeyValidityStart returns the KeyValidityStart field value if set, zero value otherwise.
func (o *RoomKey) GetKeyValidityStart() string {
	if o == nil || IsNil(o.KeyValidityStart) {
		var ret string
		return ret
	}
	return *o.KeyValidityStart
}

// GetKeyValidityStartOk returns a tuple with the KeyValidityStart field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetKeyValidityStartOk() (*string, bool) {
	if o == nil || IsNil(o.KeyValidityStart) {
		return nil, false
	}
	return o.KeyValidityStart, true
}

// HasKeyValidityStart returns a boolean if a field has been set.
func (o *RoomKey) HasKeyValidityStart() bool {
	if o != nil && !IsNil(o.KeyValidityStart) {
		return true
	}

	return false
}

// SetKeyValidityStart gets a reference to the given string and assigns it to the KeyValidityStart field.
func (o *RoomKey) SetKeyValidityStart(v string) {
	o.KeyValidityStart = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomKey) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomKey) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomKey) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNoOfKeys returns the NoOfKeys field value if set, zero value otherwise.
func (o *RoomKey) GetNoOfKeys() int32 {
	if o == nil || IsNil(o.NoOfKeys) {
		var ret int32
		return ret
	}
	return *o.NoOfKeys
}

// GetNoOfKeysOk returns a tuple with the NoOfKeys field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetNoOfKeysOk() (*int32, bool) {
	if o == nil || IsNil(o.NoOfKeys) {
		return nil, false
	}
	return o.NoOfKeys, true
}

// HasNoOfKeys returns a boolean if a field has been set.
func (o *RoomKey) HasNoOfKeys() bool {
	if o != nil && !IsNil(o.NoOfKeys) {
		return true
	}

	return false
}

// SetNoOfKeys gets a reference to the given int32 and assigns it to the NoOfKeys field.
func (o *RoomKey) SetNoOfKeys(v int32) {
	o.NoOfKeys = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *RoomKey) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *RoomKey) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *RoomKey) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetResort returns the Resort field value if set, zero value otherwise.
func (o *RoomKey) GetResort() string {
	if o == nil || IsNil(o.Resort) {
		var ret string
		return ret
	}
	return *o.Resort
}

// GetResortOk returns a tuple with the Resort field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetResortOk() (*string, bool) {
	if o == nil || IsNil(o.Resort) {
		return nil, false
	}
	return o.Resort, true
}

// HasResort returns a boolean if a field has been set.
func (o *RoomKey) HasResort() bool {
	if o != nil && !IsNil(o.Resort) {
		return true
	}

	return false
}

// SetResort gets a reference to the given string and assigns it to the Resort field.
func (o *RoomKey) SetResort(v string) {
	o.Resort = &v
}

// GetRoomKeyGuests returns the RoomKeyGuests field value if set, zero value otherwise.
func (o *RoomKey) GetRoomKeyGuests() []RoomKeyGuest {
	if o == nil || IsNil(o.RoomKeyGuests) {
		var ret []RoomKeyGuest
		return ret
	}
	return o.RoomKeyGuests
}

// GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetRoomKeyGuestsOk() ([]RoomKeyGuest, bool) {
	if o == nil || IsNil(o.RoomKeyGuests) {
		return nil, false
	}
	return o.RoomKeyGuests, true
}

// HasRoomKeyGuests returns a boolean if a field has been set.
func (o *RoomKey) HasRoomKeyGuests() bool {
	if o != nil && !IsNil(o.RoomKeyGuests) {
		return true
	}

	return false
}

// SetRoomKeyGuests gets a reference to the given []RoomKeyGuest and assigns it to the RoomKeyGuests field.
func (o *RoomKey) SetRoomKeyGuests(v []RoomKeyGuest) {
	o.RoomKeyGuests = v
}

// GetRoomNumber returns the RoomNumber field value if set, zero value otherwise.
func (o *RoomKey) GetRoomNumber() string {
	if o == nil || IsNil(o.RoomNumber) {
		var ret string
		return ret
	}
	return *o.RoomNumber
}

// GetRoomNumberOk returns a tuple with the RoomNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetRoomNumberOk() (*string, bool) {
	if o == nil || IsNil(o.RoomNumber) {
		return nil, false
	}
	return o.RoomNumber, true
}

// HasRoomNumber returns a boolean if a field has been set.
func (o *RoomKey) HasRoomNumber() bool {
	if o != nil && !IsNil(o.RoomNumber) {
		return true
	}

	return false
}

// SetRoomNumber gets a reference to the given string and assigns it to the RoomNumber field.
func (o *RoomKey) SetRoomNumber(v string) {
	o.RoomNumber = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomKey) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKey) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomKey) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomKey) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomKey) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomKey) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalRooms) {
		toSerialize["additionalRooms"] = o.AdditionalRooms
	}
	if !IsNil(o.EncoderId) {
		toSerialize["encoderId"] = o.EncoderId
	}
	if !IsNil(o.EncoderTerminal) {
		toSerialize["encoderTerminal"] = o.EncoderTerminal
	}
	if !IsNil(o.KeyCardType) {
		toSerialize["keyCardType"] = o.KeyCardType
	}
	if !IsNil(o.KeyCardUId) {
		toSerialize["keyCardUId"] = o.KeyCardUId
	}
	if !IsNil(o.KeyOptions) {
		toSerialize["keyOptions"] = o.KeyOptions
	}
	if !IsNil(o.KeyTrack) {
		toSerialize["keyTrack"] = o.KeyTrack
	}
	if !IsNil(o.KeyType) {
		toSerialize["keyType"] = o.KeyType
	}
	if !IsNil(o.KeyValidityEnd) {
		toSerialize["keyValidityEnd"] = o.KeyValidityEnd
	}
	if !IsNil(o.KeyValidityStart) {
		toSerialize["keyValidityStart"] = o.KeyValidityStart
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.NoOfKeys) {
		toSerialize["noOfKeys"] = o.NoOfKeys
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.Resort) {
		toSerialize["resort"] = o.Resort
	}
	if !IsNil(o.RoomKeyGuests) {
		toSerialize["roomKeyGuests"] = o.RoomKeyGuests
	}
	if !IsNil(o.RoomNumber) {
		toSerialize["roomNumber"] = o.RoomNumber
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomKey struct {
	value *RoomKey
	isSet bool
}

func (v NullableRoomKey) Get() *RoomKey {
	return v.value
}

func (v *NullableRoomKey) Set(val *RoomKey) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomKey) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomKey) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomKey(val *RoomKey) *NullableRoomKey {
	return &NullableRoomKey{value: val, isSet: true}
}

func (v NullableRoomKey) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomKey) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


