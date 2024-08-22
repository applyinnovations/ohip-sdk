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

// checks if the CopyMarketingTextTypeCopyTo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyMarketingTextTypeCopyTo{}

// CopyMarketingTextTypeCopyTo struct for CopyMarketingTextTypeCopyTo
type CopyMarketingTextTypeCopyTo struct {
	BookingChannelCodes []string `json:"bookingChannelCodes,omitempty"`
	HotelCodes []string `json:"hotelCodes,omitempty"`
}

// NewCopyMarketingTextTypeCopyTo instantiates a new CopyMarketingTextTypeCopyTo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyMarketingTextTypeCopyTo() *CopyMarketingTextTypeCopyTo {
	this := CopyMarketingTextTypeCopyTo{}
	return &this
}

// NewCopyMarketingTextTypeCopyToWithDefaults instantiates a new CopyMarketingTextTypeCopyTo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyMarketingTextTypeCopyToWithDefaults() *CopyMarketingTextTypeCopyTo {
	this := CopyMarketingTextTypeCopyTo{}
	return &this
}

// GetBookingChannelCodes returns the BookingChannelCodes field value if set, zero value otherwise.
func (o *CopyMarketingTextTypeCopyTo) GetBookingChannelCodes() []string {
	if o == nil || IsNil(o.BookingChannelCodes) {
		var ret []string
		return ret
	}
	return o.BookingChannelCodes
}

// GetBookingChannelCodesOk returns a tuple with the BookingChannelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMarketingTextTypeCopyTo) GetBookingChannelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.BookingChannelCodes) {
		return nil, false
	}
	return o.BookingChannelCodes, true
}

// HasBookingChannelCodes returns a boolean if a field has been set.
func (o *CopyMarketingTextTypeCopyTo) HasBookingChannelCodes() bool {
	if o != nil && !IsNil(o.BookingChannelCodes) {
		return true
	}

	return false
}

// SetBookingChannelCodes gets a reference to the given []string and assigns it to the BookingChannelCodes field.
func (o *CopyMarketingTextTypeCopyTo) SetBookingChannelCodes(v []string) {
	o.BookingChannelCodes = v
}

// GetHotelCodes returns the HotelCodes field value if set, zero value otherwise.
func (o *CopyMarketingTextTypeCopyTo) GetHotelCodes() []string {
	if o == nil || IsNil(o.HotelCodes) {
		var ret []string
		return ret
	}
	return o.HotelCodes
}

// GetHotelCodesOk returns a tuple with the HotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMarketingTextTypeCopyTo) GetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.HotelCodes) {
		return nil, false
	}
	return o.HotelCodes, true
}

// HasHotelCodes returns a boolean if a field has been set.
func (o *CopyMarketingTextTypeCopyTo) HasHotelCodes() bool {
	if o != nil && !IsNil(o.HotelCodes) {
		return true
	}

	return false
}

// SetHotelCodes gets a reference to the given []string and assigns it to the HotelCodes field.
func (o *CopyMarketingTextTypeCopyTo) SetHotelCodes(v []string) {
	o.HotelCodes = v
}

func (o CopyMarketingTextTypeCopyTo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyMarketingTextTypeCopyTo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCodes) {
		toSerialize["bookingChannelCodes"] = o.BookingChannelCodes
	}
	if !IsNil(o.HotelCodes) {
		toSerialize["hotelCodes"] = o.HotelCodes
	}
	return toSerialize, nil
}

type NullableCopyMarketingTextTypeCopyTo struct {
	value *CopyMarketingTextTypeCopyTo
	isSet bool
}

func (v NullableCopyMarketingTextTypeCopyTo) Get() *CopyMarketingTextTypeCopyTo {
	return v.value
}

func (v *NullableCopyMarketingTextTypeCopyTo) Set(val *CopyMarketingTextTypeCopyTo) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyMarketingTextTypeCopyTo) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyMarketingTextTypeCopyTo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyMarketingTextTypeCopyTo(val *CopyMarketingTextTypeCopyTo) *NullableCopyMarketingTextTypeCopyTo {
	return &NullableCopyMarketingTextTypeCopyTo{value: val, isSet: true}
}

func (v NullableCopyMarketingTextTypeCopyTo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyMarketingTextTypeCopyTo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


