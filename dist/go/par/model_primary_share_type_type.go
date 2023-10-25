/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
	"fmt"
)

// PrimaryShareTypeType the model 'PrimaryShareTypeType'
type PrimaryShareTypeType string

// List of primaryShareTypeType
const (
	PRIMARYSHARETYPETYPE_PRIMARY PrimaryShareTypeType = "Primary"
	PRIMARYSHARETYPETYPE_NON_PRIMARY PrimaryShareTypeType = "NonPrimary"
)

// All allowed values of PrimaryShareTypeType enum
var AllowedPrimaryShareTypeTypeEnumValues = []PrimaryShareTypeType{
	"Primary",
	"NonPrimary",
}

func (v *PrimaryShareTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PrimaryShareTypeType(value)
	for _, existing := range AllowedPrimaryShareTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PrimaryShareTypeType", value)
}

// NewPrimaryShareTypeTypeFromValue returns a pointer to a valid PrimaryShareTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPrimaryShareTypeTypeFromValue(v string) (*PrimaryShareTypeType, error) {
	ev := PrimaryShareTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PrimaryShareTypeType: valid values are %v", v, AllowedPrimaryShareTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PrimaryShareTypeType) IsValid() bool {
	for _, existing := range AllowedPrimaryShareTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to primaryShareTypeType value
func (v PrimaryShareTypeType) Ptr() *PrimaryShareTypeType {
	return &v
}

type NullablePrimaryShareTypeType struct {
	value *PrimaryShareTypeType
	isSet bool
}

func (v NullablePrimaryShareTypeType) Get() *PrimaryShareTypeType {
	return v.value
}

func (v *NullablePrimaryShareTypeType) Set(val *PrimaryShareTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrimaryShareTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrimaryShareTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrimaryShareTypeType(val *PrimaryShareTypeType) *NullablePrimaryShareTypeType {
	return &NullablePrimaryShareTypeType{value: val, isSet: true}
}

func (v NullablePrimaryShareTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrimaryShareTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

