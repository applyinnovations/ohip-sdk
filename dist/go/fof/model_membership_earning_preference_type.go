/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// MembershipEarningPreferenceType The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points.
type MembershipEarningPreferenceType string

// List of membershipEarningPreferenceType
const (
	MEMBERSHIPEARNINGPREFERENCETYPE_POINTS MembershipEarningPreferenceType = "Points"
	MEMBERSHIPEARNINGPREFERENCETYPE_MILES MembershipEarningPreferenceType = "Miles"
)

// All allowed values of MembershipEarningPreferenceType enum
var AllowedMembershipEarningPreferenceTypeEnumValues = []MembershipEarningPreferenceType{
	"Points",
	"Miles",
}

func (v *MembershipEarningPreferenceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MembershipEarningPreferenceType(value)
	for _, existing := range AllowedMembershipEarningPreferenceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MembershipEarningPreferenceType", value)
}

// NewMembershipEarningPreferenceTypeFromValue returns a pointer to a valid MembershipEarningPreferenceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMembershipEarningPreferenceTypeFromValue(v string) (*MembershipEarningPreferenceType, error) {
	ev := MembershipEarningPreferenceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MembershipEarningPreferenceType: valid values are %v", v, AllowedMembershipEarningPreferenceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MembershipEarningPreferenceType) IsValid() bool {
	for _, existing := range AllowedMembershipEarningPreferenceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to membershipEarningPreferenceType value
func (v MembershipEarningPreferenceType) Ptr() *MembershipEarningPreferenceType {
	return &v
}

type NullableMembershipEarningPreferenceType struct {
	value *MembershipEarningPreferenceType
	isSet bool
}

func (v NullableMembershipEarningPreferenceType) Get() *MembershipEarningPreferenceType {
	return v.value
}

func (v *NullableMembershipEarningPreferenceType) Set(val *MembershipEarningPreferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipEarningPreferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipEarningPreferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipEarningPreferenceType(val *MembershipEarningPreferenceType) *NullableMembershipEarningPreferenceType {
	return &NullableMembershipEarningPreferenceType{value: val, isSet: true}
}

func (v NullableMembershipEarningPreferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipEarningPreferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

