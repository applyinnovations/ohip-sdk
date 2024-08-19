/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// ReservationStatusEnumType Reservation Status Enum Type
type ReservationStatusEnumType string

// List of reservationStatusEnumType
const (
	RESERVATIONSTATUSENUMTYPE_DUE_IN ReservationStatusEnumType = "DueIn"
	RESERVATIONSTATUSENUMTYPE_DUE_OUT ReservationStatusEnumType = "DueOut"
	RESERVATIONSTATUSENUMTYPE_CHECKED_IN ReservationStatusEnumType = "CheckedIn"
	RESERVATIONSTATUSENUMTYPE_CHECKED_OUT ReservationStatusEnumType = "CheckedOut"
)

// All allowed values of ReservationStatusEnumType enum
var AllowedReservationStatusEnumTypeEnumValues = []ReservationStatusEnumType{
	"DueIn",
	"DueOut",
	"CheckedIn",
	"CheckedOut",
}

func (v *ReservationStatusEnumType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ReservationStatusEnumType(value)
	for _, existing := range AllowedReservationStatusEnumTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ReservationStatusEnumType", value)
}

// NewReservationStatusEnumTypeFromValue returns a pointer to a valid ReservationStatusEnumType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewReservationStatusEnumTypeFromValue(v string) (*ReservationStatusEnumType, error) {
	ev := ReservationStatusEnumType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ReservationStatusEnumType: valid values are %v", v, AllowedReservationStatusEnumTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ReservationStatusEnumType) IsValid() bool {
	for _, existing := range AllowedReservationStatusEnumTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to reservationStatusEnumType value
func (v ReservationStatusEnumType) Ptr() *ReservationStatusEnumType {
	return &v
}

type NullableReservationStatusEnumType struct {
	value *ReservationStatusEnumType
	isSet bool
}

func (v NullableReservationStatusEnumType) Get() *ReservationStatusEnumType {
	return v.value
}

func (v *NullableReservationStatusEnumType) Set(val *ReservationStatusEnumType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationStatusEnumType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationStatusEnumType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationStatusEnumType(val *ReservationStatusEnumType) *NullableReservationStatusEnumType {
	return &NullableReservationStatusEnumType{value: val, isSet: true}
}

func (v NullableReservationStatusEnumType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationStatusEnumType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

