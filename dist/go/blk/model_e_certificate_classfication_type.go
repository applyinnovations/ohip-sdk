/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// ECertificateClassficationType Enumeration of the different type of Ecertificate.
type ECertificateClassficationType string

// List of eCertificateClassficationType
const (
	ECERTIFICATECLASSFICATIONTYPE_PROMOTION ECertificateClassficationType = "Promotion"
	ECERTIFICATECLASSFICATIONTYPE_AWARD ECertificateClassficationType = "Award"
	ECERTIFICATECLASSFICATIONTYPE_BENEFIT ECertificateClassficationType = "Benefit"
	ECERTIFICATECLASSFICATIONTYPE_OTHER ECertificateClassficationType = "Other"
)

// All allowed values of ECertificateClassficationType enum
var AllowedECertificateClassficationTypeEnumValues = []ECertificateClassficationType{
	"Promotion",
	"Award",
	"Benefit",
	"Other",
}

func (v *ECertificateClassficationType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ECertificateClassficationType(value)
	for _, existing := range AllowedECertificateClassficationTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ECertificateClassficationType", value)
}

// NewECertificateClassficationTypeFromValue returns a pointer to a valid ECertificateClassficationType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewECertificateClassficationTypeFromValue(v string) (*ECertificateClassficationType, error) {
	ev := ECertificateClassficationType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ECertificateClassficationType: valid values are %v", v, AllowedECertificateClassficationTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ECertificateClassficationType) IsValid() bool {
	for _, existing := range AllowedECertificateClassficationTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to eCertificateClassficationType value
func (v ECertificateClassficationType) Ptr() *ECertificateClassficationType {
	return &v
}

type NullableECertificateClassficationType struct {
	value *ECertificateClassficationType
	isSet bool
}

func (v NullableECertificateClassficationType) Get() *ECertificateClassficationType {
	return v.value
}

func (v *NullableECertificateClassficationType) Set(val *ECertificateClassficationType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateClassficationType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateClassficationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateClassficationType(val *ECertificateClassficationType) *NullableECertificateClassficationType {
	return &NullableECertificateClassficationType{value: val, isSet: true}
}

func (v NullableECertificateClassficationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateClassficationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

