/*
OPERA Cloud Report Master Data Management API

APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package repcfg

import (
	"encoding/json"
	"fmt"
)

// ReportModuleTypeType Procedure Report
type ReportModuleTypeType string

// List of reportModuleTypeType
const (
	REPORTMODULETYPETYPE_RTF ReportModuleTypeType = "Rtf"
	REPORTMODULETYPETYPE_CUS ReportModuleTypeType = "Cus"
	REPORTMODULETYPETYPE_REP ReportModuleTypeType = "Rep"
	REPORTMODULETYPETYPE_SFT ReportModuleTypeType = "Sft"
	REPORTMODULETYPETYPE_GRP ReportModuleTypeType = "Grp"
	REPORTMODULETYPETYPE_URL ReportModuleTypeType = "Url"
	REPORTMODULETYPETYPE_LBL ReportModuleTypeType = "Lbl"
	REPORTMODULETYPETYPE_PCD ReportModuleTypeType = "Pcd"
)

// All allowed values of ReportModuleTypeType enum
var AllowedReportModuleTypeTypeEnumValues = []ReportModuleTypeType{
	"Rtf",
	"Cus",
	"Rep",
	"Sft",
	"Grp",
	"Url",
	"Lbl",
	"Pcd",
}

func (v *ReportModuleTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ReportModuleTypeType(value)
	for _, existing := range AllowedReportModuleTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ReportModuleTypeType", value)
}

// NewReportModuleTypeTypeFromValue returns a pointer to a valid ReportModuleTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewReportModuleTypeTypeFromValue(v string) (*ReportModuleTypeType, error) {
	ev := ReportModuleTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ReportModuleTypeType: valid values are %v", v, AllowedReportModuleTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ReportModuleTypeType) IsValid() bool {
	for _, existing := range AllowedReportModuleTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to reportModuleTypeType value
func (v ReportModuleTypeType) Ptr() *ReportModuleTypeType {
	return &v
}

type NullableReportModuleTypeType struct {
	value *ReportModuleTypeType
	isSet bool
}

func (v NullableReportModuleTypeType) Get() *ReportModuleTypeType {
	return v.value
}

func (v *NullableReportModuleTypeType) Set(val *ReportModuleTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableReportModuleTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableReportModuleTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReportModuleTypeType(val *ReportModuleTypeType) *NullableReportModuleTypeType {
	return &NullableReportModuleTypeType{value: val, isSet: true}
}

func (v NullableReportModuleTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReportModuleTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

