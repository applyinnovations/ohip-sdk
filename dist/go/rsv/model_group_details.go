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

// checks if the GroupDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GroupDetails{}

// GroupDetails Group Details
type GroupDetails struct {
	// ID of the group for the reservation.
	GroupID *string `json:"groupID,omitempty"`
	// Name of the group for the reservation.
	GroupName *string `json:"groupName,omitempty"`
}

// NewGroupDetails instantiates a new GroupDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGroupDetails() *GroupDetails {
	this := GroupDetails{}
	return &this
}

// NewGroupDetailsWithDefaults instantiates a new GroupDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGroupDetailsWithDefaults() *GroupDetails {
	this := GroupDetails{}
	return &this
}

// GetGroupID returns the GroupID field value if set, zero value otherwise.
func (o *GroupDetails) GetGroupID() string {
	if o == nil || IsNil(o.GroupID) {
		var ret string
		return ret
	}
	return *o.GroupID
}

// GetGroupIDOk returns a tuple with the GroupID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GroupDetails) GetGroupIDOk() (*string, bool) {
	if o == nil || IsNil(o.GroupID) {
		return nil, false
	}
	return o.GroupID, true
}

// HasGroupID returns a boolean if a field has been set.
func (o *GroupDetails) HasGroupID() bool {
	if o != nil && !IsNil(o.GroupID) {
		return true
	}

	return false
}

// SetGroupID gets a reference to the given string and assigns it to the GroupID field.
func (o *GroupDetails) SetGroupID(v string) {
	o.GroupID = &v
}

// GetGroupName returns the GroupName field value if set, zero value otherwise.
func (o *GroupDetails) GetGroupName() string {
	if o == nil || IsNil(o.GroupName) {
		var ret string
		return ret
	}
	return *o.GroupName
}

// GetGroupNameOk returns a tuple with the GroupName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GroupDetails) GetGroupNameOk() (*string, bool) {
	if o == nil || IsNil(o.GroupName) {
		return nil, false
	}
	return o.GroupName, true
}

// HasGroupName returns a boolean if a field has been set.
func (o *GroupDetails) HasGroupName() bool {
	if o != nil && !IsNil(o.GroupName) {
		return true
	}

	return false
}

// SetGroupName gets a reference to the given string and assigns it to the GroupName field.
func (o *GroupDetails) SetGroupName(v string) {
	o.GroupName = &v
}

func (o GroupDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GroupDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GroupID) {
		toSerialize["groupID"] = o.GroupID
	}
	if !IsNil(o.GroupName) {
		toSerialize["groupName"] = o.GroupName
	}
	return toSerialize, nil
}

type NullableGroupDetails struct {
	value *GroupDetails
	isSet bool
}

func (v NullableGroupDetails) Get() *GroupDetails {
	return v.value
}

func (v *NullableGroupDetails) Set(val *GroupDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGroupDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGroupDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGroupDetails(val *GroupDetails) *NullableGroupDetails {
	return &NullableGroupDetails{value: val, isSet: true}
}

func (v NullableGroupDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGroupDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

