/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
	"fmt"
)

// DepositType Enumeration Type of Deposit.
type DepositType string

// List of depositType
const (
	DEPOSITTYPE_FOLIOS DepositType = "Folios"
	DEPOSITTYPE_RECEIPTS DepositType = "Receipts"
	DEPOSITTYPE_NONE DepositType = "None"
)

// All allowed values of DepositType enum
var AllowedDepositTypeEnumValues = []DepositType{
	"Folios",
	"Receipts",
	"None",
}

func (v *DepositType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DepositType(value)
	for _, existing := range AllowedDepositTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DepositType", value)
}

// NewDepositTypeFromValue returns a pointer to a valid DepositType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDepositTypeFromValue(v string) (*DepositType, error) {
	ev := DepositType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DepositType: valid values are %v", v, AllowedDepositTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DepositType) IsValid() bool {
	for _, existing := range AllowedDepositTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to depositType value
func (v DepositType) Ptr() *DepositType {
	return &v
}

type NullableDepositType struct {
	value *DepositType
	isSet bool
}

func (v NullableDepositType) Get() *DepositType {
	return v.value
}

func (v *NullableDepositType) Set(val *DepositType) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositType) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositType(val *DepositType) *NullableDepositType {
	return &NullableDepositType{value: val, isSet: true}
}

func (v NullableDepositType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
