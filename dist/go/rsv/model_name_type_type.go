/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
	"fmt"
)

// NameTypeType the model 'NameTypeType'
type NameTypeType string

// List of nameTypeType
const (
	NAMETYPETYPE_GUEST NameTypeType = "Guest"
	NAMETYPETYPE_COMPANY NameTypeType = "Company"
	NAMETYPETYPE_AGENT NameTypeType = "Agent"
	NAMETYPETYPE_CONTACT NameTypeType = "Contact"
	NAMETYPETYPE_SOURCE NameTypeType = "Source"
	NAMETYPETYPE_GROUP NameTypeType = "Group"
	NAMETYPETYPE_EMPLOYEE NameTypeType = "Employee"
	NAMETYPETYPE_HOTEL NameTypeType = "Hotel"
	NAMETYPETYPE_PURGE NameTypeType = "Purge"
)

// All allowed values of NameTypeType enum
var AllowedNameTypeTypeEnumValues = []NameTypeType{
	"Guest",
	"Company",
	"Agent",
	"Contact",
	"Source",
	"Group",
	"Employee",
	"Hotel",
	"Purge",
}

func (v *NameTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := NameTypeType(value)
	for _, existing := range AllowedNameTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid NameTypeType", value)
}

// NewNameTypeTypeFromValue returns a pointer to a valid NameTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewNameTypeTypeFromValue(v string) (*NameTypeType, error) {
	ev := NameTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for NameTypeType: valid values are %v", v, AllowedNameTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v NameTypeType) IsValid() bool {
	for _, existing := range AllowedNameTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to nameTypeType value
func (v NameTypeType) Ptr() *NameTypeType {
	return &v
}

type NullableNameTypeType struct {
	value *NameTypeType
	isSet bool
}

func (v NullableNameTypeType) Get() *NameTypeType {
	return v.value
}

func (v *NullableNameTypeType) Set(val *NameTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableNameTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableNameTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNameTypeType(val *NameTypeType) *NullableNameTypeType {
	return &NullableNameTypeType{value: val, isSet: true}
}

func (v NullableNameTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNameTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

