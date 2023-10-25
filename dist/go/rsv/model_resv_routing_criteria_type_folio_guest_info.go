/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ResvRoutingCriteriaTypeFolioGuestInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvRoutingCriteriaTypeFolioGuestInfo{}

// ResvRoutingCriteriaTypeFolioGuestInfo Guest details
type ResvRoutingCriteriaTypeFolioGuestInfo struct {
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
}

// NewResvRoutingCriteriaTypeFolioGuestInfo instantiates a new ResvRoutingCriteriaTypeFolioGuestInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvRoutingCriteriaTypeFolioGuestInfo() *ResvRoutingCriteriaTypeFolioGuestInfo {
	this := ResvRoutingCriteriaTypeFolioGuestInfo{}
	return &this
}

// NewResvRoutingCriteriaTypeFolioGuestInfoWithDefaults instantiates a new ResvRoutingCriteriaTypeFolioGuestInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvRoutingCriteriaTypeFolioGuestInfoWithDefaults() *ResvRoutingCriteriaTypeFolioGuestInfo {
	this := ResvRoutingCriteriaTypeFolioGuestInfo{}
	return &this
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeFolioGuestInfo) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeFolioGuestInfo) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeFolioGuestInfo) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *ResvRoutingCriteriaTypeFolioGuestInfo) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

func (o ResvRoutingCriteriaTypeFolioGuestInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvRoutingCriteriaTypeFolioGuestInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	return toSerialize, nil
}

type NullableResvRoutingCriteriaTypeFolioGuestInfo struct {
	value *ResvRoutingCriteriaTypeFolioGuestInfo
	isSet bool
}

func (v NullableResvRoutingCriteriaTypeFolioGuestInfo) Get() *ResvRoutingCriteriaTypeFolioGuestInfo {
	return v.value
}

func (v *NullableResvRoutingCriteriaTypeFolioGuestInfo) Set(val *ResvRoutingCriteriaTypeFolioGuestInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableResvRoutingCriteriaTypeFolioGuestInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableResvRoutingCriteriaTypeFolioGuestInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvRoutingCriteriaTypeFolioGuestInfo(val *ResvRoutingCriteriaTypeFolioGuestInfo) *NullableResvRoutingCriteriaTypeFolioGuestInfo {
	return &NullableResvRoutingCriteriaTypeFolioGuestInfo{value: val, isSet: true}
}

func (v NullableResvRoutingCriteriaTypeFolioGuestInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvRoutingCriteriaTypeFolioGuestInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


