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

// FrequencyTypeType Simple type for storing frequency type.
type FrequencyTypeType string

// List of frequencyTypeType
const (
	FREQUENCYTYPETYPE_EVERYDAY FrequencyTypeType = "Everyday"
	FREQUENCYTYPETYPE_EVERY_X_DAYS FrequencyTypeType = "EveryXDays"
	FREQUENCYTYPETYPE_CUSTOM_SCHEDULE FrequencyTypeType = "CustomSchedule"
	FREQUENCYTYPETYPE_DEPARTURE_DAY_ONLY FrequencyTypeType = "DepartureDayOnly"
	FREQUENCYTYPETYPE_ARRIVAL_DAY_ONLY FrequencyTypeType = "ArrivalDayOnly"
	FREQUENCYTYPETYPE_NOT_REQUIRED FrequencyTypeType = "NotRequired"
	FREQUENCYTYPETYPE_SPECIFIC_DAYS FrequencyTypeType = "SpecificDays"
)

// All allowed values of FrequencyTypeType enum
var AllowedFrequencyTypeTypeEnumValues = []FrequencyTypeType{
	"Everyday",
	"EveryXDays",
	"CustomSchedule",
	"DepartureDayOnly",
	"ArrivalDayOnly",
	"NotRequired",
	"SpecificDays",
}

func (v *FrequencyTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FrequencyTypeType(value)
	for _, existing := range AllowedFrequencyTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FrequencyTypeType", value)
}

// NewFrequencyTypeTypeFromValue returns a pointer to a valid FrequencyTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFrequencyTypeTypeFromValue(v string) (*FrequencyTypeType, error) {
	ev := FrequencyTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FrequencyTypeType: valid values are %v", v, AllowedFrequencyTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FrequencyTypeType) IsValid() bool {
	for _, existing := range AllowedFrequencyTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to frequencyTypeType value
func (v FrequencyTypeType) Ptr() *FrequencyTypeType {
	return &v
}

type NullableFrequencyTypeType struct {
	value *FrequencyTypeType
	isSet bool
}

func (v NullableFrequencyTypeType) Get() *FrequencyTypeType {
	return v.value
}

func (v *NullableFrequencyTypeType) Set(val *FrequencyTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableFrequencyTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableFrequencyTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFrequencyTypeType(val *FrequencyTypeType) *NullableFrequencyTypeType {
	return &NullableFrequencyTypeType{value: val, isSet: true}
}

func (v NullableFrequencyTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFrequencyTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

