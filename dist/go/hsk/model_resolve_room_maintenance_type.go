/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the ResolveRoomMaintenanceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResolveRoomMaintenanceType{}

// ResolveRoomMaintenanceType Resolve Room Maintenance Type.
type ResolveRoomMaintenanceType struct {
	// Resolve date.
	ResolveDate *string `json:"resolveDate,omitempty"`
	// Resolved by user.
	ResolveUser *string `json:"resolveUser,omitempty"`
}

// NewResolveRoomMaintenanceType instantiates a new ResolveRoomMaintenanceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResolveRoomMaintenanceType() *ResolveRoomMaintenanceType {
	this := ResolveRoomMaintenanceType{}
	return &this
}

// NewResolveRoomMaintenanceTypeWithDefaults instantiates a new ResolveRoomMaintenanceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResolveRoomMaintenanceTypeWithDefaults() *ResolveRoomMaintenanceType {
	this := ResolveRoomMaintenanceType{}
	return &this
}

// GetResolveDate returns the ResolveDate field value if set, zero value otherwise.
func (o *ResolveRoomMaintenanceType) GetResolveDate() string {
	if o == nil || IsNil(o.ResolveDate) {
		var ret string
		return ret
	}
	return *o.ResolveDate
}

// GetResolveDateOk returns a tuple with the ResolveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResolveRoomMaintenanceType) GetResolveDateOk() (*string, bool) {
	if o == nil || IsNil(o.ResolveDate) {
		return nil, false
	}
	return o.ResolveDate, true
}

// HasResolveDate returns a boolean if a field has been set.
func (o *ResolveRoomMaintenanceType) HasResolveDate() bool {
	if o != nil && !IsNil(o.ResolveDate) {
		return true
	}

	return false
}

// SetResolveDate gets a reference to the given string and assigns it to the ResolveDate field.
func (o *ResolveRoomMaintenanceType) SetResolveDate(v string) {
	o.ResolveDate = &v
}

// GetResolveUser returns the ResolveUser field value if set, zero value otherwise.
func (o *ResolveRoomMaintenanceType) GetResolveUser() string {
	if o == nil || IsNil(o.ResolveUser) {
		var ret string
		return ret
	}
	return *o.ResolveUser
}

// GetResolveUserOk returns a tuple with the ResolveUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResolveRoomMaintenanceType) GetResolveUserOk() (*string, bool) {
	if o == nil || IsNil(o.ResolveUser) {
		return nil, false
	}
	return o.ResolveUser, true
}

// HasResolveUser returns a boolean if a field has been set.
func (o *ResolveRoomMaintenanceType) HasResolveUser() bool {
	if o != nil && !IsNil(o.ResolveUser) {
		return true
	}

	return false
}

// SetResolveUser gets a reference to the given string and assigns it to the ResolveUser field.
func (o *ResolveRoomMaintenanceType) SetResolveUser(v string) {
	o.ResolveUser = &v
}

func (o ResolveRoomMaintenanceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResolveRoomMaintenanceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ResolveDate) {
		toSerialize["resolveDate"] = o.ResolveDate
	}
	if !IsNil(o.ResolveUser) {
		toSerialize["resolveUser"] = o.ResolveUser
	}
	return toSerialize, nil
}

type NullableResolveRoomMaintenanceType struct {
	value *ResolveRoomMaintenanceType
	isSet bool
}

func (v NullableResolveRoomMaintenanceType) Get() *ResolveRoomMaintenanceType {
	return v.value
}

func (v *NullableResolveRoomMaintenanceType) Set(val *ResolveRoomMaintenanceType) {
	v.value = val
	v.isSet = true
}

func (v NullableResolveRoomMaintenanceType) IsSet() bool {
	return v.isSet
}

func (v *NullableResolveRoomMaintenanceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResolveRoomMaintenanceType(val *ResolveRoomMaintenanceType) *NullableResolveRoomMaintenanceType {
	return &NullableResolveRoomMaintenanceType{value: val, isSet: true}
}

func (v NullableResolveRoomMaintenanceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResolveRoomMaintenanceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


