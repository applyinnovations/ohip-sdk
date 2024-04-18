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

// ExportType Enumeration of export file groups.
type ExportType string

// List of exportType
const (
	EXPORTTYPE_MISCELLANEOUS ExportType = "Miscellaneous"
	EXPORTTYPE_MEMBERSHIPS ExportType = "Memberships"
	EXPORTTYPE_COUNTRY ExportType = "Country"
	EXPORTTYPE_DELPHI ExportType = "Delphi"
	EXPORTTYPE_BACK_OFFICE ExportType = "BackOffice"
	EXPORTTYPE_BACK_OFFICE_REVENUE ExportType = "BackOfficeRevenue"
	EXPORTTYPE_BACK_OFFICE_CITY_LEDGER ExportType = "BackOfficeCityLedger"
	EXPORTTYPE_BACK_OFFICE_MARKET_STATISTICS ExportType = "BackOfficeMarketStatistics"
	EXPORTTYPE_BACK_OFFICE_DAILY_STATISTICS ExportType = "BackOfficeDailyStatistics"
	EXPORTTYPE_COMMISSION_EFT ExportType = "CommissionEft"
)

// All allowed values of ExportType enum
var AllowedExportTypeEnumValues = []ExportType{
	"Miscellaneous",
	"Memberships",
	"Country",
	"Delphi",
	"BackOffice",
	"BackOfficeRevenue",
	"BackOfficeCityLedger",
	"BackOfficeMarketStatistics",
	"BackOfficeDailyStatistics",
	"CommissionEft",
}

func (v *ExportType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExportType(value)
	for _, existing := range AllowedExportTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExportType", value)
}

// NewExportTypeFromValue returns a pointer to a valid ExportType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExportTypeFromValue(v string) (*ExportType, error) {
	ev := ExportType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExportType: valid values are %v", v, AllowedExportTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExportType) IsValid() bool {
	for _, existing := range AllowedExportTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exportType value
func (v ExportType) Ptr() *ExportType {
	return &v
}

type NullableExportType struct {
	value *ExportType
	isSet bool
}

func (v NullableExportType) Get() *ExportType {
	return v.value
}

func (v *NullableExportType) Set(val *ExportType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportType(val *ExportType) *NullableExportType {
	return &NullableExportType{value: val, isSet: true}
}

func (v NullableExportType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
