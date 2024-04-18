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

// DowngradeType Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace.
type DowngradeType string

// List of downgradeType
const (
	DOWNGRADETYPE_GRACE DowngradeType = "Grace"
	DOWNGRADETYPE_NEVER DowngradeType = "Never"
	DOWNGRADETYPE_PERIOD DowngradeType = "Period"
)

// All allowed values of DowngradeType enum
var AllowedDowngradeTypeEnumValues = []DowngradeType{
	"Grace",
	"Never",
	"Period",
}

func (v *DowngradeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DowngradeType(value)
	for _, existing := range AllowedDowngradeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DowngradeType", value)
}

// NewDowngradeTypeFromValue returns a pointer to a valid DowngradeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDowngradeTypeFromValue(v string) (*DowngradeType, error) {
	ev := DowngradeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DowngradeType: valid values are %v", v, AllowedDowngradeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DowngradeType) IsValid() bool {
	for _, existing := range AllowedDowngradeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to downgradeType value
func (v DowngradeType) Ptr() *DowngradeType {
	return &v
}

type NullableDowngradeType struct {
	value *DowngradeType
	isSet bool
}

func (v NullableDowngradeType) Get() *DowngradeType {
	return v.value
}

func (v *NullableDowngradeType) Set(val *DowngradeType) {
	v.value = val
	v.isSet = true
}

func (v NullableDowngradeType) IsSet() bool {
	return v.isSet
}

func (v *NullableDowngradeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDowngradeType(val *DowngradeType) *NullableDowngradeType {
	return &NullableDowngradeType{value: val, isSet: true}
}

func (v NullableDowngradeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDowngradeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
