/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
	"fmt"
)

// MembershipAwardBasedOnType This award allows a guest to apply available membership points towards the balance of his or her bill.
type MembershipAwardBasedOnType string

// List of membershipAwardBasedOnType
const (
	MEMBERSHIPAWARDBASEDONTYPE_RATE MembershipAwardBasedOnType = "Rate"
	MEMBERSHIPAWARDBASEDONTYPE_PRODUCT MembershipAwardBasedOnType = "Product"
	MEMBERSHIPAWARDBASEDONTYPE_UPGRADE MembershipAwardBasedOnType = "Upgrade"
	MEMBERSHIPAWARDBASEDONTYPE_OTHER MembershipAwardBasedOnType = "Other"
	MEMBERSHIPAWARDBASEDONTYPE_FT MembershipAwardBasedOnType = "Ft"
)

// All allowed values of MembershipAwardBasedOnType enum
var AllowedMembershipAwardBasedOnTypeEnumValues = []MembershipAwardBasedOnType{
	"Rate",
	"Product",
	"Upgrade",
	"Other",
	"Ft",
}

func (v *MembershipAwardBasedOnType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MembershipAwardBasedOnType(value)
	for _, existing := range AllowedMembershipAwardBasedOnTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MembershipAwardBasedOnType", value)
}

// NewMembershipAwardBasedOnTypeFromValue returns a pointer to a valid MembershipAwardBasedOnType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMembershipAwardBasedOnTypeFromValue(v string) (*MembershipAwardBasedOnType, error) {
	ev := MembershipAwardBasedOnType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MembershipAwardBasedOnType: valid values are %v", v, AllowedMembershipAwardBasedOnTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MembershipAwardBasedOnType) IsValid() bool {
	for _, existing := range AllowedMembershipAwardBasedOnTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to membershipAwardBasedOnType value
func (v MembershipAwardBasedOnType) Ptr() *MembershipAwardBasedOnType {
	return &v
}

type NullableMembershipAwardBasedOnType struct {
	value *MembershipAwardBasedOnType
	isSet bool
}

func (v NullableMembershipAwardBasedOnType) Get() *MembershipAwardBasedOnType {
	return v.value
}

func (v *NullableMembershipAwardBasedOnType) Set(val *MembershipAwardBasedOnType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipAwardBasedOnType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipAwardBasedOnType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipAwardBasedOnType(val *MembershipAwardBasedOnType) *NullableMembershipAwardBasedOnType {
	return &NullableMembershipAwardBasedOnType{value: val, isSet: true}
}

func (v NullableMembershipAwardBasedOnType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipAwardBasedOnType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

