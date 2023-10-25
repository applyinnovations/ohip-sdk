/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
	"fmt"
)

// StatUnitCategoryType Supported statistical units.
type StatUnitCategoryType string

// List of statUnitCategoryType
const (
	STATUNITCATEGORYTYPE_NUMERIC StatUnitCategoryType = "Numeric"
	STATUNITCATEGORYTYPE_AMOUNT StatUnitCategoryType = "Amount"
)

// All allowed values of StatUnitCategoryType enum
var AllowedStatUnitCategoryTypeEnumValues = []StatUnitCategoryType{
	"Numeric",
	"Amount",
}

func (v *StatUnitCategoryType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatUnitCategoryType(value)
	for _, existing := range AllowedStatUnitCategoryTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatUnitCategoryType", value)
}

// NewStatUnitCategoryTypeFromValue returns a pointer to a valid StatUnitCategoryType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatUnitCategoryTypeFromValue(v string) (*StatUnitCategoryType, error) {
	ev := StatUnitCategoryType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatUnitCategoryType: valid values are %v", v, AllowedStatUnitCategoryTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatUnitCategoryType) IsValid() bool {
	for _, existing := range AllowedStatUnitCategoryTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to statUnitCategoryType value
func (v StatUnitCategoryType) Ptr() *StatUnitCategoryType {
	return &v
}

type NullableStatUnitCategoryType struct {
	value *StatUnitCategoryType
	isSet bool
}

func (v NullableStatUnitCategoryType) Get() *StatUnitCategoryType {
	return v.value
}

func (v *NullableStatUnitCategoryType) Set(val *StatUnitCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatUnitCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatUnitCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatUnitCategoryType(val *StatUnitCategoryType) *NullableStatUnitCategoryType {
	return &NullableStatUnitCategoryType{value: val, isSet: true}
}

func (v NullableStatUnitCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatUnitCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

