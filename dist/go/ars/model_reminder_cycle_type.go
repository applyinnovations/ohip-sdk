/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
	"fmt"
)

// ReminderCycleType The different types of Reminder Cycle calculation rules.
type ReminderCycleType string

// List of reminderCycleType
const (
	REMINDERCYCLETYPE_DAYS ReminderCycleType = "Days"
	REMINDERCYCLETYPE_END_OF_MONTH ReminderCycleType = "EndOfMonth"
)

// All allowed values of ReminderCycleType enum
var AllowedReminderCycleTypeEnumValues = []ReminderCycleType{
	"Days",
	"EndOfMonth",
}

func (v *ReminderCycleType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ReminderCycleType(value)
	for _, existing := range AllowedReminderCycleTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ReminderCycleType", value)
}

// NewReminderCycleTypeFromValue returns a pointer to a valid ReminderCycleType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewReminderCycleTypeFromValue(v string) (*ReminderCycleType, error) {
	ev := ReminderCycleType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ReminderCycleType: valid values are %v", v, AllowedReminderCycleTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ReminderCycleType) IsValid() bool {
	for _, existing := range AllowedReminderCycleTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to reminderCycleType value
func (v ReminderCycleType) Ptr() *ReminderCycleType {
	return &v
}

type NullableReminderCycleType struct {
	value *ReminderCycleType
	isSet bool
}

func (v NullableReminderCycleType) Get() *ReminderCycleType {
	return v.value
}

func (v *NullableReminderCycleType) Set(val *ReminderCycleType) {
	v.value = val
	v.isSet = true
}

func (v NullableReminderCycleType) IsSet() bool {
	return v.isSet
}

func (v *NullableReminderCycleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReminderCycleType(val *ReminderCycleType) *NullableReminderCycleType {
	return &NullableReminderCycleType{value: val, isSet: true}
}

func (v NullableReminderCycleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReminderCycleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
