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

// checks if the ChannelGlobalDescriptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelGlobalDescriptionType{}

// ChannelGlobalDescriptionType This type holds enhanced room/rate description.
type ChannelGlobalDescriptionType struct {
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	EnhancedDesc1 *TranslationTextType50 `json:"enhancedDesc1,omitempty"`
	EnhancedDesc2 *TranslationTextType50 `json:"enhancedDesc2,omitempty"`
	EnhancedDesc3 *TranslationTextType50 `json:"enhancedDesc3,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	RateCode *string `json:"rateCode,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
	ShortDescription *TranslationTextType2000 `json:"shortDescription,omitempty"`
	Source *string `json:"source,omitempty"`
}

// NewChannelGlobalDescriptionType instantiates a new ChannelGlobalDescriptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelGlobalDescriptionType() *ChannelGlobalDescriptionType {
	this := ChannelGlobalDescriptionType{}
	return &this
}

// NewChannelGlobalDescriptionTypeWithDefaults instantiates a new ChannelGlobalDescriptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelGlobalDescriptionTypeWithDefaults() *ChannelGlobalDescriptionType {
	this := ChannelGlobalDescriptionType{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *ChannelGlobalDescriptionType) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *ChannelGlobalDescriptionType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetEnhancedDesc1 returns the EnhancedDesc1 field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc1() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDesc1) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDesc1
}

// GetEnhancedDesc1Ok returns a tuple with the EnhancedDesc1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc1Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDesc1) {
		return nil, false
	}
	return o.EnhancedDesc1, true
}

// HasEnhancedDesc1 returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasEnhancedDesc1() bool {
	if o != nil && !IsNil(o.EnhancedDesc1) {
		return true
	}

	return false
}

// SetEnhancedDesc1 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDesc1 field.
func (o *ChannelGlobalDescriptionType) SetEnhancedDesc1(v TranslationTextType50) {
	o.EnhancedDesc1 = &v
}

// GetEnhancedDesc2 returns the EnhancedDesc2 field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc2() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDesc2) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDesc2
}

// GetEnhancedDesc2Ok returns a tuple with the EnhancedDesc2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc2Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDesc2) {
		return nil, false
	}
	return o.EnhancedDesc2, true
}

// HasEnhancedDesc2 returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasEnhancedDesc2() bool {
	if o != nil && !IsNil(o.EnhancedDesc2) {
		return true
	}

	return false
}

// SetEnhancedDesc2 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDesc2 field.
func (o *ChannelGlobalDescriptionType) SetEnhancedDesc2(v TranslationTextType50) {
	o.EnhancedDesc2 = &v
}

// GetEnhancedDesc3 returns the EnhancedDesc3 field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc3() TranslationTextType50 {
	if o == nil || IsNil(o.EnhancedDesc3) {
		var ret TranslationTextType50
		return ret
	}
	return *o.EnhancedDesc3
}

// GetEnhancedDesc3Ok returns a tuple with the EnhancedDesc3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetEnhancedDesc3Ok() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.EnhancedDesc3) {
		return nil, false
	}
	return o.EnhancedDesc3, true
}

// HasEnhancedDesc3 returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasEnhancedDesc3() bool {
	if o != nil && !IsNil(o.EnhancedDesc3) {
		return true
	}

	return false
}

// SetEnhancedDesc3 gets a reference to the given TranslationTextType50 and assigns it to the EnhancedDesc3 field.
func (o *ChannelGlobalDescriptionType) SetEnhancedDesc3(v TranslationTextType50) {
	o.EnhancedDesc3 = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ChannelGlobalDescriptionType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *ChannelGlobalDescriptionType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *ChannelGlobalDescriptionType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetShortDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.ShortDescription) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetShortDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given TranslationTextType2000 and assigns it to the ShortDescription field.
func (o *ChannelGlobalDescriptionType) SetShortDescription(v TranslationTextType2000) {
	o.ShortDescription = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptionType) GetSource() string {
	if o == nil || IsNil(o.Source) {
		var ret string
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptionType) GetSourceOk() (*string, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptionType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given string and assigns it to the Source field.
func (o *ChannelGlobalDescriptionType) SetSource(v string) {
	o.Source = &v
}

func (o ChannelGlobalDescriptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelGlobalDescriptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EnhancedDesc1) {
		toSerialize["enhancedDesc1"] = o.EnhancedDesc1
	}
	if !IsNil(o.EnhancedDesc2) {
		toSerialize["enhancedDesc2"] = o.EnhancedDesc2
	}
	if !IsNil(o.EnhancedDesc3) {
		toSerialize["enhancedDesc3"] = o.EnhancedDesc3
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	return toSerialize, nil
}

type NullableChannelGlobalDescriptionType struct {
	value *ChannelGlobalDescriptionType
	isSet bool
}

func (v NullableChannelGlobalDescriptionType) Get() *ChannelGlobalDescriptionType {
	return v.value
}

func (v *NullableChannelGlobalDescriptionType) Set(val *ChannelGlobalDescriptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelGlobalDescriptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelGlobalDescriptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelGlobalDescriptionType(val *ChannelGlobalDescriptionType) *NullableChannelGlobalDescriptionType {
	return &NullableChannelGlobalDescriptionType{value: val, isSet: true}
}

func (v NullableChannelGlobalDescriptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelGlobalDescriptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

