/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
	"fmt"
)

// RateStrategyConditionType Rate Strategy control types.
type RateStrategyConditionType string

// List of rateStrategyConditionType
const (
	RATESTRATEGYCONDITIONTYPE_OCCUPANCY_REACHES RateStrategyConditionType = "OccupancyReaches"
	RATESTRATEGYCONDITIONTYPE_OCCUPANCY_IS_LESS RateStrategyConditionType = "OccupancyIsLess"
	RATESTRATEGYCONDITIONTYPE_TIMES_SOLD_REACHES RateStrategyConditionType = "TimesSoldReaches"
	RATESTRATEGYCONDITIONTYPE_TIMES_SOLD_IS_LESS RateStrategyConditionType = "TimesSoldIsLess"
)

// All allowed values of RateStrategyConditionType enum
var AllowedRateStrategyConditionTypeEnumValues = []RateStrategyConditionType{
	"OccupancyReaches",
	"OccupancyIsLess",
	"TimesSoldReaches",
	"TimesSoldIsLess",
}

func (v *RateStrategyConditionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RateStrategyConditionType(value)
	for _, existing := range AllowedRateStrategyConditionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RateStrategyConditionType", value)
}

// NewRateStrategyConditionTypeFromValue returns a pointer to a valid RateStrategyConditionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRateStrategyConditionTypeFromValue(v string) (*RateStrategyConditionType, error) {
	ev := RateStrategyConditionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RateStrategyConditionType: valid values are %v", v, AllowedRateStrategyConditionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RateStrategyConditionType) IsValid() bool {
	for _, existing := range AllowedRateStrategyConditionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to rateStrategyConditionType value
func (v RateStrategyConditionType) Ptr() *RateStrategyConditionType {
	return &v
}

type NullableRateStrategyConditionType struct {
	value *RateStrategyConditionType
	isSet bool
}

func (v NullableRateStrategyConditionType) Get() *RateStrategyConditionType {
	return v.value
}

func (v *NullableRateStrategyConditionType) Set(val *RateStrategyConditionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateStrategyConditionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateStrategyConditionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateStrategyConditionType(val *RateStrategyConditionType) *NullableRateStrategyConditionType {
	return &NullableRateStrategyConditionType{value: val, isSet: true}
}

func (v NullableRateStrategyConditionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateStrategyConditionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
