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

// GenerateAdjustmentTypeType Generates calculation bucket/group. Percentage generates are calculated against amount in one of the the calculation bucket.
type GenerateAdjustmentTypeType string

// List of generateAdjustmentTypeType
const (
	GENERATEADJUSTMENTTYPETYPE_DURING_END_OF_DAY GenerateAdjustmentTypeType = "DuringEndOfDay"
	GENERATEADJUSTMENTTYPETYPE_PROMPT_AT_CHECK_OUT GenerateAdjustmentTypeType = "PromptAtCheckOut"
	GENERATEADJUSTMENTTYPETYPE_NO_ADJUSTMENT GenerateAdjustmentTypeType = "NoAdjustment"
)

// All allowed values of GenerateAdjustmentTypeType enum
var AllowedGenerateAdjustmentTypeTypeEnumValues = []GenerateAdjustmentTypeType{
	"DuringEndOfDay",
	"PromptAtCheckOut",
	"NoAdjustment",
}

func (v *GenerateAdjustmentTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := GenerateAdjustmentTypeType(value)
	for _, existing := range AllowedGenerateAdjustmentTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid GenerateAdjustmentTypeType", value)
}

// NewGenerateAdjustmentTypeTypeFromValue returns a pointer to a valid GenerateAdjustmentTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewGenerateAdjustmentTypeTypeFromValue(v string) (*GenerateAdjustmentTypeType, error) {
	ev := GenerateAdjustmentTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for GenerateAdjustmentTypeType: valid values are %v", v, AllowedGenerateAdjustmentTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v GenerateAdjustmentTypeType) IsValid() bool {
	for _, existing := range AllowedGenerateAdjustmentTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to generateAdjustmentTypeType value
func (v GenerateAdjustmentTypeType) Ptr() *GenerateAdjustmentTypeType {
	return &v
}

type NullableGenerateAdjustmentTypeType struct {
	value *GenerateAdjustmentTypeType
	isSet bool
}

func (v NullableGenerateAdjustmentTypeType) Get() *GenerateAdjustmentTypeType {
	return v.value
}

func (v *NullableGenerateAdjustmentTypeType) Set(val *GenerateAdjustmentTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableGenerateAdjustmentTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableGenerateAdjustmentTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenerateAdjustmentTypeType(val *GenerateAdjustmentTypeType) *NullableGenerateAdjustmentTypeType {
	return &NullableGenerateAdjustmentTypeType{value: val, isSet: true}
}

func (v NullableGenerateAdjustmentTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenerateAdjustmentTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

