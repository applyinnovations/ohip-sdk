/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
	"fmt"
)

// ECertificateIssueType Indicates that guest purchased OPERA E-Certificate.
type ECertificateIssueType string

// List of eCertificateIssueType
const (
	ECERTIFICATEISSUETYPE_ASSIGNED ECertificateIssueType = "Assigned"
	ECERTIFICATEISSUETYPE_OPTED_IN ECertificateIssueType = "OptedIn"
	ECERTIFICATEISSUETYPE_PURCHASED ECertificateIssueType = "Purchased"
)

// All allowed values of ECertificateIssueType enum
var AllowedECertificateIssueTypeEnumValues = []ECertificateIssueType{
	"Assigned",
	"OptedIn",
	"Purchased",
}

func (v *ECertificateIssueType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ECertificateIssueType(value)
	for _, existing := range AllowedECertificateIssueTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ECertificateIssueType", value)
}

// NewECertificateIssueTypeFromValue returns a pointer to a valid ECertificateIssueType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewECertificateIssueTypeFromValue(v string) (*ECertificateIssueType, error) {
	ev := ECertificateIssueType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ECertificateIssueType: valid values are %v", v, AllowedECertificateIssueTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ECertificateIssueType) IsValid() bool {
	for _, existing := range AllowedECertificateIssueTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to eCertificateIssueType value
func (v ECertificateIssueType) Ptr() *ECertificateIssueType {
	return &v
}

type NullableECertificateIssueType struct {
	value *ECertificateIssueType
	isSet bool
}

func (v NullableECertificateIssueType) Get() *ECertificateIssueType {
	return v.value
}

func (v *NullableECertificateIssueType) Set(val *ECertificateIssueType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateIssueType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateIssueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateIssueType(val *ECertificateIssueType) *NullableECertificateIssueType {
	return &NullableECertificateIssueType{value: val, isSet: true}
}

func (v NullableECertificateIssueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateIssueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
