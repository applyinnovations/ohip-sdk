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

// CardReIssueType Request to re issue a new card.
type CardReIssueType string

// List of cardReIssueType
const (
	CARDREISSUETYPE_PENDING CardReIssueType = "Pending"
	CARDREISSUETYPE_NOT_APPLICABLE CardReIssueType = "NotApplicable"
	CARDREISSUETYPE_REQUESTED CardReIssueType = "Requested"
)

// All allowed values of CardReIssueType enum
var AllowedCardReIssueTypeEnumValues = []CardReIssueType{
	"Pending",
	"NotApplicable",
	"Requested",
}

func (v *CardReIssueType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CardReIssueType(value)
	for _, existing := range AllowedCardReIssueTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CardReIssueType", value)
}

// NewCardReIssueTypeFromValue returns a pointer to a valid CardReIssueType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCardReIssueTypeFromValue(v string) (*CardReIssueType, error) {
	ev := CardReIssueType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CardReIssueType: valid values are %v", v, AllowedCardReIssueTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CardReIssueType) IsValid() bool {
	for _, existing := range AllowedCardReIssueTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cardReIssueType value
func (v CardReIssueType) Ptr() *CardReIssueType {
	return &v
}

type NullableCardReIssueType struct {
	value *CardReIssueType
	isSet bool
}

func (v NullableCardReIssueType) Get() *CardReIssueType {
	return v.value
}

func (v *NullableCardReIssueType) Set(val *CardReIssueType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardReIssueType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardReIssueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardReIssueType(val *CardReIssueType) *NullableCardReIssueType {
	return &NullableCardReIssueType{value: val, isSet: true}
}

func (v NullableCardReIssueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardReIssueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

