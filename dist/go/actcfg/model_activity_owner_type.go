/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
	"fmt"
)

// ActivityOwnerType Activity owner.
type ActivityOwnerType string

// List of activityOwnerType
const (
	ACTIVITYOWNERTYPE_CURRENT ActivityOwnerType = "Current"
	ACTIVITYOWNERTYPE_PRIMARY ActivityOwnerType = "Primary"
	ACTIVITYOWNERTYPE_CUSTOM ActivityOwnerType = "Custom"
	ACTIVITYOWNERTYPE_BLOCK ActivityOwnerType = "Block"
	ACTIVITYOWNERTYPE_ROOM ActivityOwnerType = "Room"
	ACTIVITYOWNERTYPE_CATERING ActivityOwnerType = "Catering"
)

// All allowed values of ActivityOwnerType enum
var AllowedActivityOwnerTypeEnumValues = []ActivityOwnerType{
	"Current",
	"Primary",
	"Custom",
	"Block",
	"Room",
	"Catering",
}

func (v *ActivityOwnerType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ActivityOwnerType(value)
	for _, existing := range AllowedActivityOwnerTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ActivityOwnerType", value)
}

// NewActivityOwnerTypeFromValue returns a pointer to a valid ActivityOwnerType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewActivityOwnerTypeFromValue(v string) (*ActivityOwnerType, error) {
	ev := ActivityOwnerType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ActivityOwnerType: valid values are %v", v, AllowedActivityOwnerTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ActivityOwnerType) IsValid() bool {
	for _, existing := range AllowedActivityOwnerTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to activityOwnerType value
func (v ActivityOwnerType) Ptr() *ActivityOwnerType {
	return &v
}

type NullableActivityOwnerType struct {
	value *ActivityOwnerType
	isSet bool
}

func (v NullableActivityOwnerType) Get() *ActivityOwnerType {
	return v.value
}

func (v *NullableActivityOwnerType) Set(val *ActivityOwnerType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityOwnerType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityOwnerType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityOwnerType(val *ActivityOwnerType) *NullableActivityOwnerType {
	return &NullableActivityOwnerType{value: val, isSet: true}
}

func (v NullableActivityOwnerType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityOwnerType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
