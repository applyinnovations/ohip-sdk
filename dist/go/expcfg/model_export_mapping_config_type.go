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

// ExportMappingConfigType Enumeration  of Types allowed for Export Mapping
type ExportMappingConfigType string

// List of exportMappingConfigType
const (
	EXPORTMAPPINGCONFIGTYPE_TRANSACTION_CODES ExportMappingConfigType = "TransactionCodes"
	EXPORTMAPPINGCONFIGTYPE_MARKET_CODES ExportMappingConfigType = "MarketCodes"
	EXPORTMAPPINGCONFIGTYPE_PACKAGE_CODES ExportMappingConfigType = "PackageCodes"
	EXPORTMAPPINGCONFIGTYPE_PAYMENT_METHODS ExportMappingConfigType = "PaymentMethods"
	EXPORTMAPPINGCONFIGTYPE_PROFILE_ID_TYPES ExportMappingConfigType = "ProfileIdTypes"
	EXPORTMAPPINGCONFIGTYPE_STATISTIC_CODES ExportMappingConfigType = "StatisticCodes"
	EXPORTMAPPINGCONFIGTYPE_PROPERTY_CODES ExportMappingConfigType = "PropertyCodes"
	EXPORTMAPPINGCONFIGTYPE_COUNTRY_CODES ExportMappingConfigType = "CountryCodes"
	EXPORTMAPPINGCONFIGTYPE_NATIONALITY_CODES ExportMappingConfigType = "NationalityCodes"
	EXPORTMAPPINGCONFIGTYPE_STATE_CODES ExportMappingConfigType = "StateCodes"
	EXPORTMAPPINGCONFIGTYPE_DISTRICT_CODES ExportMappingConfigType = "DistrictCodes"
	EXPORTMAPPINGCONFIGTYPE_CITY_CODES ExportMappingConfigType = "CityCodes"
	EXPORTMAPPINGCONFIGTYPE_COUNTRY_CITIES ExportMappingConfigType = "CountryCities"
	EXPORTMAPPINGCONFIGTYPE_PURPOSE_OF_STAY_CODES ExportMappingConfigType = "PurposeOfStayCodes"
	EXPORTMAPPINGCONFIGTYPE_TRANSPORTATION_CODES ExportMappingConfigType = "TransportationCodes"
	EXPORTMAPPINGCONFIGTYPE_CANCEL_REASONS ExportMappingConfigType = "CancelReasons"
	EXPORTMAPPINGCONFIGTYPE_GENDER ExportMappingConfigType = "Gender"
	EXPORTMAPPINGCONFIGTYPE_ROOM_TYPES ExportMappingConfigType = "RoomTypes"
	EXPORTMAPPINGCONFIGTYPE_ID_COUNTRY_CODES ExportMappingConfigType = "IdCountryCodes"
)

// All allowed values of ExportMappingConfigType enum
var AllowedExportMappingConfigTypeEnumValues = []ExportMappingConfigType{
	"TransactionCodes",
	"MarketCodes",
	"PackageCodes",
	"PaymentMethods",
	"ProfileIdTypes",
	"StatisticCodes",
	"PropertyCodes",
	"CountryCodes",
	"NationalityCodes",
	"StateCodes",
	"DistrictCodes",
	"CityCodes",
	"CountryCities",
	"PurposeOfStayCodes",
	"TransportationCodes",
	"CancelReasons",
	"Gender",
	"RoomTypes",
	"IdCountryCodes",
}

func (v *ExportMappingConfigType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExportMappingConfigType(value)
	for _, existing := range AllowedExportMappingConfigTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExportMappingConfigType", value)
}

// NewExportMappingConfigTypeFromValue returns a pointer to a valid ExportMappingConfigType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExportMappingConfigTypeFromValue(v string) (*ExportMappingConfigType, error) {
	ev := ExportMappingConfigType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExportMappingConfigType: valid values are %v", v, AllowedExportMappingConfigTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExportMappingConfigType) IsValid() bool {
	for _, existing := range AllowedExportMappingConfigTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exportMappingConfigType value
func (v ExportMappingConfigType) Ptr() *ExportMappingConfigType {
	return &v
}

type NullableExportMappingConfigType struct {
	value *ExportMappingConfigType
	isSet bool
}

func (v NullableExportMappingConfigType) Get() *ExportMappingConfigType {
	return v.value
}

func (v *NullableExportMappingConfigType) Set(val *ExportMappingConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportMappingConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportMappingConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportMappingConfigType(val *ExportMappingConfigType) *NullableExportMappingConfigType {
	return &NullableExportMappingConfigType{value: val, isSet: true}
}

func (v NullableExportMappingConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportMappingConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

