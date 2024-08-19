/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

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

