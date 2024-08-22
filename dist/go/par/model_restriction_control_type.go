/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the RestrictionControlType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RestrictionControlType{}

// RestrictionControlType The RestrictionControlType is used to indicate the applicability of the restriction.
type RestrictionControlType struct {
	// Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified.
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	// Indicates the restriction is applicable at the House Level. When this is true all other attributes are ignored.
	House *bool `json:"house,omitempty"`
	// Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified.
	RatePlanCategory *string `json:"ratePlanCategory,omitempty"`
	// Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified.
	RoomClass *string `json:"roomClass,omitempty"`
	// Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified.
	RoomType *string `json:"roomType,omitempty"`
}

// NewRestrictionControlType instantiates a new RestrictionControlType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRestrictionControlType() *RestrictionControlType {
	this := RestrictionControlType{}
	return &this
}

// NewRestrictionControlTypeWithDefaults instantiates a new RestrictionControlType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRestrictionControlTypeWithDefaults() *RestrictionControlType {
	this := RestrictionControlType{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *RestrictionControlType) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *RestrictionControlType) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *RestrictionControlType) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetHouse returns the House field value if set, zero value otherwise.
func (o *RestrictionControlType) GetHouse() bool {
	if o == nil || IsNil(o.House) {
		var ret bool
		return ret
	}
	return *o.House
}

// GetHouseOk returns a tuple with the House field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetHouseOk() (*bool, bool) {
	if o == nil || IsNil(o.House) {
		return nil, false
	}
	return o.House, true
}

// HasHouse returns a boolean if a field has been set.
func (o *RestrictionControlType) HasHouse() bool {
	if o != nil && !IsNil(o.House) {
		return true
	}

	return false
}

// SetHouse gets a reference to the given bool and assigns it to the House field.
func (o *RestrictionControlType) SetHouse(v bool) {
	o.House = &v
}

// GetRatePlanCategory returns the RatePlanCategory field value if set, zero value otherwise.
func (o *RestrictionControlType) GetRatePlanCategory() string {
	if o == nil || IsNil(o.RatePlanCategory) {
		var ret string
		return ret
	}
	return *o.RatePlanCategory
}

// GetRatePlanCategoryOk returns a tuple with the RatePlanCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetRatePlanCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCategory) {
		return nil, false
	}
	return o.RatePlanCategory, true
}

// HasRatePlanCategory returns a boolean if a field has been set.
func (o *RestrictionControlType) HasRatePlanCategory() bool {
	if o != nil && !IsNil(o.RatePlanCategory) {
		return true
	}

	return false
}

// SetRatePlanCategory gets a reference to the given string and assigns it to the RatePlanCategory field.
func (o *RestrictionControlType) SetRatePlanCategory(v string) {
	o.RatePlanCategory = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *RestrictionControlType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *RestrictionControlType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *RestrictionControlType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RestrictionControlType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RestrictionControlType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *RestrictionControlType) SetRoomClass(v string) {
	o.RoomClass = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RestrictionControlType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionControlType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RestrictionControlType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RestrictionControlType) SetRoomType(v string) {
	o.RoomType = &v
}

func (o RestrictionControlType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RestrictionControlType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.House) {
		toSerialize["house"] = o.House
	}
	if !IsNil(o.RatePlanCategory) {
		toSerialize["ratePlanCategory"] = o.RatePlanCategory
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableRestrictionControlType struct {
	value *RestrictionControlType
	isSet bool
}

func (v NullableRestrictionControlType) Get() *RestrictionControlType {
	return v.value
}

func (v *NullableRestrictionControlType) Set(val *RestrictionControlType) {
	v.value = val
	v.isSet = true
}

func (v NullableRestrictionControlType) IsSet() bool {
	return v.isSet
}

func (v *NullableRestrictionControlType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRestrictionControlType(val *RestrictionControlType) *NullableRestrictionControlType {
	return &NullableRestrictionControlType{value: val, isSet: true}
}

func (v NullableRestrictionControlType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRestrictionControlType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


