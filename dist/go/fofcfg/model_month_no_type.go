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

// MonthNoType December.
type MonthNoType string

// List of monthNoType
const (
	MONTHNOTYPE__1 MonthNoType = "1"
	MONTHNOTYPE__2 MonthNoType = "2"
	MONTHNOTYPE__3 MonthNoType = "3"
	MONTHNOTYPE__4 MonthNoType = "4"
	MONTHNOTYPE__5 MonthNoType = "5"
	MONTHNOTYPE__6 MonthNoType = "6"
	MONTHNOTYPE__7 MonthNoType = "7"
	MONTHNOTYPE__8 MonthNoType = "8"
	MONTHNOTYPE__9 MonthNoType = "9"
	MONTHNOTYPE__10 MonthNoType = "10"
	MONTHNOTYPE__11 MonthNoType = "11"
	MONTHNOTYPE__12 MonthNoType = "12"
)

// All allowed values of MonthNoType enum
var AllowedMonthNoTypeEnumValues = []MonthNoType{
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
}

func (v *MonthNoType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MonthNoType(value)
	for _, existing := range AllowedMonthNoTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MonthNoType", value)
}

// NewMonthNoTypeFromValue returns a pointer to a valid MonthNoType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMonthNoTypeFromValue(v string) (*MonthNoType, error) {
	ev := MonthNoType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MonthNoType: valid values are %v", v, AllowedMonthNoTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MonthNoType) IsValid() bool {
	for _, existing := range AllowedMonthNoTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to monthNoType value
func (v MonthNoType) Ptr() *MonthNoType {
	return &v
}

type NullableMonthNoType struct {
	value *MonthNoType
	isSet bool
}

func (v NullableMonthNoType) Get() *MonthNoType {
	return v.value
}

func (v *NullableMonthNoType) Set(val *MonthNoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMonthNoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMonthNoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonthNoType(val *MonthNoType) *NullableMonthNoType {
	return &NullableMonthNoType{value: val, isSet: true}
}

func (v NullableMonthNoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonthNoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

