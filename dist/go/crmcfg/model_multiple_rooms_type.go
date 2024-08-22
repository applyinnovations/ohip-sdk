/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
	"fmt"
)

// MultipleRoomsType Exception rule for 10 Rooms.
type MultipleRoomsType string

// List of multipleRoomsType
const (
	MULTIPLEROOMSTYPE_TWO MultipleRoomsType = "Two"
	MULTIPLEROOMSTYPE_THREE MultipleRoomsType = "Three"
	MULTIPLEROOMSTYPE_FOUR MultipleRoomsType = "Four"
	MULTIPLEROOMSTYPE_FIVE MultipleRoomsType = "Five"
	MULTIPLEROOMSTYPE_SIX MultipleRoomsType = "Six"
	MULTIPLEROOMSTYPE_SEVEN MultipleRoomsType = "Seven"
	MULTIPLEROOMSTYPE_EIGHT MultipleRoomsType = "Eight"
	MULTIPLEROOMSTYPE_NINE MultipleRoomsType = "Nine"
	MULTIPLEROOMSTYPE_TEN MultipleRoomsType = "Ten"
)

// All allowed values of MultipleRoomsType enum
var AllowedMultipleRoomsTypeEnumValues = []MultipleRoomsType{
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
}

func (v *MultipleRoomsType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MultipleRoomsType(value)
	for _, existing := range AllowedMultipleRoomsTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MultipleRoomsType", value)
}

// NewMultipleRoomsTypeFromValue returns a pointer to a valid MultipleRoomsType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMultipleRoomsTypeFromValue(v string) (*MultipleRoomsType, error) {
	ev := MultipleRoomsType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MultipleRoomsType: valid values are %v", v, AllowedMultipleRoomsTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MultipleRoomsType) IsValid() bool {
	for _, existing := range AllowedMultipleRoomsTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to multipleRoomsType value
func (v MultipleRoomsType) Ptr() *MultipleRoomsType {
	return &v
}

type NullableMultipleRoomsType struct {
	value *MultipleRoomsType
	isSet bool
}

func (v NullableMultipleRoomsType) Get() *MultipleRoomsType {
	return v.value
}

func (v *NullableMultipleRoomsType) Set(val *MultipleRoomsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMultipleRoomsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMultipleRoomsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMultipleRoomsType(val *MultipleRoomsType) *NullableMultipleRoomsType {
	return &NullableMultipleRoomsType{value: val, isSet: true}
}

func (v NullableMultipleRoomsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMultipleRoomsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

