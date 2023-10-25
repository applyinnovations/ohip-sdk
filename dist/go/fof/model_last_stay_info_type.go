/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the LastStayInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LastStayInfoType{}

// LastStayInfoType Contains last stay related details for the profile
type LastStayInfoType struct {
	LastRate *CurrencyAmountType `json:"lastRate,omitempty"`
	// Used to hold last room information for the profile.
	LastRoom *string `json:"lastRoom,omitempty"`
	// Used to hold last stay information for the profile.
	LastVisit *string `json:"lastVisit,omitempty"`
	// The total number of previous stay of the profile.
	TotalStay *int32 `json:"totalStay,omitempty"`
}

// NewLastStayInfoType instantiates a new LastStayInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLastStayInfoType() *LastStayInfoType {
	this := LastStayInfoType{}
	return &this
}

// NewLastStayInfoTypeWithDefaults instantiates a new LastStayInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLastStayInfoTypeWithDefaults() *LastStayInfoType {
	this := LastStayInfoType{}
	return &this
}

// GetLastRate returns the LastRate field value if set, zero value otherwise.
func (o *LastStayInfoType) GetLastRate() CurrencyAmountType {
	if o == nil || IsNil(o.LastRate) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.LastRate
}

// GetLastRateOk returns a tuple with the LastRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LastStayInfoType) GetLastRateOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.LastRate) {
		return nil, false
	}
	return o.LastRate, true
}

// HasLastRate returns a boolean if a field has been set.
func (o *LastStayInfoType) HasLastRate() bool {
	if o != nil && !IsNil(o.LastRate) {
		return true
	}

	return false
}

// SetLastRate gets a reference to the given CurrencyAmountType and assigns it to the LastRate field.
func (o *LastStayInfoType) SetLastRate(v CurrencyAmountType) {
	o.LastRate = &v
}

// GetLastRoom returns the LastRoom field value if set, zero value otherwise.
func (o *LastStayInfoType) GetLastRoom() string {
	if o == nil || IsNil(o.LastRoom) {
		var ret string
		return ret
	}
	return *o.LastRoom
}

// GetLastRoomOk returns a tuple with the LastRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LastStayInfoType) GetLastRoomOk() (*string, bool) {
	if o == nil || IsNil(o.LastRoom) {
		return nil, false
	}
	return o.LastRoom, true
}

// HasLastRoom returns a boolean if a field has been set.
func (o *LastStayInfoType) HasLastRoom() bool {
	if o != nil && !IsNil(o.LastRoom) {
		return true
	}

	return false
}

// SetLastRoom gets a reference to the given string and assigns it to the LastRoom field.
func (o *LastStayInfoType) SetLastRoom(v string) {
	o.LastRoom = &v
}

// GetLastVisit returns the LastVisit field value if set, zero value otherwise.
func (o *LastStayInfoType) GetLastVisit() string {
	if o == nil || IsNil(o.LastVisit) {
		var ret string
		return ret
	}
	return *o.LastVisit
}

// GetLastVisitOk returns a tuple with the LastVisit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LastStayInfoType) GetLastVisitOk() (*string, bool) {
	if o == nil || IsNil(o.LastVisit) {
		return nil, false
	}
	return o.LastVisit, true
}

// HasLastVisit returns a boolean if a field has been set.
func (o *LastStayInfoType) HasLastVisit() bool {
	if o != nil && !IsNil(o.LastVisit) {
		return true
	}

	return false
}

// SetLastVisit gets a reference to the given string and assigns it to the LastVisit field.
func (o *LastStayInfoType) SetLastVisit(v string) {
	o.LastVisit = &v
}

// GetTotalStay returns the TotalStay field value if set, zero value otherwise.
func (o *LastStayInfoType) GetTotalStay() int32 {
	if o == nil || IsNil(o.TotalStay) {
		var ret int32
		return ret
	}
	return *o.TotalStay
}

// GetTotalStayOk returns a tuple with the TotalStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LastStayInfoType) GetTotalStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalStay) {
		return nil, false
	}
	return o.TotalStay, true
}

// HasTotalStay returns a boolean if a field has been set.
func (o *LastStayInfoType) HasTotalStay() bool {
	if o != nil && !IsNil(o.TotalStay) {
		return true
	}

	return false
}

// SetTotalStay gets a reference to the given int32 and assigns it to the TotalStay field.
func (o *LastStayInfoType) SetTotalStay(v int32) {
	o.TotalStay = &v
}

func (o LastStayInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LastStayInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.LastRate) {
		toSerialize["lastRate"] = o.LastRate
	}
	if !IsNil(o.LastRoom) {
		toSerialize["lastRoom"] = o.LastRoom
	}
	if !IsNil(o.LastVisit) {
		toSerialize["lastVisit"] = o.LastVisit
	}
	if !IsNil(o.TotalStay) {
		toSerialize["totalStay"] = o.TotalStay
	}
	return toSerialize, nil
}

type NullableLastStayInfoType struct {
	value *LastStayInfoType
	isSet bool
}

func (v NullableLastStayInfoType) Get() *LastStayInfoType {
	return v.value
}

func (v *NullableLastStayInfoType) Set(val *LastStayInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableLastStayInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableLastStayInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLastStayInfoType(val *LastStayInfoType) *NullableLastStayInfoType {
	return &NullableLastStayInfoType{value: val, isSet: true}
}

func (v NullableLastStayInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLastStayInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


