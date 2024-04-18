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

// RoomRatingType Possible room rating values.
type RoomRatingType string

// List of roomRatingType
const (
	ROOMRATINGTYPE_MOST_DESIRABLE RoomRatingType = "MostDesirable"
	ROOMRATINGTYPE_DESIRABLE RoomRatingType = "Desirable"
	ROOMRATINGTYPE_SOMEWHAT_DESIRABLE RoomRatingType = "SomewhatDesirable"
	ROOMRATINGTYPE_LESS_DESIRABLE RoomRatingType = "LessDesirable"
	ROOMRATINGTYPE_LEAST_DESIRABLE RoomRatingType = "LeastDesirable"
	ROOMRATINGTYPE_NO_VALUE_DEFINED RoomRatingType = "NoValueDefined"
)

// All allowed values of RoomRatingType enum
var AllowedRoomRatingTypeEnumValues = []RoomRatingType{
	"MostDesirable",
	"Desirable",
	"SomewhatDesirable",
	"LessDesirable",
	"LeastDesirable",
	"NoValueDefined",
}

func (v *RoomRatingType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RoomRatingType(value)
	for _, existing := range AllowedRoomRatingTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RoomRatingType", value)
}

// NewRoomRatingTypeFromValue returns a pointer to a valid RoomRatingType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRoomRatingTypeFromValue(v string) (*RoomRatingType, error) {
	ev := RoomRatingType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RoomRatingType: valid values are %v", v, AllowedRoomRatingTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RoomRatingType) IsValid() bool {
	for _, existing := range AllowedRoomRatingTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to roomRatingType value
func (v RoomRatingType) Ptr() *RoomRatingType {
	return &v
}

type NullableRoomRatingType struct {
	value *RoomRatingType
	isSet bool
}

func (v NullableRoomRatingType) Get() *RoomRatingType {
	return v.value
}

func (v *NullableRoomRatingType) Set(val *RoomRatingType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRatingType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRatingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRatingType(val *RoomRatingType) *NullableRoomRatingType {
	return &NullableRoomRatingType{value: val, isSet: true}
}

func (v NullableRoomRatingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRatingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
