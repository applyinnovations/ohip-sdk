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

// checks if the ChannelCarriersCarriers type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelCarriersCarriers{}

// ChannelCarriersCarriers Channel carriers to be created.
type ChannelCarriersCarriers struct {
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	// Channel carrier details.
	Carrier []SystemCarrierType `json:"carrier,omitempty"`
}

// NewChannelCarriersCarriers instantiates a new ChannelCarriersCarriers object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelCarriersCarriers() *ChannelCarriersCarriers {
	this := ChannelCarriersCarriers{}
	return &this
}

// NewChannelCarriersCarriersWithDefaults instantiates a new ChannelCarriersCarriers object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelCarriersCarriersWithDefaults() *ChannelCarriersCarriers {
	this := ChannelCarriersCarriers{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *ChannelCarriersCarriers) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelCarriersCarriers) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *ChannelCarriersCarriers) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *ChannelCarriersCarriers) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetCarrier returns the Carrier field value if set, zero value otherwise.
func (o *ChannelCarriersCarriers) GetCarrier() []SystemCarrierType {
	if o == nil || IsNil(o.Carrier) {
		var ret []SystemCarrierType
		return ret
	}
	return o.Carrier
}

// GetCarrierOk returns a tuple with the Carrier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelCarriersCarriers) GetCarrierOk() ([]SystemCarrierType, bool) {
	if o == nil || IsNil(o.Carrier) {
		return nil, false
	}
	return o.Carrier, true
}

// HasCarrier returns a boolean if a field has been set.
func (o *ChannelCarriersCarriers) HasCarrier() bool {
	if o != nil && !IsNil(o.Carrier) {
		return true
	}

	return false
}

// SetCarrier gets a reference to the given []SystemCarrierType and assigns it to the Carrier field.
func (o *ChannelCarriersCarriers) SetCarrier(v []SystemCarrierType) {
	o.Carrier = v
}

func (o ChannelCarriersCarriers) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelCarriersCarriers) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.Carrier) {
		toSerialize["carrier"] = o.Carrier
	}
	return toSerialize, nil
}

type NullableChannelCarriersCarriers struct {
	value *ChannelCarriersCarriers
	isSet bool
}

func (v NullableChannelCarriersCarriers) Get() *ChannelCarriersCarriers {
	return v.value
}

func (v *NullableChannelCarriersCarriers) Set(val *ChannelCarriersCarriers) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelCarriersCarriers) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelCarriersCarriers) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelCarriersCarriers(val *ChannelCarriersCarriers) *NullableChannelCarriersCarriers {
	return &NullableChannelCarriersCarriers{value: val, isSet: true}
}

func (v NullableChannelCarriersCarriers) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelCarriersCarriers) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

