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

// ApplyEventAttendeesChangesToEventsType Non-Pkg Events on the same date.
type ApplyEventAttendeesChangesToEventsType string

// List of applyEventAttendeesChangesToEventsType
const (
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_ALL ApplyEventAttendeesChangesToEventsType = "All"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_NONE ApplyEventAttendeesChangesToEventsType = "None"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_SAME ApplyEventAttendeesChangesToEventsType = "Same"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_NON_PACKAGE ApplyEventAttendeesChangesToEventsType = "NonPackage"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_MATCHING_NON_PACKAGE ApplyEventAttendeesChangesToEventsType = "MatchingNonPackage"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_PACKAGE ApplyEventAttendeesChangesToEventsType = "Package"
	APPLYEVENTATTENDEESCHANGESTOEVENTSTYPE_DATE ApplyEventAttendeesChangesToEventsType = "Date"
)

// All allowed values of ApplyEventAttendeesChangesToEventsType enum
var AllowedApplyEventAttendeesChangesToEventsTypeEnumValues = []ApplyEventAttendeesChangesToEventsType{
	"All",
	"None",
	"Same",
	"NonPackage",
	"MatchingNonPackage",
	"Package",
	"Date",
}

func (v *ApplyEventAttendeesChangesToEventsType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ApplyEventAttendeesChangesToEventsType(value)
	for _, existing := range AllowedApplyEventAttendeesChangesToEventsTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ApplyEventAttendeesChangesToEventsType", value)
}

// NewApplyEventAttendeesChangesToEventsTypeFromValue returns a pointer to a valid ApplyEventAttendeesChangesToEventsType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewApplyEventAttendeesChangesToEventsTypeFromValue(v string) (*ApplyEventAttendeesChangesToEventsType, error) {
	ev := ApplyEventAttendeesChangesToEventsType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ApplyEventAttendeesChangesToEventsType: valid values are %v", v, AllowedApplyEventAttendeesChangesToEventsTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ApplyEventAttendeesChangesToEventsType) IsValid() bool {
	for _, existing := range AllowedApplyEventAttendeesChangesToEventsTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to applyEventAttendeesChangesToEventsType value
func (v ApplyEventAttendeesChangesToEventsType) Ptr() *ApplyEventAttendeesChangesToEventsType {
	return &v
}

type NullableApplyEventAttendeesChangesToEventsType struct {
	value *ApplyEventAttendeesChangesToEventsType
	isSet bool
}

func (v NullableApplyEventAttendeesChangesToEventsType) Get() *ApplyEventAttendeesChangesToEventsType {
	return v.value
}

func (v *NullableApplyEventAttendeesChangesToEventsType) Set(val *ApplyEventAttendeesChangesToEventsType) {
	v.value = val
	v.isSet = true
}

func (v NullableApplyEventAttendeesChangesToEventsType) IsSet() bool {
	return v.isSet
}

func (v *NullableApplyEventAttendeesChangesToEventsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApplyEventAttendeesChangesToEventsType(val *ApplyEventAttendeesChangesToEventsType) *NullableApplyEventAttendeesChangesToEventsType {
	return &NullableApplyEventAttendeesChangesToEventsType{value: val, isSet: true}
}

func (v NullableApplyEventAttendeesChangesToEventsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApplyEventAttendeesChangesToEventsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

