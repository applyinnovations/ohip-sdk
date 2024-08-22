/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// GUINumberPeriodType Period set November-December
type GUINumberPeriodType string

// List of gUINumberPeriodType
const (
	GUINUMBERPERIODTYPE_JANUARY_FEBRUARY GUINumberPeriodType = "JanuaryFebruary"
	GUINUMBERPERIODTYPE_MARCH_APRIL GUINumberPeriodType = "MarchApril"
	GUINUMBERPERIODTYPE_MAY_JUNE GUINumberPeriodType = "MayJune"
	GUINUMBERPERIODTYPE_JULY_AUGUST GUINumberPeriodType = "JulyAugust"
	GUINUMBERPERIODTYPE_SEPTEMBER_OCTOBER GUINumberPeriodType = "SeptemberOctober"
	GUINUMBERPERIODTYPE_NOVEMBER_DECEMBER GUINumberPeriodType = "NovemberDecember"
)

// All allowed values of GUINumberPeriodType enum
var AllowedGUINumberPeriodTypeEnumValues = []GUINumberPeriodType{
	"JanuaryFebruary",
	"MarchApril",
	"MayJune",
	"JulyAugust",
	"SeptemberOctober",
	"NovemberDecember",
}

func (v *GUINumberPeriodType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := GUINumberPeriodType(value)
	for _, existing := range AllowedGUINumberPeriodTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid GUINumberPeriodType", value)
}

// NewGUINumberPeriodTypeFromValue returns a pointer to a valid GUINumberPeriodType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewGUINumberPeriodTypeFromValue(v string) (*GUINumberPeriodType, error) {
	ev := GUINumberPeriodType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for GUINumberPeriodType: valid values are %v", v, AllowedGUINumberPeriodTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v GUINumberPeriodType) IsValid() bool {
	for _, existing := range AllowedGUINumberPeriodTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to gUINumberPeriodType value
func (v GUINumberPeriodType) Ptr() *GUINumberPeriodType {
	return &v
}

type NullableGUINumberPeriodType struct {
	value *GUINumberPeriodType
	isSet bool
}

func (v NullableGUINumberPeriodType) Get() *GUINumberPeriodType {
	return v.value
}

func (v *NullableGUINumberPeriodType) Set(val *GUINumberPeriodType) {
	v.value = val
	v.isSet = true
}

func (v NullableGUINumberPeriodType) IsSet() bool {
	return v.isSet
}

func (v *NullableGUINumberPeriodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGUINumberPeriodType(val *GUINumberPeriodType) *NullableGUINumberPeriodType {
	return &NullableGUINumberPeriodType{value: val, isSet: true}
}

func (v NullableGUINumberPeriodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGUINumberPeriodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

