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

// checks if the Membership type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Membership{}

// Membership Request object for create membership. This object contains unique identifiers for each profile and list of membership details to be created. The standard optional Opera Context element is also included.
type Membership struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	// Detailed information of membership related to the profile
	ProfileMemberships []ProfileMembershipType `json:"profileMemberships,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembership instantiates a new Membership object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembership() *Membership {
	this := Membership{}
	return &this
}

// NewMembershipWithDefaults instantiates a new Membership object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipWithDefaults() *Membership {
	this := Membership{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Membership) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Membership) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Membership) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Membership) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *Membership) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Membership) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *Membership) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *Membership) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetProfileMemberships returns the ProfileMemberships field value if set, zero value otherwise.
func (o *Membership) GetProfileMemberships() []ProfileMembershipType {
	if o == nil || IsNil(o.ProfileMemberships) {
		var ret []ProfileMembershipType
		return ret
	}
	return o.ProfileMemberships
}

// GetProfileMembershipsOk returns a tuple with the ProfileMemberships field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Membership) GetProfileMembershipsOk() ([]ProfileMembershipType, bool) {
	if o == nil || IsNil(o.ProfileMemberships) {
		return nil, false
	}
	return o.ProfileMemberships, true
}

// HasProfileMemberships returns a boolean if a field has been set.
func (o *Membership) HasProfileMemberships() bool {
	if o != nil && !IsNil(o.ProfileMemberships) {
		return true
	}

	return false
}

// SetProfileMemberships gets a reference to the given []ProfileMembershipType and assigns it to the ProfileMemberships field.
func (o *Membership) SetProfileMemberships(v []ProfileMembershipType) {
	o.ProfileMemberships = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Membership) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Membership) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Membership) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Membership) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Membership) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Membership) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.ProfileMemberships) {
		toSerialize["profileMemberships"] = o.ProfileMemberships
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembership struct {
	value *Membership
	isSet bool
}

func (v NullableMembership) Get() *Membership {
	return v.value
}

func (v *NullableMembership) Set(val *Membership) {
	v.value = val
	v.isSet = true
}

func (v NullableMembership) IsSet() bool {
	return v.isSet
}

func (v *NullableMembership) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembership(val *Membership) *NullableMembership {
	return &NullableMembership{value: val, isSet: true}
}

func (v NullableMembership) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembership) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


