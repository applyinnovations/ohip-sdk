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

// EntityType Indicates the rule is based on Minutes associated with the charge.
type EntityType string

// List of entityType
const (
	ENTITYTYPE_THRESHOLD_COUNT EntityType = "ThresholdCount"
	ENTITYTYPE_THRESHOLD_QUANTITY EntityType = "ThresholdQuantity"
	ENTITYTYPE_THRESHOLD_MINUTES EntityType = "ThresholdMinutes"
)

// All allowed values of EntityType enum
var AllowedEntityTypeEnumValues = []EntityType{
	"ThresholdCount",
	"ThresholdQuantity",
	"ThresholdMinutes",
}

func (v *EntityType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := EntityType(value)
	for _, existing := range AllowedEntityTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid EntityType", value)
}

// NewEntityTypeFromValue returns a pointer to a valid EntityType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewEntityTypeFromValue(v string) (*EntityType, error) {
	ev := EntityType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for EntityType: valid values are %v", v, AllowedEntityTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v EntityType) IsValid() bool {
	for _, existing := range AllowedEntityTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to entityType value
func (v EntityType) Ptr() *EntityType {
	return &v
}

type NullableEntityType struct {
	value *EntityType
	isSet bool
}

func (v NullableEntityType) Get() *EntityType {
	return v.value
}

func (v *NullableEntityType) Set(val *EntityType) {
	v.value = val
	v.isSet = true
}

func (v NullableEntityType) IsSet() bool {
	return v.isSet
}

func (v *NullableEntityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEntityType(val *EntityType) *NullableEntityType {
	return &NullableEntityType{value: val, isSet: true}
}

func (v NullableEntityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEntityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

