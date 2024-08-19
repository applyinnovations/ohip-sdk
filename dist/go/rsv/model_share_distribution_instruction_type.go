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

// ShareDistributionInstructionType The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations.
type ShareDistributionInstructionType string

// List of shareDistributionInstructionType
const (
	SHAREDISTRIBUTIONINSTRUCTIONTYPE_FULL ShareDistributionInstructionType = "Full"
	SHAREDISTRIBUTIONINSTRUCTIONTYPE_ENTIRE ShareDistributionInstructionType = "Entire"
	SHAREDISTRIBUTIONINSTRUCTIONTYPE_SPLIT ShareDistributionInstructionType = "Split"
	SHAREDISTRIBUTIONINSTRUCTIONTYPE_CUSTOM_SPLIT ShareDistributionInstructionType = "CustomSplit"
)

// All allowed values of ShareDistributionInstructionType enum
var AllowedShareDistributionInstructionTypeEnumValues = []ShareDistributionInstructionType{
	"Full",
	"Entire",
	"Split",
	"CustomSplit",
}

func (v *ShareDistributionInstructionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ShareDistributionInstructionType(value)
	for _, existing := range AllowedShareDistributionInstructionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ShareDistributionInstructionType", value)
}

// NewShareDistributionInstructionTypeFromValue returns a pointer to a valid ShareDistributionInstructionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewShareDistributionInstructionTypeFromValue(v string) (*ShareDistributionInstructionType, error) {
	ev := ShareDistributionInstructionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ShareDistributionInstructionType: valid values are %v", v, AllowedShareDistributionInstructionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ShareDistributionInstructionType) IsValid() bool {
	for _, existing := range AllowedShareDistributionInstructionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to shareDistributionInstructionType value
func (v ShareDistributionInstructionType) Ptr() *ShareDistributionInstructionType {
	return &v
}

type NullableShareDistributionInstructionType struct {
	value *ShareDistributionInstructionType
	isSet bool
}

func (v NullableShareDistributionInstructionType) Get() *ShareDistributionInstructionType {
	return v.value
}

func (v *NullableShareDistributionInstructionType) Set(val *ShareDistributionInstructionType) {
	v.value = val
	v.isSet = true
}

func (v NullableShareDistributionInstructionType) IsSet() bool {
	return v.isSet
}

func (v *NullableShareDistributionInstructionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableShareDistributionInstructionType(val *ShareDistributionInstructionType) *NullableShareDistributionInstructionType {
	return &NullableShareDistributionInstructionType{value: val, isSet: true}
}

func (v NullableShareDistributionInstructionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableShareDistributionInstructionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

