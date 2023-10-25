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

// checks if the EnrollmentMatchProfiles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EnrollmentMatchProfiles{}

// EnrollmentMatchProfiles Response object to fetch match profiles for enrollment.
type EnrollmentMatchProfiles struct {
	// Provide match profile details for enrollment.
	EnrollmentMatchProfilesDetail []ProfileEnrollmentType `json:"enrollmentMatchProfilesDetail,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEnrollmentMatchProfiles instantiates a new EnrollmentMatchProfiles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnrollmentMatchProfiles() *EnrollmentMatchProfiles {
	this := EnrollmentMatchProfiles{}
	return &this
}

// NewEnrollmentMatchProfilesWithDefaults instantiates a new EnrollmentMatchProfiles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnrollmentMatchProfilesWithDefaults() *EnrollmentMatchProfiles {
	this := EnrollmentMatchProfiles{}
	return &this
}

// GetEnrollmentMatchProfilesDetail returns the EnrollmentMatchProfilesDetail field value if set, zero value otherwise.
func (o *EnrollmentMatchProfiles) GetEnrollmentMatchProfilesDetail() []ProfileEnrollmentType {
	if o == nil || IsNil(o.EnrollmentMatchProfilesDetail) {
		var ret []ProfileEnrollmentType
		return ret
	}
	return o.EnrollmentMatchProfilesDetail
}

// GetEnrollmentMatchProfilesDetailOk returns a tuple with the EnrollmentMatchProfilesDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchProfiles) GetEnrollmentMatchProfilesDetailOk() ([]ProfileEnrollmentType, bool) {
	if o == nil || IsNil(o.EnrollmentMatchProfilesDetail) {
		return nil, false
	}
	return o.EnrollmentMatchProfilesDetail, true
}

// HasEnrollmentMatchProfilesDetail returns a boolean if a field has been set.
func (o *EnrollmentMatchProfiles) HasEnrollmentMatchProfilesDetail() bool {
	if o != nil && !IsNil(o.EnrollmentMatchProfilesDetail) {
		return true
	}

	return false
}

// SetEnrollmentMatchProfilesDetail gets a reference to the given []ProfileEnrollmentType and assigns it to the EnrollmentMatchProfilesDetail field.
func (o *EnrollmentMatchProfiles) SetEnrollmentMatchProfilesDetail(v []ProfileEnrollmentType) {
	o.EnrollmentMatchProfilesDetail = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *EnrollmentMatchProfiles) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchProfiles) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *EnrollmentMatchProfiles) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *EnrollmentMatchProfiles) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *EnrollmentMatchProfiles) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchProfiles) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *EnrollmentMatchProfiles) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *EnrollmentMatchProfiles) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o EnrollmentMatchProfiles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EnrollmentMatchProfiles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EnrollmentMatchProfilesDetail) {
		toSerialize["enrollmentMatchProfilesDetail"] = o.EnrollmentMatchProfilesDetail
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEnrollmentMatchProfiles struct {
	value *EnrollmentMatchProfiles
	isSet bool
}

func (v NullableEnrollmentMatchProfiles) Get() *EnrollmentMatchProfiles {
	return v.value
}

func (v *NullableEnrollmentMatchProfiles) Set(val *EnrollmentMatchProfiles) {
	v.value = val
	v.isSet = true
}

func (v NullableEnrollmentMatchProfiles) IsSet() bool {
	return v.isSet
}

func (v *NullableEnrollmentMatchProfiles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnrollmentMatchProfiles(val *EnrollmentMatchProfiles) *NullableEnrollmentMatchProfiles {
	return &NullableEnrollmentMatchProfiles{value: val, isSet: true}
}

func (v NullableEnrollmentMatchProfiles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnrollmentMatchProfiles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


