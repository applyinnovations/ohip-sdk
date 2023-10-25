/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ProfileCashieringDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileCashieringDetails{}

// ProfileCashieringDetails Request object for changing the profile cashiering details.
type ProfileCashieringDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Cashiering details for the profile.
	ProfileCashieringDetailList []ProfileCashieringDetailType `json:"profileCashieringDetailList,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewProfileCashieringDetails instantiates a new ProfileCashieringDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileCashieringDetails() *ProfileCashieringDetails {
	this := ProfileCashieringDetails{}
	return &this
}

// NewProfileCashieringDetailsWithDefaults instantiates a new ProfileCashieringDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileCashieringDetailsWithDefaults() *ProfileCashieringDetails {
	this := ProfileCashieringDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ProfileCashieringDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ProfileCashieringDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ProfileCashieringDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProfileCashieringDetailList returns the ProfileCashieringDetailList field value if set, zero value otherwise.
func (o *ProfileCashieringDetails) GetProfileCashieringDetailList() []ProfileCashieringDetailType {
	if o == nil || IsNil(o.ProfileCashieringDetailList) {
		var ret []ProfileCashieringDetailType
		return ret
	}
	return o.ProfileCashieringDetailList
}

// GetProfileCashieringDetailListOk returns a tuple with the ProfileCashieringDetailList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetails) GetProfileCashieringDetailListOk() ([]ProfileCashieringDetailType, bool) {
	if o == nil || IsNil(o.ProfileCashieringDetailList) {
		return nil, false
	}
	return o.ProfileCashieringDetailList, true
}

// HasProfileCashieringDetailList returns a boolean if a field has been set.
func (o *ProfileCashieringDetails) HasProfileCashieringDetailList() bool {
	if o != nil && !IsNil(o.ProfileCashieringDetailList) {
		return true
	}

	return false
}

// SetProfileCashieringDetailList gets a reference to the given []ProfileCashieringDetailType and assigns it to the ProfileCashieringDetailList field.
func (o *ProfileCashieringDetails) SetProfileCashieringDetailList(v []ProfileCashieringDetailType) {
	o.ProfileCashieringDetailList = v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *ProfileCashieringDetails) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetails) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *ProfileCashieringDetails) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *ProfileCashieringDetails) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ProfileCashieringDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ProfileCashieringDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ProfileCashieringDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ProfileCashieringDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileCashieringDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProfileCashieringDetailList) {
		toSerialize["profileCashieringDetailList"] = o.ProfileCashieringDetailList
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableProfileCashieringDetails struct {
	value *ProfileCashieringDetails
	isSet bool
}

func (v NullableProfileCashieringDetails) Get() *ProfileCashieringDetails {
	return v.value
}

func (v *NullableProfileCashieringDetails) Set(val *ProfileCashieringDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileCashieringDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileCashieringDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileCashieringDetails(val *ProfileCashieringDetails) *NullableProfileCashieringDetails {
	return &NullableProfileCashieringDetails{value: val, isSet: true}
}

func (v NullableProfileCashieringDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileCashieringDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


