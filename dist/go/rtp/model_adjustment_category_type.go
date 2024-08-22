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

// AdjustmentCategoryType Simple type for Yield Adjustment types.
type AdjustmentCategoryType string

// List of adjustmentCategoryType
const (
	ADJUSTMENTCATEGORYTYPE_PER_STAY AdjustmentCategoryType = "PerStay"
	ADJUSTMENTCATEGORYTYPE_PER_NIGHT AdjustmentCategoryType = "PerNight"
	ADJUSTMENTCATEGORYTYPE_PER_PERSON_PER_STAY AdjustmentCategoryType = "PerPersonPerStay"
	ADJUSTMENTCATEGORYTYPE_PER_PERSON_PER_NIGHT AdjustmentCategoryType = "PerPersonPerNight"
)

// All allowed values of AdjustmentCategoryType enum
var AllowedAdjustmentCategoryTypeEnumValues = []AdjustmentCategoryType{
	"PerStay",
	"PerNight",
	"PerPersonPerStay",
	"PerPersonPerNight",
}

func (v *AdjustmentCategoryType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AdjustmentCategoryType(value)
	for _, existing := range AllowedAdjustmentCategoryTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AdjustmentCategoryType", value)
}

// NewAdjustmentCategoryTypeFromValue returns a pointer to a valid AdjustmentCategoryType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAdjustmentCategoryTypeFromValue(v string) (*AdjustmentCategoryType, error) {
	ev := AdjustmentCategoryType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AdjustmentCategoryType: valid values are %v", v, AllowedAdjustmentCategoryTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AdjustmentCategoryType) IsValid() bool {
	for _, existing := range AllowedAdjustmentCategoryTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to adjustmentCategoryType value
func (v AdjustmentCategoryType) Ptr() *AdjustmentCategoryType {
	return &v
}

type NullableAdjustmentCategoryType struct {
	value *AdjustmentCategoryType
	isSet bool
}

func (v NullableAdjustmentCategoryType) Get() *AdjustmentCategoryType {
	return v.value
}

func (v *NullableAdjustmentCategoryType) Set(val *AdjustmentCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableAdjustmentCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableAdjustmentCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdjustmentCategoryType(val *AdjustmentCategoryType) *NullableAdjustmentCategoryType {
	return &NullableAdjustmentCategoryType{value: val, isSet: true}
}

func (v NullableAdjustmentCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdjustmentCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

