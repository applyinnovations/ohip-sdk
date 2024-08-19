/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
	"fmt"
)

// ColorType Color configuration type. This color configuration provides a visual category of entities.
type ColorType string

// List of colorType
const (
	COLORTYPE_RED ColorType = "Red"
	COLORTYPE_DARK_RED ColorType = "DarkRed"
	COLORTYPE_GREEN ColorType = "Green"
	COLORTYPE_DARK_GREEN ColorType = "DarkGreen"
	COLORTYPE_LIGHT_GREEN ColorType = "LightGreen"
	COLORTYPE_ORANGE ColorType = "Orange"
	COLORTYPE_WHITE ColorType = "White"
	COLORTYPE_YELLOW ColorType = "Yellow"
	COLORTYPE_DARK_YELLOW ColorType = "DarkYellow"
	COLORTYPE_PURPLE ColorType = "Purple"
	COLORTYPE_BROWN ColorType = "Brown"
	COLORTYPE_GRAY ColorType = "Gray"
	COLORTYPE_AQUA ColorType = "Aqua"
	COLORTYPE_CHOCOLATE ColorType = "Chocolate"
	COLORTYPE_BLUE ColorType = "Blue"
	COLORTYPE_LIGHT_BLUE ColorType = "LightBlue"
	COLORTYPE_DARK_BLUE ColorType = "DarkBlue"
	COLORTYPE_CYAN ColorType = "Cyan"
	COLORTYPE_DARK_CYAN ColorType = "DarkCyan"
	COLORTYPE_MAGENTA ColorType = "Magenta"
	COLORTYPE_DARK_MAGENTA ColorType = "DarkMagenta"
	COLORTYPE_BLACK ColorType = "Black"
)

// All allowed values of ColorType enum
var AllowedColorTypeEnumValues = []ColorType{
	"Red",
	"DarkRed",
	"Green",
	"DarkGreen",
	"LightGreen",
	"Orange",
	"White",
	"Yellow",
	"DarkYellow",
	"Purple",
	"Brown",
	"Gray",
	"Aqua",
	"Chocolate",
	"Blue",
	"LightBlue",
	"DarkBlue",
	"Cyan",
	"DarkCyan",
	"Magenta",
	"DarkMagenta",
	"Black",
}

func (v *ColorType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ColorType(value)
	for _, existing := range AllowedColorTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ColorType", value)
}

// NewColorTypeFromValue returns a pointer to a valid ColorType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewColorTypeFromValue(v string) (*ColorType, error) {
	ev := ColorType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ColorType: valid values are %v", v, AllowedColorTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ColorType) IsValid() bool {
	for _, existing := range AllowedColorTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to colorType value
func (v ColorType) Ptr() *ColorType {
	return &v
}

type NullableColorType struct {
	value *ColorType
	isSet bool
}

func (v NullableColorType) Get() *ColorType {
	return v.value
}

func (v *NullableColorType) Set(val *ColorType) {
	v.value = val
	v.isSet = true
}

func (v NullableColorType) IsSet() bool {
	return v.isSet
}

func (v *NullableColorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableColorType(val *ColorType) *NullableColorType {
	return &NullableColorType{value: val, isSet: true}
}

func (v NullableColorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableColorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

