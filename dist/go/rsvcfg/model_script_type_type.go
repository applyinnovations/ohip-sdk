/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
	"fmt"
)

// ScriptTypeType Type for Web Reg Card.
type ScriptTypeType string

// List of scriptTypeType
const (
	SCRIPTTYPETYPE_CLOSING_SCRIPT ScriptTypeType = "ClosingScript"
	SCRIPTTYPETYPE_WEB_REG_CARD ScriptTypeType = "WebRegCard"
)

// All allowed values of ScriptTypeType enum
var AllowedScriptTypeTypeEnumValues = []ScriptTypeType{
	"ClosingScript",
	"WebRegCard",
}

func (v *ScriptTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ScriptTypeType(value)
	for _, existing := range AllowedScriptTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ScriptTypeType", value)
}

// NewScriptTypeTypeFromValue returns a pointer to a valid ScriptTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewScriptTypeTypeFromValue(v string) (*ScriptTypeType, error) {
	ev := ScriptTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ScriptTypeType: valid values are %v", v, AllowedScriptTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ScriptTypeType) IsValid() bool {
	for _, existing := range AllowedScriptTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to scriptTypeType value
func (v ScriptTypeType) Ptr() *ScriptTypeType {
	return &v
}

type NullableScriptTypeType struct {
	value *ScriptTypeType
	isSet bool
}

func (v NullableScriptTypeType) Get() *ScriptTypeType {
	return v.value
}

func (v *NullableScriptTypeType) Set(val *ScriptTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableScriptTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableScriptTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableScriptTypeType(val *ScriptTypeType) *NullableScriptTypeType {
	return &NullableScriptTypeType{value: val, isSet: true}
}

func (v NullableScriptTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableScriptTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

