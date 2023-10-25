/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the FloorsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FloorsToBeChanged{}

// FloorsToBeChanged Request object for changing floors at the hotel level.
type FloorsToBeChanged struct {
	// This type holds a collection of floors at the hotel level.
	HotelFloors []HotelFloorType `json:"hotelFloors,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFloorsToBeChanged instantiates a new FloorsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFloorsToBeChanged() *FloorsToBeChanged {
	this := FloorsToBeChanged{}
	return &this
}

// NewFloorsToBeChangedWithDefaults instantiates a new FloorsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFloorsToBeChangedWithDefaults() *FloorsToBeChanged {
	this := FloorsToBeChanged{}
	return &this
}

// GetHotelFloors returns the HotelFloors field value if set, zero value otherwise.
func (o *FloorsToBeChanged) GetHotelFloors() []HotelFloorType {
	if o == nil || IsNil(o.HotelFloors) {
		var ret []HotelFloorType
		return ret
	}
	return o.HotelFloors
}

// GetHotelFloorsOk returns a tuple with the HotelFloors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorsToBeChanged) GetHotelFloorsOk() ([]HotelFloorType, bool) {
	if o == nil || IsNil(o.HotelFloors) {
		return nil, false
	}
	return o.HotelFloors, true
}

// HasHotelFloors returns a boolean if a field has been set.
func (o *FloorsToBeChanged) HasHotelFloors() bool {
	if o != nil && !IsNil(o.HotelFloors) {
		return true
	}

	return false
}

// SetHotelFloors gets a reference to the given []HotelFloorType and assigns it to the HotelFloors field.
func (o *FloorsToBeChanged) SetHotelFloors(v []HotelFloorType) {
	o.HotelFloors = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FloorsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FloorsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FloorsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FloorsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FloorsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FloorsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FloorsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FloorsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FloorsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelFloors) {
		toSerialize["hotelFloors"] = o.HotelFloors
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFloorsToBeChanged struct {
	value *FloorsToBeChanged
	isSet bool
}

func (v NullableFloorsToBeChanged) Get() *FloorsToBeChanged {
	return v.value
}

func (v *NullableFloorsToBeChanged) Set(val *FloorsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableFloorsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableFloorsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFloorsToBeChanged(val *FloorsToBeChanged) *NullableFloorsToBeChanged {
	return &NullableFloorsToBeChanged{value: val, isSet: true}
}

func (v NullableFloorsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFloorsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


