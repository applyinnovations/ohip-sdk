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
	"fmt"
)

// ProfileStatusType the model 'ProfileStatusType'
type ProfileStatusType string

// List of profileStatusType
const (
	PROFILESTATUSTYPE_ACTIVE ProfileStatusType = "Active"
	PROFILESTATUSTYPE_INACTIVE ProfileStatusType = "Inactive"
)

// All allowed values of ProfileStatusType enum
var AllowedProfileStatusTypeEnumValues = []ProfileStatusType{
	"Active",
	"Inactive",
}

func (v *ProfileStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ProfileStatusType(value)
	for _, existing := range AllowedProfileStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ProfileStatusType", value)
}

// NewProfileStatusTypeFromValue returns a pointer to a valid ProfileStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewProfileStatusTypeFromValue(v string) (*ProfileStatusType, error) {
	ev := ProfileStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ProfileStatusType: valid values are %v", v, AllowedProfileStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ProfileStatusType) IsValid() bool {
	for _, existing := range AllowedProfileStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to profileStatusType value
func (v ProfileStatusType) Ptr() *ProfileStatusType {
	return &v
}

type NullableProfileStatusType struct {
	value *ProfileStatusType
	isSet bool
}

func (v NullableProfileStatusType) Get() *ProfileStatusType {
	return v.value
}

func (v *NullableProfileStatusType) Set(val *ProfileStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileStatusType(val *ProfileStatusType) *NullableProfileStatusType {
	return &NullableProfileStatusType{value: val, isSet: true}
}

func (v NullableProfileStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

