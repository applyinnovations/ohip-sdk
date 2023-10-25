/*
OPERA Cloud Availability Extension API

APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2.0.0
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package parext

import (
	"encoding/json"
)

// checks if the RoomRateInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRateInfoType{}

// RoomRateInfoType struct for RoomRateInfoType
type RoomRateInfoType struct {
	Packages []CodeDescriptionType `json:"packages,omitempty"`
	PriceInfo []RoomRatePriceInfoType `json:"priceInfo,omitempty"`
}

// NewRoomRateInfoType instantiates a new RoomRateInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRateInfoType() *RoomRateInfoType {
	this := RoomRateInfoType{}
	return &this
}

// NewRoomRateInfoTypeWithDefaults instantiates a new RoomRateInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRateInfoTypeWithDefaults() *RoomRateInfoType {
	this := RoomRateInfoType{}
	return &this
}

// GetPackages returns the Packages field value if set, zero value otherwise.
func (o *RoomRateInfoType) GetPackages() []CodeDescriptionType {
	if o == nil || IsNil(o.Packages) {
		var ret []CodeDescriptionType
		return ret
	}
	return o.Packages
}

// GetPackagesOk returns a tuple with the Packages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRateInfoType) GetPackagesOk() ([]CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Packages) {
		return nil, false
	}
	return o.Packages, true
}

// HasPackages returns a boolean if a field has been set.
func (o *RoomRateInfoType) HasPackages() bool {
	if o != nil && !IsNil(o.Packages) {
		return true
	}

	return false
}

// SetPackages gets a reference to the given []CodeDescriptionType and assigns it to the Packages field.
func (o *RoomRateInfoType) SetPackages(v []CodeDescriptionType) {
	o.Packages = v
}

// GetPriceInfo returns the PriceInfo field value if set, zero value otherwise.
func (o *RoomRateInfoType) GetPriceInfo() []RoomRatePriceInfoType {
	if o == nil || IsNil(o.PriceInfo) {
		var ret []RoomRatePriceInfoType
		return ret
	}
	return o.PriceInfo
}

// GetPriceInfoOk returns a tuple with the PriceInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRateInfoType) GetPriceInfoOk() ([]RoomRatePriceInfoType, bool) {
	if o == nil || IsNil(o.PriceInfo) {
		return nil, false
	}
	return o.PriceInfo, true
}

// HasPriceInfo returns a boolean if a field has been set.
func (o *RoomRateInfoType) HasPriceInfo() bool {
	if o != nil && !IsNil(o.PriceInfo) {
		return true
	}

	return false
}

// SetPriceInfo gets a reference to the given []RoomRatePriceInfoType and assigns it to the PriceInfo field.
func (o *RoomRateInfoType) SetPriceInfo(v []RoomRatePriceInfoType) {
	o.PriceInfo = v
}

func (o RoomRateInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRateInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Packages) {
		toSerialize["packages"] = o.Packages
	}
	if !IsNil(o.PriceInfo) {
		toSerialize["priceInfo"] = o.PriceInfo
	}
	return toSerialize, nil
}

type NullableRoomRateInfoType struct {
	value *RoomRateInfoType
	isSet bool
}

func (v NullableRoomRateInfoType) Get() *RoomRateInfoType {
	return v.value
}

func (v *NullableRoomRateInfoType) Set(val *RoomRateInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRateInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRateInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRateInfoType(val *RoomRateInfoType) *NullableRoomRateInfoType {
	return &NullableRoomRateInfoType{value: val, isSet: true}
}

func (v NullableRoomRateInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRateInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


