/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
	"fmt"
)

// HousekeepingInstructionsType Simple type for housekeeping instructions that can be used in requests for partial operations.
type HousekeepingInstructionsType string

// List of housekeepingInstructionsType
const (
	HOUSEKEEPINGINSTRUCTIONSTYPE_TURNDOWN HousekeepingInstructionsType = "Turndown"
	HOUSEKEEPINGINSTRUCTIONSTYPE_CLEANING_PRIORITY HousekeepingInstructionsType = "CleaningPriority"
	HOUSEKEEPINGINSTRUCTIONSTYPE_SERVICE_REQUEST HousekeepingInstructionsType = "ServiceRequest"
)

// All allowed values of HousekeepingInstructionsType enum
var AllowedHousekeepingInstructionsTypeEnumValues = []HousekeepingInstructionsType{
	"Turndown",
	"CleaningPriority",
	"ServiceRequest",
}

func (v *HousekeepingInstructionsType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := HousekeepingInstructionsType(value)
	for _, existing := range AllowedHousekeepingInstructionsTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid HousekeepingInstructionsType", value)
}

// NewHousekeepingInstructionsTypeFromValue returns a pointer to a valid HousekeepingInstructionsType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewHousekeepingInstructionsTypeFromValue(v string) (*HousekeepingInstructionsType, error) {
	ev := HousekeepingInstructionsType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for HousekeepingInstructionsType: valid values are %v", v, AllowedHousekeepingInstructionsTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v HousekeepingInstructionsType) IsValid() bool {
	for _, existing := range AllowedHousekeepingInstructionsTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to housekeepingInstructionsType value
func (v HousekeepingInstructionsType) Ptr() *HousekeepingInstructionsType {
	return &v
}

type NullableHousekeepingInstructionsType struct {
	value *HousekeepingInstructionsType
	isSet bool
}

func (v NullableHousekeepingInstructionsType) Get() *HousekeepingInstructionsType {
	return v.value
}

func (v *NullableHousekeepingInstructionsType) Set(val *HousekeepingInstructionsType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingInstructionsType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingInstructionsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingInstructionsType(val *HousekeepingInstructionsType) *NullableHousekeepingInstructionsType {
	return &NullableHousekeepingInstructionsType{value: val, isSet: true}
}

func (v NullableHousekeepingInstructionsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingInstructionsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

