/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ProfileStayDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileStayDetailsType{}

// ProfileStayDetailsType Type provides the stay history and future reservations of specific profile.
type ProfileStayDetailsType struct {
	ReservationInfoList *ReservationStayHistoryFutureInfoType `json:"reservationInfoList,omitempty"`
}

// NewProfileStayDetailsType instantiates a new ProfileStayDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileStayDetailsType() *ProfileStayDetailsType {
	this := ProfileStayDetailsType{}
	return &this
}

// NewProfileStayDetailsTypeWithDefaults instantiates a new ProfileStayDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileStayDetailsTypeWithDefaults() *ProfileStayDetailsType {
	this := ProfileStayDetailsType{}
	return &this
}

// GetReservationInfoList returns the ReservationInfoList field value if set, zero value otherwise.
func (o *ProfileStayDetailsType) GetReservationInfoList() ReservationStayHistoryFutureInfoType {
	if o == nil || IsNil(o.ReservationInfoList) {
		var ret ReservationStayHistoryFutureInfoType
		return ret
	}
	return *o.ReservationInfoList
}

// GetReservationInfoListOk returns a tuple with the ReservationInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileStayDetailsType) GetReservationInfoListOk() (*ReservationStayHistoryFutureInfoType, bool) {
	if o == nil || IsNil(o.ReservationInfoList) {
		return nil, false
	}
	return o.ReservationInfoList, true
}

// HasReservationInfoList returns a boolean if a field has been set.
func (o *ProfileStayDetailsType) HasReservationInfoList() bool {
	if o != nil && !IsNil(o.ReservationInfoList) {
		return true
	}

	return false
}

// SetReservationInfoList gets a reference to the given ReservationStayHistoryFutureInfoType and assigns it to the ReservationInfoList field.
func (o *ProfileStayDetailsType) SetReservationInfoList(v ReservationStayHistoryFutureInfoType) {
	o.ReservationInfoList = &v
}

func (o ProfileStayDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileStayDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ReservationInfoList) {
		toSerialize["reservationInfoList"] = o.ReservationInfoList
	}
	return toSerialize, nil
}

type NullableProfileStayDetailsType struct {
	value *ProfileStayDetailsType
	isSet bool
}

func (v NullableProfileStayDetailsType) Get() *ProfileStayDetailsType {
	return v.value
}

func (v *NullableProfileStayDetailsType) Set(val *ProfileStayDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileStayDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileStayDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileStayDetailsType(val *ProfileStayDetailsType) *NullableProfileStayDetailsType {
	return &NullableProfileStayDetailsType{value: val, isSet: true}
}

func (v NullableProfileStayDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileStayDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


