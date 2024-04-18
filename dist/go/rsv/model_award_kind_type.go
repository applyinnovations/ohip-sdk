/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
	"fmt"
)

// AwardKindType Indicates that this is electronic certificate.
type AwardKindType string

// List of awardKindType
const (
	AWARDKINDTYPE_PAPER AwardKindType = "Paper"
	AWARDKINDTYPE_E_CERTIFICATE AwardKindType = "ECertificate"
)

// All allowed values of AwardKindType enum
var AllowedAwardKindTypeEnumValues = []AwardKindType{
	"Paper",
	"ECertificate",
}

func (v *AwardKindType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AwardKindType(value)
	for _, existing := range AllowedAwardKindTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AwardKindType", value)
}

// NewAwardKindTypeFromValue returns a pointer to a valid AwardKindType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAwardKindTypeFromValue(v string) (*AwardKindType, error) {
	ev := AwardKindType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AwardKindType: valid values are %v", v, AllowedAwardKindTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AwardKindType) IsValid() bool {
	for _, existing := range AllowedAwardKindTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to awardKindType value
func (v AwardKindType) Ptr() *AwardKindType {
	return &v
}

type NullableAwardKindType struct {
	value *AwardKindType
	isSet bool
}

func (v NullableAwardKindType) Get() *AwardKindType {
	return v.value
}

func (v *NullableAwardKindType) Set(val *AwardKindType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardKindType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardKindType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardKindType(val *AwardKindType) *NullableAwardKindType {
	return &NullableAwardKindType{value: val, isSet: true}
}

func (v NullableAwardKindType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardKindType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
