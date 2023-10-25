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

// AwardStatusType Indicates that certificate is in use.
type AwardStatusType string

// List of awardStatusType
const (
	AWARDSTATUSTYPE_AVAILABLE AwardStatusType = "Available"
	AWARDSTATUSTYPE_NOT_AVAILABLE AwardStatusType = "NotAvailable"
	AWARDSTATUSTYPE_IN_USE AwardStatusType = "InUse"
)

// All allowed values of AwardStatusType enum
var AllowedAwardStatusTypeEnumValues = []AwardStatusType{
	"Available",
	"NotAvailable",
	"InUse",
}

func (v *AwardStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AwardStatusType(value)
	for _, existing := range AllowedAwardStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AwardStatusType", value)
}

// NewAwardStatusTypeFromValue returns a pointer to a valid AwardStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAwardStatusTypeFromValue(v string) (*AwardStatusType, error) {
	ev := AwardStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AwardStatusType: valid values are %v", v, AllowedAwardStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AwardStatusType) IsValid() bool {
	for _, existing := range AllowedAwardStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to awardStatusType value
func (v AwardStatusType) Ptr() *AwardStatusType {
	return &v
}

type NullableAwardStatusType struct {
	value *AwardStatusType
	isSet bool
}

func (v NullableAwardStatusType) Get() *AwardStatusType {
	return v.value
}

func (v *NullableAwardStatusType) Set(val *AwardStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardStatusType(val *AwardStatusType) *NullableAwardStatusType {
	return &NullableAwardStatusType{value: val, isSet: true}
}

func (v NullableAwardStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

