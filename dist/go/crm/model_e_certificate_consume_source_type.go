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

// ECertificateConsumeSourceType Indicates that OPERA E-Certificate is consumed by hotelPMS.
type ECertificateConsumeSourceType string

// List of eCertificateConsumeSourceType
const (
	ECERTIFICATECONSUMESOURCETYPE_CENTRAL ECertificateConsumeSourceType = "Central"
	ECERTIFICATECONSUMESOURCETYPE_WEB ECertificateConsumeSourceType = "Web"
	ECERTIFICATECONSUMESOURCETYPE_HOTEL ECertificateConsumeSourceType = "Hotel"
)

// All allowed values of ECertificateConsumeSourceType enum
var AllowedECertificateConsumeSourceTypeEnumValues = []ECertificateConsumeSourceType{
	"Central",
	"Web",
	"Hotel",
}

func (v *ECertificateConsumeSourceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ECertificateConsumeSourceType(value)
	for _, existing := range AllowedECertificateConsumeSourceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ECertificateConsumeSourceType", value)
}

// NewECertificateConsumeSourceTypeFromValue returns a pointer to a valid ECertificateConsumeSourceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewECertificateConsumeSourceTypeFromValue(v string) (*ECertificateConsumeSourceType, error) {
	ev := ECertificateConsumeSourceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ECertificateConsumeSourceType: valid values are %v", v, AllowedECertificateConsumeSourceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ECertificateConsumeSourceType) IsValid() bool {
	for _, existing := range AllowedECertificateConsumeSourceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to eCertificateConsumeSourceType value
func (v ECertificateConsumeSourceType) Ptr() *ECertificateConsumeSourceType {
	return &v
}

type NullableECertificateConsumeSourceType struct {
	value *ECertificateConsumeSourceType
	isSet bool
}

func (v NullableECertificateConsumeSourceType) Get() *ECertificateConsumeSourceType {
	return v.value
}

func (v *NullableECertificateConsumeSourceType) Set(val *ECertificateConsumeSourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateConsumeSourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateConsumeSourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateConsumeSourceType(val *ECertificateConsumeSourceType) *NullableECertificateConsumeSourceType {
	return &NullableECertificateConsumeSourceType{value: val, isSet: true}
}

func (v NullableECertificateConsumeSourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateConsumeSourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

