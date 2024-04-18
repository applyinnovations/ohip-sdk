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

// StatisticsReportType Indicate to get revenue of Stay Records.
type StatisticsReportType string

// List of statisticsReportType
const (
	STATISTICSREPORTTYPE_RESERVATION StatisticsReportType = "Reservation"
	STATISTICSREPORTTYPE_REVENUE StatisticsReportType = "Revenue"
	STATISTICSREPORTTYPE_PROFILE_STAY_RECORDS StatisticsReportType = "ProfileStayRecords"
	STATISTICSREPORTTYPE_DETAIL_STAY_RECORDS_REVENUE StatisticsReportType = "DetailStayRecordsRevenue"
)

// All allowed values of StatisticsReportType enum
var AllowedStatisticsReportTypeEnumValues = []StatisticsReportType{
	"Reservation",
	"Revenue",
	"ProfileStayRecords",
	"DetailStayRecordsRevenue",
}

func (v *StatisticsReportType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatisticsReportType(value)
	for _, existing := range AllowedStatisticsReportTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatisticsReportType", value)
}

// NewStatisticsReportTypeFromValue returns a pointer to a valid StatisticsReportType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatisticsReportTypeFromValue(v string) (*StatisticsReportType, error) {
	ev := StatisticsReportType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatisticsReportType: valid values are %v", v, AllowedStatisticsReportTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatisticsReportType) IsValid() bool {
	for _, existing := range AllowedStatisticsReportTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to statisticsReportType value
func (v StatisticsReportType) Ptr() *StatisticsReportType {
	return &v
}

type NullableStatisticsReportType struct {
	value *StatisticsReportType
	isSet bool
}

func (v NullableStatisticsReportType) Get() *StatisticsReportType {
	return v.value
}

func (v *NullableStatisticsReportType) Set(val *StatisticsReportType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatisticsReportType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatisticsReportType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatisticsReportType(val *StatisticsReportType) *NullableStatisticsReportType {
	return &NullableStatisticsReportType{value: val, isSet: true}
}

func (v NullableStatisticsReportType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatisticsReportType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
