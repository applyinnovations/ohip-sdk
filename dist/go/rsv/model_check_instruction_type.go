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

// CheckInstructionType Simple type that corresponds to check reservation instructions.
type CheckInstructionType string

// List of checkInstructionType
const (
	CHECKINSTRUCTIONTYPE_HAS_DEPOSIT_POLICIES CheckInstructionType = "HasDepositPolicies"
	CHECKINSTRUCTIONTYPE_HAS_CANCELLATION_POLICIES CheckInstructionType = "HasCancellationPolicies"
)

// All allowed values of CheckInstructionType enum
var AllowedCheckInstructionTypeEnumValues = []CheckInstructionType{
	"HasDepositPolicies",
	"HasCancellationPolicies",
}

func (v *CheckInstructionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CheckInstructionType(value)
	for _, existing := range AllowedCheckInstructionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CheckInstructionType", value)
}

// NewCheckInstructionTypeFromValue returns a pointer to a valid CheckInstructionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCheckInstructionTypeFromValue(v string) (*CheckInstructionType, error) {
	ev := CheckInstructionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CheckInstructionType: valid values are %v", v, AllowedCheckInstructionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CheckInstructionType) IsValid() bool {
	for _, existing := range AllowedCheckInstructionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to checkInstructionType value
func (v CheckInstructionType) Ptr() *CheckInstructionType {
	return &v
}

type NullableCheckInstructionType struct {
	value *CheckInstructionType
	isSet bool
}

func (v NullableCheckInstructionType) Get() *CheckInstructionType {
	return v.value
}

func (v *NullableCheckInstructionType) Set(val *CheckInstructionType) {
	v.value = val
	v.isSet = true
}

func (v NullableCheckInstructionType) IsSet() bool {
	return v.isSet
}

func (v *NullableCheckInstructionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCheckInstructionType(val *CheckInstructionType) *NullableCheckInstructionType {
	return &NullableCheckInstructionType{value: val, isSet: true}
}

func (v NullableCheckInstructionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCheckInstructionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
