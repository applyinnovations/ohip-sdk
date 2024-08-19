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

// MembershipAwardCancelPolicyType Cancel policy is applicable only on Nights.
type MembershipAwardCancelPolicyType string

// List of membershipAwardCancelPolicyType
const (
	MEMBERSHIPAWARDCANCELPOLICYTYPE_ALL MembershipAwardCancelPolicyType = "All"
	MEMBERSHIPAWARDCANCELPOLICYTYPE_NIGHTS MembershipAwardCancelPolicyType = "Nights"
)

// All allowed values of MembershipAwardCancelPolicyType enum
var AllowedMembershipAwardCancelPolicyTypeEnumValues = []MembershipAwardCancelPolicyType{
	"All",
	"Nights",
}

func (v *MembershipAwardCancelPolicyType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MembershipAwardCancelPolicyType(value)
	for _, existing := range AllowedMembershipAwardCancelPolicyTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MembershipAwardCancelPolicyType", value)
}

// NewMembershipAwardCancelPolicyTypeFromValue returns a pointer to a valid MembershipAwardCancelPolicyType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMembershipAwardCancelPolicyTypeFromValue(v string) (*MembershipAwardCancelPolicyType, error) {
	ev := MembershipAwardCancelPolicyType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MembershipAwardCancelPolicyType: valid values are %v", v, AllowedMembershipAwardCancelPolicyTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MembershipAwardCancelPolicyType) IsValid() bool {
	for _, existing := range AllowedMembershipAwardCancelPolicyTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to membershipAwardCancelPolicyType value
func (v MembershipAwardCancelPolicyType) Ptr() *MembershipAwardCancelPolicyType {
	return &v
}

type NullableMembershipAwardCancelPolicyType struct {
	value *MembershipAwardCancelPolicyType
	isSet bool
}

func (v NullableMembershipAwardCancelPolicyType) Get() *MembershipAwardCancelPolicyType {
	return v.value
}

func (v *NullableMembershipAwardCancelPolicyType) Set(val *MembershipAwardCancelPolicyType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipAwardCancelPolicyType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipAwardCancelPolicyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipAwardCancelPolicyType(val *MembershipAwardCancelPolicyType) *NullableMembershipAwardCancelPolicyType {
	return &NullableMembershipAwardCancelPolicyType{value: val, isSet: true}
}

func (v NullableMembershipAwardCancelPolicyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipAwardCancelPolicyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

