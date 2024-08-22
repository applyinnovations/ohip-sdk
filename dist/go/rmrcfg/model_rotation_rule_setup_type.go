/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
	"fmt"
)

// RotationRuleSetupType Simple type for Rotation Rule Setup.
type RotationRuleSetupType string

// List of rotationRuleSetupType
const (
	ROTATIONRULESETUPTYPE_POINTS RotationRuleSetupType = "Points"
	ROTATIONRULESETUPTYPE_OWNER_MULTIPLIER RotationRuleSetupType = "OwnerMultiplier"
	ROTATIONRULESETUPTYPE_ROOM_STATUS_MULTIPLIER RotationRuleSetupType = "RoomStatusMultiplier"
)

// All allowed values of RotationRuleSetupType enum
var AllowedRotationRuleSetupTypeEnumValues = []RotationRuleSetupType{
	"Points",
	"OwnerMultiplier",
	"RoomStatusMultiplier",
}

func (v *RotationRuleSetupType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RotationRuleSetupType(value)
	for _, existing := range AllowedRotationRuleSetupTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RotationRuleSetupType", value)
}

// NewRotationRuleSetupTypeFromValue returns a pointer to a valid RotationRuleSetupType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRotationRuleSetupTypeFromValue(v string) (*RotationRuleSetupType, error) {
	ev := RotationRuleSetupType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RotationRuleSetupType: valid values are %v", v, AllowedRotationRuleSetupTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RotationRuleSetupType) IsValid() bool {
	for _, existing := range AllowedRotationRuleSetupTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to rotationRuleSetupType value
func (v RotationRuleSetupType) Ptr() *RotationRuleSetupType {
	return &v
}

type NullableRotationRuleSetupType struct {
	value *RotationRuleSetupType
	isSet bool
}

func (v NullableRotationRuleSetupType) Get() *RotationRuleSetupType {
	return v.value
}

func (v *NullableRotationRuleSetupType) Set(val *RotationRuleSetupType) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationRuleSetupType) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationRuleSetupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationRuleSetupType(val *RotationRuleSetupType) *NullableRotationRuleSetupType {
	return &NullableRotationRuleSetupType{value: val, isSet: true}
}

func (v NullableRotationRuleSetupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationRuleSetupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

