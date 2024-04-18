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

// FixedChargeFrequencyType Yearly.
type FixedChargeFrequencyType string

// List of fixedChargeFrequencyType
const (
	FIXEDCHARGEFREQUENCYTYPE_O FixedChargeFrequencyType = "O"
	FIXEDCHARGEFREQUENCYTYPE_D FixedChargeFrequencyType = "D"
	FIXEDCHARGEFREQUENCYTYPE_W FixedChargeFrequencyType = "W"
	FIXEDCHARGEFREQUENCYTYPE_M FixedChargeFrequencyType = "M"
	FIXEDCHARGEFREQUENCYTYPE_Q FixedChargeFrequencyType = "Q"
	FIXEDCHARGEFREQUENCYTYPE_Y FixedChargeFrequencyType = "Y"
)

// All allowed values of FixedChargeFrequencyType enum
var AllowedFixedChargeFrequencyTypeEnumValues = []FixedChargeFrequencyType{
	"O",
	"D",
	"W",
	"M",
	"Q",
	"Y",
}

func (v *FixedChargeFrequencyType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FixedChargeFrequencyType(value)
	for _, existing := range AllowedFixedChargeFrequencyTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FixedChargeFrequencyType", value)
}

// NewFixedChargeFrequencyTypeFromValue returns a pointer to a valid FixedChargeFrequencyType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFixedChargeFrequencyTypeFromValue(v string) (*FixedChargeFrequencyType, error) {
	ev := FixedChargeFrequencyType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FixedChargeFrequencyType: valid values are %v", v, AllowedFixedChargeFrequencyTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FixedChargeFrequencyType) IsValid() bool {
	for _, existing := range AllowedFixedChargeFrequencyTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to fixedChargeFrequencyType value
func (v FixedChargeFrequencyType) Ptr() *FixedChargeFrequencyType {
	return &v
}

type NullableFixedChargeFrequencyType struct {
	value *FixedChargeFrequencyType
	isSet bool
}

func (v NullableFixedChargeFrequencyType) Get() *FixedChargeFrequencyType {
	return v.value
}

func (v *NullableFixedChargeFrequencyType) Set(val *FixedChargeFrequencyType) {
	v.value = val
	v.isSet = true
}

func (v NullableFixedChargeFrequencyType) IsSet() bool {
	return v.isSet
}

func (v *NullableFixedChargeFrequencyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFixedChargeFrequencyType(val *FixedChargeFrequencyType) *NullableFixedChargeFrequencyType {
	return &NullableFixedChargeFrequencyType{value: val, isSet: true}
}

func (v NullableFixedChargeFrequencyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFixedChargeFrequencyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
