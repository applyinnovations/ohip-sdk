/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ProfileAccessType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileAccessType{}

// ProfileAccessType struct for ProfileAccessType
type ProfileAccessType struct {
	// Indicates the Chain code where the profile was created
	ChainCode *string `json:"chainCode,omitempty"`
	// Indicates the CRO code where the profile was created
	CroCode *string `json:"croCode,omitempty"`
	// Indicates the Hotel code where the profile was created
	HotelId *string `json:"hotelId,omitempty"`
	SharedLevel *ProfileSharedLevelType `json:"sharedLevel,omitempty"`
}

// NewProfileAccessType instantiates a new ProfileAccessType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileAccessType() *ProfileAccessType {
	this := ProfileAccessType{}
	return &this
}

// NewProfileAccessTypeWithDefaults instantiates a new ProfileAccessType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileAccessTypeWithDefaults() *ProfileAccessType {
	this := ProfileAccessType{}
	return &this
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *ProfileAccessType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccessType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *ProfileAccessType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *ProfileAccessType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetCroCode returns the CroCode field value if set, zero value otherwise.
func (o *ProfileAccessType) GetCroCode() string {
	if o == nil || IsNil(o.CroCode) {
		var ret string
		return ret
	}
	return *o.CroCode
}

// GetCroCodeOk returns a tuple with the CroCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccessType) GetCroCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CroCode) {
		return nil, false
	}
	return o.CroCode, true
}

// HasCroCode returns a boolean if a field has been set.
func (o *ProfileAccessType) HasCroCode() bool {
	if o != nil && !IsNil(o.CroCode) {
		return true
	}

	return false
}

// SetCroCode gets a reference to the given string and assigns it to the CroCode field.
func (o *ProfileAccessType) SetCroCode(v string) {
	o.CroCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ProfileAccessType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccessType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ProfileAccessType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ProfileAccessType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSharedLevel returns the SharedLevel field value if set, zero value otherwise.
func (o *ProfileAccessType) GetSharedLevel() ProfileSharedLevelType {
	if o == nil || IsNil(o.SharedLevel) {
		var ret ProfileSharedLevelType
		return ret
	}
	return *o.SharedLevel
}

// GetSharedLevelOk returns a tuple with the SharedLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccessType) GetSharedLevelOk() (*ProfileSharedLevelType, bool) {
	if o == nil || IsNil(o.SharedLevel) {
		return nil, false
	}
	return o.SharedLevel, true
}

// HasSharedLevel returns a boolean if a field has been set.
func (o *ProfileAccessType) HasSharedLevel() bool {
	if o != nil && !IsNil(o.SharedLevel) {
		return true
	}

	return false
}

// SetSharedLevel gets a reference to the given ProfileSharedLevelType and assigns it to the SharedLevel field.
func (o *ProfileAccessType) SetSharedLevel(v ProfileSharedLevelType) {
	o.SharedLevel = &v
}

func (o ProfileAccessType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileAccessType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.CroCode) {
		toSerialize["croCode"] = o.CroCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.SharedLevel) {
		toSerialize["sharedLevel"] = o.SharedLevel
	}
	return toSerialize, nil
}

type NullableProfileAccessType struct {
	value *ProfileAccessType
	isSet bool
}

func (v NullableProfileAccessType) Get() *ProfileAccessType {
	return v.value
}

func (v *NullableProfileAccessType) Set(val *ProfileAccessType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileAccessType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileAccessType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileAccessType(val *ProfileAccessType) *NullableProfileAccessType {
	return &NullableProfileAccessType{value: val, isSet: true}
}

func (v NullableProfileAccessType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileAccessType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


