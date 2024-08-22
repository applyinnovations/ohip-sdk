/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
	"fmt"
)

// MarketCodeColorsType Simple type for Market Code colors.
type MarketCodeColorsType string

// List of marketCodeColorsType
const (
	MARKETCODECOLORSTYPE_NONE MarketCodeColorsType = "None"
	MARKETCODECOLORSTYPE_BLUE MarketCodeColorsType = "Blue"
	MARKETCODECOLORSTYPE_RED MarketCodeColorsType = "Red"
	MARKETCODECOLORSTYPE_CYAN MarketCodeColorsType = "Cyan"
	MARKETCODECOLORSTYPE_GREEN MarketCodeColorsType = "Green"
	MARKETCODECOLORSTYPE_BLACK MarketCodeColorsType = "Black"
	MARKETCODECOLORSTYPE_WHITE MarketCodeColorsType = "White"
	MARKETCODECOLORSTYPE_GRAY MarketCodeColorsType = "Gray"
	MARKETCODECOLORSTYPE_YELLOW MarketCodeColorsType = "Yellow"
)

// All allowed values of MarketCodeColorsType enum
var AllowedMarketCodeColorsTypeEnumValues = []MarketCodeColorsType{
	"None",
	"Blue",
	"Red",
	"Cyan",
	"Green",
	"Black",
	"White",
	"Gray",
	"Yellow",
}

func (v *MarketCodeColorsType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MarketCodeColorsType(value)
	for _, existing := range AllowedMarketCodeColorsTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MarketCodeColorsType", value)
}

// NewMarketCodeColorsTypeFromValue returns a pointer to a valid MarketCodeColorsType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMarketCodeColorsTypeFromValue(v string) (*MarketCodeColorsType, error) {
	ev := MarketCodeColorsType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MarketCodeColorsType: valid values are %v", v, AllowedMarketCodeColorsTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MarketCodeColorsType) IsValid() bool {
	for _, existing := range AllowedMarketCodeColorsTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to marketCodeColorsType value
func (v MarketCodeColorsType) Ptr() *MarketCodeColorsType {
	return &v
}

type NullableMarketCodeColorsType struct {
	value *MarketCodeColorsType
	isSet bool
}

func (v NullableMarketCodeColorsType) Get() *MarketCodeColorsType {
	return v.value
}

func (v *NullableMarketCodeColorsType) Set(val *MarketCodeColorsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketCodeColorsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketCodeColorsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketCodeColorsType(val *MarketCodeColorsType) *NullableMarketCodeColorsType {
	return &NullableMarketCodeColorsType{value: val, isSet: true}
}

func (v NullableMarketCodeColorsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketCodeColorsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

