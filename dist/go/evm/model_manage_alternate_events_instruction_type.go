/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
	"fmt"
)

// ManageAlternateEventsInstructionType Collection of instructions for managing catering events those are alternate to other catering events.
type ManageAlternateEventsInstructionType string

// List of manageAlternateEventsInstructionType
const (
	MANAGEALTERNATEEVENTSINSTRUCTIONTYPE_COPY ManageAlternateEventsInstructionType = "Copy"
	MANAGEALTERNATEEVENTSINSTRUCTIONTYPE_DELETE ManageAlternateEventsInstructionType = "Delete"
	MANAGEALTERNATEEVENTSINSTRUCTIONTYPE_CONVERT_TO_REGULAR ManageAlternateEventsInstructionType = "ConvertToRegular"
)

// All allowed values of ManageAlternateEventsInstructionType enum
var AllowedManageAlternateEventsInstructionTypeEnumValues = []ManageAlternateEventsInstructionType{
	"Copy",
	"Delete",
	"ConvertToRegular",
}

func (v *ManageAlternateEventsInstructionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ManageAlternateEventsInstructionType(value)
	for _, existing := range AllowedManageAlternateEventsInstructionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ManageAlternateEventsInstructionType", value)
}

// NewManageAlternateEventsInstructionTypeFromValue returns a pointer to a valid ManageAlternateEventsInstructionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewManageAlternateEventsInstructionTypeFromValue(v string) (*ManageAlternateEventsInstructionType, error) {
	ev := ManageAlternateEventsInstructionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ManageAlternateEventsInstructionType: valid values are %v", v, AllowedManageAlternateEventsInstructionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ManageAlternateEventsInstructionType) IsValid() bool {
	for _, existing := range AllowedManageAlternateEventsInstructionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to manageAlternateEventsInstructionType value
func (v ManageAlternateEventsInstructionType) Ptr() *ManageAlternateEventsInstructionType {
	return &v
}

type NullableManageAlternateEventsInstructionType struct {
	value *ManageAlternateEventsInstructionType
	isSet bool
}

func (v NullableManageAlternateEventsInstructionType) Get() *ManageAlternateEventsInstructionType {
	return v.value
}

func (v *NullableManageAlternateEventsInstructionType) Set(val *ManageAlternateEventsInstructionType) {
	v.value = val
	v.isSet = true
}

func (v NullableManageAlternateEventsInstructionType) IsSet() bool {
	return v.isSet
}

func (v *NullableManageAlternateEventsInstructionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableManageAlternateEventsInstructionType(val *ManageAlternateEventsInstructionType) *NullableManageAlternateEventsInstructionType {
	return &NullableManageAlternateEventsInstructionType{value: val, isSet: true}
}

func (v NullableManageAlternateEventsInstructionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableManageAlternateEventsInstructionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

