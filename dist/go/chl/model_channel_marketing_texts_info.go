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

// checks if the ChannelMarketingTextsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelMarketingTextsInfo{}

// ChannelMarketingTextsInfo Response object for fetching channel marketing texts.
type ChannelMarketingTextsInfo struct {
	// Reference booking channel info for booking channels in the result set.
	BookingChannelsInfo []BookingChannelInfoType `json:"bookingChannelsInfo,omitempty"`
	// Reference hotel info for the hotels in the result set.
	HotelsInfo []HotelChannelInfoType `json:"hotelsInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	MarketingTexts []MarketingTextType `json:"marketingTexts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChannelMarketingTextsInfo instantiates a new ChannelMarketingTextsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelMarketingTextsInfo() *ChannelMarketingTextsInfo {
	this := ChannelMarketingTextsInfo{}
	return &this
}

// NewChannelMarketingTextsInfoWithDefaults instantiates a new ChannelMarketingTextsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelMarketingTextsInfoWithDefaults() *ChannelMarketingTextsInfo {
	this := ChannelMarketingTextsInfo{}
	return &this
}

// GetBookingChannelsInfo returns the BookingChannelsInfo field value if set, zero value otherwise.
func (o *ChannelMarketingTextsInfo) GetBookingChannelsInfo() []BookingChannelInfoType {
	if o == nil || IsNil(o.BookingChannelsInfo) {
		var ret []BookingChannelInfoType
		return ret
	}
	return o.BookingChannelsInfo
}

// GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelMarketingTextsInfo) GetBookingChannelsInfoOk() ([]BookingChannelInfoType, bool) {
	if o == nil || IsNil(o.BookingChannelsInfo) {
		return nil, false
	}
	return o.BookingChannelsInfo, true
}

// HasBookingChannelsInfo returns a boolean if a field has been set.
func (o *ChannelMarketingTextsInfo) HasBookingChannelsInfo() bool {
	if o != nil && !IsNil(o.BookingChannelsInfo) {
		return true
	}

	return false
}

// SetBookingChannelsInfo gets a reference to the given []BookingChannelInfoType and assigns it to the BookingChannelsInfo field.
func (o *ChannelMarketingTextsInfo) SetBookingChannelsInfo(v []BookingChannelInfoType) {
	o.BookingChannelsInfo = v
}

// GetHotelsInfo returns the HotelsInfo field value if set, zero value otherwise.
func (o *ChannelMarketingTextsInfo) GetHotelsInfo() []HotelChannelInfoType {
	if o == nil || IsNil(o.HotelsInfo) {
		var ret []HotelChannelInfoType
		return ret
	}
	return o.HotelsInfo
}

// GetHotelsInfoOk returns a tuple with the HotelsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelMarketingTextsInfo) GetHotelsInfoOk() ([]HotelChannelInfoType, bool) {
	if o == nil || IsNil(o.HotelsInfo) {
		return nil, false
	}
	return o.HotelsInfo, true
}

// HasHotelsInfo returns a boolean if a field has been set.
func (o *ChannelMarketingTextsInfo) HasHotelsInfo() bool {
	if o != nil && !IsNil(o.HotelsInfo) {
		return true
	}

	return false
}

// SetHotelsInfo gets a reference to the given []HotelChannelInfoType and assigns it to the HotelsInfo field.
func (o *ChannelMarketingTextsInfo) SetHotelsInfo(v []HotelChannelInfoType) {
	o.HotelsInfo = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChannelMarketingTextsInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelMarketingTextsInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChannelMarketingTextsInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChannelMarketingTextsInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMarketingTexts returns the MarketingTexts field value if set, zero value otherwise.
func (o *ChannelMarketingTextsInfo) GetMarketingTexts() []MarketingTextType {
	if o == nil || IsNil(o.MarketingTexts) {
		var ret []MarketingTextType
		return ret
	}
	return o.MarketingTexts
}

// GetMarketingTextsOk returns a tuple with the MarketingTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelMarketingTextsInfo) GetMarketingTextsOk() ([]MarketingTextType, bool) {
	if o == nil || IsNil(o.MarketingTexts) {
		return nil, false
	}
	return o.MarketingTexts, true
}

// HasMarketingTexts returns a boolean if a field has been set.
func (o *ChannelMarketingTextsInfo) HasMarketingTexts() bool {
	if o != nil && !IsNil(o.MarketingTexts) {
		return true
	}

	return false
}

// SetMarketingTexts gets a reference to the given []MarketingTextType and assigns it to the MarketingTexts field.
func (o *ChannelMarketingTextsInfo) SetMarketingTexts(v []MarketingTextType) {
	o.MarketingTexts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChannelMarketingTextsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelMarketingTextsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChannelMarketingTextsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChannelMarketingTextsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChannelMarketingTextsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelMarketingTextsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelsInfo) {
		toSerialize["bookingChannelsInfo"] = o.BookingChannelsInfo
	}
	if !IsNil(o.HotelsInfo) {
		toSerialize["hotelsInfo"] = o.HotelsInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MarketingTexts) {
		toSerialize["marketingTexts"] = o.MarketingTexts
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChannelMarketingTextsInfo struct {
	value *ChannelMarketingTextsInfo
	isSet bool
}

func (v NullableChannelMarketingTextsInfo) Get() *ChannelMarketingTextsInfo {
	return v.value
}

func (v *NullableChannelMarketingTextsInfo) Set(val *ChannelMarketingTextsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelMarketingTextsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelMarketingTextsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelMarketingTextsInfo(val *ChannelMarketingTextsInfo) *NullableChannelMarketingTextsInfo {
	return &NullableChannelMarketingTextsInfo{value: val, isSet: true}
}

func (v NullableChannelMarketingTextsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelMarketingTextsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

