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

// checks if the RoomKeyInterfaceDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomKeyInterfaceDetailType{}

// RoomKeyInterfaceDetailType struct for RoomKeyInterfaceDetailType
type RoomKeyInterfaceDetailType struct {
	// Maximum number of additional rooms allowed.
	AdditionalRoomsLimit *int32 `json:"additionalRoomsLimit,omitempty"`
	// Holds the key encoder right.
	Encoders []RoomKeyEncoderType `json:"encoders,omitempty"`
	// Hotel code of the interface.
	HotelId *string `json:"hotelId,omitempty"`
	// Description of the interface.
	InterfaceDescription *string `json:"interfaceDescription,omitempty"`
	// Name of the interface.
	InterfaceName *string `json:"interfaceName,omitempty"`
	// Holds the key encoder right.
	InterfaceRights []RoomKeyInterfaceRightType `json:"interfaceRights,omitempty"`
	// Indicator if additional rooms are allowed to be included in key creation.
	MultipleRoomKeys *bool `json:"multipleRoomKeys,omitempty"`
	// Current property date and time.
	PropertyDateTime *string `json:"propertyDateTime,omitempty"`
	// Indicator if the DLS Interface allows to send valid start date and time.
	SendValidStartDateTime *bool `json:"sendValidStartDateTime,omitempty"`
}

// NewRoomKeyInterfaceDetailType instantiates a new RoomKeyInterfaceDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomKeyInterfaceDetailType() *RoomKeyInterfaceDetailType {
	this := RoomKeyInterfaceDetailType{}
	return &this
}

// NewRoomKeyInterfaceDetailTypeWithDefaults instantiates a new RoomKeyInterfaceDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomKeyInterfaceDetailTypeWithDefaults() *RoomKeyInterfaceDetailType {
	this := RoomKeyInterfaceDetailType{}
	return &this
}

// GetAdditionalRoomsLimit returns the AdditionalRoomsLimit field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetAdditionalRoomsLimit() int32 {
	if o == nil || IsNil(o.AdditionalRoomsLimit) {
		var ret int32
		return ret
	}
	return *o.AdditionalRoomsLimit
}

// GetAdditionalRoomsLimitOk returns a tuple with the AdditionalRoomsLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetAdditionalRoomsLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.AdditionalRoomsLimit) {
		return nil, false
	}
	return o.AdditionalRoomsLimit, true
}

// HasAdditionalRoomsLimit returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasAdditionalRoomsLimit() bool {
	if o != nil && !IsNil(o.AdditionalRoomsLimit) {
		return true
	}

	return false
}

// SetAdditionalRoomsLimit gets a reference to the given int32 and assigns it to the AdditionalRoomsLimit field.
func (o *RoomKeyInterfaceDetailType) SetAdditionalRoomsLimit(v int32) {
	o.AdditionalRoomsLimit = &v
}

// GetEncoders returns the Encoders field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetEncoders() []RoomKeyEncoderType {
	if o == nil || IsNil(o.Encoders) {
		var ret []RoomKeyEncoderType
		return ret
	}
	return o.Encoders
}

// GetEncodersOk returns a tuple with the Encoders field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetEncodersOk() ([]RoomKeyEncoderType, bool) {
	if o == nil || IsNil(o.Encoders) {
		return nil, false
	}
	return o.Encoders, true
}

// HasEncoders returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasEncoders() bool {
	if o != nil && !IsNil(o.Encoders) {
		return true
	}

	return false
}

// SetEncoders gets a reference to the given []RoomKeyEncoderType and assigns it to the Encoders field.
func (o *RoomKeyInterfaceDetailType) SetEncoders(v []RoomKeyEncoderType) {
	o.Encoders = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomKeyInterfaceDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInterfaceDescription returns the InterfaceDescription field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetInterfaceDescription() string {
	if o == nil || IsNil(o.InterfaceDescription) {
		var ret string
		return ret
	}
	return *o.InterfaceDescription
}

// GetInterfaceDescriptionOk returns a tuple with the InterfaceDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetInterfaceDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.InterfaceDescription) {
		return nil, false
	}
	return o.InterfaceDescription, true
}

// HasInterfaceDescription returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasInterfaceDescription() bool {
	if o != nil && !IsNil(o.InterfaceDescription) {
		return true
	}

	return false
}

// SetInterfaceDescription gets a reference to the given string and assigns it to the InterfaceDescription field.
func (o *RoomKeyInterfaceDetailType) SetInterfaceDescription(v string) {
	o.InterfaceDescription = &v
}

// GetInterfaceName returns the InterfaceName field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetInterfaceName() string {
	if o == nil || IsNil(o.InterfaceName) {
		var ret string
		return ret
	}
	return *o.InterfaceName
}

// GetInterfaceNameOk returns a tuple with the InterfaceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetInterfaceNameOk() (*string, bool) {
	if o == nil || IsNil(o.InterfaceName) {
		return nil, false
	}
	return o.InterfaceName, true
}

// HasInterfaceName returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasInterfaceName() bool {
	if o != nil && !IsNil(o.InterfaceName) {
		return true
	}

	return false
}

// SetInterfaceName gets a reference to the given string and assigns it to the InterfaceName field.
func (o *RoomKeyInterfaceDetailType) SetInterfaceName(v string) {
	o.InterfaceName = &v
}

// GetInterfaceRights returns the InterfaceRights field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetInterfaceRights() []RoomKeyInterfaceRightType {
	if o == nil || IsNil(o.InterfaceRights) {
		var ret []RoomKeyInterfaceRightType
		return ret
	}
	return o.InterfaceRights
}

// GetInterfaceRightsOk returns a tuple with the InterfaceRights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetInterfaceRightsOk() ([]RoomKeyInterfaceRightType, bool) {
	if o == nil || IsNil(o.InterfaceRights) {
		return nil, false
	}
	return o.InterfaceRights, true
}

// HasInterfaceRights returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasInterfaceRights() bool {
	if o != nil && !IsNil(o.InterfaceRights) {
		return true
	}

	return false
}

// SetInterfaceRights gets a reference to the given []RoomKeyInterfaceRightType and assigns it to the InterfaceRights field.
func (o *RoomKeyInterfaceDetailType) SetInterfaceRights(v []RoomKeyInterfaceRightType) {
	o.InterfaceRights = v
}

// GetMultipleRoomKeys returns the MultipleRoomKeys field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetMultipleRoomKeys() bool {
	if o == nil || IsNil(o.MultipleRoomKeys) {
		var ret bool
		return ret
	}
	return *o.MultipleRoomKeys
}

// GetMultipleRoomKeysOk returns a tuple with the MultipleRoomKeys field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetMultipleRoomKeysOk() (*bool, bool) {
	if o == nil || IsNil(o.MultipleRoomKeys) {
		return nil, false
	}
	return o.MultipleRoomKeys, true
}

// HasMultipleRoomKeys returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasMultipleRoomKeys() bool {
	if o != nil && !IsNil(o.MultipleRoomKeys) {
		return true
	}

	return false
}

// SetMultipleRoomKeys gets a reference to the given bool and assigns it to the MultipleRoomKeys field.
func (o *RoomKeyInterfaceDetailType) SetMultipleRoomKeys(v bool) {
	o.MultipleRoomKeys = &v
}

// GetPropertyDateTime returns the PropertyDateTime field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetPropertyDateTime() string {
	if o == nil || IsNil(o.PropertyDateTime) {
		var ret string
		return ret
	}
	return *o.PropertyDateTime
}

// GetPropertyDateTimeOk returns a tuple with the PropertyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetPropertyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.PropertyDateTime) {
		return nil, false
	}
	return o.PropertyDateTime, true
}

// HasPropertyDateTime returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasPropertyDateTime() bool {
	if o != nil && !IsNil(o.PropertyDateTime) {
		return true
	}

	return false
}

// SetPropertyDateTime gets a reference to the given string and assigns it to the PropertyDateTime field.
func (o *RoomKeyInterfaceDetailType) SetPropertyDateTime(v string) {
	o.PropertyDateTime = &v
}

// GetSendValidStartDateTime returns the SendValidStartDateTime field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetailType) GetSendValidStartDateTime() bool {
	if o == nil || IsNil(o.SendValidStartDateTime) {
		var ret bool
		return ret
	}
	return *o.SendValidStartDateTime
}

// GetSendValidStartDateTimeOk returns a tuple with the SendValidStartDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetailType) GetSendValidStartDateTimeOk() (*bool, bool) {
	if o == nil || IsNil(o.SendValidStartDateTime) {
		return nil, false
	}
	return o.SendValidStartDateTime, true
}

// HasSendValidStartDateTime returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetailType) HasSendValidStartDateTime() bool {
	if o != nil && !IsNil(o.SendValidStartDateTime) {
		return true
	}

	return false
}

// SetSendValidStartDateTime gets a reference to the given bool and assigns it to the SendValidStartDateTime field.
func (o *RoomKeyInterfaceDetailType) SetSendValidStartDateTime(v bool) {
	o.SendValidStartDateTime = &v
}

func (o RoomKeyInterfaceDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomKeyInterfaceDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalRoomsLimit) {
		toSerialize["additionalRoomsLimit"] = o.AdditionalRoomsLimit
	}
	if !IsNil(o.Encoders) {
		toSerialize["encoders"] = o.Encoders
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InterfaceDescription) {
		toSerialize["interfaceDescription"] = o.InterfaceDescription
	}
	if !IsNil(o.InterfaceName) {
		toSerialize["interfaceName"] = o.InterfaceName
	}
	if !IsNil(o.InterfaceRights) {
		toSerialize["interfaceRights"] = o.InterfaceRights
	}
	if !IsNil(o.MultipleRoomKeys) {
		toSerialize["multipleRoomKeys"] = o.MultipleRoomKeys
	}
	if !IsNil(o.PropertyDateTime) {
		toSerialize["propertyDateTime"] = o.PropertyDateTime
	}
	if !IsNil(o.SendValidStartDateTime) {
		toSerialize["sendValidStartDateTime"] = o.SendValidStartDateTime
	}
	return toSerialize, nil
}

type NullableRoomKeyInterfaceDetailType struct {
	value *RoomKeyInterfaceDetailType
	isSet bool
}

func (v NullableRoomKeyInterfaceDetailType) Get() *RoomKeyInterfaceDetailType {
	return v.value
}

func (v *NullableRoomKeyInterfaceDetailType) Set(val *RoomKeyInterfaceDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomKeyInterfaceDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomKeyInterfaceDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomKeyInterfaceDetailType(val *RoomKeyInterfaceDetailType) *NullableRoomKeyInterfaceDetailType {
	return &NullableRoomKeyInterfaceDetailType{value: val, isSet: true}
}

func (v NullableRoomKeyInterfaceDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomKeyInterfaceDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

