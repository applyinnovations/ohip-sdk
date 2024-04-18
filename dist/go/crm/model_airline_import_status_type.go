/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
	"fmt"
)

// AirlineImportStatusType List of possible import statuses of a membership airline processing record.
type AirlineImportStatusType string

// List of airlineImportStatusType
const (
	AIRLINEIMPORTSTATUSTYPE_NEW AirlineImportStatusType = "New"
	AIRLINEIMPORTSTATUSTYPE_UPLOADED AirlineImportStatusType = "Uploaded"
	AIRLINEIMPORTSTATUSTYPE_ERROR AirlineImportStatusType = "Error"
)

// All allowed values of AirlineImportStatusType enum
var AllowedAirlineImportStatusTypeEnumValues = []AirlineImportStatusType{
	"New",
	"Uploaded",
	"Error",
}

func (v *AirlineImportStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AirlineImportStatusType(value)
	for _, existing := range AllowedAirlineImportStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AirlineImportStatusType", value)
}

// NewAirlineImportStatusTypeFromValue returns a pointer to a valid AirlineImportStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAirlineImportStatusTypeFromValue(v string) (*AirlineImportStatusType, error) {
	ev := AirlineImportStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AirlineImportStatusType: valid values are %v", v, AllowedAirlineImportStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AirlineImportStatusType) IsValid() bool {
	for _, existing := range AllowedAirlineImportStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to airlineImportStatusType value
func (v AirlineImportStatusType) Ptr() *AirlineImportStatusType {
	return &v
}

type NullableAirlineImportStatusType struct {
	value *AirlineImportStatusType
	isSet bool
}

func (v NullableAirlineImportStatusType) Get() *AirlineImportStatusType {
	return v.value
}

func (v *NullableAirlineImportStatusType) Set(val *AirlineImportStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableAirlineImportStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableAirlineImportStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAirlineImportStatusType(val *AirlineImportStatusType) *NullableAirlineImportStatusType {
	return &NullableAirlineImportStatusType{value: val, isSet: true}
}

func (v NullableAirlineImportStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAirlineImportStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
