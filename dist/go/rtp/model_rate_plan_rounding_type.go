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

// RatePlanRoundingType Simple type for base type, flat or percentage.
type RatePlanRoundingType string

// List of ratePlanRoundingType
const (
	RATEPLANROUNDINGTYPE_NONE RatePlanRoundingType = "None"
	RATEPLANROUNDINGTYPE_UP RatePlanRoundingType = "Up"
	RATEPLANROUNDINGTYPE_DOWN RatePlanRoundingType = "Down"
	RATEPLANROUNDINGTYPE_FLOOR RatePlanRoundingType = "Floor"
	RATEPLANROUNDINGTYPE_CEILING RatePlanRoundingType = "Ceiling"
	RATEPLANROUNDINGTYPE_UNDEFINED RatePlanRoundingType = "Undefined"
)

// All allowed values of RatePlanRoundingType enum
var AllowedRatePlanRoundingTypeEnumValues = []RatePlanRoundingType{
	"None",
	"Up",
	"Down",
	"Floor",
	"Ceiling",
	"Undefined",
}

func (v *RatePlanRoundingType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RatePlanRoundingType(value)
	for _, existing := range AllowedRatePlanRoundingTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RatePlanRoundingType", value)
}

// NewRatePlanRoundingTypeFromValue returns a pointer to a valid RatePlanRoundingType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRatePlanRoundingTypeFromValue(v string) (*RatePlanRoundingType, error) {
	ev := RatePlanRoundingType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RatePlanRoundingType: valid values are %v", v, AllowedRatePlanRoundingTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RatePlanRoundingType) IsValid() bool {
	for _, existing := range AllowedRatePlanRoundingTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to ratePlanRoundingType value
func (v RatePlanRoundingType) Ptr() *RatePlanRoundingType {
	return &v
}

type NullableRatePlanRoundingType struct {
	value *RatePlanRoundingType
	isSet bool
}

func (v NullableRatePlanRoundingType) Get() *RatePlanRoundingType {
	return v.value
}

func (v *NullableRatePlanRoundingType) Set(val *RatePlanRoundingType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanRoundingType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanRoundingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanRoundingType(val *RatePlanRoundingType) *NullableRatePlanRoundingType {
	return &NullableRatePlanRoundingType{value: val, isSet: true}
}

func (v NullableRatePlanRoundingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanRoundingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

