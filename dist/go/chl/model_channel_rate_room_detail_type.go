/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelRateRoomDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRateRoomDetailType{}

// ChannelRateRoomDetailType This type holds data for channel Rate room.
type ChannelRateRoomDetailType struct {
	// Rate order for rate room combination. It will be used if RateOrderFromRateMapping is not set.
	RateOrder *float32 `json:"rateOrder,omitempty"`
	// Rate order from the booking channel rate mapping.
	RateOrderFromRateMapping *float32 `json:"rateOrderFromRateMapping,omitempty"`
	// Room order for rate room combination.It will be used if RoomOrderFromRoomMapping is not set.
	RoomOrder *float32 `json:"roomOrder,omitempty"`
	// Room order from the booking channel room mapping.
	RoomOrderFromRoomMapping *float32 `json:"roomOrderFromRoomMapping,omitempty"`
}

// NewChannelRateRoomDetailType instantiates a new ChannelRateRoomDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRateRoomDetailType() *ChannelRateRoomDetailType {
	this := ChannelRateRoomDetailType{}
	return &this
}

// NewChannelRateRoomDetailTypeWithDefaults instantiates a new ChannelRateRoomDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRateRoomDetailTypeWithDefaults() *ChannelRateRoomDetailType {
	this := ChannelRateRoomDetailType{}
	return &this
}

// GetRateOrder returns the RateOrder field value if set, zero value otherwise.
func (o *ChannelRateRoomDetailType) GetRateOrder() float32 {
	if o == nil || IsNil(o.RateOrder) {
		var ret float32
		return ret
	}
	return *o.RateOrder
}

// GetRateOrderOk returns a tuple with the RateOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateRoomDetailType) GetRateOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.RateOrder) {
		return nil, false
	}
	return o.RateOrder, true
}

// HasRateOrder returns a boolean if a field has been set.
func (o *ChannelRateRoomDetailType) HasRateOrder() bool {
	if o != nil && !IsNil(o.RateOrder) {
		return true
	}

	return false
}

// SetRateOrder gets a reference to the given float32 and assigns it to the RateOrder field.
func (o *ChannelRateRoomDetailType) SetRateOrder(v float32) {
	o.RateOrder = &v
}

// GetRateOrderFromRateMapping returns the RateOrderFromRateMapping field value if set, zero value otherwise.
func (o *ChannelRateRoomDetailType) GetRateOrderFromRateMapping() float32 {
	if o == nil || IsNil(o.RateOrderFromRateMapping) {
		var ret float32
		return ret
	}
	return *o.RateOrderFromRateMapping
}

// GetRateOrderFromRateMappingOk returns a tuple with the RateOrderFromRateMapping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateRoomDetailType) GetRateOrderFromRateMappingOk() (*float32, bool) {
	if o == nil || IsNil(o.RateOrderFromRateMapping) {
		return nil, false
	}
	return o.RateOrderFromRateMapping, true
}

// HasRateOrderFromRateMapping returns a boolean if a field has been set.
func (o *ChannelRateRoomDetailType) HasRateOrderFromRateMapping() bool {
	if o != nil && !IsNil(o.RateOrderFromRateMapping) {
		return true
	}

	return false
}

// SetRateOrderFromRateMapping gets a reference to the given float32 and assigns it to the RateOrderFromRateMapping field.
func (o *ChannelRateRoomDetailType) SetRateOrderFromRateMapping(v float32) {
	o.RateOrderFromRateMapping = &v
}

// GetRoomOrder returns the RoomOrder field value if set, zero value otherwise.
func (o *ChannelRateRoomDetailType) GetRoomOrder() float32 {
	if o == nil || IsNil(o.RoomOrder) {
		var ret float32
		return ret
	}
	return *o.RoomOrder
}

// GetRoomOrderOk returns a tuple with the RoomOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateRoomDetailType) GetRoomOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomOrder) {
		return nil, false
	}
	return o.RoomOrder, true
}

// HasRoomOrder returns a boolean if a field has been set.
func (o *ChannelRateRoomDetailType) HasRoomOrder() bool {
	if o != nil && !IsNil(o.RoomOrder) {
		return true
	}

	return false
}

// SetRoomOrder gets a reference to the given float32 and assigns it to the RoomOrder field.
func (o *ChannelRateRoomDetailType) SetRoomOrder(v float32) {
	o.RoomOrder = &v
}

// GetRoomOrderFromRoomMapping returns the RoomOrderFromRoomMapping field value if set, zero value otherwise.
func (o *ChannelRateRoomDetailType) GetRoomOrderFromRoomMapping() float32 {
	if o == nil || IsNil(o.RoomOrderFromRoomMapping) {
		var ret float32
		return ret
	}
	return *o.RoomOrderFromRoomMapping
}

// GetRoomOrderFromRoomMappingOk returns a tuple with the RoomOrderFromRoomMapping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateRoomDetailType) GetRoomOrderFromRoomMappingOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomOrderFromRoomMapping) {
		return nil, false
	}
	return o.RoomOrderFromRoomMapping, true
}

// HasRoomOrderFromRoomMapping returns a boolean if a field has been set.
func (o *ChannelRateRoomDetailType) HasRoomOrderFromRoomMapping() bool {
	if o != nil && !IsNil(o.RoomOrderFromRoomMapping) {
		return true
	}

	return false
}

// SetRoomOrderFromRoomMapping gets a reference to the given float32 and assigns it to the RoomOrderFromRoomMapping field.
func (o *ChannelRateRoomDetailType) SetRoomOrderFromRoomMapping(v float32) {
	o.RoomOrderFromRoomMapping = &v
}

func (o ChannelRateRoomDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRateRoomDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RateOrder) {
		toSerialize["rateOrder"] = o.RateOrder
	}
	if !IsNil(o.RateOrderFromRateMapping) {
		toSerialize["rateOrderFromRateMapping"] = o.RateOrderFromRateMapping
	}
	if !IsNil(o.RoomOrder) {
		toSerialize["roomOrder"] = o.RoomOrder
	}
	if !IsNil(o.RoomOrderFromRoomMapping) {
		toSerialize["roomOrderFromRoomMapping"] = o.RoomOrderFromRoomMapping
	}
	return toSerialize, nil
}

type NullableChannelRateRoomDetailType struct {
	value *ChannelRateRoomDetailType
	isSet bool
}

func (v NullableChannelRateRoomDetailType) Get() *ChannelRateRoomDetailType {
	return v.value
}

func (v *NullableChannelRateRoomDetailType) Set(val *ChannelRateRoomDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRateRoomDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRateRoomDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRateRoomDetailType(val *ChannelRateRoomDetailType) *NullableChannelRateRoomDetailType {
	return &NullableChannelRateRoomDetailType{value: val, isSet: true}
}

func (v NullableChannelRateRoomDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRateRoomDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


