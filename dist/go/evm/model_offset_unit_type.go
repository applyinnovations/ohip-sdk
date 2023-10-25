/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
	"fmt"
)

// OffsetUnitType Indicates deadline offset unit type.
type OffsetUnitType string

// List of offsetUnitType
const (
	OFFSETUNITTYPE_YEAR OffsetUnitType = "Year"
	OFFSETUNITTYPE_MONTH OffsetUnitType = "Month"
	OFFSETUNITTYPE_DAY OffsetUnitType = "Day"
	OFFSETUNITTYPE_HOUR OffsetUnitType = "Hour"
)

// All allowed values of OffsetUnitType enum
var AllowedOffsetUnitTypeEnumValues = []OffsetUnitType{
	"Year",
	"Month",
	"Day",
	"Hour",
}

func (v *OffsetUnitType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := OffsetUnitType(value)
	for _, existing := range AllowedOffsetUnitTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid OffsetUnitType", value)
}

// NewOffsetUnitTypeFromValue returns a pointer to a valid OffsetUnitType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewOffsetUnitTypeFromValue(v string) (*OffsetUnitType, error) {
	ev := OffsetUnitType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for OffsetUnitType: valid values are %v", v, AllowedOffsetUnitTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v OffsetUnitType) IsValid() bool {
	for _, existing := range AllowedOffsetUnitTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to offsetUnitType value
func (v OffsetUnitType) Ptr() *OffsetUnitType {
	return &v
}

type NullableOffsetUnitType struct {
	value *OffsetUnitType
	isSet bool
}

func (v NullableOffsetUnitType) Get() *OffsetUnitType {
	return v.value
}

func (v *NullableOffsetUnitType) Set(val *OffsetUnitType) {
	v.value = val
	v.isSet = true
}

func (v NullableOffsetUnitType) IsSet() bool {
	return v.isSet
}

func (v *NullableOffsetUnitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOffsetUnitType(val *OffsetUnitType) *NullableOffsetUnitType {
	return &NullableOffsetUnitType{value: val, isSet: true}
}

func (v NullableOffsetUnitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOffsetUnitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

