/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
	"fmt"
)

// RoomHierarchyTypeType Provides the type of room hierarchy
type RoomHierarchyTypeType string

// List of roomHierarchyTypeType
const (
	ROOMHIERARCHYTYPETYPE_TYPE RoomHierarchyTypeType = "Type"
	ROOMHIERARCHYTYPETYPE_CLASS RoomHierarchyTypeType = "Class"
)

// All allowed values of RoomHierarchyTypeType enum
var AllowedRoomHierarchyTypeTypeEnumValues = []RoomHierarchyTypeType{
	"Type",
	"Class",
}

func (v *RoomHierarchyTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RoomHierarchyTypeType(value)
	for _, existing := range AllowedRoomHierarchyTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RoomHierarchyTypeType", value)
}

// NewRoomHierarchyTypeTypeFromValue returns a pointer to a valid RoomHierarchyTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRoomHierarchyTypeTypeFromValue(v string) (*RoomHierarchyTypeType, error) {
	ev := RoomHierarchyTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RoomHierarchyTypeType: valid values are %v", v, AllowedRoomHierarchyTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RoomHierarchyTypeType) IsValid() bool {
	for _, existing := range AllowedRoomHierarchyTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to roomHierarchyTypeType value
func (v RoomHierarchyTypeType) Ptr() *RoomHierarchyTypeType {
	return &v
}

type NullableRoomHierarchyTypeType struct {
	value *RoomHierarchyTypeType
	isSet bool
}

func (v NullableRoomHierarchyTypeType) Get() *RoomHierarchyTypeType {
	return v.value
}

func (v *NullableRoomHierarchyTypeType) Set(val *RoomHierarchyTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomHierarchyTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomHierarchyTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomHierarchyTypeType(val *RoomHierarchyTypeType) *NullableRoomHierarchyTypeType {
	return &NullableRoomHierarchyTypeType{value: val, isSet: true}
}

func (v NullableRoomHierarchyTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomHierarchyTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
