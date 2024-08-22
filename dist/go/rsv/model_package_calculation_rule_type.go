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

// PackageCalculationRuleType Simple type for package caluculation rules.
type PackageCalculationRuleType string

// List of packageCalculationRuleType
const (
	PACKAGECALCULATIONRULETYPE_FLAT_RATE PackageCalculationRuleType = "FlatRate"
	PACKAGECALCULATIONRULETYPE_PER_PERSON PackageCalculationRuleType = "PerPerson"
	PACKAGECALCULATIONRULETYPE_PER_ADULT PackageCalculationRuleType = "PerAdult"
	PACKAGECALCULATIONRULETYPE_PER_CHILD PackageCalculationRuleType = "PerChild"
	PACKAGECALCULATIONRULETYPE_PER_ROOM PackageCalculationRuleType = "PerRoom"
)

// All allowed values of PackageCalculationRuleType enum
var AllowedPackageCalculationRuleTypeEnumValues = []PackageCalculationRuleType{
	"FlatRate",
	"PerPerson",
	"PerAdult",
	"PerChild",
	"PerRoom",
}

func (v *PackageCalculationRuleType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PackageCalculationRuleType(value)
	for _, existing := range AllowedPackageCalculationRuleTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PackageCalculationRuleType", value)
}

// NewPackageCalculationRuleTypeFromValue returns a pointer to a valid PackageCalculationRuleType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPackageCalculationRuleTypeFromValue(v string) (*PackageCalculationRuleType, error) {
	ev := PackageCalculationRuleType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PackageCalculationRuleType: valid values are %v", v, AllowedPackageCalculationRuleTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PackageCalculationRuleType) IsValid() bool {
	for _, existing := range AllowedPackageCalculationRuleTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to packageCalculationRuleType value
func (v PackageCalculationRuleType) Ptr() *PackageCalculationRuleType {
	return &v
}

type NullablePackageCalculationRuleType struct {
	value *PackageCalculationRuleType
	isSet bool
}

func (v NullablePackageCalculationRuleType) Get() *PackageCalculationRuleType {
	return v.value
}

func (v *NullablePackageCalculationRuleType) Set(val *PackageCalculationRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageCalculationRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageCalculationRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageCalculationRuleType(val *PackageCalculationRuleType) *NullablePackageCalculationRuleType {
	return &NullablePackageCalculationRuleType{value: val, isSet: true}
}

func (v NullablePackageCalculationRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageCalculationRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

