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

// ExchangePostingType Fixed at Block.
type ExchangePostingType string

// List of exchangePostingType
const (
	EXCHANGEPOSTINGTYPE_FIXED_AT_CHECK_IN ExchangePostingType = "FixedAtCheckIn"
	EXCHANGEPOSTINGTYPE_FIXED_AT_RESERVATION ExchangePostingType = "FixedAtReservation"
	EXCHANGEPOSTINGTYPE_CURRENT_DATE ExchangePostingType = "CurrentDate"
	EXCHANGEPOSTINGTYPE_FIXED_AT_BLOCK ExchangePostingType = "FixedAtBlock"
)

// All allowed values of ExchangePostingType enum
var AllowedExchangePostingTypeEnumValues = []ExchangePostingType{
	"FixedAtCheckIn",
	"FixedAtReservation",
	"CurrentDate",
	"FixedAtBlock",
}

func (v *ExchangePostingType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ExchangePostingType(value)
	for _, existing := range AllowedExchangePostingTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ExchangePostingType", value)
}

// NewExchangePostingTypeFromValue returns a pointer to a valid ExchangePostingType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewExchangePostingTypeFromValue(v string) (*ExchangePostingType, error) {
	ev := ExchangePostingType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ExchangePostingType: valid values are %v", v, AllowedExchangePostingTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ExchangePostingType) IsValid() bool {
	for _, existing := range AllowedExchangePostingTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to exchangePostingType value
func (v ExchangePostingType) Ptr() *ExchangePostingType {
	return &v
}

type NullableExchangePostingType struct {
	value *ExchangePostingType
	isSet bool
}

func (v NullableExchangePostingType) Get() *ExchangePostingType {
	return v.value
}

func (v *NullableExchangePostingType) Set(val *ExchangePostingType) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangePostingType) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangePostingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangePostingType(val *ExchangePostingType) *NullableExchangePostingType {
	return &NullableExchangePostingType{value: val, isSet: true}
}

func (v NullableExchangePostingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangePostingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
