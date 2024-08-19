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

// MemberAwardProcessType Processing type of the award like Actual , Projected or Inactive.
type MemberAwardProcessType string

// List of memberAwardProcessType
const (
	MEMBERAWARDPROCESSTYPE_ACTUAL MemberAwardProcessType = "Actual"
	MEMBERAWARDPROCESSTYPE_PROJECTED MemberAwardProcessType = "Projected"
	MEMBERAWARDPROCESSTYPE_INACTIVE MemberAwardProcessType = "Inactive"
)

// All allowed values of MemberAwardProcessType enum
var AllowedMemberAwardProcessTypeEnumValues = []MemberAwardProcessType{
	"Actual",
	"Projected",
	"Inactive",
}

func (v *MemberAwardProcessType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MemberAwardProcessType(value)
	for _, existing := range AllowedMemberAwardProcessTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MemberAwardProcessType", value)
}

// NewMemberAwardProcessTypeFromValue returns a pointer to a valid MemberAwardProcessType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMemberAwardProcessTypeFromValue(v string) (*MemberAwardProcessType, error) {
	ev := MemberAwardProcessType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MemberAwardProcessType: valid values are %v", v, AllowedMemberAwardProcessTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MemberAwardProcessType) IsValid() bool {
	for _, existing := range AllowedMemberAwardProcessTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to memberAwardProcessType value
func (v MemberAwardProcessType) Ptr() *MemberAwardProcessType {
	return &v
}

type NullableMemberAwardProcessType struct {
	value *MemberAwardProcessType
	isSet bool
}

func (v NullableMemberAwardProcessType) Get() *MemberAwardProcessType {
	return v.value
}

func (v *NullableMemberAwardProcessType) Set(val *MemberAwardProcessType) {
	v.value = val
	v.isSet = true
}

func (v NullableMemberAwardProcessType) IsSet() bool {
	return v.isSet
}

func (v *NullableMemberAwardProcessType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMemberAwardProcessType(val *MemberAwardProcessType) *NullableMemberAwardProcessType {
	return &NullableMemberAwardProcessType{value: val, isSet: true}
}

func (v NullableMemberAwardProcessType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMemberAwardProcessType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

