/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
	"fmt"
)

// DepositMaturityPreferenceType Fixed values for Deposite Maturity Preference affecting the rate code
type DepositMaturityPreferenceType string

// List of depositMaturityPreferenceType
const (
	DEPOSITMATURITYPREFERENCETYPE_CHECK_IN DepositMaturityPreferenceType = "CheckIn"
	DEPOSITMATURITYPREFERENCETYPE_LAST_STAY_NIGHT DepositMaturityPreferenceType = "LastStayNight"
	DEPOSITMATURITYPREFERENCETYPE_LAST_DAY_ADV_DEPOSIT DepositMaturityPreferenceType = "LastDayAdvDeposit"
)

// All allowed values of DepositMaturityPreferenceType enum
var AllowedDepositMaturityPreferenceTypeEnumValues = []DepositMaturityPreferenceType{
	"CheckIn",
	"LastStayNight",
	"LastDayAdvDeposit",
}

func (v *DepositMaturityPreferenceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DepositMaturityPreferenceType(value)
	for _, existing := range AllowedDepositMaturityPreferenceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DepositMaturityPreferenceType", value)
}

// NewDepositMaturityPreferenceTypeFromValue returns a pointer to a valid DepositMaturityPreferenceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDepositMaturityPreferenceTypeFromValue(v string) (*DepositMaturityPreferenceType, error) {
	ev := DepositMaturityPreferenceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DepositMaturityPreferenceType: valid values are %v", v, AllowedDepositMaturityPreferenceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DepositMaturityPreferenceType) IsValid() bool {
	for _, existing := range AllowedDepositMaturityPreferenceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to depositMaturityPreferenceType value
func (v DepositMaturityPreferenceType) Ptr() *DepositMaturityPreferenceType {
	return &v
}

type NullableDepositMaturityPreferenceType struct {
	value *DepositMaturityPreferenceType
	isSet bool
}

func (v NullableDepositMaturityPreferenceType) Get() *DepositMaturityPreferenceType {
	return v.value
}

func (v *NullableDepositMaturityPreferenceType) Set(val *DepositMaturityPreferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositMaturityPreferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositMaturityPreferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositMaturityPreferenceType(val *DepositMaturityPreferenceType) *NullableDepositMaturityPreferenceType {
	return &NullableDepositMaturityPreferenceType{value: val, isSet: true}
}

func (v NullableDepositMaturityPreferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositMaturityPreferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

