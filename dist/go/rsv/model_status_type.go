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

// StatusType Status of the batch process.
type StatusType string

// List of statusType
const (
	STATUSTYPE_SUCCESS StatusType = "Success"
	STATUSTYPE_ERROR StatusType = "Error"
	STATUSTYPE_RUNNING StatusType = "Running"
	STATUSTYPE_STOPPED StatusType = "Stopped"
	STATUSTYPE_WARNING StatusType = "Warning"
	STATUSTYPE_FAILED StatusType = "Failed"
	STATUSTYPE_STARTED StatusType = "Started"
	STATUSTYPE_COMPLETED_WITH_LOGS StatusType = "CompletedWithLogs"
)

// All allowed values of StatusType enum
var AllowedStatusTypeEnumValues = []StatusType{
	"Success",
	"Error",
	"Running",
	"Stopped",
	"Warning",
	"Failed",
	"Started",
	"CompletedWithLogs",
}

func (v *StatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatusType(value)
	for _, existing := range AllowedStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatusType", value)
}

// NewStatusTypeFromValue returns a pointer to a valid StatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatusTypeFromValue(v string) (*StatusType, error) {
	ev := StatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatusType: valid values are %v", v, AllowedStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatusType) IsValid() bool {
	for _, existing := range AllowedStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to statusType value
func (v StatusType) Ptr() *StatusType {
	return &v
}

type NullableStatusType struct {
	value *StatusType
	isSet bool
}

func (v NullableStatusType) Get() *StatusType {
	return v.value
}

func (v *NullableStatusType) Set(val *StatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatusType(val *StatusType) *NullableStatusType {
	return &NullableStatusType{value: val, isSet: true}
}

func (v NullableStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

