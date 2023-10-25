/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
	"fmt"
)

// ECertificateIssueSourceType Indicates that OPERA E-Certificate is issued by external system.
type ECertificateIssueSourceType string

// List of eCertificateIssueSourceType
const (
	ECERTIFICATEISSUESOURCETYPE_OPERA ECertificateIssueSourceType = "Opera"
	ECERTIFICATEISSUESOURCETYPE_WEB ECertificateIssueSourceType = "Web"
	ECERTIFICATEISSUESOURCETYPE_INTERFACE ECertificateIssueSourceType = "Interface"
)

// All allowed values of ECertificateIssueSourceType enum
var AllowedECertificateIssueSourceTypeEnumValues = []ECertificateIssueSourceType{
	"Opera",
	"Web",
	"Interface",
}

func (v *ECertificateIssueSourceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ECertificateIssueSourceType(value)
	for _, existing := range AllowedECertificateIssueSourceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ECertificateIssueSourceType", value)
}

// NewECertificateIssueSourceTypeFromValue returns a pointer to a valid ECertificateIssueSourceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewECertificateIssueSourceTypeFromValue(v string) (*ECertificateIssueSourceType, error) {
	ev := ECertificateIssueSourceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ECertificateIssueSourceType: valid values are %v", v, AllowedECertificateIssueSourceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ECertificateIssueSourceType) IsValid() bool {
	for _, existing := range AllowedECertificateIssueSourceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to eCertificateIssueSourceType value
func (v ECertificateIssueSourceType) Ptr() *ECertificateIssueSourceType {
	return &v
}

type NullableECertificateIssueSourceType struct {
	value *ECertificateIssueSourceType
	isSet bool
}

func (v NullableECertificateIssueSourceType) Get() *ECertificateIssueSourceType {
	return v.value
}

func (v *NullableECertificateIssueSourceType) Set(val *ECertificateIssueSourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateIssueSourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateIssueSourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateIssueSourceType(val *ECertificateIssueSourceType) *NullableECertificateIssueSourceType {
	return &NullableECertificateIssueSourceType{value: val, isSet: true}
}

func (v NullableECertificateIssueSourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateIssueSourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

