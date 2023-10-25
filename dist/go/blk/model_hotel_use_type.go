/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the HotelUseType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelUseType{}

// HotelUseType struct for HotelUseType
type HotelUseType struct {
	// Block access exclusion/restriction type.
	AccessRestrictions []BlockAccessRestrictionType `json:"accessRestrictions,omitempty"`
	// Indicates whether this business block can be updated only by the Hotel to which it belongs. This is used to communicate to CRO that the business block can be only updated by the Hotel.
	HotelUseOnly *bool `json:"hotelUseOnly,omitempty"`
	// Explains the reason why the business block can be updated only by the Hotel.
	HotelUseReason *string `json:"hotelUseReason,omitempty"`
}

// NewHotelUseType instantiates a new HotelUseType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelUseType() *HotelUseType {
	this := HotelUseType{}
	return &this
}

// NewHotelUseTypeWithDefaults instantiates a new HotelUseType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelUseTypeWithDefaults() *HotelUseType {
	this := HotelUseType{}
	return &this
}

// GetAccessRestrictions returns the AccessRestrictions field value if set, zero value otherwise.
func (o *HotelUseType) GetAccessRestrictions() []BlockAccessRestrictionType {
	if o == nil || IsNil(o.AccessRestrictions) {
		var ret []BlockAccessRestrictionType
		return ret
	}
	return o.AccessRestrictions
}

// GetAccessRestrictionsOk returns a tuple with the AccessRestrictions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelUseType) GetAccessRestrictionsOk() ([]BlockAccessRestrictionType, bool) {
	if o == nil || IsNil(o.AccessRestrictions) {
		return nil, false
	}
	return o.AccessRestrictions, true
}

// HasAccessRestrictions returns a boolean if a field has been set.
func (o *HotelUseType) HasAccessRestrictions() bool {
	if o != nil && !IsNil(o.AccessRestrictions) {
		return true
	}

	return false
}

// SetAccessRestrictions gets a reference to the given []BlockAccessRestrictionType and assigns it to the AccessRestrictions field.
func (o *HotelUseType) SetAccessRestrictions(v []BlockAccessRestrictionType) {
	o.AccessRestrictions = v
}

// GetHotelUseOnly returns the HotelUseOnly field value if set, zero value otherwise.
func (o *HotelUseType) GetHotelUseOnly() bool {
	if o == nil || IsNil(o.HotelUseOnly) {
		var ret bool
		return ret
	}
	return *o.HotelUseOnly
}

// GetHotelUseOnlyOk returns a tuple with the HotelUseOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelUseType) GetHotelUseOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.HotelUseOnly) {
		return nil, false
	}
	return o.HotelUseOnly, true
}

// HasHotelUseOnly returns a boolean if a field has been set.
func (o *HotelUseType) HasHotelUseOnly() bool {
	if o != nil && !IsNil(o.HotelUseOnly) {
		return true
	}

	return false
}

// SetHotelUseOnly gets a reference to the given bool and assigns it to the HotelUseOnly field.
func (o *HotelUseType) SetHotelUseOnly(v bool) {
	o.HotelUseOnly = &v
}

// GetHotelUseReason returns the HotelUseReason field value if set, zero value otherwise.
func (o *HotelUseType) GetHotelUseReason() string {
	if o == nil || IsNil(o.HotelUseReason) {
		var ret string
		return ret
	}
	return *o.HotelUseReason
}

// GetHotelUseReasonOk returns a tuple with the HotelUseReason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelUseType) GetHotelUseReasonOk() (*string, bool) {
	if o == nil || IsNil(o.HotelUseReason) {
		return nil, false
	}
	return o.HotelUseReason, true
}

// HasHotelUseReason returns a boolean if a field has been set.
func (o *HotelUseType) HasHotelUseReason() bool {
	if o != nil && !IsNil(o.HotelUseReason) {
		return true
	}

	return false
}

// SetHotelUseReason gets a reference to the given string and assigns it to the HotelUseReason field.
func (o *HotelUseType) SetHotelUseReason(v string) {
	o.HotelUseReason = &v
}

func (o HotelUseType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelUseType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccessRestrictions) {
		toSerialize["accessRestrictions"] = o.AccessRestrictions
	}
	if !IsNil(o.HotelUseOnly) {
		toSerialize["hotelUseOnly"] = o.HotelUseOnly
	}
	if !IsNil(o.HotelUseReason) {
		toSerialize["hotelUseReason"] = o.HotelUseReason
	}
	return toSerialize, nil
}

type NullableHotelUseType struct {
	value *HotelUseType
	isSet bool
}

func (v NullableHotelUseType) Get() *HotelUseType {
	return v.value
}

func (v *NullableHotelUseType) Set(val *HotelUseType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelUseType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelUseType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelUseType(val *HotelUseType) *NullableHotelUseType {
	return &NullableHotelUseType{value: val, isSet: true}
}

func (v NullableHotelUseType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelUseType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


