/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
	"fmt"
)

// AwardKindType Indicates that this is electronic certificate.
type AwardKindType string

// List of awardKindType
const (
	AWARDKINDTYPE_PAPER AwardKindType = "Paper"
	AWARDKINDTYPE_E_CERTIFICATE AwardKindType = "ECertificate"
)

// All allowed values of AwardKindType enum
var AllowedAwardKindTypeEnumValues = []AwardKindType{
	"Paper",
	"ECertificate",
}

func (v *AwardKindType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AwardKindType(value)
	for _, existing := range AllowedAwardKindTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AwardKindType", value)
}

// NewAwardKindTypeFromValue returns a pointer to a valid AwardKindType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAwardKindTypeFromValue(v string) (*AwardKindType, error) {
	ev := AwardKindType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AwardKindType: valid values are %v", v, AllowedAwardKindTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AwardKindType) IsValid() bool {
	for _, existing := range AllowedAwardKindTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to awardKindType value
func (v AwardKindType) Ptr() *AwardKindType {
	return &v
}

type NullableAwardKindType struct {
	value *AwardKindType
	isSet bool
}

func (v NullableAwardKindType) Get() *AwardKindType {
	return v.value
}

func (v *NullableAwardKindType) Set(val *AwardKindType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardKindType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardKindType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardKindType(val *AwardKindType) *NullableAwardKindType {
	return &NullableAwardKindType{value: val, isSet: true}
}

func (v NullableAwardKindType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardKindType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

