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

// checks if the ChannelRateMappingMasterInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRateMappingMasterInfoType{}

// ChannelRateMappingMasterInfoType Additional details about the booking channels and source descriptions for a hotel rate code referenced within the fetched results.
type ChannelRateMappingMasterInfoType struct {
	// Additional detail about booking channel.
	BookingChannelsInfo []BookingChannelInfoType `json:"bookingChannelsInfo,omitempty"`
	// Source descriptions of a hotel-channel rate code mapping.
	SourceDescriptions []ChannelRateMappingSourceDescriptionsType `json:"sourceDescriptions,omitempty"`
}

// NewChannelRateMappingMasterInfoType instantiates a new ChannelRateMappingMasterInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRateMappingMasterInfoType() *ChannelRateMappingMasterInfoType {
	this := ChannelRateMappingMasterInfoType{}
	return &this
}

// NewChannelRateMappingMasterInfoTypeWithDefaults instantiates a new ChannelRateMappingMasterInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRateMappingMasterInfoTypeWithDefaults() *ChannelRateMappingMasterInfoType {
	this := ChannelRateMappingMasterInfoType{}
	return &this
}

// GetBookingChannelsInfo returns the BookingChannelsInfo field value if set, zero value otherwise.
func (o *ChannelRateMappingMasterInfoType) GetBookingChannelsInfo() []BookingChannelInfoType {
	if o == nil || IsNil(o.BookingChannelsInfo) {
		var ret []BookingChannelInfoType
		return ret
	}
	return o.BookingChannelsInfo
}

// GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingMasterInfoType) GetBookingChannelsInfoOk() ([]BookingChannelInfoType, bool) {
	if o == nil || IsNil(o.BookingChannelsInfo) {
		return nil, false
	}
	return o.BookingChannelsInfo, true
}

// HasBookingChannelsInfo returns a boolean if a field has been set.
func (o *ChannelRateMappingMasterInfoType) HasBookingChannelsInfo() bool {
	if o != nil && !IsNil(o.BookingChannelsInfo) {
		return true
	}

	return false
}

// SetBookingChannelsInfo gets a reference to the given []BookingChannelInfoType and assigns it to the BookingChannelsInfo field.
func (o *ChannelRateMappingMasterInfoType) SetBookingChannelsInfo(v []BookingChannelInfoType) {
	o.BookingChannelsInfo = v
}

// GetSourceDescriptions returns the SourceDescriptions field value if set, zero value otherwise.
func (o *ChannelRateMappingMasterInfoType) GetSourceDescriptions() []ChannelRateMappingSourceDescriptionsType {
	if o == nil || IsNil(o.SourceDescriptions) {
		var ret []ChannelRateMappingSourceDescriptionsType
		return ret
	}
	return o.SourceDescriptions
}

// GetSourceDescriptionsOk returns a tuple with the SourceDescriptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingMasterInfoType) GetSourceDescriptionsOk() ([]ChannelRateMappingSourceDescriptionsType, bool) {
	if o == nil || IsNil(o.SourceDescriptions) {
		return nil, false
	}
	return o.SourceDescriptions, true
}

// HasSourceDescriptions returns a boolean if a field has been set.
func (o *ChannelRateMappingMasterInfoType) HasSourceDescriptions() bool {
	if o != nil && !IsNil(o.SourceDescriptions) {
		return true
	}

	return false
}

// SetSourceDescriptions gets a reference to the given []ChannelRateMappingSourceDescriptionsType and assigns it to the SourceDescriptions field.
func (o *ChannelRateMappingMasterInfoType) SetSourceDescriptions(v []ChannelRateMappingSourceDescriptionsType) {
	o.SourceDescriptions = v
}

func (o ChannelRateMappingMasterInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRateMappingMasterInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelsInfo) {
		toSerialize["bookingChannelsInfo"] = o.BookingChannelsInfo
	}
	if !IsNil(o.SourceDescriptions) {
		toSerialize["sourceDescriptions"] = o.SourceDescriptions
	}
	return toSerialize, nil
}

type NullableChannelRateMappingMasterInfoType struct {
	value *ChannelRateMappingMasterInfoType
	isSet bool
}

func (v NullableChannelRateMappingMasterInfoType) Get() *ChannelRateMappingMasterInfoType {
	return v.value
}

func (v *NullableChannelRateMappingMasterInfoType) Set(val *ChannelRateMappingMasterInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRateMappingMasterInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRateMappingMasterInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRateMappingMasterInfoType(val *ChannelRateMappingMasterInfoType) *NullableChannelRateMappingMasterInfoType {
	return &NullableChannelRateMappingMasterInfoType{value: val, isSet: true}
}

func (v NullableChannelRateMappingMasterInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRateMappingMasterInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


