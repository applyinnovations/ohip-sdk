/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
	"fmt"
)

// RoomSpecialRatingType Possible Room special rating values.
type RoomSpecialRatingType string

// List of roomSpecialRatingType
const (
	ROOMSPECIALRATINGTYPE_MOST_IMPORTANT RoomSpecialRatingType = "MostImportant"
	ROOMSPECIALRATINGTYPE_IMPORTANT RoomSpecialRatingType = "Important"
	ROOMSPECIALRATINGTYPE_SOMEWHAT_IMPORTANT RoomSpecialRatingType = "SomewhatImportant"
	ROOMSPECIALRATINGTYPE_LESS_IMPORTANT RoomSpecialRatingType = "LessImportant"
	ROOMSPECIALRATINGTYPE_LEAST_IMPORTANT RoomSpecialRatingType = "LeastImportant"
	ROOMSPECIALRATINGTYPE_NO_VALUE_SET RoomSpecialRatingType = "NoValueSet"
)

// All allowed values of RoomSpecialRatingType enum
var AllowedRoomSpecialRatingTypeEnumValues = []RoomSpecialRatingType{
	"MostImportant",
	"Important",
	"SomewhatImportant",
	"LessImportant",
	"LeastImportant",
	"NoValueSet",
}

func (v *RoomSpecialRatingType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RoomSpecialRatingType(value)
	for _, existing := range AllowedRoomSpecialRatingTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RoomSpecialRatingType", value)
}

// NewRoomSpecialRatingTypeFromValue returns a pointer to a valid RoomSpecialRatingType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRoomSpecialRatingTypeFromValue(v string) (*RoomSpecialRatingType, error) {
	ev := RoomSpecialRatingType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RoomSpecialRatingType: valid values are %v", v, AllowedRoomSpecialRatingTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RoomSpecialRatingType) IsValid() bool {
	for _, existing := range AllowedRoomSpecialRatingTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to roomSpecialRatingType value
func (v RoomSpecialRatingType) Ptr() *RoomSpecialRatingType {
	return &v
}

type NullableRoomSpecialRatingType struct {
	value *RoomSpecialRatingType
	isSet bool
}

func (v NullableRoomSpecialRatingType) Get() *RoomSpecialRatingType {
	return v.value
}

func (v *NullableRoomSpecialRatingType) Set(val *RoomSpecialRatingType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomSpecialRatingType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomSpecialRatingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomSpecialRatingType(val *RoomSpecialRatingType) *NullableRoomSpecialRatingType {
	return &NullableRoomSpecialRatingType{value: val, isSet: true}
}

func (v NullableRoomSpecialRatingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomSpecialRatingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

