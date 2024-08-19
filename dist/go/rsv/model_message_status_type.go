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

// MessageStatusType Status of the Message.
type MessageStatusType string

// List of messageStatusType
const (
	MESSAGESTATUSTYPE_MR MessageStatusType = "Mr"
	MESSAGESTATUSTYPE_NR MessageStatusType = "Nr"
)

// All allowed values of MessageStatusType enum
var AllowedMessageStatusTypeEnumValues = []MessageStatusType{
	"Mr",
	"Nr",
}

func (v *MessageStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MessageStatusType(value)
	for _, existing := range AllowedMessageStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MessageStatusType", value)
}

// NewMessageStatusTypeFromValue returns a pointer to a valid MessageStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMessageStatusTypeFromValue(v string) (*MessageStatusType, error) {
	ev := MessageStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MessageStatusType: valid values are %v", v, AllowedMessageStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MessageStatusType) IsValid() bool {
	for _, existing := range AllowedMessageStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to messageStatusType value
func (v MessageStatusType) Ptr() *MessageStatusType {
	return &v
}

type NullableMessageStatusType struct {
	value *MessageStatusType
	isSet bool
}

func (v NullableMessageStatusType) Get() *MessageStatusType {
	return v.value
}

func (v *NullableMessageStatusType) Set(val *MessageStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableMessageStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableMessageStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMessageStatusType(val *MessageStatusType) *NullableMessageStatusType {
	return &NullableMessageStatusType{value: val, isSet: true}
}

func (v NullableMessageStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMessageStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

