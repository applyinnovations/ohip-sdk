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

// PersonNameTypeType Person's name in an external system.
type PersonNameTypeType string

// List of personNameTypeType
const (
	PERSONNAMETYPETYPE_PRIMARY PersonNameTypeType = "Primary"
	PERSONNAMETYPETYPE_ALTERNATE PersonNameTypeType = "Alternate"
	PERSONNAMETYPETYPE_INCOGNITO PersonNameTypeType = "Incognito"
	PERSONNAMETYPETYPE_EXTERNAL PersonNameTypeType = "External"
	PERSONNAMETYPETYPE_PHONETIC PersonNameTypeType = "Phonetic"
)

// All allowed values of PersonNameTypeType enum
var AllowedPersonNameTypeTypeEnumValues = []PersonNameTypeType{
	"Primary",
	"Alternate",
	"Incognito",
	"External",
	"Phonetic",
}

func (v *PersonNameTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PersonNameTypeType(value)
	for _, existing := range AllowedPersonNameTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PersonNameTypeType", value)
}

// NewPersonNameTypeTypeFromValue returns a pointer to a valid PersonNameTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPersonNameTypeTypeFromValue(v string) (*PersonNameTypeType, error) {
	ev := PersonNameTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PersonNameTypeType: valid values are %v", v, AllowedPersonNameTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PersonNameTypeType) IsValid() bool {
	for _, existing := range AllowedPersonNameTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to personNameTypeType value
func (v PersonNameTypeType) Ptr() *PersonNameTypeType {
	return &v
}

type NullablePersonNameTypeType struct {
	value *PersonNameTypeType
	isSet bool
}

func (v NullablePersonNameTypeType) Get() *PersonNameTypeType {
	return v.value
}

func (v *NullablePersonNameTypeType) Set(val *PersonNameTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullablePersonNameTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullablePersonNameTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePersonNameTypeType(val *PersonNameTypeType) *NullablePersonNameTypeType {
	return &NullablePersonNameTypeType{value: val, isSet: true}
}

func (v NullablePersonNameTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePersonNameTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

