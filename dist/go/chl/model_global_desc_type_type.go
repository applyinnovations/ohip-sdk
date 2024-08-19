/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
	"fmt"
)

// GlobalDescTypeType Either Room Type or Rate Plan Code
type GlobalDescTypeType string

// List of globalDescTypeType
const (
	GLOBALDESCTYPETYPE_ROOM_TYPE GlobalDescTypeType = "RoomType"
	GLOBALDESCTYPETYPE_RATE_PLAN GlobalDescTypeType = "RatePlan"
)

// All allowed values of GlobalDescTypeType enum
var AllowedGlobalDescTypeTypeEnumValues = []GlobalDescTypeType{
	"RoomType",
	"RatePlan",
}

func (v *GlobalDescTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := GlobalDescTypeType(value)
	for _, existing := range AllowedGlobalDescTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid GlobalDescTypeType", value)
}

// NewGlobalDescTypeTypeFromValue returns a pointer to a valid GlobalDescTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewGlobalDescTypeTypeFromValue(v string) (*GlobalDescTypeType, error) {
	ev := GlobalDescTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for GlobalDescTypeType: valid values are %v", v, AllowedGlobalDescTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v GlobalDescTypeType) IsValid() bool {
	for _, existing := range AllowedGlobalDescTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to globalDescTypeType value
func (v GlobalDescTypeType) Ptr() *GlobalDescTypeType {
	return &v
}

type NullableGlobalDescTypeType struct {
	value *GlobalDescTypeType
	isSet bool
}

func (v NullableGlobalDescTypeType) Get() *GlobalDescTypeType {
	return v.value
}

func (v *NullableGlobalDescTypeType) Set(val *GlobalDescTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableGlobalDescTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableGlobalDescTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGlobalDescTypeType(val *GlobalDescTypeType) *NullableGlobalDescTypeType {
	return &NullableGlobalDescTypeType{value: val, isSet: true}
}

func (v NullableGlobalDescTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGlobalDescTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

