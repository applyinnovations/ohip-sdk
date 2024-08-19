/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResGuestTypeProfileInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResGuestTypeProfileInfo{}

// ResGuestTypeProfileInfo A collection of Profiles or Unique IDs of Profiles.
type ResGuestTypeProfileInfo struct {
	Profile *ProfileType `json:"profile,omitempty"`
	ProfileCashieringDetail *ProfileCashieringDetailType `json:"profileCashieringDetail,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	// Unique identifier of the police registration card number.
	RegistrationCardNo *string `json:"registrationCardNo,omitempty"`
}

// NewResGuestTypeProfileInfo instantiates a new ResGuestTypeProfileInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResGuestTypeProfileInfo() *ResGuestTypeProfileInfo {
	this := ResGuestTypeProfileInfo{}
	return &this
}

// NewResGuestTypeProfileInfoWithDefaults instantiates a new ResGuestTypeProfileInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResGuestTypeProfileInfoWithDefaults() *ResGuestTypeProfileInfo {
	this := ResGuestTypeProfileInfo{}
	return &this
}

// GetProfile returns the Profile field value if set, zero value otherwise.
func (o *ResGuestTypeProfileInfo) GetProfile() ProfileType {
	if o == nil || IsNil(o.Profile) {
		var ret ProfileType
		return ret
	}
	return *o.Profile
}

// GetProfileOk returns a tuple with the Profile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestTypeProfileInfo) GetProfileOk() (*ProfileType, bool) {
	if o == nil || IsNil(o.Profile) {
		return nil, false
	}
	return o.Profile, true
}

// HasProfile returns a boolean if a field has been set.
func (o *ResGuestTypeProfileInfo) HasProfile() bool {
	if o != nil && !IsNil(o.Profile) {
		return true
	}

	return false
}

// SetProfile gets a reference to the given ProfileType and assigns it to the Profile field.
func (o *ResGuestTypeProfileInfo) SetProfile(v ProfileType) {
	o.Profile = &v
}

// GetProfileCashieringDetail returns the ProfileCashieringDetail field value if set, zero value otherwise.
func (o *ResGuestTypeProfileInfo) GetProfileCashieringDetail() ProfileCashieringDetailType {
	if o == nil || IsNil(o.ProfileCashieringDetail) {
		var ret ProfileCashieringDetailType
		return ret
	}
	return *o.ProfileCashieringDetail
}

// GetProfileCashieringDetailOk returns a tuple with the ProfileCashieringDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestTypeProfileInfo) GetProfileCashieringDetailOk() (*ProfileCashieringDetailType, bool) {
	if o == nil || IsNil(o.ProfileCashieringDetail) {
		return nil, false
	}
	return o.ProfileCashieringDetail, true
}

// HasProfileCashieringDetail returns a boolean if a field has been set.
func (o *ResGuestTypeProfileInfo) HasProfileCashieringDetail() bool {
	if o != nil && !IsNil(o.ProfileCashieringDetail) {
		return true
	}

	return false
}

// SetProfileCashieringDetail gets a reference to the given ProfileCashieringDetailType and assigns it to the ProfileCashieringDetail field.
func (o *ResGuestTypeProfileInfo) SetProfileCashieringDetail(v ProfileCashieringDetailType) {
	o.ProfileCashieringDetail = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *ResGuestTypeProfileInfo) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestTypeProfileInfo) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *ResGuestTypeProfileInfo) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *ResGuestTypeProfileInfo) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetRegistrationCardNo returns the RegistrationCardNo field value if set, zero value otherwise.
func (o *ResGuestTypeProfileInfo) GetRegistrationCardNo() string {
	if o == nil || IsNil(o.RegistrationCardNo) {
		var ret string
		return ret
	}
	return *o.RegistrationCardNo
}

// GetRegistrationCardNoOk returns a tuple with the RegistrationCardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestTypeProfileInfo) GetRegistrationCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.RegistrationCardNo) {
		return nil, false
	}
	return o.RegistrationCardNo, true
}

// HasRegistrationCardNo returns a boolean if a field has been set.
func (o *ResGuestTypeProfileInfo) HasRegistrationCardNo() bool {
	if o != nil && !IsNil(o.RegistrationCardNo) {
		return true
	}

	return false
}

// SetRegistrationCardNo gets a reference to the given string and assigns it to the RegistrationCardNo field.
func (o *ResGuestTypeProfileInfo) SetRegistrationCardNo(v string) {
	o.RegistrationCardNo = &v
}

func (o ResGuestTypeProfileInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResGuestTypeProfileInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Profile) {
		toSerialize["profile"] = o.Profile
	}
	if !IsNil(o.ProfileCashieringDetail) {
		toSerialize["profileCashieringDetail"] = o.ProfileCashieringDetail
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.RegistrationCardNo) {
		toSerialize["registrationCardNo"] = o.RegistrationCardNo
	}
	return toSerialize, nil
}

type NullableResGuestTypeProfileInfo struct {
	value *ResGuestTypeProfileInfo
	isSet bool
}

func (v NullableResGuestTypeProfileInfo) Get() *ResGuestTypeProfileInfo {
	return v.value
}

func (v *NullableResGuestTypeProfileInfo) Set(val *ResGuestTypeProfileInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableResGuestTypeProfileInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableResGuestTypeProfileInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResGuestTypeProfileInfo(val *ResGuestTypeProfileInfo) *NullableResGuestTypeProfileInfo {
	return &NullableResGuestTypeProfileInfo{value: val, isSet: true}
}

func (v NullableResGuestTypeProfileInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResGuestTypeProfileInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


