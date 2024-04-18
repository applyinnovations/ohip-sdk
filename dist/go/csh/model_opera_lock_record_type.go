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

// OperaLockRecordType the model 'OperaLockRecordType'
type OperaLockRecordType string

// List of operaLockRecordType
const (
	OPERALOCKRECORDTYPE_RESERVATION OperaLockRecordType = "Reservation"
	OPERALOCKRECORDTYPE_CASHIER OperaLockRecordType = "Cashier"
)

// All allowed values of OperaLockRecordType enum
var AllowedOperaLockRecordTypeEnumValues = []OperaLockRecordType{
	"Reservation",
	"Cashier",
}

func (v *OperaLockRecordType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := OperaLockRecordType(value)
	for _, existing := range AllowedOperaLockRecordTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid OperaLockRecordType", value)
}

// NewOperaLockRecordTypeFromValue returns a pointer to a valid OperaLockRecordType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewOperaLockRecordTypeFromValue(v string) (*OperaLockRecordType, error) {
	ev := OperaLockRecordType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for OperaLockRecordType: valid values are %v", v, AllowedOperaLockRecordTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v OperaLockRecordType) IsValid() bool {
	for _, existing := range AllowedOperaLockRecordTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to operaLockRecordType value
func (v OperaLockRecordType) Ptr() *OperaLockRecordType {
	return &v
}

type NullableOperaLockRecordType struct {
	value *OperaLockRecordType
	isSet bool
}

func (v NullableOperaLockRecordType) Get() *OperaLockRecordType {
	return v.value
}

func (v *NullableOperaLockRecordType) Set(val *OperaLockRecordType) {
	v.value = val
	v.isSet = true
}

func (v NullableOperaLockRecordType) IsSet() bool {
	return v.isSet
}

func (v *NullableOperaLockRecordType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOperaLockRecordType(val *OperaLockRecordType) *NullableOperaLockRecordType {
	return &NullableOperaLockRecordType{value: val, isSet: true}
}

func (v NullableOperaLockRecordType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOperaLockRecordType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
