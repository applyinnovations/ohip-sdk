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

// HotelInterfaceStatusType Status of the Hotel Interface either STOPPED or RUNNING.
type HotelInterfaceStatusType string

// List of hotelInterfaceStatusType
const (
	HOTELINTERFACESTATUSTYPE_STOPPED HotelInterfaceStatusType = "Stopped"
	HOTELINTERFACESTATUSTYPE_RUNNING HotelInterfaceStatusType = "Running"
	HOTELINTERFACESTATUSTYPE_WAITING HotelInterfaceStatusType = "Waiting"
	HOTELINTERFACESTATUSTYPE_STOP_INITIATED HotelInterfaceStatusType = "StopInitiated"
	HOTELINTERFACESTATUSTYPE_START_INITIATED HotelInterfaceStatusType = "StartInitiated"
	HOTELINTERFACESTATUSTYPE_REBOOT_INITIATED HotelInterfaceStatusType = "RebootInitiated"
	HOTELINTERFACESTATUSTYPE_OTHER HotelInterfaceStatusType = "Other"
)

// All allowed values of HotelInterfaceStatusType enum
var AllowedHotelInterfaceStatusTypeEnumValues = []HotelInterfaceStatusType{
	"Stopped",
	"Running",
	"Waiting",
	"StopInitiated",
	"StartInitiated",
	"RebootInitiated",
	"Other",
}

func (v *HotelInterfaceStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := HotelInterfaceStatusType(value)
	for _, existing := range AllowedHotelInterfaceStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid HotelInterfaceStatusType", value)
}

// NewHotelInterfaceStatusTypeFromValue returns a pointer to a valid HotelInterfaceStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewHotelInterfaceStatusTypeFromValue(v string) (*HotelInterfaceStatusType, error) {
	ev := HotelInterfaceStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for HotelInterfaceStatusType: valid values are %v", v, AllowedHotelInterfaceStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v HotelInterfaceStatusType) IsValid() bool {
	for _, existing := range AllowedHotelInterfaceStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to hotelInterfaceStatusType value
func (v HotelInterfaceStatusType) Ptr() *HotelInterfaceStatusType {
	return &v
}

type NullableHotelInterfaceStatusType struct {
	value *HotelInterfaceStatusType
	isSet bool
}

func (v NullableHotelInterfaceStatusType) Get() *HotelInterfaceStatusType {
	return v.value
}

func (v *NullableHotelInterfaceStatusType) Set(val *HotelInterfaceStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInterfaceStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInterfaceStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInterfaceStatusType(val *HotelInterfaceStatusType) *NullableHotelInterfaceStatusType {
	return &NullableHotelInterfaceStatusType{value: val, isSet: true}
}

func (v NullableHotelInterfaceStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInterfaceStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

