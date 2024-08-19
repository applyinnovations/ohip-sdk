/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the MasterAccountTypeRoomRate type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MasterAccountTypeRoomRate{}

// MasterAccountTypeRoomRate Posting master reservation room and rate information.
type MasterAccountTypeRoomRate struct {
	// Market Code of the reservation.
	MarketCode *string `json:"marketCode,omitempty"`
	// The Rate Code of the reservation.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Room Type of the reservation.
	RoomType *string `json:"roomType,omitempty"`
	// Source Code of the reservation.
	SourceCode *string `json:"sourceCode,omitempty"`
}

// NewMasterAccountTypeRoomRate instantiates a new MasterAccountTypeRoomRate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMasterAccountTypeRoomRate() *MasterAccountTypeRoomRate {
	this := MasterAccountTypeRoomRate{}
	return &this
}

// NewMasterAccountTypeRoomRateWithDefaults instantiates a new MasterAccountTypeRoomRate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMasterAccountTypeRoomRateWithDefaults() *MasterAccountTypeRoomRate {
	this := MasterAccountTypeRoomRate{}
	return &this
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *MasterAccountTypeRoomRate) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccountTypeRoomRate) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *MasterAccountTypeRoomRate) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *MasterAccountTypeRoomRate) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *MasterAccountTypeRoomRate) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccountTypeRoomRate) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *MasterAccountTypeRoomRate) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *MasterAccountTypeRoomRate) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *MasterAccountTypeRoomRate) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccountTypeRoomRate) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *MasterAccountTypeRoomRate) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *MasterAccountTypeRoomRate) SetRoomType(v string) {
	o.RoomType = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *MasterAccountTypeRoomRate) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccountTypeRoomRate) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *MasterAccountTypeRoomRate) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *MasterAccountTypeRoomRate) SetSourceCode(v string) {
	o.SourceCode = &v
}

func (o MasterAccountTypeRoomRate) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MasterAccountTypeRoomRate) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	return toSerialize, nil
}

type NullableMasterAccountTypeRoomRate struct {
	value *MasterAccountTypeRoomRate
	isSet bool
}

func (v NullableMasterAccountTypeRoomRate) Get() *MasterAccountTypeRoomRate {
	return v.value
}

func (v *NullableMasterAccountTypeRoomRate) Set(val *MasterAccountTypeRoomRate) {
	v.value = val
	v.isSet = true
}

func (v NullableMasterAccountTypeRoomRate) IsSet() bool {
	return v.isSet
}

func (v *NullableMasterAccountTypeRoomRate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMasterAccountTypeRoomRate(val *MasterAccountTypeRoomRate) *NullableMasterAccountTypeRoomRate {
	return &NullableMasterAccountTypeRoomRate{value: val, isSet: true}
}

func (v NullableMasterAccountTypeRoomRate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMasterAccountTypeRoomRate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


