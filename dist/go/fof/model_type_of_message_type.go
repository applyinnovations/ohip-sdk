/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// TypeOfMessageType The type of Message for Guest Messages.
type TypeOfMessageType string

// List of typeOfMessageType
const (
	TYPEOFMESSAGETYPE_TM TypeOfMessageType = "Tm"
	TYPEOFMESSAGETYPE_VM TypeOfMessageType = "Vm"
)

// All allowed values of TypeOfMessageType enum
var AllowedTypeOfMessageTypeEnumValues = []TypeOfMessageType{
	"Tm",
	"Vm",
}

func (v *TypeOfMessageType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TypeOfMessageType(value)
	for _, existing := range AllowedTypeOfMessageTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TypeOfMessageType", value)
}

// NewTypeOfMessageTypeFromValue returns a pointer to a valid TypeOfMessageType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTypeOfMessageTypeFromValue(v string) (*TypeOfMessageType, error) {
	ev := TypeOfMessageType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TypeOfMessageType: valid values are %v", v, AllowedTypeOfMessageTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TypeOfMessageType) IsValid() bool {
	for _, existing := range AllowedTypeOfMessageTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to typeOfMessageType value
func (v TypeOfMessageType) Ptr() *TypeOfMessageType {
	return &v
}

type NullableTypeOfMessageType struct {
	value *TypeOfMessageType
	isSet bool
}

func (v NullableTypeOfMessageType) Get() *TypeOfMessageType {
	return v.value
}

func (v *NullableTypeOfMessageType) Set(val *TypeOfMessageType) {
	v.value = val
	v.isSet = true
}

func (v NullableTypeOfMessageType) IsSet() bool {
	return v.isSet
}

func (v *NullableTypeOfMessageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTypeOfMessageType(val *TypeOfMessageType) *NullableTypeOfMessageType {
	return &NullableTypeOfMessageType{value: val, isSet: true}
}

func (v NullableTypeOfMessageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTypeOfMessageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

