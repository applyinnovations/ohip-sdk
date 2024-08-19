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

// FormulaType Simple type for storing formula type.
type FormulaType string

// List of formulaType
const (
	FORMULATYPE_FLAT_AMOUNT_ADDED_TO_ORIGINAL_RATE FormulaType = "FlatAmountAddedToOriginalRate"
	FORMULATYPE_PERCENT_OF_DIFFERENCE_ADDED_TO_ORIGINAL_RATE FormulaType = "PercentOfDifferenceAddedToOriginalRate"
	FORMULATYPE_PERCENT_OF_ORIGINAL_RATE_ADDED_TO_ORIGINAL_RATE FormulaType = "PercentOfOriginalRateAddedToOriginalRate"
)

// All allowed values of FormulaType enum
var AllowedFormulaTypeEnumValues = []FormulaType{
	"FlatAmountAddedToOriginalRate",
	"PercentOfDifferenceAddedToOriginalRate",
	"PercentOfOriginalRateAddedToOriginalRate",
}

func (v *FormulaType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FormulaType(value)
	for _, existing := range AllowedFormulaTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FormulaType", value)
}

// NewFormulaTypeFromValue returns a pointer to a valid FormulaType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFormulaTypeFromValue(v string) (*FormulaType, error) {
	ev := FormulaType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FormulaType: valid values are %v", v, AllowedFormulaTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FormulaType) IsValid() bool {
	for _, existing := range AllowedFormulaTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to formulaType value
func (v FormulaType) Ptr() *FormulaType {
	return &v
}

type NullableFormulaType struct {
	value *FormulaType
	isSet bool
}

func (v NullableFormulaType) Get() *FormulaType {
	return v.value
}

func (v *NullableFormulaType) Set(val *FormulaType) {
	v.value = val
	v.isSet = true
}

func (v NullableFormulaType) IsSet() bool {
	return v.isSet
}

func (v *NullableFormulaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFormulaType(val *FormulaType) *NullableFormulaType {
	return &NullableFormulaType{value: val, isSet: true}
}

func (v NullableFormulaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFormulaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

