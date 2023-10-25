/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// CyclePeriodType Signifies Calendar Period
type CyclePeriodType string

// List of cyclePeriodType
const (
	CYCLEPERIODTYPE_FOUR_WEEKS CyclePeriodType = "FourWeeks"
	CYCLEPERIODTYPE_FOUR_FOUR_FIVE_WEEKS CyclePeriodType = "FourFourFiveWeeks"
	CYCLEPERIODTYPE_FOUR_FIVE_FOUR_WEEKS CyclePeriodType = "FourFiveFourWeeks"
	CYCLEPERIODTYPE_FIVE_FOUR_FOUR_WEEKS CyclePeriodType = "FiveFourFourWeeks"
	CYCLEPERIODTYPE_CALENDAR_MONTH CyclePeriodType = "CalendarMonth"
)

// All allowed values of CyclePeriodType enum
var AllowedCyclePeriodTypeEnumValues = []CyclePeriodType{
	"FourWeeks",
	"FourFourFiveWeeks",
	"FourFiveFourWeeks",
	"FiveFourFourWeeks",
	"CalendarMonth",
}

func (v *CyclePeriodType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CyclePeriodType(value)
	for _, existing := range AllowedCyclePeriodTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CyclePeriodType", value)
}

// NewCyclePeriodTypeFromValue returns a pointer to a valid CyclePeriodType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCyclePeriodTypeFromValue(v string) (*CyclePeriodType, error) {
	ev := CyclePeriodType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CyclePeriodType: valid values are %v", v, AllowedCyclePeriodTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CyclePeriodType) IsValid() bool {
	for _, existing := range AllowedCyclePeriodTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cyclePeriodType value
func (v CyclePeriodType) Ptr() *CyclePeriodType {
	return &v
}

type NullableCyclePeriodType struct {
	value *CyclePeriodType
	isSet bool
}

func (v NullableCyclePeriodType) Get() *CyclePeriodType {
	return v.value
}

func (v *NullableCyclePeriodType) Set(val *CyclePeriodType) {
	v.value = val
	v.isSet = true
}

func (v NullableCyclePeriodType) IsSet() bool {
	return v.isSet
}

func (v *NullableCyclePeriodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCyclePeriodType(val *CyclePeriodType) *NullableCyclePeriodType {
	return &NullableCyclePeriodType{value: val, isSet: true}
}

func (v NullableCyclePeriodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCyclePeriodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

