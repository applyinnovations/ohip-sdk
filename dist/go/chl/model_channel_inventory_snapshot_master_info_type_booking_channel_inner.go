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

// checks if the ChannelInventorySnapshotMasterInfoTypeBookingChannelInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelInventorySnapshotMasterInfoTypeBookingChannelInner{}

// ChannelInventorySnapshotMasterInfoTypeBookingChannelInner struct for ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
type ChannelInventorySnapshotMasterInfoTypeBookingChannelInner struct {
	// The type of channel. I.E. GDS, ADS, ODS, WEB.
	BookingChannelType *string `json:"bookingChannelType,omitempty"`
	// Flag to indicate if the channel and hotel combination have the Channel Inventory parameter active. This parameter allows sell limits to be set for the channel or channel room type.
	ChannelInventoryActive *bool `json:"channelInventoryActive,omitempty"`
	// Details about a specific channel room type.
	ChannelRoomTypes []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner `json:"channelRoomTypes,omitempty"`
	// The booking channel's identifying code.
	Code *string `json:"code,omitempty"`
	// The name or description of the booking channel.
	Description *string `json:"description,omitempty"`
}

// NewChannelInventorySnapshotMasterInfoTypeBookingChannelInner instantiates a new ChannelInventorySnapshotMasterInfoTypeBookingChannelInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelInventorySnapshotMasterInfoTypeBookingChannelInner() *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
	this := ChannelInventorySnapshotMasterInfoTypeBookingChannelInner{}
	return &this
}

// NewChannelInventorySnapshotMasterInfoTypeBookingChannelInnerWithDefaults instantiates a new ChannelInventorySnapshotMasterInfoTypeBookingChannelInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelInventorySnapshotMasterInfoTypeBookingChannelInnerWithDefaults() *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
	this := ChannelInventorySnapshotMasterInfoTypeBookingChannelInner{}
	return &this
}

// GetBookingChannelType returns the BookingChannelType field value if set, zero value otherwise.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetBookingChannelType() string {
	if o == nil || IsNil(o.BookingChannelType) {
		var ret string
		return ret
	}
	return *o.BookingChannelType
}

// GetBookingChannelTypeOk returns a tuple with the BookingChannelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetBookingChannelTypeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelType) {
		return nil, false
	}
	return o.BookingChannelType, true
}

// HasBookingChannelType returns a boolean if a field has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasBookingChannelType() bool {
	if o != nil && !IsNil(o.BookingChannelType) {
		return true
	}

	return false
}

// SetBookingChannelType gets a reference to the given string and assigns it to the BookingChannelType field.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetBookingChannelType(v string) {
	o.BookingChannelType = &v
}

// GetChannelInventoryActive returns the ChannelInventoryActive field value if set, zero value otherwise.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelInventoryActive() bool {
	if o == nil || IsNil(o.ChannelInventoryActive) {
		var ret bool
		return ret
	}
	return *o.ChannelInventoryActive
}

// GetChannelInventoryActiveOk returns a tuple with the ChannelInventoryActive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelInventoryActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.ChannelInventoryActive) {
		return nil, false
	}
	return o.ChannelInventoryActive, true
}

// HasChannelInventoryActive returns a boolean if a field has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasChannelInventoryActive() bool {
	if o != nil && !IsNil(o.ChannelInventoryActive) {
		return true
	}

	return false
}

// SetChannelInventoryActive gets a reference to the given bool and assigns it to the ChannelInventoryActive field.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetChannelInventoryActive(v bool) {
	o.ChannelInventoryActive = &v
}

// GetChannelRoomTypes returns the ChannelRoomTypes field value if set, zero value otherwise.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelRoomTypes() []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner {
	if o == nil || IsNil(o.ChannelRoomTypes) {
		var ret []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
		return ret
	}
	return o.ChannelRoomTypes
}

// GetChannelRoomTypesOk returns a tuple with the ChannelRoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelRoomTypesOk() ([]ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner, bool) {
	if o == nil || IsNil(o.ChannelRoomTypes) {
		return nil, false
	}
	return o.ChannelRoomTypes, true
}

// HasChannelRoomTypes returns a boolean if a field has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasChannelRoomTypes() bool {
	if o != nil && !IsNil(o.ChannelRoomTypes) {
		return true
	}

	return false
}

// SetChannelRoomTypes gets a reference to the given []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner and assigns it to the ChannelRoomTypes field.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetChannelRoomTypes(v []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner) {
	o.ChannelRoomTypes = v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetDescription(v string) {
	o.Description = &v
}

func (o ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelType) {
		toSerialize["bookingChannelType"] = o.BookingChannelType
	}
	if !IsNil(o.ChannelInventoryActive) {
		toSerialize["channelInventoryActive"] = o.ChannelInventoryActive
	}
	if !IsNil(o.ChannelRoomTypes) {
		toSerialize["channelRoomTypes"] = o.ChannelRoomTypes
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner struct {
	value *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
	isSet bool
}

func (v NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) Get() *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
	return v.value
}

func (v *NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) Set(val *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner(val *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) *NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
	return &NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner{value: val, isSet: true}
}

func (v NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelInventorySnapshotMasterInfoTypeBookingChannelInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


