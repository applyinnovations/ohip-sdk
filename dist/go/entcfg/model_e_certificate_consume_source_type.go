/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

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

