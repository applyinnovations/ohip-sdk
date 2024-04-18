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

// AmountOrOffsetType Simple type for amount type.
type AmountOrOffsetType string

// List of amountOrOffsetType
const (
	AMOUNTOROFFSETTYPE_AMOUNT AmountOrOffsetType = "Amount"
	AMOUNTOROFFSETTYPE_OFFSET AmountOrOffsetType = "Offset"
)

// All allowed values of AmountOrOffsetType enum
var AllowedAmountOrOffsetTypeEnumValues = []AmountOrOffsetType{
	"Amount",
	"Offset",
}

func (v *AmountOrOffsetType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AmountOrOffsetType(value)
	for _, existing := range AllowedAmountOrOffsetTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AmountOrOffsetType", value)
}

// NewAmountOrOffsetTypeFromValue returns a pointer to a valid AmountOrOffsetType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAmountOrOffsetTypeFromValue(v string) (*AmountOrOffsetType, error) {
	ev := AmountOrOffsetType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AmountOrOffsetType: valid values are %v", v, AllowedAmountOrOffsetTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AmountOrOffsetType) IsValid() bool {
	for _, existing := range AllowedAmountOrOffsetTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to amountOrOffsetType value
func (v AmountOrOffsetType) Ptr() *AmountOrOffsetType {
	return &v
}

type NullableAmountOrOffsetType struct {
	value *AmountOrOffsetType
	isSet bool
}

func (v NullableAmountOrOffsetType) Get() *AmountOrOffsetType {
	return v.value
}

func (v *NullableAmountOrOffsetType) Set(val *AmountOrOffsetType) {
	v.value = val
	v.isSet = true
}

func (v NullableAmountOrOffsetType) IsSet() bool {
	return v.isSet
}

func (v *NullableAmountOrOffsetType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAmountOrOffsetType(val *AmountOrOffsetType) *NullableAmountOrOffsetType {
	return &NullableAmountOrOffsetType{value: val, isSet: true}
}

func (v NullableAmountOrOffsetType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAmountOrOffsetType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
