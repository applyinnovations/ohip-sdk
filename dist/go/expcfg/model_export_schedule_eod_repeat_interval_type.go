/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
	"fmt"
)

// ExportScheduleEODRepeatIntervalType Frequency for which export schedules needs to be run during EOD
type ExportScheduleEODRepeatIntervalType string

// List of exportScheduleEODRepeatIntervalType
const (
	EXPORTSCHEDULEEODREPEATINTERVALTYPE_DAILY ExportScheduleEODRepeatIntervalType = "Daily"
	EXPORTSCHEDULEEODREPEATINTERVALTYPE_WEEKLY ExportScheduleEODRepeatIntervalType = "Weekly"
	EXPORTSCHEDULEEODREPEATINTERVALTYPE_MONTHLY ExportScheduleEODRepeatIntervalType = "Monthly"
	EXPORTSCHEDULEEODREPEATINTERVALTYPE_YEARLY ExportScheduleEODRepeatIntervalType = "Yearly"
)

// All allowed values of ExportScheduleEODRepeatIntervalType enum
var AllowedExportScheduleEODRepeatIntervalTypeEnumValues = []ExportScheduleEODRepeatIntervalType{
	"Daily",
	"Weekly",
	"Monthly",
	"Yearly",
}

func (v *ExportScheduleEODRepeatIntervalType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExportScheduleEODRepeatIntervalType(value)
	for _, existing := range AllowedExportScheduleEODRepeatIntervalTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExportScheduleEODRepeatIntervalType", value)
}

// NewExportScheduleEODRepeatIntervalTypeFromValue returns a pointer to a valid ExportScheduleEODRepeatIntervalType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExportScheduleEODRepeatIntervalTypeFromValue(v string) (*ExportScheduleEODRepeatIntervalType, error) {
	ev := ExportScheduleEODRepeatIntervalType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExportScheduleEODRepeatIntervalType: valid values are %v", v, AllowedExportScheduleEODRepeatIntervalTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExportScheduleEODRepeatIntervalType) IsValid() bool {
	for _, existing := range AllowedExportScheduleEODRepeatIntervalTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exportScheduleEODRepeatIntervalType value
func (v ExportScheduleEODRepeatIntervalType) Ptr() *ExportScheduleEODRepeatIntervalType {
	return &v
}

type NullableExportScheduleEODRepeatIntervalType struct {
	value *ExportScheduleEODRepeatIntervalType
	isSet bool
}

func (v NullableExportScheduleEODRepeatIntervalType) Get() *ExportScheduleEODRepeatIntervalType {
	return v.value
}

func (v *NullableExportScheduleEODRepeatIntervalType) Set(val *ExportScheduleEODRepeatIntervalType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportScheduleEODRepeatIntervalType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportScheduleEODRepeatIntervalType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportScheduleEODRepeatIntervalType(val *ExportScheduleEODRepeatIntervalType) *NullableExportScheduleEODRepeatIntervalType {
	return &NullableExportScheduleEODRepeatIntervalType{value: val, isSet: true}
}

func (v NullableExportScheduleEODRepeatIntervalType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportScheduleEODRepeatIntervalType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

