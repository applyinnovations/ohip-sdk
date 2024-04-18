/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
	"fmt"
)

// ExportColumnInfoType Enumeration of export file groups.
type ExportColumnInfoType string

// List of exportColumnInfoType
const (
	EXPORTCOLUMNINFOTYPE_DATA ExportColumnInfoType = "Data"
	EXPORTCOLUMNINFOTYPE_HEADER ExportColumnInfoType = "Header"
	EXPORTCOLUMNINFOTYPE_FOOTER ExportColumnInfoType = "Footer"
)

// All allowed values of ExportColumnInfoType enum
var AllowedExportColumnInfoTypeEnumValues = []ExportColumnInfoType{
	"Data",
	"Header",
	"Footer",
}

func (v *ExportColumnInfoType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExportColumnInfoType(value)
	for _, existing := range AllowedExportColumnInfoTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExportColumnInfoType", value)
}

// NewExportColumnInfoTypeFromValue returns a pointer to a valid ExportColumnInfoType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExportColumnInfoTypeFromValue(v string) (*ExportColumnInfoType, error) {
	ev := ExportColumnInfoType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExportColumnInfoType: valid values are %v", v, AllowedExportColumnInfoTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExportColumnInfoType) IsValid() bool {
	for _, existing := range AllowedExportColumnInfoTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exportColumnInfoType value
func (v ExportColumnInfoType) Ptr() *ExportColumnInfoType {
	return &v
}

type NullableExportColumnInfoType struct {
	value *ExportColumnInfoType
	isSet bool
}

func (v NullableExportColumnInfoType) Get() *ExportColumnInfoType {
	return v.value
}

func (v *NullableExportColumnInfoType) Set(val *ExportColumnInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportColumnInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportColumnInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportColumnInfoType(val *ExportColumnInfoType) *NullableExportColumnInfoType {
	return &NullableExportColumnInfoType{value: val, isSet: true}
}

func (v NullableExportColumnInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportColumnInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
