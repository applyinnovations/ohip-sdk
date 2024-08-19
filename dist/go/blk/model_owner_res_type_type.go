/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// OwnerResTypeType the model 'OwnerResTypeType'
type OwnerResTypeType string

// List of ownerResTypeType
const (
	OWNERRESTYPETYPE_OWNER OwnerResTypeType = "Owner"
	OWNERRESTYPETYPE_AUTHORIZED_USER OwnerResTypeType = "AuthorizedUser"
)

// All allowed values of OwnerResTypeType enum
var AllowedOwnerResTypeTypeEnumValues = []OwnerResTypeType{
	"Owner",
	"AuthorizedUser",
}

func (v *OwnerResTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := OwnerResTypeType(value)
	for _, existing := range AllowedOwnerResTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid OwnerResTypeType", value)
}

// NewOwnerResTypeTypeFromValue returns a pointer to a valid OwnerResTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewOwnerResTypeTypeFromValue(v string) (*OwnerResTypeType, error) {
	ev := OwnerResTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for OwnerResTypeType: valid values are %v", v, AllowedOwnerResTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v OwnerResTypeType) IsValid() bool {
	for _, existing := range AllowedOwnerResTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to ownerResTypeType value
func (v OwnerResTypeType) Ptr() *OwnerResTypeType {
	return &v
}

type NullableOwnerResTypeType struct {
	value *OwnerResTypeType
	isSet bool
}

func (v NullableOwnerResTypeType) Get() *OwnerResTypeType {
	return v.value
}

func (v *NullableOwnerResTypeType) Set(val *OwnerResTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableOwnerResTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableOwnerResTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOwnerResTypeType(val *OwnerResTypeType) *NullableOwnerResTypeType {
	return &NullableOwnerResTypeType{value: val, isSet: true}
}

func (v NullableOwnerResTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOwnerResTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

