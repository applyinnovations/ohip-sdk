/*
OPERA Cloud API for Customer Management Service

This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cms

import (
	"encoding/json"
)

// checks if the GuestLastStayInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestLastStayInfoType{}

// GuestLastStayInfoType Contains last stay related details of the guest.
type GuestLastStayInfoType struct {
	// Guest's last stay date.
	LastStayDate *string `json:"lastStayDate,omitempty"`
	LastStayRate *CurrencyAmountType `json:"lastStayRate,omitempty"`
	// Room Number where the guest stayed.
	LastStayRoom *string `json:"lastStayRoom,omitempty"`
	// The total number of previous stay of the guest.
	TotalStay *int32 `json:"totalStay,omitempty"`
}

// NewGuestLastStayInfoType instantiates a new GuestLastStayInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestLastStayInfoType() *GuestLastStayInfoType {
	this := GuestLastStayInfoType{}
	return &this
}

// NewGuestLastStayInfoTypeWithDefaults instantiates a new GuestLastStayInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestLastStayInfoTypeWithDefaults() *GuestLastStayInfoType {
	this := GuestLastStayInfoType{}
	return &this
}

// GetLastStayDate returns the LastStayDate field value if set, zero value otherwise.
func (o *GuestLastStayInfoType) GetLastStayDate() string {
	if o == nil || IsNil(o.LastStayDate) {
		var ret string
		return ret
	}
	return *o.LastStayDate
}

// GetLastStayDateOk returns a tuple with the LastStayDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestLastStayInfoType) GetLastStayDateOk() (*string, bool) {
	if o == nil || IsNil(o.LastStayDate) {
		return nil, false
	}
	return o.LastStayDate, true
}

// HasLastStayDate returns a boolean if a field has been set.
func (o *GuestLastStayInfoType) HasLastStayDate() bool {
	if o != nil && !IsNil(o.LastStayDate) {
		return true
	}

	return false
}

// SetLastStayDate gets a reference to the given string and assigns it to the LastStayDate field.
func (o *GuestLastStayInfoType) SetLastStayDate(v string) {
	o.LastStayDate = &v
}

// GetLastStayRate returns the LastStayRate field value if set, zero value otherwise.
func (o *GuestLastStayInfoType) GetLastStayRate() CurrencyAmountType {
	if o == nil || IsNil(o.LastStayRate) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.LastStayRate
}

// GetLastStayRateOk returns a tuple with the LastStayRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestLastStayInfoType) GetLastStayRateOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.LastStayRate) {
		return nil, false
	}
	return o.LastStayRate, true
}

// HasLastStayRate returns a boolean if a field has been set.
func (o *GuestLastStayInfoType) HasLastStayRate() bool {
	if o != nil && !IsNil(o.LastStayRate) {
		return true
	}

	return false
}

// SetLastStayRate gets a reference to the given CurrencyAmountType and assigns it to the LastStayRate field.
func (o *GuestLastStayInfoType) SetLastStayRate(v CurrencyAmountType) {
	o.LastStayRate = &v
}

// GetLastStayRoom returns the LastStayRoom field value if set, zero value otherwise.
func (o *GuestLastStayInfoType) GetLastStayRoom() string {
	if o == nil || IsNil(o.LastStayRoom) {
		var ret string
		return ret
	}
	return *o.LastStayRoom
}

// GetLastStayRoomOk returns a tuple with the LastStayRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestLastStayInfoType) GetLastStayRoomOk() (*string, bool) {
	if o == nil || IsNil(o.LastStayRoom) {
		return nil, false
	}
	return o.LastStayRoom, true
}

// HasLastStayRoom returns a boolean if a field has been set.
func (o *GuestLastStayInfoType) HasLastStayRoom() bool {
	if o != nil && !IsNil(o.LastStayRoom) {
		return true
	}

	return false
}

// SetLastStayRoom gets a reference to the given string and assigns it to the LastStayRoom field.
func (o *GuestLastStayInfoType) SetLastStayRoom(v string) {
	o.LastStayRoom = &v
}

// GetTotalStay returns the TotalStay field value if set, zero value otherwise.
func (o *GuestLastStayInfoType) GetTotalStay() int32 {
	if o == nil || IsNil(o.TotalStay) {
		var ret int32
		return ret
	}
	return *o.TotalStay
}

// GetTotalStayOk returns a tuple with the TotalStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestLastStayInfoType) GetTotalStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalStay) {
		return nil, false
	}
	return o.TotalStay, true
}

// HasTotalStay returns a boolean if a field has been set.
func (o *GuestLastStayInfoType) HasTotalStay() bool {
	if o != nil && !IsNil(o.TotalStay) {
		return true
	}

	return false
}

// SetTotalStay gets a reference to the given int32 and assigns it to the TotalStay field.
func (o *GuestLastStayInfoType) SetTotalStay(v int32) {
	o.TotalStay = &v
}

func (o GuestLastStayInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestLastStayInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.LastStayDate) {
		toSerialize["lastStayDate"] = o.LastStayDate
	}
	if !IsNil(o.LastStayRate) {
		toSerialize["lastStayRate"] = o.LastStayRate
	}
	if !IsNil(o.LastStayRoom) {
		toSerialize["lastStayRoom"] = o.LastStayRoom
	}
	if !IsNil(o.TotalStay) {
		toSerialize["totalStay"] = o.TotalStay
	}
	return toSerialize, nil
}

type NullableGuestLastStayInfoType struct {
	value *GuestLastStayInfoType
	isSet bool
}

func (v NullableGuestLastStayInfoType) Get() *GuestLastStayInfoType {
	return v.value
}

func (v *NullableGuestLastStayInfoType) Set(val *GuestLastStayInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestLastStayInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestLastStayInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestLastStayInfoType(val *GuestLastStayInfoType) *NullableGuestLastStayInfoType {
	return &NullableGuestLastStayInfoType{value: val, isSet: true}
}

func (v NullableGuestLastStayInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestLastStayInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

