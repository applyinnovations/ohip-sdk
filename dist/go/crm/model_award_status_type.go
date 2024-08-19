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

// AwardStatusType Indicates that certificate is in use.
type AwardStatusType string

// List of awardStatusType
const (
	AWARDSTATUSTYPE_AVAILABLE AwardStatusType = "Available"
	AWARDSTATUSTYPE_NOT_AVAILABLE AwardStatusType = "NotAvailable"
	AWARDSTATUSTYPE_IN_USE AwardStatusType = "InUse"
)

// All allowed values of AwardStatusType enum
var AllowedAwardStatusTypeEnumValues = []AwardStatusType{
	"Available",
	"NotAvailable",
	"InUse",
}

func (v *AwardStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AwardStatusType(value)
	for _, existing := range AllowedAwardStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AwardStatusType", value)
}

// NewAwardStatusTypeFromValue returns a pointer to a valid AwardStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAwardStatusTypeFromValue(v string) (*AwardStatusType, error) {
	ev := AwardStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AwardStatusType: valid values are %v", v, AllowedAwardStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AwardStatusType) IsValid() bool {
	for _, existing := range AllowedAwardStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to awardStatusType value
func (v AwardStatusType) Ptr() *AwardStatusType {
	return &v
}

type NullableAwardStatusType struct {
	value *AwardStatusType
	isSet bool
}

func (v NullableAwardStatusType) Get() *AwardStatusType {
	return v.value
}

func (v *NullableAwardStatusType) Set(val *AwardStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardStatusType(val *AwardStatusType) *NullableAwardStatusType {
	return &NullableAwardStatusType{value: val, isSet: true}
}

func (v NullableAwardStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

