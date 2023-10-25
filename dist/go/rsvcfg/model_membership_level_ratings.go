/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the MembershipLevelRatings type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipLevelRatings{}

// MembershipLevelRatings Request object for modifying membership levels rating details.
type MembershipLevelRatings struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of membership levels and their ratings.
	MembershipLevelRatingsInfo []MembershipLevelRatingInfoType `json:"membershipLevelRatingsInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipLevelRatings instantiates a new MembershipLevelRatings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipLevelRatings() *MembershipLevelRatings {
	this := MembershipLevelRatings{}
	return &this
}

// NewMembershipLevelRatingsWithDefaults instantiates a new MembershipLevelRatings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipLevelRatingsWithDefaults() *MembershipLevelRatings {
	this := MembershipLevelRatings{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipLevelRatings) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelRatings) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipLevelRatings) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipLevelRatings) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipLevelRatingsInfo returns the MembershipLevelRatingsInfo field value if set, zero value otherwise.
func (o *MembershipLevelRatings) GetMembershipLevelRatingsInfo() []MembershipLevelRatingInfoType {
	if o == nil || IsNil(o.MembershipLevelRatingsInfo) {
		var ret []MembershipLevelRatingInfoType
		return ret
	}
	return o.MembershipLevelRatingsInfo
}

// GetMembershipLevelRatingsInfoOk returns a tuple with the MembershipLevelRatingsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelRatings) GetMembershipLevelRatingsInfoOk() ([]MembershipLevelRatingInfoType, bool) {
	if o == nil || IsNil(o.MembershipLevelRatingsInfo) {
		return nil, false
	}
	return o.MembershipLevelRatingsInfo, true
}

// HasMembershipLevelRatingsInfo returns a boolean if a field has been set.
func (o *MembershipLevelRatings) HasMembershipLevelRatingsInfo() bool {
	if o != nil && !IsNil(o.MembershipLevelRatingsInfo) {
		return true
	}

	return false
}

// SetMembershipLevelRatingsInfo gets a reference to the given []MembershipLevelRatingInfoType and assigns it to the MembershipLevelRatingsInfo field.
func (o *MembershipLevelRatings) SetMembershipLevelRatingsInfo(v []MembershipLevelRatingInfoType) {
	o.MembershipLevelRatingsInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipLevelRatings) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelRatings) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipLevelRatings) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipLevelRatings) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipLevelRatings) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipLevelRatings) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipLevelRatingsInfo) {
		toSerialize["membershipLevelRatingsInfo"] = o.MembershipLevelRatingsInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipLevelRatings struct {
	value *MembershipLevelRatings
	isSet bool
}

func (v NullableMembershipLevelRatings) Get() *MembershipLevelRatings {
	return v.value
}

func (v *NullableMembershipLevelRatings) Set(val *MembershipLevelRatings) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipLevelRatings) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipLevelRatings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipLevelRatings(val *MembershipLevelRatings) *NullableMembershipLevelRatings {
	return &NullableMembershipLevelRatings{value: val, isSet: true}
}

func (v NullableMembershipLevelRatings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipLevelRatings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


