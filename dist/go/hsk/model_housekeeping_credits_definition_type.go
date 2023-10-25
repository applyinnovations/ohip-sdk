/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
	"fmt"
)

// HousekeepingCreditsDefinitionType Type for the different kinds of Credits which will be used in Rooms Management.
type HousekeepingCreditsDefinitionType string

// List of housekeepingCreditsDefinitionType
const (
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_DEPARTURE HousekeepingCreditsDefinitionType = "Departure"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_PICKUP HousekeepingCreditsDefinitionType = "Pickup"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_TURNDOWN HousekeepingCreditsDefinitionType = "Turndown"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_STAY_OVER HousekeepingCreditsDefinitionType = "StayOver"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_FACILITY_TASK HousekeepingCreditsDefinitionType = "FacilityTask"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_TRAVELLING HousekeepingCreditsDefinitionType = "Travelling"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_MISCELLANEOUS HousekeepingCreditsDefinitionType = "Miscellaneous"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_SPECIAL HousekeepingCreditsDefinitionType = "Special"
	HOUSEKEEPINGCREDITSDEFINITIONTYPE_TOTAL HousekeepingCreditsDefinitionType = "Total"
)

// All allowed values of HousekeepingCreditsDefinitionType enum
var AllowedHousekeepingCreditsDefinitionTypeEnumValues = []HousekeepingCreditsDefinitionType{
	"Departure",
	"Pickup",
	"Turndown",
	"StayOver",
	"FacilityTask",
	"Travelling",
	"Miscellaneous",
	"Special",
	"Total",
}

func (v *HousekeepingCreditsDefinitionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := HousekeepingCreditsDefinitionType(value)
	for _, existing := range AllowedHousekeepingCreditsDefinitionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid HousekeepingCreditsDefinitionType", value)
}

// NewHousekeepingCreditsDefinitionTypeFromValue returns a pointer to a valid HousekeepingCreditsDefinitionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewHousekeepingCreditsDefinitionTypeFromValue(v string) (*HousekeepingCreditsDefinitionType, error) {
	ev := HousekeepingCreditsDefinitionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for HousekeepingCreditsDefinitionType: valid values are %v", v, AllowedHousekeepingCreditsDefinitionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v HousekeepingCreditsDefinitionType) IsValid() bool {
	for _, existing := range AllowedHousekeepingCreditsDefinitionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to housekeepingCreditsDefinitionType value
func (v HousekeepingCreditsDefinitionType) Ptr() *HousekeepingCreditsDefinitionType {
	return &v
}

type NullableHousekeepingCreditsDefinitionType struct {
	value *HousekeepingCreditsDefinitionType
	isSet bool
}

func (v NullableHousekeepingCreditsDefinitionType) Get() *HousekeepingCreditsDefinitionType {
	return v.value
}

func (v *NullableHousekeepingCreditsDefinitionType) Set(val *HousekeepingCreditsDefinitionType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingCreditsDefinitionType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingCreditsDefinitionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingCreditsDefinitionType(val *HousekeepingCreditsDefinitionType) *NullableHousekeepingCreditsDefinitionType {
	return &NullableHousekeepingCreditsDefinitionType{value: val, isSet: true}
}

func (v NullableHousekeepingCreditsDefinitionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingCreditsDefinitionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

