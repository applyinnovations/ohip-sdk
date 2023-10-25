/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
	"fmt"
)

// RotationRuleStatusType Simple type for Rotation Setup Rule System Status.
type RotationRuleStatusType string

// List of rotationRuleStatusType
const (
	ROTATIONRULESTATUSTYPE_CHANGED RotationRuleStatusType = "Changed"
	ROTATIONRULESTATUSTYPE_DELETED RotationRuleStatusType = "Deleted"
	ROTATIONRULESTATUSTYPE_NEW RotationRuleStatusType = "New"
	ROTATIONRULESTATUSTYPE_QUERIED RotationRuleStatusType = "Queried"
)

// All allowed values of RotationRuleStatusType enum
var AllowedRotationRuleStatusTypeEnumValues = []RotationRuleStatusType{
	"Changed",
	"Deleted",
	"New",
	"Queried",
}

func (v *RotationRuleStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RotationRuleStatusType(value)
	for _, existing := range AllowedRotationRuleStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RotationRuleStatusType", value)
}

// NewRotationRuleStatusTypeFromValue returns a pointer to a valid RotationRuleStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRotationRuleStatusTypeFromValue(v string) (*RotationRuleStatusType, error) {
	ev := RotationRuleStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RotationRuleStatusType: valid values are %v", v, AllowedRotationRuleStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RotationRuleStatusType) IsValid() bool {
	for _, existing := range AllowedRotationRuleStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to rotationRuleStatusType value
func (v RotationRuleStatusType) Ptr() *RotationRuleStatusType {
	return &v
}

type NullableRotationRuleStatusType struct {
	value *RotationRuleStatusType
	isSet bool
}

func (v NullableRotationRuleStatusType) Get() *RotationRuleStatusType {
	return v.value
}

func (v *NullableRotationRuleStatusType) Set(val *RotationRuleStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationRuleStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationRuleStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationRuleStatusType(val *RotationRuleStatusType) *NullableRotationRuleStatusType {
	return &NullableRotationRuleStatusType{value: val, isSet: true}
}

func (v NullableRotationRuleStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationRuleStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

