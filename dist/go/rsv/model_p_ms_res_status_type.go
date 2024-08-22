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

// PMSResStatusType This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment.
type PMSResStatusType string

// List of pMS_ResStatusType
const (
	PMSRESSTATUSTYPE_RESERVED PMSResStatusType = "Reserved"
	PMSRESSTATUSTYPE_REQUESTED PMSResStatusType = "Requested"
	PMSRESSTATUSTYPE_NO_SHOW PMSResStatusType = "NoShow"
	PMSRESSTATUSTYPE_CANCELLED PMSResStatusType = "Cancelled"
	PMSRESSTATUSTYPE_IN_HOUSE PMSResStatusType = "InHouse"
	PMSRESSTATUSTYPE_CHECKED_OUT PMSResStatusType = "CheckedOut"
	PMSRESSTATUSTYPE_WAITLISTED PMSResStatusType = "Waitlisted"
	PMSRESSTATUSTYPE_DUE_IN PMSResStatusType = "DueIn"
	PMSRESSTATUSTYPE_DUE_OUT PMSResStatusType = "DueOut"
	PMSRESSTATUSTYPE_WALKIN PMSResStatusType = "Walkin"
	PMSRESSTATUSTYPE_PENDING_CHECKOUT PMSResStatusType = "PendingCheckout"
)

// All allowed values of PMSResStatusType enum
var AllowedPMSResStatusTypeEnumValues = []PMSResStatusType{
	"Reserved",
	"Requested",
	"NoShow",
	"Cancelled",
	"InHouse",
	"CheckedOut",
	"Waitlisted",
	"DueIn",
	"DueOut",
	"Walkin",
	"PendingCheckout",
}

func (v *PMSResStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PMSResStatusType(value)
	for _, existing := range AllowedPMSResStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PMSResStatusType", value)
}

// NewPMSResStatusTypeFromValue returns a pointer to a valid PMSResStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPMSResStatusTypeFromValue(v string) (*PMSResStatusType, error) {
	ev := PMSResStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PMSResStatusType: valid values are %v", v, AllowedPMSResStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PMSResStatusType) IsValid() bool {
	for _, existing := range AllowedPMSResStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to pMS_ResStatusType value
func (v PMSResStatusType) Ptr() *PMSResStatusType {
	return &v
}

type NullablePMSResStatusType struct {
	value *PMSResStatusType
	isSet bool
}

func (v NullablePMSResStatusType) Get() *PMSResStatusType {
	return v.value
}

func (v *NullablePMSResStatusType) Set(val *PMSResStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullablePMSResStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullablePMSResStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePMSResStatusType(val *PMSResStatusType) *NullablePMSResStatusType {
	return &NullablePMSResStatusType{value: val, isSet: true}
}

func (v NullablePMSResStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePMSResStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

