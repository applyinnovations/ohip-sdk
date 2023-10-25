/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
	"fmt"
)

// ActivityStatCodeType Supported activity statistical codes.
type ActivityStatCodeType string

// List of activityStatCodeType
const (
	ACTIVITYSTATCODETYPE_COMPLETED_TO_DO ActivityStatCodeType = "CompletedToDo"
	ACTIVITYSTATCODETYPE_INCOMPLETE_TO_DO ActivityStatCodeType = "IncompleteToDo"
	ACTIVITYSTATCODETYPE_COMPLETED_APPOINTMENTS ActivityStatCodeType = "CompletedAppointments"
	ACTIVITYSTATCODETYPE_INCOMPLETE_APPOINTMENTS ActivityStatCodeType = "IncompleteAppointments"
)

// All allowed values of ActivityStatCodeType enum
var AllowedActivityStatCodeTypeEnumValues = []ActivityStatCodeType{
	"CompletedToDo",
	"IncompleteToDo",
	"CompletedAppointments",
	"IncompleteAppointments",
}

func (v *ActivityStatCodeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ActivityStatCodeType(value)
	for _, existing := range AllowedActivityStatCodeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ActivityStatCodeType", value)
}

// NewActivityStatCodeTypeFromValue returns a pointer to a valid ActivityStatCodeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewActivityStatCodeTypeFromValue(v string) (*ActivityStatCodeType, error) {
	ev := ActivityStatCodeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ActivityStatCodeType: valid values are %v", v, AllowedActivityStatCodeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ActivityStatCodeType) IsValid() bool {
	for _, existing := range AllowedActivityStatCodeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to activityStatCodeType value
func (v ActivityStatCodeType) Ptr() *ActivityStatCodeType {
	return &v
}

type NullableActivityStatCodeType struct {
	value *ActivityStatCodeType
	isSet bool
}

func (v NullableActivityStatCodeType) Get() *ActivityStatCodeType {
	return v.value
}

func (v *NullableActivityStatCodeType) Set(val *ActivityStatCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityStatCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityStatCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityStatCodeType(val *ActivityStatCodeType) *NullableActivityStatCodeType {
	return &NullableActivityStatCodeType{value: val, isSet: true}
}

func (v NullableActivityStatCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityStatCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

