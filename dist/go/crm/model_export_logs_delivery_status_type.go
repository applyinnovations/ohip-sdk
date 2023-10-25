/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
	"fmt"
)

// ExportLogsDeliveryStatusType Delivery Status for export logs - Not Delivered.
type ExportLogsDeliveryStatusType string

// List of exportLogsDeliveryStatusType
const (
	EXPORTLOGSDELIVERYSTATUSTYPE_UNKNOWN ExportLogsDeliveryStatusType = "Unknown"
	EXPORTLOGSDELIVERYSTATUSTYPE_DELIVERED ExportLogsDeliveryStatusType = "Delivered"
	EXPORTLOGSDELIVERYSTATUSTYPE_NOTDELIVERED ExportLogsDeliveryStatusType = "Notdelivered"
)

// All allowed values of ExportLogsDeliveryStatusType enum
var AllowedExportLogsDeliveryStatusTypeEnumValues = []ExportLogsDeliveryStatusType{
	"Unknown",
	"Delivered",
	"Notdelivered",
}

func (v *ExportLogsDeliveryStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExportLogsDeliveryStatusType(value)
	for _, existing := range AllowedExportLogsDeliveryStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExportLogsDeliveryStatusType", value)
}

// NewExportLogsDeliveryStatusTypeFromValue returns a pointer to a valid ExportLogsDeliveryStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExportLogsDeliveryStatusTypeFromValue(v string) (*ExportLogsDeliveryStatusType, error) {
	ev := ExportLogsDeliveryStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExportLogsDeliveryStatusType: valid values are %v", v, AllowedExportLogsDeliveryStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExportLogsDeliveryStatusType) IsValid() bool {
	for _, existing := range AllowedExportLogsDeliveryStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exportLogsDeliveryStatusType value
func (v ExportLogsDeliveryStatusType) Ptr() *ExportLogsDeliveryStatusType {
	return &v
}

type NullableExportLogsDeliveryStatusType struct {
	value *ExportLogsDeliveryStatusType
	isSet bool
}

func (v NullableExportLogsDeliveryStatusType) Get() *ExportLogsDeliveryStatusType {
	return v.value
}

func (v *NullableExportLogsDeliveryStatusType) Set(val *ExportLogsDeliveryStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportLogsDeliveryStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportLogsDeliveryStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportLogsDeliveryStatusType(val *ExportLogsDeliveryStatusType) *NullableExportLogsDeliveryStatusType {
	return &NullableExportLogsDeliveryStatusType{value: val, isSet: true}
}

func (v NullableExportLogsDeliveryStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportLogsDeliveryStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

