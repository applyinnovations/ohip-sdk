/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
	"fmt"
)

// ForecastRevenueAmountTypeType Defines values for Amount Type of an event forecast revenue.
type ForecastRevenueAmountTypeType string

// List of forecastRevenueAmountTypeType
const (
	FORECASTREVENUEAMOUNTTYPETYPE_FLAT_AMOUNT ForecastRevenueAmountTypeType = "FlatAmount"
	FORECASTREVENUEAMOUNTTYPETYPE_PER_PERSON ForecastRevenueAmountTypeType = "PerPerson"
)

// All allowed values of ForecastRevenueAmountTypeType enum
var AllowedForecastRevenueAmountTypeTypeEnumValues = []ForecastRevenueAmountTypeType{
	"FlatAmount",
	"PerPerson",
}

func (v *ForecastRevenueAmountTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ForecastRevenueAmountTypeType(value)
	for _, existing := range AllowedForecastRevenueAmountTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ForecastRevenueAmountTypeType", value)
}

// NewForecastRevenueAmountTypeTypeFromValue returns a pointer to a valid ForecastRevenueAmountTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewForecastRevenueAmountTypeTypeFromValue(v string) (*ForecastRevenueAmountTypeType, error) {
	ev := ForecastRevenueAmountTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ForecastRevenueAmountTypeType: valid values are %v", v, AllowedForecastRevenueAmountTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ForecastRevenueAmountTypeType) IsValid() bool {
	for _, existing := range AllowedForecastRevenueAmountTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to forecastRevenueAmountTypeType value
func (v ForecastRevenueAmountTypeType) Ptr() *ForecastRevenueAmountTypeType {
	return &v
}

type NullableForecastRevenueAmountTypeType struct {
	value *ForecastRevenueAmountTypeType
	isSet bool
}

func (v NullableForecastRevenueAmountTypeType) Get() *ForecastRevenueAmountTypeType {
	return v.value
}

func (v *NullableForecastRevenueAmountTypeType) Set(val *ForecastRevenueAmountTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableForecastRevenueAmountTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableForecastRevenueAmountTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableForecastRevenueAmountTypeType(val *ForecastRevenueAmountTypeType) *NullableForecastRevenueAmountTypeType {
	return &NullableForecastRevenueAmountTypeType{value: val, isSet: true}
}

func (v NullableForecastRevenueAmountTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableForecastRevenueAmountTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

