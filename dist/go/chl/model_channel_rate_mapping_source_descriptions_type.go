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

// checks if the ChannelRateMappingSourceDescriptionsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRateMappingSourceDescriptionsType{}

// ChannelRateMappingSourceDescriptionsType Source descriptions of a hotel-channel rate code mapping.
type ChannelRateMappingSourceDescriptionsType struct {
	// Description from hotel rate code configuration.
	Description *string `json:"description,omitempty"`
	GlobalDescription *ChannelRateMappingEnhancedDescriptionType `json:"globalDescription,omitempty"`
	// Hotel code where the descriptions belong to.
	HotelId *string `json:"hotelId,omitempty"`
	// Rate code where the descriptions belong to.
	RateCode *string `json:"rateCode,omitempty"`
}

// NewChannelRateMappingSourceDescriptionsType instantiates a new ChannelRateMappingSourceDescriptionsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRateMappingSourceDescriptionsType() *ChannelRateMappingSourceDescriptionsType {
	this := ChannelRateMappingSourceDescriptionsType{}
	return &this
}

// NewChannelRateMappingSourceDescriptionsTypeWithDefaults instantiates a new ChannelRateMappingSourceDescriptionsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRateMappingSourceDescriptionsTypeWithDefaults() *ChannelRateMappingSourceDescriptionsType {
	this := ChannelRateMappingSourceDescriptionsType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ChannelRateMappingSourceDescriptionsType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingSourceDescriptionsType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ChannelRateMappingSourceDescriptionsType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ChannelRateMappingSourceDescriptionsType) SetDescription(v string) {
	o.Description = &v
}

// GetGlobalDescription returns the GlobalDescription field value if set, zero value otherwise.
func (o *ChannelRateMappingSourceDescriptionsType) GetGlobalDescription() ChannelRateMappingEnhancedDescriptionType {
	if o == nil || IsNil(o.GlobalDescription) {
		var ret ChannelRateMappingEnhancedDescriptionType
		return ret
	}
	return *o.GlobalDescription
}

// GetGlobalDescriptionOk returns a tuple with the GlobalDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingSourceDescriptionsType) GetGlobalDescriptionOk() (*ChannelRateMappingEnhancedDescriptionType, bool) {
	if o == nil || IsNil(o.GlobalDescription) {
		return nil, false
	}
	return o.GlobalDescription, true
}

// HasGlobalDescription returns a boolean if a field has been set.
func (o *ChannelRateMappingSourceDescriptionsType) HasGlobalDescription() bool {
	if o != nil && !IsNil(o.GlobalDescription) {
		return true
	}

	return false
}

// SetGlobalDescription gets a reference to the given ChannelRateMappingEnhancedDescriptionType and assigns it to the GlobalDescription field.
func (o *ChannelRateMappingSourceDescriptionsType) SetGlobalDescription(v ChannelRateMappingEnhancedDescriptionType) {
	o.GlobalDescription = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ChannelRateMappingSourceDescriptionsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingSourceDescriptionsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ChannelRateMappingSourceDescriptionsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ChannelRateMappingSourceDescriptionsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *ChannelRateMappingSourceDescriptionsType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingSourceDescriptionsType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *ChannelRateMappingSourceDescriptionsType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *ChannelRateMappingSourceDescriptionsType) SetRateCode(v string) {
	o.RateCode = &v
}

func (o ChannelRateMappingSourceDescriptionsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRateMappingSourceDescriptionsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.GlobalDescription) {
		toSerialize["globalDescription"] = o.GlobalDescription
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	return toSerialize, nil
}

type NullableChannelRateMappingSourceDescriptionsType struct {
	value *ChannelRateMappingSourceDescriptionsType
	isSet bool
}

func (v NullableChannelRateMappingSourceDescriptionsType) Get() *ChannelRateMappingSourceDescriptionsType {
	return v.value
}

func (v *NullableChannelRateMappingSourceDescriptionsType) Set(val *ChannelRateMappingSourceDescriptionsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRateMappingSourceDescriptionsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRateMappingSourceDescriptionsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRateMappingSourceDescriptionsType(val *ChannelRateMappingSourceDescriptionsType) *NullableChannelRateMappingSourceDescriptionsType {
	return &NullableChannelRateMappingSourceDescriptionsType{value: val, isSet: true}
}

func (v NullableChannelRateMappingSourceDescriptionsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRateMappingSourceDescriptionsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


