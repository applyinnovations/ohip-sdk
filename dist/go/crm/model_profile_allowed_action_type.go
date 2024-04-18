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
	"fmt"
)

// ProfileAllowedActionType Flag indicating whether Profile is Enrolled to Primary Membership Program.
type ProfileAllowedActionType string

// List of profileAllowedActionType
const (
	PROFILEALLOWEDACTIONTYPE_NAME_CHANGE ProfileAllowedActionType = "NameChange"
	PROFILEALLOWEDACTIONTYPE_TAX_ID_CHANGE ProfileAllowedActionType = "TaxIDChange"
	PROFILEALLOWEDACTIONTYPE_ENROLL_TO_PRIMARY_MEMBERSHIP ProfileAllowedActionType = "EnrollToPrimaryMembership"
)

// All allowed values of ProfileAllowedActionType enum
var AllowedProfileAllowedActionTypeEnumValues = []ProfileAllowedActionType{
	"NameChange",
	"TaxIDChange",
	"EnrollToPrimaryMembership",
}

func (v *ProfileAllowedActionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ProfileAllowedActionType(value)
	for _, existing := range AllowedProfileAllowedActionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ProfileAllowedActionType", value)
}

// NewProfileAllowedActionTypeFromValue returns a pointer to a valid ProfileAllowedActionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewProfileAllowedActionTypeFromValue(v string) (*ProfileAllowedActionType, error) {
	ev := ProfileAllowedActionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ProfileAllowedActionType: valid values are %v", v, AllowedProfileAllowedActionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ProfileAllowedActionType) IsValid() bool {
	for _, existing := range AllowedProfileAllowedActionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to profileAllowedActionType value
func (v ProfileAllowedActionType) Ptr() *ProfileAllowedActionType {
	return &v
}

type NullableProfileAllowedActionType struct {
	value *ProfileAllowedActionType
	isSet bool
}

func (v NullableProfileAllowedActionType) Get() *ProfileAllowedActionType {
	return v.value
}

func (v *NullableProfileAllowedActionType) Set(val *ProfileAllowedActionType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileAllowedActionType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileAllowedActionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileAllowedActionType(val *ProfileAllowedActionType) *NullableProfileAllowedActionType {
	return &NullableProfileAllowedActionType{value: val, isSet: true}
}

func (v NullableProfileAllowedActionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileAllowedActionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
